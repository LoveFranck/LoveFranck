# Öppna frågor

Frågor om **regelverk, mandat och innehåll** — sådant som har ett svar någon kan
slå upp eller besluta. Professionsrådgivarna i `.claude/agents/` skriver in nya
fynd här och stryker rader när de är avgjorda.

> **Frågor om klinisk vardag hör inte hemma här.** Sådant som "förekommer det
> här i primärvården?" har sällan ett ja eller nej. De ligger i stället i
> `content/fragor.js`, skattas av rådgivaren på en kvotskala 0–100 och besvaras
> av verklig personal på planscherna i spelet. Se `docs/GRANSKNING.md`.

Formatet är enkelt: vad som är osäkert, var det sitter, vem som kan avgöra det,
och vad som händer med innehållet beroende på svaret.

---

## 1. Arbetsplatsbedömning av arbetsterapeut i primärvården

**Var:** `content/cases-arbetsterapeut.js`, fallet `arb-carina`. Det bästa
beslutsalternativet innehåller i dag formuleringen *"arbetsplatsbedömning
bokad"*.

**Frågan:** Förekommer arbetsplatsbesök eller arbetsplatsbedömning inom
primärvårdens arbetsterapiuppdrag? Utvecklaren har aldrig sett det göras och
misstänker att det i praktiken är företagshälsovårdens eller den specialiserade
rehabiliteringens område. Skiljer det sig mellan regioner och vårdval?

**Vem avgör:** `arbetsterapeut-radgivare`.

**Konsekvens:**
- *Förekommer det* – behåll formuleringen, men lägg till hur den bokas och av
  vem, så att den inte framstår som självklar.
- *Förekommer det inte* – byt till den realistiska motsvarigheten. Sannolikt en
  skriftlig beskrivning av funktion och begränsningar som Carina själv tar med
  till sin chef, i linje med spelets princip om att inte ta över patientens
  ansvar. Uppdatera även `varfor`-texten.

**Status:** öppen.

---

## 2. Bedömningsinstrument i facit

**Var:** ännu inga instrument namngivna i fallen, men frågan uppstår så snart
någon vill skärpa arbetsterapeutfallen.

**Frågan:** Vilka arbetsterapeutiska bedömningsinstrument används faktiskt i
primärvård? ADL-taxonomin och COPM är vanliga, men de arbetsinriktade
instrumenten hör kanske mest hemma i specialiserad rehabilitering.

**Vem avgör:** `arbetsterapeut-radgivare`.

**Konsekvens:** Namnge bara instrument som en normalbemannad vårdcentral
verkligen använder. Ett facit som hänvisar till ett instrument ingen har hört
talas om gör hela fallet otrovärdigt.

**Status:** öppen.

---

## 3. Sjuksköterskans mandat att triagera förbi läkare

**Var:** hela `content/cases-ssk.js`, och LESS-modellens kärna.

**Frågan:** Var går gränsen för vad en sjuksköterska får bedöma inom sin
yrkeskompetens när hon avgör att en F- eller M-diagnos rimligen ligger i botten
och bokar psykolog eller fysioterapeut i stället för läkare? Hur ska den
bedömningen dokumenteras för att hålla vid en granskning?

**Vem avgör:** `sjukskoterska-radgivare` tillsammans med `lakare-radgivare`, och
i slutänden verksamhetens medicinskt ansvariga.

**Status:** öppen.

---

## 4. Läkarens ansvar för att signera annans utredning

**Var:** `content/cases-lakare.js`, och LESS-modellens juridiska kärna.

**Frågan:** Vad krävs för att en läkare ska kunna stå bakom ett intyg byggt på
en psykologs, fysioterapeuts eller arbetsterapeuts underlag? Vad måste framgå om
vem som gjort vad, när räcker underlaget, och när måste läkaren träffa patienten
själv?

**Vem avgör:** `lakare-radgivare`, mot Socialstyrelsens föreskrifter om att
utfärda intyg — och i slutänden verksamhetens medicinskt ansvariga.

**Status:** öppen.

---

## 5. LESS-akronymen

**Var:** `content/glossary.js`, posten `less`, markerad med `todo`.

**Frågan:** Vad står bokstäverna för?

**Vem avgör:** verksamheten.

**Status:** öppen.
