"use client";
import React from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";
import SectionHeading from "@/components/SectionHeading";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useI18n } from "@/locales/client";

const Contact = () => {
  const t = useI18n();

  return (
    <motion.section
      id="contact"
      className="py-24 px-5 overflow-hidden flex flex-col"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.8,
      }}
    >
      <SectionHeading text="contact_us" />
      <div className="container mx-auto flex items-center md:rtl:flex-row-reverse flex-col md:flex-row md:gap-0 gap-5">
        <div className="flex-1 flex justify-center">
          <div className="flex flex-col gap-5">
            <p className="flex items-center rtl:flex-row-reverse gap-2">
              <MdEmail />
              <a
                className="underline"
                href="mailto:ammarcompany.202222@gmail.com"
              >
                ammarcompany.202222@gmail.com
              </a>{" "}
            </p>
            <p className="flex items-center rtl:flex-row-reverse gap-2">
              <FaPhone />
              <a className="underline" href="tel:+966500009381">
                {t("phone")}
              </a>{" "}
            </p>
            <p className="flex items-center rtl:flex-row-reverse gap-2">
              <FaLocationDot />
              <a className="underline" href="#">
                {t("address")}
              </a>{" "}
            </p>
          </div>
        </div>

        <form
          className="flex flex-col flex-1 w-full dark:text-black/90"
          action={async (FormData) => {
            const { data, error } = (await sendEmail(FormData)) as {
              data?: any;
              error?: any;
            };
            if (error) {
              toast.error(error);
              return;
            }
            toast.success(t("toast_success"));
          }}
        >
          <input
            className="h-14 px-4 rounded-lg border border-black/10 outline-none dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
            name="senderEmail"
            type="email"
            placeholder="Your Email..."
            required
            maxLength={50}
          />
          <textarea
            className="h-52 my-3 rounded-lg border border-black/10 p-4 resize-none outline-none dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <SubmitBtn />
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
