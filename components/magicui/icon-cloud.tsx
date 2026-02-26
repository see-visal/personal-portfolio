"use client";

import { useMemo, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
    Cloud,
    ICloud,
    renderSimpleIcon,
    SimpleIcon,
} from "react-icon-cloud";
import * as allIcons from "simple-icons";

export const cloudProps: Omit<ICloud, "children"> = {
    containerProps: {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingTop: 40,
        },
    },
    options: {
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageScale: 2,
        activeCursor: "default",
        tooltip: "native",
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: "#0000",
        maxSpeed: 0.04,
        minSpeed: 0.02,
    },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
    const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
    const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
    const minContrastRatio = theme === "dark" ? 2 : 1.2;

    return renderSimpleIcon({
        icon,
        bgHex,
        fallbackHex,
        minContrastRatio,
        size: 42,
        aProps: {
            href: undefined,
            target: undefined,
            rel: undefined,
            onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
        },
    });
};

export type DynamicCloudProps = {
    iconSlugs: string[];
};

// Convert a slug (e.g. "html5") to the simple-icons export key (e.g. "siHtml5")
function slugToKey(slug: string): string {
    return "si" + slug.charAt(0).toUpperCase() + slug.slice(1);
}

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        queueMicrotask(() => setMounted(true));
    }, []);

    const renderedIcons = useMemo(() => {
        return iconSlugs
            .map((slug) => (allIcons as Record<string, SimpleIcon>)[slugToKey(slug)])
            .filter(Boolean)
            .map((icon) => renderCustomIcon(icon, theme || "light"));
    }, [iconSlugs, theme]);

    if (!mounted) return null;

    return (
        <Cloud {...cloudProps}>
            <>{renderedIcons}</>
        </Cloud>
    );
}
