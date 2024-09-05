"use client";

import { Button } from "@/components/ui/button";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5 text-center">
      <h2 className="text-4xl md:text-6xl">Oops! &mdash; 404</h2>
      <p className="animate-pulse text-xl font-light md:text-3xl">
        {t("PageNotFound")}
      </p>
      <Button asChild size={"lg"} variant={"outline"}>
        <Link href={"/"}>{t("ReturnHome")}</Link>
      </Button>
    </div>
  );
}
