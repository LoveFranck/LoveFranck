# Pedagogiken bakom spelet

Det här dokumentet beskriver *varför* spelet är byggt som det är, så att den som
vidareutvecklar det kan hålla designen konsekvent – och så att den som använder
det i utbildning vet vad spelet faktiskt tränar.

---

## Grundproblemet

Sjukskrivningsbeslut är svåra att träna på i verkligheten, av tre skäl:

1. **Återkopplingen kommer sent eller aldrig.** Konsekvensen av ett dåligt
   sjukskrivningsbeslut visar sig om sex månader, hos någon annan.
2. **Den omedelbara återkopplingen pekar åt fel håll.** Patienten som får sin
   sjukskrivning blir *nöjd på direkten*. Den som får ett välmotiverat nej blir
   det oftast inte. Utan korrigering lär man sig fel sak.
3. **Tiden är alltid för knapp.** Det som verkar snabbt i stunden – "vi tar fyra
   veckor så får vi se" – är ofta det dyraste alternativet.

Spelet är byggt för att åtgärda exakt dessa tre saker.

---

## De sju designbesluten

### 1. Tiden är den enda synliga mätaren

Besöket har en minutbudget. Varje replik och åtgärd kostar minuter, och klockan
tickar bara när du valt – det är en **turordnad budget, inte realtidsstress**.

Skälet: tidspress i realtid försämrar inlärning (den flyttar arbetsminnet från
uppgiften till klockan), medan en synlig kostnad per handling gör avvägningen
till en del av tänkandet. Dessutom bär mekaniken ett innehållsligt budskap:
gott bemötande är tidseffektivt. Dåliga val utlöser reparationsbeats som kostar
mer tid än det bra valet hade gjort.

Går tiden ut tvingas man fatta beslutet ändå. Det räknas, och handledaren
påpekar vilka val som åt upp minuterna.

### 2. Allt annat mäts dolt

Fem mätare räknas i bakgrunden och visas aldrig under mötet:

| Mätare | Vad den fångar |
|---|---|
| Allians | Patientens förtroende och vilja att fortsätta samtalet |
| Patientens agens | Tilltron till egen förmåga att påverka sin situation |
| Tydliga förväntningar | Vet patienten vad som gäller, vem som gör vad, när? |
| Kvalitet i underlaget | Håller DFA-kedjan? Går intyget att signera? |
| Patientsäkerhet | Röda flaggor, juridik, samtycke |

Skälet: synliga staplar gör spelet till optimering av staplar. Man lär sig läsa
mätaren i stället för att läsa patienten. Dolda mätare tvingar fram samma
avläsning som i verkligheten – på kroppsspråk, tonfall och vad patienten säger
härnäst.

Patientsäkerhet är inte förhandlingsbar: understiger den 35 sätts betyget till
OMTAG oavsett hur bra resten gick.

### 3. Snabb feedback under mötet – men diegetisk

Direkt efter varje val händer tre saker inom en sekund:

* **Porträttet byter humör** (öppen, sluten, spänd, lättad, ledsen, smärta …)
* **En kort kroppsspråksrad blinkar förbi** – "Anna korsar armarna", "Det står
  *skriver…* i chatten. Sedan slutar det."
* **Ljudet byter karaktär** – varm treklang när patienten öppnar upp, fallande
  intervall när hon sluter sig

Ingen siffra, inget rätt/fel. Feedbacken är snabb (vilket inlärning kräver) men
den är samma sorts signal man får i ett riktigt rum, vilket är den man ska
träna på att läsa.

### 4. Förklarande feedback efteråt

Handledarens återkoppling efter mötet gör tre saker som mötet självt inte får
göra:

* går igenom **val för val** med ✔ / ~ / ✘ och en motivering
* **avslöjar de dolda mätarna** som staplar
* **namnger principen** varje val hörde till

Uppdelningen är avsiktlig: omedelbar återkoppling under uppgiften stärker
prestation men försvagar inlärning; fördröjd, förklarande återkoppling gör
tvärtom. Spelet ger båda, var för sig, i rätt ordning.

### 5. Repetitionskö

Varje val är taggat med en princip (`bedda-e`, `dorr`, `rodflagga` …). Missade
principer läggs i en kö, och övningsläget prioriterar fall som tränar dem.
Principen lämnar kön först efter **två rätt i rad** – ett rätt kan vara tur.

