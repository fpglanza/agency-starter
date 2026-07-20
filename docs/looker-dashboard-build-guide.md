# Looker Studio Dashboard Build Guide

Questa guida spiega come costruire manualmente in Looker Studio la dashboard progettata per Autoscuola Racing.

E pensata come procedura operativa: segui i passaggi in ordine, come un manuale di montaggio.

Non richiede modifiche al sito, a GTM, GA4, LegalBlink o Search Console.

---

# Introduzione

## Cosa serve prima di iniziare

Prima di aprire Looker Studio, verifica di avere:

1. **Proprieta GA4 attiva**
   - Deve ricevere almeno `page_view`.
   - Deve ricevere eventi di interazione:
     - `cta_click`
     - `phone_click`
     - `whatsapp_click`
     - `scroll`
     - `click`
     - `user_engagement`

2. **Search Console verificata**
   - La proprieta deve essere gia verificata.
   - La sitemap deve essere stata inviata.
   - Devono essere disponibili dati query o landing page.

3. **Accesso a Looker Studio**
   - Usa lo stesso account Google che ha accesso a GA4 e Search Console.

4. **Browser consigliato**
   - Google Chrome aggiornato.
   - Evita finestre con estensioni aggressive di privacy/adblock durante la configurazione.

5. **Permessi necessari**
   - GA4: almeno ruolo Viewer, meglio Editor se devi creare campi o verificare dati.
   - Search Console: accesso alla proprieta.
   - Looker Studio: permesso di creare report e aggiungere origini dati.

6. **Dati evento disponibili**
   - Eventi:
     - `page_view`
     - `user_engagement`
     - `cta_click`
     - `phone_click`
     - `whatsapp_click`
     - `scroll`
     - `click`
   - Parametri:
     - `page_path`
     - `href`
     - `location`
     - `section`
     - `office`
     - `text`
     - `event_category`

## Regola pratica

Se un grafico risulta vuoto:

1. Controlla la sorgente dati.
2. Controlla il date range.
3. Controlla il filtro.
4. Controlla il nome campo.
5. Controlla che GA4 abbia ricevuto eventi nel periodo selezionato.

---

# Creazione report

## STEP 1 - Aprire Looker Studio

Cosa cliccare:

1. Apri il browser.
2. Vai su `https://lookerstudio.google.com/`.
3. Accedi con l'account Google corretto.

Risultato atteso:

- Vedi la home di Looker Studio.
- Puoi creare un nuovo report.

## STEP 2 - Creare nuovo report

Cosa cliccare:

1. In alto a sinistra clicca **Create**.
2. Clicca **Report**.

Risultato atteso:

- Si apre un report vuoto.
- Looker Studio chiede di aggiungere una sorgente dati.

## STEP 3 - Aggiungere origine dati GA4

Cosa cliccare:

1. Nella finestra **Add data to report**, scegli **Google Analytics**.
2. Seleziona l'account Google Analytics.
3. Seleziona la property GA4 del sito.
4. Seleziona lo stream web corretto.
5. Clicca **Add**.
6. Se compare una conferma, clicca **Add to report**.

Risultato atteso:

- Il report ha una sorgente dati GA4.
- Compare una tabella automatica o un grafico iniziale.

## STEP 4 - Rinominare origine GA4

Cosa cliccare:

1. Menu alto: **Resource**.
2. Clicca **Manage added data sources**.
3. Trova la sorgente GA4.
4. Clicca **Edit**.
5. In alto rinomina la sorgente in:

```text
GA4 - Autoscuola Racing
```

6. Clicca **Done** o torna al report.

Risultato atteso:

- La sorgente e riconoscibile.
- Sara piu facile sostituirla in futuro.

## STEP 5 - Aggiungere origine Search Console

Cosa cliccare:

1. Menu alto: **Resource**.
2. Clicca **Manage added data sources**.
3. Clicca **Add a data source**.
4. Cerca **Search Console**.
5. Seleziona la proprieta Search Console corretta.
6. Scegli la tabella **URL Impression** se vuoi analizzare landing page.
7. In alternativa scegli **Site Impression** se vuoi una vista piu generale sulle query.
8. Clicca **Connect**.
9. Clicca **Add to report**.

Risultato atteso:

- Il report ha due sorgenti dati:
  - GA4
  - Search Console

## STEP 6 - Rinominare origine Search Console

Cosa cliccare:

1. Menu alto: **Resource**.
2. Clicca **Manage added data sources**.
3. Trova la sorgente Search Console.
4. Clicca **Edit**.
5. Rinomina in:

```text
Search Console - Autoscuola Racing
```

Risultato atteso:

- Le due sorgenti sono chiaramente distinguibili.

## STEP 7 - Impostare dimensione layout

Cosa cliccare:

1. Clicca in un punto vuoto della pagina.
2. A destra apri il pannello **Theme and layout**.
3. Vai su **Layout**.
4. Imposta:
   - Canvas size: **Custom**
   - Width: `1440`
   - Height: `1100` per pagine standard

