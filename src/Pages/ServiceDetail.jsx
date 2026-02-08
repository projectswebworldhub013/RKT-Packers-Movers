// src/pages/ServiceDetail.jsx

import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import servicesData from "../data/servicesData";
import {
  FaCheckCircle,
  FaArrowLeft,
  FaPhoneAlt,
  FaTruckMoving,
  FaMapMarkedAlt,
} from "react-icons/fa";
import OtherServicesSlider from "../Components/OtherServicesSlider";
import CTASection from "../Components/CTASection";

export default function ServiceDetail() {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();

  const service = servicesData.find((s) =>
    s.path.endsWith(serviceSlug)
  );

  if (!service) {
    return (
      <div className="text-center py-24 text-[#DC2626] text-xl font-medium">
        Service not found.
      </div>
    );
  }

  const { name, image, icon: Icon, description, features } = service;

  return (
    <>
      <section className="mt-28 min-h-screen w-full bg-[#FFFFFF] py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-14">

          {/* ================= HEADER ================= */}
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-sm text-[#6B7280]">
              <Link to="/" className="hover:text-[#F4B400] transition">
                Home
              </Link>{" "}
              / <span className="text-[#F4B400] font-medium">{name}</span>
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-[#111111] mt-3">
              {name}
            </h1>

            <div className="w-20 h-1 bg-[#F4B400] mx-auto mt-4 rounded-full" />

            <p className="text-[#6B7280] mt-5 max-w-3xl mx-auto text-base md:text-lg">
              Professional relocation solutions by{" "}
              <span className="font-semibold text-[#111111]">
                RKT Packers & Movers
              </span>{" "}
              — trusted for safety, reliability, and stress-free moving
              experiences across India.
            </p>
          </motion.div>

          {/* ================= MAIN CONTENT ================= */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">

            {/* IMAGE */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E5E7EB]">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-[420px] object-cover"
                />
                <Icon className="absolute bottom-4 right-4 text-white text-6xl opacity-20" />
              </div>
            </motion.div>

            {/* TEXT */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="bg-[#F8F9FA] shadow-xl rounded-2xl p-8 border border-[#E5E7EB]">

                <div className="flex items-center gap-4 mb-5">
                  <Icon className="text-[#F4B400] text-3xl" />
                  <h2 className="text-2xl font-bold text-[#111111]">
                    {name}
                  </h2>
                </div>

                <p className="text-[#6B7280] leading-relaxed mb-7 text-base">
                  {description}
                </p>

                <h3 className="text-lg font-semibold text-[#111111] mb-4">
                  Why Choose This Service
                </h3>

                <ul className="space-y-3 mb-8">
                  {features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-[#6B7280]"
                    >
                      <FaCheckCircle className="text-[#16A34A] mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/"
                    className="
                      inline-flex items-center justify-center gap-2
                      text-sm font-medium
                      text-[#111111]
                      border border-[#E5E7EB]
                      bg-white
                      hover:bg-[#F8F9FA]
                      px-6 py-2.5
                      rounded-md
                      transition-all
                    "
                  >
                    <FaArrowLeft />
                    Back to Home
                  </Link>

                  <button
                    onClick={() => navigate("/contact")}
                    className="
                      inline-flex items-center justify-center gap-2
                      text-sm font-semibold
                      text-[#111111]
                      bg-[#F4B400]
                      hover:bg-[#FFCC33]
                      px-6 py-2.5
                      rounded-md
                      transition-all
                    "
                  >
                    <FaPhoneAlt />
                    Get Enquiry
                  </button>
                </div>

              </div>
            </motion.div>
          </div>

          {/* ================= TRUST STATS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center"
          >
            <div className="bg-[#F8F9FA] border border-[#E5E7EB] shadow-md rounded-xl py-6 px-4">
              <FaTruckMoving className="text-[#F4B400] text-3xl mb-3 mx-auto" />
              <h4 className="font-bold text-lg text-[#111111]">
                5000+ Successful Moves
              </h4>
              <p className="text-[#6B7280] text-sm mt-1">
                Trusted by families & businesses nationwide.
              </p>
            </div>

            <div className="bg-[#F8F9FA] border border-[#E5E7EB] shadow-md rounded-xl py-6 px-4">
              <FaMapMarkedAlt className="text-[#F4B400] text-3xl mb-3 mx-auto" />
              <h4 className="font-bold text-lg text-[#111111]">
                PAN India Network
              </h4>
              <p className="text-[#6B7280] text-sm mt-1">
                Covering metros, cities & remote locations.
              </p>
            </div>

            <div className="bg-[#F8F9FA] border border-[#E5E7EB] shadow-md rounded-xl py-6 px-4">
              <FaCheckCircle className="text-[#16A34A] text-3xl mb-3 mx-auto" />
              <h4 className="font-bold text-lg text-[#111111]">
                Customer Satisfaction
              </h4>
              <p className="text-[#6B7280] text-sm mt-1">
                Safe, transparent & professional services.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      <OtherServicesSlider />
      <CTASection/>
    </>
  );
}