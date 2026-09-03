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
    }
  ];

})(window);
