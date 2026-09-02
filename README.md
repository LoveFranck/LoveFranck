# LESS – Vårdcentralen

Ett litet läromedelsspel om hur sjukskrivningsärenden hanteras enligt **LESS** i
primärvården. Estetiken är Game Boy Color, ungefär Pokémon Guld/Silver: 160×144
pixlar, fyra riktningar, textrutor och en handledare som förklarar efteråt.

Spelet körs i webbläsaren. Inga beroenden, inget byggsteg, inga bildfiler –
all grafik ritas i kod.

> ⚠️ **Innehållet är ett pedagogiskt utkast och är inte kliniskt granskat.**
> Alla patienter är påhittade. Spelet är ett diskussionsunderlag för utbildning,
> inte ett beslutsstöd. Se [Ansvar och granskning](#ansvar-och-granskning).

---

## Kom igång

```bash
# Enklast: öppna filen direkt
open index.html          # macOS
xdg-open index.html      # Linux

# Eller kör en lokal server (rekommenderas)
npx http-server -p 8080 -c-1
# → http://localhost:8080
```

**Publicera på GitHub Pages:** Settings → Pages → Deploy from a branch → välj
branch och `/ (root)`. Inget mer behövs.

**En enda fil att mejla runt:** `dist/less-vardcentralen.html` innehåller hela
spelet – all kod, all grafik, allt innehåll. Den fungerar offline och utan
server. Bygg om den efter ändringar med `node tools/build-single.js`.

## Kontroller

| Tangent | Funktion |
|---|---|
| Piltangenter / WASD | Gå |
| Z, Enter, mellanslag | **A** – prata, bekräfta |
| X, backsteg | **B** – tillbaka, handledartips |
| J | Journal (i möte) / anslagstavla (i huset) |
| H | Handboken |
| Esc | Meny |
| M | Ljud på/av |

På pekskärm visas en styrkors-panel under skärmen.

---

## Spellägen

**Kampanj** – tre ärenden hela vägen genom flödet. Du byter roll längs vägen,
och dina beslut följer med patienten: triagerar du Anna till läkare i steg 1 så
möter psykologen henne i steg 2 med fyra veckors sjukskrivning redan utskriven.
Varje ärende slutar med en epilog som visar hur det gick ett halvår senare.

| Ärende | Kedja |
|---|---|
| Anna Ek, 34, ångest | SSK-triage → psykolog → läkare → rehabkoordinator |
| Bengt Nilsson, 52, ländrygg | SSK-triage → fysioterapeut → läkare |
| Carina Holm, 47, handartros | SSK-triage → arbetsterapeut *(når aldrig läkare – det är poängen)* |

**Övningsläge** – gå in i vilket rum du vill och mata på med fall i en roll.
Urvalet styrs av repetitionskön: principer du missat prioriteras.

---

## Rollerna

| Roll | Rum | Uppdrag i spelet |
|---|---|---|
| Sjuksköterska | Triage | Triagera chattärenden. BEDDA, salutogen kommunikation, tydliga förväntningar. Boka rätt profession, hänvisa vidare eller avsluta. |
| Psykolog | Psykologrum | Sjukskrivningsärenden med F-diagnos i botten. Försäkringsmedicinsk utredning, psykoedukation, insatser som ökar agens. |
| Fysioterapeut | Fysioterapi | Sjukskrivningsärenden med M-diagnos i botten. Utredning, belastningsanpassning, hjälpmedel. |
| Arbetsterapeut | Arbetsterapi | Aktivitetsbegreppet, vardagsrevidering, handfunktion, hjälpmedel. |
| Läkare | Läkarrum | Granska utredningarna. Signera, justera, komplettera eller returnera. Ditt namn står på beslutet. |
| Rehabkoordinator | Rehabkoordinator | Stötta i arbetsgivarkontakten utan att ta över. Rehabplaner och uppföljning. |

---

## Så är spelet byggt pedagogiskt

Kortversionen – hela resonemanget finns i [`docs/PEDAGOGIK.md`](docs/PEDAGOGIK.md).

* **Tiden är den enda synliga mätaren.** Varje replik och åtgärd kostar minuter.
  Dåligt bemötande kostar nästan alltid mer tid än det sparar, eftersom det
  utlöser reparationssamtal.
* **Allt annat mäts i det dolda** – allians, patientens agens, tydliga
  förväntningar, kvaliteten i underlaget och patientsäkerheten. Under mötet
  läser du dem bara på patientens kroppsspråk och svar, precis som i verkligheten.
* **Snabb, diegetisk feedback under mötet.** Patienten sluter sig, öppnar upp,
  svarar långsammare. Inget facit, ingen siffra.
* **Förklarande feedback efteråt.** Handledaren går igenom val för val, avslöjar
  mätarna och kopplar varje val till en namngiven princip.
* **Repetitionskö.** Missade principer kommer tillbaka i övningsläget tills de
  suttit två gånger i rad.
* **Handledartipsen tonas bort** när du klarat en roll med guld två gånger.
* **Fällorna är avsiktligt behagliga.** Flera fel val gör patienten *nöjd* på
  direkten. Det är hela poängen.

---

## Filstruktur

```
index.html               Skärm, DOM-lager, pekkontroller
css/style.css            GBC-estetiken, layout, skalning
js/util.js               Hjälpare, lagring
js/audio.js              Fyrkantsvågsljud (WebAudio, inga filer)
js/art.js                All grafik: rutor, figurer, porträtt, bakgrunder
js/map.js                Vårdcentralens planlösning (32×22 rutor)
js/ui.js                 Textrutor, menyer, paneler, inmatning
js/state.js              Progression, repetitionskö, mästerskap
js/encounter.js          Mötesmotorn (tid, dolda mätare, beat-typer)
js/debrief.js            Handledarens återkoppling
js/overworld.js          Gång, rum, stationer, kampanjflöde
js/main.js               Uppstart, titelskärm, renderslinga
content/glossary.js      Handboken + principregister
content/people.js        Roller, personal, patienter
content/cases-*.js       Patientfallen, en fil per roll
content/campaign.js      Kampanjens tre ärenden och epiloger
docs/                    Pedagogik och hur man skriver egna fall
```

## Skriva egna fall

Innehållet ligger helt skilt från motorn. Ett nytt patientfall är ett objekt i
`content/cases-<roll>.js` – ingen kod behöver ändras. Formatet, alla beat-typer
och exempel finns i [`docs/INNEHALL.md`](docs/INNEHALL.md).

---

## Grafisk profil

Spelet använder Forsåker vårdcentrals profil: logotypmärket (mintgrön platta med
mörkgrönt F) på fasaden, i mottagningsrummen, i chattklienten och i
granskningsvyn, samt mintgröna arbetskläder på all vårdpersonal. Färgerna är
hämtade direkt ur logotypfilen:

| | Hex | Används till |
|---|---|---|
| Mörkgrön | `#00443c` | Logotypens F, tak, rubrikrader, konturer |
| Mint | `#75d8c7` | Logotypens platta, arbetskläder, listverk |

Märket ritas i kod (`LESS.drawLogga` i `js/art.js`) på ett 16-enheters rutnät och
skalas med heltal, så det förblir pixelperfekt i alla storlekar. Profilfärgerna
ligger som `markDark` / `markMint` i paletten i samma fil och som CSS-variablerna
`--mark` / `--mark-mint`. Vill du byta vårdcentral räcker det att ändra på de
ställena plus `PROFIL` i `content/people.js`.

Logotypen tillhör Forsåker vårdcentral. Om spelet återanvänds av någon annan
verksamhet ska märket bytas ut.

## Ansvar och granskning

Texterna är skrivna för spelet utifrån allmänt kända försäkringsmedicinska
principer (DFA-kedjan, rehabiliteringskedjan, försäkringsmedicinskt beslutsstöd)
och är **inte granskade av verksamheten**. Innan spelet används i utbildning
behöver:

1. **Fallen och facit granskas kliniskt** – varje `varfor`-text är ett påstående
   om vad som är rätt och fel.
2. **Regeluppgifter verifieras** mot Försäkringskassans aktuella regelverk.
   Karensregler, intygsdagar och tidsgränser ändras.
3. **`LESS`-akronymen fyllas i.** Handboken (`content/glossary.js`, posten
   `less`) innehåller en markerad `todo` där bokstävernas betydelse ska stå.

Varje fallfil inleds med en `EJ KLINISKT GRANSKAT`-flagga. Ta bort den när
innehållet är genomgånget.

## Idéer som sparats till senare

* Multiplayer – ett ärende som skickas mellan spelare i olika roller.
* Fler fall per roll, och fall som är genuint tveksamma och avsedda att
  diskuteras i grupp.
* Export av resultat för handledare.
