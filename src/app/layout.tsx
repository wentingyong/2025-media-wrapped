// src/app/layout.tsx
import "@/app/globals.scss";
import { Inter, Caveat } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

// move this file to src/fonts/SpecialElite-Regular.ttf if you want
const specialElite = localFont({
  src: "./fonts/SpecialElite-Regular.ttf",
  variable: "--font-special-elite",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable} ${specialElite.variable}`}>
      <body>{children}</body>
    </html>
  );
}
