"use client";

import ProjectCard from "@/components/features/project-card";
import { projects } from "@/lib/data";
import { useTranslations } from "next-intl";

export default function ProjectsSection() {
    const t = useTranslations();
    return (
        <section id="projects" className="py-20 md:py-24 bg-zinc-50 dark:bg-zinc-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
                    <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                        <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
                            {t('projects.title')}
                        </span>
                    </h2>
                    <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
                        {t('projects.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
