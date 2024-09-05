"use client";

import { motion } from "framer-motion";

import type { ComponentProps } from "react";

import { useMounted } from "@/hooks/use-mounted";

export default function Template({ children }: ComponentProps<"div">) {
  const isMounted = useMounted();

  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
