// src/components/GalleryHero.jsx

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import galleryBg from "../assets/images/gallery-hero.jpg"; // use a real gallery / moving image
import { Link } from "react-router-dom";

export default function GalleryHero() {
  /* Parallax scroll effect */
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
        style={{ y: yBg, backgroundImage: `url(${galleryBg})` }}
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
          from-black/75
          via-black/55
          to-black/85
        "
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
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
          Our Work
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
          Moving Moments, Real Stories
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
          Explore real relocation journeys handled by{" "}
          <span className="font-semibold text-white">
            RKT Packers & Movers
          </span>
          . From careful packing to safe delivery, our gallery reflects the
          trust, professionalism, and precision we bring to every move across
          India.
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
              Book Your Move
            </Link>
          </motion.div>

          {/* Button 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto flex justify-center"
          >
            <a
              href="#gallery"
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
              Explore Images
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}