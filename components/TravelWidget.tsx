"use client";

import { useEffect } from "react";

export default function TravelWidget() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://tp.media/content?trs=17387&shmarker=617151&locale=en&curr=USD&powered_by=true&border_radius=20&plain=false&color_button=%23B52EFF&color_button_text=%23ffffff&promo_id=7879&campaign_id=121";

    script.async = true;
    script.charset = "utf-8";

    const widget = document.getElementById("tp-widget");

    if (widget) {
      widget.innerHTML = "";
      widget.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full">
      <div
        id="tp-widget"
        className="min-h-[120px] flex items-center justify-center"
      ></div>
    </div>
  );
}