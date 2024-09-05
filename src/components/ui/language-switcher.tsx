"use client";

import Image from "next/image";

import { type PointerEvent, useState } from "react";
import { ChevronDown, Languages } from "lucide-react";

import { labels } from "@/i18n/config";
import { usePathname, useRouter } from "@/i18n/navigation";

import { useIsMobile } from "@/hooks/use-is-mobile";

import { useLocale } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

const locales = Object.entries(labels);

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const currentLocale = useLocale();

  const [open, setOpen] = useState(false);

  function openDropdown() {
    setOpen(() => true);
  }
  function closeDropdown(element: PointerEvent<HTMLElement>) {
    const target = element.relatedTarget as Element;

    if ("closest" in target && target.closest("[role=menu]")) return;

    setOpen(() => false);
  }

  function changeLocale(locale: string) {
    router.replace(pathname, {
      locale,
    });
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          aria-expanded={open}
          className="group pointer-events-auto relative flex w-fit gap-1 px-2"
          onClick={() => isMobile && openDropdown()}
          onPointerEnter={() => !isMobile && openDropdown()}
          onPointerLeave={(event) => !isMobile && closeDropdown(event)}
        >
          <Languages className="size-[1.2rem] transition-all dark:rotate-0 dark:scale-100" />

          <ChevronDown className="size-3 transition duration-300 group-aria-[expanded=true]:rotate-180" />

          <span className="pointer-events-auto absolute z-10 block h-14 w-full" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="flex flex-col items-center"
        align="end"
        role="menu"
        onPointerLeave={closeDropdown}
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <div className="w-full">
          {locales.map(([locale, { name, flag }]) => (
            <DropdownMenuItem
              key={locale}
              onClick={() => changeLocale(locale)}
              disabled={currentLocale === locale}
              className="flex cursor-pointer items-center gap-2"
            >
              <Image src={flag} alt={`${name} flag`} width={25} height={25} />
              {name}
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
