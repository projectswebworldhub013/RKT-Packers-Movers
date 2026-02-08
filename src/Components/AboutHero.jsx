// src/components/AboutHero.jsx

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import aboutBg from "../assets/images/about-hero.jpg";
import { Link } from "react-router-dom";

export default function AboutHero() {
  // Parallax scroll effect
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 400], [0, 120]);

  return (
    <section
      className="
        mt-24 sm:mt-28
        relative w-full
        min-h-[80vh] sm:min-h-[85vh]
        overflow-hidden
        flex items-center justify-center
      "
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: yBg, backgroundImage: `url(${aboutBg})` }}
        className="
          absolute inset-0
          bg-cover bg-center
          will-change-transform
        "
      />

      {/* Gradient Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/70
          via-black/55
          to-black/80
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
        <p className="text-xs sm:text-sm tracking-widest uppercase text-[#E5E7EB] mb-3">
          About Us
        </p>

        {/* Heading */}
        <h1
          className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-semibold
            text-white
            leading-snug
            mb-5
          "
        >
          RKT Packers & Movers
        </h1>

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
          Established in{" "}
          <span className="font-semibold text-white">2025</span> and led by{" "}
          <span className="font-semibold text-white">
            Durga Devi
          </span>
          , RKT Packers & Movers is a professionally managed relocation and
          logistics company based in Velachery, Chennai. With over{" "}
          <span className="font-semibold text-[#FFCC33]">
            20+ years of industry experience
          </span>
          , we deliver safe, reliable, and stress-free moving solutions
          across India.
        </p>

        {/* Buttons */}
        <div
          className="
            flex flex-col sm:flex-row
            items-center justify-center
            gap-3 sm:gap-4
            max-w-sm sm:max-w-none
            mx-auto
          "
        >
          {/* Button 1 */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto flex justify-center"
          >
            <Link
              to="/contact"
              className="
                inline-flex items-center justify-center
                w-[220px] sm:w-auto
                border border-white
                text-white font-medium
                text-sm
                px-6 sm:px-7
                py-2.5 sm:py-3
                rounded-full
                shadow-sm
                hover:bg-white
                hover:text-[#111111]
                transition-all
              "
            >
              Get Free Quote
            </Link>
          </motion.div>

          {/* Button 2 */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto flex justify-center"
          >
            <Link
              to="/gallery"
              className="
                inline-flex items-center justify-center
                w-[220px] sm:w-auto
                bg-[#F4B400]
                text-[#111111]
                font-semibold
                text-sm
                px-6 sm:px-7
                py-2.5 sm:py-3
                rounded-full
                shadow-sm
                hover:bg-[#FFCC33]
                transition-all
              "
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}