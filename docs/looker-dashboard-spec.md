# Looker Studio Dashboard Spec

## 1. Obiettivo dashboard

La dashboard deve essere leggibile da clienti non tecnici. Deve rispondere in pochi secondi a queste domande:

- Quante persone stanno visitando il sito?
- Da quali canali arrivano?
- Quanti contatti utili genera il sito?
- Quali pagine portano piu lead?
- Quali query SEO stanno creando visibilita?
- Quali sedi ricevono piu interesse?

La dashboard deve quindi mostrare:

- **Traffico**: utenti, sessioni, visualizzazioni e andamento nel tempo.
- **Lead**: click telefono, WhatsApp e CTA.
- **Canali**: organic search, direct, referral, paid, social e altri canali disponibili in GA4.
- **SEO**: click, impression, CTR, posizione media, query e landing page da Search Console.
- **Pagine piu efficaci**: pagine con traffico e pagine con conversioni.
- **Sedi piu interessanti**: confronto per `office` o `location`, con Favaro e Salzano come esempio.

Il report deve essere costruito come template riutilizzabile per siti locali: autoscuole, studi professionali, cliniche, palestre, ristoranti, centri estetici, attivita multi-sede e servizi territoriali.

## 2. Stile visuale

Stile consigliato: premium, semplice, leggibile.

### Colori base

Per Autoscuola Racing:

- Blu principale: `#12135D`
- Lime accento: `#D4FF00`
- Blu accento: `#2124BD`
- Testo: `#2C3E50`
- Sfondo: `#FFFFFF`
- Sfondo secondario: `#F8F9FF`

Per template futuri:

- Usare un colore primario del brand cliente.
- Usare un solo colore accento per evidenziare lead/conversioni.
- Mantenere sfondo chiaro e tabelle ad alto contrasto.
- Evitare palette troppo decorative: la dashboard deve essere letta, non solo guardata.

### Tipografia consigliata

- Titoli pagina: font sans-serif bold, 24-32 px.
- Titoli sezione: 16-20 px, semibold.
- KPI card: numero grande, label breve, confronto periodo precedente sotto.
- Tabelle: 11-13 px, righe compatte, intestazioni chiare.

Se si vuole richiamare il brand Autoscuola Racing:

- Titoli: Exo 2 o sans-serif geometrico simile.
- Testi e tabelle: Montserrat o sans-serif pulito.

### Card KPI

Ogni pagina deve iniziare con 4-6 card KPI.

Regole:

- Label semplice: "Utenti", "Sessioni", "Lead", "Click telefono".
- Numero principale grande.
- Variazione rispetto al periodo precedente se disponibile.
- Colore neutro per metriche informative.
- Colore accento per lead/conversioni.

### Spaziature

- Margine pagina: 32 px.
- Distanza tra sezioni: 24-32 px.
- Distanza tra card: 12-16 px.
- Tabelle con massimo 8-12 righe visibili, poi paginazione.

### Gerarchia visiva

1. Header report con logo cliente, nome report e periodo.
2. KPI principali.
3. Grafico andamento.
4. Grafici di distribuzione.
5. Tabelle diagnostiche.

### Logo cliente e periodo report

Header consigliato:

- Logo a sinistra.
- Titolo report al centro o a sinistra: "Dashboard Marketing - Autoscuola Racing".
- Date range selector a destra.
- Nota piccola: "Dati GA4 + Search Console".

Il periodo predefinito deve essere **ultimi 30 giorni**, con confronto al periodo precedente.

## 3. Struttura dashboard

## Pagina 1 - Executive Overview

Obiettivo: dare una panoramica immediata dello stato del sito.

Include:

- KPI principali:
  - Utenti
  - Sessioni
  - Visualizzazioni
  - Lead totali
  - Conversion rate
- Grafico andamento ultimi 30 giorni.
- Distribuzione sorgenti traffico.
- Top pagine per visualizzazioni.
- Top pagine per lead.

Layout consigliato:

1. Riga KPI: Utenti, Sessioni, Visualizzazioni, Lead totali, Conversion rate.
2. Grafico linea: utenti e lead negli ultimi 30 giorni.
3. Donut o barre: sorgenti traffico.
4. Tabella: top pagine.
5. Tabella breve: eventi principali.

## Pagina 2 - Lead & Contatti

Obiettivo: misurare richieste e contatti generati dal sito.

Include:

- `phone_click`
- `whatsapp_click`
- `cta_click`
- Tabella conversioni per pagina.
- Conversioni per sede/office.
- Andamento lead nel tempo.

