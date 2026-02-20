import type { Metadata } from "next";
import { Amiri, Lora, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"]
});

const bangla = Noto_Serif_Bengali({
  subsets: ["bengali"],
  variable: "--font-bangla",
  weight: ["400", "500", "600", "700"]
});

const amiri = Amiri({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Ramadan Planner 2026 - Bangladesh",
  description:
    "Interactive Ramadan Planner 2026 for Bangladesh with Google authentication, Supabase sync, division-based prayer times, and multi-language support."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" data-theme="light">
      <body className={`${lora.variable} ${bangla.variable} ${amiri.variable}`}>{children}</body>
    </html>
  );
}
