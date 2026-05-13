const features = [
  {
    title: "Smart AI Search",
    description:
      "Find destinations, flights and hotels using intelligent recommendations.",
  },
  {
    title: "Best Price Tracking",
    description:
      "Track flight prices and receive instant alerts when prices drop.",
  },
  {
    title: "Personalized Trips",
    description:
      "Create unique travel experiences tailored to your interests.",
  },
];

export default function Features() {
  return (
    <section className="relative z-10 px-6 pb-32">

      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">

          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-fuchsia-400">
            Why us
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            Modern Travel Experience
          </h2>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/10"
            >

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-600 to-blue-500 text-2xl">
                ✦
              </div>

              <h3 className="text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 leading-relaxed text-gray-400">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}