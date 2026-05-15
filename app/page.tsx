import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Compass,
  Globe2,
  MapPinned,
  Plane,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import TravelWidget from "@/components/TravelWidget";

const destinations = [
  {
    city: "Bali",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop",
    tag: "Ocean villas",
    price: "from $890",
  },
  {
    city: "Reykjavik",
    country: "Iceland",
    image:
      "https://images.unsplash.com/photo-1504829857797-ddff29c27927?q=80&w=1600&auto=format&fit=crop",
    tag: "Aurora routes",
    price: "from $1,240",
  },
  {
    city: "Kyoto",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop",
    tag: "Culture trip",
    price: "from $1,120",
  },
];

const metrics = [
  ["42k+", "маршрутов собрано"],
  ["18%", "средняя экономия"],
  ["4.9/5", "оценка сервиса"],
  ["24/7", "поддержка в пути"],
];

const features = [
  {
    icon: Sparkles,
    title: "AI-планировщик",
    text: "Собирает перелеты, отели, трансферы и впечатления в один аккуратный план.",
  },
  {
    icon: ShieldCheck,
    title: "Контроль бюджета",
    text: "Следит за ценами, предупреждает о росте и предлагает более выгодные окна поездки.",
  },
  {
    icon: MapPinned,
    title: "Живые подборки",
    text: "Подстраивает рекомендации под сезон, стиль отдыха и темп путешествия.",
  },
];

const timeline = [
  "Расскажите, куда хотите и какой вайб нужен поездке.",
  "Получите готовый маршрут с рейсами, отелями и активностями.",
  "Бронируйте лучшее и держите весь план под рукой офлайн.",
];