Layout consigliato:

1. KPI: Lead totali, Phone lead, WhatsApp lead, CTA click.
2. Grafico linea: lead nel tempo.
3. Barre: lead per tipo evento.
4. Barre: lead per `office` o `location`.
5. Tabella: pagina, evento, testo CTA, href, conteggio eventi.

Nota: `cta_click` misura intenzione e navigazione verso azioni importanti. Per il conteggio lead commerciale piu pulito, dare priorita a `phone_click` e `whatsapp_click`.

## Pagina 3 - SEO

Obiettivo: mostrare quanto il sito e visibile su Google e quali query portano traffico.

Origine dati principale: Search Console.

Include:

- Click organici.
- Impression.
- CTR.
- Posizione media.
- Top query.
- Landing page SEO.

Layout consigliato:

1. KPI: Click, Impression, CTR, Posizione media.
2. Grafico linea: click e impression nel tempo.
3. Tabella query: query, click, impression, CTR, posizione.
4. Tabella landing page: pagina, click, impression, CTR, posizione.
5. Grafico barre: top query per click.

Nota: Search Console e GA4 misurano dati diversi. Non aspettarsi corrispondenza perfetta tra click Search Console e sessioni organic GA4.

## Pagina 4 - Performance Pagine

Obiettivo: capire quali pagine lavorano meglio e quali hanno traffico senza lead.

Include:

- `page_path`
- `page_view`
- Utenti
- `scroll`
- `cta_click`
- `phone_click`
- `whatsapp_click`
- Tabella pagine migliori.
- Pagine con traffico ma pochi lead.

Layout consigliato:

1. KPI: Visualizzazioni, Utenti, Engagement rate, Lead totali.
2. Tabella performance pagine: page path, views, users, scroll, CTA, phone, WhatsApp, lead rate.
3. Barre: top pagine per lead.
4. Barre: top pagine per traffico.
5. Tabella diagnostica: pagine con molte visualizzazioni e pochi lead.

## Pagina 5 - Sedi

Obiettivo: confrontare sedi fisiche o aree territoriali.

Per Autoscuola Racing usare:

- Favaro
- Salzano
- Contatti generali

Include:

- `phone_click` per `office` o `location`.
- `whatsapp_click` per `office` o `location`.
- `cta_click` per `office` o `location`.
- Confronto Favaro / Salzano.
- Nota template: sostituire con sedi future del cliente.

Layout consigliato:

1. KPI: Lead Favaro, Lead Salzano, Lead generali.
2. Barre affiancate: phone vs WhatsApp per sede.
3. Serie temporale: lead per sede.
4. Tabella: office/location, event name, text, href, event count.
5. Donut: distribuzione lead per sede.

Per clienti futuri:

- Sostituire Favaro/Salzano con i nomi reali delle sedi.
- Se il cliente non e multi-sede, usare questa pagina per "Servizi", "Categorie" o "Aree geografiche".

## 4. Metriche e dimensioni

### Pagina 1 - Executive Overview

| Elemento | Grafico | Metrica | Dimensione | Filtro | Ordinamento | Date range |
| --- | --- | --- | --- | --- | --- | --- |
| Utenti | Scorecard | Total users | - | Nessuno | - | Ultimi 30 giorni |
| Sessioni | Scorecard | Sessions | - | Nessuno | - | Ultimi 30 giorni |
| Visualizzazioni | Scorecard | Views | - | Nessuno | - | Ultimi 30 giorni |
| Lead totali | Scorecard | `lead_totali` | - | Event name in phone/WhatsApp/CTA | - | Ultimi 30 giorni |
| Conversion rate | Scorecard | `conversion_rate` | - | Nessuno | - | Ultimi 30 giorni |
| Andamento | Time series | Total users, `lead_totali` | Date | Nessuno | Date asc | Ultimi 30 giorni |
| Sorgenti traffico | Donut o barre | Sessions | Session source / medium | Nessuno | Sessions desc | Ultimi 30 giorni |
| Top pagine | Table | Views, Users, `lead_totali` | Page path | Nessuno | Views desc | Ultimi 30 giorni |

### Pagina 2 - Lead & Contatti

