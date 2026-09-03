# Skriva egna patientfall

All motorkod ligger i `js/`. Allt **innehåll** ligger i `content/` och är ren
data – du behöver aldrig röra motorn för att lägga till ett fall.

Ett fall är ett objekt i listan `LESS.fall.<roll>` i filen
`content/cases-<roll>.js`.

---

## Fallets ram

```js
{
  id: 'ssk-anna',              // unikt, används av progression och kampanj
  roll: 'ssk',                 // ssk | psykolog | fysioterapeut |
                               // arbetsterapeut | lakare | rehabkoordinator
  titel: 'Chattärende 08:12',  // visas i debriefen
  patient: 'anna',             // nyckel i LESS.personer (content/people.js)
  lage: 'chatt',               // 'chatt' | 'rum' | 'granskning' – scenens utseende
  minuter: 14,                 // besökets minutbudget
  kampanj: 'anna',             // valfritt: vilket kampanjärende fallet hör till
  endastDrill: true,           // valfritt: fallet dyker aldrig upp i kampanjen
  svarighet: 1,                // 1–3, informativt
  principer: ['bedda-e', ...], // vilka principer fallet tränar (styr drillurvalet)

  journal: [                   // visas när spelaren trycker J
    ['Kontaktorsak', 'Egen begäran om sjukskrivning via chatt'],
    ['Tidigare', 'Inga tidigare kontakter för psykisk ohälsa']
  ],

  intro: ['Rad 1.', 'Rad 2.'], // scensättning innan första beat

  introExtra: [                // extra rader beroende på tidigare kampanjbeslut
    { nyckel: 'anna-triage', varde: 'lakare', text: ['Hon har redan…'] }
  ],

  beats: [ /* … */ ]
}
```

### Sätt minutbudgeten så här

Räkna ihop tidskostnaden längs den **bästa** vägen och lägg på 30–40 %.
Då är tiden en verklig begränsning utan att bli orättvis, och ett par felsteg
ryms innan tiden tar slut. Går tiden ut hoppar spelet direkt till slutbeslutet.

---

## De sex beat-typerna

### `replik` – patienten (eller en kollega) säger något

```js
{ typ: 'replik', humor: 'orolig', text: 'Hej. Jag behöver bli sjukskriven…' }
```

`humor` sätter porträttets uttryck: `neutral`, `oppen`, `lattad`, `sluten`,
`orolig`, `spand`, `ledsen`, `smarta`, `trott`.
`talare: { name: 'PSYKOLOG KARIN', kind: 'you' }` byter avsändare.

### `val` – ett samtalsval

Motorns arbetshäst. Varje alternativ kostar tid, flyttar dolda mätare och ger
patienten en reaktion.

```js
{ typ: 'val',
  humor: 'orolig',
  text: 'Så kan jag få sjukskrivningen?',   // valfri patientreplik först
  fraga: 'Vad svarar du?',
  tips: 'Stäng aldrig en dörr utan att öppna en annan.',  // bakom B-knappen
  val: [
    { text: 'Jag förstår att du vill ha andrum. Samtidigt…',
      tid: 3,                       // minuter
      ok: true,                     // true | 'delvis' | false
      princip: 'dorr',              // nyckel i LESS.principer
      humor: 'neutral',             // porträttets nya uttryck
      reaktion: 'Det dröjer. Sedan: "Torsdag?"',   // kort kroppsspråk, blinkar förbi
      svar: 'Jag har inte tänkt på det så.',       // patientens replik efteråt
      fx: { allians: 8, agens: 12, tydlighet: 12 },
      varfor: 'Bekräftelse, ett begripligt skäl och en konkret dörr…',
      flagga: 'suicid-fragad',      // valfritt: sätter en flagga
      kampanj: { nyckel: 'anna-triage', varde: 'psykolog' },  // valfritt
      extra: { /* en beat som skjuts in direkt efter, t.ex. ett reparationssamtal */ }
    }
  ] }
```

### `flera` – välj N av flera

```js
{ typ: 'flera', banner: 'KARTLÄGGNING',
  fraga: 'Du hinner ställa tre frågor. Välj tre.',
  antal: 3, tidPer: 1,
  val: [
    { text: 'Har du haft tankar på att inte vilja leva?',
      ratt: true, princip: 'rodflagga', fx: { sakerhet: 12 },
      varfor: 'Icke förhandlingsbart…' }
  ] }
```

