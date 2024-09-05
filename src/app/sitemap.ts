import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/utils";

import { locales } from "@/i18n/config";

type Sitemap = MetadataRoute.Sitemap;

export default function sitemap(): Sitemap {
  const paths: Sitemap = [
    {
      url: absoluteUrl(`/`),
      lastModified: new Date(),

      alternates: {
        languages: Object.fromEntries(
          locales.map((locale) => [locale, absoluteUrl(`/${locale}`)]),
        ),
      },
    },

    {
      url: absoluteUrl(`/docs`),
      lastModified: new Date(),

      alternates: {
        languages: Object.fromEntries(
          locales.map((locale) => [locale, absoluteUrl(`/${locale}/docs`)]),
        ),
      },
    },
  ];

  return [...paths];
}
