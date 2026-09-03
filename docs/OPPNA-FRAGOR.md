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

## 1. Arbetsplatsbedömning av arbetsterapeut i primärvården — AVGJORD

**Var:** `content/cases-arbetsterapeut.js`, fallet `arb-carina`. Det bästa
beslutsalternativet innehöll formuleringen *"arbetsplatsbedömning bokad"*.

**Frågan:** Förekommer arbetsplatsbesök eller arbetsplatsbedömning inom
primärvårdens arbetsterapiuppdrag?

**Slutsats (`arbetsterapeut-radgivare`, 2026-09-03): utvecklarens misstanke
stämmer.** Arbetsplatsbesök hos arbetsgivaren är i praktiken
företagshälsovårdens och den specialiserade rehabiliteringens område, inte
primärvårdsarbetsterapeutens. Tre skäl:

1. **Ansvaret ligger inte hos vården.** Arbetsanpassning på arbetsplatsen är
   arbetsgivarens ansvar enligt arbetsmiljölagstiftningen. Den som köper in
   kompetens dit är arbetsgivaren, via företagshälsovården. Vården beskriver
   begränsningen; arbetsgivaren beslutar om anpassningen.
2. **Uppdraget avgränsar bort det.** Regionala uppdragsbeskrivningar för
   arbetsterapi i primärvård begränsar sig till bedömning, behandling och
   hjälpmedel på primärvårdsnivå. Region Uppsalas rutin *Arbetsterapi i
   primärvård inom Nära vård och hälsa* (DocPlusSTYR-26466, v3, godkänd
   2025-07-03) skriver rakt ut att arbetsförmågebedömningar inte ingår i
   uppdraget, och att insatserna inte ens utförs i patientens eget hem. Då är
   arbetsplatsen ännu längre bort.
3. **Grundbehandlingen innehåller det inte.** Nationellt vårdprogram för
   tumbasartros har som grundbehandling: bedömning hos arbetsterapeut eller
   fysioterapeut, information och ergonomisk rådgivning, ortos, handträning.
   Inget arbetsplatsbesök.

**Men det förekommer.** I arbetsinriktade rehabteam och multimodal
rehabilitering i primärvård, och där metodstödet ADA+ (ArbetsplatsDialog för
Arbetsåtergång) används — då oftast av rehabkoordinator, ibland en
rehabkoordinator som är arbetsterapeut. Det är enstaka mottagningar, inte
vardag. Hur vanligt det är skattas av verklig personal i
`content/fragor.js`, frågan `at-arbetsplatsbedomning` (rådgivarens skattning: 10
av 100, säkerhet medel).

**Åtgärdat i fallfilen.** Den realistiska motsvarigheten är skriven, inte
besökt: en skriftlig sammanfattning av aktivitetsbegränsningarna och vad de
kräver av arbetsplatsen, som patienten själv tar med till sin chef. Det är
billigt, ligger i arbetsterapeutens kompetens, och kräver ingen
sekretessprövning eftersom patienten bär informationen själv. `varfor`-texten är
omskriven så att den lär ut ansvarsfördelningen i stället för att dölja den.

**Kvarstår att skatta:** hur ofta ett sådant skriftligt underlag faktiskt skrivs.
`content/fragor.js`, frågan `at-skriftligt-underlag-arbetsgivare`.

**Status:** avgjord, ändringen införd.

---

## 2. Bedömningsinstrument i facit — AVGJORD

**Var:** `content/cases-arbetsterapeut.js`. Efter granskningen är Jamar
(handdynamometer) det enda namngivna mätinstrumentet, i DFA-kedjan i
`arb-carina`.

**Slutsats (`arbetsterapeut-radgivare`, 2026-09-03):**

- **Kan namnges i facit:** ADL-taxonomin och COPM är kända och används i
  primärvård. Handstatus med Jamar och pinchmätning hör till handrehabilitering
  och är rimligt att förutsätta där handrehabilitering finns i uppdraget.
- **Ska inte namnges:** DOA (Dialog om arbetsförmåga), AWP (Assessment of Work
  Performance) och AWC (Assessment of Work Characteristics). De är
  arbetsinriktade instrument som hör hemma i specialiserad rehabilitering,
  företagshälsovård och forskning. Att sätta dem i ett facit skulle göra fallet
  otrovärdigt för den som jobbar på en vårdcentral — och skulle dessutom lära ut
  ett arbetssätt spelaren inte kan ta med sig hem.

**Regel framåt:** namnge hellre vad som mäts än vilket instrument som används.
"Nedsatt kraftgrepp höger, 12 kg mot 24 kg" fungerar oavsett vilken utrustning
mottagningen har.

