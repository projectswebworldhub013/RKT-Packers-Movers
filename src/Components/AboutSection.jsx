// src/pages/AboutSection.jsx
import React from "react";
import {
  FaTruckMoving,
  FaUserShield,
  FaBullseye,
} from "react-icons/fa";
import aboutImg1 from "../assets/images/rkt-3.png";
import aboutImg2 from "../assets/images/hero/h1.jpg";
import aboutImg3 from "../assets/images/hero/h3.jpg";
import aboutImg4 from "../assets/images/img1.jpg";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="bg-[#F8F9FA] py-20 px-6 md:px-20 text-[#111111]">

      {/* SECTION HEADER */}
      <div className="text-center mb-20 relative">

        <div className="flex justify-center mb-6">
          <span className="h-[2px] w-20 bg-gradient-to-r from-transparent via-[#F4B400] to-transparent"></span>
        </div>

        <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
          About{" "}
          <span className="text-[#F4B400]">RKT Packers & Movers</span>
        </h2>

        <p className="text-[#6B7280] max-w-4xl mx-auto mt-6 text-base md:text-lg leading-relaxed">
          Professionally managed relocation and logistics solutions designed to
          make every move safe, smooth, and stress-free across India.
        </p>

        <div className="flex justify-center items-center gap-3 mt-8">
          <span className="h-[2px] w-12 bg-[#E5E7EB]"></span>
          <span className="h-[6px] w-[6px] rounded-full bg-[#F4B400]"></span>
          <span className="h-[2px] w-12 bg-[#E5E7EB]"></span>
        </div>
      </div>

      {/* BLOCK 1 – COMPANY INTRO */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <img
          src={aboutImg1}
          alt="RKT Packers & Movers Chennai"
          className="rounded-2xl shadow-lg w-full object-cover max-h-[420px]"
        />

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-[#F4B400] text-2xl">
            <FaTruckMoving />
            <h3 className="font-semibold text-2xl">
              Reliable Relocation Experts Since 2025
            </h3>
          </div>

          <p className="text-[#6B7280] text-md md:text-lg">
            Based in Velachery, Chennai,{" "}
            <span className="font-semibold text-[#111111]">
              RKT Packers & Movers
            </span>{" "}
            is a professionally managed relocation and logistics service
            provider offering safe, efficient, and affordable moving solutions
            for households, offices, businesses, and institutions.
          </p>

          <p className="text-[#6B7280] text-md md:text-lg">
            With over{" "}
            <span className="font-semibold text-[#16A34A]">
              20+ years of leadership experience
            </span>{" "}
            under the guidance of Mr. King King, we approach every move with
            responsibility, planning, and attention to detail.
          </p>

          <ul className="list-disc list-inside text-sm md:text-md text-[#111111]">
            <li>Local, intercity & interstate relocation</li>
            <li>Residential & commercial shifting</li>
            <li>Trusted packers & movers in Chennai</li>
          </ul>
        </div>
      </div>

      {/* BLOCK 2 – QUALITY & TRUST */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-[#F4B400] text-2xl">
            <FaUserShield />
            <h3 className="font-semibold text-2xl">
              Safety, Quality & Customer Trust
            </h3>
          </div>

          <p className="text-[#6B7280] text-md md:text-lg">
            Relocation is a sensitive task involving emotional and financial
            value. At RKT Packers & Movers, we ensure{" "}
            <span className="font-semibold text-[#111111]">
              damage-free packing, secure transportation,
            </span>{" "}
            and timely delivery through structured processes and trained
            manpower.
          </p>

          <p className="text-[#6B7280] text-md md:text-lg">
            We use premium packing materials including corrugated boxes, bubble
            wrap, foam sheets, stretch film, thermocol, and wooden crates where
            required.
          </p>

          <ul className="list-disc list-inside text-sm md:text-md text-[#111111]">
            <li>Verified drivers & well-maintained vehicles</li>
            <li>Inventory listing & proper labeling</li>
            <li>Optional insurance coverage</li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src={aboutImg2}
            alt="Professional Packing"
            className="rounded-xl shadow-md object-cover h-[240px] w-full"
          />
          <img
            src={aboutImg3}
            alt="Safe Transportation"
            className="rounded-xl shadow-md object-cover h-[240px] w-full"
          />
        </div>
      </div>

      {/* BLOCK 3 – VISION & COMMITMENT */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-[#F4B400] text-2xl">
            <FaBullseye />
            <h3 className="font-semibold text-2xl">
              Our Mission, Vision & Commitment
            </h3>
          </div>

          <p className="text-[#6B7280] text-md md:text-lg">
            Our mission is to provide safe, efficient, affordable, and
            customer-focused packers and movers services by combining
            experienced leadership, skilled teams, quality materials, and
            systematic logistics planning.
          </p>

          <p className="text-[#6B7280] text-md md:text-lg">
            Our vision is to become one of India’s most trusted and preferred
            packers and movers companies by maintaining consistent service
            quality and building long-term customer relationships.
          </p>

          <ul className="list-disc list-inside text-sm md:text-md text-[#111111]">
            <li>Integrity & transparent pricing</li>
            <li>Customer-first service approach</li>
            <li>Accountability & professionalism</li>
          </ul>

          <Link
            to="/contact"
            className="mt-4 inline-block bg-[#F4B400] text-[#111111] px-6 py-3 rounded-md font-semibold hover:bg-[#FFCC33] transition duration-300 w-max"
          >
            Get in Touch With Us
          </Link>
        </div>

        <img
          src={aboutImg4}
          alt="RKT Packers & Movers Vision"
          className="rounded-2xl shadow-lg w-full object-cover max-h-[420px]"
        />
      </div>
    </section>
  );
};

export default AboutSection;