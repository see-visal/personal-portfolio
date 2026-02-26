"use client";

import { Button } from "@/components/ui/button";
import RetroGrid from "@/components/magicui/retro-grid";
import WordFadeIn from "@/components/magicui/word-fade-in";
import { Rocket, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HeroSection() {
    const t = useTranslations();
    return (
        <section id="home" className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden pt-16">
            {/* Retro Grid Background - Keeping it as distinct hero feature but lowering z-index */}
            <RetroGrid className="opacity-40" />

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 h-64 w-64 md:h-96 md:w-96 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-3xl dark:opacity-10"></div>
            <div className="absolute bottom-1/4 right-1/4 h-64 w-64 md:h-96 md:w-96 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 opacity-20 blur-3xl dark:opacity-10"></div>

            <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
                <div className="flex flex-col items-center text-center">
                    {/* Animated Badge */}
                    <div
                        className="mb-6 md:mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300"
                        data-aos="fade-down"
                    >

                        {t('hero.welcome')}
                    </div>

                    {/* Main Heading with Word Fade In */}
                    <WordFadeIn
                        words={t('hero.greeting')}
                        className="mb-4 md:mb-6 bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-3xl sm:text-5xl lg:text-7xl font-bold text-transparent dark:from-blue-400 dark:via-violet-400 dark:to-purple-400"
                    />

                    <h2
                        className="mb-6 text-xl sm:text-2xl font-semibold text-zinc-700 dark:text-zinc-300 md:text-4xl"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        {t('hero.role')}
                    </h2>

                    <p
                        className="mb-12 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        {t('hero.description')}
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center" data-aos="fade-up" data-aos-delay="800">
                        <Button
                            size="lg"
                            className="group bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 shadow-lg shadow-blue-500/50 dark:shadow-blue-500/30"
                            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                        >

                            <Rocket className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            {t('hero.viewProjects')}
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            <Mail className="mr-2 h-5 w-5" />
                            {t('hero.getInTouch')}
                        </Button>
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="h-8 w-5 rounded-full border-2 border-zinc-400 dark:border-zinc-600 flex items-start justify-center p-1">
                    <div className="h-2 w-1 rounded-full bg-zinc-400 dark:bg-zinc-600 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
}
