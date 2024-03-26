import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { cn } from "@/lib/utils";
import "boxicons/css/boxicons.min.css";
import type { Metadata } from "next";
import { Roboto_Condensed, Roboto_Slab } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Condensed({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});
const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Assist Xpert",
  description: "Digital Agency Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scrollbar-thin scrollbar-thumb-secondary scrollbar-track-content scrollbar-thumb-rounded-full scroll-smooth"
    >
      <body
        className={cn(
          "min-h-screen bg-secondary text-white ",
          `${roboto.variable} ${roboto_slab.variable}`
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
