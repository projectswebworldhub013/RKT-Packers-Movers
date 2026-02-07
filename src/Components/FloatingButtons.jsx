// src/components/FloatingButtons.jsx
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaTimes,
  FaEnvelope,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FloatingButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-12 right-6 z-50 flex flex-col items-center gap-4">
      {/* Floating Action Buttons */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 📞 Call */}
            <motion.a
              key="call"
              href="tel:+919600961026"
              title="Call RKT Packers & Movers"
              initial={{ opacity: 0, y: 20, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0 }}
              transition={{ duration: 0.3 }}
              className="w-14 h-14 flex items-center justify-center rounded-full
                bg-gradient-to-br from-[#F4B400] to-[#FFCC33] text-black
                shadow-2xl ring-2 ring-white/30
                hover:scale-110 transition"
            >
              <FaPhoneAlt size={22} />
            </motion.a>

            {/* 💬 WhatsApp */}
            <motion.a
              key="whatsapp"
              href="https://wa.me/919600961026"
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp"
              initial={{ opacity: 0, y: 20, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="w-14 h-14 flex items-center justify-center rounded-full
                bg-gradient-to-br from-[#16a34a] to-[#22c55e] text-white
                shadow-2xl ring-2 ring-white/30
                hover:scale-110 transition"
            >
              <FaWhatsapp size={26} />
            </motion.a>

            {/* 📧 Email */}
            <motion.a
              key="email"
              href="mailto:rktpackersandmovers@gmail.com"
              title="Send Email"
              initial={{ opacity: 0, y: 20, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="w-14 h-14 flex items-center justify-center rounded-full
                bg-gradient-to-br from-[#111827] to-[#374151] text-white
                shadow-2xl ring-2 ring-white/30
                hover:scale-110 transition"
            >
              <FaEnvelope size={22} />
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <div className="relative">
        {/* Ripple Rings */}
        <span className="absolute inset-0 rounded-full bg-[#F4B400]/30 animate-ping-slow"></span>
        <span className="absolute inset-0 rounded-full bg-black/20 animate-ping-slower"></span>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          className="relative w-14 h-14 md:w-16 md:h-16 rounded-full
            bg-gradient-to-br from-[#F4B400] to-[#FFCC33]
            flex items-center justify-center
            shadow-2xl hover:scale-105 transition"
        >
          {isOpen ? (
            <FaTimes className="text-black text-2xl" />
          ) : (
            <FaWhatsapp className="text-black text-2xl" />
          )}
        </motion.button>
      </div>

      {/* Ripple Animation */}
      <style>{`
        @keyframes pingSlow {
          0% { transform: scale(1); opacity: 0.6; }
          80% { transform: scale(2); opacity: 0; }
          100% { opacity: 0; }
        }
        .animate-ping-slow {
          animation: pingSlow 3s linear infinite;
        }
        .animate-ping-slower {
          animation: pingSlow 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FloatingButtons;