Rätta alternativ som **inte** valdes loggas som missade – de blir lärdomar i
debriefen och hamnar i repetitionskön.

### `kontroll` – faktakontroll, måste bli rätt

```js
{ typ: 'kontroll', banner: 'RÖDA FLAGGOR',
  fraga: 'Kräver något en läkarbedömning idag?',
  tidFel: 2,                 // minuter per felsvar
  princip: 'rodflagga',
  om: { saknas: 'suicid-fragad' },   // valfritt villkor, se nedan
  fx: { sakerhet: -10 },     // appliceras när beaten körs
  val: [
    { text: 'Nej. Inget akut framkommer.', ratt: true },
    { text: 'Ja, tre månaders duration.', ratt: false, varfor: 'Duration är inte…' }
  ],
  forklaring: 'Duration är inte en röd flagga, och undvikande är…' }
```

Spelaren får fortsätta gissa tills det blir rätt. Bara första försöket loggas.

### `kedja` – kedjeövning (DFA, SORKK)

Bygger en kedja ett led i taget. Varje led har sin **egen lista med rimliga
kandidater**, så det går inte att sortera fram rätt svar genom uteslutning – man
måste veta vad ledet faktiskt betyder. Fyll gärna varje led med distraktorer
hämtade från de *andra* leden; det är just förväxlingen mellan dem som ska tränas.

```js
{ typ: 'kedja', banner: 'DFA-KEDJAN',
  fraga: 'Bygg DFA-kedjan för intyget.',
  tidFel: 1,                  // minuter per felplacerat led
  princip: 'bedda-d1',
  lank: [
    { etikett: 'D – DIAGNOS',
      fraga: 'Vilken rad är diagnosen?',
      val: [
        { text: 'F41.1 Generaliserat ångestsyndrom', ratt: true },
        { text: 'Uttalad förväntansångest med autonoma symtom',
          varfor: 'Det beskriver funktionen, inte diagnosen.' },
        { text: 'Nedsatt arbetsförmåga',
          varfor: 'Slutsatsen kedjan ska leda fram till, inte dess första led.' }
      ],
      forklaring: 'Valfri rad som visas när ledet satt rätt.' }
    /* … ett objekt per led … */
  ],
  forklaring: 'Sammanfattningen efter hela kedjan.' }
```

Fel led kostar `tidFel` minuter en gång per led och visar alternativets `varfor`
som korrigering; man får försöka igen. Bara första försöket per led loggas.
Kedjan får ett samlat betyg: alla rätt = ✔, ett fel = ~, fler = ✘. I
återkopplingen visas bara de led som blev fel – de rätta täcks av kedjans
sammanfattning.

Använd typen för DFA-kedjan och för SORKK (situationsanalys). Båda tränar samma
sak: att skilja mellan led som lätt förväxlas.

### `beslut` – avslutar mötet

Samma form som `val`, plus:

```js
{ text: 'Psykolog – utredning och tidig insats',
  ok: true, tid: 1,
  utfall: 'Anna får tid hos psykologen på torsdag.',   // vad som händer sedan
  varfor: 'Rätt enligt LESS: trolig F-diagnos…',
  kampanj: { nyckel: 'anna-triage', varde: 'psykolog' },

  // Alternativt: rätt svar beror på ett tidigare beslut i kampanjen
  okOm: { nyckel: 'anna-forslag',
          varden: { ingen: true, '25': true, '100': false },
          standard: true },
  varforFel: 'Underlaget bakom förslaget håller inte…' }
```

### Ordningen på alternativen

Motorn **blandar alternativens ordning vid varje spelning**. Du behöver alltså
inte tänka på var det rätta svaret hamnar när du skriver – och spelaren kan inte
lära sig positionen i stället för principen.

Bär ordningen betydelse (en stigande skala, en kronologi) stänger du av det per
beat med `blanda: false`.

---

## Villkorade beats

Alla beats kan bära ett `om`-villkor och hoppas över om det inte stämmer:

```js
om: { saknas: 'suicid-fragad' }   // körs bara om flaggan INTE är satt
om: { finns:  'samtycke-taget' }  // körs bara om flaggan ÄR satt
```

Flaggor sätts av alternativ med `flagga: '…'`. Det är så fallet kan reagera på
att spelaren hoppade över något viktigt – som suicidfrågan i `ssk-anna`.

