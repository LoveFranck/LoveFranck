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
| K | Kontroller – bild av var knapparna sitter |
| Esc | Meny |
| M | Ljud på/av |

På pekskärm visas en styrkors-panel under skärmen; kontrollrutan nås via MENY.

Vet man inte var Z och X sitter hjälper det inte att få veta att A är Z. Därför
finns en kontrollruta med en liten bild av tangentbordet, där W A S D, Z och X
är utmärkta i var sin färg. Handledare Ove öppnar den åt dig under
introduktionen, och den nås sedan när som helst med **K**, från huvudmenyn och
från menyn i receptionen.

---

## Spellägen

**Jourupplägget.** Utredningarna schemaläggs på förmiddagen, och samtidigt finns
en jourläkare utan egna bokade patienter. När utredningen är klar hämtar
utredaren läkaren och föredrar ärendet; sedan går de in tillsammans medan
patienten är kvar. Patienten lämnar vårdcentralen samma förmiddag, med ett
besked och efter att ha blivit bedömd av läkare. Det är också det som gör
konstruktionen juridiskt hållbar — läkaren träffar faktiskt patienten, vilket är
huvudregeln när ett intyg utfärdas. Det som flyttats är utredningsarbetet, inte
bedömningen och inte ansvaret.

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

### Handledare Ove

Samma röst som ger återkopplingen efter mötena finns också som person i huset.
Ove möter upp i väntrummet första gången, förklarar LESS på en halv minut och
går sedan före och ställer sig i korridoren **utanför den dörr du ska in genom**.
Prata med honom när som helst så säger han vilken roll du är, vem som väntar,
åt vilket håll rummet ligger och vad du ska göra när du kommer in.

Tre saker till pekar åt samma håll, så att ingen behöver gissa:

* en pil vid skärmkanten som pekar mot rätt rum när det ligger utanför bild
* en blinkande markör över datorn eller skrivbordet när du är i rummet
* uppdragsraden högst upp, som byter från `→ TRIAGE` till `▶ Gå till datorn och
  tryck A` i samma stund som du kliver in

---

## Rollerna

| Roll | Rum | Uppdrag i spelet |
|---|---|---|
| Sjuksköterska | Triage | Triagera chattärenden. BEDDA, salutogen kommunikation, tydliga förväntningar. Boka rätt profession, hänvisa vidare eller avsluta. |
| Psykolog | Psykologrum | Sjukskrivningsärenden med F-diagnos i botten. Försäkringsmedicinsk utredning, psykoedukation, insatser som ökar agens. |
| Fysioterapeut | Fysioterapi | Sjukskrivningsärenden med M-diagnos i botten. Utredning, belastningsanpassning, hjälpmedel. |
| Arbetsterapeut | Arbetsterapi | Aktivitetsbegreppet, vardagsrevidering, handfunktion, hjälpmedel. |
| Läkare | Läkarrum | Jourläkare på förmiddagen, utan egna bokade patienter. Utredaren hämtar dig och föredrar ärendet, sedan går ni in till patienten tillsammans. Du granskar, kompletterar det bara du kan komplettera och tar ställning på plats. |
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
* **Kedjeövningar.** DFA-kedjan och SORKK (situationsanalys) byggs ett led i
  taget, där varje led har sin egen lista med trovärdiga kandidater hämtade från
  de andra leden. Ingen uteslutningsmetod hjälper.
* **Alternativens ordning blandas varje spelning**, så att man lär sig principen
  och inte positionen.
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

## Professionsrådgivare (agenter)

`.claude/agents/` innehåller sex specialiserade agenter som granskar och
utvecklar innehållet — en per profession i spelet. Alla följer samma
granskningsprotokoll i [`docs/GRANSKNING.md`](docs/GRANSKNING.md) och har var sin
facklig tyngdpunkt.

