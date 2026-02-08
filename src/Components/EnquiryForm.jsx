import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTruckMoving,
  FaClipboardList,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";
import { X } from "lucide-react";

export default function EnquiryForm({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-3">
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#FFFFFF] rounded-2xl shadow-2xl border border-[#E5E7EB]"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[#6B7280] hover:text-[#DC2626] transition"
            >
              <X size={22} />
            </button>

            <div className="p-5 sm:p-6 md:p-8">
              {/* Header */}
              <div className="text-center mb-6">
                <p className="text-xs tracking-widest uppercase text-[#6B7280]">
                  Quick Enquiry
                </p>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111111] mt-1">
                  Get a <span className="text-[#F4B400]">Free Moving Quote</span>
                </h2>

                <p className="mt-2 text-sm text-[#6B7280] max-w-xl mx-auto">
                  Share your relocation details and our expert team at{" "}
                  <span className="font-semibold text-[#111111]">
                    RKT Packers & Movers
                  </span>{" "}
                  will contact you with the best price and safest plan.
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center mb-5">
                <div className="h-px w-20 bg-[#E5E7EB]" />
                <FaShieldAlt className="mx-3 text-[#16A34A]" />
                <div className="h-px w-20 bg-[#E5E7EB]" />
              </div>

              {/* Trust Bar */}
              <div className="flex justify-center mb-6 text-xs sm:text-sm font-semibold text-[#16A34A]">
                100% Safe • Verified • Trusted Moving Professionals
              </div>

              {/* Form */}
              <form
                action="https://formsubmit.co/info@rktpackersmoverschennai.co.in"
                method="POST"
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {/* Moving From */}
                <div className="flex items-center bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl px-3 py-2.5">
                  <FaMapMarkerAlt className="text-[#F4B400] mr-3" />
                  <input
                    type="text"
                    name="moving_from"
                    placeholder="Moving From *"
                    required
                    className="w-full bg-transparent outline-none text-sm text-[#111111] placeholder-[#6B7280]"
                  />
                </div>

                {/* Moving To */}
                <div className="flex items-center bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl px-3 py-2.5">
                  <FaMapMarkerAlt className="text-[#FFCC33] mr-3" />
                  <input
                    type="text"
                    name="moving_to"
                    placeholder="Moving To *"
                    required
                    className="w-full bg-transparent outline-none text-sm text-[#111111] placeholder-[#6B7280]"
                  />
                </div>

                {/* Moving Type */}
                <div className="flex items-center bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl px-3 py-2.5">
                  <FaTruckMoving className="text-[#F4B400] mr-3" />
                  <select
                    name="moving_type"
                    required
                    className="w-full bg-transparent outline-none text-sm text-[#111111]"
                  >
                    <option value="">Moving Type</option>
                    <option>Local (Within City)</option>
                    <option>Domestic (Intercity)</option>
                    <option>Interstate</option>
                    <option>International</option>
                  </select>
                </div>

                {/* Service */}
                <div className="flex items-center bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl px-3 py-2.5">
                  <FaClipboardList className="text-[#F4B400] mr-3" />
                  <select
                    name="service"
                    required
                    className="w-full bg-transparent outline-none text-sm text-[#111111]"
                  >
                    <option value="">Select Service</option>
                    <option>House Shifting</option>
                    <option>Office Relocation</option>
                    <option>Car Transportation</option>
                    <option>Bike Transportation</option>
                    <option>Warehouse & Storage</option>
                    <option>Few Items Moving</option>
                  </select>
                </div>

                {/* Phone */}
                <div className="flex items-center bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl px-3 py-2.5">
                  <FaPhoneAlt className="text-[#F4B400] mr-3" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number *"
                    required
                    className="w-full bg-transparent outline-none text-sm text-[#111111] placeholder-[#6B7280]"
                  />
                </div>

                {/* Moving Time */}
                <div className="flex items-center bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl px-3 py-2.5">
                  <FaClock className="text-[#F4B400] mr-3" />
                  <select
                    name="moving_time"
                    required
                    className="w-full bg-transparent outline-none text-sm text-[#111111]"
                  >
                    <option value="">Preferred Moving Time</option>
                    <option>Immediately</option>
                    <option>Within 7 Days</option>
                    <option>Within 15 Days</option>
                    <option>Within 1 Month</option>
                    <option>Not Fixed</option>
                  </select>
                </div>

                {/* Hidden Settings */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                {/* Submit */}
                <div className="md:col-span-2 flex justify-center pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-8 py-2.5 bg-[#F4B400] hover:bg-[#FFCC33] text-[#111111] font-semibold rounded-full shadow-md transition text-sm"
                  >
                    Get Free Quote
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}