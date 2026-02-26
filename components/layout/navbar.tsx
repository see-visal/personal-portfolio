"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { LanguageToggle } from "@/components/layout/language-toggle";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { siteConfig } from "@/config/site";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function Navbar() {
    const t = useTranslations();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "border-b border-zinc-200 bg-white/50 backdrop-blur-md dark:border-zinc-800 dark:bg-black/50"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link
                    href="/"
                    className={cn(
                        "text-xl font-bold transition-opacity hover:opacity-80",
                        "bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400"
                    )}
                >
                    {siteConfig.name}
                </Link>

                <nav className="hidden items-center gap-6 md:flex">
                    <Link href="/#about" className="text-sm font-medium text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400">
                        {t('nav.about')}
                    </Link>
                    <Link href="/#tech" className="text-sm font-medium text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400">
                        {t('nav.tech')}
                    </Link>
                    <Link href="/#projects" className="text-sm font-medium text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400">
                        {t('nav.projects')}
                    </Link>
                    <Link href="/#contact" className="text-sm font-medium text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400">
                        {t('nav.contact')}
                    </Link>
                    <LanguageToggle />
                    <ModeToggle />
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <LanguageToggle />
                    <ModeToggle />
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-zinc-600 dark:text-zinc-400"
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="border-b border-zinc-200 bg-white px-4 py-4 dark:border-zinc-800 dark:bg-black md:hidden">
                    <nav className="flex flex-col gap-4">
                        <Link
                            href="/#about"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-sm font-medium text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
                        >
                            {t('nav.about')}
                        </Link>
                        <Link
                            href="/#tech"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-sm font-medium text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
                        >
                            {t('nav.tech')}
                        </Link>
                        <Link
                            href="/#projects"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-sm font-medium text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
                        >
                            {t('nav.projects')}
                        </Link>
                        <Link
                            href="/#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-sm font-medium text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
                        >
                            {t('nav.contact')}
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