| Agent | Granskar främst | Tyngdpunkt |
|---|---|---|
| `sjukskoterska-radgivare` | `cases-ssk.js` | Triage på distans, röda flaggor, vårdnivå, yrkesansvar |
| `psykologisk-radgivare` | `cases-psykolog.js` | Inlärningsteori, beteendeanalys, modern exponeringsteori, sömn |
| `fysioterapeut-radgivare` | `cases-fysio.js` | Rörelseorganen, belastning, progressiv träning, gula och röda flaggor |
| `arbetsterapeut-radgivare` | `cases-arbetsterapeut.js` | Aktivitetsbegreppet, handfunktion, hjälpmedel, kognitivt stöd |
| `lakare-radgivare` | `cases-lakare.js` + allt medicinskt | Försäkringsmedicin, intyget som handling, signeringsansvaret |
| `rehabkoordinator-radgivare` | `cases-rehabkoordinator.js` | Koordineringsuppdraget, rehabplan, samtycke, rehabkedjan |

Anropa dem från Claude Code:

```
Använd fysioterapeut-radgivare för att granska content/cases-fysio.js
Använd lakare-radgivare för att stresstesta signeringsansvaret i lak-anna
Använd arbetsterapeut-radgivare för att skriva ett nytt fall om handledsbesvär
```

Alla kan **juridiken** som rör deras roll — PSL, HSL, patientlagen, PDL, OSL,
socialförsäkringsbalken, arbetsmiljölagen och Socialstyrelsens föreskrifter om
intyg — och alla är instruerade att slå upp aktuell lydelse i stället för att
gissa.

### Frågeplanscherna – där verkligheten får svara

I varje professions rum hänger en **plansch** med den rollens öppna frågor. De
handlar alltid om hur något *faktiskt* går till, inte hur det borde gå till.

Rådgivaragenten har skattat varje fråga på en **kvotskala 0–100** för hur vanligt
förekommande något är, med samma ankare för alla frågor:

| 0 | 25 | 50 | 75 | 100 |
|---|---|---|---|---|
| aldrig | undantagsvis | ungefär hälften | vanligt | i princip alltid |

Verklig personal går fram till planschen i sitt eget rum och sätter sin egen
siffra bredvid agentens. Ingenting är rätt eller fel — det är datainsamling, inte
en övning, och skillnaden mellan gissningen och verkligheten är hela poängen.

**Frågorna bor i `content/fragor.js`**, en lista per roll. Agenterna skriver in
sina skattningar där; spelet läser samma fil.

**Så når svaren dig:**

* **Som publicerad artefakt** delas svaren automatiskt. Kollegor kan svara från
  vilken dator som helst, och planschen visar dessutom `andra (n)` med medianen
  av alla svar — den blir en levande samsynstavla. Du läser in dem med Artifact-
  verktygets `read_db` på samlingen `skattningar`.
* **Som lokal fil eller på GitHub Pages** finns ingen delad lagring. Svaren
  sparas i webbläsaren och skickas in via *Visa mina svar att skicka in*, som
  ger en textrapport att kopiera och mejla.

Spelet känner av vilket läge det är i och säger det överst på planschen.

**Signatur.** Överst på planschen finns en rad där den som skattar kan skriva
sitt namn. Namnet följer med varje skattning – in i den delade databasen, in i
textrapporten – så att det går att fråga vidare om en siffra. Frivilligt: tomt
namn är en giltig skattning, och den räknas lika mycket.

**Genomgången.** Varannan dag går en schemalagd Claude-körning igenom vad som
kommit in, jämför med agenternas gissningar och föreslår vad avvikelserna borde
leda till i innehållet. Den frågar innan något ändras. Minnet mellan
genomgångarna ligger i [`docs/SVAR.md`](docs/SVAR.md).

### Verklighetsförankring

Det som skiljer dem från en lärobok är att de också ska väga in den informella
kunskapen från branschen: underbemanning, hyrpersonal, bruten kontinuitet,
väntetider, och skillnaden mellan vad riktlinjerna säger *bör* göras och vad som
faktiskt *görs*. Ett facit som förutsätter resurser som inte finns lär ut fel
sak — och gör spelet otrovärdigt för den som jobbar där på riktigt.

