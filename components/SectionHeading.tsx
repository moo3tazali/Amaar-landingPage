import { motion } from "framer-motion";
import { useI18n } from "@/locales/client";

type PropsType = {
  text: "our_story" | "projects" | "contact_us";
};

const SectionHeading = ({ text }: PropsType) => {
  const t = useI18n();

  return (
    <motion.h1
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 0.8 }}
      className="text-center text-4xl font-bold pb-10 container mx-auto"
    >
      {t(text)}
    </motion.h1>
  );
};

export default SectionHeading;
