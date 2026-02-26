"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MeteorsProps {
    number?: number;
    className?: string;
}

interface MeteorStyle {
    left: string;
    animationDelay: string;
    animationDuration: string;
}

export const Meteors = ({ number = 20, className }: MeteorsProps) => {
    const [meteors, setMeteors] = useState<MeteorStyle[]>([]);

    useEffect(() => {
        const styles: MeteorStyle[] = [...new Array<unknown>(number)].map(() => ({
            left: Math.floor(Math.random() * 100) + "%",
            animationDelay: Math.random() * 1 + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
        }));
        // Using queueMicrotask to move state update out of effect body
        queueMicrotask(() => setMeteors(styles));
    }, [number]);

    return (
        <>
            {meteors.map((style, idx) => (
                <span
                    key={idx}
                    className={cn(
                        "pointer-events-none absolute left-1/2 top-0 h-0.5 w-0.5 rotate-[215deg] animate-meteor opacity-0",
                        "bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
                        "dark:bg-slate-300 dark:shadow-[0_0_0_1px_#ffffff10]",
                        className
                    )}
                    style={{
                        top: -5,
                        left: style.left,
                        animationDelay: style.animationDelay,
                        animationDuration: style.animationDuration,
                    }}
                >
                    {/* Meteor Tail */}
                    <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent dark:from-slate-300" />
                </span>
            ))}
        </>
    );
};

export default Meteors;