Varje agent får svara **"jag vet inte om detta förekommer i primärvården"**. Det
räknas som ett fynd och skrivs in i [`docs/OPPNA-FRAGOR.md`](docs/OPPNA-FRAGOR.md),
där redan flaggade osäkerheter samlas — till exempel om arbetsterapeuter
verkligen gör arbetsplatsbedömningar i primärvården.

Ingen av dem får ta bort `EJ KLINISKT GRANSKAT` ur en fallfil. Det gör
verksamheten.

## Ansvar och granskning

Texterna är skrivna för spelet utifrån allmänt kända försäkringsmedicinska
principer (DFA-kedjan, rehabiliteringskedjan, försäkringsmedicinskt beslutsstöd)
och är **inte granskade av verksamheten**. Innan spelet används i utbildning
behöver:

1. **Fallen och facit granskas kliniskt** – varje `varfor`-text är ett påstående
   om vad som är rätt och fel.
2. **Regeluppgifter verifieras** mot Försäkringskassans aktuella regelverk.
   Karensregler, intygsdagar och tidsgränser ändras.
3. **De öppna frågorna i [`docs/OPPNA-FRAGOR.md`](docs/OPPNA-FRAGOR.md) avgöras.**
4. **`LESS`-akronymen fyllas i.** Handboken (`content/glossary.js`, posten
   `less`) innehåller en markerad `todo` där bokstävernas betydelse ska stå.

Varje fallfil inleds med en `EJ KLINISKT GRANSKAT`-flagga. Ta bort den när
innehållet är genomgånget.

## Filmsekvenserna

Två gånger per ärende tar spelet över styrningen, som när Pokémon flyttar
figuren själv för att ett event ska hända. Båda finns för att de lär ut något
en textruta inte kan.

**Det fysiska besöket.** Från och med andra steget sitter patienten i
väntrummet. Du går dit, trycker A, och sedan går ni in i rummet tillsammans –
hon en ruta bakom dig hela vägen. Att hämta patienten själv i stället för att
ropa ut ett namn är en del av arbetssättet, inte artighet.

**Att hämta läkaren.** När den försäkringsmedicinska utredningen är klar går
du ut i korridoren, knackar på hos jourläkaren och föredrar ärendet på vägen
tillbaka. Väl inne i rummet stänger en spiral igen skärmen utifrån och in –
och när den öppnas är du inte längre psykolog eller fysioterapeut. Du är den
som ska signera, och utredaren står bredvid dig. Det är LESS-modellens kärna
uttryckt som en scenövergång: samma patient, samma rum, samma förmiddag.

Spiralen ligger i [`js/overgang.js`](js/overgang.js) och är gjord av 8×8-rutor
som fylls i en rektangulär spiral, precis som på en Game Boy. Sekvensmotorn
ligger i `js/overworld.js` och kan gå, vända, vänta, säga repliker och köra
godtycklig kod – figurerna följer efter varandra i kedja.

## Skyddsrummet

Vårdcentralen har ett rum som inte står i menyerna och som inte syns på kartan
förrän man klivit in i det. Det finns för att spelet ska tåla att man går
omkring i det utan uppdrag – och för att den som hittar det ska ha hittat något
själv, inte fått det utpekat.

Ledtråden är att korridoren tar slut på ett sätt som inte ser ut som en vägg.

På väggen där nere hänger en tavla. Den som vinner en match får skriva upp sig,
och poängen räknas på vem man slagit – inte bara på att man vunnit. Tavlan
delas via artefaktens databas när den finns, annars sparas den i webbläsaren.

## Idéer som sparats till senare

* Multiplayer – ett ärende som skickas mellan spelare i olika roller.
* Fler fall per roll, och fall som är genuint tveksamma och avsedda att
  diskuteras i grupp.
* Export av resultat för handledare.
