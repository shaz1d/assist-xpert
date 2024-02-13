import { NavItem } from "@/types";

type DocsConfig = {
  mainNav: NavItem[];
};

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ],
};
