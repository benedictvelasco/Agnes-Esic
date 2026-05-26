import React, { useState } from "react";
import aboutImage from "../../assets/images/Aboutbg.png";

export default function About() {
  const [expandedFeature, setExpandedFeature] = useState(0);
  return (
    <section
      id="about"
      className="relative w-full bg-black overflow-hidden py-40"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl -top-10 -left-10"></div>
        <div className="absolute w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl top-96 right-20"></div>
      </div>

      {/* BLURRED IMAGE */}
      <img
        src={aboutImage}
        alt="Aboutbg"
        className="absolute right-0 top-52 w-[1000px] opacity-60 blur-sm"
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* LABEL */}
        <div className="inline-block border border-yellow-400/30 rounded-full px-6 py-2">
          <span className="text-yellow-400 uppercase tracking-wider text-sm">
            About
          </span>
        </div>

        {/* TITLE */}
        <div className="mt-8">
          <h2 className="text-7xl font-bold text-white leading-tight">
            Expert Service,
          </h2>

          <h2 className="text-7xl font-bold text-yellow-400 leading-tight">
            Every time.
          </h2>
        </div>

        {/* DESCRIPTION */}
        <p className="max-w-2xl text-white/70 text-xl leading-8 mt-10">
          Our technicians bring decades of combined experience to every repair.
          Using the latest equipment and genuine parts, we ensure your vehicle
          receives the best care possible.
        </p>

        {/* FEATURES */}
        <div className="flex flex-col gap-4 mt-12">
          {[
            { title: "Offers parts and in-house repairs", detail: "We provide everything under one roof with quality parts and professional repair services." },
            { title: "Expert Installation", detail: "Our certified technicians ensure perfect installation with warranty on all work." },
            { title: "Transparent Pricing", detail: "No hidden fees - you'll always know exactly what you're paying and why." },
          ].map((feature, idx) => (
            <div
              key={idx}
              onClick={() => setExpandedFeature(expandedFeature === idx ? -1 : idx)}
              className="cursor-pointer group"
            >
              <div className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-yellow-400/30">
                <div className={`w-2 h-2 rounded-full mt-2 transition-all duration-300 ${
                  expandedFeature === idx ? 'bg-yellow-300 scale-150' : 'bg-yellow-400'
                }`}></div>
                <div className="flex-1">
                  <span className={`transition-colors duration-300 ${
                    expandedFeature === idx ? 'text-yellow-300 font-semibold' : 'text-white/80 group-hover:text-white'
                  }`}>
                    {feature.title}
                  </span>
                  {expandedFeature === idx && (
                    <p className="text-white/60 text-sm mt-2 animate-fade-in">{feature.detail}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <button className="mt-14 bg-gradient-to-r from-yellow-900 to-yellow-600 text-black font-medium px-10 py-5 hover:opacity-90 transition transform hover:scale-105 duration-300 shadow-lg hover:shadow-yellow-400/50">
          REQUEST FOR A QUOTE
        </button>

        <style>{`
          @keyframes fade-in {
            from { opacity: 0; max-height: 0; }
            to { opacity: 1; max-height: 100px; }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-out;
          }
        `}</style>
      </div>
    </section>
  );
}
