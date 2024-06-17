"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import introImage from "@/public/intro.png";
import { AnimatedText } from "./AnimatedText";
import { useCurrentLocale, useI18n } from "@/locales/client";
import { useRef } from "react";
import { SwipeCarousel } from "./SwipeCarousel";

const Intro = () => {
  const locale = useCurrentLocale();
  const t = useI18n();
  // const targetRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ["end end", "end start"],
  // });

  // const x = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
  // const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section className="intro-h flex flex-row-reverse overflow-hidden">
      <div className="flex-1 flex flex-col justify-center items-center gap-7 intro-h text-center w-full md:w-1/2 rtl:mr-auto">
        <motion.h1
          className="uppercase text-6xl font-semibold leading-tight max-w-[350px]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
          }}
        >
          {t("intro_text")}
        </motion.h1>

        <motion.p
          className="text-2xl dark:text-slate-400 text-gray-600"
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          {t("from")}{" "}
          <span className=" capitalize underline">
            {t("intro_underline_text")}
          </span>
        </motion.p>
      </div>

      <div className="flex-1 overflow-hidden hidden md:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
          }}
        >
          <Image
            src={introImage}
            alt="intro-image"
            className="absolute -z-10 left-[12px] top-[133px] overflow-hidden rounded-[35px] w-full hero-section-bg rtl:translate-x-1/2 ltr:-translate-x-1/2 object-cover h-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
