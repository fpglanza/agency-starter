import { whatsappLink } from "../lib/whatsapp";

export const patenteAutoData = {
  hero: {
    heading: "Guida la tua indipendenza.",
    intro:
      "Ottenere la patente è il primo passo verso una nuova libertà, ma la vera meta è sentirsi pronti a muoversi nel traffico in totale autonomia. In Autoscuola Racing trasformiamo lo studio per l’esame in una conquista reale, accompagnandoti dai primi quiz fino alla sicurezza al volante.",
    cta: {
      label: "Inizia il tuo percorso",
      href: "/contatti",
    },
  },

  path: {
    title: "Cosa comprende il percorso",
    items: [
      "Formazione Teorica: Lezioni interattive che vanno oltre la spiegazione dei segnali, aiutandoti a comprendere le logiche del traffico.",
      "Supporto Personalizzato: Un filo diretto con i nostri insegnanti per risolvere dubbi sui quiz e correggere il metodo di studio.",
      "Preparazione Pratica: Impari a dominare la strada in ogni scenario. Guide mirate per darti sicurezza totale, dal traffico urbano alle vie a scorrimento veloce.",
      "Gestione Burocratica: Ci occupiamo noi di tutta la documentazione, inclusa la visita medica in sede, per eliminare ogni pensiero amministrativo.",
    ],
  },

  cost: {
    title: "Quanto costa la patente B (2026)",
    body:
      "Affrontare il costo della patente B nel 2026 significa investire sulla qualità della propria formazione a lungo termine. Spesso si cerca il prezzo più basso, senza considerare che una preparazione approssimativa può portare a bocciature e costi aggiuntivi imprevisti.\n\nIn Autoscuola Racing puntiamo sulla trasparenza. Il costo Patente totale è composto dalla gestione delle pratiche amministrative, dalla formazione teorica in aula e dal percorso di guide a te necessario. Puntare su una preparazione dedicata significa ottimizzare i tempi, affrontare gli esami con la giusta serenità e diventare un pilota realmente consapevole e sicuro di sé.",
  },

  points: {
    title: "Rinnovo CQC in sede",
    body:
      "Gestiamo direttamente in autoscuola il rinnovo della CQC, seguendoti nell'iscrizione al corso obbligatorio e nella preparazione della pratica. Organizziamo il percorso con chiarezza e supporto costante, aiutandoti a mantenere l'abilitazione necessaria per il trasporto professionale di merci o persone nel rispetto della normativa vigente.",
  },

  support: {
    title: "Il supporto nel momento critico",
    body:
      "Sappiamo che il momento dell'esame o il timore di una bocciatura possono generare tensione. La differenza tra \"provare\" e \"riuscire\" sta nel supporto che ricevi quando le difficoltà aumentano.\n\nSe hai già avuto esperienze negative o se senti che il metodo mnemonico non fa per te, qui troverai un ambiente che ascolta le tue incertezze. Non ti mandiamo all'esame per \"tentare la fortuna\": ci assicuriamo che tu abbia superato i blocchi emotivi e tecnici. Il nostro successo non è solo la tua patente, ma la certezza che, una volta ottenuta, sarai in grado di guidare da solo senza paura.",
  },

  nextSteps: {
    title: "Prossimi passi",
    body:
      "Iniziare è semplice. Puoi venire a trovarci in una delle nostre sedi per conoscere i docenti e vedere come lavoriamo, oppure scriverci per avere dettagli sui calendari dei corsi e sulle prossime sessioni di visite mediche.",
    locations: [
      "Sede di Favaro Veneto: Via M.te Cervino, 23/a, 30173 Favaro Veneto (VE) | Tel. 041 630163 | autoscuolaracing2@libero.it",
      "Sede di Salzano: Via A. De Gasperi, 84, 30030 Salzano (VE) | Tel. 041 5746510 | autoscuolaracing3@gmail.com",
    ],
    ctas: [
      {
        label: "Chiedi informazioni su WhatsApp",
        href: whatsappLink(
          "393755310899",
          "Ciao Autoscuola Racing, vorrei informazioni sulla Patente B."
        ),
      },
      {
        label: "Vieni a trovarci in sede",
        href: "/contatti",
      },
    ],
  },

  faq: [
    {
      question:
        "Quanto tempo ci vuole davvero per prendere la patente?",
      answer:
        "Non esiste una risposta unica, perché rispettiamo il tuo ritmo. In media, tra teoria e pratica, il percorso dura dai 3 ai 5 mesi. Il nostro obiettivo non è farti correre, ma assicurarci che tu arrivi all'esame una sola volta e con la massima sicurezza.",
    },
    {
      question: "Cosa succede se vengo bocciato ai quiz?",
      answer:
        "Nessun dramma, capita. In Autoscuola Racing non ti lasciamo solo a ripetere test a caso: analizziamo insieme gli errori per capire se c'è un problema di metodo o di ansia. Ti aiutiamo a resettare e a riprovare con un supporto personalizzato, proprio come farebbe un fratello maggiore.",
    },
    {
      question:
        "Posso iniziare le guide anche se non ho ancora superato la teoria?",
      answer:
        "La legge prevede che l'esercitazione pratica inizi dopo il superamento dell'esame teorico. Tuttavia, in aula ti prepariamo già mentalmente alla guida, spiegandoti la logica dei comandi così sarai avvantaggiato quando salirai in auto per la prima volta.",
    },
    {
      question:
        "Le guide sono personalizzate o c'è un pacchetto fisso?",
      answer:
        "Oltre alle guide obbligatorie per legge, strutturiamo il percorso in base a come ti senti tu al volante. Se hai bisogno di più tempo per i parcheggi o per la guida in tangenziale, ci concentriamo su quello finché non ti senti padrone del mezzo.",
    },
  ],
};
