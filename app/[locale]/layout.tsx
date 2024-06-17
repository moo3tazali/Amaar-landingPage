import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "@/context/themeContext";
import ThemeSwitch from "@/components/ThemeSwitch";
import { metaData } from "@/lib/data";
import { I18nProviderClient } from "@/locales/client";
import { ReactElement } from "react";
import { Toaster } from "react-hot-toast";

interface RootLayoutParams {
  params: { locale: string };
  children: ReactElement;
}
// FONTS
const cairo = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: metaData.title.en,
  description: metaData.description,
};

export default function RootLayout({
  params: { locale },
  children,
}: RootLayoutParams) {
  return (
    <html
      lang={locale}
      className="!scroll-smooth"
      dir={locale === "en" ? "ltr" : "rtl"}
    >
      <body
        className={`${cairo.className} text-black/90 dark:text-white/90 bg-gray-50 dark:bg-gray-900`}
      >
        <ThemeContextProvider>
          <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
          <ThemeSwitch />
          <Toaster position="bottom-right" />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