const reviews = [
  {
    name: "Анна и Марк",
    route: "Lisbon → Madeira",
    text: "За вечер собрали поездку, на которую раньше уходили недели. Особенно понравились скрытые пляжи и маленькие винодельни.",
  },
  {
    name: "Илья",
    route: "Seoul city break",
    text: "Платформа поймала падение цены на рейс и перестроила отель ближе к районам, где я реально хотел гулять.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070f] text-white">
      <section className="relative isolate px-6 pb-24 pt-6 md:px-10 lg:px-16">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_20%,rgba(93,95,239,0.34),transparent_28%),radial-gradient(circle_at_78%_8%,rgba(236,72,153,0.28),transparent_30%),linear-gradient(135deg,#05070f_0%,#09111f_50%,#160818_100%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[680px] bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

        <header className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/[0.06] px-5 py-4 shadow-2xl shadow-black/20 backdrop-blur-2xl">
          <a href="#top" className="flex items-center gap-3 font-black tracking-tight">
            <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 via-blue-500 to-fuchsia-500 shadow-lg shadow-fuchsia-500/30">
              <Compass className="size-5" />
            </span>
            Next Journey
          </a>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#destinations">
              Направления
            </a>
            <a className="transition hover:text-white" href="#features">
              Возможности
            </a>
            <a className="transition hover:text-white" href="#reviews">
              Отзывы
            </a>
          </nav>
          <a
            href="#search"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
          >
            Найти тур
          </a>
        </header>

        <div id="top" className="mx-auto grid max-w-7xl items-center gap-12 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 backdrop-blur">
              <Sparkles className="size-4 text-cyan-300" />
              AI travel concierge для ярких поездок
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl xl:text-8xl">
              Путешествия, которые выглядят как мечта и планируются за минуты.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Next Journey соединяет поиск билетов, подбор отелей, маршруты и локальные впечатления в стильный персональный лендинг вашей будущей поездки.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#search"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400 px-7 py-4 font-black text-slate-950 shadow-[0_20px_80px_rgba(34,211,238,0.28)] transition hover:-translate-y-1"
              >
                Собрать маршрут
                <ArrowRight className="size-5 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#destinations"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-7 py-4 font-bold backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15"
              >
                Смотреть идеи
              </a>
            </div>
          </div>

          <div className="relative min-h-[560px]">
            <div className="absolute right-0 top-0 h-[520px] w-full overflow-hidden rounded-[3rem] border border-white/15 bg-white/10 shadow-2xl shadow-fuchsia-950/40 backdrop-blur">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070f] via-[#05070f]/10 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 rounded-[2rem] border border-white/15 bg-black/35 p-6 backdrop-blur-2xl">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Featured escape</p>
                <h2 className="mt-3 text-3xl font-black">Dolomites Luxury Weekend</h2>
                <div className="mt-5 grid grid-cols-3 gap-3 text-sm text-slate-200">
                  <span className="rounded-2xl bg-white/10 p-3">4 days</span>
                  <span className="rounded-2xl bg-white/10 p-3">2 cities</span>
                  <span className="rounded-2xl bg-white/10 p-3">$980</span>
                </div>
              </div>
            </div>
            <div className="absolute -left-4 top-16 rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-2xl md:left-0">
              <Plane className="mb-4 size-7 text-cyan-300" />
              <p className="text-sm text-slate-300">Best flight window</p>
              <p className="text-2xl font-black">Tue, 08:40</p>
            </div>
            <div className="absolute -bottom-2 right-4 rounded-[2rem] border border-white/15 bg-[#0b1020]/80 p-5 shadow-2xl backdrop-blur-2xl md:right-10">
              <div className="mb-3 flex text-amber-300">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-4 fill-current" />
                ))}
              </div>
              <p className="max-w-[220px] text-sm text-slate-200">Маршрут оптимизирован под закаты, гастрономию и короткие переезды.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-10 px-6 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 backdrop-blur-2xl sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(([value, label]) => (
            <div key={label} className="rounded-[1.5rem] bg-white/[0.06] p-6">
              <p className="text-4xl font-black text-cyan-200">{value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="search" className="px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/[0.10] to-white/[0.03] p-6 shadow-[0_40px_140px_rgba(14,165,233,0.16)] backdrop-blur-2xl md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-fuchsia-300">Smart search</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Поиск билетов и отелей в одном окне.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">Начните с дат и направления — виджет поможет быстро перейти к выгодным вариантам, а AI-логика лендинга подскажет, как собрать поездку красивее.</p>
            </div>
            <TravelWidget />
          </div>
        </div>
      </section>

      <section id="destinations" className="px-6 py-12 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">Curated escapes</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Три направления для старта</h2>
            </div>
            <p className="max-w-xl text-slate-300">Выбирайте расслабленный океан, северную драму или городскую эстетику — карточки уже выглядят как готовая кампания для премиального travel-бренда.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {destinations.map((item) => (
              <article key={item.city} className="group relative min-h-[500px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <div className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur-xl">{item.tag}</div>
                  <h3 className="text-4xl font-black">{item.city}</h3>
                  <p className="mt-1 text-slate-300">{item.country}</p>
                  <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                    <span className="font-bold">{item.price}</span>
                    <ArrowRight className="size-5" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-fuchsia-300">Platform power</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Всё, что нужно лендингу travel-продукта</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article key={feature.title} className="rounded-[2.25rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-2xl transition hover:-translate-y-2 hover:bg-white/[0.09]">
                  <div className="mb-8 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-fuchsia-400 text-slate-950">
                    <Icon className="size-7" />
                  </div>
                  <h3 className="text-2xl font-black">{feature.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{feature.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[3rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-2xl lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">How it works</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">От идеи до посадочного — три шага.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">Блок можно использовать для объяснения продукта, он работает как продающая секция и снижает тревогу перед бронированием.</p>
          </div>
          <div className="space-y-5">
            {timeline.map((item, index) => (
              <div key={item} className="flex gap-5 rounded-[2rem] border border-white/10 bg-[#070b16]/70 p-6">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-lg font-black text-slate-950">{index + 1}</div>
                <div>
                  <h3 className="text-xl font-black">Шаг {index + 1}</h3>
                  <p className="mt-2 text-slate-300">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-fuchsia-300">Loved by travelers</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Отзывы, которые продают эмоцию</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {reviews.map((review) => (
              <article key={review.name} className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.10] to-white/[0.03] p-8 backdrop-blur-2xl">
                <div className="mb-6 flex items-center gap-2 text-amber-300">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="size-5 fill-current" />
                  ))}
                </div>
                <p className="text-xl leading-9 text-slate-100">“{review.text}”</p>
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <div>
                    <p className="font-black">{review.name}</p>
                    <p className="text-sm text-slate-400">{review.route}</p>
                  </div>
                  <Globe2 className="size-8 text-cyan-300" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto overflow-hidden rounded-[3rem] border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.28),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))] p-8 text-center shadow-[0_40px_140px_rgba(217,70,239,0.16)] backdrop-blur-2xl md:p-14">
          <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-white text-slate-950">
            <CalendarDays className="size-8" />
          </div>
          <h2 className="mx-auto max-w-4xl text-4xl font-black tracking-tight md:text-6xl">Готовы превратить идею поездки в красивый план?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Этот лендинг уже содержит hero, статистику, поиск, направления, преимущества, процесс, отзывы и финальный CTA — больше пяти полноценных блоков для запуска.</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#search" className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-100">
              Начать поиск
              <CheckCircle2 className="size-5" />
            </a>
            <a href="mailto:hello@nextjourney.example" className="rounded-full border border-white/15 bg-white/10 px-7 py-4 font-bold backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15">
              Связаться с нами
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
