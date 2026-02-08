// src/pages/CertificatePage.jsx

import React, { useState } from "react";
import {
  FaEye,
  FaDownload,
  FaTimes,
  FaShieldAlt,
  FaCheckCircle,
  FaUserTie,
} from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";
import { motion } from "framer-motion";

import udyam from "../assets/certificates/udyam-reg.pdf";
import anexture from "../assets/certificates/udyam-anexture.pdf";

/* Certificates Data */
const certificates = [
  {
    id: 1,
    name: "Udyam Registration Certificate",
    description:
      "This MSME certificate officially recognizes RKT Packers & Movers as a government-registered enterprise, ensuring legal compliance, credibility, and professional service standards.",
    file: udyam,
    tag: "MSME Verified",
  },
  {
    id: 2,
    name: "Udyam Annexure Certificate",
    description:
      "The Udyam Annexure provides extended classification and registration details, strengthening transparency and reinforcing our trusted operational status.",
    file: anexture,
    tag: "Government Approved",
  },
];

const CertificatePage = () => {
  const [previewFile, setPreviewFile] = useState(null);

  return (
    <>
      {/* CERTIFICATES SECTION */}
      <section className="mt-24 md:mt-28 w-full py-20 px-6 md:px-16 bg-[#FFFFFF]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#111111] mb-4">
            Official <span className="text-[#F4B400]">Certifications</span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-[#6B7280] leading-relaxed">
            At{" "}
            <span className="font-semibold text-[#111111]">
              RKT Packers & Movers
            </span>
            , our MSME-certified documents reflect transparency, government
            compliance, and the trust we deliver with every relocation service.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {certificates.map(({ id, name, description, file, tag }) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.03 }}
              className="relative bg-[#F8F9FA] border border-[#E5E7EB] rounded-3xl p-8 shadow-md hover:shadow-xl transition"
            >
              {/* Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#F4B400] rounded-t-3xl" />

              {/* Tag */}
              <div className="absolute top-3 right-6 px-4 py-1 rounded-full text-xs font-semibold text-white bg-[#16A34A] shadow">
                {tag}
              </div>

              {/* Title */}
              <div className="flex items-center gap-4 mb-5">
                <HiDocumentText className="text-5xl text-[#F4B400]" />
                <h3 className="text-2xl font-semibold text-[#111111]">
                  {name}
                </h3>
              </div>

              <p className="text-[#6B7280] leading-relaxed mb-8">
                {description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setPreviewFile(file)}
                  className="
                    flex-1 py-3 rounded-xl font-semibold
                    flex items-center justify-center gap-2
                    bg-[#F4B400] text-[#111111]
                    hover:bg-[#FFCC33]
                    transition shadow
                  "
                >
                  <FaEye /> View Certificate
                </button>

                <a
                  href={file}
                  download
                  className="
                    flex-1 py-3 rounded-xl font-semibold
                    flex items-center justify-center gap-2
                    border border-[#F4B400]
                    text-[#111111]
                    hover:bg-[#F4B400]
                    transition
                  "
                >
                  <FaDownload /> Download
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-[#F8F9FA] hidden md:flex py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-10 px-6 text-center">
          {[
            {
              icon: <FaShieldAlt />,
              title: "Government Verified",
              text: "All certificates are officially issued and verified by MSME authorities.",
            },
            {
              icon: <FaCheckCircle />,
              title: "MSME Certified",
              text: "Registered and compliant enterprise under Indian government norms.",
            },
            {
              icon: <FaUserTie />,
              title: "Trusted Brand",
              text: "RKT Packers & Movers is known for transparency and reliability.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow hover:shadow-xl transition"
            >
              <div className="text-5xl text-[#F4B400] flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#111111] mb-3">
                {item.title}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PDF Preview Modal */}
      {previewFile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur p-6">
          <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">
            <button
              onClick={() => setPreviewFile(null)}
              className="absolute top-4 right-4 bg-[#DC2626] text-white p-2 rounded-full hover:scale-110 transition"
            >
              <FaTimes />
            </button>

            <iframe
              src={previewFile}
              title="Certificate Preview"
              className="w-full h-[80vh] border-0"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CertificatePage;