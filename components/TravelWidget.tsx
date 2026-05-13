"use client";

import { useEffect, useRef } from "react";

export default function TravelWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetRef.current) return;

    widgetRef.current.innerHTML = "";

    const script = document.createElement("script");

    script.async = true;

    script.src =
      "https://tpwgt.com/content?currency=usd&trs=528534&shmarker=728117&show_hotels=true&powered_by=true&locale=en&searchUrl=www.aviasales.com%2Fsearch&primary_override=%2332a8dd&color_button=%2332a8dd&color_icons=%2332a8dd&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%2332a8dd&border_radius=16&plain=false&promo_id=7879&campaign_id=100";

    script.charset = "utf-8";

    widgetRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 rounded-[40px] p-[2px] bg-gradient-to-r from-fuchsia-500/40 to-blue-500/40 shadow-[0_0_80px_rgba(181,46,255,0.25)] backdrop-blur-xl">
      <div className="rounded-[38px] bg-black/55 backdrop-blur-2xl p-6 md:p-8">
        <div ref={widgetRef} />
      </div>
    </div>
  );
}