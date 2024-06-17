"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import { useCurrentLocale, useI18n } from "@/locales/client";
import aboutImg from "@/public/about.png";
import SectionHeading from "@/components/SectionHeading";

const OurStory = () => {
  const locale = useCurrentLocale();
  const t = useI18n();

  return (
    <section
      id="about"
      className="h-screen container mx-auto py-24 overflow-hidden"
    >
      <SectionHeading text="our_story" />
      <div className="flex items-center justify-between gap-5">
        <motion.p
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8, once: true }}
          viewport={{ once: true }}
          className="flex-1 md:text-2xl leading-normal dark:text-slate-400 px-3 text-xl text-center"
        >
          {t("our_story_section")}
        </motion.p>
        <motion.div
          initial={
            locale === "ar" ? { x: -300, opacity: 0 } : { x: 300, opacity: 0 }
          }
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8, once: true }}
          viewport={{ once: true }}
          className="hidden lg:block"
        >
          <Image
            src={aboutImg}
            alt="about"
            quality={90}
            width={630}
            className="w-full object-contain rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
