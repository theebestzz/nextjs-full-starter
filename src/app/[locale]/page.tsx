import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex justify-between">
      {t("Title")}

      <ThemeSwitcher />
      <LanguageSwitcher />
    </div>
  );
}