| Elemento | Grafico | Metrica | Dimensione | Filtro | Ordinamento | Date range |
| --- | --- | --- | --- | --- | --- | --- |
| Phone lead | Scorecard | `phone_leads` | - | Event name = phone_click | - | Ultimi 30 giorni |
| WhatsApp lead | Scorecard | `whatsapp_leads` | - | Event name = whatsapp_click | - | Ultimi 30 giorni |
| CTA click | Scorecard | `cta_engagement` | - | Event name = cta_click | - | Ultimi 30 giorni |
| Lead nel tempo | Time series | `lead_totali` | Date | Lead events | Date asc | Ultimi 30 giorni |
| Lead per tipo | Bar chart | Event count | Event name | Event name in phone_click, whatsapp_click, cta_click | Event count desc | Ultimi 30 giorni |
| Lead per sede | Bar chart | `lead_totali` | office o location | Lead events | Lead desc | Ultimi 30 giorni |
| Conversioni per pagina | Table | Event count | Page path, Event name, text, href | Lead events | Event count desc | Ultimi 30 giorni |

### Pagina 3 - SEO

| Elemento | Grafico | Metrica | Dimensione | Filtro | Ordinamento | Date range |
| --- | --- | --- | --- | --- | --- | --- |
| Click organici | Scorecard | Url Clicks | - | Web search | - | Ultimi 28 o 90 giorni |
| Impression | Scorecard | Impressions | - | Web search | - | Ultimi 28 o 90 giorni |
| CTR | Scorecard | Site CTR o `organic_ctr` | - | Web search | - | Ultimi 28 o 90 giorni |
| Posizione media | Scorecard | Average Position | - | Web search | Ascendente | Ultimi 28 o 90 giorni |
| Trend SEO | Time series | Url Clicks, Impressions | Date | Web search | Date asc | Ultimi 90 giorni |
| Top query | Table | Url Clicks, Impressions, CTR, Average Position | Query | Impressions > 0 | Clicks desc | Ultimi 90 giorni |
| Landing page SEO | Table | Url Clicks, Impressions, CTR, Average Position | Landing Page | Impressions > 0 | Clicks desc | Ultimi 90 giorni |

### Pagina 4 - Performance Pagine

| Elemento | Grafico | Metrica | Dimensione | Filtro | Ordinamento | Date range |
| --- | --- | --- | --- | --- | --- | --- |
| Page views | Scorecard | Views | - | Nessuno | - | Ultimi 30 giorni |
| Utenti | Scorecard | Total users | - | Nessuno | - | Ultimi 30 giorni |
| Scroll | Scorecard | Event count | - | Event name = scroll | - | Ultimi 30 giorni |
| Lead pagina | Scorecard | `lead_totali` | - | Lead events | - | Ultimi 30 giorni |
| Tabella pagine | Table | Views, Users, Event count, `lead_totali` | Page path | Nessuno | Views desc | Ultimi 30 giorni |
| Pagine con lead | Bar chart | `lead_totali` | Page path | Lead events | Lead desc | Ultimi 30 giorni |
| Traffico senza lead | Table | Views, `lead_totali` | Page path | Views > soglia e lead = 0 | Views desc | Ultimi 30 giorni |

### Pagina 5 - Sedi

| Elemento | Grafico | Metrica | Dimensione | Filtro | Ordinamento | Date range |
| --- | --- | --- | --- | --- | --- | --- |
| Lead Favaro | Scorecard | `lead_totali` | - | location/office = favaro | - | Ultimi 30 giorni |
| Lead Salzano | Scorecard | `lead_totali` | - | location/office = salzano | - | Ultimi 30 giorni |
| Phone per sede | Bar chart | `phone_leads` | office o location | Event name = phone_click | Phone desc | Ultimi 30 giorni |
| WhatsApp per sede | Bar chart | `whatsapp_leads` | office o location | Event name = whatsapp_click | WhatsApp desc | Ultimi 30 giorni |
| CTA per sede | Bar chart | `cta_engagement` | office o location | Event name = cta_click | CTA desc | Ultimi 30 giorni |
| Trend sedi | Time series | `lead_totali` | Date, office/location | Lead events | Date asc | Ultimi 30 giorni |
| Dettaglio sedi | Table | Event count | office/location, Event name, text, href | Lead events | Event count desc | Ultimi 30 giorni |

## 5. Campi calcolati consigliati

Le formule possono variare leggermente in base ai nomi esatti dei campi esposti dal connettore GA4. In Looker Studio, usare `Event name` come dimensione evento e `Event count` come metrica base.

### lead_totali

Formula consigliata:

```text
SUM(
  CASE
    WHEN Event name IN ("phone_click", "whatsapp_click") THEN Event count
    ELSE 0
  END
)
```

Versione estesa, se si vuole includere anche CTA importanti:

