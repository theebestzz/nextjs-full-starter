import { HeroParallax } from "@/components/ui/hero-parallax";
import { getProjects } from "@/data/projects";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const projects = getProjects();

  const t = await getTranslations("HomePage");

  return (
    <>
      <HeroParallax projects={projects}>
        <div className="relative left-0 top-0 mx-auto w-full max-w-7xl px-4 py-20 md:py-40">
          <h1 className="text-2xl font-light dark:text-white">{t("Title")}</h1>
          <h2 className="max-w-2xl text-2xl font-bold capitalize dark:text-white md:text-7xl">
            {t("SubTitle")}
          </h2>
          <p className="mt-8 max-w-2xl text-base dark:text-neutral-200 md:text-xl">
            {t("Description")}
          </p>
        </div>
      </HeroParallax>
    </>
  );
}
