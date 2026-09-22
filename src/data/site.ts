import logoColor from "../assets/logo/Asset 20RACING LOGO.png";

export const site = {
  name: "Autoscuola Racing",
  legalName: "CIEMME S.r.l. a socio unico",
  description:
    "Autoscuola tra Favaro Veneto e Salzano. Un percorso chiaro, serio e accompagnato fino a quando sei davvero pronto.",
  url: "https://autoscuolaracing.it",
  language: "it",
  locale: "it_IT",
  defaultSocialImage: "/favicon/favicon_new.jpeg",
  favicons: {
    icon: "/favicon/favicon_new.jpeg",
    appleTouchIcon: "/favicon/favicon_new.jpeg",
  },
  verification: {
    google: "Odi1-K0ZStmL7Htsfu7DZaEDVmYyR6m2NIpBhhAsJTE",
  },
  brand: {
    logo: logoColor.src,
    logoAlt: "Autoscuola Racing",
    homeHref: "/",
  },
  legal: {
    displayName: "Ciemme Srl",
    taxId: "03367550278",
    sdi: "M5UXCR1",
    registeredOffice: "Via Monte Cervino 23/a",
    representative: "Bellato Cristiano",
  },
  locations: [
    {
      name: "Sede di Favaro Veneto",
      addressLines: ["Via M.te Cervino, 23/a", "30173 Favaro Veneto (VE)"],
      phone: {
        href: "tel:+39041630163",
        label: "+39 041 630163",
      },
      hours: "Lunedi - Venerdi: 9:00-12:00 / 16:00-19:00",
      whatsapp: {
        phone: "393755310899",
        message: "Ciao Autoscuola Racing Favaro, vorrei ricevere informazioni.",
        label: "WhatsApp Favaro",
      },
      trackingLocation: "favaro",
    },
    {
      name: "Sede di Salzano",
      addressLines: ["Via A. De Gasperi, 84", "30030 Salzano (VE)"],
      phone: {
        href: "tel:+390415746510",
        label: "+39 041 5746510",
      },
      hours: "Lunedi - Venerdi: 9:00-12:00 / 16:30-19:00",
      whatsapp: {
        phone: "393755184936",
        message: "Ciao Autoscuola Racing Salzano, vorrei ricevere informazioni.",
        label: "WhatsApp Salzano",
      },
      trackingLocation: "salzano",
    },
  ],
  footer: {
    locationSummary: "Mestre & Favaro Veneto",
    navigationLabel: "Navigazione",
    contactsLabel: "Contatti",
    contactPageLink: {
      label: "Vai alla pagina contatti",
      href: "/contatti",
    },
    copyrightYear: 2026,
    copyrightNotice: "Tutti i diritti riservati.",
    privacyLink: {
      label: "Privacy Policy",
      href: "/privacy-policy",
    },
    cookieLink: {
      label: "Cookie Policy",
      href: "/cookie-policy",
    },
    cookieSettingsLabel: "Aggiorna preferenze cookie",
  },
  phoneFavaro: "041 630163",
  phoneSalzano: "041 5746510",
  emailFavaro: "autoscuolaracing2@libero.it",
  emailSalzano: "autoscuolaracing3@gmail.com",
  addressFavaro: "Via M.te Cervino, 23/a, 30173 Favaro Veneto (VE)",
  addressSalzano: "Via A. De Gasperi, 84, 30030 Salzano (VE)",
};
