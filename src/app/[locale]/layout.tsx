import { Metadata } from "next";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";

import { Providers } from "@/components/providers";

import { defaultLocale } from "@/i18n/config";
import { global } from "@/lib/fonts";
import { getObjectValueByLocale } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { Layout } from "@/components/layout/layout";

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export async function generateMetadata({
  params,
}: RootLayoutProps): Promise<Metadata> {
  unstable_setRequestLocale(params.locale);

  return {
    title: {
      default: siteConfig.title,
      template: `${siteConfig.title} - %s`,
    },
    description: getObjectValueByLocale(siteConfig.description, params.locale),

    authors: [
      {
        name: siteConfig.author.name,
        url: siteConfig.author.site,
      },
    ],
    creator: siteConfig.author.name,

    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: siteConfig.title,
      siteName: siteConfig.title,

      description: getObjectValueByLocale(
        siteConfig.description,
        params.locale,
      ),

      images: [
        {
          ...siteConfig.og.size,
          alt: siteConfig.title,
          url: siteConfig.og.image,
        },
      ],
    },

    twitter: {
      creator: siteConfig.links.twitter.username,
      title: siteConfig.title,
      card: "summary_large_image",
      images: [siteConfig.og.image],

      description: getObjectValueByLocale(
        siteConfig.description,
        params.locale,
      ),
    },

    icons: {
      icon: "/icons/favicon.ico",
      apple: "/icons/apple-touch-icon.png",
      shortcut: "/icons/favicon-16x16.png",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  unstable_setRequestLocale(params.locale);

  const messages = await getMessages();
  return (
    <html
      lang={params.locale || defaultLocale}
      dir={params.locale === "he" ? "rtl" : "ltr"}
      suppressHydrationWarning={true}
      className={global.className}
    >
      <body>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Providers params={params}>
            <Layout>
              <main>{children}</main>
            </Layout>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
