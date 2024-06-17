"use client";
import { useEffect } from "react";
import { MdLanguage } from "react-icons/md";

import { metaData } from "@/lib/data";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";

const LanguageSwtich = () => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  useEffect(() => {
    if (locale === "ar") document.title = metaData.title.ar;
  }, []);

  function handleChangeLocale() {
    changeLocale(locale === "ar" ? "en" : "ar");
  }
  return (
    <div className="relative">
      <button
        onClick={handleChangeLocale}
        className="flex items-center gap-2 px-2 md:px-6 py-2 border-2 border-black/90 dark:border-white/90 dark:hover:border-primary rounded-lg md:text-xl hover:border-primary transition-all"
      >
        <MdLanguage />
        {locale === "ar" ? <span>EN</span> : <span>AR</span>}
      </button>
    </div>
  );
};

export default LanguageSwtich;
