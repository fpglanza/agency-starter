# Analytics Playbook - Autoscuola Racing

## 1. Architettura

Lo stack Analytics del progetto collega quattro livelli:

- **GTM**: il container Google Tag Manager viene caricato nel layout principale tramite `PUBLIC_GTM_ID`. Il container attualmente atteso e verificato e `GTM-PJQSRL9G`.
- **GA4**: gli eventi vengono inviati al Measurement ID `G-N5XYL25R5K`. Le `page_view` sono gestite dal tag Google/GA4 e viene inviata una `page_view` esplicita dopo consenso positivo.
- **LegalBlink**: il banner cookie viene caricato tramite `https://app.legalblink.it/api/scripts/lb_cs.js` e inizializzato con l'ID LegalBlink del progetto.
- **Google Consent Mode v2**: il sito imposta un default restrittivo prima del consenso e aggiorna lo stato quando LegalBlink emette eventi di consenso.

Flusso operativo:

1. Al caricamento pagina viene inizializzata `window.dataLayer`.
2. Viene definita `gtag()` come push verso `dataLayer`.
3. Consent Mode parte con:
   - `analytics_storage: denied`
   - `ad_storage: denied`
   - `ad_user_data: denied`
   - `ad_personalization: denied`
   - `functionality_storage: denied`
   - `security_storage: granted`
4. GTM viene caricato.
5. LegalBlink carica il banner e gestisce le preferenze cookie.
6. Quando LegalBlink emette `legalblinkconsentgiven`, il sito aggiorna il consenso Google a `granted` e invia una `page_view` esplicita a GA4.
7. Quando LegalBlink segnala solo consenso necessario, il sito mantiene il consenso Google in stato `denied`.
8. Lo script globale `src/scripts/tracking.ts` ascolta i click tracciabili e invia eventi GA4.

Nota operativa: la configurazione effettiva dei pulsanti e delle categorie LegalBlink e gestita da LegalBlink; il codice locale ascolta gli eventi emessi dal banner.

## 2. Eventi implementati

### page_view

- **Quando viene inviato**: al caricamento pagina tramite GA4/GTM e, in modo esplicito, dopo `legalblinkconsentgiven`.
- **Parametri principali**:
  - `send_to: G-N5XYL25R5K`
  - `page_location`
  - `page_title`
- **Dove viene usato**: tutte le pagine del sito.
- **Scopo**: misurare traffico, pagine visitate e comportamento post-consenso.

### cta_click

- **Quando viene inviato**: click su CTA con `data-track="cta_click"`.
- **Parametri**:
  - `send_to`
  - `event_category: engagement`
  - `location`
  - `section`
  - `office`
  - `text`
  - `href`
  - `page_path`
  - `event_callback` sui link normali, per preservare la hit prima della navigazione
  - `event_timeout: 600`
- **Dove viene usato**:
  - Home: hero, approach, paths, practical-info
  - Chi siamo: hero, readiness
  - Patente auto: hero, clarity, cost, points, support, next-steps
  - Pratiche: hero, renewal, medical, duplicates, points, final
  - Patenti: hero e CTA delle categorie patente
  - Contatti: hero e medical
  - Header mobile: CTA contatti
  - Footer: link contatti
  - 404: CTA verso home, scuola nautica e contatti
- **Scopo**: misurare l'interazione con le azioni principali del sito.

### phone_click

- **Quando viene inviato**: click su link telefonici `tel:` o elementi con `data-track="phone_click"`.
- **Parametri**:
  - `send_to`
  - `event_category: engagement`
  - `location`
  - `section`
  - `office`
  - `text`
  - `href`
  - `page_path`
- **Dove viene usato**:
  - Home: telefoni Favaro e Salzano
  - Patente auto: telefoni Favaro e Salzano
  - Contatti: azioni telefono Favaro e Salzano
  - Footer: telefoni Favaro e Salzano
  - Componenti predisposti: `LocationCard`
- **Scopo**: misurare lead telefonici.

### whatsapp_click

- **Quando viene inviato**: click su link WhatsApp `wa.me` o elementi con `data-track="whatsapp_click"`.
- **Parametri**:
  - `send_to`
  - `event_category: engagement`
  - `location`
  - `section`
  - `office`
  - `text`
  - `href`
  - `page_path`
- **Dove viene usato**:
  - Home: CTA WhatsApp info rapide
  - Patente auto: CTA WhatsApp informazioni Patente B
  - Pratiche: CTA WhatsApp visita medica
  - Contatti: WhatsApp Favaro, Salzano e visita medica
  - Footer: WhatsApp Favaro e Salzano
  - Componenti predisposti: `LocationCard`
- **Scopo**: misurare lead WhatsApp.

### email_click

- **Quando viene inviato**: click su link `mailto:` con `data-track="email_click"`.
- **Parametri**:
  - `send_to`
  - `event_category: engagement`
  - `location`
  - `section`
  - `office`
  - `text`
  - `href`
  - `page_path`
