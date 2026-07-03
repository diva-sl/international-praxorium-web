import type { NavItemType } from "./navbar.types";

export const navItems: NavItemType[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Programs",
    href: "/programs",
  },
  {
    label: "Our Schools",
    href: "/schools",
    children: [
      {
        label: "Living Lab Institute",
        href: "/schools/living-lab",
      },
      {
        label: "Prof. Rajen Gupta Doctoral School",
        href: "/schools/doctoral",
      },
      {
        label: "DCAC-PRIXOR Lab",
        href: "/schools/dcac-prixor",
      },
    ],
  },
  {
    label: "Governance",
    href: "/governance",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];
