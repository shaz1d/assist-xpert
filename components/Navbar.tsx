"use client";

import { siteConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import { AlignLeft, X } from "lucide-react";
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
        isScrolling ? "bg-content" : "bg-black/0 ",
        "w-full -mb-16 z-50 sticky top-0 transition"
      )}
    >
      <nav className="container-x z-30 w-full h-16 grid grid-cols-3 items-center relative ">
        <Link href={"/"}>
          <Image src="/assist-xpert-logo.svg" width={64} height={20} alt="" />
        </Link>
        <ul className="hidden lg:flex lg:flex-row gap-3 md:gap-10">
          {siteConfig.mainNav.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={cn(
                    "hover:text-white group/item transition py-1 duration-200 uppercase tracking-wider",
                    pathname === item.path ? "text-white" : "text-white/60"
                  )}
                  href={item.path ? item.path : ""}
                >
                  {item.name}

                  {item.submenu && (
                    <div className="absolute transition duration-500 top-10 left-1/2 -translate-x-1/2 invisible group-hover/item:visible opacity-0 group-hover/item:opacity-100 -translate-y-10 group-hover/item:translate-y-0 pt-5">
                      <ul className=" w-max  grid grid-cols-4 gap-4 bg-white p-4 rounded-lg">
                        {item.submenu.map((subItem, index) => (
                          <li
                            key={index}
                            className="bg-primary p-1 rounded-md "
                          >
                            <Link
                              href={subItem.path}
                              className="min-h-64 p-5 transition duration-200 hover:bg-white hover:text-primary flex flex-col justify-center items-center text-6xl rounded-[4px]"
                            >
                              <i className={cn("bx", subItem.icon)}></i>
                              <h4 className="text-base ">{subItem.name}</h4>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-5 justify-self-end col-span-2 lg:col-span-1">
          <Linkbtn href="/contact">Lets Talk</Linkbtn>
          {open ? (
            <X className="cursor-pointer" onClick={toggleMenu} />
          ) : (
            <AlignLeft className="cursor-pointer" onClick={toggleMenu} />
          )}
        </div>
      </nav>
      <div
        className={cn(
          open
            ? "opacity-1 pointer-events-all"
            : "opacity-0 pointer-events-none",
          "fixed h-screen w-full top-0 z-10 transition duration-500 pt-16 overflow-y-scroll scrollbar-none bg-gradient-to-br from-primary to-primary-lt"
        )}
      >
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 py-12">
            <ul className=" flex flex-col">
              {siteConfig.subNav.map((item, index) => {
                return (
                  <li key={index} className="group">
                    <Link
                      className={cn(
                        "hover:text-white text-3xl inline-block transition text-gray-100 duration-200 uppercase py-4 tracking-wider relative",
                        pathname === item.path ? "text-white" : ""
                      )}
                      href={item.path ? item.path : ""}
                    >
                      <span className=" bg-white absolute w-0 h-[2px] bottom-1 group-hover:w-full transition-all duration-300"></span>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className=" space-y-6">
              <div className="font-extralight space-y-4">
                <h2 className=" text-3xl">
                  The Right Hire. <br /> Right Now.
                </h2>
                <p className=" font-extralight">
                  Everything you need to transform your work.
                </p>
              </div>

              <ul>
                {siteConfig.subSubNav.map((item, index) => {
                  return (
                    <li key={index} className="group">
                      <Link
                        className={cn(
                          "hover:text-white font-semibold tracking-widest inline-block transition text-gray-100 duration-200 uppercase py-1 relative",
                          pathname === item.path ? "text-white" : ""
                        )}
                        href={item.path ? item.path : ""}
                      >
                        <span className=" bg-white absolute w-0 h-[2px] bottom-0 group-hover:w-full transition-all duration-300"></span>
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
