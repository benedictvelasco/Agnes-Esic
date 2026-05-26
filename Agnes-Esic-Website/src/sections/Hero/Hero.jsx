import callIcon from "../../assets/icons/call.svg";
import locIcon from "../../assets/icons/loc.svg";
import barrow from "../../assets/icons/barrow.svg";
import background from "../../assets/images/Container.png";

export default function Hero({ children }) {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${background})` }}
    >

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10">

        {/* NAV */}
        {children}

        {/* HERO CONTENT */}
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-24">

          <h1 className="text-6xl font-bold">Agnes Esic</h1>

          <h2 className="text-6xl font-bold text-yellow-400">
            Trading
          </h2>

          <p className="text-white/70 text-lg max-w-xl mt-6">
            Your trusted partner for quality auto parts and expert repair services in Bacoor, Cavite
          </p>

          <div className="flex gap-4 mt-8">
            <button className="group flex items-center gap-3 bg-yellow-400 text-black px-6 py-3 font-semibold transition-all duration-300 hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-400/50 transform hover:scale-105">
              Shop Parts
              <img src={barrow} className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="group border border-white/30 px-6 py-3 transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400 hover:bg-white/5 transform hover:scale-105">
              Contact Us
            </button>
          </div>

          <div className="mt-10 flex flex-col gap-3 text-white/70 text-sm">

            <button className="flex items-center gap-2">
              <img src={callIcon} className="w-4 h-4" />
              +63 920 949 4699
            </button>

            <button className="flex items-start gap-2">
              <img src={locIcon} className="w-4 h-4 mt-1" />
              Oasis St., Reveal Subd., Real I<br />
              Bacoor, Cavite, Philippines
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}