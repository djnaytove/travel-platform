import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Journey — AI Travel Platform",
  description:
    "Стильный лендинг AI-платформы для поиска билетов, отелей и персональных маршрутов.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Script
          src="https://tpwgts.com/content?currency=usd&trs=17387&shmarker=617151&locale=en&powered_by=true&border_radius=20&plain=false&show_hotels=true&color_button=%23B52EFF&color_icons=%23B52EFF&color_focused=%231E90FF&secondary=%23FFFFFF&dark=%23000000&light=%23FFFFFF&special=%23B52EFF&no_labels=false&promo_id=7879&campaign_id=121"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