Risultato atteso:

- Il report ha spazio sufficiente per KPI, grafici e tabelle.
- La dashboard e comoda su desktop.

## STEP 8 - Impostare tema base

Cosa cliccare:

1. Clicca in un punto vuoto della pagina.
2. Apri **Theme and layout**.
3. Vai su **Theme**.
4. Seleziona un tema semplice.
5. Imposta manualmente:
   - Background: `#FFFFFF`
   - Primary color: `#12135D`
   - Accent color: `#D4FF00`
   - Text color: `#2C3E50`

Risultato atteso:

- Il report ha stile coerente e pulito.

## STEP 9 - Rinominare prima pagina

Cosa cliccare:

1. In alto clicca **Page**.
2. Clicca **Manage pages**.
3. Rinomina la prima pagina:

```text
Executive Overview
```

Risultato atteso:

- La prima pagina e pronta per la panoramica.

## STEP 10 - Creare le altre pagine

Cosa cliccare:

1. Menu alto: **Page**.
2. Clicca **New page**.
3. Ripeti fino ad avere 5 pagine.
4. Rinominale cosi:

```text
Executive Overview
Lead & Contatti
SEO
Performance Pagine
Sedi
```

Risultato atteso:

- La struttura principale del report e pronta.

---

# Campi calcolati da creare prima dei grafici

Conviene creare i campi calcolati prima di costruire le pagine.

## STEP 1 - Aprire modifica sorgente GA4

Cosa cliccare:

1. Menu alto: **Resource**.
2. Clicca **Manage added data sources**.
3. Su `GA4 - Autoscuola Racing`, clicca **Edit**.
4. Clicca **Add a field**.

Risultato atteso:

- Si apre il pannello per creare un campo calcolato.

## STEP 2 - Creare campo `lead_totali`

Nome campo:

```text
lead_totali
```

Formula:

```text
SUM(
  CASE
    WHEN Event name IN ("phone_click", "whatsapp_click") THEN Event count
    ELSE 0
  END
)
```

Tipo:

```text
Number
```

Aggregazione:

```text
Sum
```

Cosa cliccare:

1. Incolla la formula.
2. Clicca **Save**.

Risultato atteso:

- Esiste una metrica `lead_totali`.
- Conta i lead piu concreti: telefono e WhatsApp.

## STEP 3 - Creare campo `phone_leads`

Nome campo:

```text
phone_leads
```

Formula:

```text
SUM(
  CASE
    WHEN Event name = "phone_click" THEN Event count
    ELSE 0
  END
)
```

Risultato atteso:

- Esiste una metrica per i click telefono.

## STEP 4 - Creare campo `whatsapp_leads`

Nome campo:

```text
whatsapp_leads
```

Formula:

```text
SUM(
  CASE
    WHEN Event name = "whatsapp_click" THEN Event count
    ELSE 0
  END
)
```

Risultato atteso:

- Esiste una metrica per i click WhatsApp.

## STEP 5 - Creare campo `cta_engagement`

Nome campo:

```text
cta_engagement
```

Formula:

```text
SUM(
  CASE
    WHEN Event name = "cta_click" THEN Event count
    ELSE 0
  END
)
```

Risultato atteso:

- Esiste una metrica per i click sulle CTA.

## STEP 6 - Creare campo `conversion_rate`

Nome campo:

```text
conversion_rate
```

Formula:

```text
SAFE_DIVIDE(lead_totali, Sessions)
```

Formato:

```text
Percent
```

Risultato atteso:

- Esiste una metrica percentuale di conversione.
- Indica quanti lead vengono generati rispetto alle sessioni.

Se Looker Studio non accetta `SAFE_DIVIDE`, usa:

```text
lead_totali / Sessions
```

## STEP 7 - Creare campo `lead_rate_pagina`

Nome campo:

```text
lead_rate_pagina
```

Formula:

```text
SAFE_DIVIDE(lead_totali, Views)
```

Formato:

```text
Percent
```

Risultato atteso:

- Esiste una metrica per capire quali pagine convertono meglio.

## STEP 8 - Creare campo `sede_normalizzata`

Nome campo:

```text
sede_normalizzata
```

Formula:

```text
CASE
  WHEN office IS NOT NULL AND office != "" THEN office
  WHEN location IS NOT NULL AND location != "" THEN location
  ELSE "generale"
END
```

Tipo:

```text
Text
```

Risultato atteso:

- Esiste una dimensione unica per confrontare sedi o aree.

## STEP 9 - Tornare al report

Cosa cliccare:

1. Clicca **Done**.
2. Torna al report.

Risultato atteso:

- I campi calcolati sono disponibili nei grafici.

---

# Pagina 1 - Executive Overview

Apri la pagina **Executive Overview**.

Obiettivo della pagina:

- Mostrare traffico, lead, canali e pagine principali.
- Far capire lo stato del sito in meno di 30 secondi.

## STEP 1 - Inserire Scorecard Utenti attivi

Cosa cliccare:

1. Menu alto: **Insert**.
2. Clicca **Scorecard**.
3. Disegna la card in alto a sinistra.

Metrica:

```text
Active users
```

Formato:

```text
Number
```

Dimensione:

```text
Nessuna
```

Filtro:

```text
Nessuno
```

Intervallo date:

```text
Ultimi 30 giorni
```

Risultato atteso:

- La card mostra il numero di utenti attivi.

## STEP 2 - Duplicare Scorecard e creare Sessioni

Cosa cliccare:

1. Seleziona la scorecard Utenti attivi.
2. Premi `Cmd+C` e `Cmd+V` su Mac, oppure `Ctrl+C` e `Ctrl+V` su Windows.
3. Sposta la copia a destra.
4. Nel pannello dati cambia la metrica.

Metrica:

```text
Sessions
```

Titolo card:

```text
Sessioni
```

Risultato atteso:

- La seconda card mostra le sessioni.

## STEP 3 - Duplicare Scorecard e creare Visualizzazioni

Cosa cliccare:

1. Duplica una scorecard esistente.
2. Spostala a destra.
3. Cambia metrica.

Metrica:

```text
Views
```

Titolo card:

```text
Visualizzazioni
```

Risultato atteso:

- La card mostra le visualizzazioni pagina.

## STEP 4 - Duplicare Scorecard e creare Lead Totali

Cosa cliccare:

1. Duplica una scorecard.
2. Cambia metrica.

Metrica:

```text
lead_totali
```

Titolo card:

```text
Lead totali
```

Filtro:

```text
Nessuno se il campo calcolato gia filtra gli eventi.
```

Risultato atteso:

- La card mostra click telefono + click WhatsApp.

## STEP 5 - Duplicare Scorecard e creare Conversion Rate

Cosa cliccare:

1. Duplica una scorecard.
2. Cambia metrica.

Metrica:

```text
conversion_rate
```

Formato:

```text
Percentuale
```

Titolo card:

```text
Conversion rate
```

Risultato atteso:

- La card mostra una percentuale.
- Se risulta vuota, controlla formula e date range.

## STEP 6 - Creare grafico andamento ultimi 30 giorni

Cosa cliccare:

1. Menu alto: **Insert**.
2. Clicca **Time series chart**.
3. Disegna il grafico sotto le scorecard.

Tipo grafico:

```text
Time series
```

Dimensione:

```text
Date
```

Metriche:

```text
Active users
lead_totali
```

Filtro:

```text
Nessuno
```

Ordinamento:

```text
Date ascending
```

Intervallo date:

```text
Ultimi 30 giorni
```

Risultato atteso:

- Il grafico mostra una linea per utenti e una per lead.

## STEP 7 - Creare grafico sorgenti traffico

Cosa cliccare:

1. Menu alto: **Insert**.
2. Clicca **Pie chart** oppure **Donut chart**.
3. Posizionalo sotto o a destra del grafico andamento.

Tipo grafico:

```text
Donut chart
```

Dimensione:

```text
Session source / medium
```

Metrica:

```text
Sessions
```

Filtro:

```text
Nessuno
```

Ordinamento:

```text
Sessions descending
```

Intervallo date:

```text
Ultimi 30 giorni
```

Risultato atteso:

- Il grafico mostra da dove arrivano le sessioni.

## STEP 8 - Creare tabella top pagine

Cosa cliccare:

1. Menu alto: **Insert**.
2. Clicca **Table**.
3. Posizionala nella parte bassa della pagina.

Tipo grafico:

```text
Table
```

Dimensione:

```text
Page path
```

Metriche:

```text
Views
Active users
lead_totali
```

Filtro:

```text
Nessuno
```

Ordinamento:

```text
Views descending
```

Intervallo date:

```text
Ultimi 30 giorni
```

Risultato atteso:

- La tabella mostra le pagine piu viste e i lead generati.

## STEP 9 - Creare tabella eventi principali

Cosa cliccare:

1. Inserisci una nuova **Table**.
2. Posizionala accanto alla top pagine.

Dimensione:

```text
Event name
```

Metrica:

```text
Event count
```

Filtro:

```text
Event name IN page_view, cta_click, phone_click, whatsapp_click, scroll, click
```

Ordinamento:

```text
Event count descending
```

Risultato atteso:

- La tabella mostra quali eventi sono piu frequenti.

---

# Pagina 2 - Lead & Contatti

Apri la pagina **Lead & Contatti**.

Obiettivo della pagina:

- Misurare contatti telefonici, WhatsApp e CTA.
- Capire quali pagine e sedi generano piu richieste.

## STEP 1 - Inserire Scorecard Lead Totali

Cosa cliccare:

1. **Insert**.
2. **Scorecard**.
3. Posiziona in alto a sinistra.

Metrica:

```text
lead_totali
```

Dimensione:

```text
Nessuna
```

Filtro:

```text
Nessuno
```

Risultato atteso:

- Mostra telefono + WhatsApp.

## STEP 2 - Duplicare e creare Phone Click

Cosa cliccare:

1. Duplica la card Lead Totali.
2. Cambia metrica.

Metrica:

```text
phone_leads
```

Titolo:

```text
Click telefono
```

Risultato atteso:

- Mostra solo `phone_click`.

## STEP 3 - Duplicare e creare WhatsApp Click

Metrica:

```text
whatsapp_leads
```

Titolo:

```text
Click WhatsApp
```

Risultato atteso:

- Mostra solo `whatsapp_click`.

## STEP 4 - Duplicare e creare CTA Click

Metrica:

```text
cta_engagement
```

Titolo:

```text
Click CTA
```

Risultato atteso:

- Mostra le interazioni con CTA.

## STEP 5 - Creare andamento lead nel tempo

Tipo grafico:

```text
Time series
```

Cosa cliccare:

1. **Insert**.
2. **Time series chart**.
3. Disegna il grafico sotto le card.

Dimensione:

```text
Date
```

Metrica:

```text
lead_totali
```

Filtro:

```text
Event name IN phone_click, whatsapp_click
```

Ordinamento:

```text
Date ascending
```

Intervallo date:

```text
Ultimi 30 giorni
```

Risultato atteso:

- Vedi quando arrivano piu lead.

## STEP 6 - Creare barre lead per tipo evento

Tipo grafico:

```text
Bar chart
```

Cosa cliccare:

1. **Insert**.
2. **Bar chart**.
3. Posizionalo a destra del grafico temporale.

Dimensione:

```text
Event name
```

Metrica:

```text
Event count
```

Filtro:

```text
Event name IN phone_click, whatsapp_click, cta_click
```

Ordinamento:

```text
Event count descending
```

Risultato atteso:

- Vedi il peso relativo di telefono, WhatsApp e CTA.

## STEP 7 - Creare barre lead per sede

Tipo grafico:

```text
Bar chart
```

Dimensione:

```text
sede_normalizzata
```

Metrica:

```text
lead_totali
```

Filtro:

```text
Event name IN phone_click, whatsapp_click
```

Ordinamento:

```text
lead_totali descending
```

Risultato atteso:

- Vedi quali sedi generano piu contatti.

## STEP 8 - Creare tabella conversioni per pagina

Tipo grafico:

```text
Table
```

Cosa cliccare:

1. **Insert**.
2. **Table**.
3. Posiziona nella parte bassa.

Dimensioni:

```text
Page path
Event name
text
href
```

Metriche:

```text
Event count
```

Filtro:

```text
Event name IN phone_click, whatsapp_click, cta_click
```

Ordinamento:

```text
Event count descending
```

Risultato atteso:

- Vedi quali pagine e CTA generano interazioni.

## STEP 9 - Creare tabella conversioni per sede

Tipo grafico:

```text
Table
```

Dimensioni:

```text
sede_normalizzata
Event name
text
href
```

Metrica:

```text
Event count
```

Filtro:

```text
Event name IN phone_click, whatsapp_click, cta_click
```

Ordinamento:

```text
Event count descending
```

Risultato atteso:

- Vedi lead e CTA divisi per sede o area.

---

# Pagina 3 - SEO

Apri la pagina **SEO**.

Origine dati da usare:

```text
Search Console - Autoscuola Racing
```

Obiettivo:

- Mostrare visibilita organica, query e landing page.

## STEP 1 - Inserire Scorecard Click organici

Cosa cliccare:

1. **Insert**.
2. **Scorecard**.
3. Nel pannello dati cambia origine dati in Search Console.

Metrica:

```text
Url Clicks
```

Dimensione:

```text
Nessuna
```

Filtro:

```text
Nessuno
```

Intervallo date:

```text
Ultimi 90 giorni
```

Risultato atteso:

- Mostra i click da Google Search.

## STEP 2 - Duplicare e creare Impression

Metrica:

```text
Impressions
```

Titolo:

```text
Impression
```

Risultato atteso:

- Mostra quante volte il sito e apparso su Google.

## STEP 3 - Duplicare e creare CTR

Metrica:

```text
Url CTR
```

oppure:

```text
Site CTR
```

Formato:

```text
Percentuale
```

Risultato atteso:

- Mostra il rapporto tra click e impression.

## STEP 4 - Duplicare e creare Posizione media

Metrica:

```text
Average Position
```

Formato:

```text
Numero con 1 decimale
```

Risultato atteso:

- Mostra la posizione media in Google.
- Valori piu bassi sono migliori.

## STEP 5 - Creare andamento SEO

Tipo grafico:

```text
Time series
```

