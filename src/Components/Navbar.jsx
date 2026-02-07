import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaPhone,
  FaBoxOpen,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
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
} from "react-icons/fa";
import logo from "../assets/images/rkt-logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(true);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About Us", path: "/about", icon: <FaInfoCircle /> },
    { name: "Services", path: "/services", icon: <FaServicestack /> },
    { name: "Gallery", path: "/gallery", icon: <FaBoxOpen /> },
    { name: "Contact Us", path: "/contact", icon: <FaPhone /> },
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
                <FaPhone className="text-[#F4B400]" />
                +91 96009 61026
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
              <FaYoutube className="text-red-600 hover:scale-110 transition" />
              <FaFacebookF className="text-blue-600 hover:scale-110 transition" />
              <FaInstagram className="text-pink-600 hover:scale-110 transition" />
              <FaTwitter className="text-blue-400 hover:scale-110 transition" />
              <FaLinkedinIn className="text-blue-700 hover:scale-110 transition" />
            </div>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <FaBars size={26} />
          </button>
        </div>
      </nav>

      {/* 🔷 Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center px-5 py-3 border-b">
          <span className="font-bold text-lg">Menu</span>
          <FaTimes onClick={() => setMenuOpen(false)} className="cursor-pointer" />
        </div>

        <div className="px-5 py-4 overflow-y-auto">
          <ul className="space-y-1">
            {navLinks.map((link, idx) =>
              link.name === "Services" ? (
                <li key={idx}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex justify-between w-full py-3 font-medium"
                  >
                    <span className="flex items-center gap-2">
                      {link.icon} {link.name}
                    </span>
                    <FaChevronDown
                      className={`transition-transform ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {servicesOpen && (
                    <ul className="pl-4 border-l space-y-1">
                      {services.map((s, i) => (
                        <li key={i}>
                          <Link
                            to={s.path}
                            onClick={() => setMenuOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-[#F4B400]"
                          >
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={idx}>
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 py-3 font-medium hover:text-[#F4B400]"
                  >
                    {link.icon} {link.name}
                  </Link>
                </li>
              )
            )}
          </ul>
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