**Status:** avgjord.

---

## 3. Sjuksköterskans mandat att triagera förbi läkare

**Var:** hela `content/cases-ssk.js`, och LESS-modellens kärna.

**Frågan:** Var går gränsen för vad en sjuksköterska får bedöma inom sin
yrkeskompetens när hon avgör att en F- eller M-diagnos rimligen ligger i botten
och bokar psykolog eller fysioterapeut i stället för läkare? Hur ska den
bedömningen dokumenteras för att hålla vid en granskning?

**Vem avgör:** `sjukskoterska-radgivare` tillsammans med `lakare-radgivare`, och
i slutänden verksamhetens medicinskt ansvariga.

### Sjuksköterskerådgivarens del av svaret (2026-09-03)

**Kortversionen: mandatet finns, men inte för den formulering modellen använder
i dag.** Beskrivningen i `content/glossary.js` — att sjuksköterskan *"gör en
första bedömning av om en F-diagnos eller M-diagnos rimligen ligger i botten"* —
är en diagnostisk formulering, och den bär inte. Samma beslut går att fatta,
med samma utfall, om det formuleras negativt och funktionellt. Det är inte
ordklyveri: det är skillnaden mellan ett beslut som går att försvara och ett som
inte gör det.

**1. Det sjuksköterskan får besluta.** Bedömning av vårdnivå och brådskegrad är
sjuksköterskans självständiga yrkesutövning och görs redan varje dag i
telefon- och chattriagen: att bedöma, ge råd, hänvisa, boka och avsluta ärenden.
Kravet i 6 kap. 1 § patientsäkerhetslagen (2010:659) — att arbeta i
överensstämmelse med vetenskap och beprövad erfarenhet — gäller henne direkt och
personligen, inte via läkaren. Att hänvisa vidare är alltså ett beslut hon
fattar själv och ansvarar för själv, inte en icke-handling.

**2. Det hon inte får besluta.** Hon får inte ställa diagnos, och hon får inte
utesluta somatisk sjukdom. Att säga "det här är en F43" och att säga "inget
kroppsligt förklarar det här" är två sidor av samma otillåtna beslut. Hon får
inte heller ta ställning till ett intyg, varken beviljande eller nekande — det
är ett medicinskt ställningstagande som förutsätter läkarintyg enligt 27 kap.
25 § socialförsäkringsbalken.

**3. Den formulering som håller.** Bedömningen ska skrivas som ett
uteslutningsbeslut och ett vårdnivåbeslut, inte som en diagnoshypotes:

> *"Inga uppgifter som talar för behov av läkarbedömning idag: [de frågor som
> ställts, med patientens svar]. Besvären enligt patientens egen beskrivning i
> huvudsak [psykiska / från rörelseorganen]. Bokas till [profession] för
> bedömning och försäkringsmedicinsk utredning. Somatisk bedömning ej gjord —
> överlämnas till läkare i samband med utredningen. Patienten informerad om att
> intygsfrågan avgörs av läkare."*

Skillnaden mot "trolig F-diagnos": den första säger vad sjuksköterskan har
iakttagit och beslutat, den andra säger vad patienten har. Bara den första
ligger inom hennes kompetens — och de leder till exakt samma bokning.

**4. Fyra situationer där hon aldrig triagerar förbi läkaren.**

- Röd flagga, eller osäkerhet om det finns en röd flagga. Redan tränat i
  `ssk-hasse`.
- Läkemedelsfrågan: patienten har, vill ha eller håller på att sätta ut sömnmedel
  eller lugnande.
- Ett pågående sjukfall där intyget ska förlängas eller ändras. Utredningen kan
  bokas, men beskedet om intyget är läkarens. Tränat i `ssk-iris`.
- Patienten begär läkarbedömning och står kvar vid det efter att ha fått
  information om alternativet. Patientlagen ger ingen rätt att välja profession
  — 8 kap. 1 § om ny medicinsk bedömning gäller livshotande eller särskilt
  allvarlig sjukdom och är sällan tillämplig här — men 3 kap. 2 § kräver att
  patienten informeras om möjligheten att välja behandlingsalternativ, och ett
  vidhållet önskemål som avvisas ska dokumenteras med skälet. I praktiken är det
  också där modellen tappar patienter till akuten och till digitala vårdgivare.

**5. Dokumentationen.** Patientdatalagen (2008:355) 3 kap. 6 § kräver, om
uppgifterna finns, väsentliga uppgifter om bakgrunden till vården, uppgift om
anledningen till mer betydande åtgärder, väsentliga uppgifter om vidtagna och
planerade åtgärder, samt uppgift om den information som lämnats till patienten
och om de ställningstaganden som gjorts i fråga om val av behandlingsalternativ.
Ett triagebeslut som styr bort en patient från läkarbedömning är ett sådant
ställningstagande. Fem rader räcker, och de fyra första är vanligen redan
skrivna:

