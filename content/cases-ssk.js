/* cases-ssk.js – Sjuksköterskans triage (chatt)
   ⚠ EJ KLINISKT GRANSKAT – pedagogiskt utkast, ska granskas av verksamheten. */
(function (global) {
  'use strict';
  var LESS = global.LESS;

  LESS.fall.ssk = [

    /* ================================================================
       ANNA – ångest, vill bli sjukskriven. Kampanjärende 1, steg 1.
       ================================================================ */
    {
      id: 'ssk-anna',
      roll: 'ssk',
      titel: 'Chattärende 08:12',
      patient: 'anna',
      lage: 'chatt',
      minuter: 16,
      kampanj: 'anna',
      svarighet: 1,
      principer: ['bedda-e', 'rodflagga', 'somatik', 'dorr', 'triage-f', 'bedda-a'],
      journal: [
        ['Kontaktorsak', 'Egen begäran om sjukskrivning via chatt'],
        ['Tidigare', 'Inga tidigare kontakter för psykisk ohälsa'],
        ['Läkemedel', 'Inga'],
        ['Somatiskt', 'Ingen känd kroppslig sjukdom noterad. Inga prover tagna sedan 2019.'],
        ['Noterat', 'Omorganisation på arbetsplatsen sedan i våras']
      ],
      intro: [
        '08:12. Ett nytt ärende blinkar i chatten.',
        'Anna Ek, 34 år, kommunikatör i kommunen.'
      ],

      beats: [

        { typ: 'replik', humor: 'orolig',
          text: 'Hej. Jag behöver bli sjukskriven. Jag får så mycket ångest på morgnarna att jag inte kommer iväg till jobbet. Kan jag få en akuttid hos läkare idag?' },

        { typ: 'val',
          fraga: 'Hur inleder du chatten?',
          tips: 'BEDDA börjar med Bedömning och Empati. Du kan inte bemöta ett önskemål du inte förstått – och patienten hör inget nej förrän hon känt sig hörd.',
          val: [
            { text: 'Vad tråkigt att höra. Jag bokar en läkartid åt dig imorgon.',
              tid: 1, ok: false, princip: 'bedda-b',
              humor: 'lattad', reaktion: 'Anna svarar direkt: "Tack, vad snäll du är!"',
              svar: 'Åh, tack! Då slipper jag ta det på jobbet.',
              fx: { allians: 4, tydlighet: -10, underlag: -12, agens: -6 },
              varfor: 'Du löste obehaget i samtalet, inte problemet. Ingen bedömning är gjord, ingen vet varför det ska vara läkare, och Anna har lärt sig att vägen till hjälp går via ett akutbesök. Att patienten blir nöjd på tio sekunder är inte samma sak som att hon fick rätt vård.' },

            { text: 'Jag hör att morgnarna är riktigt tunga. Får jag ställa några frågor så vi hittar rätt hjälp direkt?',
              tid: 2, ok: true, princip: 'bedda-e',
              humor: 'oppen', reaktion: 'Anna svarar snabbare nu. Meningarna blir längre.',
              svar: 'Ja... det är okej. Jag vet inte riktigt var jag ska börja.',
              fx: { allians: 10, tydlighet: 6, underlag: 4 },
              varfor: 'Empati först, sedan mandat att fråga. Du har både bekräftat upplevelsen och satt ramen för samtalet utan att lova något.' },

            { text: 'Sjukskrivning är sällan rätt åtgärd vid ångest. Vi brukar rekommendera KBT.',
              tid: 1, ok: 'delvis', princip: 'bedda-e',
              humor: 'sluten', reaktion: 'Det står "skriver…" i chatten. Sedan slutar det. Sedan börjar det igen.',
              svar: 'Okej. Men du vet ju inte hur jag har det.',
              fx: { allians: -12, agens: -4, underlag: -2 },
              varfor: 'Innehållet är i huvudsak rätt – men det kom före både bedömning och empati. Anna hör bara att hon blev avvisad av någon som inte frågat. Rätt sak vid fel tidpunkt fungerar som fel sak.',
              extra: { typ: 'val',
                fraga: 'Anna har dragit sig undan. Vad gör du?',
                val: [
                  { text: 'Förlåt, jag gick händelserna i förväg. Berätta hur en vanlig morgon ser ut för dig.',
                    tid: 2, ok: true, princip: 'bedda-e',
                    humor: 'neutral', reaktion: 'Axlarna sänks lite i texten.',
                    svar: 'Det är okej. Det är bara... det känns som att jag måste bevisa att jag är tillräckligt dålig.',
                    fx: { allians: 8 },
                    varfor: 'En reparation kostar tid men räddar alliansen. Att erkänna att du gick för fort är billigare än ett förlorat samtal.' },
                  { text: 'Jag följer bara våra riktlinjer.',
                    tid: 1, ok: false, princip: 'bedda-e',
                    humor: 'sluten', reaktion: 'Anna skriver: "Jag ringer 1177 istället."',
                    svar: 'Glöm det. Jag löser det själv.',
                    fx: { allians: -14, agens: -6 },
                    varfor: 'Att gömma sig bakom riktlinjer flyttar över konflikten på systemet. Patienten söker då någon annan väg in – ofta en dyrare och sämre.' }
                ] } },

            { text: 'Beskriv dina symtom.',
              tid: 1, ok: 'delvis', princip: 'salutogen',
              humor: 'neutral', reaktion: 'Anna svarar kort och sakligt.',
              svar: 'Hjärtklappning. Illamående. Klump i halsen. Sover dåligt.',
              fx: { underlag: 5, allians: -3, agens: -2 },
              varfor: 'Du får data men ingen relation, och frågan är patogen: den letar bara efter det trasiga. En salutogen öppning hade gett både symtom och resurser.' }
          ] },

        { typ: 'flera',
          banner: 'KARTLÄGGNING',
          fraga: 'Du hinner ställa fyra frågor innan du triagerar. Välj fyra.',
          tips: 'Du behöver fyra saker: kunna utesluta akut risk, veta hur funktionen ser ut i vardagen, veta vad som redan prövats – och veta om något kroppsligt kan förklara bilden. Den sista är den ingen annan i kedjan kommer att ställa. Skalor och diagnosgissningar ger dig ingenting.',
          antal: 4,
          tidPer: 1,
          val: [
            { text: 'Har du haft tankar på att inte vilja leva?', ratt: true, princip: 'rodflagga',
              flagga: 'suicid-fragad', fx: { sakerhet: 12, underlag: 6 },
              varfor: 'Icke förhandlingsbart. Utan den frågan kan du inte veta vilken vårdnivå ärendet hör hemma på. I skrift gäller två saker till: ställ den ensam och inte i ett block med andra frågor, och lämna den aldrig obesvarad. Kommer ett ja, ett kanske eller inget svar alls är chatten slut – då ringer du upp.' },
            { text: 'Hur ser en vanlig morgon och en vanlig arbetsdag ut just nu?', ratt: true, princip: 'dfa-aktivitet',
              fx: { underlag: 10, allians: 4 },
              varfor: 'Funktion i konkreta situationer är det som senare bär DFA-kedjan. "Ångest" är en känsla, "kommer inte ut genom dörren" är en aktivitetsbegränsning.' },
            { text: 'Vad har du provat själv, och vad har hjälpt även lite grand?', ratt: true, princip: 'salutogen',
              fx: { agens: 10, allians: 6, underlag: 4 },
              varfor: 'Salutogen fråga: den letar efter undantag och resurser, och den placerar Anna som någon som redan gör saker.' },
            { text: 'Har du någon kroppslig sjukdom, tar du några läkemedel, och hur ser alkoholvanorna ut?', ratt: true, princip: 'somatik',
              fx: { sakerhet: 10, underlag: 6 },
              varfor: 'Tre korta frågor som du får ställa och som ingen annan i kedjan kommer att ställa. Trötthet, bruten sömn och koncentrationssvikt är inte bara ångestsymtom – de är också de vanligaste symtomen vid tyreoideasjukdom, anemi, B12-brist, sömnapné och riskbruk av alkohol. Du ska inte utreda det, och du får inte diagnostisera det. Du ska veta om något av det redan är känt, och se till att frågan hamnar hos någon.' },
            { text: 'Har du berättat för din chef hur du mår?', ratt: false, princip: 'bedda-d2',
              fx: { underlag: -2 },
              varfor: 'Arbetsplatsen är viktig och frågan kommer att behöva ställas – men av den som ska planera återgången, inte av den som ska avgöra vart ärendet går idag. Här kostar den en av dina fyra platser, och du får svaret ändå i nästa replik.' },
            { text: 'Hur mycket ångest har du på en skala 1 till 10?', ratt: false, princip: 'dfa-aktivitet',
              fx: { underlag: -2 },
              varfor: 'En siffra utan sammanhang. Skattningen säger ingenting om vad hon klarar av att göra, och det är förmågan som styr både vårdnivå och ett eventuellt intyg.' },
            { text: 'Vilken diagnos tror du att du har?', ratt: false, princip: 'bedda-b',
              fx: { underlag: -4, agens: -2 },
              varfor: 'Du lämnar över bedömningen till patienten och riskerar att låsa ärendet vid en etikett innan någon undersökt något.' },
            { text: 'Hur länge vill du vara sjukskriven?', ratt: false, princip: 'dorr',
              fx: { tydlighet: -10, agens: -4 },
              varfor: 'Frågan förutsätter att sjukskrivning redan är beslutad, och gör längden till en förhandling. Nu är dörren öppnad innan någon vet om den ska öppnas.' }
          ] },

        { typ: 'replik', humor: 'neutral',
          text: 'Det har hållit på i tre månader. Jag vaknar vid fyra och ligger och tänker på jobbet. Men jag får ju iväg barnen varje morgon, och jag går ut med hunden. Sen sitter jag i bilen utanför kontoret och vänder hem. Jag har inte sagt något till min chef.' },

        { typ: 'kontroll',
          om: { saknas: 'suicid-fragad' },
          banner: 'DU SAKNAR EN UPPGIFT',
          fraga: 'Innan du triagerar – vad har du inte frågat om?',
          tidFel: 2,
          princip: 'rodflagga',
          val: [
            { text: 'Om hon haft tankar på att inte vilja leva', ratt: true },
            { text: 'Om hon har husdjur', ratt: false },
            { text: 'Om hon vill ha 50 eller 100 procent', ratt: false }
          ],
          forklaring: 'Suicidfrågan är inte en av flera möjliga frågor – den är den som avgör om ärendet kan hanteras planerat eller måste till läkare idag. Du frågar nu, och Anna svarar nej: inga tankar på att ta sitt liv, men hon är trött på att vara rädd.',
          fx: { sakerhet: -10, underlag: -4 } },

        { typ: 'kontroll',
          banner: 'RÖDA FLAGGOR',
          fraga: 'Kräver något i Annas berättelse en läkarbedömning idag?',
          tidFel: 2,
          princip: 'rodflagga',
          val: [
            { text: 'Nej. Inget akut framkommer – ärendet kan planeras.', ratt: true },
            { text: 'Ja, tre månaders duration är i sig en röd flagga.', ratt: false },
            { text: 'Ja, alla sjukskrivningsärenden ska till läkare.', ratt: false },
            { text: 'Ja, hon undviker sin arbetsplats.', ratt: false }
          ],
          forklaring: 'Duration är inte en röd flagga, och undvikande är själva problemet – inte ett tecken på fara. Att alla sjukskrivningsärenden ska till läkare är precis det gamla flödet som LESS ersätter. Anna kan tas om hand planerat, av rätt kompetens. Men märk skillnaden: "ingen röd flagga" betyder att ärendet kan planeras, inte att det kroppsliga är avfärdat. Det är två olika frågor, och nästa beat gäller den andra.' },

        { typ: 'kontroll',
          banner: 'DEN FRÅGA INGEN ÄGER',
          fraga: 'Du är på väg att triagera Anna förbi läkaren. Trötthet, sömn bruten sedan i maj och koncentrationssvikt har också en kroppslig differentialdiagnostik. Vad gör du med den?',
          tidFel: 2,
          princip: 'somatik',
          val: [
            { text: 'Journalför att somatisk bedömning återstår, och skriver in i bokningen att den ska tas när läkaren tar ställning.', ratt: true },
            { text: 'Inget särskilt – psykologen får ta det som hör till kroppen.', ratt: false,
              varfor: 'En psykolog får varken ordinera prover eller tolka dem, och kommer inte att fråga om tyreoideasymtom. Lämnar du frågan där lämnar du den åt ingen.' },
            { text: 'Inget särskilt – bilden är tydlig, med debut i omorganisationen och tre månaders förlopp.', ratt: false,
              varfor: 'En bra psykologisk förklaring gör inte den kroppsliga mindre möjlig. Hypotyreos debuterar också i maj, och hos den som samtidigt har det tungt på jobbet.' },
            { text: 'Bokar om till läkarbedömning idag i stället.', ratt: false,
              varfor: 'Frågan är inte akut och byter inte vårdnivå. Att göra om varje obesvarad fråga till en akuttid är det gamla flödet med en ny motivering.' }
          ],
          forklaring: 'Du ska inte göra den somatiska utredningen – du får inte och du hinner inte. Men i det gamla flödet tog läkaren den på köpet vid första besöket, och när du triagerar förbi läkaren försvinner den om du inte skriver ned den. En obesvarad fråga som ingen är utpekad att svara på är den lucka LESS-flödet skapar strukturellt. Det som håller vid en granskning är tre rader i journalen: vad du frågat och vad hon svarat, varför psykolog och inte läkare, och vad som återstår obesvarat och för vem. Kan du dessutom beställa blodstatus och TSH enligt mottagningens rutin är det bättre än så – då finns svaren när läkaren tar ställning på torsdag.' },

        { typ: 'val',
          humor: 'orolig',
          text: 'Så kan jag få den där sjukskrivningen? Bara några veckor så jag får vila upp mig ordentligt.',
          fraga: 'Du står vid den avgörande dörren. Vad svarar du?',
          tips: 'Stäng aldrig en dörr utan att samtidigt öppna en annan. Och stäng den med ett skäl som handlar om Anna, inte om regler.',
          val: [
            { text: 'Jag förstår att du vill ha andrum. Samtidigt växer ångest ofta när vi undviker det vi är rädda för – vila brukar göra morgonen svårare, inte lättare. Det jag kan öppna är en tid hos vår psykolog på torsdag.',
              tid: 3, ok: true, princip: 'dorr',
              humor: 'neutral', reaktion: 'Det dröjer. Sedan: "Torsdag?"',
              svar: 'Jag har inte tänkt på det så. Går det verkligen att få en psykologtid redan på torsdag?',
              fx: { allians: 8, agens: 12, tydlighet: 12, underlag: 6 },
              varfor: 'Bekräftelse, ett begripligt skäl och en konkret dörr som öppnas i samma andetag. Det är kärnan i LESS: patienten får inte nej, hon får något annat – snabbare.' },

            { text: 'Jag kan tyvärr inte skriva ut sjukskrivningar, det är bara läkare som får det.',
              tid: 1, ok: false, princip: 'dorr',
              humor: 'spand', reaktion: 'Anna skriver: "Så jag behöver en läkartid alltså?"',
              svar: 'Okej. Boka en läkartid då.',
              fx: { tydlighet: -8, agens: -6, allians: -2 },
              varfor: 'Sant men oanvändbart. Du stängde ingen dörr – du skickade Anna till någon som kan öppna den, utan bedömning. Det är exakt den väg LESS är byggt för att undvika.' },

            { text: 'Vi kan nog ta två veckor så du får landa, sen ses vi igen.',
              tid: 2, ok: false, princip: 'evidens',
              humor: 'lattad', reaktion: 'Anna: "Tack!! Vilken lättnad."',
              svar: 'Tack. Då kan jag äntligen slappna av.',
              fx: { allians: 6, agens: -14, tydlighet: -12, underlag: -10, sakerhet: -6 },
              varfor: 'Du utlovar något du varken får eller bör besluta, utan bedömning, utan diagnos och utan plan. Två veckors vila vid undvikandeångest tränar dessutom in undvikandet. Lättnaden i chatten är kortsiktig – återgången blir svårare.' },

            { text: 'Det där får du ta med läkaren.',
              tid: 1, ok: false, princip: 'bedda-d2',
              humor: 'sluten', reaktion: 'Svaret dröjer.',
              svar: 'Okej.',
              fx: { allians: -8, tydlighet: -6, agens: -4 },
              varfor: 'Att skicka frågan vidare är inte att bemöta den. Anna går härifrån utan svar, utan plan och med bilden att sjukskrivning är det som väntar bakom nästa dörr.' }
          ] },

        { typ: 'val',
          fraga: 'Hur avslutar du chatten? (BEDDA · A)',
          tips: 'Ett avslut ska gå att återberätta. Vad händer, vem gör vad, när hörs ni – och vad gör Anna själv fram till dess?',
          val: [
            { text: 'Sammanfatta: psykologtid torsdag 14.00, vad besöket handlar om, att läkare kopplas in om intyg blir aktuellt, och be Anna berätta vad hon tar med sig.',
              tid: 2, ok: true, princip: 'bedda-a',
              humor: 'lattad', reaktion: 'Anna skriver tillbaka hela planen med egna ord.',
              svar: 'Torsdag 14, psykolog, och vi pratar om vad som gör morgnarna lättare. Och du sa att jag kan börja med att gå ut de dagar det går.',
              fx: { tydlighet: 14, agens: 8, allians: 6 },
              varfor: 'Att låta patienten återberätta är den billigaste kvalitetskontrollen som finns. Nu vet du att förväntningarna är rätt satta – och Anna har en uppgift som är hennes.' },
            { text: 'Skriva "Vi hörs på torsdag" och avsluta.',
              tid: 1, ok: 'delvis', princip: 'bedda-a',
              humor: 'neutral', reaktion: 'Ärendet stängs.',
              svar: 'Okej. Hej då.',
              fx: { tydlighet: -4 },
              varfor: 'Tiden finns bokad men förväntningarna gör det inte. Risken är att Anna kommer på torsdag och tror att hon ska hämta ett intyg.' },
            { text: 'Lova att hon får sjukskrivning om psykologen tycker det.',
              tid: 1, ok: false, princip: 'forvantan',
              humor: 'lattad', reaktion: 'Anna: "Perfekt, då vet jag."',
              svar: 'Bra, då vet jag att det finns som alternativ.',
              fx: { tydlighet: -14, agens: -8 },
              varfor: 'Du har gjort psykologbesöket till en förhandling om ett intyg i stället för till en behandling. Kollegan på torsdag får nu börja med att ta tillbaka ditt löfte.' }
          ] },

        { typ: 'beslut',
          banner: 'TRIAGERING',
          fraga: 'Vart går ärendet?',
          tips: 'F-diagnos i botten, inga röda flaggor, sjukskrivningsfråga. LESS-flödet har ett tydligt svar. Men skriv beslutet i journalen som ett vårdnivåbeslut, inte som en diagnos: du har bedömt att läkarbedömning inte behövs idag och att psykolog är den kompetens som bäst kan börja – inte att Anna har en F-diagnos. Det senare får du inte avgöra, och du behöver inte göra det för att boka rätt.',
          val: [
            { text: 'Psykolog – försäkringsmedicinsk utredning och tidig insats',
              ok: true, princip: 'triage-f', tid: 1,
              kampanj: { nyckel: 'anna-triage', varde: 'psykolog' },
              fx: { underlag: 10, tydlighet: 6 },
              utfall: 'Anna får tid hos psykologen på torsdag, tre dagar efter chatten.',
              varfor: 'Rätt enligt LESS: trolig F-diagnos, ingen röd flagga, sjukskrivningsfråga. Psykologen gör den försäkringsmedicinska utredningen och läkaren tar ställning till den. Patienten möter behandlande kompetens direkt i stället för att stå i akutkön. Skicka med den obesvarade kroppsliga frågan i bokningen – psykologen kan inte lösa den, men läkaren som kommer in på torsdag kan, om hon vet att den finns.' },
            { text: 'Läkare – akuttid idag',
              ok: false, princip: 'triage-f', tid: 1,
              kampanj: { nyckel: 'anna-triage', varde: 'lakare' },
              fx: { underlag: -8 },
              utfall: 'Anna får en akuttid klockan 16.10 hos en stressad vikarie som aldrig träffat henne.',
              varfor: 'Detta är gamla flödet. Utan röda flaggor finns ingen medicinsk anledning till akutbesök idag, och läkaren kommer i praktiken att stå med samma fråga som du – men med sju minuter och utan behandlingsalternativ i handen. Det är så korta akutintyg och långa sjukskrivningar uppstår.' },
            { text: 'Fysioterapeut',
              ok: false, princip: 'triage-m', tid: 1,
              kampanj: { nyckel: 'anna-triage', varde: 'fysio' },
              utfall: 'Anna bokas till fysioterapeut och undrar i chatten om hon hamnat fel.',
              varfor: 'Fysioterapeut är rätt väg när en M-diagnos ligger i botten. Fysisk aktivitet är visserligen en bra insats vid ångest, men utredningsansvaret för en F-diagnos ligger inte där.' },
            { text: 'Rehabkoordinator',
              ok: 'delvis', princip: 'triage-rko', tid: 1,
              kampanj: { nyckel: 'anna-triage', varde: 'rko' },
              utfall: 'Rehabkoordinatorn tar kontakt, men det finns ännu ingen sjukskrivning och ingen plan att koordinera.',
              varfor: 'Rehabkoordinatorn blir aktuell vid pågående eller nära förestående sjukfall och när flera aktörer ska samordnas. Anna är inte där än – hon behöver först en bedömning och en behandling.' },
            { text: 'Hänvisa till företagshälsovården',
              ok: 'delvis', princip: 'triage-f', tid: 1,
              kampanj: { nyckel: 'anna-triage', varde: 'fhv' },
              utfall: 'Anna svarar att hon inte vill att jobbet ska få veta.',
              varfor: 'Arbetsplatsen är en del av bilden och företagshälsovården kan absolut vara en resurs. Men att hänvisa dit som enda åtgärd lämnar både den medicinska bedömningen och Annas oro för arbetsgivaren olösta.' },
            { text: 'Avsluta ärendet med egenvårdsråd',
              ok: false, princip: 'triage-f', tid: 1,
              kampanj: { nyckel: 'anna-triage', varde: 'avslut' },
              utfall: 'Ärendet stängs. Tre veckor senare söker Anna akut, nu helt sjukskriven av jourläkare.',
              varfor: 'Tre månaders duration med tydlig aktivitetspåverkan är inte egenvård. Att stänga här är att stänga en dörr utan att öppna någon – motsatsen till LESS.' }
          ] }
      ]
    },

    /* ================================================================
       BENGT – ländryggssmärta, tungt arbete. Kampanjärende 2, steg 1.
       ================================================================ */
    {
      id: 'ssk-bengt',
      roll: 'ssk',
      titel: 'Chattärende 09:40',
      patient: 'bengt',
      lage: 'chatt',
      minuter: 15,
      kampanj: 'bengt',
      svarighet: 2,
      principer: ['rodflagga', 'triage-m', 'salutogen', 'dorr'],
      journal: [
        ['Kontaktorsak', 'Ländryggssmärta, begär sjukskrivning 4 veckor'],
        ['Yrke', 'Lagerarbetare, lyft 15–25 kg återkommande'],
        ['Tidigare', 'Två episoder ryggskott, självläkande inom 3 veckor'],
        ['Övrigt', 'Rökare. Inga läkemedel.']
      ],
      intro: ['09:40. Bengt Nilsson, 52 år, skriver i chatten.'],

      beats: [
        { typ: 'replik', humor: 'smarta',
          text: 'Ryggen har låst sig igen. Jag jobbar på lager och orkar inte lyfta. Sist fick jag fyra veckor, kan jag få det nu också så slipper vi krångel?' },

        { typ: 'val',
          fraga: 'Bengt har redan bestämt både diagnos och åtgärd. Hur öppnar du?',
          tips: 'Han har rätt i att han har ont. Bekräfta det – och håll samtidigt kvar frågan om vad som faktiskt hjälper honom tillbaka.',
          val: [
            { text: 'Det låter riktigt jobbigt, och du känner ju din rygg. Innan vi landar i vad som hjälper behöver jag ställa några frågor – går det bra?',
              tid: 2, ok: true, princip: 'bedda-e',
              humor: 'neutral', reaktion: 'Bengt skriver: "Kör på."',
              svar: 'Kör på. Men jag vet vad det är, det är samma som förra gången.',
              fx: { allians: 10, tydlighet: 6, underlag: 4 },
              varfor: 'Du bekräftar både smärtan och hans erfarenhet, och behåller ändå bedömningen hos vården.' },
            { text: 'Vi ger inte fyra veckor rakt av längre.',
              tid: 1, ok: false, princip: 'bedda-e',
              humor: 'spand', reaktion: 'Bengt: "Jaha, det är alltså sånt nu."',
              svar: 'Så nu ska man jobba ihjäl sig också.',
              fx: { allians: -14, agens: -4 },
              varfor: 'Första ordet blev ett nej om administration. Nu handlar samtalet om regler i stället för om Bengts rygg, och han är i försvarsposition resten av ärendet.' },
            { text: 'Absolut, jag noterar fyra veckor så tittar läkaren på det.',
              tid: 1, ok: false, princip: 'forvantan',
              humor: 'lattad', reaktion: 'Bengt: "Toppen."',
              svar: 'Bra. Då säger jag till chefen.',
              fx: { tydlighet: -14, underlag: -10, agens: -8 },
              varfor: 'Du har gjort sjukskrivningens längd till en expedition. Bengt informerar redan sin arbetsgivare, och nästa medarbetare får börja med att ta tillbaka ditt besked.' }
          ] },

        { typ: 'flera',
          banner: 'RÖDA FLAGGOR',
          fraga: 'Vilka tre frågor måste du ställa innan ett ryggärende kan planeras utan läkare?',
          tips: 'Du letar efter det som skulle göra ärendet akut: nervpåverkan nedåt, allmänsymtom och något som pekar bort från ospecifik ryggsmärta.',
          antal: 3,
          tidPer: 1,
          val: [
            { text: 'Kissar och bajsar du som vanligt? Domningar i grenen?', ratt: true, princip: 'rodflagga',
              flagga: 'cauda-fragad', fx: { sakerhet: 14, underlag: 6 },
              varfor: 'Blås- och tarmpåverkan med ridbyxeanestesi är cauda equina-misstanke och en akutfråga – den frågan får aldrig hoppas över i ett ryggärende. Notera samtidigt att den står som två frågor i samma mening. I chatt är det ett problem i sig, och det kommer tillbaka om en stund.' },
            { text: 'Har du feber, oförklarad viktnedgång eller värk som väcker dig på natten?', ratt: true, princip: 'rodflagga',
              fx: { sakerhet: 12, underlag: 6 },
              varfor: 'Allmänsymtom pekar mot infektion eller malignitet och byter vårdnivå direkt.' },
            { text: 'Har du tappat kraft i benet, snubblar du eller släpar foten?', ratt: true, princip: 'rodflagga',
              fx: { sakerhet: 10, underlag: 6 },
              varfor: 'Progredierande kraftnedsättning är en neurologisk röd flagga, till skillnad från utstrålande smärta i sig.' },
            { text: 'Hur ont har du på en skala 1 till 10?', ratt: false,
              fx: { underlag: -2 },
              varfor: 'Smärtintensitet styr varken vårdnivå eller sjukskrivningsgrad. Det gör aktivitetsbegränsningen i förhållande till arbetsuppgifterna.' },
            { text: 'Har du provat värmekudde?', ratt: false,
              varfor: 'Egenvårdsfråga som kan komma senare, men den sorterar inte ärendet.' },
            { text: 'Har arbetsgivaren erbjudit några lättare uppgifter?', ratt: false,
              varfor: 'Rätt fråga, fel plats i ordningen. Den hör till planeringen efter att vårdnivån är avgjord, och här kostar den en av tre platser som skulle ha använts för att utesluta något akut.' }
          ] },

        { typ: 'replik', humor: 'neutral',
          text: 'Nej inget sånt. Det gör bara djävligt ont när jag böjer mig framåt, och det strålar ner i vänster skinka.' },

        { typ: 'kontroll',
          banner: 'I SKRIFT',
          fraga: 'Bengt svarade "nej inget sånt" på ett block med flera frågor. Räcker det?',
          tidFel: 2,
          princip: 'rodflagga',
          val: [
            { text: 'Nej. Jag ställer frågan om blås- och tarmfunktion en gång till, ensam, och journalför svaret med hans egna ord.', ratt: true },
            { text: 'Ja. Han har svarat nej på alltihop.', ratt: false,
              varfor: 'Du vet inte vilken av frågorna han läste. Ett samlat nej på ett samlat block är det billigaste sättet att missa en cauda equina.' },
            { text: 'Ja, och jag skriver "inga röda flaggor" i journalen.', ratt: false,
              varfor: 'Nu står din slutsats i journalen men inte hans svar. Slutsatsen går inte att ompröva – svaret gör det.' },
            { text: 'Nej. Jag bokar läkarbedömning i stället, det är säkrast.', ratt: false,
              varfor: 'Inte fel, men dyrt. Ett otydligt svar löses billigast genom att fråga en gång till, inte genom att flytta hela ärendet.' }
          ],
          forklaring: 'Det här är chattens egen risk. I telefon hör du tvekan och kan följa upp i samma andetag; i skrift ser du bara ordet "nej", och du vet inte om han läste alla tre frågorna eller bara den första. Den fråga som får avgöra om ett ryggärende är akut ska därför stå ensam, och svaret ska journalföras som han sa det – "kissar och bajsar som vanligt, ingen domning i grenen" – inte som din sammanfattning. Det kostar dig trettio sekunder och det är den enda rad som håller om ärendet granskas.' },

        { typ: 'replik', humor: 'neutral',
          text: 'Aha, förlåt, jag läste nog för snabbt. Kissar och bajsar som vanligt, ingen domning i grenen. Ingen feber, ingen viktnedgång. Full kraft i benen, jag kan stå på tå på båda.' },

        { typ: 'val',
          fraga: 'Bengt är fortfarande inställd på fyra veckors sjukskrivning. Vad gör du?',
          tips: 'Ospecifik ryggsmärta blir sällan bättre av sängläge. Men "rör på dig" räcker inte som svar till någon som ska lyfta 20 kilo i morgon.',
          val: [
            { text: 'Fråga vad han faktiskt klarar idag – vilka moment på jobbet som går och vilka som inte gör det.',
              tid: 2, ok: true, princip: 'dfa-aktivitet',
              humor: 'neutral', reaktion: 'Bengt tänker efter innan han svarar.',
              svar: 'Truckkörning går. Plocklistorna går. Det är pallyften och att böja sig ner i lådorna som inte går.',
              fx: { underlag: 14, agens: 8, allians: 4 },
              varfor: 'Nu finns en aktivitetsbegränsning kopplad till konkreta arbetsuppgifter – och samtidigt bevis för att en del av arbetet fungerar. Det öppnar för anpassning och deltid i stället för heltidsfrånvaro.' },
            { text: 'Förklara att man numera rekommenderar rörelse i stället för vila vid ryggont.',
              tid: 2, ok: 'delvis', princip: 'evidens',
              humor: 'spand', reaktion: 'Bengt: "Du har uppenbarligen aldrig jobbat på lager."',
              svar: 'Rörelse? Jag rör mig tolv timmar om dagen. Det är ju det som är problemet.',
              fx: { allians: -8, agens: 4 },
              varfor: 'Budskapet stämmer men landar som en tillrättavisning eftersom du inte vet något om hans arbetsdag ännu. Kartlägg först, undervisa sen.' },
            { text: 'Boka honom till läkare för sjukintyg.',
              tid: 1, ok: false, princip: 'triage-m',
              humor: 'lattad', reaktion: 'Bengt: "Äntligen."',
              svar: 'Bra, då tar vi det den vägen.',
              fx: { underlag: -10, agens: -8 },
              varfor: 'Ospecifik ryggsmärta utan röda flaggor är fysioterapeutens hemmaplan. Ett läkarbesök här ger ofta ett intyg utan behandlingsplan – och Bengt kommer tillbaka om fyra veckor med samma rygg.' }
          ] },

        { typ: 'val',
          fraga: 'Hur formulerar du vägen framåt?',
          tips: 'Stäng dörren till fyra veckors vila. Öppna dörren till bedömning, belastningsanpassning och en plan som Bengt är med i.',
          val: [
            { text: 'Fyra veckors vila skulle göra ryggen stelare, inte starkare. Det jag kan göra är en tid hos vår fysioterapeut redan imorgon – hon bedömer ryggen, gör den försäkringsmedicinska utredningen och tittar på vad som går att ändra på lagret.',
              tid: 3, ok: true, princip: 'dorr',
              humor: 'neutral', reaktion: 'Bengt skriver långsammare. "Imorgon, sa du?"',
              svar: 'Kan hon skriva intyg då? Chefen kommer fråga.',
              fx: { allians: 8, agens: 12, tydlighet: 12, underlag: 6 },
              varfor: 'Dörren stängs med ett skäl som handlar om ryggen, inte om regler, och en annan öppnas samma dag. Att utredningen nämns direkt gör att Bengt vet att intygsfrågan tas på allvar.' },
            { text: 'Jag bokar fysioterapeut. Sjukskrivning blir det inte.',
              tid: 1, ok: 'delvis', princip: 'dorr',
              humor: 'spand', reaktion: 'Bengt: "Vi får väl se."',
              svar: 'Vi får väl se vad hon säger.',
              fx: { tydlighet: 4, allians: -8, agens: -4 },
              varfor: 'Rätt väg, fel ton. Beskedet låter som ett avslag på en ansökan, och du föregriper dessutom fysioterapeutens bedömning.' },
            { text: 'Låt honom välja mellan läkare och fysioterapeut.',
              tid: 2, ok: false, princip: 'triage-m',
              humor: 'neutral', reaktion: 'Bengt väljer läkare utan att tveka.',
              svar: 'Läkare, tack.',
              fx: { tydlighet: -10, underlag: -6 },
              varfor: 'Triage är en professionell bedömning av vårdnivå, inte ett menyval. Att lämna över den till patienten leder nästan alltid tillbaka till det gamla flödet.' }
          ] },

        { typ: 'beslut',
          banner: 'TRIAGERING',
          fraga: 'Vart går ärendet?',
          val: [
            { text: 'Fysioterapeut – bedömning och försäkringsmedicinsk utredning',
              ok: true, princip: 'triage-m', tid: 1,
              kampanj: { nyckel: 'bengt-triage', varde: 'fysio' },
              fx: { underlag: 10 },
              utfall: 'Bengt får tid hos fysioterapeuten dagen efter.',
              varfor: 'M-diagnos i botten, inga röda flaggor, sjukskrivningsfråga. Precis det LESS-flödet är byggt för.' },
            { text: 'Läkare – akuttid idag',
              ok: false, princip: 'triage-m', tid: 1,
              kampanj: { nyckel: 'bengt-triage', varde: 'lakare' },
              utfall: 'Bengt får en akuttid och går därifrån med fyra veckors heltidssjukskrivning och råd om vila.',
              varfor: 'Utan röda flaggor finns ingen akut medicinsk fråga. Resultatet blir ofta ett intyg utan behandling – och en rygg som stelnar under fyra veckors frånvaro.' },
            { text: 'Arbetsterapeut',
              ok: 'delvis', princip: 'triage-akt', tid: 1,
              kampanj: { nyckel: 'bengt-triage', varde: 'at' },
              utfall: 'Arbetsterapeuten tar emot men remitterar vidare för ryggbedömningen.',
              varfor: 'Arbetsterapeut är rätt när aktivitetsutförande, hjälpmedel eller handfunktion står i centrum. Här behöver ryggen först bedömas och belastningen anpassas.' },
            { text: 'Hänvisa till egenvård och 1177',
              ok: false, princip: 'dorr', tid: 1,
              kampanj: { nyckel: 'bengt-triage', varde: 'avslut' },
              utfall: 'Bengt sjukanmäler sig och söker akut tre dagar senare.',
              varfor: 'Han har en arbetsförmågeproblematik som redan påverkar hans försörjning. Att stänga ärendet utan att öppna en dörr flyttar bara problemet framåt i tiden.' }
          ] }
      ]
    },

    /* ================================================================
       CARINA – handledsbesvär. Kampanjärende 3, steg 1.
       ================================================================ */
    {
      id: 'ssk-carina',
      roll: 'ssk',
      titel: 'Chattärende 13:05',
      patient: 'carina',
      lage: 'chatt',
      minuter: 9,
      kampanj: 'carina',
      svarighet: 3,
      principer: ['triage-akt', 'salutogen', 'bedda-a', 'hjalpmedel', 'bedda-b', 'rodflagga'],
      journal: [
        ['Kontaktorsak', 'Smärta i tummar och handleder, svårt att arbeta'],
        ['Yrke', 'Ekonomiassistent, tangentbord ca 7 tim/dag'],
        ['Känt', 'Tumbasartros bilateralt, värst höger'],
        ['Socialt', 'Vårdar sin mamma på helgerna']
      ],
      intro: ['13:05. Carina Holm, 47 år, skriver i chatten. Hon har skrivit om och skrivit om meddelandet.'],

      beats: [
        { typ: 'replik', humor: 'trott',
          text: 'Hej, förlåt att jag stör. Det är mina tummar. Jag har artros och det gör ont att skriva. Jag klarar nog jobbet ändå, jag vill inte vara till besvär. Men chefen sa att jag borde höra av mig.' },

        { typ: 'val',
          fraga: 'Carina tonar ner sina besvär. Hur går du vidare?',
          tips: 'Salutogent betyder inte att tona ner problemet. Det betyder att leta efter vad som fungerar – och att ta det hon faktiskt säger på allvar.',
          val: [
            { text: 'Du stör inte alls, det är precis sånt här vi finns till för. Berätta vad som är svårt en vanlig arbetsdag – och vad som fortfarande går bra.',
              tid: 2, ok: true, princip: 'salutogen',
              humor: 'neutral', reaktion: 'Carina skriver mycket mer än hon tänkt.',
              svar: 'Tangentbordet går faktiskt hyfsat. Det är musen, och att öppna pärmar, och att vrida om nyckeln. Hemma får jag be mamma öppna burkar, vilket känns bakvänt.',
              fx: { allians: 12, agens: 8, underlag: 10 },
              varfor: 'Du avväpnar skulden, frågar efter både begränsning och resurs, och får på köpet en beskrivning av handfunktionen i konkreta aktiviteter.' },
            { text: 'Om du klarar jobbet så behöver vi kanske inte göra något nu.',
              tid: 1, ok: false, princip: 'bedda-b',
              humor: 'sluten', reaktion: 'Carina: "Nej, du har säkert rätt. Förlåt."',
              svar: 'Nej, du har säkert rätt. Ursäkta att jag hörde av mig.',
              fx: { allians: -10, agens: -10, underlag: -8 },
              varfor: 'Du tog hennes nedtoning som en bedömning. Patienter som är rädda för att vara till besvär underrapporterar systematiskt – och det är ofta de som faller igenom och sedan blir långtidssjukskrivna.' },
            { text: 'Artros är kroniskt. Vi kan tyvärr inte bota det.',
              tid: 1, ok: false, princip: 'salutogen',
              humor: 'ledsen', reaktion: 'Det tar lång tid innan hon svarar.',
              svar: 'Ja. Jag antar att det bara är att gilla läget.',
              fx: { allians: -8, agens: -14 },
              varfor: 'Sant men sjukdomsförstärkande. Prognosen för artros påverkas inte, men prognosen för Carinas arbetsförmåga påverkas kraftigt av vad hon tror att som går att göra.' }
          ] },

        { typ: 'kontroll',
          banner: 'STÄMMER DIAGNOSEN MED BILDEN?',
          fraga: 'Journalen säger tumbasartros. Carina säger tummar OCH handleder, båda sidor. Vad frågar du innan du sorterar ärendet?',
          tidFel: 2,
          princip: 'bedda-b',
          val: [
            { text: 'Om hon är stel på morgonen och i så fall hur länge, om lederna är svullna, och om fler leder är med.', ratt: true },
            { text: 'Ingenting – diagnosen är redan ställd av läkare.', ratt: false,
              varfor: 'En diagnos i journalen beskriver det som var känt då. Den säger ingenting om att den fortfarande förklarar hela bilden.' },
            { text: 'Hur ont hon har på en skala 1 till 10.', ratt: false,
              varfor: 'Smärtintensitet skiljer inte artros från en inflammatorisk ledsjukdom, och den styr varken vårdnivå eller grad.' },
            { text: 'Om hon vill ha sjukskrivning eller inte.', ratt: false,
              varfor: 'Du frågar efter åtgärden innan du vet vad du åtgärdar. Och hos någon som inte vill vara till besvär blir svaret alltid nej.' }
          ],
          forklaring: 'Långvarig morgonstelhet, svullna leder och symmetriskt engagemang i fler leder talar för en inflammatorisk ledsjukdom och inte för artros – och det byter både vårdnivå och tempo. En känd diagnos i journalen är den starkaste förankring som finns: den förklarar en del av bilden och får resten att sluta granskas. Carina svarar att hon är stel ungefär en kvart på morgnarna, att inget är svullet och att det bara är händerna. Då står artrosen kvar – och nu står det också i journalen varför den gör det.' },

        { typ: 'kontroll',
          banner: 'LESS-FLÖDET',
          fraga: 'Carinas problem handlar om handfunktion i konkreta aktiviteter, med känd artrosdiagnos. Vart hör ärendet enligt LESS?',
          tidFel: 2,
          princip: 'triage-akt',
          val: [
            { text: 'Arbetsterapeut – aktivitetsbedömning, arbetsteknik, ortos och hjälpmedel', ratt: true },
            { text: 'Läkare – för att artros är en läkardiagnos', ratt: false },
            { text: 'Psykolog – hon verkar nedstämd', ratt: false },
            { text: 'Ingen åtgärd – hon sa själv att hon klarar jobbet', ratt: false }
          ],
          forklaring: 'Diagnosen är redan känd. Frågan är vad handen klarar av att göra och vad som kan ändras i aktiviteten eller miljön – det är arbetsterapeutens kärnkompetens. Nedstämdhet ska följas, men den är här sekundär till en förlorad funktion.' },

        { typ: 'val',
          fraga: 'Carina frågar rakt ut: "Behöver jag sjukskrivas?"',
          tips: 'Tänk person – aktivitet – miljö. Vilken av de tre är billigast att ändra först?',
          val: [
            { text: 'Kanske inte. Ofta går det att ändra hur och med vad man gör saker, innan man tar bort själva arbetet. Det är det vår arbetsterapeut är bäst på – ska vi börja där?',
              tid: 2, ok: true, princip: 'hjalpmedel',
              humor: 'oppen', reaktion: 'Carina: "Går det att ändra? Det visste jag inte."',
              svar: 'Alltså... får man byta mus? Jag trodde man bara fick bita ihop.',
              fx: { agens: 14, allians: 8, tydlighet: 10 },
              varfor: 'Du flyttar frågan från "hur sjuk är jag" till "vad kan ändras". Det är aktivitetsbegreppet i praktiken – och ofta skillnaden mellan kvarstannande i arbete och en sjukskrivning som blir lång.' },
            { text: 'Det avgör läkaren.',
              tid: 1, ok: false, princip: 'bedda-d2',
              humor: 'trott', reaktion: 'Carina: "Okej."',
              svar: 'Okej. Ska jag boka en tid då?',
              fx: { tydlighet: -8, agens: -6 },
              varfor: 'Frågan var inte administrativ utan handlade om hennes framtid i yrket. Ett svar om beslutsordningen lämnar henne lika ovetande som innan.' },
            { text: 'Nej, artros brukar man kunna jobba med.',
              tid: 1, ok: 'delvis', princip: 'salutogen',
              humor: 'neutral', reaktion: 'Carina svarar artigt.',
              svar: 'Nej, jag tänkte väl det.',
              fx: { agens: -4, underlag: -4 },
              varfor: 'Slutsatsen är ofta riktig men den är dragen utan bedömning, och den lämnar Carina utan verktyg. Hon hörde: bit ihop.' }
          ] },

        { typ: 'beslut',
          banner: 'TRIAGERING',
          fraga: 'Vart går ärendet?',
          val: [
            { text: 'Arbetsterapeut – aktivitetsbedömning och handfunktion',
              ok: true, princip: 'triage-akt', tid: 1,
              kampanj: { nyckel: 'carina-triage', varde: 'at' },
              fx: { underlag: 10 },
              utfall: 'Carina får tid hos arbetsterapeuten på fredag.',
              varfor: 'Känd diagnos, aktivitetsproblem och hjälpmedelsbehov – arbetsterapeutens uppdrag rakt av. Vid behov görs den försäkringsmedicinska utredningen där och tas till läkare för ställningstagande.' },
            { text: 'Fysioterapeut',
              ok: 'delvis', princip: 'triage-m', tid: 1,
              kampanj: { nyckel: 'carina-triage', varde: 'fysio' },
              utfall: 'Fysioterapeuten tar emot och lägger till styrketräning för handen, men skickar vidare för ortos och arbetsplatsanpassning.',
              varfor: 'Inte fel – handartros har fysioterapeutiska insatser. Men tyngdpunkten här ligger på aktivitetsutförande, ortos och arbetsteknik, vilket gör arbetsterapeut till förstahandsvalet.' },
            { text: 'Läkare',
              ok: false, princip: 'triage-akt', tid: 1,
              kampanj: { nyckel: 'carina-triage', varde: 'lakare' },
              utfall: 'Läkaren bekräftar diagnosen, ordinerar smärtstillande och skriver 50 procent i fyra veckor.',
              varfor: 'Diagnosen var redan känd, så besöket tillför lite. Sjukskrivning utan aktivitetsanpassning tar bort arbetet men inte problemet – och Carina kommer tillbaka med samma händer.' },
            { text: 'Avsluta – hon sa att hon klarar jobbet',
              ok: false, princip: 'bedda-b', tid: 1,
              kampanj: { nyckel: 'carina-triage', varde: 'avslut' },
              utfall: 'Fyra månader senare är Carina sjukskriven på heltid.',
              varfor: 'Patienter som inte vill vara till besvär underrapporterar. Att ta nedtoningen som ett bedömningsunderlag är ett systematiskt fel som drabbar just den grupp som är lättast att hjälpa tidigt.' }
          ] }
      ]
    },

    /* ================================================================
       HASSE – röd flagga. Endast övningsläge.
       ================================================================ */
    {
      id: 'ssk-hasse',
      roll: 'ssk',
      titel: 'Chattärende 10:20',
      patient: 'hasse',
      lage: 'chatt',
      minuter: 7,
      svarighet: 3,
      endastDrill: true,
      principer: ['rodflagga', 'bedda-b'],
      journal: [
        ['Kontaktorsak', 'Ryggsmärta 6 veckor, begär sjukskrivning'],
        ['Yrke', 'Snickare, egen firma'],
        ['Tidigare', 'Prostatacancer, behandlad för 4 år sedan'],
        ['Noterat', 'Uppger viktnedgång 6 kg']
      ],
      intro: ['10:20. Hasse Lund, 61 år, egenföretagande snickare.'],

      beats: [
        { typ: 'replik', humor: 'smarta',
          text: 'Ryggen har hållit på i sex veckor nu. Jag är snickare så det är väl slitage. Kan jag få ett par veckors sjukskrivning? Jag har inte tid med besök.' },

        { typ: 'flera',
          banner: 'ANAMNES',
          fraga: 'Vilka tre uppgifter behöver du innan du kan sortera ärendet?',
          antal: 3,
          tidPer: 1,
          tips: 'Ålder, tidigare cancer och duration finns redan i journalen. Vad saknas – och vilken uppgift i journalen är inte färdigfrågad?',
          val: [
            { text: 'Har du gått ner i vikt utan att försöka?', ratt: true, princip: 'rodflagga',
              fx: { sakerhet: 14 },
              varfor: 'Oförklarad viktnedgång är en klassisk röd flagga, särskilt med malignitet i anamnesen.' },
            { text: 'Vaknar du av värken på natten?', ratt: true, princip: 'rodflagga',
              fx: { sakerhet: 14 },
              varfor: 'Nattlig, vilorelaterad smärta talar emot enkel belastningssmärta.' },
            { text: 'Har du blås- eller tarmpåverkan, domningar i grenen, kraftnedsättning?', ratt: true, princip: 'rodflagga',
              fx: { sakerhet: 12 },
              varfor: 'Grundfrågan i varje ryggärende. Cauda equina får aldrig missas.' },
            { text: 'Hur tungt lyfter du på jobbet?', ratt: false,
              varfor: 'Relevant för rehabiliteringen senare, men den sorterar inte akutfrågan.' },
            { text: 'Vill du ha 50 eller 100 procent?', ratt: false,
              fx: { tydlighet: -8 },
              varfor: 'Förutsätter en sjukskrivning som ingen ännu bedömt.' },
            { text: 'Har du provat Alvedon?', ratt: false,
              varfor: 'Egenvårdsfråga. Den ändrar inte vårdnivån.' }
          ] },

        { typ: 'replik', humor: 'smarta',
          text: 'Jo... jag har tappat sex kilo sen i somras. Och jag vaknar vid tretiden av värken, den sitter kvar även när jag ligger still. Inga problem att kissa. Men det är väl bara ålder?' },

        { typ: 'kontroll',
          banner: 'BESLUT OM VÅRDNIVÅ',
          fraga: 'Vad gör du nu?',
          tidFel: 2,
          princip: 'rodflagga',
          val: [
            { text: 'Läkarbedömning skyndsamt idag – flera röda flaggor hos patient med tidigare malignitet', ratt: true },
            { text: 'Fysioterapeut imorgon – M-diagnos i botten enligt LESS', ratt: false },
            { text: 'Boka fysioterapeut och läkare parallellt nästa vecka', ratt: false },
            { text: 'Rehabkoordinator, han är egenföretagare', ratt: false }
          ],
          forklaring: 'LESS flyttar sjukskrivningsärenden bort från automatisk läkartriagering – men steg ett i triagen är och förblir röda flaggor. Nattlig vilovärk, oförklarad viktnedgång, ålder över 50 och tidigare prostatacancer är tillsammans en misstanke om malignitet tills motsatsen är visad. Här är läkare rätt vårdnivå, och det är inte ett undantag från modellen utan en del av den.',
          fx: { sakerhet: 20 } },

        { typ: 'beslut',
          banner: 'TRIAGERING',
          fraga: 'Vart går ärendet?',
          val: [
            { text: 'Läkare idag – skyndsam bedömning',
              ok: true, princip: 'rodflagga', tid: 1,
              fx: { sakerhet: 15 },
              utfall: 'Hasse tas emot samma eftermiddag och utreds vidare enligt standardiserat vårdförlopp.',
              varfor: 'Rätt. Röda flaggor går alltid före flödesregler.' },
            { text: 'Fysioterapeut imorgon',
              ok: false, princip: 'rodflagga', tid: 1,
              fx: { sakerhet: -30 },
              utfall: 'Fysioterapeuten reagerar direkt och skickar ärendet vidare – men två dagar har gått.',
              varfor: 'Att tillämpa LESS-flödet mekaniskt utan röd flagg-kontroll är det farligaste sättet att använda modellen. Fysioterapeuten fångade det, men systemet ska inte behöva räddas i sista ledet.' },
            { text: 'Ge sjukskrivningsrådgivning i chatten och avsluta',
              ok: false, princip: 'rodflagga', tid: 1,
              fx: { sakerhet: -40 },
              utfall: 'Hasse söker akuten tre veckor senare.',
              varfor: 'Ärendet stängdes med flera obesvarade röda flaggor. Det är en patientsäkerhetshändelse, oavsett hur rimlig snickar-slitage-förklaringen lät.' }
          ] }
      ]
    },

    /* ================================================================
       IRIS – redan sjukskriven av jourläkare. Endast övningsläge.
       ================================================================ */
    {
      id: 'ssk-iris',
      roll: 'ssk',
      titel: 'Chattärende 15:30',
      patient: 'iris',
      lage: 'chatt',
      minuter: 8,
      svarighet: 3,
      endastDrill: true,
      principer: ['triage-f', 'dorr', 'evidens', 'forvantan', 'rodflagga'],
      journal: [
        ['Kontaktorsak', 'Begär förlängd sjukskrivning'],
        ['Pågående', 'Sjukskriven 100 % i 2 veckor, utfärdat av jourläkare'],
        ['Symtom', 'Panikattacker sedan 3 månader, undviker buss och köer'],
        ['Yrke', 'Butikssäljare']
      ],
      intro: ['15:30. Iris Palm, 29 år. Hon är redan sjukskriven sedan två veckor.'],

      beats: [
        { typ: 'replik', humor: 'orolig',
          text: 'Hej. Min sjukskrivning går ut på fredag. Jag behöver förlänga. Det har faktiskt blivit värre – nu klarar jag inte ens att gå till affären. Jourläkaren sa att jag skulle vila.' },

        { typ: 'val',
          fraga: 'Iris blev sämre under sjukskrivningen. Hur tänker du?',
          tips: 'Vad har hon gjort de här två veckorna? Och vad har undvikandet fått för utrymme?',
          val: [
            { text: 'Fråga vad hon gjort under de två veckorna och när panikkänslan varit som minst.',
              tid: 2, ok: true, princip: 'salutogen',
              humor: 'neutral', reaktion: 'Iris tystnar och tänker.',
              svar: 'Jag har mest varit hemma. Det var lugnast så. Fast... när min syster tvingade med mig ut på en promenad var det faktiskt okej efteråt.',
              fx: { underlag: 12, agens: 10, allians: 6 },
              varfor: 'Du hittar både mekanismen (undvikandet växer) och undantaget (promenaden gick). Undantaget är den dörr du strax ska öppna.' },
            { text: 'Förlänga är rimligt om hon blivit sämre. Boka läkare för nytt intyg.',
              tid: 1, ok: false, princip: 'evidens',
              humor: 'lattad', reaktion: 'Iris: "Tack."',
              svar: 'Tack. Kan jag få fyra veckor den här gången?',
              fx: { agens: -14, underlag: -10, tydlighet: -8 },
              varfor: 'Att en åtgärd inte hjälper är sällan ett skäl att öka dosen. Vid paniksyndrom underhåller frånvaro och undvikande besvären – försämringen är här ett argument för att ändra behandling, inte för att förlänga.' },
            { text: 'Sjukskrivning hjälper faktiskt inte mot panikångest.',
              tid: 1, ok: 'delvis', princip: 'bedda-e',
              humor: 'sluten', reaktion: 'Iris: "Så jag ska bara skärpa mig?"',
              svar: 'Så det är mitt fel att jag inte blir bättre?',
              fx: { allians: -14, agens: -8 },
              varfor: 'Kunskapen är rätt, leveransen gör den obrukbar. Utan empati först hör Iris en anklagelse.' }
          ] },

        { typ: 'kontroll',
          banner: 'FÖRSÄMRING',
          fraga: 'Iris har blivit sämre under sjukskrivningen och går inte längre ut. Vad måste du fråga om innan du planerar ärendet?',
          tidFel: 2,
          princip: 'rodflagga',
          val: [
            { text: 'Om nedstämdhet och tankar på att inte vilja leva, och om alkohol eller lugnande läkemedel.', ratt: true },
            { text: 'Hur många panikattacker hon har i veckan.', ratt: false,
              varfor: 'En frekvenssiffra beskriver det du redan vet. Den säger ingenting om det som gör ärendet akut eller inte.' },
            { text: 'Ingenting – hon bedömdes ju av läkare för två veckor sedan.', ratt: false,
              varfor: 'Bedömningen gällde läget då. Det är just försämringen sedan dess som är skälet att fråga om.' },
            { text: 'Om hon vill ha 50 eller 100 procent den här gången.', ratt: false,
              varfor: 'Förutsätter en förlängning som ingen har bedömt, och gör graden till en förhandling innan någon vet vad som ska behandlas.' }
          ],
          forklaring: 'Två veckor hemma med växande undvikande är precis den situation där en depression lägger sig ovanpå paniksyndromet, och där alkohol och lugnande blir de snabbaste lösningar som finns i lägenheten. Att en läkare bedömde henne för två veckor sedan säger ingenting om läget idag. Iris svarar att hon är nedstämd men inte har tankar på att ta sitt liv, och att hon inte tar något mot ångesten. Ärendet kan planeras – och nu står det i journalen varför.' },

        { typ: 'kontroll',
          banner: 'LESS-FLÖDET',
          fraga: 'Iris har paniksyndrom, är sjukskriven på heltid och blir sämre. Vad är rätt nästa steg?',
          tidFel: 2,
          princip: 'triage-f',
          val: [
            { text: 'Psykolog snarast för utredning och exponeringsbaserad behandling; läkare tar ställning till intyget', ratt: true },
            { text: 'Läkare för förlängt intyg, psykolog i mån av tid', ratt: false },
            { text: 'Rehabkoordinator, hon har varit borta i två veckor', ratt: false },
            { text: 'Avvakta – hon är ju redan sjukskriven', ratt: false }
          ],
          forklaring: 'F-diagnos, ingen röd flagga, pågående sjukfall som förvärras: psykolog först och behandling snarast. Sjukfallet är ännu kort, så rehabkoordinator är inte första steget. Att avvakta är det som gör korta sjukfall långa.' },

        { typ: 'val',
          fraga: 'Iris undrar vad som händer med intyget efter fredag.',
          tips: 'Du ska varken lova eller neka ett intyg du inte beslutar om. Men du kan vara tydlig med vem som gör vad och när.',
          val: [
            { text: 'Psykologen bedömer dig på onsdag och gör den försäkringsmedicinska utredningen. Läkare tar ställning till intyget utifrån den. Jag kan inte lova en förlängning, men jag kan lova att ingen lämnar dig utan besked före fredag.',
              tid: 2, ok: true, princip: 'forvantan',
              humor: 'neutral', reaktion: 'Iris läser meddelandet två gånger.',
              svar: 'Okej. Det känns i alla fall som att någon håller i det.',
              fx: { tydlighet: 16, allians: 10, agens: 6 },
              varfor: 'Du separerar det du kan lova (en process och ett besked) från det du inte får lova (ett intyg). Det är tydliga förväntningar utan falska löften.' },
            { text: 'Det ordnar sig säkert.',
              tid: 1, ok: false, princip: 'forvantan',
              humor: 'orolig', reaktion: 'Iris skriver: "Men om det inte gör det?"',
              svar: 'Men om jag inte får något intyg då? Jag har inga pengar.',
              fx: { tydlighet: -12, allians: -4 },
              varfor: 'Vaga lugnande besked ökar oron hos den som är orolig för sin försörjning. Otydlighet är inte snällhet.' },
            { text: 'Du får nog räkna med att den inte förlängs.',
              tid: 1, ok: false, princip: 'forvantan',
              humor: 'ledsen', reaktion: 'Iris svarar inte på en stund.',
              svar: 'Då vet jag.',
              fx: { tydlighet: -6, allians: -12, agens: -8 },
              varfor: 'Du föregriper både psykologens utredning och läkarens beslut. Det är inte ditt beslut att meddela, och beskedet kommer nu utan sammanhang.' }
          ] },

        { typ: 'beslut',
          banner: 'TRIAGERING',
          fraga: 'Vart går ärendet?',
          val: [
            { text: 'Psykolog snarast – utredning och behandlingsstart',
              ok: true, princip: 'triage-f', tid: 1,
              fx: { underlag: 10 },
              utfall: 'Iris får tid på onsdag. Psykologen påbörjar exponering och gör den försäkringsmedicinska utredningen.',
              varfor: 'Rätt vårdnivå, rätt tempo. Behandlingen startar innan sjukfallet hinner sätta sig.' },
            { text: 'Läkare för förlängt intyg',
              ok: false, princip: 'evidens', tid: 1,
              utfall: 'Iris får ytterligare fyra veckor. Vid nästa kontakt går hon inte längre ut alls.',
              varfor: 'Sjukskrivningen förlängdes utan att någon ändrade det som gjorde henne sämre. Det är så ett tre månader gammalt paniksyndrom blir ett år av sjukfrånvaro.' },
            { text: 'Rehabkoordinator',
              ok: 'delvis', princip: 'triage-rko', tid: 1,
              utfall: 'Rehabkoordinatorn tar kontakt men konstaterar att behandling saknas helt.',
              varfor: 'Blir aktuellt om sjukfallet drar ut på tiden eller om arbetsgivarkontakten krånglar. Just nu saknas det mest grundläggande: en behandling.' }
          ] }
      ]
    },

    /* ================================================================
       KATRIN – läser som Anna, men den somatiska frågan har ingen ägare.
       Oplanerat besök. Låses upp när kampanjen är klar.
       ================================================================ */
    {
      id: 'ssk-katrin',
      roll: 'ssk',
      titel: 'Chattärende 07:55',
      patient: 'katrin',
      lage: 'chatt',
      minuter: 12,
      svarighet: 3,
      laser: 'oplanerat',
      endastDrill: true,
      principer: ['somatik', 'bedda-b', 'dorr', 'rodflagga'],
      journal: [
        ['Kontaktorsak', 'Trötthet och koncentrationssvårigheter, begär sjukskrivning'],
        ['Yrke', 'Undersköterska på boende, ständig natt sedan nio år'],
        ['Tidigare', 'Inga kontakter för psykisk ohälsa'],
        ['Läkemedel', 'Inga'],
        ['Prover', 'Inga laboratorieprover registrerade']
      ],
      intro: [
        '07:55. Katrin Vall, 44 år, undersköterska.',
        'Hon skrev ärendet i går kväll, efter passet.'
      ],

      beats: [

        { typ: 'replik', humor: 'trott',
          text: 'Hej. Jag är helt slut. Har varit det i ett halvår ungefär. Jag tappar tråden mitt i meningar och glömmer saker på jobbet, vilket inte är så bra när man jobbar på ett boende. Sover uselt på dagarna. Jag tror det är utmattning. Kan jag bli sjukskriven och få komma till en psykolog?' },

        { typ: 'val',
          fraga: 'Katrin har levererat både diagnos och åtgärd, och de stämmer med det flöde du är van vid. Hur öppnar du?',
          tips: 'Hon har gjort ditt jobb åt dig. Det är just därför du ska göra om det.',
          val: [
            { text: 'Ett halvår är lång tid att bita ihop. Innan vi bestämmer vart det här ska vill jag fråga lite – också om kroppen. Går det bra?',
              tid: 2, ok: true, princip: 'bedda-e',
              humor: 'neutral', reaktion: 'Katrin svarar snabbt: "Visst. Fast det är nog inte kroppen."',
              svar: 'Visst. Fast det är nog inte kroppen, jag är bara trött. Det är ju det jobbet gör med en.',
              fx: { allians: 10, underlag: 6, sakerhet: 6 },
              varfor: 'Empati först, och sedan ett uttalat mandat att fråga bortom det hon själv har föreslagit. Att du säger "också om kroppen" är inte artighet – det är det som gör att nästa fråga inte kommer som en misstro.' },

            { text: 'Det låter som en klassisk utmattning. Jag bokar in dig hos vår psykolog.',
              tid: 1, ok: false, princip: 'somatik',
              humor: 'lattad', reaktion: 'Katrin svarar direkt: "Åh vad skönt. Tack."',
              svar: 'Tack! Då slipper jag ta det med chefen än så länge.',
              fx: { allians: 8, underlag: -12, sakerhet: -16 },
              varfor: 'Det här är det snabbaste, vänligaste och vanligaste felet i hela modellen. Katrin gav dig en förklaring som passar LESS-flödet perfekt, och du bekräftade den utan att ha frågat en enda fråga. Trötthet, koncentrationssvikt och bruten sömn är inte bevis för utmattning – det är den bild som också ges av tyreoideasjukdom, anemi, B12-brist och sömnapné. Skillnaden mot Anna står i journalen: inga prover, någonsin.' },

            { text: 'Berätta hur du sover.',
              tid: 1, ok: 'delvis', princip: 'bedda-b',
              humor: 'neutral', reaktion: 'Katrin skriver ett långt stycke om schemat.',
              svar: 'Fyra nätter i rad, sen ledigt. Jag sover kanske fem timmar på dagen, med gardinerna för. Har gjort så i nio år.',
              fx: { underlag: 4, allians: 2 },
              varfor: 'Sömnen är relevant och du får ett riktigt svar. Men frågan är smal, och den bekräftar den förklaring hon redan lämnat i stället för att pröva den. Nio år av nattarbete är ett gott skäl att vara trött – och det är också det skäl som gör att ingen frågar vidare.' },

            { text: 'Du har jobbat natt i nio år. Det tär på vem som helst, det är nog förklaringen.',
              tid: 1, ok: false, princip: 'bedda-b',
              humor: 'sluten', reaktion: 'Det dröjer innan hon svarar.',
              svar: 'Ja. Jag antar det. Men det är värre nu än det var förut.',
              fx: { allians: -6, underlag: -10, sakerhet: -12 },
              varfor: 'Du har ställt en orsaksförklaring utan att ha undersökt något, och den är dessutom formulerad så att den stänger samtalet. Notera vad hon svarar ändå: det är värre nu än förut. En exponering som varit densamma i nio år förklarar sällan en förändring som är ett halvår gammal.' }
          ] },

        { typ: 'flera',
          banner: 'KARTLÄGGNING',
          fraga: 'Du hinner fyra frågor innan du sorterar ärendet. Välj fyra.',
          tips: 'En av frågorna är obligatorisk i varje ärende om psykisk ohälsa. De tre andra ska pröva om kroppen kan förklara bilden – och journalen har redan sagt vad som saknas.',
          antal: 4,
          tidPer: 1,
          val: [
            { text: 'Fryser du mer än förr? Har vikten, huden, håret eller magen ändrat sig?',
              ratt: true, princip: 'somatik', fx: { sakerhet: 14, underlag: 8 },
              varfor: 'Fyra korta frågor i en, och den enda i listan som fångar upp det Katrin själv aldrig kommer att koppla ihop med tröttheten. Frusenhet, viktuppgång, torr hud, håravfall och förstoppning hör inte till en utmattning – de hör till ämnesomsättningen. Du ska varken utreda eller uttala det. Du ska veta om det finns.' },
            { text: 'När togs det senast blodprover på dig, och vet du vad de visade?',
              ratt: true, princip: 'somatik', fx: { sakerhet: 12, underlag: 8 },
              varfor: 'Journalen säger att inga prover är registrerade här. Den säger ingenting om prover tagna hos företagshälsovården, på en annan vårdcentral eller vid en hälsokontroll. Frågan tar tio sekunder och avgör om den kroppsliga frågan redan är besvarad eller om den aldrig ens är ställd.' },
            { text: 'Hur ser dina menstruationer ut – har de blivit rikligare det senaste året?',
              ratt: true, princip: 'somatik', fx: { sakerhet: 10, underlag: 8 },
              varfor: 'Järnbristanemi hos kvinnor i fyrtioårsåldern ger exakt den bild Katrin beskriver: trötthet, frusenhet och koncentrationssvikt. Frågan känns privat att ställa i chatt och blir därför inte ställd – och det är den enskilt vanligaste orsaken till att en trötthetsutredning tar ett år i stället för en vecka.' },
            { text: 'Har du haft tankar på att inte vilja leva?',
              ratt: true, princip: 'rodflagga', flagga: 'suicid-fragad', fx: { sakerhet: 12 },
              varfor: 'Icke förhandlingsbart i varje ärende om psykisk ohälsa, också när din arbetshypotes är kroppslig. Ställ den ensam, inte i ett block, och journalför svaret med hennes egna ord.' },
            { text: 'Har du varit utbränd tidigare?',
              ratt: false, princip: 'bedda-b', fx: { underlag: -4 },
              varfor: 'Frågan låter klok och den låser bilden vid en etikett innan någon undersökt något. Journalen svarar dessutom redan: inga kontakter för psykisk ohälsa. Du köpte ett svar du hade gratis, för priset av en av dina fyra platser.' },
            { text: 'Hur ser det ut på jobbet – har ni varit underbemannade i vår?',
              ratt: false, princip: 'somatik', fx: { underlag: -2 },
              varfor: 'Frågan är mänsklig och svaret blir ja, för svaret blir alltid ja. Det är precis så en psykosocial förklaring bekräftar sig själv: du frågar efter belastning, du hittar belastning, och den kroppsliga frågan blir aldrig ställd. Arbetsplatsen ska kartläggas – av den som planerar återgången, inte av den som avgör vårdnivån idag.' },
            { text: 'Hur trött är du på en skala 1 till 10?',
              ratt: false, fx: { underlag: -2 },
              varfor: 'En siffra utan sammanhang. Den skiljer inte utmattning från anemi och styr varken vårdnivå eller grad.' },
            { text: 'Vill du att jag bokar psykolog eller läkare?',
              ratt: false, princip: 'bedda-b', fx: { tydlighet: -8 },
              varfor: 'Triage är en professionell bedömning av vårdnivå, inte ett menyval. Och hon har redan svarat i sitt första meddelande – frågan bekräftar bara hennes förslag.' }
          ] },

        { typ: 'replik', humor: 'trott',
          text: 'Nej, inga sådana tankar, jag är bara trött. Men jo... jag fryser hela tiden. Jag har filt på mig på nattpasset och tjejerna skrattar åt mig. Har gått upp sex kilo utan att äta annorlunda, och magen går trögt. Håret ligger i duschen. Sista provet jag vet om var när jag var gravid, det är fjorton år sen. Och blödningarna har varit riktigt rikliga sen i höstas, jag trodde det var övergångsåldern.' },

        { typ: 'kontroll',
          om: { saknas: 'suicid-fragad' },
          banner: 'DU SAKNAR EN UPPGIFT',
          fraga: 'Katrin sökte för trötthet, koncentrationssvikt och sömnsvårigheter. Vad har du inte frågat om?',
          tidFel: 2,
          princip: 'rodflagga',
          fx: { sakerhet: -10 },
          val: [
            { text: 'Om hon haft tankar på att inte vilja leva', ratt: true },
            { text: 'Hur många nätter i rad hon jobbar', ratt: false },
            { text: 'Om hon vill ha 50 eller 100 procent', ratt: false }
          ],
          forklaring: 'Att din arbetshypotes har blivit kroppslig tar inte bort frågan – den ställs för att du inte vet, inte för att du misstänker. Du frågar nu, och Katrin svarar nej: inga tankar på att ta sitt liv, men hon är rädd att hon börjar bli dement.' },

        { typ: 'kontroll',
          banner: 'VART GÅR DEN KROPPSLIGA FRÅGAN?',
          fraga: 'Katrin bad om psykolog och sjukskrivning. Vad gör du med frusenheten, viktuppgången, håravfallet och blödningarna?',
          tidFel: 2,
          princip: 'somatik',
          val: [
            { text: 'Bokar läkarbedömning och ser till att proverna är tagna innan, så att svaren finns när hon och läkaren ses.', ratt: true },
            { text: 'Bokar psykolog och skriver i bokningen att somatisk bedömning återstår.', ratt: false,
              varfor: 'Bättre än att inte skriva något, och det är exakt rätt hantering i Annas fall. Skillnaden är att här finns fynd, inte bara en obesvarad fråga. En psykolog får varken ordinera eller tolka prover, och att lämna fem konkreta symtom hos någon som inte kan göra något med dem är att lämna dem åt ingen.' },
            { text: 'Skickar henne akut till läkare idag.', ratt: false,
              varfor: 'Ingenting här är akut. Ett halvårs trötthet med frusenhet utreds planerat, och en akuttid ger en läkare med sju minuter och inga provsvar. Att göra varje obesvarad kroppslig fråga till en akuttid är det gamla flödet med ny motivering – och det tar en tid från någon som behöver den idag.' },
            { text: 'Utmattning kan ge både trötthet och viktförändring. Bilden håller ändå ihop.', ratt: false,
              varfor: 'Den kan hålla ihop, och du får ändå inte dra den slutsatsen. Att utesluta kroppslig sjukdom är inte ett beslut som ligger inom din yrkeskompetens – lika lite som att ställa diagnosen. Att säga "det här är utmattning" och att säga "inget kroppsligt förklarar det" är två sidor av samma otillåtna beslut.' }
          ],
          forklaring: 'Det här är samma lucka som i Annas ärende, men med fynd i den. I det gamla flödet fick läkaren den kroppsliga frågan gratis vid första besöket. LESS tar bort det besöket och tilldelar frågan ingen – och när patienten själv säger "utmattning" och passar in i modellen är trycket åt ett håll som starkast. Skriv det du iakttagit, inte det du tror: att hon uppger frusenhet, viktuppgång, håravfall, trög mage och rikliga blödningar sedan i höstas, att inga prover finns registrerade, och att ärendet därför går till läkare och inte till psykolog. Kan du dessutom beställa blodstatus, ferritin och TSH enligt mottagningens rutin är det bättre än så. Får du inte det, skriv frågeställningen i bokningen så att läkaren kan beställa dem innan besöket.' },

        { typ: 'val',
          humor: 'orolig',
          text: 'Så jag får ingen psykolog? Jag orkar inte hålla på och vänta, jag måste få stopp på det här.',
          fraga: 'Du ska stänga en dörr hon själv öppnade. Vad svarar du?',
          tips: 'Hon hör "nej till hjälp". Se till att hon i stället hör "ja till svar, och snabbare".',
          val: [
            { text: 'Du ska få hjälp med tröttheten – men jag vill inte att vi kallar det utmattning innan någon tittat på kroppen. Det du berättar, att du fryser, gått upp i vikt och blöder rikligt, är sådant som går att mäta. Jag bokar läkartid och ser till att proverna är tagna innan, så finns svaren när ni ses. Visar de ingenting har vi inte tappat tid – då är den frågan avklarad.',
              tid: 2, ok: true, princip: 'dorr',
              humor: 'oppen', reaktion: 'Det tar en stund. Sedan: "Kan det vara nåt riktigt?"',
              svar: 'Menar du att det kan vara något riktigt? Jag har gått och trott att jag bara är slö.',
              fx: { allians: 10, agens: 12, tydlighet: 14, underlag: 6 },
              varfor: 'Dörren stängs med ett skäl som handlar om Katrin, inte om regler, och en annan öppnas i samma andetag. Och lägg märke till hennes svar: att någon tar den kroppsliga frågan på allvar är för många den första gången de slutar skämmas för att vara trötta.' },

            { text: 'Jag bokar både psykolog och läkare, så täcker vi in allt.',
              tid: 2, ok: false, princip: 'somatik',
              humor: 'lattad', reaktion: 'Katrin: "Tack, vad grundligt."',
              svar: 'Tack. Vad bra att ni tar det på allvar.',
              fx: { allians: 10, tydlighet: -12, underlag: -8 },
              varfor: 'Det känns generöst och det är ett icke-beslut. Två bokningar utan frågeställning betyder att båda tror att den andra äger frågan, och psykologtiden du delade ut är den knappaste resursen mottagningen har. Att triagera är att välja – att boka allt är att låta bli.' },

            { text: 'Psykolog är fel väg här. Vi tar läkare i stället.',
              tid: 1, ok: 'delvis', princip: 'dorr',
              humor: 'spand', reaktion: 'Katrin: "Okej. Har jag gjort fel som skrev?"',
              svar: 'Okej. Vad är det ni tror då?',
              fx: { tydlighet: 6, allians: -8, agens: -4 },
              varfor: 'Rätt beslut, obrukbar leverans. Beskedet innehåller inget skäl, och i tomrummet lägger Katrin sin egen tolkning – som blir antingen att hon gjort fel eller att ni misstänker något hemskt. Ett skäl kostar dig en mening.' },

            { text: 'Sjukskrivning kan jag tyvärr inte hjälpa dig med, det är en läkarfråga.',
              tid: 1, ok: false, princip: 'dorr',
              humor: 'sluten', reaktion: 'Katrin: "Boka en läkartid då."',
              svar: 'Boka en läkartid då. Fast då lär det ta veckor.',
              fx: { tydlighet: -8, agens: -6, allians: -4 },
              varfor: 'Sant och oanvändbart. Du svarade på det enda hon inte frågade om, och lämnade både tröttheten och den kroppsliga frågan orörda. Nu går hon vidare med bilden att detta handlar om vem som får skriva papper.' }
          ] },

        { typ: 'beslut',
          banner: 'TRIAGERING',
          fraga: 'Vart går ärendet?',
          tips: 'Skriv beslutet som ett vårdnivåbeslut: vad hon uppger, vad som saknas, och varför läkare och inte psykolog. Inte vad du tror att hon har.',
          val: [
            { text: 'Läkarbedömning planerad inom kort, med prover ordnade i förväg',
              ok: true, princip: 'somatik', tid: 1,
              fx: { sakerhet: 16, underlag: 12, tydlighet: 6 },
              utfall: 'Katrin lämnar prover på torsdag morgon efter nattpasset och träffar läkare på fredag. Svaren ligger i journalen när hon kommer.',
              varfor: 'Rätt vårdnivå och rätt tempo. Det som avgjorde ärendet var inte misstänksamhet utan tre frågor som tog under en minut: fryser du, när togs prover, hur är blödningarna. Att ordna proverna först är det som gör en planerad tid snabbare till svar än en akuttid.' },

            { text: 'Psykolog – trolig F-diagnos, precis som LESS föreskriver',
              ok: false, princip: 'somatik', tid: 1,
              fx: { sakerhet: -25, underlag: -12 },
              utfall: 'Katrin får en psykologtid om tre veckor. Psykologen noterar i sin anteckning att hon sitter med jacka på sig inne i rummet.',
              varfor: 'Modellen tillämpad mekaniskt förbi ett fynd. Det farliga är inte att psykologen är fel person – det är att bokningen ser ut som ett omhändertagande, så att ingen letar vidare. Katrin har nu fått hjälp, i journalen, och nästa som läser kommer att utgå från att den kroppsliga frågan är avgjord.' },

            { text: 'Läkare akut idag',
              ok: false, princip: 'rodflagga', tid: 1,
              fx: { tydlighet: -6 },
              utfall: 'Katrin får en akuttid klockan 16.20, efter att ha vakat hela dagen. Läkaren beställer prover och ber henne komma tillbaka.',
              varfor: 'Inte farligt, men fel av två skäl. Det finns inget akut här, och en akuttid utan provsvar leder till exakt det besök hon får göra om ändå. Att vara osäker och att ha bråttom är inte samma sak.' },

            { text: 'Hänvisa till företagshälsovården – hon jobbar i kommunen',
              ok: 'delvis', princip: 'dorr', tid: 1,
              utfall: 'Katrin svarar att företagshälsovården bara tar arbetsrelaterade ärenden och att hon inte vill att chefen ska veta.',
              varfor: 'Företagshälsovården är en riktig resurs, särskilt kring nattarbetet och schemat, och den frågan kommer att behöva ställas. Men uppdraget är arbetsmiljö, inte utredning av ett halvårs trötthet – och att hänvisa dit som enda åtgärd lämnar fynden utan ägare igen. Värt att diskutera i gruppen: vad tar er lokala företagshälsovård faktiskt emot?' },

            { text: 'Avsluta med råd om sömn och återhämtning vid nattarbete',
              ok: false, princip: 'dorr', tid: 1,
              fx: { sakerhet: -20 },
              utfall: 'Ett halvår senare söker Katrin igen. Då är hon sjukskriven sedan två månader av en jourläkare, med diagnosen utmattningssyndrom.',
              varfor: 'Råden är i sig rimliga och de är fel svar på det hon berättade. Att stänga ett ärende med fem obesvarade kroppsliga symtom är inte egenvård – det är att lämna över utredningen till tiden.' }
          ] }
      ]
    },

    /* ================================================================
       LEO – läser som Bengt, men gårdagens frågeblock döljer en röd
       flagga. Provet på lärdomen i beatet I SKRIFT i ssk-bengt.
       Oplanerat besök.
       ================================================================ */
    {
      id: 'ssk-leo',
      roll: 'ssk',
      titel: 'Chattärende 09:12',
      patient: 'leo',
      lage: 'chatt',
      minuter: 10,
      svarighet: 3,
      laser: 'oplanerat',
      endastDrill: true,
      principer: ['rodflagga', 'bedda-b', 'dorr'],
      journal: [
        ['Kontaktorsak', 'Ryggskott efter lyft, begär sjukskrivning 2 veckor'],
        ['Yrke', 'Byggnadsarbetare'],
        ['Tidigare', 'Ryggskott 2023, självläkande på tre veckor'],
        ['Läkemedel', 'Receptfria smärtstillande, egen medicinering'],
        ['Noterat', 'Ärende inlagt i går 20:41 med ifyllt frågeformulär. Ej besvarat.']
      ],
      intro: [
        '09:12. Leo Brandt, 33 år, byggnadsarbetare.',
        'Ärendet ligger på rad två i kön. Det han skrev i går kväll ligger obesvarat ovanför.'
      ],

      beats: [

        { typ: 'replik', humor: 'smarta',
          text: 'Jag fick ryggskott när vi bar en balk i torsdags. Samma som förra gången. Jag behöver två veckor, chefen vill ha ett papper. Jag fyllde i era frågor redan i går kväll men ingen har hört av sig.' },

        { typ: 'val',
          fraga: 'Han har rätt i att han fått vänta, och han har redan svarat på frågorna. Hur öppnar du?',
          tips: 'Röda flagg-frågor handlar om läget nu. Ett dygn är lång tid i en rygg.',
          val: [
            { text: 'Förlåt att du fått vänta, det var inte okej. Jag har läst det du skrev i går – men jag behöver ändå ta ett par av frågorna en gång till, för de handlar om hur det är just nu. Går det bra?',
              tid: 2, ok: true, princip: 'rodflagga',
              humor: 'neutral', reaktion: 'Leo: "Kör på då."',
              svar: 'Kör på då. Fast det är samma som i går, jag har bara ont.',
              fx: { allians: 10, sakerhet: 10, underlag: 4 },
              varfor: 'Du erkänner väntetiden, vilket avväpnar irritationen, och du ger ett skäl till upprepningen som handlar om ryggen och inte om rutiner. Det gör att han svarar på frågorna i stället för att svara på att han redan svarat.' },

            { text: 'Jag ser att du redan svarat nej på våra frågor. Då bokar jag fysioterapeut till imorgon.',
              tid: 1, ok: false, princip: 'rodflagga',
              humor: 'lattad', reaktion: 'Leo: "Perfekt. Äntligen någon som är effektiv."',
              svar: 'Perfekt. Fixar hon intyget också?',
              fx: { allians: 10, sakerhet: -18, underlag: -10 },
              varfor: 'Snabbt, vänligt, uppskattat och det farligaste valet i hela ärendet. Du har byggt en vårdnivåbedömning på ett formulärsvar från i går kväll, ifyllt av en man med ont som ville bli klar. Ett ospecifikt ryggskott hos en 33-åring är rätt för fysioterapeut – men det är svaret på frågan du inte har ställt.' },

            { text: 'Vi ger inte två veckor rakt av längre.',
              tid: 1, ok: false, princip: 'bedda-e',
              humor: 'spand', reaktion: 'Leo: "Nej, det är klart. Ni ger inget."',
              svar: 'Nej det är klart. Man ska väl jobba med bruten rygg också.',
              fx: { allians: -14, agens: -4 },
              varfor: 'Första ordet blev ett nej om administration till någon som redan väntat ett dygn. Nu handlar ärendet om er och inte om ryggen, och han svarar kortare på allt du frågar resten av chatten.' },

            { text: 'Jag noterar två veckor, så får läkaren ta ställning.',
              tid: 1, ok: false, princip: 'forvantan',
              humor: 'lattad', reaktion: 'Leo: "Bra. Jag messar chefen."',
              svar: 'Bra. Jag messar chefen på en gång.',
              fx: { tydlighet: -14, underlag: -10, agens: -6 },
              varfor: 'Du gjorde längden till en expedition innan någon bedömt något, och han informerar redan arbetsgivaren. Nästa medarbetare får börja med att ta tillbaka ditt besked – och du har fortfarande inte frågat något.' }
          ] },

        { typ: 'kontroll',
          banner: 'DET SOM REDAN STÅR I ÄRENDET',
          fraga: 'I gårkvällens formulär står ett samlat "Nej" på frågeblocket om blås- och tarmpåverkan, domning i grenen, feber och kraftnedsättning. Vad är det svaret värt?',
          tidFel: 2,
          princip: 'rodflagga',
          val: [
            { text: 'Det är ett svar på ett block, avgivet i går. Jag ställer frågan om blås- och tarmfunktion ensam, konkret, och om läget idag.', ratt: true },
            { text: 'Det är journalfört och besvarat. Jag går vidare till bedömningen.', ratt: false,
              varfor: 'Du vet varken vilken av de fyra frågorna han läste eller hur ryggen är idag. Ett samlat nej på ett samlat block blir inte mer tillförlitligt av att stå i journalen – det blir bara svårare att ifrågasätta.' },
            { text: 'Jag frågar om han står fast vid sina svar från i går.', ratt: false,
              varfor: 'En ja-nej-fråga om svar han inte minns att han gav. Han kommer att säga ja, och du kommer att skriva ner det. Nu har du två samlade nej i stället för ett.' },
            { text: 'Det är för otydligt. Jag bokar läkare direkt, det är säkrast.', ratt: false,
              varfor: 'Inte farligt, men du vet fortfarande inte vad du skickar. En läkartid utan frågeställning är en dyrare version av samma otydlighet, och den hamnar i morgondagens kalender. Fråga först – svaret avgör om det är imorgon eller inom timmen.' }
          ],
          forklaring: 'Digitala formulär är byggda för att gå fort, och ett block med fyra frågor och en enda nej-ruta går fortast av allt. Det är samma problem som i Bengts ärende, men värre: här har svaret dessutom hunnit bli en dag gammalt och sett ut som journalfört fakta. Röda flagg-frågor är färskvara. De ställs en i taget, i nutid, och svaret journalförs med patientens egna ord.' },

        { typ: 'val',
          fraga: 'Du ställer frågan ensam. Hur formulerar du den i skrift?',
          tips: 'Han ska inte behöva förstå orden. Han ska kunna svara på vad han gjorde och vad han kände.',
          val: [
            { text: 'Två frågor, och jag behöver svar på båda var för sig. 1. Har du kissat idag, och kom det som det brukar – eller var det trögt att komma igång? 2. Känns det normalt när du torkar dig, eller är det avdomnat där?',
              tid: 2, ok: true, princip: 'rodflagga',
              humor: 'neutral', reaktion: 'Det står "skriver…" länge.',
              svar: 'Vänta nu.',
              fx: { sakerhet: 18, underlag: 10 },
              varfor: 'Konkret, i nutid och i handlingar han själv har utfört – inte i termer som "blås- och tarmpåverkan", som han läser som "kan du kissa: ja". Numreringen tvingar fram två svar i stället för ett. Det här är den enda formulering som håller i skrift, och den kostar dig trettio sekunder.' },

            { text: 'Har du några problem med blåsa eller tarm?',
              tid: 1, ok: 'delvis', princip: 'rodflagga',
              humor: 'neutral', reaktion: 'Leo svarar på fyra sekunder: "Nej."',
              svar: 'Nej.',
              fx: { sakerhet: -8 },
              varfor: 'Frågan står i alla fall ensam, vilket är mer än formuläret gjorde. Men den är ställd i vårdens språk och besvarad på fyra sekunder. "Problem med blåsan" betyder för de flesta att det svider – inte att det tar tid att komma igång.',
              extra: { typ: 'val',
                fraga: 'Svaret kom snabbt. Något skaver. Vad gör du?',
                val: [
                  { text: 'Frågar om igen, konkret: har du kissat idag, och kom det som det brukar?',
                    tid: 2, ok: true, princip: 'rodflagga',
                    humor: 'neutral', reaktion: 'Nu dröjer svaret.',
                    svar: 'Vänta nu.',
                    fx: { sakerhet: 14 },
                    varfor: 'Att fråga om samma sak två gånger med olika ord är inte tjatighet. Det är den enda kvalitetskontroll du har när du varken hör rösten eller ser ansiktet.' },
                  { text: 'Godtar svaret och går vidare.',
                    tid: 0, ok: false, princip: 'rodflagga',
                    humor: 'neutral', reaktion: 'Leo skriver: "Kan vi ta det där intyget nu?"',
                    svar: 'Kan vi ta det där intyget nu?',
                    fx: { sakerhet: -16 },
                    varfor: 'Ett fyrasekundersvar på en fråga i fackspråk är inte ett nej. Det är ett hopp över.' }
                ] } },

            { text: 'Har du haft några symtom från blåsan eller ändtarmen sedan i går, till exempel svårighet att tömma blåsan eller nedsatt känsel perianalt?',
              tid: 1, ok: false, princip: 'rodflagga',
              humor: 'spand', reaktion: 'Leo: "Va?"',
              svar: 'Va? Jag fattar inte frågan. Nej alltså.',
              fx: { sakerhet: -12, allians: -6 },
              varfor: 'Formellt korrekt och praktiskt oanvändbart. Han svarade nej på en fråga han inte förstod, och du fick ett svar som ser ut som ett svar. I skrift finns ingen ton som räddar en obegriplig fråga – det finns bara orden.',
              extra: { typ: 'val',
                fraga: 'Han förstod inte. Vad gör du?',
                val: [
                  { text: 'Skriver om frågan i vardagsord: har du kissat idag, kom det som det brukar, och känns det normalt när du torkar dig?',
                    tid: 2, ok: true, princip: 'rodflagga',
                    humor: 'neutral', reaktion: 'Nu dröjer svaret.',
                    svar: 'Vänta nu.',
                    fx: { sakerhet: 14, allians: 4 },
                    varfor: 'Det är ditt jobb att göra frågan begriplig, inte hans att förstå den. Den som inte förstår en fråga svarar nej – alltid.' },
                  { text: 'Antecknar "nej på riktad fråga om blås- och tarmpåverkan".',
                    tid: 0, ok: false, princip: 'rodflagga',
                    humor: 'neutral', reaktion: 'Ärendet ser prydligt ut i journalen.',
                    svar: 'Så kan vi ta intyget?',
                    fx: { sakerhet: -18 },
                    varfor: 'Nu står din slutsats i journalen, byggd på ett nej från någon som skrev "Va?". Anteckningen är prydlig och den är osann.' }
                ] } }
          ] },

        { typ: 'replik', humor: 'orolig',
          text: 'Nu när du frågar så där... jag har varit på toa tre gånger sen i går kväll och det kommer knappt något, det är som att det inte vill starta. Trodde det var för att jag ligger still och dricker för lite. Och jo, det känns konstigt när jag torkar mig, avdomnat liksom. Jag trodde det var för att jag suttit i soffan i två dagar. Är det viktigt?' },

        { typ: 'kontroll',
          banner: 'BESLUT OM VÅRDNIVÅ',
          fraga: 'Vad gör du nu?',
          tidFel: 2,
          princip: 'rodflagga',
          fx: { sakerhet: 15 },
          val: [
            { text: 'Detta talar för cauda equina-misstanke. Jag ringer upp honom omgående och ärendet ska till akutmottagning för bedömning idag.', ratt: true },
            { text: 'Fysioterapeut imorgon – det är fortfarande ett ryggskott efter ett lyft.', ratt: false,
              varfor: 'Röda flaggor går alltid före flödesregler. Att mekanismen är ett lyft gör bilden mer sannolik, inte mindre farlig – ett diskbråck är just det som kan trycka på nervrötterna längst ner.' },
            { text: 'Läkartid hos oss imorgon förmiddag.', ratt: false,
              varfor: 'Fördröjningen är själva risken. Nervpåverkan som får stå kvar kan bli bestående, och skillnaden mellan idag och imorgon är det enda du faktiskt kan påverka från chatten.' },
            { text: 'Be honom höra av sig igen om det blir värre.', ratt: false,
              varfor: 'Du lägger bedömningen på honom, och "värre" är inte ett kriterium han kan använda. Blåsan kan tömma sig av sig själv utan att det gör mer ont – för honom kommer det att kännas som en förbättring.' }
          ],
          forklaring: 'Svårighet att tömma blåsan tillsammans med nedsatt känsel i ridbyxeområdet efter ett ryggskott är cauda equina-misstanke tills motsatsen är visad. Bedömningen kräver akut undersökning och bilddiagnostik som inte finns på en vårdcentral, och tidsfaktorn handlar om funktion som inte kommer tillbaka. Du ställer ingen diagnos – du fattar ett vårdnivåbeslut, och det ligger inom din yrkeskompetens. Lägg också märke till vad som avgjorde: inte misstänksamhet mot Leo, inte att du avbröt och skickade allt till läkare, utan en fråga som ställdes ensam och i vardagsord.' },

        { typ: 'val',
          fraga: 'Du ringer upp. Han svarar. Vad säger du?',
          tips: 'Han ska förstå att det är bråttom utan att bli så rädd att han inte hör resten. Och han ska inte köra bil själv.',
          val: [
            { text: 'Leo, det du beskriver kan bero på att en nerv längst ner i ryggen är i kläm, och det behöver undersökas idag – inte imorgon. Jag skickar dig till akuten nu. Kan någon köra dig, eller ska vi ordna transport? Kör inte själv.',
              tid: 2, ok: true, princip: 'bedda-a',
              humor: 'orolig', reaktion: 'Han blir tyst. Sedan: "Fan. Okej. Jag ringer morsan."',
              svar: 'Okej. Jag ringer morsan, hon kan köra. Ska jag ta med nåt?',
              fx: { tydlighet: 16, sakerhet: 12, allians: 8 },
              varfor: 'Ett begripligt skäl, ett tydligt tidsfönster och ett konkret nästa steg – i den ordningen. Frågan om transport är inte omtanke utan bedömning: en man med begynnande kraftnedsättning i benen ska inte köra, och du vill dessutom veta att någon vet var han är.' },

            { text: 'Det här ser inte bra ut. Du måste åka in på en gång.',
              tid: 1, ok: 'delvis', princip: 'bedda-a',
              humor: 'spand', reaktion: 'Leo: "Vad är det? Är det cancer?"',
              svar: 'Vad är det? Kommer jag kunna gå?',
              fx: { tydlighet: -6, allians: -8, sakerhet: 4 },
              varfor: 'Rätt beslut, och en oro utan innehåll. Utan ett skäl fyller han tomrummet med det värsta han kan tänka sig, och samtalet går åt till att du ska ta tillbaka något du aldrig sa. Brådskan blir inte trovärdigare av att vara vag.' },

            { text: 'Jag vill inte oroa dig i onödan, men det kan vara bra att du åker in och kollar upp det när du får tid idag.',
              tid: 1, ok: false, princip: 'bedda-a',
              humor: 'lattad', reaktion: 'Leo: "Okej, jag åker efter middagen då."',
              svar: 'Okej, jag åker efter middagen då. Eller imorgon bitti kanske.',
              fx: { tydlighet: -14, sakerhet: -16, allians: 4 },
              varfor: 'Du dämpade beskedet för att skona honom, och han hörde det du sa: att det inte är bråttom. Det är den vanligaste och mest välmenande orsaken till att ett akut ärende blir ett dygn gammalt. Vänlighet som gör budskapet otydligt är inte vänlighet.' }
          ] },

        { typ: 'beslut',
          banner: 'TRIAGERING',
          fraga: 'Vart går ärendet?',
          val: [
            { text: 'Akutmottagning idag – efter telefonkontakt, med frågeställning och journalfört svar',
              ok: true, princip: 'rodflagga', tid: 1,
              fx: { sakerhet: 20, underlag: 10 },
              utfall: 'Leo körs in av sin mamma på förmiddagen. Ärendet är journalfört med hans egna ord om vattenkastning och känsel.',
              varfor: 'Rätt. Röda flaggor går före flödesregler, och den frågeställning du skickar med är det som gör att han inte hamnar sist i akutkön som "ryggont".' },

            { text: 'Läkartid hos oss idag, för bedömning på plats först',
              ok: 'delvis', princip: 'rodflagga', tid: 1,
              fx: { sakerhet: -6 },
              utfall: 'Mottagningsläkaren undersöker honom klockan 11 och skickar honom vidare till akuten klockan 11.20.',
              varfor: 'Försvarbart på en mottagning där en läkare finns på plats och kan bedöma och remittera inom en timme – och då är det ofta en snabbare väg in än akutens triagekö. Riskerna är att timmarna går och att en tid "senare idag" blir eftermiddag. Värt att diskutera i gruppen: hur snabbt kan er mottagning faktiskt lägga in ett sådant ärende?' },

            { text: 'Fysioterapeut imorgon – M-diagnos i botten enligt LESS',
              ok: false, princip: 'rodflagga', tid: 1,
              fx: { sakerhet: -35 },
              utfall: 'Fysioterapeuten reagerar direkt när Leo berättar samma sak för henne. Då har ett dygn gått.',
              varfor: 'Modellen tillämpad förbi en röd flagga. Fysioterapeuten fångade det, och systemet ska inte behöva räddas i sista ledet – särskilt inte i ett tillstånd där fördröjningen är själva skadan.' },

            { text: 'Läkartid för intyg om två veckor, fysioterapeut när det lugnat sig',
              ok: false, princip: 'rodflagga', tid: 1,
              fx: { sakerhet: -40 },
              utfall: 'Leo får sina två veckor. Han söker akut på fjärde dagen.',
              varfor: 'Ärendet hanterades som en administrativ begäran hela vägen. Det är precis det ett formulärsvar från i går kväll gör med en triagering: det får ärendet att se avgjort ut innan det är bedömt.' }
          ] }
      ]
    },

    /* ================================================================
       MIRIAM – arbetsplatskonflikt utan sjukdom. Här gäller LESS:
       ärendet avgörs på rätt nivå direkt, av sjuksköterskan, utan läkare.
       Oplanerat besök.
       ================================================================ */
    {
      id: 'ssk-miriam',
      roll: 'ssk',
      titel: 'Chattärende 11:20',
      patient: 'miriam',
      lage: 'chatt',
      minuter: 11,
      svarighet: 3,
      laser: 'oplanerat',
      endastDrill: true,
      principer: ['ansvar', 'dorr', 'evidens', 'rodflagga', 'bedda-a'],
      journal: [
        ['Kontaktorsak', 'Begär sjukskrivning på grund av situationen på arbetsplatsen'],
        ['Yrke', 'Teamledare, kommunen'],
        ['Tidigare', 'Inga kontakter för psykisk ohälsa. Senaste besök 2022, öroninflammation.'],
        ['Läkemedel', 'Inga'],
        ['Noterat', 'Ny chef på enheten sedan i januari']
      ],
      intro: ['11:20. Miriam Sjödin, 51 år, teamledare i kommunen.'],

      beats: [

        { typ: 'replik', humor: 'spand',
          text: 'Hej. Jag behöver bli sjukskriven. Vi fick ny chef i januari och sedan dess har han tagit ifrån mig i stort sett alla mina arbetsuppgifter. Jag blir inte längre kallad till våra möten. Jag orkar inte gå dit. Kan jag få ett intyg på fyra veckor så jag slipper?' },

        { typ: 'val',
          fraga: 'Hur öppnar du?',
          tips: 'Hennes problem är verkligt. Frågan är om det är ett vårdärende – och den frågan avgörs inte av hur orättvist det låter.',
          val: [
            { text: 'Det du beskriver låter riktigt illa. Att bli fråntagen sina uppgifter och lämnad utanför gör ont på riktigt. Innan jag säger något om intyg vill jag höra hur du mår i övrigt – får jag fråga lite?',
              tid: 2, ok: true, princip: 'bedda-e',
              humor: 'neutral', reaktion: 'Miriam: "Tack. Ingen har sagt så."',
              svar: 'Tack. Det är ingen som har sagt det till mig. Fråga på.',
              fx: { allians: 12, underlag: 6, tydlighet: 4 },
              varfor: 'Du bekräftar kränkningen utan att ta ställning i konflikten, och du markerar samtidigt att intygsfrågan inte är avgjord. Det är den enda öppning som gör att hon svarar ärligt på nästa fråga i stället för att bevisa hur dåligt hon mår.' },

            { text: 'Det där är ju rent trakasseri av din chef. Jag bokar en läkartid åt dig så får du ditt intyg.',
              tid: 1, ok: false, princip: 'ansvar',
              humor: 'lattad', reaktion: 'Miriam skriver långt och snabbt. "Äntligen någon som förstår."',
              svar: 'Äntligen någon som förstår. Tack, tack.',
              fx: { allians: 14, tydlighet: -16, underlag: -12, agens: -8 },
              varfor: 'Den mest lockande fällan i hela ärendet, för hon blir tacksam och du känner dig som en bra människa. Men du har tagit ställning i en konflikt där du hört ena sidan, lovat ett intyg du varken beslutar om eller har underlag för, och gjort vården till part i en arbetsrättslig fråga. Läkaren på torsdag får börja med att ta tillbaka ditt löfte, och då är det vården som sviker – inte chefen.' },

            { text: 'Sjukskrivning kräver en sjukdom. En konflikt på jobbet är inte en sjukdom.',
              tid: 1, ok: false, princip: 'bedda-e',
              humor: 'sluten', reaktion: 'Miriam: "Så jag inbillar mig."',
              svar: 'Så jag inbillar mig alltså. Tack för ingenting.',
              fx: { allians: -16, agens: -8 },
              varfor: 'Sakligt riktigt, levererat som första ord till någon som just berättat att hon behandlas som luft. Hon hör att också vården stänger henne ute. Innehållet kommer att behöva sägas – men det hörs bara efter att hon känt sig hörd.' },

            { text: 'Har du pratat med facket eller skyddsombudet?',
              tid: 1, ok: 'delvis', princip: 'ansvar',
              humor: 'spand', reaktion: 'Miriam: "Så du tänker skicka mig vidare direkt?"',
              svar: 'Så det är bara att skickas runt alltså.',
              fx: { allians: -8, tydlighet: 4 },
              varfor: 'Rätt väg, fel plats i ordningen. Som första replik låter det som en hänvisning bort, inte som ett råd – och du har ännu inte tagit reda på om det finns ett vårdbehov under konflikten.' }
          ] },

        { typ: 'flera',
          banner: 'KARTLÄGGNING',
          fraga: 'Du hinner tre frågor. Välj tre.',
          tips: 'Du behöver veta om det finns sjukdom under konflikten, om det finns risk, och exakt vad det är hon inte klarar. Konflikten i sig ska du inte utreda.',
          antal: 3,
          tidPer: 1,
          val: [
            { text: 'Hur sover du, äter du som vanligt, och hur är orken när du är ledig?',
              ratt: true, princip: 'dfa-aktivitet', fx: { underlag: 12, sakerhet: 8 },
              varfor: 'Funktionen utanför arbetsplatsen är det som skiljer en reaktion på en svår situation från ett sjukdomstillstånd. Den som sover, äter och orkar leva sitt liv i övrigt har inte en nedsatt arbetsförmåga av sjukdom – hon har en outhärdlig arbetsplats. Det är två olika problem med två olika lösningar.' },
            { text: 'Har du haft tankar på att inte vilja leva?',
              ratt: true, princip: 'rodflagga', flagga: 'suicid-fragad', fx: { sakerhet: 14 },
              varfor: 'Ställs också här, och särskilt här. Utfrysning och kränkande särbehandling på arbetsplatsen är en känd riskfaktor, och den bilden ser inte ut som ett psykiatriskt ärende när den kommer in – den ser ut som ett arbetsrättsligt. Ställ frågan ensam, och journalför svaret med hennes ord.' },
            { text: 'Har det förändrats vad du klarar av att utföra, eller är det att gå dit som är problemet?',
              ratt: true, princip: 'dfa-aktivitet', fx: { underlag: 14, tydlighet: 6 },
              varfor: 'Den fråga som avgör hela ärendet, och den enda som skiljer Miriam från Anna. Anna undvek också sin arbetsplats – men hennes undvikande drevs av symtom hon hade med sig hem. Miriams slutar vid parkeringen. Ett intyg beskriver nedsatt förmåga att utföra arbete, inte olust inför en arbetsmiljö.' },
            { text: 'Vad har chefen sagt om varför uppgifterna togs ifrån dig?',
              ratt: false, princip: 'ansvar', fx: { underlag: -4 },
              varfor: 'Du börjar utreda konflikten. Det är inte ditt uppdrag, du hör bara ena sidan, och allt du skriver ner blir en partsinlaga i en journal som kan komma att läsas av flera. Vårdens fråga är om det finns sjukdom och risk – inte vem som har rätt.' },
            { text: 'Har du kontaktat facket eller skyddsombudet?',
              ratt: false, princip: 'ansvar', fx: { underlag: -2 },
              varfor: 'Frågan är rätt och den kommer att ställas – men i avslutet, som en dörr du öppnar. Här kostar den en av tre platser som skulle använts för att ta reda på om det finns ett vårdbehov.' },
            { text: 'Hur länge behöver du vara borta, tror du?',
              ratt: false, princip: 'dorr', fx: { tydlighet: -10 },
              varfor: 'Förutsätter att sjukskrivning är beslutad och gör längden till en förhandling. Efter den frågan går det inte längre att säga nej utan att det låter som ett svek.' },
            { text: 'Hur dålig känner du dig på en skala 1 till 10?',
              ratt: false, fx: { underlag: -2 },
              varfor: 'En siffra utan sammanhang, och i det här ärendet blir den direkt vilseledande: siffran blir hög, och den mäter hur orättvist hon behandlas – inte hur nedsatt hennes förmåga är.' }
          ] },

        { typ: 'replik', humor: 'spand',
          text: 'Jag sover som vanligt faktiskt. Jag äter, jag springer tre gånger i veckan som jag alltid gjort, och helgerna är helt okej. Nej, inga sådana tankar – jag är inte deprimerad, jag är förbannad. Och jo, jag klarar mina uppgifter. Det är ju det som är själva grejen: jag har inga uppgifter kvar. Det är att gå in genom dörren och bli behandlad som luft jag inte klarar av.' },

        { typ: 'kontroll',
          banner: 'GÅR DET ATT SJUKSKRIVA?',
          fraga: 'Miriam sover, äter och tränar som vanligt, och utför det hon får utföra. Vad är det som saknas för att sjukskrivning ska vara möjlig?',
          tidFel: 2,
          princip: 'evidens',
          val: [
            { text: 'En arbetsförmåga som är nedsatt av sjukdom. Miriams arbetsförmåga är inte nedsatt – det är arbetsplatsen som är outhärdlig.', ratt: true },
            { text: 'Ingenting. Hon far uppenbart illa, och det räcker som skäl.', ratt: false,
              varfor: 'Att fara illa är verkligt och det är inte samma sak som sjukdom. Sjukpenning förutsätter enligt socialförsäkringsbalken att arbetsförmågan är nedsatt av sjukdom, och ett intyg som inte kan beskriva vilken funktion som är nedsatt och av vad håller varken hos Försäkringskassan eller för den som skrev under det.' },
            { text: 'En diagnos. En läkare kan sätta anpassningsstörning, så löser det sig.', ratt: false,
              varfor: 'Reaktion på svår livshändelse är en riktig diagnos och kan mycket väl ge nedsatt arbetsförmåga – men då finns symtom och funktionsnedsättning, och Miriam beskriver inga. En kod som sätts för att lösa ett administrativt problem är inte en bedömning, och den blir kvar i hennes journal.' },
            { text: 'Ett längre förlopp. Har det pågått sedan januari är det sjukskrivning.', ratt: false,
              varfor: 'Duration är inte ett kriterium. Åtta månader av en dålig arbetsmiljö är åtta månader av en dålig arbetsmiljö.' }
          ],
          forklaring: 'Det här är fallet där LESS-frågan har ett tydligt svar och det inte är en profession. Miriam har inget som talar för sjukdom, ingen risk och full funktion – då finns det ingen vårdnivå att triagera till, och att boka läkare, psykolog eller fysioterapeut skulle bara skjuta beskedet på någon annan. Två saker till. Du beslutar inte om intyget; det gör en läkare, och det ska du säga rakt ut. Men du beslutar om vårdnivån, och det beslutet ska stå i journalen med det du frågat och det hon svarat – att hon sover, äter, tränar och utför det hon får utföra – inte som din slutsats. Och märk vad ett intyg faktiskt skulle göra: det skulle flytta Miriam ur rummet där problemet finns, ge arbetsgivaren fyra veckors paus från sitt eget arbetsmiljöansvar och göra hennes återkomst svårare, inte lättare.' },

        { typ: 'val',
          humor: 'spand',
          text: 'Så du tänker skicka tillbaka mig dit? Jag klarar inte det här.',
          fraga: 'Du ska stänga dörren till intyget. Vad öppnar du i samma andetag?',
          tips: 'Det finns någon vars ansvar det här faktiskt är. Säg vem.',
          val: [
            { text: 'Nej, jag skickar inte tillbaka dig och jag lämnar dig inte utan något. Men ett sjukintyg skulle bara flytta dig ur rummet, inte ändra det som pågår i det – och det är din arbetsgivare som är skyldig att göra något åt arbetsmiljön, inte vi. Det som biter här är skyddsombudet, facket och företagshälsovården. Och skulle sömnen eller måendet vika är det ett annat ärende – då hör du av dig till oss direkt.',
              tid: 2, ok: true, princip: 'ansvar',
              humor: 'neutral', reaktion: 'Det dröjer. Sedan: "Skyddsombud. Det har jag faktiskt inte tänkt på."',
              svar: 'Skyddsombud. Det har jag inte tänkt på. Jag trodde man bara fick härda ut eller bli sjukskriven.',
              fx: { allians: 8, agens: 16, tydlighet: 16 },
              varfor: 'Du stänger med ett skäl som handlar om Miriam och inte om regler, du pekar ut vem som faktiskt bär ansvaret, och du lämnar en öppen dörr med ett tydligt kriterium. Lägg märke till hennes svar: hon trodde att valet stod mellan att härda ut och att bli sjukskriven. Att visa en tredje väg är hela poängen med LESS, och här är det du som är rätt nivå.' },

            { text: 'Jag kan tyvärr inte hjälpa dig med sjukskrivning. Du får ta det med din arbetsgivare.',
              tid: 1, ok: false, princip: 'dorr',
              humor: 'sluten', reaktion: 'Miriam loggar ut utan att svara.',
              fx: { allians: -16, agens: -10, tydlighet: -6 },
              varfor: 'Innehållet stämmer och det är ändå ett avvisande. "Ta det med din arbetsgivare" är inte en dörr när det är arbetsgivaren som är problemet. Hon går härifrån utan besked om varför, utan att veta vem som kan hjälpa och utan att veta vad som skulle göra det till ett vårdärende.' },

            { text: 'Jag bokar dig till vår psykolog, då får du i alla fall prata med någon.',
              tid: 2, ok: 'delvis', princip: 'triage-f',
              humor: 'lattad', reaktion: 'Miriam: "Tack. Det kanske behövs."',
              svar: 'Tack. Det kanske behövs faktiskt.',
              fx: { allians: 10, tydlighet: -10, underlag: -8 },
              varfor: 'Det finns försvarbara skäl: en pågående kränkande särbehandling är en riskfaktor, och samtalsstöd hjälper vissa. Men Miriam har inga symtom, psykologtiderna är mottagningens knappaste resurs, och en bokning som görs för att du inte står ut med att säga nej är inte en bedömning. Den gör dessutom om ett arbetsmiljöproblem till hennes psykiska problem. Värt att diskutera i gruppen: var går er gräns för samtalsstöd utan sjukdom?' },

            { text: 'Jag skickar det till en läkare som får ta ställning till intyget.',
              tid: 1, ok: false, princip: 'ansvar',
              humor: 'lattad', reaktion: 'Miriam: "Bra, tack."',
              svar: 'Bra. När hör hon av sig?',
              fx: { allians: 6, tydlighet: -14, underlag: -10 },
              varfor: 'Det känns som en säker hantering och det är att lämna över ditt eget beslut. Du har underlaget – du vet att hon sover, äter, tränar och utför sitt arbete – och du har ändå bokat en tid vars enda innehåll blir att någon annan säger det nej du redan kunde säga. Att skicka allt till läkare är inte försiktighet; det är den vana LESS är byggd för att bryta, och här kostar den både en läkartid och Miriams förtroende.' }
          ] },

        { typ: 'beslut',
          banner: 'TRIAGERING',
          fraga: 'Vart går ärendet?',
          tips: 'Alla ärenden ska inte bokas någonstans. Men inget ärende får stängas utan innehåll.',
          val: [
            { text: 'Du avslutar ärendet själv – med besked, hänvisning, öppen dörr och en journalanteckning',
              ok: true, princip: 'ansvar', tid: 1,
              fx: { tydlighet: 14, underlag: 10, sakerhet: 8 },
              utfall: 'Miriam kontaktar skyddsombudet samma vecka. Ärendet är journalfört med hennes egna svar om sömn, mat, träning och funktion, och med skälet till att ingen vårdnivå bokats.',
              varfor: 'Det här är LESS när modellen fungerar: ärendet avgörs på rätt nivå direkt, av dig, utan att passera en läkare, och Miriam får något konkret samma dag i stället för en tid om tio dagar. Att avsluta ett ärende är ett beslut, och det ska dokumenteras som ett – vad du frågat, vad hon svarat, vad du beslutat och varför, samt vad hon fått för information. Skillnaden mot Bengt och Carina, där avslut var fel svar, är att där fanns ett vårdbehov att öppna en dörr till. Här finns en arbetsgivare som ska göra sitt jobb.' },

            { text: 'Rehabkoordinator – för stöd i dialogen med arbetsgivaren',
              ok: 'delvis', princip: 'triage-rko', tid: 1,
              utfall: 'Rehabkoordinatorn tar kontakt, och konstaterar att det varken finns ett sjukfall eller en sjukskrivning att koordinera.',
              varfor: 'Lockande, för det är precis den kompetens Miriam behöver: någon som är van vid arbetsplatssamtal. Men lagen om koordineringsinsatser riktar sig till sjukskrivna patienter, och Miriam är inte sjukskriven – flera regioner låter ändå koordinatorn ta förebyggande kontakter, och där kan detta vara helt rätt. Värt att diskutera i gruppen: tar er rehabkoordinator emot patienter som inte har ett sjukfall?' },

            { text: 'Läkartid – låt läkaren avgöra intygsfrågan',
              ok: false, princip: 'ansvar', tid: 1,
              fx: { tydlighet: -10 },
              utfall: 'Miriam får en tid om nio dagar. Läkaren säger samma sak som du kunde ha sagt, och Miriam har hunnit sjukanmäla sig under tiden.',
              varfor: 'Nio dagar av väntan för att få ett besked som redan fanns i ditt underlag, och under tiden hinner en frånvaro etablera sig. Att alltid boka läkare vid tveksamhet är inte säkert – det är dyrt, långsamt och det lär patienten att beskedet kommer först när man kommer förbi grinden.' },

            { text: 'Psykolog – hon är i en pressad livssituation',
              ok: false, princip: 'triage-f', tid: 1,
              fx: { underlag: -10 },
              utfall: 'Miriam får en psykologtid om tre veckor. Psykologen konstaterar att det inte finns något behandlingsbart och avslutar.',
              varfor: 'Att göra om ett arbetsmiljöproblem till ett psykologärende är den vänligaste formen av felsortering. Den bekräftar dessutom bilden att det är Miriam det är fel på, vilket är exakt vad hennes chef signalerat i åtta månader.' },

            { text: 'Avsluta ärendet med hänvisning till 1177',
              ok: false, princip: 'dorr', tid: 1,
              fx: { allians: -12, tydlighet: -10 },
              utfall: 'Miriam skriver ett nytt ärende samma eftermiddag, och ett till på fredag.',
              varfor: 'Rätt beslut, tomt innehåll. Skillnaden mot det rätta alternativet är inte vad du beslutade utan vad hon fick med sig: ett skäl, en adressat och ett kriterium för när hon ska höra av sig igen. Utan det kommer hon tillbaka tills någon säger något.' }
          ] }
      ]
    },

    /* ================================================================
       RONNY – ser ut som ett ärende som kan vänta till torsdag.
       Skrevs klockan 03:14, läses klockan 08:05. Oplanerat besök.
       ================================================================ */
    {
      id: 'ssk-ronny',
      roll: 'ssk',
      titel: 'Chattärende 03:14, läst 08:05',
      patient: 'ronny',
      lage: 'chatt',
      minuter: 12,
      svarighet: 3,
      laser: 'oplanerat',
      endastDrill: true,
      principer: ['rodflagga', 'dorr', 'samtycke', 'bedda-a'],
      journal: [
        ['Kontaktorsak', 'Sömnsvårigheter, frågar om sjukskrivning'],
        ['Yrke', 'Lagerarbetare, deltid'],
        ['Tidigare', 'Inga tidigare kontakter'],
        ['Läkemedel', 'Inga'],
        ['Noterat', 'Tre meddelanden i ärendet, inkomna 01:52, 02:40 och 03:14']
      ],
      intro: [
        '08:05. Du öppnar ett ärende som skrevs i natt.',
        'Ronny Holmqvist, 24 år, lagerarbetare. Tre meddelanden.'
      ],

      beats: [

        { typ: 'replik', humor: 'neutral',
          text: '01:52 – Hej. Jag sover inte. Kan man få sjukskrivning för det?' },

        { typ: 'replik', humor: 'trott',
          text: '02:40 – Min tjej flyttade ut för tre veckor sen. Har inte varit på jobbet sen i tisdags.' },

        { typ: 'replik', humor: 'ledsen',
          text: '03:14 – Jag orkar inte det här. Glöm det. Förlåt att jag skrev.' },

        { typ: 'val',
          fraga: 'Vad gör du?',
          tips: 'Läs klockslagen och den sista meningen igen. Fråga dig sedan vilket verktyg du har som kan hantera det som står där.',
          val: [
            { text: 'Ringer upp honom direkt, innan du skriver något i chatten.',
              tid: 2, ok: true, princip: 'rodflagga', flagga: 'ringt-upp',
              humor: 'neutral', reaktion: 'Det ringer fyra signaler.',
              fx: { sakerhet: 18, allians: 8 },
              varfor: 'Tidsstämplarna klockan två och tre på natten, "jag orkar inte det här" och ett avslutande "glöm det, förlåt att jag skrev" är tillsammans skäl nog att inte hantera det här i skrift. I chatten hör du ingen röst, du vet inte om han sitter kvar, och den fråga du måste ställa tål inte att ligga obesvarad i ett fönster i tjugo minuter. Att byta till telefon är inte en eskalering – det är att byta till det verktyg som fungerar, och det ligger helt inom ditt eget beslut.' },

            { text: 'Skriver ett varmt svar, bekräftar sorgen och erbjuder psykologtid på torsdag.',
              tid: 1, ok: false, princip: 'rodflagga',
              humor: 'lattad', reaktion: 'Han svarar efter en kvart: "Tack. Torsdag går bra."',
              svar: 'Tack. Torsdag går bra. Förlåt att jag skrev så konstigt i natt.',
              fx: { allians: 10, sakerhet: -20, tydlighet: -6 },
              varfor: 'Det är vänligt, det är den vanligaste hanteringen, och det är exakt vad modellen har lärt dig att göra: separation, sömnsvårigheter, sjukskrivningsfråga, boka psykolog. Men du har bokat en tid utan att veta vad du bokar för, och du har låtit "jag orkar inte det här" stå obesvarat i fyra dagar. Betydde det vad du är rädd att det betydde är torsdag för sent, och du kommer inte att få veta det förrän på torsdag. Lägg dessutom märke till hans svar: han tar tillbaka det han skrev. Det gör de flesta i dagsljus.' },

            { text: 'Skriver i chatten, ensam fråga: "Har du haft tankar på att inte vilja leva?"',
              tid: 1, ok: 'delvis', princip: 'rodflagga',
              humor: 'neutral', reaktion: 'Meddelandet markeras som levererat. Inget svar.',
              fx: { sakerhet: 4, allians: 2 },
              varfor: 'Frågan är rätt, den står ensam och den är rakt ställd – det är mer än många gör. Problemet är vad du gör sedan. I skrift har du ingen kontroll över vad som händer efter ett ja, och ingenting alls att göra åt ett uteblivet svar. Ställ den gärna i chatt, men ha bestämt i förväg vad som händer med ett ja, ett kanske och en tystnad. Värt att diskutera i gruppen: när accepterar ni ett skriftligt svar på den här frågan, och när ringer ni?' },

            { text: 'Skickar ärendet vidare till läkare med noteringen "sömnsvårigheter, önskar sjukskrivning".',
              tid: 1, ok: false, princip: 'rodflagga',
              humor: 'neutral', reaktion: 'Ärendet försvinner ur din korg.',
              fx: { sakerhet: -22, tydlighet: -10 },
              varfor: 'Du flyttade ärendet utan att flytta informationen. Läkaren får en rubrik som inte innehåller något av det du faktiskt läste klockan 03:14, och ärendet hamnar i en kö som inte vet att den är brådskande. Att skicka allt till läkare är inte säkert i sig – det som avgör är vad som följer med. En vidarebefordran byggd på ärendets rubrik är ett beslut fattat på ingenting.' }
          ] },

        { typ: 'kontroll',
          om: { saknas: 'ringt-upp' },
          banner: 'TJUGO MINUTER SENARE',
          fraga: 'Tjugo minuter har gått. Inget svar från Ronny, och ingen annan har öppnat ärendet. Det är fortfarande ditt. Vad gör du?',
          tidFel: 2,
          princip: 'rodflagga',
          fx: { sakerhet: -10 },
          val: [
            { text: 'Ringer upp honom.', ratt: true },
            { text: 'Skriver ett meddelande till och väntar på svar.', ratt: false,
              varfor: 'Du upprepar det som redan inte fungerade. Tystnad i en chatt betyder ingenting – han kan sova, ha lagt ifrån sig telefonen eller vara i ett läge där han inte svarar. Det är just den tvetydigheten som gör skriften olämplig här.' },
            { text: 'Stänger ärendet med en anteckning om att patienten inte svarat.', ratt: false,
              varfor: 'Anteckningen är sann och beslutet är att lämna en möjligen suicidnära person utan kontakt. Att patienten inte svarar är ett skäl att öka ansträngningen, inte att avsluta.' },
            { text: 'Lägger ärendet i bevakning till imorgon.', ratt: false,
              varfor: 'Ett dygn är rimligt för många ärenden och inte för det här. Det du läste klockan 03:14 gäller idag.' }
          ],
          forklaring: 'Det finns ingen väg genom det här ärendet som går genom skriften. Du ringer, och han svarar på fjärde signalen.' },

        { typ: 'replik', humor: 'ledsen',
          text: 'Ja... hej. Förlåt, jag var full när jag skrev där. Jag har inte sovit ordentligt på tre veckor. Jag har inte varit på jobbet sen i tisdags och jag orkar inte förklara det för nån där.' },

        { typ: 'flera',
          banner: 'I TELEFON',
          fraga: 'Du har honom i luren. Vilka fyra frågor måste du få svar på nu?',
          tips: 'Du ska inte gradera hans risk – det gör en läkare. Du ska ta reda på vad som ska hända den närmaste timmen och det närmaste dygnet.',
          antal: 4,
          tidPer: 1,
          val: [
            { text: 'Har du haft tankar på att ta ditt liv? Och har du tänkt på hur du skulle göra?',
              ratt: true, princip: 'rodflagga', flagga: 'suicid-fragad', fx: { sakerhet: 18 },
              varfor: 'Två frågor och du behöver båda: tankar och plan är olika saker och skiljer sig åt i brådska. Att fråga om metod ökar inte risken – det är en seglivad myt – och det är den enskilt viktigaste uppgift du kan få. Du får den bara om du frågar rakt, med de riktiga orden.' },
            { text: 'Är du ensam nu? Vet någon hur du har det?',
              ratt: true, princip: 'rodflagga', fx: { sakerhet: 14, underlag: 6 },
              varfor: 'Ensamhet och att ingen vet är två av mycket få faktorer du faktiskt kan påverka inom den närmaste timmen. Svaret avgör också hur avslutet av samtalet ska se ut.' },
            { text: 'Hur mycket dricker du nu, och tar du något för att kunna sova?',
              ratt: true, princip: 'rodflagga', fx: { sakerhet: 14, underlag: 6 },
              varfor: 'Han sa själv att han var full när han skrev i natt. Alkohol sänker tröskeln för handling och förvärrar sömnen som han sökte för, och lugnande eller sömnmedel i bilden är ett av de lägen där ärendet aldrig ska gå förbi läkaren.' },
            { text: 'Finns det vapen hemma, eller läkemedel i större mängd?',
              ratt: true, princip: 'rodflagga', fx: { sakerhet: 12 },
              varfor: 'Frågan hör till den bedömning läkaren ska göra, och svaret ändrar ändå vad du gör den närmaste timmen – vem som ska följa med honom, hur snabbt tiden ska ligga och vad du säger innan du lägger på. Den är obekväm att ställa och den är enkel att svara på.' },
            { text: 'Hur många timmar sover du per natt?',
              ratt: false, fx: { underlag: -2 },
              varfor: 'Precision om något du redan vet. Han har sagt tre veckor utan ordentlig sömn, och siffran ändrar varken vårdnivå eller tempo.' },
            { text: 'Vad var det som hände i relationen?',
              ratt: false, princip: 'bedda-e', fx: { underlag: -2 },
              varfor: 'Mänskligt och fel person, fel stund. Berättelsen behövs av den som ska behandla honom, inte av den som ska avgöra vad som händer idag. Här kostar den en av fyra platser, och risken är att samtalet blir ett samtal i stället för en bedömning.' },
            { text: 'Har du provat att komma ut och röra på dig på dagarna?',
              ratt: false, princip: 'salutogen', fx: { agens: -6 },
              varfor: 'Ett egenvårdsråd förklätt till fråga, givet innan du vet vad du har framför dig. För den som ligger vaken och tänker på att slippa låter det som att han inte blivit hörd.' },
            { text: 'Vill du ha 50 eller 100 procents sjukskrivning?',
              ratt: false, princip: 'dorr', fx: { tydlighet: -10 },
              varfor: 'Förutsätter en sjukskrivning ingen bedömt, och gör ett ärende om liv och död till en fråga om procent.' }
          ] },

        { typ: 'replik', humor: 'ledsen',
          text: 'Ja. Jag har tänkt att det skulle vara skönt att bara slippa. I natt låg jag och läste på om hur mycket som skulle behövas av mormors tabletter, hon bor i lägenheten ovanför. Jag har inte gjort nåt. Jag är ensam här, jag har inte sagt nåt till nån. Och ja... jag dricker väl nästan varje kväll nu.' },

        { typ: 'kontroll',
          banner: 'BESLUT OM VÅRDNIVÅ',
          fraga: 'Vad gör du?',
          tidFel: 2,
          princip: 'rodflagga',
          fx: { sakerhet: 12 },
          val: [
            { text: 'Läkarbedömning idag. Jag släpper inte kontakten förrän tid och tidpunkt är bestämda och han har sagt att han kommer.', ratt: true },
            { text: 'Psykologtid snarast, gärna redan imorgon.', ratt: false,
              varfor: 'Psykolog är rätt behandling och fel beslut idag. Ingen annan än läkaren kan ta ställning till läkemedel, till behov av psykiatrisk vård och till om han ska vara ensam i natt. "Snarast" i stället för "idag" är att gissa på ett dygn.' },
            { text: 'Ringer 112.', ratt: false,
              varfor: 'Rätt när någon har en pågående handling, är otillgänglig eller inte går att nå. Här sitter han i luren, svarar på frågor och har inte gjort något. Att larma över huvudet på honom kostar det förtroende du precis byggt, och nästa gång skriver han ingenting alls. Rätt nivå idag är en bedömning idag.' },
            { text: 'Ringer hans mormor så att hon kan hålla koll och plocka undan tabletterna.', ratt: false,
              varfor: 'Två fel i ett. Sekretessen gäller även mot anhöriga och du har inte frågat om samtycke – det får du nästan alltid om du frågar. Och du lägger ansvaret för en suicidnära person på en granne som inte vet något. Fråga Ronny om du får ringa henne, och gör det i så fall tillsammans med honom.' }
          ],
          forklaring: 'Det här är fallet där LESS-svaret var rätt för ärendet som det såg ut klockan 08:05 och fel för ärendet som det är. Vad som ändrade det var ett telefonsamtal och fyra frågor. Notera gränsen för ditt mandat: du graderar inte suicidrisk och du ställer ingen diagnos – du bedömer vårdnivå och brådskegrad, säkrar kontakten och dokumenterar hans egna ord. Att skriva "uttrycker tankar på att slippa, har i natt sökt information om intoxikation med anhörigs läkemedel, ensam, dricker dagligen" går att ompröva. Att skriva "suicidrisk bedöms låg" gör det inte, och den bedömningen är inte din att göra.' },

        { typ: 'val',
          fraga: 'Innan du lägger på.',
          tips: 'Det som händer mellan det här samtalet och läkarbesöket är ditt ansvar, inte hans.',
          val: [
            { text: 'Bokar tid idag och säger klockslaget. Tar hans telefonnummer och adress. Frågar om du får ringa mormor tillsammans med honom. Säger vad han ska göra om det blir värre innan dess, och att du ringer tillbaka om en timme för att höra att han är på väg.',
              tid: 2, ok: true, princip: 'bedda-a',
              humor: 'neutral', reaktion: 'Han andas ut i luren. "Okej. Klockan två då."',
              svar: 'Okej. Klockan två. Och ja, du får ringa mormor. Hon undrar nog ändå varför jag inte kommer ner.',
              fx: { sakerhet: 18, tydlighet: 16, allians: 10 },
              varfor: 'Fem konkreta saker, varav fyra tar under en minut. Återuppringningen är det som gör skillnad: den flyttar ansvaret för de närmaste timmarna från honom till dig, och den är det enda i planen som han inte behöver orka göra själv. Samtycket till mormor gör att sekretessen inte blir det som hindrar hjälpen.' },

            { text: 'Ger honom numret till mottagningen och till 1177, och ber honom höra av sig om det blir värre.',
              tid: 1, ok: 'delvis', princip: 'bedda-a',
              humor: 'trott', reaktion: 'Ronny: "Okej. Tack."',
              svar: 'Okej. Tack för att du ringde.',
              fx: { sakerhet: -12, agens: -8 },
              varfor: 'Numren är rätt och de ska ges. Men de förutsätter att han själv orkar ringa, och det är precis den förmågan som är nedsatt hos den som inte tar sig till jobbet och inte hör av sig till sina vänner. Att ge ett telefonnummer är inte en plan – det är att flytta nästa steg till den som har minst kraft.' },

            { text: 'Skriver in tiden i chatten så att han har den svart på vitt, och avslutar samtalet.',
              tid: 1, ok: false, princip: 'bedda-a',
              humor: 'neutral', reaktion: 'Ärendet stängs. Chattfönstret ligger olästt.',
              svar: 'Ja... okej. Hej då.',
              fx: { sakerhet: -16, tydlighet: -8 },
              varfor: 'Du gick tillbaka till det verktyg du nyss lämnade, och du gjorde det i det ögonblick då kontakten var som viktigast. En tid i en chatt som ingen har läst är inte en bokad tid.' }
          ] },

        { typ: 'beslut',
          banner: 'TRIAGERING',
          fraga: 'Vart går ärendet?',
          val: [
            { text: 'Läkarbedömning idag – med säkrad kontakt, journalfört underlag och återuppringning',
              ok: true, princip: 'rodflagga', tid: 1,
              fx: { sakerhet: 20, underlag: 12, tydlighet: 8 },
              utfall: 'Ronny kommer klockan två, med sin mormor i väntrummet. Läkaren tar ställning till fortsatt vårdnivå och till sjukskrivning.',
              varfor: 'Rätt vårdnivå, rätt tempo och en plan som inte kräver att han själv orkar ta nästa steg. Det som avgjorde ärendet var inte att du misstrodde honom, utan att du ringde i stället för att skriva och ställde fyra frågor rakt ut.' },

            { text: 'Psykiatrisk akutmottagning nu',
              ok: 'delvis', princip: 'rodflagga', tid: 1,
              fx: { sakerhet: 6 },
              utfall: 'Ronny åker in och får vänta i fem timmar. Han skrivs hem samma kväll med en återbesökstid.',
              varfor: 'Försvarbart, och på en mottagning utan läkartid samma dag är det rätt svar. Det ska aldrig kännas dyrt att välja det. Men fem timmar i ett akutväntrum för någon som just öppnat sig i telefon kostar också något – och en känd läkare på hemmaplan samma eftermiddag är för många en bättre väg in. Värt att diskutera i gruppen: hur snabbt får ni fram en läkartid när det verkligen behövs?' },

            { text: 'Psykolog snarast, läkare i mån av tid',
              ok: false, princip: 'triage-f', tid: 1,
              fx: { sakerhet: -30 },
              utfall: 'Ronny får en psykologtid om nio dagar. Ingen ringer honom under tiden.',
              varfor: 'LESS-flödet tillämpat mekaniskt förbi en akut risk. Det är samma fel som i Hasses ärende, i en annan kroppsdel: modellen sorterar rätt på ytan, och röda flaggor går alltid före sorteringen.' },

            { text: 'Boka läkare för sjukskrivning, och psykolog om ett par veckor',
              ok: false, princip: 'rodflagga', tid: 1,
              fx: { sakerhet: -35 },
              utfall: 'Ronny får en tid på fredag. Han skriver inget mer i chatten.',
              varfor: 'Ärendet hanterades som den administrativa begäran det såg ut som klockan 08:05. Sjukskrivningen kan mycket väl bli aktuell – men den frågan är just nu den minst viktiga i hela ärendet.' }
          ] }
      ]
    },

    /* ================================================================
       YVONNE – läser som Carina, men diagnosen är patientens egen och
       besvären sitter inte bara i händerna. Oplanerat besök.
       ================================================================ */
    {
      id: 'ssk-yvonne',
      roll: 'ssk',
      titel: 'Chattärende 14:40',
      patient: 'yvonne',
      lage: 'chatt',
      minuter: 12,
      svarighet: 3,
      laser: 'oplanerat',
      endastDrill: true,
      principer: ['bedda-b', 'rodflagga', 'triage-akt', 'dorr'],
      journal: [
        ['Kontaktorsak', 'Artros i händerna, önskar hjälpmedel och skenor'],
        ['Yrke', 'Förskolechef'],
        ['Tidigare', 'Inga besvär från rörelseorganen noterade'],
        ['Känt', 'Ingen ledsjukdom diagnosticerad. Modern har handartros enligt patienten.'],
        ['Läkemedel', 'Inga']
      ],
      intro: [
        '14:40. Yvonne Krantz, 56 år, förskolechef.',
        'Ärendet är rubricerat "artros i händerna" – rubriken kommer från hennes eget meddelande.'
      ],

      beats: [

        { typ: 'replik', humor: 'trott',
          text: 'Hej. Jag har fått artros i händerna, samma som mamma hade. Det har hållit på ett halvår och blir sakta värre. Jag tappar saker – kaffekoppen, nycklarna, en tallrik i förra veckan. Jag har hört att man kan få såna där skenor och hjälpmedel. Kan jag få träffa en arbetsterapeut?' },

        { typ: 'val',
          fraga: 'Hon har levererat diagnos, insats och profession. Hur öppnar du?',
          tips: 'Läs journalraden om vad som faktiskt är känt. Och läs hennes mening om vad hon tappar en gång till.',
          val: [
            { text: 'Skenor och hjälpmedel finns absolut, och det låter jobbigt att tappa saker. Men innan vi bokar vill jag höra mer om hur det började och hur det ser ut nu – får jag fråga?',
              tid: 2, ok: true, princip: 'bedda-b',
              humor: 'neutral', reaktion: 'Yvonne: "Javisst. Fast det är nog inte så mycket att fråga om."',
              svar: 'Javisst. Fast det är nog inte så mycket att fråga om, det är ju artros.',
              fx: { allians: 10, underlag: 8, sakerhet: 6 },
              varfor: 'Du bekräftar att insatsen finns – det är dörren hon är rädd ska stängas – och behåller ändå bedömningen. Att säga ja till hjälpmedel i princip kostar dig ingenting och gör att hon svarar öppet på det som kommer sedan.' },

            { text: 'Absolut, jag bokar arbetsterapeut. Hon är riktigt duktig på just artroshänder.',
              tid: 1, ok: false, princip: 'bedda-b',
              humor: 'lattad', reaktion: 'Yvonne: "Vad snabbt det gick! Tack."',
              svar: 'Vad snabbt det gick. Tack så mycket.',
              fx: { allians: 12, underlag: -14, sakerhet: -18 },
              varfor: 'Det tog tolv sekunder, hon blev glad, och du bokade en insats mot ett tillstånd ingen har konstaterat. Skillnaden mot Carinas ärende står i journalen: hos Carina fanns tumbasartros dokumenterad och undersökt. Här är "artros" hennes egen förklaring, hämtad från hennes mamma – och den har redan blivit ärendets rubrik.' },

            { text: 'Berätta hur ont du har i händerna.',
              tid: 1, ok: 'delvis', princip: 'bedda-b',
              humor: 'neutral', reaktion: 'Yvonne tvekar.',
              svar: 'Det gör faktiskt inte så jätteont. Det är mest att jag är så klumpig.',
              fx: { underlag: 4 },
              varfor: 'Frågan är smal men svaret är guld värt: det gör inte ont. Du frågade efter det hon redan sagt och missade det hon nämnde i förbigående – att tappa saker är inget smärtsymtom. Att hon svarar ärligt räddar valet.' },

            { text: 'Artros brukar inte göra att man tappar saker. Det där låter neurologiskt.',
              tid: 1, ok: false, princip: 'bedda-b',
              humor: 'orolig', reaktion: 'Yvonne slutar skriva i en halv minut.',
              svar: 'Neurologiskt? Menar du MS? Min kusin har MS.',
              fx: { allians: -14, sakerhet: -6, tydlighet: -10 },
              varfor: 'Du kan mycket väl ha rätt, och du får ändå inte säga det. Att uttala en misstanke om nervsjukdom i en chatt, utan undersökning och utan att kunna svara på nästa fråga hon ställer, är att lägga en oro på henne som du sedan lämnar henne ensam med i väntrummet. Misstanken ska styra vart du bokar – inte vad du skriver.' }
          ] },

        { typ: 'flera',
          banner: 'ÄR DET HÄNDERNA?',
          fraga: 'Du hinner fyra frågor. Välj fyra.',
          tips: 'Två frågor ska pröva om det är en ledsjukdom. Två ska ta reda på om besvären håller sig till händerna.',
          antal: 4,
          tidPer: 1,
          val: [
            { text: 'Tappar du saker för att det gör ont, eller för att greppet bara släpper?',
              ratt: true, princip: 'bedda-b', fx: { underlag: 14, sakerhet: 12 },
              varfor: 'Den enda frågan i listan som skiljer en ledsjukdom från en nervpåverkan, och den tar fem sekunder. Artros gör ont när leden belastas; ett grepp som släpper utan förvarning är en kraft- eller känselfråga, och den sitter inte i leden.' },
            { text: 'Har något annat ändrats det senaste halvåret – balansen, gången, känseln, fötterna?',
              ratt: true, princip: 'rodflagga', fx: { sakerhet: 16, underlag: 10 },
              varfor: 'Den öppna frågan som gör att patienten själv får berätta det hon inte trodde hörde hit. Händer och ben tillsammans är per definition inte en handsjukdom, och det är den kombinationen som byter både vårdnivå och tempo.' },
            { text: 'Domnar eller sticker det, och i så fall var någonstans?',
              ratt: true, princip: 'rodflagga', fx: { sakerhet: 12, underlag: 8 },
              varfor: 'Utbredningen är det som avgör om det är en enskild nerv i handleden, en nervrot eller något högre upp. Du ska inte tolka mönstret – du ska fråga efter det, så att den som ska undersöka henne vet vad hon ska undersöka.' },
            { text: 'Är lederna svullna, och hur länge är du stel på morgonen?',
              ratt: true, princip: 'bedda-b', fx: { underlag: 10 },
              varfor: 'Prövar det tredje spåret: en inflammatorisk ledsjukdom. Svullnad och långvarig morgonstelhet talar för inflammation, avsaknad av båda talar emot både det och mot en aktiv artros – och det senare är minst lika användbart.' },
            { text: 'Har du provat receptfria smärtstillande, och hjälpte de?',
              ratt: false, fx: { underlag: -2 },
              varfor: 'Egenvårdsfråga. Den ändrar inte vart ärendet ska, och svaret hade du kunnat gissa hos någon som säger att det inte gör särskilt ont.' },
            { text: 'Hur mycket skriver du på tangentbord i jobbet?',
              ratt: false, princip: 'triage-akt', fx: { underlag: -4 },
              varfor: 'Belastningsfrågan hör hemma när du har avgjort att det är belastningen som är problemet, och den är hämtad rakt från Carinas ärende. Yvonne är förskolechef och beskriver inte ett tangentbord – hon beskriver en tallrik som föll.' },
            { text: 'Har du sökt för det här förut, och vad sa de då?',
              ratt: false, princip: 'bedda-b', fx: { underlag: -2 },
              varfor: 'Journalen svarar redan: inga besvär från rörelseorganen är noterade, och ingen ledsjukdom är diagnosticerad. Frågan kostar dig en av fyra platser för en uppgift du hade gratis.' },
            { text: 'Vill du ha hjälpmedel eller sjukskrivning?',
              ratt: false, princip: 'bedda-b', fx: { tydlighet: -8 },
              varfor: 'Menyval, och hon har redan svarat i sitt första meddelande. Det är just det svaret som gör att ingen frågar vidare.' }
          ] },

        { typ: 'replik', humor: 'orolig',
          text: 'Det är mest att greppet bara släpper, faktiskt. Det gör inte särskilt ont, jag trodde det ingick. Ingen svullnad, och stel är jag väl som folk är på morgonen, ett par minuter. Men jag är stum i fingertopparna på båda händerna. Och... jo, nu när du frågar: jag snubblar ibland när jag går, som att foten fastnar i mattan. Jag har skyllt på skorna. Jag håller i räcket i trappan på förskolan numera, det gjorde jag inte i våras. Det har väl inget med saken att göra?' },

        { typ: 'kontroll',
          banner: 'VEM STÄLLDE DIAGNOSEN?',
          fraga: 'Ärendet heter "artros i händerna". Vad står det egentligen i journalen?',
          tidFel: 2,
          princip: 'bedda-b',
          val: [
            { text: 'Ingen diagnos är ställd. Artros är Yvonnes egen förklaring – och den har blivit ärendets rubrik.', ratt: true },
            { text: 'Artros är rimligt i hennes ålder, så det duger som arbetshypotes.', ratt: false,
              varfor: 'Rimligt är inte samma sak som undersökt. Och en arbetshypotes som förklarar händerna förklarar inte fötterna – då är det inte längre en hypotes, det är en vana.' },
            { text: 'Modern hade handartros, och ärftligheten stödjer diagnosen.', ratt: false,
              varfor: 'Handartros har en ärftlig komponent, så uppgiften är inte oväsentlig. Men en släkthistoria gör en förklaring mer lockande, inte mer sann – och den förklarar fortfarande inte gången.' },
            { text: 'Det spelar mindre roll. En ortos skadar ingen.', ratt: false,
              varfor: 'Ortosen skadar inte. Fem veckors väntan på en arbetsterapeuttid med fel frågeställning gör det, om det som pågår tar funktion under tiden.' }
          ],
          forklaring: 'Skillnaden mot Carina är en enda journalrad. Hos Carina fanns tumbasartros dokumenterad, och sjuksköterskans uppgift var att pröva om den fortfarande förklarade hela bilden. Hos Yvonne har ingen undersökt någonting – ordet kommer från hennes mamma, det har blivit ärendets rubrik, och rubriken har sedan styrt vem hon bad om att få träffa. En patients egen förklaring är den starkaste förankring som finns, för den låter alltid rimlig: den är byggd av någon som känner sig själv. Din uppgift är inte att avfärda den utan att pröva om den täcker allt. Det gör den inte här: ett halvårs långsamt tilltagande klumpighet i båda händerna, domningar i fingertopparna och en gång som ändrats är inte en handsjukdom. Vad det är ska en läkare avgöra – du ska se till att hon kommer dit, och att frågeställningen följer med.' },

        { typ: 'val',
          humor: 'orolig',
          text: 'Så jag får ingen tid hos arbetsterapeuten?',
          fraga: 'Vad svarar du?',
          tips: 'Hon bad om en dörr. Du ska inte stänga den – du ska säga vad som måste hända innan den är rätt dörr.',
          val: [
            { text: 'Jo, det kan mycket väl bli aktuellt, och hjälpmedel finns kvar. Men det du berättar handlar inte bara om händerna utan också om hur du går, och det behöver en läkare titta på innan vi vet vad vi ska anpassa. Jag bokar en läkartid till dig, och jag skriver in exakt det du berättat så att hon vet vad hon ska undersöka.',
              tid: 2, ok: true, princip: 'dorr',
              humor: 'neutral', reaktion: 'Det dröjer. Sedan: "Så det kanske inte är artros."',
              svar: 'Så det kanske inte är artros. Det har jag varit så säker på.',
              fx: { allians: 8, agens: 10, tydlighet: 16, underlag: 8 },
              varfor: 'Dörren hålls öppen, ordningen förklaras med ett skäl som handlar om hennes ben och inte om rutiner, och frågeställningen nämns uttryckligen. Att säga att du skriver ner det hon berättat är inte administration – det är det som gör att hon inte behöver börja om från början hos nästa person.' },

            { text: 'Jag bokar arbetsterapeuten nu, så tar vi läkare om det inte hjälper.',
              tid: 1, ok: false, princip: 'triage-akt',
              humor: 'lattad', reaktion: 'Yvonne: "Vad bra. Då provar vi det."',
              svar: 'Vad bra. Då provar vi det först.',
              fx: { allians: 10, sakerhet: -18, underlag: -10 },
              varfor: 'Den behagliga kompromissen, och den fungerar som en fördröjning med gott samvete. "Om det inte hjälper" är inget kriterium – en ortos hjälper inte mot en gång som ändrats, men det märks först om flera månader, och under tiden ser ärendet omhändertaget ut för alla som läser journalen.' },

            { text: 'Nej. Det här ska till läkare.',
              tid: 1, ok: 'delvis', princip: 'dorr',
              humor: 'orolig', reaktion: 'Yvonne: "Varför då? Är det något allvarligt?"',
              svar: 'Varför då? Är det något allvarligt?',
              fx: { tydlighet: 4, allians: -10 },
              varfor: 'Rätt beslut, tomt levererat. Ett tvärt nej utan skäl skapar en oro med fel innehåll, och hon fyller tomrummet själv – ofta med det värsta hon känner till. Ett skäl kostar en mening.' },

            { text: 'Det är svårt att bedöma på distans. Kan du boka en läkartid själv i appen?',
              tid: 1, ok: false, princip: 'dorr',
              humor: 'neutral', reaktion: 'Yvonne: "Visst, jag löser det."',
              svar: 'Visst. Jag löser det när jag får tid.',
              fx: { tydlighet: -14, agens: -8, underlag: -10 },
              varfor: 'Du gjorde en bedömning som pekade mot läkare och lämnade sedan bokningen till en app som inte känner till den. Frågeställningen försvinner, brådskan försvinner, och i praktiken hamnar hon i samma kö som ett recept. Att hänvisa vidare är ett beslut – och ett beslut som inte landar i en bokad tid med en frågeställning är ingen triagering, bara ett avslut med extra steg.' }
          ] },

        { typ: 'beslut',
          banner: 'TRIAGERING',
          fraga: 'Vart går ärendet?',
          tips: 'Vårdgarantin i primärvården ger henne rätt till en medicinsk bedömning inom tre dagar. Det är inte en produktionssiffra här – det är verktyget.',
          val: [
            { text: 'Läkarbedömning inom några dagar, med frågeställningen skriven i bokningen',
              ok: true, princip: 'rodflagga', tid: 1,
              fx: { sakerhet: 18, underlag: 12, tydlighet: 8 },
              utfall: 'Yvonne får tid på torsdag. I bokningen står: sex månaders tilltagande klumpighet i båda händerna, domning i fingertopparna, ändrad gång, håller i räcket sedan i våras.',
              varfor: 'Rätt vårdnivå och rätt tempo, och det som gör tiden användbar är raden med frågeställning. Det som avgjorde ärendet var inte att du var misstänksam mot artrosförklaringen – det var att du frågade om något annat ändrats, och lät henne själv berätta om gången.' },

            { text: 'Arbetsterapeut – handfunktion, ortos och hjälpmedel',
              ok: false, princip: 'triage-akt', tid: 1,
              fx: { sakerhet: -25, underlag: -12 },
              utfall: 'Yvonne får en tid om fem veckor. Arbetsterapeuten reagerar direkt på gången och skickar ärendet vidare. Då har hon slutat cykla till jobbet.',
              varfor: 'LESS-flödet tillämpat på en diagnos som ingen ställt. Insatsen är rätt för en artroshand och den fördröjer här den bedömning som avgör allt annat. Arbetsterapeuten fångade det – och systemet ska inte behöva räddas i sista ledet.' },

            { text: 'Läkare akut idag',
              ok: 'delvis', princip: 'rodflagga', tid: 1,
              utfall: 'Yvonne får en akuttid klockan 16.30 och blir uppriktigt skrämd av tempot.',
              varfor: 'Inte fel att vilja ha fart på det, och blir förloppet snabbare eller tillkommer blås- eller tarmpåverkan är det akut. Men ett halvårs långsam progress utan sådant är inte ett akutfall, och en akuttid ger en läkare med sju minuter i slutet av dagen. Det som gör skillnad här är inte att det sker idag utan att frågeställningen följer med.' },

            { text: 'Fysioterapeut – för balansträning och greppstyrka',
              ok: false, princip: 'triage-m', tid: 1,
              fx: { sakerhet: -20 },
              utfall: 'Yvonne får ett träningsprogram för balansen och kommer troget varje vecka.',
              varfor: 'Du behandlade två symtom vars orsak ingen känner, och gav dem båda ett namn som låter som en förklaring. Träning skadar inte, men den upptar den plats i journalen där en utredning skulle ha stått.' },

            { text: 'Avsluta med råd om handledsstöd att köpa på apoteket',
              ok: false, princip: 'dorr', tid: 1,
              fx: { sakerhet: -25 },
              utfall: 'Yvonne hör inte av sig igen förrän i februari, då hon ramlat i trappan på förskolan.',
              varfor: 'Ett egenvårdsråd på ett ärende med domningar och ändrad gång. Rådet i sig är harmlöst; det som gör skada är att ärendet stängs och att nästa person som läser journalen ser ett omhändertaget artrosbesvär.' }
          ] }
      ]
    }
  ];

})(window);
