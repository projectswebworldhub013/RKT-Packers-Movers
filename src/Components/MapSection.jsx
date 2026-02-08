// src/components/MapSection.jsx

import React from "react";
import { FaMapMarkedAlt, FaDirections } from "react-icons/fa";

export default function MapSection() {
  return (
    <section className="bg-[#F8F9FA] py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[#6B7280] mb-2">
            Our Location
          </p>

          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="hidden sm:block w-12 h-[2px] bg-[#F4B400]" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#111111]">
              Visit RKT Packers & Movers
            </h2>
            <span className="hidden sm:block w-12 h-[2px] bg-[#F4B400]" />
          </div>

          <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
            Easily find our office in Chennai. Drop by for relocation planning,
            site inspections, or professional moving consultations.
          </p>
        </div>

        {/* Map Card */}
        <div
          className="
            relative
            bg-[#FFFFFF]
            border border-[#E5E7EB]
            rounded-2xl
            shadow-lg
            overflow-hidden
          "
        >
          {/* Map */}
          <div className="relative w-full h-[320px] sm:h-[400px] md:h-[400px]">
            <iframe
              title="RKT Packers & Movers Location"
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d248756.07885882704!2d80.20867324999999!3d13.04752545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a525d8c83fc21d7%3A0x4ec7de089a15c60b!2sRKT%20PACKERS%20%26%20MOVERS%2C%20X6M6%2B4VH%2C%204th%20Cross%20St%2C%20Nethaji%20Colony%2C%20Rajiv%20Nagar%2C%20Velachery%2C%20Chennai%2C%20Tamil%20Nadu%20600042!3m2!1d12.982811!2d80.2122431!5e0!3m2!1sen!2sin!4v1770559319982!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* Info Bar */}
          <div
            className="
              flex flex-col sm:flex-row
              items-center justify-between
              gap-4
              px-6 py-5
              bg-[#FFFFFF]
              border-t border-[#E5E7EB]
            "
          >
            <div className="flex items-start gap-3 text-center sm:text-left">
              <FaMapMarkedAlt className="text-[#F4B400] text-xl mt-1" />
              <p className="text-sm text-[#111111] leading-relaxed">
                <span className="font-semibold">
                  RKT Packers & Movers
                </span>
                <br />
                4th Cross Street, Nethaji Colony, Rajiv Nagar,
                <br />
                Velachery, Chennai – 600042, Tamil Nadu
              </p>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=RKT+Packers+%26+Movers+Velachery"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-5 py-2.5
                rounded-full
                bg-[#F4B400]
                text-[#111111]
                text-sm
                font-semibold
                hover:bg-[#FFCC33]
                transition
              "
            >
              <FaDirections />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}