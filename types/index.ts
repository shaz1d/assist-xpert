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

export type Steps = {
  icon: string;
  step: string;
  description: string;
};

export type Achivements = {
  title: string;
  text: string;
};
