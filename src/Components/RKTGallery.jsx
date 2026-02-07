import React from "react";
import imgLeft from "../assets/images/img1.jpg";
import imgCenter from "../assets/images/img2.jpg";
import imgRight from "../assets/images/img3.jpg";
import { Link } from "react-router-dom";

const RKTGallery = () => {
  return (
    <section className="relative w-full bg-[#F8F9FA] py-16 sm:py-20 px-4 sm:px-6 md:px-20 overflow-hidden font-['Roboto']">

      {/* Background Brand Text */}
      <h1 className="absolute top-28 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[32vw] sm:text-[22vw] md:text-[14vw] font-bold text-[#111111] opacity-[0.035] select-none z-0 uppercase tracking-tight">
        RKT
      </h1>

      {/* Section Heading */}
      <div className="relative z-10 text-center mb-12 sm:mb-16">

        {/* Decorative Accent */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
          <span className="block w-10 sm:w-16 h-[2px] bg-[#F4B400]"></span>
          <span className="text-[#F4B400] text-xs sm:text-sm tracking-widest uppercase font-semibold">
            Reliable Moving Experts
          </span>
          <span className="block w-10 sm:w-16 h-[2px] bg-[#F4B400]"></span>
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] leading-snug max-w-4xl mx-auto px-2">
          <span className="text-[#F4B400]">“</span>
          Safe, Professional & Hassle-Free Relocation —
          <span className="text-[#111111] block sm:inline">
            {" "}RKT Packers & Movers
          </span>
          <span className="text-[#F4B400]">”</span>
        </h2>

        {/* Sub Text */}
        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-[#6B7280] px-3">
          From careful packing to secure transportation, we move your valuables
          with precision, responsibility, and on-time commitment across India.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

        {/* Left Column */}
        <div className="flex flex-col justify-between">
          <div className="rounded-2xl overflow-hidden bg-white border border-[#E5E7EB] shadow-md hover:shadow-xl transition-all duration-500 group">
            <img
              src={imgLeft}
              alt="Premium Packing Services"
              className="w-full h-[220px] sm:h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <p className="mt-4 text-sm sm:text-base text-[#6B7280] max-w-xs">
            Premium packing using high-quality materials to ensure complete
            protection of your household and office goods.
          </p>
        </div>

        {/* Center Column */}
        <div className="flex items-center justify-center">
          <div className="relative w-full rounded-2xl overflow-hidden bg-white border border-[#E5E7EB] shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/40 via-transparent to-transparent"></div>
            <img
              src={imgCenter}
              alt="Safe Transportation"
              className="w-full h-[260px] sm:h-[320px] md:h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between">
          <p className="mb-4 text-sm sm:text-base text-[#6B7280] text-right max-w-xs ml-auto">
            Experienced professionals ensuring safe loading, careful handling,
            and timely delivery at every destination.
          </p>
          <div className="rounded-2xl overflow-hidden bg-white border border-[#E5E7EB] shadow-md hover:shadow-xl transition-all duration-500 group">
            <img
              src={imgRight}
              alt="Expert Moving Team"
              className="w-full h-[220px] sm:h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-20 mt-12 sm:mt-16 flex justify-center">
        <Link to="/gallery">
          <button className="relative bg-[#F4B400] text-[#111111] px-8 sm:px-10 py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg hover:bg-[#FFCC33] transition-all duration-300 hover:scale-105">
            View Our Work
          </button>
        </Link>
      </div>

    </section>
  );
};

export default RKTGallery;