"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface DigitalRainProps {
    number?: number;
    className?: string;
    lineColor?: string;
}

interface DropStyle {
    left: string;
    animationDelay: string;
    animationDuration: string;
    height: string;
}

export const DigitalRain = ({ number = 30, className }: DigitalRainProps) => {
    const [drops, setDrops] = useState<DropStyle[]>([]);

    useEffect(() => {
        const styles: DropStyle[] = [...new Array<unknown>(number)].map(() => ({
            left: Math.floor(Math.random() * 100) + "%",
            animationDelay: Math.random() * 2 + "s",
            animationDuration: Math.floor(Math.random() * 3 + 2) + "s",
            height: Math.floor(Math.random() * 100 + 100) + "px",
        }));
        // Using queueMicrotask to move state update out of effect body
        queueMicrotask(() => setDrops(styles));
    }, [number]);

    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
            {/* Background Vertical Stripes Pattern */}
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:40px_100%]"></div>

            {drops.map((style, idx) => (
                <span
                    key={idx}
                    className={cn(
                        "pointer-events-none absolute top-0 w-[2px] animate-digital-rain opacity-0",
                        "bg-gradient-to-b from-transparent via-blue-500 to-violet-500",
                        "shadow-[0_0_10px_2px_rgba(139,92,246,0.3)]"
                    )}
                    style={{
                        left: style.left,
                        height: style.height,
                        animationDelay: style.animationDelay,
                        animationDuration: style.animationDuration,
                    }}
                />
            ))}
        </div>
    );
};

export default DigitalRain;
