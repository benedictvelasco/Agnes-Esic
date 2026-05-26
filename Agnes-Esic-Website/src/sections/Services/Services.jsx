import React, { useState } from "react";
import userIcon from "../../assets/icons/user.svg";
import cartIcon from "../../assets/icons/cart.svg";
import searchIcon from "../../assets/icons/Icon-3.svg";

const servicesData = [
  {
    id: "01",
    title: "REPAIR SERVICE",
    description:
      "Professional diagnostics and expert mechanical repairs. Advanced technical facility.",
  },
  {
    id: "02",
    title: "PARTS SUPPLY",
    description:
      "Premium auto parts for all vehicle makes and models. Sourced from certified manufacturers.",
  },
  {
    id: "03",
    title: "MAINTENANCE",
    description:
      "Regular maintenance and quick turnaround service to keep your vehicle in peak condition.",
  },
  {
    id: "04",
    title: "TRADING",
    description: "Transparent evaluations and fair deals.",
  },
];

const statsData = [
  { value: "5+", label: "YEARS IN BUSINESS" },
  { value: "100+", label: "PARTS IN STOCK" },
  { value: "100+", label: "HAPPY CUSTOMERS" },
  { value: "98%", label: "SATISFACTION RATE" },
];

export default function AutoPartsShop() {
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <div
      id="services"
      className="min-h-screen flex flex-col font-sans bg-black"
    >
      {/* MAIN CONTENT SECTION (BLACK) */}
      <div className="bg-black w-full pt-20 pb-32 flex-grow">
        <div className="max-w-7xl mx-auto px-6">
          {/* SECTION HEADER */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#FFB800] font-bold text-sm tracking-wider">
              03
            </span>
            <div className="w-12 h-[1px] bg-white/20"></div>
            <span className="text-white/40 text-xs font-semibold tracking-widest uppercase">
              Services
            </span>
          </div>

          {/* TITLE */}
          <div className="border-b border-white/20 pb-6 mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              What we offer<span className="text-[#FFB800]">.</span>
            </h2>
          </div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => setSelectedService(selectedService?.id === service.id ? null : service)}
                className="relative group flex flex-col justify-end h-[420px] p-8 bg-gradient-to-b from-[#1a1a1a] to-black border-l border-t border-white/5 hover:border-[#FFB800]/50 transition-all overflow-hidden cursor-pointer transform hover:scale-105 duration-500"
              >
                {/* Smoky abstract background approximation */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-white/10 to-transparent opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-300"></div>

                {/* LARGE NUMBER */}
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full flex justify-center transition-all duration-500">
                  <span className={`font-black text-[#FFB800] tracking-tighter drop-shadow-lg transition-all duration-500 ${
                    selectedService?.id === service.id || hoveredService === service.id ? 'text-7xl opacity-100' : 'text-8xl opacity-80'
                  }`}>
                    {service.id}
                  </span>
                </div>

                {/* TEXT CONTENT */}
                <div className="relative z-10 mt-auto">
                  <h3 className="text-[#FFB800] text-sm font-bold uppercase tracking-wider mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed transition-all duration-300 ${
                    selectedService?.id === service.id ? 'text-white' : 'text-white/70'
                  }`}>
                    {service.description}
                  </p>
                </div>

                {/* HOVER INDICATOR */}
                {(hoveredService === service.id || selectedService?.id === service.id) && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFB800] to-yellow-300 animate-pulse"></div>
                )}
              </div>
            ))}
          </div>

          {/* STATS SECTION */}
          <div className="mt-32 pt-16 relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-4"
                >
                  <h4 className="text-5xl md:text-6xl font-bold text-[#FFB800]">
                    {stat.value}
                  </h4>
                  <div className="w-10 h-[1px] bg-white/20"></div>
                  <p className="text-white/40 text-xs font-semibold tracking-widest uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            {/* Subtle glow behind stats */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-[#FFB800]/5 blur-[100px] pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full bg-black py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center text-xs">
          {/* FOOTER LEFT */}
          <div className="mb-4 md:mb-0 flex flex-col gap-1">
            <p className="text-white/80">
              © 2026 Agnes Esic Trading. All rights reserved.
            </p>
            <p className="text-white/50">
              Oasis St., Reveal Subd., Real I, Bacoor, Cavite, Philippines
            </p>
          </div>

          {/* FOOTER RIGHT */}
          <div className="flex items-center gap-6 text-white/50">
            <button className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-white transition-colors">
              Terms of Service
            </button>
            <span>+63 920 949 4699</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