---

## De dolda mätarna (`fx`)

Alla startar på 50 och rör sig mellan 0 och 100.

| Nyckel | Betydelse |
|---|---|
| `allians` | Patientens förtroende, viljan att fortsätta samtalet |
| `agens` | Patientens tilltro till egen förmåga |
| `tydlighet` | Förväntningar, ramar, vet patienten vad som gäller |
| `underlag` | Kvaliteten i det försäkringsmedicinska underlaget |
| `sakerhet` | Röda flaggor, juridik, samtycke |

Riktvärden: `±4` litet, `±8–12` tydligt, `±14–20` avgörande.
Understiger `sakerhet` 35 blir betyget OMTAG oavsett resten.

---

## Principer

`princip`-nyckeln knyter valet till repetitionskön och till debriefens
förklaringar. Registret ligger längst ner i `content/glossary.js`
(`LESS.principer`) – lägg till nya nycklar där, med en kort svensk beskrivning.

En princip lämnar repetitionskön först efter **två rätt i rad**.

---

## Att skriva bra alternativ

Det här är det som avgör om spelet lär ut något.

1. **Inga uppenbart dumma alternativ.** Varje fel val ska vara något en trött
   kollega faktiskt skulle kunna säga en fredag eftermiddag.
2. **Låt minst ett fel val kännas bra i stunden.** Ge det positiv `allians` och
   ett tacksamt `svar` – och kraftigt negativ `agens`, `tydlighet` eller
   `underlag`. Det är spelets viktigaste mekanik.
3. **Skilj på fel innehåll och fel tidpunkt.** Ett `'delvis'` är ofta rätt sak
   sagd före empatin. Säg det i `varfor`.
4. **`varfor` ska förklara mekanismen, inte döma.** "Du löste obehaget i
   samtalet, inte problemet" lär ut mer än "fel svar".
5. **Kostnaden ska vara ärlig.** Det bra valet får gärna kosta mer minuter –
   men lägg då en `extra`-beat på det snabba dåliga valet, så att det i
   praktiken blir dyrare.
6. **Sätt inte ett `'delvis'` bara för att slippa ta ställning.** Använd det när
   alternativet verkligen är försvarbart, och säg i `varfor` att det är värt att
   diskutera i gruppen.

---

## Lägga till fallet i kampanjen

Kampanjen definieras i `content/campaign.js`:

```js
{ id: 'anna',
  titel: 'ÄRENDE 1 · ANNA EK',
  patient: 'anna',
  steg: [
    { fall: 'ssk-anna', mellanspel: ['Ett nytt ärende ligger i chattkorgen.'] },
    { fall: 'psy-anna', mellanspel: ['Tre dagar senare. Torsdag.'] }
  ],
  epilog: [
    { om: { nyckel: 'anna-triage', varde: 'lakare' }, text: ['SEX MÅNADER SENARE', '…'] },
    { text: ['SEX MÅNADER SENARE', '…'] }     // sista utan `om` = standard
  ] }
```

Epilogerna gås igenom uppifrån och ned; första träffen vinner.

## Ny patient

Lägg till i `LESS.personer` i `content/people.js`:

```js
anna: {
  namn: 'Anna Ek', alder: 34, yrke: 'Kommunikatör, kommunen',
  portratt: { skin: SK.ljus, hair: HR.brun, hairStyle: 'langt',
              klader: '#8a94b8', ogon: '#4a5a38',
              glasogon: false, skagg: false },
  bakgrund: 'Två barn, sambo. Omorganisation på jobbet sedan i våras.'
}
```

Porträtten ritas i kod, så det finns inga bildfiler att göra.
`hairStyle`: `kort`, `langt`, `knut`, `flint`.
Färgpaletter: `LESS.SKIN` och `LESS.HAIR` i `js/art.js`.

---

## Testa

Öppna spelet, gå till receptionen, byt till **övningsläge** och gå in i rollens
rum. Nya fall dyker upp i drillurvalet automatiskt. Vill du testa ett fall
direkt kan du köra i webbläsarens konsol:

```js
LESS.encounter.start(LESS.hittaFall('ssk-anna'), { drill: true }, function () {
  location.reload();
});
```

Nollställ progressionen från receptionen eller med `LESS.state.nollstall()`.