Det här är utspridd repetition och återhämtningsträning i minimal form: du möter
inte samma fall igen, du möter samma princip i ett annat sammanhang.

### 5b. Stödet finns där innan man hinner köra fast

En ovan spelare vet inte att triage sker vid datorn i triagerummet – och ett
spel som låter någon irra runt lär inte ut något alls under tiden. Därför finns
handledare Ove: han möter upp, förklarar första steget konkret, och står sedan
alltid utanför rätt dörr. Han går att fråga hur många gånger som helst utan
kostnad.

Det viktiga är att stödet gäller *vägen till uppgiften*, aldrig uppgiften
själv. Ove säger vart du ska gå och vilken knapp du ska trycka på. Han säger
aldrig vad du ska svara patienten. Att göra navigationen gratis och bedömningen
svår är hela poängen: all kognitiv belastning ska ligga på det som ska läras.

### 6. Handledartipsen tonas bort

Första gången i en roll ligger ett tips bakom B-knappen på varje beslut. När du
klarat rollen med guld två gånger försvinner de.

Det är bortfadning av lösta exempel: stöd är effektivt för nybörjaren och direkt
skadligt för den som redan kan – expertomvändningseffekten. Progressionen syns
på anslagstavlan.

### 7. Fällorna är behagliga

Flera av de sämsta valen ger den varmaste omedelbara reaktionen. "Vi tar två
veckor så du får landa" ger `allians +6` och ett tacksamt svar – och samtidigt
`agens −14`, `tydlighet −12`, `underlag −10`.

Det här är spelets viktigaste enskilda mekanik. Den simulerar den felinlärning
som sker på riktigt, och gör den sedan synlig i debriefen. Utan den fällan
skulle spelet lära ut "säg nej", vilket vore lika fel som "säg ja".

---

## Vad spelet uttryckligen *inte* lär ut

**Att aldrig sjukskriva.** Det vore LESS-modellen missförstådd som ett förbud.
Två fall är byggda just för att bryta det mönstret:

* **Elin** (psykolog, övningsläge) – utmattningssyndrom med uttalad kognitiv
  påverkan som försämras på 50 %. Här är sjukskrivning rätt, och det dogmatiska
  "arbete är hälsosamt, vi undviker sjukskrivning" är ett av de sämsta svaren.
* **Gunilla** (arbetsterapeut, övningsläge) – där en avvecklande sjukskrivning
  fram till pensionen är fel, men av helt andra skäl.

**Att flödet går före patientsäkerheten.** I fallet **Hasse** (sjuksköterska,
övningsläge) är röda flaggor uppenbara, och att mekaniskt tillämpa
"M-diagnos → fysioterapeut" är det farligaste möjliga svaret. Röda flaggor är
steg ett i triagen, inte ett undantag från modellen.

**Att det alltid finns ett rätt svar.** Flera beslut har ett alternativ märkt
`'delvis'`, med en motivering som säger att det är försvarbart och värt att
diskutera i gruppen. De ger delpoäng, inte noll.

---

## Betygsättning

| Del | Vikt |
|---|---|
| Slutbeslutet | 40 p (rätt) / 22 p (delvis) / 0 p |
| Kvaliteten i vägen dit (andel bra val) | 30 p |
| De dolda mätarnas medelvärde | 20 p |
| Tid kvar i besöket | 10 p (0 om tiden tog slut) |

**GULD** ≥ 85 · **SILVER** ≥ 65 · **BRONS** ≥ 45 · annars **OMTAG**.
Patientsäkerhet under 35 ger OMTAG oavsett poäng.

I kampanjen erbjuds omspel vid OMTAG, men man får gå vidare ändå – då bär
ärendet konsekvensen med sig, och epilogen visar den.

---

## Hur spelet kan användas i en utbildning

* **Enskilt, 20–30 minuter:** kampanjen, ett ärende.
* **I grupp, projicerat:** låt gruppen rösta om varje val innan det görs.
  Debriefen blir underlaget för diskussionen. `'delvis'`-alternativen är
  medvetet placerade för att skapa oenighet.
* **Som uppföljning:** övningsläget med repetitionskön, några fall i veckan.
* **Som kalibrering mellan professioner:** låt alla spela alla roller. Den
  vanligaste aha-upplevelsen är att se sitt eget underlag från läkarens sida.
