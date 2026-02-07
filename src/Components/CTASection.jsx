import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelopeOpenText,
  FaTruckMoving,
  FaHome,
  FaBuilding,
  FaShieldAlt,
} from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="relative bg-[#FFFFFF] py-12 overflow-hidden">

      {/* Soft Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#F4B400]/20 blur-[110px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#FFCC33]/20 blur-[90px] rounded-full" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <IconBubble icon={<FaTruckMoving />} className="top-16 left-[10%]" />
        <IconBubble icon={<FaHome />} className="top-24 right-[12%]" />
        <IconBubble icon={<FaBuilding />} className="bottom-20 left-[12%]" />
        <IconBubble icon={<FaShieldAlt />} className="bottom-24 right-[10%]" />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold text-[#111111] leading-tight">
          Move Smart. Move Safe.{" "}
          <span className="text-[#F4B400]">Move with RKT</span>
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-[#6B7280] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          From local household shifting to long-distance relocations, RKT
          Packers & Movers ensures secure packing, timely delivery, and a
          completely stress-free moving experience across India.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* Call Now */}
          <a
            href="tel:+919600961026"
            className="
              flex items-center gap-3
              px-8 py-3
              rounded-full
              bg-[#F4B400]
              text-[#111111]
              font-semibold
              shadow-md
              hover:bg-[#FFCC33]
              transition-all duration-300
            "
          >
            <FaPhoneAlt className="text-sm" />
            Call Now
          </a>

          {/* Get Enquiry */}
          <Link
            to="/contact"
            className="
              flex items-center gap-3
              px-8 py-3
              rounded-full
              border border-[#E5E7EB]
              text-[#111111]
              font-semibold
              hover:bg-[#F8F9FA]
              hover:border-[#F4B400]
              transition-all duration-300
            "
          >
            <FaEnvelopeOpenText className="text-base" />
            Get Free Quote
          </Link>
        </div>

        {/* Trust Line */}
        <p className="mt-6 text-sm text-[#6B7280]">
          Trusted by families & businesses for{" "}
          <span className="font-semibold text-[#16A34A]">
            safe & reliable relocations
          </span>
          .
        </p>
      </div>
    </section>
  );
};

/* Floating Icon Bubble */
const IconBubble = ({ icon, className }) => (
  <div
    className={`
      absolute ${className}
      w-12 h-12
      rounded-full
      bg-[#FFFFFF]
      border border-[#E5E7EB]
      shadow-sm
      flex items-center justify-center
      text-[#F4B400]
      text-lg
    `}
  >
    {icon}
  </div>
);

export default CTASection;