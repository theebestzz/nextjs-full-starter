import en from "../../locales/en.json";
import tr from "../../locales/tr.json";
import he from "../../locales/he.json";

import { absoluteUrl } from "@/lib/utils";

export const siteConfig = {
  title: "Fek Software",

  description: {
    en: en.Meta.description,
    tr: tr.Meta.description,
    he: he.Meta.description,
  },

  url:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_APP_URL
      : "http://localhost:3000",

  og: {
    image: absoluteUrl("/og-image.png"),

    size: {
      width: 1200,
      height: 630,
    },
  },

  app: {
    latestVersion: "0.0.1",
  },

  author: {
    name: "Fek Software",
    site: "https://feksoftware.com.tr",
  },

  links: {
    twitter: {
      label: "Twitter",
      username: "@feksoftware",
      url: "https://twitter.com/feksoftware",
    },

    github: {
      label: "GitHub",
      url: "https://github.com/theebestzz",
    },
  },
};
