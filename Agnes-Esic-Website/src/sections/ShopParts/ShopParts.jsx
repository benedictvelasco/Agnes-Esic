import React, { useState } from "react";
import fluidImg from "../../assets/images/fluid.png";
import brakesImg from "../../assets/images/brakes.png";
import engineImg from "../../assets/images/engine.png";
import tiresImg from "../../assets/images/tires.png";
import barrow from "../../assets/icons/yarrow.svg";

export default function ShopParts() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Premium Fluids",
      tag: "Maintenance",
      img: fluidImg,
      price: "$15.99",
      description: "High-quality synthetic and conventional oils for optimal engine protection.",
    },
    {
      id: 2,
      title: "Brake Systems",
      tag: "Safety",
      img: brakesImg,
      price: "$49.99",
      description: "Professional-grade brake pads and rotors for safe stopping power.",
    },
    {
      id: 3,
      title: "Engine Parts",
      tag: "Performance",
      img: engineImg,
      price: "$89.99",
      description: "OEM-quality engine components for reliability and performance.",
    },
    {
      id: 4,
      title: "Performance Tires",
      tag: "Tires & Wheels",
      img: tiresImg,
      price: "$129.99",
      description: "Premium tires engineered for traction and durability.",
    },
  ];

  return (
    <section id="shop" className="w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="inline-flex items-center border border-yellow-400/30 text-yellow-400 uppercase text-sm px-4 py-2 rounded-full animate-fade-in">
              Shop Parts
            </div>

            <h2 className="text-5xl font-bold mt-6">
              Premium Parts{" "}
              <span className="text-yellow-400">Just for you.</span>
            </h2>
          </div>

          <button className="flex items-center gap-2 text-white/80 hover:text-yellow-400 transition-colors duration-300">
            View All
            <img src={barrow} className="w-4 h-4" />
          </button>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedCard(card)}
              className="relative bg-black border border-white/10 overflow-hidden cursor-pointer group transform transition-all duration-500 hover:scale-105 hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-400/20"
            >
              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                {/* TAG */}
                <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
                  {card.tag}
                </div>

                {/* HOVER OVERLAY */}
                {hoveredCard === card.id && (
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/30 to-transparent animate-pulse"></div>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-lg font-bold group-hover:text-yellow-400 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-sm text-white/50 mt-2 group-hover:text-white/70 transition-colors duration-300">
                  {card.price}
                </p>
              </div>

              {/* INTERACTIVE BUTTON */}
              <div className="absolute bottom-4 right-4">
                <button className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center hover:bg-yellow-400/40 transition-colors duration-300 transform group-hover:scale-125">
                  <img src={barrow} className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedCard && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 animate-fade-in"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30 rounded-lg p-8 max-w-2xl w-full mx-4 transform transition-all duration-300 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex gap-6">
              <img
                src={selectedCard.img}
                alt={selectedCard.title}
                className="w-48 h-48 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedCard.title}
                </h2>
                <p className="text-yellow-400 font-bold text-2xl mb-4">
                  {selectedCard.price}
                </p>
                <p className="text-white/70 mb-6">{selectedCard.description}</p>
                <div className="flex gap-3">
                  <button className="bg-yellow-400 text-black px-6 py-2 font-semibold hover:bg-yellow-500 transition-colors duration-300">
                    Add to Cart
                  </button>
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="border border-white/30 px-6 py-2 text-white hover:bg-white/10 transition-colors duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-up {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out;
        }
        .animate-scale-up {
          animation: scale-up 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
