export default function Navbar() {
  return (
    <header className="relative z-20 flex items-center justify-between px-8 py-6">

      <div className="text-2xl font-black tracking-tight">
        TRAVEL<span className="text-fuchsia-500">.</span>
      </div>

      <nav className="hidden gap-8 text-sm text-gray-300 md:flex">
        <a href="#">Flights</a>
        <a href="#">Hotels</a>
        <a href="#">Tours</a>
        <a href="#">Explore</a>
      </nav>

      <button className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm backdrop-blur-xl transition hover:bg-white/20">
        Sign In
      </button>

    </header>
  );
}