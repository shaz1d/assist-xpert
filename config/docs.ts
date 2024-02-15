import { NavItem, Service } from "@/types";

type SiteConfig = {
  mainNav: NavItem[];
  services: {
    web: Service;
    lead: Service;
    marketing: Service;
    assistance: Service;
  };
};

export const siteConfig: SiteConfig = {
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
      name: "Contact",
      path: "/contact",
    },
  ],
  services: {
    web: {
      title: "Web Design",
      description:
        "We are a digital agency that helps businesses grow faster and more effectively.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos libero dolorem veritatis eius ab hic porro sapiente natus pariatur similique? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos libero dolorem veritatis eius ab hic porro sapiente natus pariatur similique?",
      path: "/services/web",
    },
    lead: {
      title: "Lead Generation",
      description:
        "We are a digital agency that helps businesses grow faster and more effectively.",
      path: "/services/lead",
    },
    marketing: {
      title: "Marketing",
      description:
        "We are a digital agency that helps businesses grow faster and more effectively.",
      path: "/services/marketing",
    },
    assistance: {
      title: "Assistance",
      description:
        "We are a digital agency that helps businesses grow faster and more effectively.",
      path: "/services/assistance",
    },
  },
};
