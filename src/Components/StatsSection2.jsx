import React from "react";
import mainImg from "../assets/images/img4.jpg"; // RKT moving / packing image
import personImg2 from "../assets/images/owner.jpg"; // happy client image
import {
  FaTruckMoving,
  FaBoxOpen,
  FaMapMarkedAlt,
  FaSmile,
} from "react-icons/fa";
import { motion } from "framer-motion";

/* ================= STATS ================= */

const stats = [
  {
    icon: <FaTruckMoving className="text-[#F4B400] text-3xl md:text-4xl" />,
    value: "5000+",
    label: "Successful Relocations",
  },
  {
    icon: <FaBoxOpen className="text-[#F4B400] text-3xl md:text-4xl" />,
    value: "20+",
    label: "Years of Industry Experience",
  },
  {
    icon: <FaMapMarkedAlt className="text-[#F4B400] text-3xl md:text-4xl" />,
    value: "PAN India",
    label: "Service Network",
  },
  {
    icon: <FaSmile className="text-[#F4B400] text-3xl md:text-4xl" />,
    value: "99%",
    label: "Customer Satisfaction",
  },
];

/* ================= ANIMATION ================= */

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const StatsSection2 = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 md:px-12">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        {/* ================= LEFT CONTENT ================= */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111111] mb-4 leading-tight">
            Trusted Packers & Movers in{" "}
            <span className="text-[#F4B400]">Velachery, Chennai</span>
          </h2>

          <p className="text-[#4A4A4A] mb-10 text-sm sm:text-base leading-relaxed max-w-xl">
            Based in Velachery, Chennai, <strong>RKT Packers & Movers</strong> is a
            professionally managed relocation and logistics service provider
            dedicated to delivering safe, reliable, and affordable moving
            solutions across India. Established in 2025 and led by{" "}
            <strong>Mr. King King</strong>, who brings over{" "}
            <strong>20+ years of industry experience</strong>, we specialize in
            secure packing, systematic transportation, and stress-free
            relocation services tailored to individual and business needs.
          </p>

          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4 group transition-transform duration-300 hover:scale-105"
                whileHover={{ y: -4 }}
              >
                <div className="flex-shrink-0">{stat.icon}</div>
                <div>
                  <h3 className="text-xl sm:text-md md:text-xl font-semibold text-[#111111] group-hover:text-[#F4B400] transition-colors duration-300">
                    {stat.value}
                  </h3>
                  <p className="text-[#666666] text-xs sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT IMAGE + TESTIMONIAL ================= */}
        <motion.div
          className="relative flex flex-col items-center md:items-start"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={mainImg}
            alt="RKT Packers & Movers Team"
            className="rounded-2xl w-full object-cover shadow-xl transition-transform duration-500 hover:scale-[1.015]"
          />

          {/* ================= TESTIMONIAL CARD ================= */}
          <div
            className="
              bg-white rounded-xl shadow-lg p-4 w-full max-w-xs
              mt-6
              border-l-4 border-[#F4B400]
              transition-all duration-300
              md:absolute md:bottom-[-20px] md:left-6 md:mt-0
            "
          >
            <p className="text-sm text-[#4A4A4A] italic mb-2">
              “RKT Packers & Movers handled our household relocation with complete
              professionalism. Excellent packing quality, disciplined staff,
              and on-time delivery. Truly a stress-free experience.”
            </p>

            <div className="flex items-center gap-2 mt-2">
              <img
                src={personImg2}
                alt="Happy Client"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="text-sm">
                <p className="font-semibold text-[#111111]">
                  Mr. King King
                </p>
                <p className="text-[#999] text-xs">
                  Chennai
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StatsSection2;