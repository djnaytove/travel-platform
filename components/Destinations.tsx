const destinations = [
  {
    city: "Maldives",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2070",
  },
  {
    city: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070",
  },
  {
    city: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2070",
  },
];

export default function Destinations() {
  return (
    <section className="relative z-10 px-6 pb-24">

      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex items-end justify-between">

          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-fuchsia-400">
              Explore
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Popular Destinations
            </h2>
          </div>

          <button className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm backdrop-blur-xl transition hover:bg-white/20">
            View all
          </button>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {destinations.map((item) => (
            <div
              key={item.city}
              className="group relative h-[420px] overflow-hidden rounded-[32px]"
            >

              <img
                src={item.image}
                alt={item.city}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8">

                <h3 className="text-3xl font-bold">
                  {item.city}
                </h3>

                <p className="mt-2 text-gray-300">
                  Discover amazing experiences
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}