Dimensione:

```text
Date
```

Metriche:

```text
Url Clicks
Impressions
```

Filtro:

```text
Nessuno
```

Ordinamento:

```text
Date ascending
```

Intervallo date:

```text
Ultimi 90 giorni
```

Risultato atteso:

- Vedi crescita o calo SEO nel tempo.

## STEP 6 - Creare tabella Top Query

Tipo grafico:

```text
Table
```

Dimensione:

```text
Query
```

Metriche:

```text
Url Clicks
Impressions
Url CTR
Average Position
```

Filtro:

```text
Impressions > 0
```

Ordinamento:

```text
Url Clicks descending
```

Risultato atteso:

- Vedi le query che generano piu traffico.

## STEP 7 - Creare tabella Landing Page SEO

Tipo grafico:

```text
Table
```

Dimensione:

```text
Landing Page
```

Metriche:

```text
Url Clicks
Impressions
Url CTR
Average Position
```

Filtro:

```text
Impressions > 0
```

Ordinamento:

```text
Url Clicks descending
```

Risultato atteso:

- Vedi quali pagine entrano meglio da Google.

## STEP 8 - Creare grafico top query per click

Tipo grafico:

```text
Horizontal bar chart
```

Dimensione:

```text
Query
```

Metrica:

```text
Url Clicks
```

Filtro:

```text
Impressions > 0
```

Ordinamento:

```text
Url Clicks descending
```

Limite righe:

```text
10
```

Risultato atteso:

- Vedi le 10 query piu importanti.

---

# Pagina 4 - Performance Pagine

Apri la pagina **Performance Pagine**.

Origine dati:

```text
GA4 - Autoscuola Racing
```

Obiettivo:

- Capire quali pagine attraggono traffico.
- Capire quali pagine generano interazioni.
- Trovare pagine con traffico ma pochi lead.

## STEP 1 - Inserire Scorecard Visualizzazioni

Tipo:

```text
Scorecard
```

Metrica:

```text
Views
```

Intervallo date:

```text
Ultimi 30 giorni
```

Risultato atteso:

- Mostra visualizzazioni totali.

## STEP 2 - Duplicare e creare Utenti

Metrica:

```text
Active users
```

Risultato atteso:

- Mostra utenti attivi.

## STEP 3 - Duplicare e creare Scroll

Metrica:

```text
Event count
```

Filtro:

```text
Event name = scroll
```

Risultato atteso:

- Mostra quanti scroll sono stati registrati.

## STEP 4 - Duplicare e creare Lead pagina

Metrica:

```text
lead_totali
```

Risultato atteso:

- Mostra lead totali nel periodo.

## STEP 5 - Creare tabella performance pagine

Tipo grafico:

```text
Table
```

Dimensione:

```text
Page path
```

Metriche:

```text
Views
Active users
Event count
lead_totali
lead_rate_pagina
```

Filtro:

```text
Nessuno
```

Ordinamento:

```text
Views descending
```

Intervallo date:

```text
Ultimi 30 giorni
```

Risultato atteso:

- Vedi traffico e lead per pagina.

## STEP 6 - Creare grafico top pagine per lead

Tipo grafico:

```text
Bar chart
```

Dimensione:

```text
Page path
```

Metrica:

```text
lead_totali
```

Filtro:

```text
lead_totali > 0
```

Ordinamento:

```text
lead_totali descending
```

Limite righe:

```text
10
```

Risultato atteso:

- Vedi le pagine che generano piu contatti.

## STEP 7 - Creare grafico top pagine per traffico

Tipo grafico:

```text
Bar chart
```

Dimensione:

```text
Page path
```

Metrica:

```text
Views
```

Filtro:

```text
Nessuno
```

Ordinamento:

```text
Views descending
```

Limite righe:

```text
10
```

Risultato atteso:

- Vedi le pagine piu visitate.

## STEP 8 - Creare tabella pagine con traffico ma pochi lead

Tipo grafico:

```text
Table
```

Dimensione:

```text
Page path
```

Metriche:

```text
Views
lead_totali
lead_rate_pagina
```

Filtro:

```text
Views > 20
```

Ordinamento:

```text
lead_rate_pagina ascending
```

Risultato atteso:

- Vedi pagine che ricevono visite ma non generano contatti.

Nota:

- Se il sito ha poco traffico, abbassa la soglia `Views > 20`.

## STEP 9 - Creare tabella eventi per pagina

Tipo grafico:

```text
Table
```

Dimensioni:

```text
Page path
Event name
```

Metriche:

```text
Event count
```

Filtro:

```text
Event name IN page_view, scroll, cta_click, phone_click, whatsapp_click
```

Ordinamento:

```text
Event count descending
```

Risultato atteso:

- Vedi quali eventi avvengono su ogni pagina.

---

# Pagina 5 - Sedi

Apri la pagina **Sedi**.

Origine dati:

