import EnFlag from "../../public/flags/en.png";
import TrFlag from "../../public/flags/tr.png";
import HeFlag from "../../public/flags/he.png";

export const defaultLocale: string = "en";

export const locales: string[] = ["en", "tr", "he"];

export const labels: {
  [key: string]: { name: string; flag: any };
} = {
  en: {
    name: "English",
    flag: EnFlag,
  },
  tr: {
    name: "Türkçe",
    flag: TrFlag,
  },
  he: {
    name: "עברית",
    flag: HeFlag,
  },
};
export const pathnames: {
  [key: string]: { en: string; tr: string; he: string } | string;
} = {
  "/": "/",

  "/docs": {
    en: "/docs",
    tr: "/belge",
    he: "/docs",
  },
};

export const localePrefix: any = "as-needed";

export const localeDetection: any = false;
