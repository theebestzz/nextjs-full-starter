"use client";

import { useEffect, useState } from "react";

import { useMediaQuery } from "@/hooks/use-media-query";

export function useIsMobile() {
  const [isMobile, setMobile] = useState(false);
  const mediaQuery = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    if (!window.matchMedia) return;

    setMobile(window.matchMedia("(pointer:coarse)").matches && mediaQuery);
  }, [mediaQuery]);

  return isMobile;
}
