import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";

// 🔹 IMPORT HERO IMAGES
import hero1 from "../assets/images/hero/h1.avif";
import hero2 from "../assets/images/hero/h1.jpg";
import hero3 from "../assets/images/hero/h3.jpg";
import hero4 from "../assets/images/hero/hero4.jpg";

const images = [hero1, hero2, hero3, hero4];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // 🔁 AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-8 relative w-full min-h-screen bg-black overflow-hidden">
      {/* 🔥 BACKGROUND SLIDER */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt="RKT Packers and Movers"
              className={`w-full h-full object-cover transition-transform duration-[7000ms] ease-linear ${
                index === current ? "scale-110" : "scale-100"
              }`}
            />
          </div>
        ))}

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-black/20"></div>
      </div>

      {/* 🔹 CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 min-h-screen flex items-center">
        <div className="w-full">

          {/* TOP CONTENT */}
          <div className="max-w-2xl">
            {/* BADGE */}
            <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold tracking-wide rounded-full bg-[#F4B400]/10 text-[#F4B400]">
              Trusted Packers & Movers in Chennai
            </span>

            {/* HEADING */}
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Safe, Reliable &<br />
              Stress-Free Moving<br />
              With <span className="text-[#F4B400]">RKT Packers & Movers</span>
            </h1>

            {/* SUBTEXT */}
            <p className="hidden md:flex mt-6 text-gray-300 text-base md:text-lg leading-relaxed">
              Based in Velachery, Chennai, RKT Packers & Movers offers professional
              household shifting, office relocation, vehicle transportation, and
              end-to-end packing services across India — handled with care,
              precision, and responsibility.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-row sm:flex-row gap-3 sm:gap-4">
  <a
    href="tel:+919600961026"
    className="
      inline-flex items-center justify-center gap-2
      px-4 py-2 text-sm
      sm:px-6 sm:py-3 sm:text-base
      rounded-md bg-[#F4B400] text-black font-semibold
      hover:bg-[#FFCC33] transition
      w-full sm:w-auto
    "
  >
    <FaPhoneAlt className="text-sm sm:text-base" />
    Call Now
  </a>

  <a
    href="/contact"
    className="
      inline-flex items-center justify-center gap-2
      px-4 py-2 text-sm
      sm:px-6 sm:py-3 sm:text-base
      rounded-md border border-white/30 text-white
      hover:bg-white hover:text-black transition
      w-full sm:w-auto
    "
  >
    Get Quote
    <FaArrowRight className="text-sm sm:text-base" />
  </a>
</div>
          </div>

          {/* BOTTOM SECTION: STATS + QUOTE */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">

            {/* STATS (LEFT) */}
            <div className="grid grid-cols-3 gap-6 max-w-md">
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#F4B400]">20+</h3>
                <p className="text-gray-300 text-sm mt-1">
                  Years Experience
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-[#F4B400]">5000+</h3>
                <p className="text-gray-300 text-sm mt-1">
                  Happy Customers
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-[#F4B400]">100%</h3>
                <p className="text-gray-300 text-sm mt-1">
                  Safe Handling
                </p>
              </div>
            </div>

            {/* QUOTE (RIGHT) */}
            <div className="md:justify-self-end max-w-xl">
              <div className="border-l-4 border-[#F4B400] pl-6">
                <p className="text-gray-300 italic text-sm leading-relaxed">
                  “Every move is a responsibility. We treat your belongings with
                  the same care and respect as our own.”
                </p>
                <p className="mt-3 text-white font-semibold text-sm">
                  — Mr. King King, Founder
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}