- **Dove viene usato**: predisposto in `LocationCard`. Nelle pagine attuali gli indirizzi email principali sono mostrati come testo, non come link cliccabili.
- **Scopo**: misurare lead email quando il componente o link email cliccabili vengono usati.

## 3. Eventi consigliati come conversioni

In GA4, gli eventi piu utili da segnare come **Eventi chiave** sono:

- **phone_click**: lead ad alta intenzione. Un click su telefono indica contatto diretto con una sede.
- **whatsapp_click**: lead ad alta intenzione. WhatsApp e probabilmente il canale piu immediato per richieste da mobile.
- **email_click**: lead utile quando verranno usati link email cliccabili.
- **cta_click**: da usare con cautela come evento chiave. E utile per CTA molto vicine alla conversione, ma se marcato globalmente puo includere CTA informative o di navigazione interna.

Configurazione consigliata:

- Segnare sempre come eventi chiave:
  - `phone_click`
  - `whatsapp_click`
- Segnare come evento chiave condizionato o secondario:
  - `email_click`
- Non segnare tutto `cta_click` come evento chiave se si vuole una metrica lead pulita. In alternativa, creare audience/report filtrati su:
  - `event_name = cta_click`
  - `section` in `hero`, `medical`, `next-steps`, `contacts`
  - `href = /contatti`

## 4. Dashboard Looker Studio

### Pagina 1 - Executive Overview

Obiettivo: dare al cliente una vista sintetica dell'andamento del sito.

- **KPI**:
  - Utenti
  - Sessioni
  - Visualizzazioni
  - Eventi chiave
  - Tasso di conversione evento chiave
  - Click telefono
  - Click WhatsApp
- **Grafici**:
  - Serie temporale utenti/sessioni
  - Scorecard lead totali
  - Donut canali di acquisizione
  - Bar chart eventi principali
- **Tabelle**:
  - Top landing page
  - Top source/medium
- **Filtri**:
  - Intervallo date
  - Dispositivo
  - Canale
  - Sede/event location
- **Metriche**:
  - Active users
  - Sessions
  - Views
  - Event count
  - Key events
  - Engagement rate
- **Dimensioni**:
  - Date
  - Session source/medium
  - Default channel group
  - Page path
  - Device category

### Pagina 2 - Lead

Obiettivo: misurare contatti reali e intenzione commerciale.

- **KPI**:
  - Lead totali
  - `phone_click`
  - `whatsapp_click`
  - `email_click`
  - CTA verso `/contatti`
  - Lead per sede
- **Grafici**:
  - Serie temporale lead giornalieri
  - Barre per tipo evento
  - Barre per sede: Favaro, Salzano, generale
  - Funnel leggero: page_view -> cta_click -> phone/whatsapp
- **Tabelle**:
  - Eventi lead per pagina
  - Click per testo CTA
  - Click per `href`
- **Filtri**:
  - Evento
  - Pagina
  - Sede
  - Device
  - Source/medium
- **Metriche**:
  - Event count
  - Key events
  - Total users
  - Sessions
- **Dimensioni**:
  - Event name
  - Page path
  - `location`
  - `section`
  - `office`
  - `text`
  - `href`

### Pagina 3 - SEO

Obiettivo: collegare visibilita organica e visite al sito.

- **KPI**:
  - Click organici Search Console
  - Impression
  - CTR
  - Posizione media
  - Sessioni organic search GA4
  - Lead da organic search
- **Grafici**:
  - Serie temporale click/impression
  - Query organiche top
  - Landing page SEO top
  - Posizione media per query strategiche
- **Tabelle**:
  - Query, click, impression, CTR, posizione
  - Landing page, utenti, sessioni, lead
- **Filtri**:
  - Query
  - Landing page
  - Paese
  - Device
  - Search type
- **Metriche**:
  - Search Console clicks
  - Search Console impressions
  - CTR
  - Average position
  - Organic sessions
  - Organic key events
- **Dimensioni**:
  - Query
  - Landing page
  - Page path
  - Device
  - Country

### Pagina 4 - Performance pagine

Obiettivo: capire quali pagine portano traffico e interazioni.

- **KPI**:
  - Top page views
  - Engagement rate
  - Average engagement time
  - Eventi per pagina
  - Lead per pagina
- **Grafici**:
  - Tabella performance URL
  - Barre page path per visualizzazioni
  - Barre page path per lead
  - Serie temporale delle pagine principali
- **Tabelle**:
  - Page path, views, users, engagement rate, lead
  - Page path, `cta_click`, `phone_click`, `whatsapp_click`
- **Filtri**:
  - Page path
  - Tipo evento
  - Device
  - Source/medium
- **Metriche**:
  - Views
  - Users
  - Sessions
  - Average engagement time
  - Event count
  - Key events
- **Dimensioni**:
  - Page path
  - Page title
  - Event name
  - Section
  - Text

### Pagina 5 - Sedi

Obiettivo: misurare domanda e contatti per Favaro e Salzano.

- **KPI**:
  - Lead Favaro
  - Lead Salzano
  - Telefonate Favaro
  - Telefonate Salzano
  - WhatsApp Favaro
  - WhatsApp Salzano
