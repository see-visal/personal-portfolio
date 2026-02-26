"use client";

import SkillCloud from "@/components/features/skill-cloud";
import { useTranslations } from "next-intl";

export default function TechStackSection() {
    const t = useTranslations();
    return (
        <section id="tech" className="py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gradient-to-b from-blue-500 to-transparent opacity-10 blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                        <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
                            {t('tech.title')}
                        </span>
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">
                        {t('tech.subtitle')}
                    </p>
                </div>

                {/* Icon Cloud with Enhanced Styling */}
                <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="200">
                    <div className="relative">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full blur-3xl opacity-20"></div>
                        <SkillCloud />
                    </div>
                </div>

                {/* Tech Categories */}
                <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" data-aos="fade-up" data-aos-delay="400">
                    <div className="rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                        <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">{t('tech.categories.frontend')}</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">HTML, CSS, Tailwind, React, Next.js</p>
                    </div>
                    <div className="rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                        <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">{t('tech.categories.backend')}</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">Java, Spring, Spring Boot, Microservices</p>
                    </div>
                    <div className="rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                        <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">{t('tech.categories.database')}</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">PostgreSQL, Oracle, MySQL, MongoDB, Redis</p>
                    </div>
                    <div className="rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                        <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">{t('tech.categories.devops')}</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">Docker, Git, GitHub, GitLab</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
