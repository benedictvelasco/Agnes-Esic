import aboutImage from "../../assets/images/Aboutbg.png";
export default function About() {
  return (
    <section className="relative w-full bg-black overflow-hidden py-40">

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
          Our technicians bring decades of combined experience to every
          repair. Using the latest equipment and genuine parts, we ensure
          your vehicle receives the best care possible.
        </p>

        {/* FEATURES */}
        <div className="flex flex-col gap-5 mt-12 text-white/80">

          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <span>Offers parts and in-house repairs</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <span>Expert Installation</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <span>Transparent Pricing</span>
          </div>

        </div>

        {/* BUTTON */}
        <button className="mt-14 bg-gradient-to-r from-yellow-900 to-yellow-600 text-black font-medium px-10 py-5 hover:opacity-90 transition">
          REQUEST FOR A QUOTE
        </button>

      </div>

    </section>
  );
}