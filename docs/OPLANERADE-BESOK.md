# Oplanerade besök – specifikation

Fem patienter som **ser ut som LESS-ärenden och inte är det**. De låses upp när
kampanjen är klar och dyker sedan upp i övningsläget bland de andra fallen.

## Varför de finns

Spelet har hittills bara belönat att tillämpa LESS. Den som spelar igenom
kampanjen lär sig ett mönster: *triagera förbi läkaren, boka rätt profession,
sätt igång behandling*. Det mönstret är rätt i de flesta fall och farligt i
några – och sjuksköterskerådgivaren har redan skrivit ut risken:

> Det gamla flödet gav den somatiska frågan bort gratis. LESS tar bort det
> första besöket och tilldelar frågan ingen. En modell vars poäng är att
> avlasta läkaren skapar ett tryck åt ett håll.

De här fallen är motvikten. De tränar **diskriminering**: att skilja de
ärenden modellen är byggd för från dem den inte är byggd för. Det är också
skälet till att de kommer sist. Att lära sig undantaget innan regeln ger en
spelare som tvekar överallt; att lära sig regeln utan undantaget ger en
spelare som aldrig tvekar. Regeln först, sedan gränsen.

## Regler för innehållet

1. **Fallen får aldrig belöna misstänksamhet i sig.** Den som avbryter varje
   ärende och skickar allt till läkare ska inte få guld här heller. Det som
   ska belönas är att man ställde den fråga som skilde fallen åt.
2. **Fällan ska vara igenkännbar, inte orättvis.** Uppgiften som avslöjar
   saken ska finnas att fråga efter, i journalen eller i chatten. Ingen
   information får hållas undan för att skapa en poäng.
3. **Ytan ska likna ett kampanjärende.** Leo ska läsa som Bengt, Katrin som
   Anna, Yvonne som Carina. Likheten är själva övningen.
4. **Det korrekta svaret är sällan "till akuten".** Oftast är det en fråga
   till, en journalrad, eller ett annat nästa steg – inte en eskalering.
5. **Ett fall får sluta i att LESS faktiskt gäller.** Minst ett av de fem bör
   göra det, annars lär spelet ut att allt som ser konstigt ut är konstigt.

## De fem patienterna

Personposterna ligger redan i `content/people.js`. Ålder, yrke och bakgrund är
satta; allt kliniskt innehåll skrivs av respektive rådgivare.

| Patient | Ser ut som | Är i själva verket | Triage | Professionsfall |
|---|---|---|---|---|
| **Katrin Vall**, 44, undersköterska natt | Anna – utmattning, sömn, koncentration | Somatisk sjukdom som ingen tagit: trötthet, frusenhet, halvår, inga prover | `ssk-katrin` | `psy-katrin` |
| **Leo Brandt**, 33, byggnadsarbetare | Bengt – ryggskott, vill ha två veckor | Röd flagga i ryggen | `ssk-leo` | `fys-leo` |
| **Miriam Sjödin**, 51, teamledare | Ett psykiskt ärende | Arbetsplatskonflikt utan sjukdom – ingen nedsatt arbetsförmåga av sjukdom | `ssk-miriam` | `rko-miriam` |
| **Ronny Holmqvist**, 24, lagerarbetare | Ett ärende som kan vänta till torsdag | Akut psykiatriskt läge | `ssk-ronny` | `lak-ronny` |
| **Yvonne Krantz**, 56, förskolechef | Carina – händer, tappar saker | Progredierande neurologi, inte ett aktivitetsproblem | `ssk-yvonne` | `arb-yvonne` |

## Teknik

- Varje nytt fall får **`laser: 'oplanerat'`** och **`endastDrill: true`**.
  `LESS.drillFall()` filtrerar bort dem tills `LESS.state.kampanjKlarad()`.
- Formatet är oförändrat, se `docs/INNEHALL.md`.
- Principnycklar tas ur `LESS.principer` i `content/glossary.js`. Behövs en ny
  nyckel: säg till, inför den inte själv – kön för repetition bygger på dem.
- `⚠ EJ KLINISKT GRANSKAT` står kvar i varje innehållsfil.

## Filägande under skrivandet

En rådgivare per fil, så att ingen skriver över någon annan:

| Fil | Ägare |
|---|---|
| `content/cases-ssk.js` | sjukskoterska-radgivare (alla fem triagefall) |
| `content/cases-psykolog.js` | psykologisk-radgivare |
| `content/cases-fysio.js` | fysioterapeut-radgivare |
| `content/cases-lakare.js` | lakare-radgivare |
| `content/cases-arbetsterapeut.js` | arbetsterapeut-radgivare |
| `content/cases-rehabkoordinator.js` | rehabkoordinator-radgivare |
| `content/fragor.js` | ingen – nya frågor lämnas i rapporten, jag lägger in dem |