1. Vad patienten begärde, med hennes egna ord.
2. Vilka frågor som ställts för att utesluta akut vårdnivå — **och svaren**, inte
   slutsatsen. "Kissar som vanligt, ingen domning i grenen" går att ompröva;
   "inga röda flaggor" gör det inte.
3. Ställningstagandet och dess skäl: varför denna vårdnivå och inte läkare.
4. Vad som återstår obesvarat och **för vem**. Det är den rad som saknas i dag,
   och det är den som gör att den somatiska frågan tilldelas någon i stället för
   att falla mellan stolarna.
5. Vilken information patienten fått: vad som är bokat, vad besöket är till för,
   och att intygsfrågan avgörs av läkare.

Att profession och signatur framgår är inget administrativt påhäng här: nästa
läsare måste kunna se att uteslutningen är gjord av en sjuksköterska, så att den
inte förväxlas med en läkarbedömning som redan är gjord.

**6. Rådgivarens invändning mot modellen, som den ser ut nu.** Med den negativa
formuleringen och de fem raderna håller konstruktionen juridiskt. Men den flyttar
ett ansvar till sjuksköterskan som hon i dag inte har, och den gör det på den
tunnaste möjliga informationen — text, utan röst, utan kropp, i en kö som ska
betas av. Två saker måste därför följa med modellen, annars är den inte
genomförbar utan att bli farlig:

- **Ett skrivet mandat.** Verksamhetschefen och den medicinskt ansvariga läkaren
  ska ha beslutat, skriftligt, att sjuksköterskan får fatta det här beslutet och
  under vilka villkor. Utan det bär den enskilda sjuksköterskan personligen ett
  ansvar som organisationen har lagt på henne muntligt.
- **En låg tröskel tillbaka.** Det ska vara gratis och oproblematiskt att boka
  läkare vid tveksamhet. En modell vars poäng är att avlasta läkaren skapar ett
  tryck åt ett håll, och det trycket landar på den som sitter i chattkön.

**Behöver läkarrådgivarens ögon:**

- Är den negativa formuleringen i punkt 3 tillräcklig för att läkaren senare ska
  kunna stå bakom intyget, eller behöver läkaren i jourupplägget ändå upprepa
  röda flagg-frågorna själv?
- Vem äger den somatiska frågan formellt mellan triagen och jourläkarbesöket?
  Rådgivaren har skrivit in i `ssk-anna` att sjuksköterskan journalför den som
  obesvarad och skickar den vidare. Räcker det, eller ska prover beställas redan
  i triagen? Se `content/fragor.js`, frågan `ssk-bestalla-prover`.
- Ska den fjärde situationen i punkt 4 — patienten som vidhåller att hon vill
  träffa läkare — vara ett automatiskt läkarärende, eller ett ärende som
  sjuksköterskan får avsluta med dokumenterat skäl?

