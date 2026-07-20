import { whatsappLink } from "../lib/whatsapp";

export const contattiData = {
  hero: {
    heading: "Contatti Autoscuola Racing",
    intro:
      "Siamo presenti con due sedi operative tra Favaro Veneto e Salzano, per offrirti un punto di riferimento chiaro e accessibile in ogni fase del tuo percorso.",
  },

  favaro: {
    title: "Sede Favaro Veneto",
    body:
      "Ci trovi nel cuore di Favaro Veneto. Qui gestiamo lezioni teoriche, esercitazioni quiz e pratiche per patenti auto.",
    address: "Via Monte Cervino, 23/a, 30173 Favaro Veneto (VE)",
    phone: "041 630163",
    email: "autoscuolaracing2@libero.it",
    hours: "Lunedi - Venerdi: 9:00-12:00 / 16:00-19:00",
    actions: [
      {
        label: "Scrivici a Mestre",
        href: whatsappLink(
          "393755310899",
          "Ciao Autoscuola Racing Favaro, vorrei ricevere informazioni."
        ),
        variant: "primary",
      },
      {
        label: "Chiamaci",
        href: "tel:041630163",
        variant: "secondary",
      },
    ],
  },

  salzano: {
    title: "Sede Salzano",
    body:
      "Per gli allievi della zona, la sede di Salzano offre la stessa attenzione e il clima familiare che contraddistingue Autoscuola Racing.",
    address: "Via A. de Gasperi, 84, 30030 Salzano (VE)",
    phone: "041 574 6510",
    email: "autoscuolaracing3@libero.it",
    hours: "Lunedi - Venerdi: 9:00-12:00 / 16:30-19:00",
    actions: [
      {
        label: "Scrivici a Salzano",
        href: whatsappLink(
          "393755184936",
          "Ciao Autoscuola Racing Salzano, vorrei ricevere informazioni."
        ),
        variant: "primary",
      },
      {
        label: "Chiamaci",
        href: "tel:0415746510",
        variant: "secondary",
      },
    ],
  },

  medicalNote:
    "Visite mediche in sede: organizziamo regolarmente sessioni con il medico in autoscuola per rinnovi patente e certificati d'idoneità. Contattaci per conoscere la prossima disponibilità.",
};