```text
GA4 - Autoscuola Racing
```

Obiettivo:

- Confrontare sedi o aree.
- Per Autoscuola Racing, usare Favaro e Salzano come esempio.

## STEP 1 - Inserire Scorecard Lead Favaro

Tipo:

```text
Scorecard
```

Metrica:

```text
lead_totali
```

Filtro:

```text
sede_normalizzata = favaro
```

Risultato atteso:

- Mostra i lead attribuiti a Favaro.

## STEP 2 - Duplicare e creare Lead Salzano

Metrica:

```text
lead_totali
```

Filtro:

```text
sede_normalizzata = salzano
```

Risultato atteso:

- Mostra i lead attribuiti a Salzano.

## STEP 3 - Duplicare e creare Lead generali

Metrica:

```text
lead_totali
```

Filtro:

```text
sede_normalizzata = generale
```

Risultato atteso:

- Mostra lead non attribuiti a una sede specifica.

## STEP 4 - Creare barre phone per sede

Tipo grafico:

```text
Bar chart
```

Dimensione:

```text
sede_normalizzata
```

Metrica:

```text
phone_leads
```

Filtro:

```text
Event name = phone_click
```

Ordinamento:

```text
phone_leads descending
```

Risultato atteso:

- Vedi telefonate per sede.

## STEP 5 - Creare barre WhatsApp per sede

Tipo grafico:

```text
Bar chart
```

Dimensione:

```text
sede_normalizzata
```

Metrica:

```text
whatsapp_leads
```

Filtro:

```text
Event name = whatsapp_click
```

Ordinamento:

```text
whatsapp_leads descending
```

Risultato atteso:

- Vedi WhatsApp per sede.

## STEP 6 - Creare barre CTA per sede

Tipo grafico:

```text
Bar chart
```

Dimensione:

```text
sede_normalizzata
```

Metrica:

```text
cta_engagement
```

Filtro:

```text
Event name = cta_click
```

Ordinamento:

```text
cta_engagement descending
```

Risultato atteso:

- Vedi CTA per sede o area.

## STEP 7 - Creare andamento lead per sede

Tipo grafico:

```text
Time series
```

Dimensione:

```text
Date
```

Breakdown dimension:

```text
sede_normalizzata
```

Metrica:

```text
lead_totali
```

Filtro:

```text
Event name IN phone_click, whatsapp_click
```

Ordinamento:

```text
Date ascending
```

Risultato atteso:

- Vedi nel tempo quale sede genera piu lead.

## STEP 8 - Creare tabella dettaglio sedi

Tipo grafico:

```text
Table
```

Dimensioni:

```text
sede_normalizzata
Event name
text
href
Page path
```

Metriche:

```text
Event count
```

Filtro:

```text
Event name IN phone_click, whatsapp_click, cta_click
```

Ordinamento:

```text
Event count descending
```

Risultato atteso:

- Vedi cosa cliccano gli utenti per ogni sede.

## STEP 9 - Creare donut distribuzione lead per sede

Tipo grafico:

```text
Donut chart
```

Dimensione:

```text
sede_normalizzata
```

Metrica:

```text
lead_totali
```

Filtro:

```text
Event name IN phone_click, whatsapp_click
```

Ordinamento:

```text
lead_totali descending
```

Risultato atteso:

- Vedi la quota lead per sede.

---

# Filtri globali

I filtri globali aiutano il cliente a esplorare il report senza modificare grafici.

## STEP 1 - Creare Date Range

Cosa cliccare:

1. Vai alla pagina **Executive Overview**.
2. Menu alto: **Insert**.
3. Clicca **Date range control**.
4. Posizionalo in alto a destra.

Impostazioni:

```text
Default date range: Last 30 days
Comparison date range: Previous period
```

Risultato atteso:

- Il cliente puo cambiare periodo.

Come applicarlo a tutte le pagine:

1. Seleziona il controllo.
2. Copialo.
3. Incollalo nella stessa posizione su ogni pagina.

## STEP 2 - Creare filtro Device Category

Cosa cliccare:

1. **Insert**.
2. **Drop-down list**.
3. Posizionalo nell'header o nella sidebar.

Dimensione:

```text
Device category
```

Metrica:

```text
Sessions
```

Risultato atteso:

- Il cliente puo filtrare mobile, desktop, tablet.

## STEP 3 - Creare filtro Source / Medium

Tipo controllo:

```text
Drop-down list
```

Dimensione:

```text
Session source / medium
```

Metrica:

```text
Sessions
```

Risultato atteso:

- Il cliente puo filtrare sorgenti di traffico.

## STEP 4 - Creare filtro Event Name

Tipo controllo:

```text
Drop-down list
```

Dimensione:

```text
Event name
```

Metrica:

```text
Event count
```

Risultato atteso:

- Il cliente puo isolare eventi come `cta_click`, `phone_click`, `whatsapp_click`.

