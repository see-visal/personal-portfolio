"use client";

import * as React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageToggle() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLanguage = (nextLocale: string) => {
        router.replace({ pathname }, { locale: nextLocale });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="font-bold w-12 h-9 px-0">
                    <Image
                        src={locale === "en" ? "/english.jpg" : "/cambodia.jpg"}
                        alt={locale === "en" ? "English" : "Khmer"}
                        width={24}
                        height={16}
                        className="h-4 w-6 rounded-sm object-cover"
                    />
                    <span className="sr-only">Switch language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => switchLanguage("en")} className="gap-2">
                    <Image
                        src="/english.jpg"
                        alt="English"
                        width={24}
                        height={16}
                        className="h-4 w-6 rounded-sm object-cover"
                    />
                    English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => switchLanguage("km")} className="gap-2">
                    <Image
                        src="/cambodia.jpg"
                        alt="Khmer"
                        width={24}
                        height={16}
                        className="h-4 w-6 rounded-sm object-cover"
                    />
                    Khmer
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
