"use client";

import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Facebook, Send } from "lucide-react";
import { socialLinks } from "@/lib/data";
import { useTranslations } from "next-intl";

export default function ContactSection() {
    const t = useTranslations();
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gradient-to-t from-blue-500 to-transparent opacity-10 blur-3xl"></div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <div data-aos="fade-up">
                    <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                        <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
                            {t('contact.title')}
                        </span>
                    </h2>
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                        {t('contact.description')}
                    </p>
                    <div className="flex flex-col items-center gap-6">
                        <a href={socialLinks.email}>
                            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700">
                                <Mail className="mr-2 h-5 w-5" />
                                {t('contact.sayHello')}
                            </Button>
                        </a>

                        <div className="mt-8 flex gap-6">
                            <a
                                href={socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-600 transition-colors hover:text-blue-600 hover:scale-110 transform duration-200 dark:text-zinc-400 dark:hover:text-blue-400"
                            >
                                <Github className="h-8 w-8" />
                            </a>
                            <a
                                href={socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-600 transition-colors hover:text-blue-600 hover:scale-110 transform duration-200 dark:text-zinc-400 dark:hover:text-blue-400"
                            >
                                <Linkedin className="h-8 w-8" />
                            </a>
                            <a
                                href={socialLinks.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-600 transition-colors hover:text-blue-600 hover:scale-110 transform duration-200 dark:text-zinc-400 dark:hover:text-blue-400"
                            >
                                <Facebook className="h-8 w-8" />
                            </a>
                            <a
                                href={socialLinks.telegram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-600 transition-colors hover:text-blue-600 hover:scale-110 transform duration-200 dark:text-zinc-400 dark:hover:text-blue-400"
                            >
                                <Send className="h-8 w-8" />
                            </a>
                        </div>

                        <footer className="mt-16 text-sm text-zinc-500 dark:text-zinc-500">
                            <p>© {new Date().getFullYear()} {t('contact.rights')}</p>

                        </footer>
                    </div>
                </div>
            </div>
        </section>
    );
}
