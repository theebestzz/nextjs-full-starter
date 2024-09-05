"use client";

import React, { useState } from "react";

import { cn } from "@/lib/utils";

import { useTranslations } from "next-intl";

import { getProducts } from "@/data/products";
import { getServices } from "@/data/services";

import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const t = useTranslations("Navbar");
  const products = getProducts();
  const services = getServices();
  return (
    <div
      className={cn("fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/">{t("Home")}</HoveredLink>
        <HoveredLink href="/about">{t("About")}</HoveredLink>
        <MenuItem setActive={setActive} active={active} item={t("Services")}>
          <div className="flex flex-col space-y-4 text-sm">
            {services.map((service) => (
              <HoveredLink key={service.title} href={service.link}>
                {service.title}
              </HoveredLink>
            ))}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item={t("Products")}>
          <div className="grid grid-cols-2 gap-10 p-4 text-sm">
            {products.slice(0, 4).map((product) => (
              <ProductItem
                key={product.title}
                href={product.link}
                src={product.thumbnail}
                title={product.title}
                description="Prepare for tech interviews like never before."
              />
            ))}
          </div>
        </MenuItem>
        <HoveredLink href="/projects">{t("Projects")}</HoveredLink>
        <HoveredLink href="/contact">{t("Contact")}</HoveredLink>
      </Menu>
    </div>
  );
}
