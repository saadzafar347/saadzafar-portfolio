import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Saad Zafar | Copywriter & Conversion-Focused Web Designer",
  description:
    "I write sales pages and email sequences for coaches and creators, starting with the offer and working out from there.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} ${playfair.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0c] text-[#d1d5db] relative">
        <div
          aria-hidden="true"
          className="fixed inset-0 bg-grid-overlay z-0 pointer-events-none"
        />
        <Navbar />
        <ScrollObserver />
        <div className="flex-1 flex flex-col z-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
