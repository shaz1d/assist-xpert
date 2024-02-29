import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import "boxicons/css/boxicons.min.css";
import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Condensed({ subsets: ["latin"] });

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
          roboto.className
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
