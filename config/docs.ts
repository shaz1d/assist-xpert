import {
  Achivements,
  Extras,
  FooterLinks,
  NavItem,
  Service,
  Socials,
  Steps,
  Testimonials,
} from "@/types";

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
  achivements: Achivements[];
  extras: Extras[];
  footerLinks: FooterLinks[];
  socials: Socials[];
  testimonials: Testimonials[];
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
      submenu: [
        { name: "Virtual Assistant", icon: "bx-headphone", path: "/blogs" },
        { name: "Web Design", icon: "bx-shape-triangle", path: "/web-design" },
        { name: "Web Development", icon: "bx-code-alt", path: "/web-design" },
        { name: "Branding", icon: "bx-bulb", path: "/web-design" },
      ],
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
      icon: "bx bx-phone",
      step: "Step 1. Sales Call",
      description:
        "Meet with your Solutions Consultant to identify your exact needs and pain points and determine the right hire for you. If BELAY is a good fit, we’ll send you an agreement to sign, and you’ll be paired with a Client Success Consultant.",
    },

    {
      icon: "bx bx-file-find",
      step: "Step 2. Discovery Call",
      description:
        "Meet with your Client Success Consultant to deep dive into your tasks, tools, culture, and personality requirements to ensure we match you with the right specialist.",
    },

    {
      icon: "bx bx-user-voice",
      step: "Step 3. Placement Process",
      description:
        "Now for our Secret Sauce: Your Client Success Consultant will vet and interview top candidates from our bench of nearly 2,000 U.S.-based Specialists. They’ll select the best match for you—in an average of just one week.",
    },

    {
      icon: "bx bx-user-pin",
      step: "Step 4. Kickoff Call",
      description:
        "You, your Client Success Consultant, and your new teammate will have a kickoff call—the official start to your partnership—to meet each other, set initial goals, discuss communication plans, and set yourselves up for success.",
    },

    {
      icon: "bx bx-user-check",
      step: "Step 5. Onboarding",
      description:
        "Your Client Success Consultant stays close to provide our signature exceptional service and guide you through our proven onboarding process",
    },

    {
      icon: "bx bx-badge-check",
      step: "Step 6. Nurturing",
      description:
        "You will have ongoing check-ins to support both you and your BELAY Specialist throughout your partnership with BELAY.",
    },
  ],

  achivements: [
    {
      title: "10000+",
      text: "Happy clients served",
    },

    {
      title: "1 Week",
      text: "Average time for placement",
    },

    {
      title: "93%",
      text: "First match success rate",
    },

    {
      title: "1800",
      text: "Contractors at the ready",
    },
  ],

  extras: [
    {
      icon: "bx bx-map-pin",
      title: "BASED IN THE U.S.",
      text: "Our Specialists are in the U.S. with proven and verified experience.",
    },

    {
      icon: "bx bx-laptop",
      title: "COMPLETELY REMOTE",
      text: "Keep costs low by hiring someone remotely and skipping the overhead.",
    },
    {
      icon: "bx bx-user-check",
      title: "FULLY MANAGED",
      text: "Our team guides you through every step of the process—as you onboard and beyond.",
    },
    {
      icon: "bx bx-receipt",
      title: "FRACTIONAL",
      text: "Only pay for what you need. And if your needs change, so can your commitment.",
    },
  ],

  footerLinks: [
    {
      title: "Get Started",
      link: "/get-started",
    },
    {
      title: "Virtual Assistants",
      link: "/virtual-assistants",
    },
    {
      title: "Accounting Services",
      link: "/accounting-services",
    },
    {
      title: "Social Media Managers",
      link: "/social-mediamanagers",
    },
    {
      title: "More Resources",
      link: "/more-resources",
    },
    {
      title: "Read Our Blog",
      link: "/read-our-blog",
    },
    {
      title: "One Next Step Podcast",
      link: "/one-next-step-podcast",
    },
    {
      title: "Our Company",
      link: "/our-company",
    },
    {
      title: "Jobs",
      link: "/jobs",
    },
  ],
  socials: [
    {
      icon: "bx bxl-twitter",
      link: "www.twitter.com/assisxpert.com",
    },
    {
      icon: "bx bxl-facebook",
      link: "www.facebook.com/assisxpert.com",
    },
    {
      icon: "bx bxl-linkedin",
      link: "www.linkedin.com/assisxpert.com",
    },
    {
      icon: "bx bxl-youtube",
      link: "www.youtube.com/assisxpert.com",
    },
    {
      icon: "bx bxl-instagram",
      link: "www.instagram.com/assisxpert.com",
    },
    {
      icon: "bx bxl-spotify",
      link: "www.spotify.com/assisxpert.com",
    },
    {
      icon: "bx bxs-phone",
      link: "tel:+8801992327887",
    },
    {
      icon: "bx bxs-envelope",
      link: "mailto:info@assistxpert.com",
    },
  ],
  testimonials: [
    {
      text: "I must admit that we were a little skeptical at first, but after getting lectured by Michael Hyatt for a year, we finally decided we'd try a VA. Michael was right – having Kaitie has been a godsend this month. She has helped tie up so many loose ends and free up our time to concentrate on moving the business forward.",
    },
    {
      text: "I never realized how much time I was spending on scheduling and admin tasks until I was able to see all that she has done and does daily. Having my meetings spaced and strategically placed has been so incredibly helpful. She is wonderful!",
    },
    {
      text: "How have I run a business for 13 years without Michelle and all that she does? She has opened my eyes to a lot of things and I really feel like I can start serving my clients well again.",
    },
    {
      text: "No other way to say it – VA Josephine is a superstar! She is the missing piece to our organization and we’re are now asking ourselves, ‘What would we do without Josephine?’",
    },
    {
      text: "This is the best decision I ever made! My business is growing really well and Allie has been hugely influential in aiding the growth and creating processes that allow us to scale well.",
    },
    {
      text: "Kelli is doing a great job. She is very proactive and has already figured out how to stay one step ahead. I love that she is very resourceful and just gets in there to figure things out. I was very nervous about not being able to interview the candidates, but I'm so happy that I trusted the process. BELAY has found me the perfect match!",
    },
    {
      text: "Can you clone Camille? If so, we’d like two more, please! Camille is everything. I recommend BELAY to anyone who will listen because of how much Camille has changed my life for the better.",
    },
    {
      text: "I want to thank you for helping us to figure out how best to use VAs. Because of the quality of your work and responsiveness, you've helped me build confidence with the team that they can let go of tasks and trust you to support them. That's huge!",
    },
  ],
};
