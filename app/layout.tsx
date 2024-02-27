import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import "boxicons/css/boxicons.min.css";
import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
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
    <html lang="en">
      <body
        className={cn("min-h-screen bg-secondary text-white", roboto.className)}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
