import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "About",
  description: "About - Created by fek",
};

export default async function AboutPage() {
  const t = await getTranslations("AboutPage");
  return <div>{t("Title")}</div>;
}
