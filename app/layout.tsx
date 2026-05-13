import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Next Journey",
  description: "AI travel platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>

        {/* Travelpayouts Script */}
        <Script
          src="https://tpwgts.com/content?currency=usd&trs=17387&shmarker=617151&locale=en&powered_by=true&border_radius=20&plain=false&show_hotels=true&color_button=%23B52EFF&color_icons=%23B52EFF&color_focused=%231E90FF&secondary=%23FFFFFF&dark=%23000000&light=%23FFFFFF&special=%23B52EFF&no_labels=false&promo_id=7879&campaign_id=121"
          strategy="afterInteractive"
        />

        {children}

      </body>
    </html>
  );
}