## STEP 5 - Creare filtro Office

Tipo controllo:

```text
Drop-down list
```

Dimensione:

```text
sede_normalizzata
```

Metrica:

```text
Event count
```

Risultato atteso:

- Il cliente puo filtrare Favaro, Salzano o generale.

## STEP 6 - Creare filtro Page Path

Tipo controllo:

```text
Drop-down list
```

Dimensione:

```text
Page path
```

Metrica:

```text
Views
```

Risultato atteso:

- Il cliente puo analizzare una pagina specifica.

## STEP 7 - Rendere i filtri coerenti

Cosa cliccare:

1. Seleziona ogni filtro.
2. Vai nel pannello **Style**.
3. Usa stesso font, bordo e colore.
4. Allineali nella stessa posizione in ogni pagina.

Risultato atteso:

- Il report sembra un prodotto unico, non una raccolta di grafici.

---

# Tema

## Colori consigliati

Per Autoscuola Racing:

```text
Sfondo pagina: #FFFFFF
Sfondo sezioni leggere: #F8F9FF
Testo principale: #2C3E50
Titoli: #12135D
Accento lead: #D4FF00
Accento secondario: #2124BD
Bordi sottili: #E6E8F2
```

## Font

Se disponibili in Looker Studio:

```text
Titoli: Exo 2 oppure Montserrat
Testi: Montserrat oppure Arial
Tabelle: Montserrat oppure Arial
```

Se Exo 2 non e disponibile:

```text
Usare Montserrat per tutto il report.
```

## Spaziature

Usare queste misure:

```text
Margine esterno pagina: 32 px
Spazio tra KPI: 12-16 px
Spazio tra sezioni: 24-32 px
Altezza KPI card: 96-120 px
Altezza grafico linea: 260-320 px
Altezza tabelle: 280-420 px
```

## Dimensioni titoli

```text
Titolo report: 28-32 px
Titolo pagina: 24-28 px
Titolo sezione: 16-20 px
Label KPI: 11-13 px
Numero KPI: 28-40 px
Testo tabella: 11-13 px
```

## Layout desktop

Larghezza consigliata:

```text
1440 px
```

Struttura:

1. Header alto 80-100 px.
2. Riga KPI.
3. Grafico principale.
4. Grafici secondari.
5. Tabelle diagnostiche.

## Stile KPI

Per ogni KPI:

```text
Sfondo: bianco
Bordo: #E6E8F2
Raggio angoli: 8-12 px
Padding interno: 16-20 px
Numero grande: colore #12135D
Label: colore #2C3E50
Accento: usare #D4FF00 solo per highlight
```

## Stile tabelle

Impostazioni:

```text
Header: grigio chiaro o blu molto chiaro
Testo header: #12135D
Righe alternate: attive
Paginazione: attiva
Numero righe visibili: 10
```

## Stile grafici

Regole:

- Non usare piu di 4 colori nello stesso grafico.
- Evidenziare lead con colore accento.
- Usare blu per traffico.
- Usare lime solo per conversioni o insight importanti.
- Evitare 3D, ombre pesanti, gradienti decorativi.

---

# Verifica finale

Prima di condividere il report, apri ogni pagina e verifica.

## Checklist generale

```text
□ tutti i KPI funzionano
□ Search Console collegata
□ GA4 aggiorna dati
□ filtri funzionano
□ grafici ordinati
□ nessun errore
□ report condivisibile
```

## Checklist Executive Overview

```text
□ Utenti attivi mostra un numero
□ Sessioni mostra un numero
□ Visualizzazioni mostra un numero
□ Lead totali mostra un numero plausibile
□ Conversion rate mostra una percentuale
□ Grafico andamento mostra linee
□ Sorgenti traffico non e vuoto
□ Top pagine e ordinata per Views
```

## Checklist Lead & Contatti

```text
□ phone_leads mostra dati o zero plausibile
□ whatsapp_leads mostra dati o zero plausibile
□ cta_engagement mostra dati
□ Lead nel tempo funziona
□ Tabella conversioni mostra text e href
□ Sedi/location sono leggibili
```

## Checklist SEO

```text
□ Click organici mostra dati
□ Impression mostra dati
□ CTR e percentuale
□ Posizione media e numerica
□ Top query mostra query reali
□ Landing page SEO mostra URL reali
```

## Checklist Performance Pagine

```text
□ Page path e leggibile
□ Views e ordinato decrescente
□ Lead per pagina funziona
□ Pagine con traffico ma pochi lead non e fuorviante
□ Scroll usa Event name = scroll
```

## Checklist Sedi

```text
□ Favaro mostra dati o zero plausibile
□ Salzano mostra dati o zero plausibile
□ Generale mostra dati o zero plausibile
□ phone_click per sede funziona
□ whatsapp_click per sede funziona
□ La tabella contiene text e href
```

## Errori comuni da correggere

Se un grafico e vuoto:

