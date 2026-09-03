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

**Status:** öppen.

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
