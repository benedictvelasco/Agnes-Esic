import userIcon from "../../assets/icons/user.svg";
import cartIcon from "../../assets/icons/cart.svg";

export default function Navigation() {
  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-6">

        {/* LEFT */}
        <div className="flex items-center gap-10">

          <h1 className="text-white text-2xl font-bold cursor-pointer">
            Agnes Esic
          </h1>

          <div className="flex items-center gap-6 text-white/70">
            <button className="hover:text-white">Shop Parts</button>
            <button className="hover:text-white">Services</button>
            <button className="hover:text-white">About</button>
            <button className="hover:text-white">Contact</button>
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          <button className="w-10 h-10 flex items-center justify-center">
            <img src={userIcon} className="w-5 h-5" />
          </button>

          <button className="relative w-10 h-10 flex items-center justify-center">
            <img src={cartIcon} className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 text-black text-xs rounded-full flex items-center justify-center">
              0
            </span>
          </button>

        </div>

      </div>
    </nav>
  );
}