// src/data/servicesData.js

import {
  FaPeopleCarry,
  FaHome,
  FaExchangeAlt,
  FaBoxOpen,
  FaTruckMoving,
  FaCarSide,
  FaMotorcycle,
  FaDog,
  FaDolly,
  FaWarehouse,
} from "react-icons/fa";

import s1 from "../assets/images/services/s1.jpg";
import s2 from "../assets/images/services/s2.jpg";
import s3 from "../assets/images/services/s3.jpg";
import s4 from "../assets/images/services/s4.jpg";
import s5 from "../assets/images/services/s5.jpg";
import s6 from "../assets/images/services/s6.jpg";
import s7 from "../assets/images/services/s7.jpg";
import s8 from "../assets/images/services/s8.jpg";
import s9 from "../assets/images/services/s9.jpg";
import s10 from "../assets/images/services/s10.jpg";

const servicesData = [
  {
    id: 1,
    name: "Packers & Movers Service",
    path: "/services/packers-and-movers",
    icon: FaPeopleCarry,
    image: s1,
    description:
      "RKT Packers & Movers provides reliable and professional packers and movers services designed to make every relocation smooth, secure, and stress-free. From careful packing to safe transportation, we manage the entire process with precision.",
    features: [
      "Premium quality packing materials",
      "Experienced & trained professionals",
      "Safe loading and unloading process",
      "Timely and damage-free delivery",
    ],
  },

  {
    id: 2,
    name: "Home Shifting Service",
    path: "/services/home-shifting",
    icon: FaHome,
    image: s2,
    description:
      "Our home shifting services are tailored to ensure complete safety of your household belongings. We handle everything with care, treating every item as valuable and ensuring a smooth transition to your new home.",
    features: [
      "Complete end-to-end home relocation",
      "Special care for fragile & delicate items",
      "Door-to-door shifting service",
      "Safe and secure handling",
    ],
  },

  {
    id: 3,
    name: "Office Relocation Service",
    path: "/services/office-relocation",
    icon: FaExchangeAlt,
    image: s3,
    description:
      "RKT Packers & Movers offers professional office relocation services with minimal disruption to your business operations. Our team ensures systematic packing, organized transport, and efficient setup at the new location.",
    features: [
      "Planned & time-efficient relocation",
      "IT equipment & office furniture handling",
      "Secure handling of important documents",
      "Corporate-grade relocation solutions",
    ],
  },

  {
    id: 4,
    name: "Household Item Shifting",
    path: "/services/household-shifting",
    icon: FaBoxOpen,
    image: s4,
    description:
      "We specialize in safe household item shifting, including furniture, appliances, and personal belongings, using proper packing techniques and careful handling.",
    features: [
      "Safe packing of household goods",
      "Furniture dismantling & reinstallation",
      "Scratch & damage-free handling",
      "Customized shifting solutions",
    ],
  },

  {
    id: 5,
    name: "Intercity Relocation",
    path: "/services/intercity-relocation",
    icon: FaTruckMoving,
    image: s5,
    description:
      "Our intercity relocation services ensure your belongings are transported safely across cities with timely delivery and complete peace of mind, regardless of distance.",
    features: [
      "Expert long-distance relocation",
      "Well-maintained transport vehicles",
      "Secure transit packaging",
      "Real-time delivery coordination",
    ],
  },

  {
    id: 6,
    name: "Car Transport Service",
    path: "/services/car-transport",
    icon: FaCarSide,
    image: s6,
    description:
      "RKT Packers & Movers provides safe and insured car transport services using modern carriers, ensuring your vehicle reaches its destination in perfect condition.",
    features: [
      "Door-to-door car pickup & delivery",
      "Open & enclosed carrier options",
      "Pre & post transport inspection",
      "Optional insurance coverage",
    ],
  },

  {
    id: 7,
    name: "Bike Transport Service",
    path: "/services/bike-transport",
    icon: FaMotorcycle,
    image: s7,
    description:
      "Our bike transport services ensure secure relocation of two-wheelers with professional packing, proper loading, and timely delivery.",
    features: [
      "Professional bike packing",
      "Cost-effective transport solutions",
      "Secure loading & unloading",
      "On-time delivery assurance",
    ],
  },

  {
    id: 8,
    name: "Pet Relocation Service",
    path: "/services/pet-relocation",
    icon: FaDog,
    image: s8,
    description:
      "We understand pets are family. Our pet relocation services focus on safe, comfortable, and stress-free transportation with trained handlers and proper care.",
    features: [
      "Pet-friendly relocation process",
      "Safe & ventilated travel carriers",
      "Experienced pet handling staff",
      "End-to-end relocation assistance",
    ],
  },

  {
    id: 9,
    name: "Loading & Unloading Service",
    path: "/services/loading-unloading",
    icon: FaDolly,
    image: s9,
    description:
      "Our loading and unloading services ensure safe handling of goods using proper equipment, skilled manpower, and proven techniques.",
    features: [
      "Skilled manpower & modern tools",
      "Systematic stacking methods",
      "Damage prevention practices",
      "Fast & efficient execution",
    ],
  },

  {
    id: 10,
    name: "Warehouse & Storage Service",
    path: "/services/warehouse-storage",
    icon: FaWarehouse,
    image: s10,
    description:
      "RKT Packers & Movers offers secure warehouse and storage solutions for both short-term and long-term needs, ensuring complete safety of your belongings.",
    features: [
      "Clean, dry & secure storage facilities",
      "Short-term & long-term storage options",
      "24/7 security & monitoring",
      "Easy access & inventory management",
    ],
  },
];

export default servicesData;