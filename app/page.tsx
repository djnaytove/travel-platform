import TravelWidget from "@/components/TravelWidget";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Destinations from "@/components/Destinations";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* BACKGROUND */}
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Travel"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

        {/* CONTENT */}
        <div className="relative z-10 w-full max-w-6xl px-6 text-center">

          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
            AI powered travel platform
          </h1>

          <p className="text-gray-300 text-xl mb-10">
            Find flights, hotels and unforgettable experiences
          </p>

          {/* TRAVELPAYOUTS SEARCH */}
          <div className="bg-black/20 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-[0_0_80px_rgba(181,46,255,0.25)]">
            
           <TravelWidget />

          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <Destinations />

      {/* FEATURES */}
      <Features />

    </main>
  );
}