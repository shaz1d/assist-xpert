import { NavItem, Service, Steps } from "@/types";

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
  howItWorks: Steps[];
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

  howItWorks: [
    {
      icon: "fa-solid fa-phone-volume",
      step: "Step 1. Sales Call",
      description:
        "Meet with your Solutions Consultant to identify your exact needs and pain points and determine the right hire for you. If BELAY is a good fit, we’ll send you an agreement to sign, and you’ll be paired with a Client Success Consultant.",
    },

    {
      icon: "fa-solid fa-magnifying-glass",
      step: "Step 2. Discovery Call",
      description:
        "Meet with your Client Success Consultant to deep dive into your tasks, tools, culture, and personality requirements to ensure we match you with the right specialist.",
    },

    {
      icon: "fa-solid fa-users",
      step: "Step 3. Placement Process",
      description:
        "Now for our Secret Sauce: Your Client Success Consultant will vet and interview top candidates from our bench of nearly 2,000 U.S.-based Specialists. They’ll select the best match for you—in an average of just one week.",
    },

    {
      icon: "fa-solid fa-chalkboard-user",
      step: "Step 4. Kickoff Call",
      description:
        "You, your Client Success Consultant, and your new teammate will have a kickoff call—the official start to your partnership—to meet each other, set initial goals, discuss communication plans, and set yourselves up for success.",
    },

    {
      icon: "fa-solid fa-handshake",
      step: "Step 5. Onboarding",
      description:
        "Your Client Success Consultant stays close to provide our signature exceptional service and guide you through our proven onboarding process",
    },

    {
      icon: "fa-solid fa-user-check",
      step: "Step 6. Nurturing",
      description:
        "You will have ongoing check-ins to support both you and your BELAY Specialist throughout your partnership with BELAY.",
    },
  ],
};
