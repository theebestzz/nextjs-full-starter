import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Docs Page",
  description: "Docs Page - Created by fek",
};

export default async function DocsPage() {
  const t = await getTranslations("DocsPage");
  return (
    <div className="flex h-screen items-center justify-center text-2xl capitalize">
      {t("Title")}
    </div>
  );
}
