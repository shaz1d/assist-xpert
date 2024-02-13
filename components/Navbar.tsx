"use client";

import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import { AlignLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Container from "./Container";
import Linkbtn from "./ui/Linkbtn";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <header className="w-full -mb-16 z-50 relative ">
      <Container>
        <nav className="w-full h-16 flex relative justify-between items-center">
          <Link href={"/"}>
            <Image src="/assist-xpert-logo.svg" width={64} height={20} alt="" />
          </Link>
          <ul
            className={cn(
              open
                ? " right-0 opacity-100 bg-secondary"
                : " -right-20 opacity-0",
              "absolute flex flex-col px-7 py-4 rounded-md top-full md:opacity-100 transition-all  md:flex-row md:static gap-3 md:gap-10"
            )}
          >
            {docsConfig.mainNav.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.path}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-5">
            <Linkbtn href="/contact">Lets Talk</Linkbtn>

            <AlignLeft
              className=" cursor-pointer md:hidden"
              onClick={toggleMenu}
            />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
