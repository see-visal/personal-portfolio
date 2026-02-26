"use client"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import BorderBeam from "@/components/magicui/border-beam"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface ProjectCardProps {
    title: string
    description: string
    technologies: string[]
    githubUrl?: string
    liveUrl?: string
}

export default function ProjectCard({
    title,
    description,
    technologies,
    githubUrl,
    liveUrl
}: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <Card
            className="group relative h-full overflow-hidden transition-all hover:scale-105 hover:shadow-2xl dark:hover:shadow-violet-500/20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && (
                <BorderBeam
                    size={250}
                    duration={12}
                    delay={0}
                    colorFrom="#3b82f6"
                    colorTo="#8b5cf6"
                />
            )}

            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
                        {title}
                    </span>
                    <div className="flex gap-2">
                        {githubUrl && (
                            <Link
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-600 transition-all hover:text-zinc-900 hover:scale-110 dark:text-zinc-400 dark:hover:text-zinc-100"
                            >
                                <Github className="h-5 w-5" />
                            </Link>
                        )}
                        {liveUrl && (
                            <Link
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-600 transition-all hover:text-zinc-900 hover:scale-110 dark:text-zinc-400 dark:hover:text-zinc-100"
                            >
                                <ExternalLink className="h-5 w-5" />
                            </Link>
                        )}
                    </div>
                </CardTitle>
                <CardDescription className="line-clamp-3">{description}</CardDescription>
            </CardHeader>
            <CardFooter>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-zinc-100 text-zinc-700 transition-colors hover:bg-blue-100 hover:text-blue-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-blue-900 dark:hover:text-blue-300"
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>
            </CardFooter>
        </Card>
    )
}
