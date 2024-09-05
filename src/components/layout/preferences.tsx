"use client";

import { Settings } from "lucide-react";
import { motion } from "framer-motion";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Preferences() {
  const t = useTranslations();

  const { theme, setTheme } = useTheme();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
          className="fixed bottom-5 right-5 cursor-pointer rounded-full bg-primary-foreground p-3 shadow-2xl"
        >
          <Settings className="animate-spin-slow size-5 md:size-10" />
        </motion.div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="!text-center">
          <DialogTitle>{t("Preferences.Title")}</DialogTitle>
          <DialogDescription>{t("Preferences.Description")}</DialogDescription>
        </DialogHeader>
        <div>
          <div className="space-y-1">
            <div className="grid w-full max-w-2xl grid-cols-2 gap-8 pt-2 lg:max-w-md">
              <div
                className="cursor-pointer border-primary"
                onClick={() => setTheme("light")}
              >
                <div className="items-center rounded-md border-2 border-muted p-1 hover:bg-accent hover:text-accent-foreground">
                  <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                    <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                      <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                      <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                    </div>
                    <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                      <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                      <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                    </div>
                    <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                      <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                      <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                    </div>
                  </div>
                </div>
                <span className="block w-full p-2 text-center font-normal">
                  {t("ThemeSwitcher.Light")}
                </span>
              </div>
              <div
                className="cursor-pointer border-primary"
                onClick={() => setTheme("dark")}
              >
                <div className="items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground">
                  <div className="space-y-2 rounded-sm bg-slate-950 p-2">
                    <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                      <div className="h-2 w-[80px] rounded-lg bg-slate-400" />
                      <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                    </div>
                    <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                      <div className="h-4 w-4 rounded-full bg-slate-400" />
                      <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                    </div>
                    <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                      <div className="h-4 w-4 rounded-full bg-slate-400" />
                      <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                    </div>
                  </div>
                </div>
                <span className="block w-full p-2 text-center font-normal">
                  {t("ThemeSwitcher.Dark")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
