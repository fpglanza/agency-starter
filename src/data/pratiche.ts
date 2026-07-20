import { whatsappLink } from "../lib/whatsapp";

export const praticheData = {
  hero: {
    heading:
      "Gestione pratiche patente.",
    intro:
      "La burocrazia non deve essere un ostacolo. In Autoscuola Racing trovi un team pronto a risolvere ogni pratica con efficienza e cortesia. Ci occupiamo di tutto noi, così tu puoi risparmiare tempo e stress, con la sicurezza di un supporto professionale e diretto.",
    cta: {
      label: "Contattaci",
      href: "/contatti",
    },
  },

  renewal: {
    title: "Rinnovo patente con visita in sede",
    body:
      "Dimentica le code agli sportelli o le lunghe attese. Presso le nostre sedi di Favaro Veneto e Salzano, organizziamo regolarmente sessioni con il medico autorizzato.",
    items: [
      "Comodità: Prenoti il tuo appuntamento e in pochi minuti completi la visita.",
      "Velocità: Riceverai la nuova patente direttamente a casa o in sede in tempi brevissimi.",
      "Supporto: Portaci la tua patente e una fototessera aggiornata, al resto pensiamo noi.",
    ],
    cta: "/contatti",
  },

  medical: {
    title: "Casi speciali e commissione medica",
    body:
      "Ti guidiamo anche nei percorsi più complessi. Se la tua situazione richiede il passaggio in Commissione Medica Locale (per patologie, limiti di età o provvedimenti specifici), non ti lasciamo solo. Ti forniamo la consulenza necessaria per preparare la documentazione corretta e prenotare la visita, evitando errori che potrebbero rallentare il rinnovo della tua patente.",
    cta: "/contatti",
  },

  duplicates: {
    title: "Duplicati e patente internazionale",
    items: [
      "Duplicato Patente: In caso di smarrimento, furto o deterioramento, gestiamo la richiesta di duplicato in modo rapido per farti tornare subito alla guida.",
      "Patente Internazionale: Devi guidare fuori dall'UE? Richiediamo per te il permesso internazionale di guida (modello Ginevra o Vienna), verificando quale formato sia necessario per la tua destinazione.",
    ],
    cta: "/contatti",
  },

  points: {
    title: "Recupero punti",
    body:
      "Ti aiutiamo a rimetterti in regola. Hai perso punti sulla patente? Organizziamo corsi periodici di recupero punti. Ti spieghiamo con chiarezza la procedura e ti seguiamo finché la tua situazione non è tornata alla normalità, con la massima discrezione.",
    cta: "/contatti",
  },

  final: {
    title:
      "Contattaci per la prossima data disponibile",
    body:
      "Vuoi sapere quando sarà il prossimo turno per la visita medica o hai bisogno di un duplicato urgente? Scrivici o passa a trovarci.",
    ctas: [
      {
        label: "Chiedi la data della visita su WhatsApp",
        href: whatsappLink(
          "393755310899",
          "Ciao Autoscuola Racing, vorrei sapere la prossima data disponibile per la visita medica in sede."
        ),
      },
      {
        label: "Chiamaci per info sulle pratiche",
        href: "/contatti",
      },
    ],
  },
};