```text
SUM(
  CASE
    WHEN Event name IN ("phone_click", "whatsapp_click", "email_click") THEN Event count
    WHEN Event name = "cta_click" AND REGEXP_MATCH(href, ".*\\/contatti.*") THEN Event count
    ELSE 0
  END
)
```

Nota: per un report cliente conservativo, usare la prima formula. La seconda e utile se il sito ha CTA verso pagine contatto molto qualificate.

### conversion_rate

Formula consigliata:

```text
SAFE_DIVIDE(lead_totali, Sessions)
```

Formato: percentuale.

Se `SAFE_DIVIDE` non e disponibile nel connettore, usare:

```text
lead_totali / Sessions
```

e verificare che non ci siano divisioni per zero nel periodo selezionato.

### phone_leads

```text
SUM(
  CASE
    WHEN Event name = "phone_click" THEN Event count
    ELSE 0
  END
)
```

### whatsapp_leads

```text
SUM(
  CASE
    WHEN Event name = "whatsapp_click" THEN Event count
    ELSE 0
  END
)
```

### cta_engagement

```text
SUM(
  CASE
    WHEN Event name = "cta_click" THEN Event count
    ELSE 0
  END
)
```

### organic_ctr

Per Search Console, usare il campo CTR nativo se disponibile.

Formula alternativa:

```text
SAFE_DIVIDE(Url Clicks, Impressions)
```

Formato: percentuale.

### lead_rate_pagina

```text
SAFE_DIVIDE(lead_totali, Views)
```

Formato: percentuale. Utile nella pagina Performance Pagine.

### sede_normalizzata

Se i dati usano sia `office` sia `location`, creare un campo normalizzato:

```text
CASE
  WHEN office IS NOT NULL AND office != "" THEN office
  WHEN location IS NOT NULL AND location != "" THEN location
  ELSE "generale"
END
```

Usarlo nella pagina Sedi.

## 6. Filtri globali

Inserire controlli globali in alto o in una barra laterale fissa.

- **Date range**
  - Default: ultimi 30 giorni.
  - SEO: usare anche ultimi 90 giorni quando serve stabilita.
- **Device category**
  - Mobile, desktop, tablet.
- **Source / medium**
  - Utile per separare organic, direct, referral, paid.
- **Page path**
  - Utile per isolare pagine chiave.
- **Event name**
  - Utile per analizzare singoli eventi: `cta_click`, `phone_click`, `whatsapp_click`, `scroll`, `click`.
- **Office/location**
  - Utile per multi-sede.
  - Per Autoscuola Racing: Favaro, Salzano, contatti/generale.

Filtri consigliati per dashboard cliente:

- Date range sempre visibile.
- Device e source/medium nella pagina Executive.
- Event name e page path nelle pagine Lead e Performance.
- Office/location nella pagina Sedi.

## 7. Come costruirla passo passo

### 1. Creare il report

1. Aprire Looker Studio.
2. Cliccare **Create**.
3. Selezionare **Report**.
4. Dare un nome chiaro: `Dashboard Marketing - Autoscuola Racing`.

### 2. Aggiungere sorgente GA4

1. Cliccare **Add data**.
2. Scegliere **Google Analytics**.
3. Selezionare account e property GA4.
4. Selezionare lo stream web corretto.
5. Aggiungere la sorgente al report.
6. Rinominare la sorgente dati in `GA4 - Autoscuola Racing`.

### 3. Aggiungere Search Console

1. Cliccare **Resource**.
2. Selezionare **Manage added data sources**.
3. Cliccare **Add a data source**.
4. Scegliere **Search Console**.
5. Selezionare la proprieta corretta.
6. Usare la tabella URL impression o Site impression in base alle necessita.
7. Rinominare la sorgente in `Search Console - Autoscuola Racing`.

### 4. Impostare tema

1. Aprire **Theme and layout**.
2. Impostare sfondo bianco o grigio molto chiaro.
3. Impostare colore primario brand.
4. Impostare colore accento per conversioni.
5. Definire font leggibile.
6. Creare stile uniforme per card KPI, tabelle e titoli.

### 5. Creare pagine

Creare e rinominare 5 pagine:

1. `Executive Overview`
2. `Lead & Contatti`
3. `SEO`
4. `Performance Pagine`
5. `Sedi`

### 6. Creare KPI card

Per ogni pagina:

1. Inserire scorecard.
2. Collegare metrica corretta.
3. Attivare confronto periodo precedente.
4. Formattare numeri:
   - percentuali con 1 decimale
   - numeri interi senza decimali
   - posizione media con 1 decimale
