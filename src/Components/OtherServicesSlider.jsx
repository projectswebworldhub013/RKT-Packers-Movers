import React, { useMemo, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import servicesData from "../data/servicesData";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function OtherServicesSlider() {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(350);

  const otherServices = useMemo(
    () => servicesData.filter((s) => !s.path.endsWith(serviceSlug)),
    [serviceSlug]
  );

  // Duplicate slides for infinite loop
  const slides = [...otherServices, ...otherServices];

  /* Responsive card width */
  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) {
        setCardWidth(window.innerWidth - 48);
      } else if (window.innerWidth < 1024) {
        setCardWidth(320);
      } else {
        setCardWidth(380);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  /* Auto slide */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => i + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  /* Infinite loop reset */
  useEffect(() => {
    if (index >= otherServices.length) {
      setTimeout(() => {
        setIndex(0);
      }, 900);
    }
  }, [index, otherServices.length]);

  const truncate = (text, words = 14) => {
    const split = text.split(" ");
    return split.length <= words
      ? text
      : split.slice(0, words).join(" ") + "...";
  };

  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6 border-t border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest uppercase text-[#6B7280]">
            More Solutions
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mt-3">
            Explore Our{" "}
            <span className="text-[#F4B400]">Other Services</span>
          </h2>

          <div className="flex justify-center items-center gap-2 mt-4">
            <span className="w-10 h-[2px] bg-[#E5E7EB]" />
            <span className="w-20 h-[4px] bg-[#F4B400] rounded-full" />
            <span className="w-10 h-[2px] bg-[#E5E7EB]" />
          </div>

          <p className="mt-5 text-[#6B7280] max-w-2xl mx-auto text-sm md:text-base">
            Discover more professional relocation and logistics services by{" "}
            <span className="font-semibold text-[#111111]">
              RKT Packers & Movers
            </span>
            , trusted across India for safety, reliability, and seamless moving.
          </p>
        </div>

        {/* ================= SLIDER ================= */}
        <div className="relative">

          {/* Desktop Arrows */}
          <div className="hidden md:flex absolute -top-20 right-0 gap-4 z-10">
            <button
              onClick={() => setIndex((i) => Math.max(i - 1, 0))}
              className="w-12 h-12 rounded-full border border-[#F4B400] text-[#F4B400]
              hover:bg-[#F4B400] hover:text-[#111111] transition flex items-center justify-center"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={() => setIndex((i) => i + 1)}
              className="w-12 h-12 rounded-full border border-[#F4B400] text-[#F4B400]
              hover:bg-[#F4B400] hover:text-[#111111] transition flex items-center justify-center"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Slider Track */}
          <motion.div
            className="flex"
            animate={{ x: `-${index * (cardWidth + 32)}px` }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          >
            {slides.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -14, scale: 1.02 }}
                className="shrink-0 mx-4 bg-[#FAFAFA] border border-[#E5E7EB]
                rounded-2xl shadow-xl overflow-hidden cursor-pointer"
                style={{ width: cardWidth }}
                onClick={() => navigate(service.path)}
              >
                {/* IMAGE */}
                <div className="relative h-[210px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col h-[190px]">
                  <h3 className="text-lg font-bold text-[#111111] mb-2">
                    {service.name}
                  </h3>

                  <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
                    {truncate(service.description)}
                  </p>

                  <div className="mt-auto flex items-center justify-between text-[#F4B400] font-semibold text-sm">
                    <span>View Details</span>
                    <FaArrowRight />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}