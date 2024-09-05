import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Preferences } from "@/components/layout/preferences";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: SiteLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Preferences />
      <Footer />
    </>
  );
}