5. Usare titoli brevi.

### 7. Creare grafici

Grafici minimi:

- Time series per andamento.
- Bar chart per ranking.
- Donut solo per distribuzioni semplici.
- Tabelle per dettaglio operativo.

Regole:

- Non usare piu di 2 metriche per grafico linea.
- Ordinare sempre le tabelle.
- Limitare tabelle principali a 10 righe.
- Usare filtri specifici invece di grafici troppo complessi.

### 8. Applicare filtri

Creare filtri riutilizzabili:

- `Lead events`: Event name in `phone_click`, `whatsapp_click`, `email_click`, `cta_click`.
- `Contact leads`: Event name in `phone_click`, `whatsapp_click`, `email_click`.
- `Phone only`: Event name = `phone_click`.
- `WhatsApp only`: Event name = `whatsapp_click`.
- `Organic traffic`: Session default channel group = Organic Search.
- `SEO pages`: applicato alla sorgente Search Console.

### 9. Creare campi calcolati

Creare nella sorgente GA4:

- `lead_totali`
- `phone_leads`
- `whatsapp_leads`
- `cta_engagement`
- `conversion_rate`
- `lead_rate_pagina`
- `sede_normalizzata`

Creare nella sorgente Search Console:

- `organic_ctr`, solo se il CTR nativo non e sufficiente.

### 10. Condividere il report

1. Verificare che le origini dati siano accessibili.
2. Impostare permessi report.
3. Condividere con il cliente in sola visualizzazione.
4. Se il cliente deve duplicare il report, abilitare copia solo quando opportuno.
5. Esportare PDF iniziale se serve una consegna statica.

## 8. Versione cliente

Per duplicare il report su un nuovo cliente:

1. Aprire il report template.
2. Cliccare **Make a copy**.
3. Sostituire la sorgente GA4:
   - scegliere la property del nuovo cliente
   - verificare stream web
   - controllare che gli eventi siano presenti
4. Sostituire la sorgente Search Console:
   - scegliere la proprieta verificata
   - verificare che siano disponibili query e landing page
5. Aggiornare logo.
6. Aggiornare colori tema.
7. Aggiornare nome report.
8. Aggiornare nomi sedi:
   - se multi-sede, sostituire Favaro/Salzano
   - se mono-sede, rinominare pagina Sedi in `Servizi` o `Aree`
9. Verificare eventi chiave:
   - `phone_click`
   - `whatsapp_click`
   - `email_click`, se presente
   - `cta_click`, se usato come engagement
10. Verificare parametri evento:
   - `page_path`
   - `href`
   - `location`
   - `section`
   - `office`
   - `text`
   - `event_category`
11. Testare periodo ultimi 30 giorni.
12. Testare filtri globali.
13. Correggere eventuali grafici vuoti.

Nota template: se il nuovo sito non usa gli stessi nomi evento, creare una tabella di mapping prima di consegnare il report.

Esempio mapping:

| Template | Cliente futuro |
| --- | --- |
| `phone_click` | click telefono |
| `whatsapp_click` | click WhatsApp |
| `cta_click` | click CTA |
| `office` | sede, filiale, store |
| `location` | localita, servizio, area |

## 9. Checklist finale

Prima di inviare la dashboard al cliente:

- [ ] Il report ha 5 pagine nominate correttamente.
- [ ] Il logo cliente e visibile.
- [ ] I colori sono coerenti con il brand.
- [ ] Il date range globale funziona.
- [ ] La sorgente GA4 e corretta.
- [ ] La sorgente Search Console e corretta.
- [ ] I KPI Executive mostrano dati.
- [ ] `lead_totali` restituisce valori plausibili.
- [ ] `phone_leads` restituisce valori plausibili.
- [ ] `whatsapp_leads` restituisce valori plausibili.
- [ ] `conversion_rate` e formattato come percentuale.
- [ ] La pagina SEO mostra query e landing page.
- [ ] La pagina Performance Pagine mostra `page_path`.
- [ ] La pagina Sedi mostra Favaro/Salzano o sedi equivalenti.
- [ ] I filtri globali non rompono i grafici.
- [ ] Le tabelle sono ordinate in modo utile.
- [ ] I grafici non mostrano campi tecnici incomprensibili al cliente.
- [ ] I nomi delle metriche sono rinominati in italiano semplice.
- [ ] Il confronto con periodo precedente e attivo dove utile.
- [ ] Il report e condiviso in sola lettura.
- [ ] Il cliente riceve una breve spiegazione su Lead, SEO e pagine migliori.

