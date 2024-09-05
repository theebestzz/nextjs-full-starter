"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";
import { DirectionProvider } from "@radix-ui/react-direction";

interface ProvidersProps {
  children: React.ReactNode;
  params: { locale: string };
}

export function Providers({ children, params }: ProvidersProps) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <DirectionProvider dir={params.locale === "he" ? "rtl" : "ltr"}>
          {children}
        </DirectionProvider>
      </ThemeProvider>
    </>
  );
}
