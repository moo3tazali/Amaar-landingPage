"use client";

import LanguageSwtich from "@/components/LanguageSwtich";
import { useI18n } from "@/locales/client";

const Navbar = () => {
  const t = useI18n();

  return (
    <div className="flex items-center gap-2 md:gap-4 px-2 md:px-6 py-3">
      <ul className="flex items-center gap-2 md:gap-4">
        <li className="relative md:p-3">
          <a
            className="md:text-xl border-b-2 border-transparent hover:border-primary transition-all"
            href="#about"
          >
            {t("our_story")}
          </a>
        </li>
        <li className="relative md:p-3">
          <a
            className="md:text-xl border-b-2 border-transparent hover:border-primary transition-all"
            href="#projects"
          >
            {t("projects")}
          </a>
        </li>
        <li className="relative md:p-3">
          <a
            className="md:text-xl border-b-2 border-transparent hover:border-primary transition-all"
            href="#contact"
          >
            {t("contact_us")}
          </a>
        </li>
      </ul>
      <LanguageSwtich />
    </div>
  );
};

export default Navbar;
