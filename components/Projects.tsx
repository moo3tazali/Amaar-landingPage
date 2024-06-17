"use client";
import { motion } from "framer-motion";
import { useI18n } from "@/locales/client";
import SectionHeading from "@/components/SectionHeading";
import SwipeCarousel from "@/components/SwipeCarousel";

const Projects = () => {
  const t = useI18n();

  return (
    <section
      id="projects"
      className="h-screen py-24 overflow-hidden flex flex-col"
    >
      <SectionHeading text="projects" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring", duration: 2 }}
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <SwipeCarousel />
      </motion.div>
    </section>
  );
};

export default Projects;
