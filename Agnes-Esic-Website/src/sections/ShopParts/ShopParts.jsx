import fluidImg from "../../assets/images/fluid.png";
import brakesImg from "../../assets/images/brakes.png";
import engineImg from "../../assets/images/engine.png";
import tiresImg from "../../assets/images/tires.png";
import barrow from "../../assets/icons/yarrow.svg";

export default function ShopParts() {
  const cards = [
    {
      title: "Premium Fluids",
      tag: "Maintenance",
      img: fluidImg,
    },
    {
      title: "Brake Systems",
      tag: "Safety",
      img: brakesImg,
    },
    {
      title: "Engine Parts",
      tag: "Performance",
      img: engineImg,
    },
    {
      title: "Performance Tires",
      tag: "Tires & Wheels",
      img: tiresImg,
    },
  ];

  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex justify-between items-end mb-10">

          <div>
            <div className="inline-flex items-center border border-yellow-400/30 text-yellow-400 uppercase text-sm px-4 py-2 rounded-full">
              Shop Parts
            </div>

            <h2 className="text-5xl font-bold mt-6">
              Premium Parts <span className="text-yellow-400">Just for you.</span>
            </h2>
          </div>

          <button className="flex items-center gap-2 text-white/80 hover:text-white">
            View All
            <img src={barrow} className="w-4 h-4" />
          </button>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-black border border-white/10 overflow-hidden"
            >

              {/* IMAGE */}
              <div className="relative h-64">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                {/* TAG */}
                <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
                  {card.tag}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 flex items-center justify-between">

                <h3 className="text-lg font-bold">
                  {card.title}
                </h3>

                <button className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center hover:bg-yellow-400/20">
                  <img src={barrow} className="w-4 h-4" />
                </button>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}