- **Grafici**:
  - Barre lead per sede
  - Serie temporale lead per sede
  - Donut tipo contatto per sede
  - Tabella dettagliata eventi sede
- **Tabelle**:
  - `location`, event name, event count
  - `href`, text, page path, event count
- **Filtri**:
  - Sede/location
  - Evento
  - Pagina
  - Device
  - Canale
- **Metriche**:
  - Event count
  - Key events
  - Users
  - Sessions
- **Dimensioni**:
  - `location`
  - `office`
  - `section`
  - Event name
  - Page path
  - Href

## 5. Collegamenti Google

### Collegare Search Console

1. Aprire Google Search Console.
2. Aggiungere la proprieta dominio o URL.
3. Verificare la proprieta tramite DNS, file HTML, tag HTML o provider.
4. Inviare la sitemap generata da Astro, tipicamente:
   - `/sitemap-index.xml`
5. Controllare che le pagine principali siano indicizzabili.

### Collegare Search Console a GA4

1. Aprire GA4.
2. Andare in **Admin**.
3. Entrare in **Product links**.
4. Scegliere **Search Console links**.
5. Selezionare la proprieta Search Console corretta.
6. Selezionare lo stream web GA4.
7. Salvare.

### Collegare GA4 a Looker Studio

1. Aprire Looker Studio.
2. Creare un nuovo report.
3. Aggiungere origine dati **Google Analytics**.
4. Selezionare account, property e stream GA4.
5. Aggiungere eventuale seconda origine dati **Search Console**.
6. Creare le pagine report definite nella sezione dashboard.
7. Impostare controlli globali:
   - Date range
   - Device
   - Source/medium
   - Page path

## 6. Checklist finale

Checklist tecnica:

- [ ] `npm run build` completato senza errori.
- [ ] Sitemap generata.
- [ ] Robots e indicizzabilita verificati.
- [ ] Meta title e description verificati sulle pagine principali.
- [ ] Canonical corretti.
- [ ] 404 funzionante.
- [ ] Link interni principali funzionanti.
- [ ] Link telefono testati da mobile.
- [ ] Link WhatsApp testati.
- [ ] Cookie banner LegalBlink visibile in sessione pulita.
- [ ] Consent Mode verificato in Tag Assistant.
- [ ] Default consenso iniziale in `denied` per analytics/ads.
- [ ] Consenso aggiornato correttamente dopo accettazione.
- [ ] GA4 riceve `page_view`.
- [ ] GA4 riceve `cta_click`.
- [ ] GA4 riceve `phone_click`.
- [ ] GA4 riceve `whatsapp_click`.
- [ ] Eventi chiave configurati in GA4.
- [ ] Search Console verificata.
- [ ] Sitemap inviata in Search Console.
- [ ] Looker Studio collegato a GA4.
- [ ] Looker Studio collegato a Search Console.

Checklist cliente:

- [ ] Accessi Google consegnati o condivisi.
- [ ] Spiegazione dei KPI principali.
- [ ] Report Looker Studio condiviso.
- [ ] Eventi chiave spiegati.
- [ ] Privacy/cookie policy verificata con il fornitore legale.
- [ ] Istruzioni base per leggere lead telefono/WhatsApp.
- [ ] Data del go-live annotata per confronto pre/post lancio.

## 7. Template riutilizzabile

Per riutilizzare questo setup su futuri siti Astro:

1. Creare un layout base comune.
2. Inizializzare `window.dataLayer` e `gtag()`.
3. Impostare Consent Mode v2 prima di GTM.
4. Caricare GTM nel layout base.
5. Caricare il CMP/cookie banner del cliente.
6. Collegare gli eventi del CMP a Google Consent Mode:
   - consenso positivo -> `gtag("consent", "update", grantedConsent)`
   - consenso negato/solo necessari -> mantenere `denied`
7. Inviare una `page_view` esplicita dopo consenso se la prima hit parte in stato denied.
8. Creare uno script client globale per il click tracking.
9. Usare attributi HTML semplici:
   - `data-track`
   - `data-location`
   - `data-section`
   - `data-office`
10. Standardizzare i nomi evento:
   - `cta_click`
   - `phone_click`
   - `whatsapp_click`
   - `email_click`
   - `map_click`, se ci sono mappe reali
11. Includere sempre:
   - `send_to`
   - `event_category`
   - `text`
   - `href`
   - `page_path`
12. Per link normali che navigano, usare `event_callback` e timeout di fallback.
13. Non bloccare `tel:`, `mailto:`, WhatsApp, middle click, cmd/ctrl click o `target="_blank"`.
14. Verificare con:
   - Tag Assistant
   - GA4 DebugView
   - Network tab
   - Realtime report
15. Creare una dashboard Looker Studio con pagine minime:
   - Executive Overview
   - Lead
   - SEO
   - Performance pagine
   - Sedi o aree business
16. Prima della consegna:
   - eseguire build
   - verificare sitemap
   - testare consenso
   - testare eventi chiave
   - condividere report e accessi