1. Controlla date range.
2. Controlla sorgente dati.
3. Controlla filtro evento.
4. Controlla se il campo esiste davvero.
5. Controlla se stai usando GA4 o Search Console nel grafico giusto.

Se una formula non funziona:

1. Controlla il nome esatto del campo.
2. Controlla maiuscole/minuscole.
3. Prova formula piu semplice.
4. Crea prima campi base, poi formule composite.

Se i lead sembrano troppo alti:

1. Verifica se `cta_click` e incluso in `lead_totali`.
2. Per un conteggio piu prudente, usa solo `phone_click` e `whatsapp_click`.

---

# Duplicazione per un nuovo cliente

Questa procedura trasforma il report Autoscuola Racing in un template per un nuovo cliente locale.

## STEP 1 - Make a copy

Cosa cliccare:

1. Apri il report template.
2. In alto a destra clicca i tre puntini o menu **File**.
3. Clicca **Make a copy**.

Risultato atteso:

- Si apre una finestra per copiare il report.

## STEP 2 - Cambiare origine dati GA4

Cosa cliccare:

1. Nella finestra di copia, trova la sorgente GA4.
2. Clicca il menu sorgente.
3. Seleziona la GA4 property del nuovo cliente.
4. Se non esiste, clicca **Create data source** e collega GA4.

Risultato atteso:

- Il report copiato usa i dati GA4 del nuovo cliente.

## STEP 3 - Cambiare origine Search Console

Cosa cliccare:

1. Nella stessa finestra, trova Search Console.
2. Sostituisci la proprieta con quella del nuovo cliente.
3. Se non disponibile, crea nuova sorgente Search Console.

Risultato atteso:

- La pagina SEO usa i dati del nuovo cliente.

## STEP 4 - Confermare copia

Cosa cliccare:

1. Clicca **Copy report**.
2. Attendi il caricamento.
3. Rinomina il report:

```text
Dashboard Marketing - Nome Cliente
```

Risultato atteso:

- Hai una nuova dashboard separata dal template.

## STEP 5 - Aggiornare logo

Cosa cliccare:

1. Seleziona il logo nel report.
2. Clicca **Replace image** oppure elimina e inserisci nuovo logo.
3. Menu alto: **Insert**.
4. Clicca **Image**.
5. Carica logo cliente.

Risultato atteso:

- Il report mostra il brand del nuovo cliente.

## STEP 6 - Aggiornare colori

Cosa cliccare:

1. Clicca in un punto vuoto.
2. Apri **Theme and layout**.
3. Cambia colori principali.
4. Aggiorna colori KPI e grafici principali.

Risultato atteso:

- La dashboard sembra creata per il nuovo cliente.

## STEP 7 - Aggiornare nomi sedi

Cosa cliccare:

1. Vai alla pagina **Sedi**.
2. Cambia i titoli delle card.
3. Cambia filtri:
   - da `favaro` al nome sede cliente
   - da `salzano` al nome sede cliente
4. Se il cliente ha piu di due sedi, duplica le card.
5. Se il cliente ha una sola sede, rinomina pagina:

```text
Servizi
```

oppure:

```text
Aree
```

Risultato atteso:

- La pagina Sedi rispecchia la struttura reale del cliente.

## STEP 8 - Verificare eventi

Cosa controllare:

1. Vai alla pagina **Lead & Contatti**.
2. Controlla se esistono:
   - `phone_click`
   - `whatsapp_click`
   - `cta_click`
   - `email_click`, se previsto
3. Se il cliente usa eventi diversi, aggiorna i filtri.

Risultato atteso:

- Le metriche lead non sono vuote per errore di naming.

## STEP 9 - Verificare parametri

Cosa controllare:

1. Apri una tabella con eventi.
2. Aggiungi temporaneamente le dimensioni:
   - `href`
   - `text`
   - `location`
   - `section`
   - `office`
3. Controlla se hanno valori.

Risultato atteso:

- I grafici possono usare parametri utili.

## STEP 10 - Condividere al cliente

Cosa cliccare:

1. In alto a destra clicca **Share**.
2. Inserisci email cliente.
3. Imposta permesso:

```text
Viewer
```

4. Disattiva modifica se non necessaria.
5. Scrivi messaggio breve.
6. Clicca **Send**.

Risultato atteso:

- Il cliente puo vedere il report senza modificarlo.

## STEP 11 - Consegna finale

Invia al cliente:

1. Link report Looker Studio.
2. Spiegazione breve:
   - Executive Overview = situazione generale
   - Lead & Contatti = richieste generate
   - SEO = visibilita Google
   - Performance Pagine = pagine migliori
   - Sedi = confronto sedi o servizi
3. Periodo consigliato di lettura:

```text
Controllare una volta al mese, usando ultimi 30 giorni.
```

Risultato atteso:

- Il cliente capisce dove guardare e cosa significano i dati principali.

