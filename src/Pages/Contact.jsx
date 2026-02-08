import React from "react";
import ContactHero from "../Components/ContactHero";
import MapSection from "../Components/MapSection";
import contactBg from "../assets/images/contact-hero.jpg";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CTASection from "../Components/CTASection";

const Contact = () => {
  return (
    <>
      <ContactHero />

      <section className="bg-[#FFFFFF] text-[#111111] py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">

          {/* ================= LEFT CONTENT ================= */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in Touch
            </h2>

            <div className="w-20 h-[3px] bg-[#F4B400] mb-6 rounded-full" />

            <p className="text-[#6B7280] leading-relaxed mb-10 max-w-xl">
              <span className="font-semibold text-[#111111]">
                RKT Packers & Movers
              </span>{" "}
              is a trusted relocation and logistics company based in Chennai,
              offering professional household, office, and vehicle shifting
              services across India. Reach out to us for quotations, site visits,
              or relocation planning with complete peace of mind.
            </p>

            {/* ================= INFO BLOCKS ================= */}
            <div className="space-y-8">

              {/* ADDRESS */}
              <div className="flex items-start gap-4 border-b border-[#E5E7EB] pb-6">
                <FaMapMarkerAlt className="text-[#F4B400] text-xl mt-1" />
                <div>
                  <h4 className="font-semibold mb-1 text-[#111111]">
                    Office Address
                  </h4>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    RKT Packers & Movers, <br />
                    Velachery Main Road, <br />
                    Chennai – 600042, <br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4 border-b border-[#E5E7EB] pb-6">
                <FaPhoneAlt className="text-[#F4B400] text-lg mt-1" />
                <div>
                  <h4 className="font-semibold mb-1 text-[#111111]">
                    Call Us
                  </h4>
                  <p className="text-[#6B7280] text-sm">
                    +91 83286 90773
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-[#F4B400] text-lg mt-1" />
                <div>
                  <h4 className="font-semibold mb-1 text-[#111111]">
                    Email
                  </h4>
                  <p className="text-[#6B7280] text-sm">
                    info@rktpackersmoverschennai.co.in
                  </p>
                  <p className="mt-1 text-[#6B7280] text-sm">
                    rktpackersmoverschennai@gmail.com
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ================= RIGHT FORM ================= */}
          <div
            id="enquiry-form"
            className="
              relative rounded-2xl overflow-hidden
              shadow-xl border border-[#E5E7EB]
            "
            style={{
              backgroundImage: `url(${contactBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#FFFFFF]/90" />

            <div className="relative p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-6 text-[#111111]">
                Enquiry Form
              </h3>

              <form
                action="https://formsubmit.co/info@rktpackersmoverschennai.co.in"
                method="POST"
                className="space-y-6"
              >
                {/* FormSubmit Config */}
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Enquiry - RKT Packers & Movers"
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="
                    w-full bg-transparent
                    border-b border-[#E5E7EB]
                    py-3 text-[#111111]
                    placeholder-[#6B7280]
                    focus:outline-none focus:border-[#F4B400]
                  "
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="
                    w-full bg-transparent
                    border-b border-[#E5E7EB]
                    py-3 text-[#111111]
                    placeholder-[#6B7280]
                    focus:outline-none focus:border-[#F4B400]
                  "
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="
                    w-full bg-transparent
                    border-b border-[#E5E7EB]
                    py-3 text-[#111111]
                    placeholder-[#6B7280]
                    focus:outline-none focus:border-[#F4B400]
                  "
                />

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                  className="
                    w-full bg-transparent
                    border-b border-[#E5E7EB]
                    py-3 text-[#111111]
                    placeholder-[#6B7280]
                    focus:outline-none focus:border-[#F4B400]
                  "
                />

                <button
                  type="submit"
                  className="
                    mt-4 inline-flex items-center justify-center
                    px-8 py-3 rounded-full font-semibold
                    bg-[#F4B400] text-[#111111]
                    hover:bg-[#FFCC33]
                    shadow-lg transition-all duration-300
                  "
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ================= SOCIAL LINKS ================= */}
        <div className="flex justify-center gap-6 mt-16 text-xl">
          <a href="#" className="text-[#1877F2] hover:opacity-80">
            <FaFacebookF />
          </a>
          <a href="#" className="text-[#E1306C] hover:opacity-80">
            <FaInstagram />
          </a>
          <a href="#" className="text-[#111111] hover:opacity-80">
            <FaXTwitter />
          </a>
          <a href="#" className="text-[#0A66C2] hover:opacity-80">
            <FaLinkedinIn />
          </a>
          <a href="#" className="text-[#E60023] hover:opacity-80">
            <FaPinterestP />
          </a>
          <a href="#" className="text-[#FF0000] hover:opacity-80">
            <FaYoutube />
          </a>
        </div>
      </section>

      <MapSection />
      <CTASection/>
    </>
  );
};

export default Contact;