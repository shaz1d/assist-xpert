import { NavItem, Service } from "@/types";

type SiteConfig = {
  mainNav: NavItem[];
  subNav: NavItem[];
  subSubNav: NavItem[];
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

  subNav: [
    {
      name: "Hire Belay",
      path: "/hire-belay",
    },

    {
      name: "Virtual Assistants",
      path: "/virtual-assistants",
    },

    {
      name: "Accounting Services",
      path: "/accounting-services",
    },

    {
      name: "Social Media Managers",
      path: "/social-media-managers",
    },

    {
      name: "Podcast",
      path: "/podcast",
    },

    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Our Company",
      path: "/our-company",
    },
  ],

  subSubNav: [
    {
      name: "Resources",
      path: "/resources",
    },

    {
      name: "Jobs",
      path: "/jobs",
    },

    {
      name: "Diversity & Inclusion",
      path: "/diversity-and-inclusion",
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
        "We are a digital agency that helps businesses grow faster and more effectively. We are a digital agency that helps businesses grow faster and more effectively.Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
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
