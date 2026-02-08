// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaArrowRight,
  FaPhoneAlt,
  FaPeopleCarry,
  FaExchangeAlt,
  FaBoxOpen,
  FaTruckMoving,
  FaCarSide,
  FaMotorcycle,
  FaDog,
  FaDolly,
  FaTwitter,
  FaLinkedinIn,
  FaHome,
  FaWarehouse,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Translator from "./Translator";
import VisitorCounter from "./VIsitorCounter";

/* ================= ANIMATION ================= */
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ================= SERVICES DATA ================= */
const servicesData = [
  { name: "Packers & Movers Service", path: "/services/packers-and-movers", icon: FaPeopleCarry },
  { name: "Home Shifting Service", path: "/services/home-shifting", icon: FaHome },
  { name: "Office Relocation Service", path: "/services/office-relocation", icon: FaExchangeAlt },
  { name: "Household Item Shifting", path: "/services/household-shifting", icon: FaBoxOpen },
  { name: "Intercity Relocation", path: "/services/intercity-relocation", icon: FaTruckMoving },
  { name: "Car Transport Service", path: "/services/car-transport", icon: FaCarSide },
  { name: "Bike Transport Service", path: "/services/bike-transport", icon: FaMotorcycle },
  { name: "Pet Relocation Service", path: "/services/pet-relocation", icon: FaDog },
  { name: "Loading & Unloading Service", path: "/services/loading-unloading", icon: FaDolly },
  { name: "Warehouse & Storage Service", path: "/services/warehouse-storage", icon: FaWarehouse },
];

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="bg-[#F8F9FA] pt-20 pb-10 px-6 md:px-16 border-t border-[#E5E7EB]"
    >
      {/* MAIN GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm text-[#6B7280]">

        {/* ABOUT */}
        <div className="space-y-4">
          <h4 className="text-3xl font-[italiana] text-[#111111]">
            RKT Packers & Movers
          </h4>
          <p className="leading-relaxed">
            RKT Packers & Movers is a trusted relocation company in Chennai,
            delivering safe, timely, and professional packing and moving
            solutions. With trained staff, secure transportation, and transparent
            pricing, we ensure a smooth and stress-free moving experience
            across India.
          </p>

          {/* WEBMAIL */}
          <a
            href="https://md-in-82.webhostbox.net:2096/cpsess3927650103/3rdparty/roundcube/?_task=mail&_mbox=INBOX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F4B400] text-[#111111] px-5 py-2 rounded-full font-semibold shadow hover:bg-[#FFCC33] transition"
          >
            Access Webmail
          </a>

          
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-2xl mb-4 font-[italiana] text-[#111111]">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Gallery", "/gallery"],
              ["Contact Us", "/contact"],
              ["Certificates", "/certificates"],
            ].map(([text, link], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 transition hover:text-[#F4B400]"
                >
                  <FaArrowRight className="text-[#F4B400]" /> {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* EMAIL */}
          <h4 className="mt-6 text-2xl font-[italiana] text-[#111111]">
            Email
          </h4>
          <ul className="mt-2 space-y-2">
            {[
              "rktpackersmoverschennai@gmail.com",
              "info@rktpackersmoverschennai.co.in",
            ].map((email, idx) => (
              <li key={idx}>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 transition hover:text-[#F4B400]"
                >
                  <FaEnvelope className="text-[#F4B400]" />
                  {email}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-2xl mb-4 font-[italiana] text-[#111111]">
            Our Services
          </h4>
          <ul className="space-y-2">
            {servicesData.map(({ name, path, icon: Icon }, i) => (
              <li key={i}>
                <Link
                  to={path}
                  className="flex items-center gap-2 transition hover:text-[#F4B400]"
                >
                  <Icon className="text-[#F4B400]" /> {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-2xl mb-4 font-[italiana] text-[#111111]">
            Contact Info
          </h4>

          <address className="not-italic leading-relaxed mb-4">
            X6M6+4VH, 4th Cross Street,<br />
            Nethaji Colony, Rajiv Nagar,<br />
            Velachery, Chennai,<br />
            Tamil Nadu – 600042, India
          </address>

          <a
  href="tel:+919600961026"
  className="block mb-3 text-[#111111] font-medium hover:text-[#F4B400] transition"
>
  <FaPhoneAlt className="inline mr-2 text-[#F4B400]" />
  +91 96009 61026
</a>

<a
  href="tel:+919600961036"
  className="block text-[#111111] font-medium hover:text-[#F4B400] transition"
>
  <FaPhoneAlt className="inline mr-2 text-[#F4B400]" />
  +91 96009 61036
</a>
<div className="flex">
            <Translator />
            <div className="w-32" />
          </div>
          {/* SOCIAL */}
          <div className="mt-6 flex gap-4 text-lg text-[#111111]">
            <a href="#" className="hover:text-[#F4B400] transition"><FaYoutube /></a>
            <a href="#" className="hover:text-[#F4B400] transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#F4B400] transition"><FaInstagram /></a>
            <a href="#" className="hover:text-[#F4B400] transition"><FaTwitter /></a>
            <a href="#" className="hover:text-[#F4B400] transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-12 text-center text-xs text-[#6B7280] border-t border-[#E5E7EB] pt-6 space-y-2">
        <VisitorCounter />
        <p>
          © {new Date().getFullYear()} RKT Packers & Movers. All rights reserved.
        </p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#111111] hover:text-[#F4B400] transition"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}