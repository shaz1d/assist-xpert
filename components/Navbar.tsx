"use client";

import { siteConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import { AlignLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Linkbtn from "./ui/Linkbtn";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <header
      className={cn(
        isScrolling ? "bg-black/90" : "bg-black/0 ",
        "w-full -mb-16 z-50 sticky top-0 transition"
      )}
    >
      <nav className="container z-30 w-full h-16 flex relative justify-between items-center">
        <Link href={"/"}>
          <Image src="/assist-xpert-logo.svg" width={64} height={20} alt="" />
        </Link>
        <ul className="flex md:flex-row gap-3 md:gap-10">
          {siteConfig.mainNav.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={cn(
                    pathname === item.path ? "text-white" : "text-white/60"
                  )}
                  href={item.path}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-5">
          <Linkbtn href="/contact">Lets Talk</Linkbtn>

          <AlignLeft className=" cursor-pointer" onClick={toggleMenu} />
        </div>
      </nav>
      <div
        style={{
          background: "linear-gradient(135deg,#39E7FA 0%,#0397E7 100%)",
        }}
        className={cn(
          open
            ? "opacity-1 pointer-events-all"
            : "opacity-0 pointer-events-none",
          "fixed bg-gray-300 min-h-screen w-full top-0 z-10 transition duration-500 pt-16"
        )}
      >
        <div className="container">Hello</div>
      </div>
    </header>
  );
};

export default Navbar;