**Status:** sjuksköterskerådgivarens del skriven; väntar på `lakare-radgivare`
och därefter på verksamhetens medicinskt ansvariga. Formuleringen i
`content/glossary.js`, posten `less` (*"om en F-diagnos eller M-diagnos rimligen
ligger i botten"*), bör skrivas om enligt punkt 3 när frågan är avgjord —
rådgivaren har inte rört glossaryfilen.

---

## 4. Läkarens ansvar för att signera annans utredning — AVGJORD

**Var:** `content/cases-lakare.js`, och LESS-modellens juridiska kärna.

**Frågan:** Vad krävs för att en läkare ska kunna stå bakom ett intyg byggt på
en psykologs, fysioterapeuts eller arbetsterapeuts underlag? Vad måste framgå om
vem som gjort vad, när räcker underlaget, och när måste läkaren träffa patienten
själv?

**Vem avgör:** `lakare-radgivare`, mot Socialstyrelsens föreskrifter om att
utfärda intyg — och i slutänden verksamhetens medicinskt ansvariga.

**Slutsats (`lakare-radgivare`, 2026-09-03), reviderad efter förtydligande av
modellen:** konstruktionen håller, och jourupplägget löser det svåraste
villkoret genom design i stället för genom undantag.

Rådgivaren identifierade tre villkor för att en läkare ska kunna stå bakom ett
intyg byggt på annans utredning. Gränsen går inte vid om läkaren har träffat
patienten, utan vid 6 kap. 2 § HSLF-FS 2018:54 — att bara uttala sig om det man
har tillräcklig kännedom om.

1. **Källa per uppgift** enligt 6 kap. 3 §. Det ska framgå varifrån en uppgift
   kommer, och intygsutfärdarens egna bedömningar ska gå att skilja från annat:
   vad som är psykologens iakttagelse, vad som är patientens uppgift, och vad
   som är läkarens egen bedömning. (Rådgivaren har läst 5 kap. 2 §, 6 kap. 2 §
   och 6 kap. 3 § i den konsoliderade lydelsen. Den tidigare hänvisningen till
   en 6 kap. 8 § gick inte att verifiera och är struken.)
2. **Egen kontakt vid förstagångsintyg**, eftersom 5 kap. 2 § gör undersökning
   till huvudregel. — **Detta villkor är uppfyllt genom upplägget.** I LESS
   schemaläggs utredningarna på förmiddagen med en jourläkare utan egna bokade
   patienter. Utredaren hämtar läkaren, föredrar ärendet, och de går in
   tillsammans medan patienten är kvar. Läkaren träffar alltså patienten, och
   patienten lämnar vårdcentralen efter att ha blivit bedömd av läkare.
   Rådgivarens oro gällde ett scenario som inte är modellen.
3. **Somatisk differentialdiagnostik och röda flaggor kan inte bockas av genom
   att läsa någon annans anteckning.** En psykolog kan bedöma suicidrisk men
   inte utesluta hypotyreos; en fysioterapeut kan testa neurologi men frågar
   sällan om nattlig smärta och viktnedgång. Detta villkor kvarstår oförändrat,
   och jourupplägget ger tvärtom det naturliga tillfället att fylla luckan: med
   patienten sittande, i samma möte.

Uppgiften att skriva sjukintyg till Försäkringskassan får inte delegeras. Det
är granskningen och signaturen som är läkarens — inte utredningsarbetet.

**Status:** avgjord. Fallen `lak-anna` och `lak-bengt` är omskrivna till
trepartsmöten enligt modellen. Verksamhetens medicinskt ansvariga bör ändå läsa
igenom slutsatsen innan spelet används i utbildning.

**Ny fråga som följer av upplägget:** går det att bemanna en jourläkare utan
egna bokade patienter en förmiddag i veckan? Den ligger i `content/fragor.js`
som `lak-jourpass-schemalagt`. Rådgivarens skattning (2026-09-03): **15 av 100,
säkerhet medel** — passet utan förbokade patienter finns i schemat på många
mottagningar (dagjour, adm-tid), men det är inte fritt, och en obokad
läkarförmiddag i veckan är svår att försvara mot tillgänglighetskraven.
Rådgivaren har därför lagt en fråga med lägre ribba, `lak-avbryta-passet`
(skattning 45): kan en läkare avbrytas 10–15 minuter mitt i sitt pass? Om
svaret på den första frågan blir lågt och den andra högt är det den andra
modellen LESS bör beskriva.

---

## 5. LESS-akronymen

**Var:** `content/glossary.js`, posten `less`, markerad med `todo`.

**Frågan:** Vad står bokstäverna för?

**Vem avgör:** verksamheten.

**Status:** öppen.

---

## 6. Läkarens egen anteckning när underlaget kommer från annan profession

**Var:** `content/cases-lakare.js`, `lak-anna` och `lak-bengt`. Läkaren granskar
och signerar ett intyg som bygger på psykologens eller fysioterapeutens
utredning.

**Frågan:** Det finns ingen formell handlingstyp som heter "försäkringsmedicinskt
underlag" — det är en journalanteckning av en annan legitimerad yrkesutövare. Vad
ska då stå i **läkarens egen** anteckning för att intygsansvaret ska vara spårbart:
räcker en hänvisning till kollegans anteckning, eller måste läkaren återge det
hon själv iakttagit och grundar bedömningen på? Och hur ska ett ställningstagande
att **inte** sjukskriva dokumenteras, så att det går att ompröva?

**Varför det spelar roll:** utan en egen anteckning finns bara kollegans text och
ett signerat intyg. Då går det inte i efterhand att visa vad läkaren själv hade
kännedom om — vilket är exakt det 6 kap. 2 § HSLF-FS 2018:54 kräver. Spelet lär
i dag ut att läkaren ska skriva en egen bedömning (`lak-anna`, bästa
beslutsalternativet), men inte vad den minst ska innehålla.

**Vem avgör:** verksamhetens medicinskt ansvariga, mot regionens rutin för
journalföring och intyg. Detta är en dokumentationsfråga med ett uppslagbart
svar, inte en fråga om klinisk vardag.

**Status:** öppen.
