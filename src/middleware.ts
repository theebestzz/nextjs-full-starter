import createIntlMiddleware from "next-intl/middleware";

import { NextRequest } from "next/server";

import {
  localePrefix,
  defaultLocale,
  locales,
  pathnames,
  localeDetection,
} from "@/i18n/config";

const intlMiddleware = createIntlMiddleware({
  defaultLocale,
  locales,
  localePrefix,
  pathnames,
  localeDetection,
});

export async function middleware(req: NextRequest) {
  const intlResponse = intlMiddleware(req);
  if (intlResponse) return intlResponse;
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
