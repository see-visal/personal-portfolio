"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);

    // Particle System Configuration
    const particles = useRef<Array<{
        x: number;
        y: number;
        vx: number;
        vy: number;
        life: number;
        color: string;
        size: number;
    }>>([]);

    const mouseRef = useRef({ x: 0, y: 0 });
    const lastMouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const onMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
            if (cursorDotRef.current) {
                cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
            }
        };
        window.addEventListener("mousemove", onMouseMove);

        const animate = () => {
            if (!ctx || !canvas) return;

            // Clear & Setup
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = "lighter";

            // Spawn Particles
            const dx = mouseRef.current.x - lastMouseRef.current.x;
            const dy = mouseRef.current.y - lastMouseRef.current.y;
            const speed = Math.sqrt(dx * dx + dy * dy);

            if (speed > 0) {
                // Reduce count slightly to prevent too many lines lagging
                const count = Math.min(speed * 0.4, 4);
                for (let i = 0; i < count; i++) {
                    const hue = 250 + Math.random() * 70; // Purple/Pink/Blue
                    particles.current.push({
                        x: mouseRef.current.x + (Math.random() - 0.5) * 5,
                        y: mouseRef.current.y + (Math.random() - 0.5) * 5,
                        vx: (Math.random() - 0.5) * 1.5,
                        vy: (Math.random() - 0.5) * 1.5,
                        life: 1.0,
                        color: `hsla(${hue}, 90%, 60%,`,
                        size: Math.random() * 3 + 1
                    });
                }
            }
            lastMouseRef.current = { ...mouseRef.current };

            // Update & Draw Particles + Lines
            for (let i = particles.current.length - 1; i >= 0; i--) {
                const p = particles.current[i];
                p.life -= 0.015; // Slower decay for lines to be visible
                p.x += p.vx;
                p.y += p.vy;

                if (p.life <= 0) {
                    particles.current.splice(i, 1);
                    continue;
                }

                // Draw Particle Glow
                const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
                gradient.addColorStop(0, p.color + p.life + ")");
                gradient.addColorStop(1, p.color + "0)");
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
                ctx.fill();

                // Draw Connecting Lines
                // Connect this particle to others nearby
                // We only check a subset (e.g., recent 20) to keep performance high
                for (let j = i - 1; j >= Math.max(0, i - 15); j--) {
                    const p2 = particles.current[j];
                    const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

                    // Connect if close enough (< 60px)
                    if (dist < 60) {
                        ctx.beginPath();
                        // Use Dynamic Color matching the particle's hue (Blue/Violet/Purple)
                        // This makes lines match the specific particle's color
                        ctx.strokeStyle = p.color + p.life * 0.4 + ")";
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                className="pointer-events-none fixed inset-0 z-50 hidden md:block"
                style={{ width: "100%", height: "100%" }}
            />
            <div
                ref={cursorDotRef}
                className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-2 w-2 rounded-full bg-white shadow-[0_0_10px_white] mix-blend-screen md:block"
                style={{ transform: "translate(-50%, -50%)" }}
            />
        </>
    );
}
