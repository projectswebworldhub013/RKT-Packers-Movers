import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

import GalleryHero from "../Components/GalleryHero";

/* ================= GALLERY IMAGES ================= */
import img1 from "../assets/images/gallery/g1.jpg";
import img2 from "../assets/images/gallery/g2.jpg";
import img3 from "../assets/images/gallery/g3.jpg";
import img4 from "../assets/images/gallery/g4.jpg";
import img5 from "../assets/images/gallery/g5.jpg";
import img6 from "../assets/images/gallery/g6.jpg";
import img7 from "../assets/images/gallery/g7.jpg";
import img8 from "../assets/images/gallery/g8.jpg";
import img9 from "../assets/images/gallery/g9.jpg";
import img10 from "../assets/images/gallery/g10.jpg";
import img11 from "../assets/images/gallery/g11.jpg";
import img12 from "../assets/images/gallery/g12.jpg";
import CTASection from "../Components/CTASection";

const images = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12,
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev - 1 + images.length) % images.length;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  };

  const nextImage = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev + 1) % images.length;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  };

  return (
    <>
      <GalleryHero />

      <section className="bg-[#FFFFFF] px-4 md:px-12 lg:px-20 py-16">
        {/* ================= HEADING ================= */}
        <motion.div
          id="gallery"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="font-semibold tracking-widest uppercase text-[#F4B400]">
            Our Work Speaks
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] mt-2">
            Real Moves. Real Trust.
          </h2>

          <div className="w-24 h-[3px] bg-gradient-to-r from-[#F4B400] to-[#FFCC33] mx-auto mt-4 rounded-full" />

          <p className="mt-4 text-[#6B7280] text-base sm:text-lg leading-relaxed">
            A visual journey of how{" "}
            <span className="font-semibold text-[#111111]">
              RKT Packers & Movers
            </span>{" "}
            delivers safe, organized, and stress-free relocation services across
            India — from careful packing to on-time delivery.
          </p>
        </motion.div>

        {/* ================= GALLERY GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="
                relative overflow-hidden cursor-pointer
                bg-[#F8F9FA]
                border border-[#E5E7EB]
                rounded-2xl
                shadow-md
                group
              "
              whileHover={{ scale: 1.04 }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              onClick={() => openImage(i)}
            >
              <img
                src={img}
                alt={`RKT Packers & Movers Gallery ${i + 1}`}
                className="
                  w-full h-[260px]
                  object-cover
                  transition-transform duration-500
                  group-hover:scale-105
                "
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#111111]/30 opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>

        {/* ================= MODAL ================= */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="
                fixed inset-0 z-50
                bg-[#111111]/80
                backdrop-blur-md
                flex items-center justify-center
                p-4
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                key={selectedImage}
                className="relative w-full max-w-6xl"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="RKT Packers & Movers Work"
                  className="
                    w-full max-h-[85vh]
                    object-contain
                    bg-[#FFFFFF]
                    p-2
                    rounded-2xl
                  "
                />

                {/* Close */}
                <button
                  onClick={closeModal}
                  className="
                    absolute top-3 right-3
                    bg-[#DC2626]
                    hover:bg-red-700
                    p-2.5
                    rounded-full
                    text-white
                    transition
                  "
                >
                  <FaTimes />
                </button>

                {/* Prev */}
                <button
                  onClick={prevImage}
                  className="
                    absolute left-3 top-1/2 -translate-y-1/2
                    bg-[#F4B400]/90
                    hover:bg-[#FFCC33]
                    p-3
                    rounded-full
                    text-[#111111]
                    transition
                  "
                >
                  <FaArrowLeft />
                </button>

                {/* Next */}
                <button
                  onClick={nextImage}
                  className="
                    absolute right-3 top-1/2 -translate-y-1/2
                    bg-[#F4B400]/90
                    hover:bg-[#FFCC33]
                    p-3
                    rounded-full
                    text-[#111111]
                    transition
                  "
                >
                  <FaArrowRight />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <CTASection/>
    </>
  );
}