import React from "react";

export type NavItem = {
  name: string;
  path: string;
};

export type Service = {
  title: string;
  description: string;
  path: string;
};

export type Socials = {
  icon: React.ReactNode;
  link: string;
};
