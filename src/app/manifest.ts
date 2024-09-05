import { siteConfig } from "@/lib/site-config";

export default async function manifest() {
  return {
    name: siteConfig.title,
    short_name: siteConfig.title,
    start_url: "/",
    theme_color: "#ffffff",
    display: "standalone",

    icons: [
      {
        src: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
