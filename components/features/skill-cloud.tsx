"use client";

import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
    // Frontend
    "html5",
    "css",          // was "css3" (renamed in simple-icons v13+)
    "tailwindcss",
    "react",
    "nextdotjs",

    // Backend
    "openjdk",      // was "java" (removed; openjdk is the replacement)
    "spring",
    "springboot",

    // Database
    "postgresql",
    "mysql",
    "mongodb",
    "redis",

    // DevOps & Tools
    "docker",
    "git",
    "github",
    "gitlab",

    // Additional
    "typescript",
    "javascript",
    "nodedotjs",
    "vercel",
];

export default function SkillCloud() {
    return (
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}
