"use client";

import Image from "next/image";
import { CheckCircle2, Heart } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutSection() {
    const t = useTranslations();
    return (
        <section id="about" className="py-20 md:py-24 bg-zinc-50 dark:bg-zinc-950">
            <div className="container mx-auto px-4">
                <div className="grid gap-8 md:gap-16 md:grid-cols-2">
                    {/* Text Content */}
                    <div data-aos="fade-right">
                        <h2 className="mb-8 text-3xl font-bold md:text-5xl">
                            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
                                {t('about.title')}
                            </span>
                        </h2>
                        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                            <div className="mb-6 flex items-center gap-2">
                                <Heart className="h-6 w-6 text-red-500 fill-red-500 animate-pulse" />
                                <h3 className="text-xl font-bold">{t('about.passion')}</h3>
                            </div>
                            <p className="mb-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                                {t('about.passionDesc')}
                            </p>

                            <div className="mb-6">
                                <h4 className="mb-4 text-lg font-semibold">{t('about.whatIDo')}</h4>
                                <ul className="grid gap-3">
                                    {['0', '1', '2', '3'].map((key) => (
                                        <li key={key} className="flex items-start gap-3">
                                            <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                                            <span className="text-lg text-zinc-600 dark:text-zinc-400">
                                                {t(`about.items.${key}`)}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div data-aos="fade-left" className="flex items-center justify-center">
                        <div className="relative">
                            {/* Animated Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>

                            {/* Profile Photo Card */}
                            <div className="relative rounded-3xl border border-zinc-200 bg-white p-8 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50">
                                <div className="flex flex-col items-center gap-6">
                                    {/* Profile Photo with Gradient Border */}
                                    <div className="relative">
                                        {/* Gradient Border Effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>

                                        {/* Photo Container */}
                                        <div className="relative">
                                            <Image
                                                src="/Personal.jpg"
                                                alt="Soeurn Visal"
                                                width={300}
                                                height={300}
                                                className="rounded-2xl object-cover shadow-2xl"
                                                priority
                                            />
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <p className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                                            Soeurn Visal
                                        </p>
                                        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                                            {t('about.role')}
                                        </p>
                                        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">
                                            {t('about.tagline')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
