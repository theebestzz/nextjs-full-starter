import withNextIntl from "next-intl/plugin";

import pwa from "next-pwa";
import runtimeCaching from "next-pwa/cache.js";

const withPwa = pwa({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: process.env.NODE_ENV === "development",
});

const withNextIntlConfig = withNextIntl("./src/i18n/index.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

export default withPwa(withNextIntlConfig(nextConfig));
