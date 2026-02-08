// src/components/ContactHero.jsx

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import contactBg from "../assets/images/contact-hero.jpg";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactHero() {
  /* Parallax scroll effect */
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 400], [0, 120]);

  return (
    <section
      className="
        mt-24 sm:mt-28
        relative w-full
        min-h-[75vh] sm:min-h-[80vh]
        overflow-hidden
        flex items-center justify-center
      "
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: yBg, backgroundImage: `url(${contactBg})` }}
        className="
          absolute inset-0
          bg-cover bg-center
          will-change-transform
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/75
          via-black/35
          to-black/75
        "
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          relative z-10
          max-w-4xl w-full
          px-4 sm:px-8
          text-center
        "
      >
        {/* Subtitle */}
        <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#E5E7EB] mb-3">
          Contact Us
        </p>

        {/* Decorative Heading */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="hidden sm:block w-12 h-[2px] bg-[#F4B400]" />
          <h1
            className="
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl
              font-semibold
              text-white
              leading-snug
            "
          >
            Let’s Plan Your Move
          </h1>
          <span className="hidden sm:block w-12 h-[2px] bg-[#F4B400]" />
        </div>

        {/* Description */}
        <p
          className="
            text-sm sm:text-base md:text-lg
            text-[#F8F9FA]
            leading-relaxed
            max-w-3xl
            mx-auto
            mb-8 sm:mb-10
          "
        >
          Have questions or planning a relocation? Get in touch with{" "}
          <span className="font-semibold text-[#FFCC33]">
            RKT Packers & Movers
          </span>
          . Our team is ready to assist you with transparent pricing, expert
          guidance, and reliable moving solutions across Chennai and India.
        </p>

        {/* CTA Buttons */}
        <div
          className="
            flex flex-col sm:flex-row
            items-center justify-center
            gap-3 sm:gap-4
            max-w-sm sm:max-w-none
            mx-auto
          "
        >
          {/* Call Now */}
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="tel:+918328690773"
            className="
              inline-flex items-center justify-center gap-2
              w-[220px] sm:w-auto
              bg-[#F4B400]
              text-[#111111]
              font-semibold
              text-sm
              px-6 sm:px-7
              py-2.5 sm:py-3
              rounded-full
              hover:bg-[#FFCC33]
              transition-all
            "
          >
            <FaPhoneAlt className="text-sm" />
            Call Now
          </motion.a>

          {/* Email Us */}
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="mailto:info@rktpackersmoverschennai.co.in"
            className="
              inline-flex items-center justify-center gap-2
              w-[220px] sm:w-auto
              border border-white
              text-white font-medium
              text-sm
              px-6 sm:px-7
              py-2.5 sm:py-3
              rounded-full
              hover:bg-white
              hover:text-[#111111]
              transition-all
            "
          >
            <FaEnvelope className="text-sm" />
            Email Us
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}