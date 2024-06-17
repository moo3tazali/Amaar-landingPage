"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import logoLight from "@/public/logo-light.png";
import logoDark from "@/public/logo-dark.png";
import Navbar from "@/components/Navbar";
import { useTheme } from "@/context/themeContext";

const Header = () => {
  const { theme } = useTheme();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <motion.header
      className="container mx-auto z-50 sticky"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
      ref={targetRef}
      style={{
        y,
        opacity,
      }}
    >
      <nav className="flex items-center justify-between font-semibold p-2 md:p-6">
        <Link href={"/"}>
          <Image
            src={theme === "dark" ? logoLight : logoDark}
            alt="Amaar"
            quality={100}
            priority={true}
            className="w-[75px] h-[75px] md:w-[85px] md:h-[85px]"
          />
        </Link>

        <Navbar />
      </nav>
    </motion.header>
  );
};

export default Header;
