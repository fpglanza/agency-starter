import { patentiData } from "./patenti";

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
  overviewLabel?: string;
  submenuId?: string;
}

export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Chi siamo", href: "/chi-siamo" },
  { label: "Patente Auto", href: "/patente-auto" },
  { label: "Pratiche e rinnovi", href: "/pratiche" },
  {
    label: "Patenti",
    href: "/patenti",
    overviewLabel: "Tutte le patenti",
    submenuId: "mobile-patenti-submenu",
    children: patentiData.items.map((item) => ({
      label: item.title,
      href: `/patenti#${item.slug}`,
    })),
  },
  { label: "Contatti", href: "/contatti" },
];

export const headerCta = {
  label: "contattaci",
  href: "/contatti",
  tracking: {
    event: "cta_click",
    location: "header",
    section: "mobile-menu",
  },
};
