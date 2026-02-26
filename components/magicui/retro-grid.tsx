import { cn } from "@/lib/utils";

export default function RetroGrid({
    className,
    angle = 65,
}: {
    className?: string;
    angle?: number;
}) {
    return (
        <div
            className={cn(
                "pointer-events-none absolute inset-0 overflow-hidden [perspective:200px]",
                className,
            )}
            style={{ "--grid-angle": `${angle}deg` } as React.CSSProperties}
        >
            {/* Grid */}
            <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
                <div
                    className={cn(
                        "animate-grid",
                        "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]",
                        // Light Styles - darker lines for better visibility
                        "[background-image:linear-gradient(to_right,rgba(0,0,0,0.15)_2px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.15)_2px,transparent_0)]",
                        // Dark styles - brighter lines for better visibility
                        "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.15)_2px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.15)_2px,transparent_0)]",
                    )}
                />
            </div>

            {/* Background Gradient - stronger fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-black dark:via-black/50" />
        </div>
    );
}
