# Inkomna skattningar – arbetsminne

Den här filen är minnet mellan genomgångarna. Var tredje dag går en
Claude-körning igenom planschernas svar, jämför dem med rådgivarnas gissningar
i `content/fragor.js` och skriver ner vad som kommit in. Filen är alltså både
logg och beslutsunderlag: nästa körning läser den för att veta vad som redan
är behandlat, och vad som väntar på besked.

**Ingenting i spelets innehåll ändras utan att verksamheten sagt ja.** Körningen
föreslår, den verkställer inte.

---

## Var svaren kommer ifrån

Frågeplanscherna hänger i varje professions arbetsrum i spelet. Personalen
skattar på kvotskala 0–100 hur vanligt rådgivarens antagande faktiskt är, och
kan signera med sitt namn. Svaren hamnar på två ställen:

| Var spelet körs | Vad som händer med svaret |
| --- | --- |
| Publicerad artefakt | Delas i artefaktens databas, samlingen `skattningar` |
| GitHub Pages eller lokal fil | Sparas bara i webbläsaren, skickas in via kopiera-och-klistra |

Artefakten: <https://claude.ai/code/artifact/393b10c8-3f8a-4b43-bd4b-d2c6067caca9>

Varje dokument i `skattningar` ser ut så här:

```
fragaId     at-arbetsplatsbedomning
roll        arbetsterapeut
varde       15                       ← personalens skattning, 0–100
radgivare   10                       ← rådgivaragentens gissning
deltagare   d7k2m9x1                 ← anonym webbläsarnyckel
signatur    "Love Olofsson"          ← frivilligt namn, null om anonym
tid         2026-09-03T08:14:22.031Z
```

Dokument-id är `<fragaId>__<deltagarId>`, så en ny skattning från samma person
skriver över den gamla i stället för att bli en dubblett.

## Vad genomgången gör

1. Läser `skattningar` ur artefaktens databas.
2. Räknar per fråga: antal svar, median, och avståndet till rådgivarens gissning.
3. Skriver in det som är nytt under **Logg** nedan, med signaturer.
4. Föreslår vad avvikelsen borde leda till i innehållet – och frågar
   verksamheten om förslaget ska genomföras.
5. Genomför bara det som fått ja, och antecknar beslutet.

## Hur en avvikelse läses

Skillnaden mellan rådgivarens gissning och personalens median är hela poängen
med planscherna. Riktmärken, inte regler:

| Avstånd | Vad det brukar betyda |
| --- | --- |
| 0–15 | Rådgivaren hade rätt. Inget att göra. |
| 16–35 | Rådgivaren låg fel i grad, inte i sak. Justera formuleringar. |
| 36+ | Rådgivaren hade fel bild av vardagen. Fallet kan behöva skrivas om. |

Ett enda svar är en persons erfarenhet, inte verksamhetens. Under tre svar på
en fråga föreslås ingen ändring – då noteras det bara.

## Öppna frågor som väntar på besked

*(inga ännu)*

## Logg

*(tom – första genomgången har inte körts)*
