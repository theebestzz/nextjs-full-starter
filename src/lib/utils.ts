import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { defaultLocale } from "@/i18n/config";

const url =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_APP_URL
    : "http://localhost:3000";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${url}${path}`;
}

export function getObjectValueByLocale(obj: { [x: string]: any }, locale: any) {
  return String(obj?.[locale] || obj?.[defaultLocale]);
}
