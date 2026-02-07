import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../assets/images/hero/h1.jpg"; // Replace with RKT real image later

const PremiumAboutRKT = () => {
  return (
    <section className="relative w-full bg-[#F8F9FA] py-12 px-6 lg:px-20 overflow-hidden">

      {/* 🔶 Decorative SVG Rings */}
      <div className="absolute inset-0 opacity-[0.18] pointer-events-none">
        <svg width="100%" height="100%">
          <circle cx="18%" cy="28%" r="220" stroke="#111111" strokeWidth="1.2" fill="none" />
          <circle cx="78%" cy="65%" r="260" stroke="#F4B400" strokeWidth="1.3" fill="none" />
          <circle cx="50%" cy="50%" r="340" stroke="#FFCC33" strokeWidth="0.8" fill="none" />
        </svg>
      </div>

      {/* 🔥 Heading Section */}
      <div className="text-center mb-12 relative z-10">
        <p className="text-sm tracking-[0.3em] text-[#6B7280] uppercase">
          About RKT Packers & Movers
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-[#111111] mt-3">
          Reliable Relocation Backed by Trust & Experience
        </h2>

        {/* Accent Line */}
        <div className="w-24 h-[3px] bg-gradient-to-r from-[#F4B400] to-[#FFCC33] mx-auto mt-4 rounded-full"></div>

        <p className="text-[#6B7280] max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
          <span className="font-semibold text-[#111111]">RKT Packers & Movers</span> is a
          professional relocation service provider based in Chennai, delivering
          safe, reliable, and stress-free moving solutions across India.
          <br /><br />
          With years of hands-on experience, we specialize in household shifting,
          office relocation, vehicle transportation, and complete packing services —
          handled with precision, care, and responsibility.
        </p>
      </div>

      {/* ⭐ Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* 🖼️ Image Section */}
        <div className="relative w-full">
          <img
            src={aboutImg}
            alt="RKT Packers & Movers"
            className="rounded-2xl shadow-2xl border border-[#E5E7EB]"
          />

          {/* Accent Frame */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-[#F4B400] rounded-xl opacity-80"></div>
        </div>

        {/* 📝 Content Section */}
        <div className="space-y-7">

          <h3 className="text-3xl md:text-4xl font-bold text-[#111111] leading-tight">
            Moving India with
            <span className="text-[#F4B400] block">Care, Safety & Professionalism</span>
          </h3>

          <p className="text-[#6B7280] text-lg leading-relaxed">
            At RKT Packers & Movers, every relocation is treated as a responsibility.
            From careful packing using premium materials to secure transportation
            and on-time delivery — we ensure your belongings reach safely, every time.
            <br /><br />
            Our trained professionals, modern transport fleet, and customer-first
            approach make us a trusted choice for stress-free relocation.
          </p>

          {/* ✔ Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">

            <div className="p-5 rounded-xl shadow-md bg-[#FFFFFF] border-l-4 border-[#F4B400]">
              <h4 className="text-lg font-semibold text-[#111111]">
                Premium Packing Services
              </h4>
              <p className="text-[#6B7280] text-sm mt-1">
                High-quality materials, expert handling, zero compromise on safety.
              </p>
            </div>

            <div className="p-5 rounded-xl shadow-md bg-[#FFFFFF] border-l-4 border-[#F4B400]">
              <h4 className="text-lg font-semibold text-[#111111]">
                Safe & Timely Transportation
              </h4>
              <p className="text-[#6B7280] text-sm mt-1">
                Secure loading, GPS-tracked vehicles, and on-time delivery.
              </p>
            </div>

          </div>

          {/* CTA */}
          <div className="w-full  flex md:hidden justify-center items-center">
            <Link to="/about">
            <button className="
               px-10 py-3 rounded-lg
              bg-[#F4B400] text-[#111111] font-semibold
              shadow-xl hover:bg-[#FFCC33]
              hover:scale-105 transition-all duration-300
            ">
              Know More About Us →
            </button>
          </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PremiumAboutRKT;