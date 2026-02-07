import React from "react";

const MapSection = () => {
  return (
    <section className="w-full bg-[#FFFFFF] pt-8 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0F0F0F] tracking-tight">
            Locate <span className="text-[#D32F2F]">Original Packers & Movers</span>
          </h2>

          <div className="flex justify-center items-center gap-2 mt-4">
            <span className="w-8 h-[2px] bg-[#E5E5E5]" />
            <span className="w-16 h-[4px] bg-[#FBC02D] rounded-full" />
            <span className="w-8 h-[2px] bg-[#E5E5E5]" />
          </div>

          <p className="mt-4 text-[#2A2A2A] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Use the interactive map below to find our Secunderabad operations
            center and reach us effortlessly for your relocation needs.
          </p>
        </div>

        {/* MAP */}
        <div className="w-full h-[420px] md:h-[520px] rounded-2xl overflow-hidden border border-[#E5E5E5] shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3805.329249928174!2d78.50354117516733!3d17.491789483413292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI5JzMwLjQiTiA3OMKwMzAnMjIuMCJF!5e0!3m2!1sen!2sin!4v1768029934026!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Original Packers and Movers Location"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
