import React from "react";
import {
  FaShieldAlt,
  FaTruckMoving,
  FaUserCheck,
  FaClock,
  FaBoxOpen,
  FaMapMarkedAlt,
} from "react-icons/fa";

const whyChooseData = [
  {
    title: "Trusted & Verified",
    desc: "Professional, transparent & reliable moving services you can trust.",
    icon: <FaShieldAlt />,
    color: "from-[#F4B400] to-[#FFCC33]",
  },
  {
    title: "Safe Transportation",
    desc: "Well-maintained vehicles ensuring secure transit of your goods.",
    icon: <FaTruckMoving />,
    color: "from-[#16A34A] to-[#22C55E]",
  },
  {
    title: "Skilled Professionals",
    desc: "Trained staff handling packing, loading & unloading with care.",
    icon: <FaUserCheck />,
    color: "from-[#3B82F6] to-[#2563EB]",
  },
  {
    title: "On-Time Delivery",
    desc: "Committed to timely pickup and delivery without delays.",
    icon: <FaClock />,
    color: "from-[#F97316] to-[#FB923C]",
  },
  {
    title: "Premium Packing",
    desc: "High-quality packing materials for maximum protection.",
    icon: <FaBoxOpen />,
    color: "from-[#8B5CF6] to-[#7C3AED]",
  },
  {
    title: "Pan India Service",
    desc: "Local, intercity & interstate relocation across India.",
    icon: <FaMapMarkedAlt />,
    color: "from-[#EC4899] to-[#DB2777]",
  },
];

const WhyChooseRKT = () => {
  return (
    <section className="relative w-full bg-[#FFFFFF] py-14 px-4 sm:px-6 lg:px-20 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#F4B400]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#FFCC33]/10 rounded-full blur-3xl"></div>
      </div>

      {/* 🔤 Heading */}
      <div className="relative text-center mb-14 z-10">

  {/* Top Label */}
  <p className="text-xs tracking-[0.35em] uppercase text-[#6B7280]">
    Why Choose Us
  </p>

  {/* Main Heading with Side Dividers */}
  <div className="flex items-center justify-center gap-4 mt-3">
    <div className="hidden sm:block w-16 h-[2px] bg-gradient-to-r from-transparent to-[#F4B400] rounded-full"></div>

    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#111111] whitespace-nowrap">
      Why RKT Packers & Movers?
    </h2>

    <div className="hidden sm:block w-16 h-[2px] bg-gradient-to-l from-transparent to-[#F4B400] rounded-full"></div>
  </div>

  {/* Accent Bar */}
  <div className="w-24 h-[3px] bg-gradient-to-r from-[#F4B400] to-[#FFCC33] mx-auto mt-4 rounded-full"></div>

  {/* Sub Heading */}
  <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base text-[#6B7280] leading-relaxed">
    Experience stress-free relocation with professional packing, safe transportation,
    and on-time delivery — trusted by hundreds of happy customers across India.
  </p>

</div>

      {/* 🧩 Cards Grid (Always 3 per row) */}
      <div className="relative grid grid-cols-3 gap-3 sm:gap-6 z-10">

        {whyChooseData.map((item, index) => (
          <div
            key={index}
            className="
              relative group rounded-2xl
              p-[1px] 
              bg-gradient-to-br from-transparent to-transparent
              hover:from-[#F4B400]/40 hover:to-[#FFCC33]/40
              transition-all duration-500
            "
          >
            {/* Card */}
            <div
              className="
                bg-white rounded-2xl
                px-3 py-5 sm:px-6 sm:py-8
                border border-[#E5E7EB]
                shadow-lg
                group-hover:shadow-2xl
                group-hover:-translate-y-1
                transition-all duration-500
                backdrop-blur-sm
              "
            >
              {/* Icon */}
              <div
                className={`
                  w-10 h-10 sm:w-14 sm:h-14
                  mx-auto rounded-full
                  bg-gradient-to-br ${item.color}
                  flex items-center justify-center
                  text-white text-lg sm:text-2xl
                  shadow-lg
                  group-hover:scale-110
                  group-hover:shadow-[0_0_25px_rgba(244,180,0,0.6)]
                  transition-all duration-500
                `}
              >
                {item.icon}
              </div>

              {/* Content */}
              <h4 className="mt-4 text-xs sm:text-sm md:text-base font-semibold text-[#111111] text-center">
                {item.title}
              </h4>
              <p className="mt-2 text-[10px] sm:text-xs md:text-sm text-[#6B7280] text-center leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default WhyChooseRKT;