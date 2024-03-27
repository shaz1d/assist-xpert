export type NavSubmenu = {
  name: string;
  path: string;
  icon: string;
};
export type NavItem = {
  name: string;
  path?: string;
  submenu?: NavSubmenu[];
};

export type Service = {
  title: string;
  description: string;
  path: string;
};

export type ServiceAlt = {
  title: string;
  description: string;
  image: string;
  iconClass: string;
};

export type Socials = {
  icon: string;
  link: string;
};

export type Steps = {
  icon: string;
  step: string;
  description: string;
};

export type Achivements = {
  title: string;
  text: string;
};

export type Extras = {
  icon: string;
  title: string;
  text: string;
};

export type FooterLinks = {
  title: string;
  link: string;
};

export type Testimonials = {
  text: string;
};

type links = {
  title: string;
  link: string;
};

export type FooterGroup = {
  title: string;
  links: links[];
};
