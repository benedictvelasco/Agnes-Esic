import Navigation from "../sections/Navigation/Navigation";
import Hero from "../sections/Hero/Hero";
import ShopParts from "../sections/ShopParts/ShopParts";
import About from "../sections/About/About";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <ShopParts />
      <About />
    </main>
  );
}