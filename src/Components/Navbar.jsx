import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaBoxOpen,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaTruckMoving,
  FaChevronDown,
  FaPeopleCarry,
  FaExchangeAlt,
  FaCarSide,
  FaMotorcycle,
  FaDog,
  FaDolly,
  FaEnvelope,
  FaYoutube,
  FaWarehouse,
  FaCertificate,
  FaPhoneAlt,
} from "react-icons/fa";
import logo from "../assets/images/rkt-logo.png";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(true);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About Us", path: "/about", icon: <FaInfoCircle /> },
    { name: "Services", path: "/services", icon: <FaServicestack /> },
    { name: "Gallery", path: "/gallery", icon: <FaBoxOpen /> },
    { name: "Contact Us", path: "/contact", icon: <FaPhoneAlt /> },
  ];

 const services = [
  {
    name: "Packers & Movers Service",
    path: "/services/packers-and-movers",
    icon: <FaPeopleCarry />,
  },
  {
    name: "Home Shifting Service",
    path: "/services/home-shifting",
    icon: <FaHome />,
  },
  {
    name: "Office Relocation Service",
    path: "/services/office-relocation",
    icon: <FaExchangeAlt />,
  }
  ,
  {
    name: "Household Item Shifting",
    path: "/services/household-shifting",
    icon: <FaBoxOpen />,
  },
  {
    name: "Intercity Relocation",
    path: "/services/intercity-relocation",
    icon: <FaTruckMoving />,
  },
  {
    name: "Car Transport Service",
    path: "/services/car-transport",
    icon: <FaCarSide />,
  },
  {
    name: "Bike Transport Service",
    path: "/services/bike-transport",
    icon: <FaMotorcycle />,
  },
  {
    name: "Pet Relocation Service",
    path: "/services/pet-relocation",
    icon: <FaDog />,
  },
  {
    name: "Loading & Unloading Service",
    path: "/services/loading-unloading",
    icon: <FaDolly />,
  },
  {
    name: "Warehouse & Storage Service",
    path: "/services/warehouse-storage",
    icon: <FaWarehouse />,
  },
];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setShowTop(!(window.scrollY > lastScrollY && window.scrollY > 60));
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* 🔶 Top Marquee */}
      <div
        className={`bg-[#1C1C1C] text-white text-sm overflow-hidden transition-all duration-500 ${
          showTop ? "h-10 opacity-100" : "h-0 opacity-0"
        }`}
      >
        <div className="h-10 flex items-center">
          <div className="marquee-track flex whitespace-nowrap">
            {[1, 2].map((i) => (
              <p key={i} className="flex items-center gap-6 px-10">
                <FaTruckMoving className="text-[#F4B400]" />
                Welcome to{" "}
                <span className="text-[#F4B400] font-semibold">
                  RKT Packers & Movers
                </span>
                <span className="text-gray-400">|</span>
                <FaEnvelope className="text-[#F4B400]" />
                info@rktpackersmoverschennai.co.in
                <span className="text-gray-400">|</span>
                <FaPhoneAlt className="text-[#F4B400]" />
                +91 96009 61026
                <span className="text-gray-400">|</span>
                <FaCertificate className="text-[#F4B400]" />
                GSTIN : 33CGEPMN4948M2ZX
                <span className="text-gray-400">|</span>
                <FaCertificate className="text-[#F4B400]" />
                UDYAM-TN-02-0449667
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* 🔷 Main Navbar */}
      <nav className="bg-white border-b border-[#E5E7EB] shadow-sm">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 md:px-8 py-2">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="RKT Packers & Movers"
              className="h-14 md:h-16"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8 text-[#111111] font-medium">
              {navLinks.map((link, idx) => (
                <li key={idx} className="relative group">
                  {link.name === "Services" ? (
                    <>
                      <button className="flex items-center gap-1 hover:text-[#F4B400] transition">
                        {link.icon} {link.name}
                        <FaChevronDown className="text-xs mt-1" />
                      </button>

                      <ul className="absolute top-full left-0 mt-3 w-72 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        {services.map((s, i) => (
                          <li key={i}>
                            <Link
                              to={s.path}
                              className="flex items-center gap-3 px-4 py-3 text-sm text-[#2A2A2A] hover:bg-[#F8F9FA] hover:text-[#F4B400]"
                            >
                              {s.icon} {s.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className="flex items-center gap-1 hover:text-[#F4B400] transition"
                    >
                      {link.icon} {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="h-6 w-px bg-[#E5E7EB]" />

            {/* Social Icons */}
            <div className="flex gap-4 text-lg">
  <a
    href="https://www.youtube.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
  >
    <FaYoutube className="text-red-600 hover:scale-110 transition" />
  </a>

  <a
    href="https://www.facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <FaFacebookF className="text-blue-600 hover:scale-110 transition" />
  </a>

  <a
    href="https://www.instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram className="text-pink-600 hover:scale-110 transition" />
  </a>

  {/* Twitter X */}
  <a
    href="https://x.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="X (Twitter)"
  >
    <FaXTwitter className="text-black hover:scale-110 transition" />
  </a>

  <a
    href="https://www.linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn className="text-blue-700 hover:scale-110 transition" />
  </a>
</div>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <FaBars size={26} />
          </button>
        </div>
      </nav>

      {/* 🔷 Mobile Drawer */}
      {/* 🔷 Mobile Drawer */}
<div
  className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform ${
    menuOpen ? "translate-x-0" : "-translate-x-full"
  } transition-transform duration-300`}
>
  {/* Header */}
  <div className="flex items-center justify-between px-5 py-4 border-b border-[#E5E7EB]">
    <span className="text-lg font-semibold text-[#111111]">
      RKT Packers & Movers
    </span>
    <FaTimes
      onClick={() => setMenuOpen(false)}
      className="cursor-pointer text-xl text-[#111111]"
    />
  </div>

  {/* Menu Content */}
  <div className="flex flex-col h-[calc(100vh-64px)]">
  <div className="px-5 py-4 overflow-y-auto flex-1">
    {/* Navigation */}
    <ul className="space-y-1">
      {navLinks.map((link, idx) =>
        link.name === "Services" ? (
          <li key={idx}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full py-3 font-medium text-[#111111]"
            >
              <span className="flex items-center gap-3">
                {link.icon}
                {link.name}
              </span>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Smooth Accordion */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                servicesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="pl-4 border-l border-[#E5E7EB] space-y-1 mt-2">
                {services.map((s, i) => (
                  <li key={i}>
                    <Link
                      to={s.path}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-2 py-2 text-sm text-[#6B7280] hover:text-[#F4B400]"
                    >
                      {s.icon}
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ) : (
          <li key={idx}>
            <Link
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 py-3 font-medium text-[#111111] hover:text-[#F4B400]"
            >
              {link.icon}
              {link.name}
            </Link>
          </li>
        )
      )}
    </ul>

    {/* Divider */}
    <div className="my-6 h-px bg-[#E5E7EB]" />

    {/* Business Info */}
    <div className="space-y-2 text-sm text-[#6B7280]">
      <p>
        <span className="font-semibold text-[#111111]">UDYAM:</span>{" "}
        UDYAM-TN-02-0449667
      </p>
      <p>
        <span className="font-semibold text-[#111111]">GSTIN:</span>{" "}
        33CGEPMN4948M2ZX
      </p>
    </div>

    {/* Divider */}
    <div className="my-6 h-px bg-[#E5E7EB]" />

    {/* Social Icons */}
    <div className="flex items-center justify-between px-2 text-xl">
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <FaFacebookF className="text-[#1877F2]" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <FaInstagram className="text-[#E1306C]" />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
        <FaYoutube className="text-[#FF0000]" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
        <FaLinkedinIn className="text-[#0A66C2]" />
      </a>
      <a href="https://www.x.com" target="_blank" rel="noreferrer">
        <span className="font-bold text-black text-lg">X</span>
      </a>
    </div>
  </div>
  </div>
</div>

      {/* 🔶 Marquee Animation */}
      <style>
        {`
          .marquee-track {
            animation: marquee 28s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </header>
  );
}