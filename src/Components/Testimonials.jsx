// src/components/Testimonials.jsx

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserCircle,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Rajesh Mehta",
    text:
      "RKT Packers & Movers handled my home relocation with extreme care. Packing quality was excellent and delivery was right on time.",
  },
  {
    name: "Neha Sharma",
    text:
      "Very professional and polite staff. From booking to final delivery, everything was smooth and well managed.",
  },
  {
    name: "Amit Verma",
    text:
      "Safe transportation and transparent communication throughout the move. Truly a stress-free relocation experience.",
  },
  {
    name: "Pooja Gupta",
    text:
      "All my household items were delivered without any damage. RKT Packers & Movers are reliable and trustworthy.",
  },
  {
    name: "Rohit Malhotra",
    text:
      "On-time pickup, secure packing, and skilled professionals. Highly recommended for anyone planning a move.",
  },
  {
    name: "Anjali Singh",
    text:
      "Excellent service quality. The team was disciplined, careful, and very responsive to our requirements.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const swipeConfidence = 80;
  const AUTO_SLIDE_DELAY = 4000;

  /* ================= AUTO SLIDE ================= */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, AUTO_SLIDE_DELAY);

    return () => clearInterval(timer);
  }, []);

  /* ================= SWIPE ================= */
  const handleDragEnd = (event, info) => {
    if (info.offset.x < -swipeConfidence) {
      setIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    } else if (info.offset.x > swipeConfidence) {
      setIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
    }
  };

  return (
    <section className="bg-[#F8F9FA] py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* ================= HEADING ================= */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-10 h-[2px] bg-[#F4B400]" />
            <p className="text-xs uppercase tracking-widest text-[#F4B400] font-semibold">
              Client Testimonials
            </p>
            <span className="w-10 h-[2px] bg-[#F4B400]" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#111111]">
            Trusted by Happy Clients of{" "}
            <span className="text-[#F4B400]">RKT Packers & Movers</span>
          </h2>

          <p className="text-[#6B7280] text-sm sm:text-base mt-3">
            Real experiences from customers who trusted us with their valuable belongings.
          </p>
        </div>

        {/* ================= DESKTOP (3 FIXED CARDS) ================= */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {[0, 1, 2].map((offset) => {
            const item =
              testimonials[(index + offset) % testimonials.length];
            return <TestimonialCard key={offset} item={item} />;
          })}
        </div>

        {/* ================= MOBILE / TABLET (AUTO + SWIPE) ================= */}
        <div className="lg:hidden relative max-w-sm mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <TestimonialCard item={testimonials[index]} />
            </motion.div>
          </AnimatePresence>

          <p className="text-center text-xs text-[#9CA3AF] mt-4">
            Swipe to explore more 👆
          </p>
        </div>

        {/* ================= CTA ================= */}
        <div className="text-center mt-12">
          <Link to="/contact">
            <button
              className="px-9 py-3 rounded-full
              bg-[#F4B400] text-[#111111]
              font-semibold
              hover:bg-[#FFCC33]
              transition shadow-lg hover:scale-105"
            >
              Get Your Free Quote
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

/* ================= CARD ================= */

const TestimonialCard = ({ item }) => (
  <motion.div
    whileHover={{ y: -6 }}
    transition={{ duration: 0.25 }}
    className="relative bg-white rounded-xl
    p-5 sm:p-6
    shadow-md hover:shadow-xl
    border border-[#E5E7EB]
    flex flex-col min-h-[210px]"
  >
    {/* Accent Stripe */}
    <span className="absolute left-0 top-0 h-full w-1
    bg-gradient-to-b from-[#F4B400] to-[#FFCC33]
    rounded-l-xl" />

    {/* Stars */}
    <div className="flex gap-1 mb-2 text-[#F4B400] text-xs">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} />
      ))}
    </div>

    {/* Text */}
    <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
      “{item.text}”
    </p>

    {/* User */}
    <div className="flex items-center gap-3 mt-auto">
      <div className="w-10 h-10 rounded-full
      bg-[#1C1C1C] text-white
      flex items-center justify-center">
        <FaUserCircle />
      </div>

      <div>
        <h4 className="text-sm font-medium text-[#111111]">
          {item.name}
        </h4>
        <p className="flex items-center gap-1 text-xs text-[#16A34A]">
          <FaCheckCircle />
          Verified Customer
        </p>
      </div>
    </div>
  </motion.div>
);