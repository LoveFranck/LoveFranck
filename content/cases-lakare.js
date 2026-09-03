/* cases-lakare.js – Läkarens granskning och signering
   ⚠ EJ KLINISKT GRANSKAT – pedagogiskt utkast, ska granskas av verksamheten. */
(function (global) {
  'use strict';
  var LESS = global.LESS;

  LESS.fall.lakare = [

    /* ================================================================
       ANNA – kampanjärende 1, steg 3.
       ================================================================ */
    {
      id: 'lak-anna',
      roll: 'lakare',
      titel: 'Jourpass, torsdag förmiddag',
      patient: 'anna',
      lage: 'trepart',
      kollega: 'psykolog',
      minuter: 26,
      kampanj: 'anna',
      svarighet: 2,
      principer: ['signering', 'rodflagga', 'dfa-aktivitet', 'grad', 'bedda-e'],
      journal: [
        ['Ärende', 'Anna Ek, 34 år. Försäkringsmedicinsk utredning av leg. psykolog Karin Lund, klar för föredragning.'],
        ['Diagnos', 'F41.1 Generaliserat ångestsyndrom (psykologens bedömning)'],
        ['Funktion – psykologens iakttagelse', 'Uttalad autonom reaktion när arbetsplatsen kommer på tal. Tappar tråden två gånger under besöket.'],
        ['Funktion – Annas uppgift', 'Vaknar 03–04 och somnar inte om. Sömnen bruten sedan i maj.'],
        ['Aktivitet – Annas uppgift, stämd mot arbetsbeskrivningen', 'Klarar textproduktion hemifrån. Klarar ej närvaro på arbetsplatsen eller möten.'],
        ['Risk', 'Suicidfrågan ställd, besvarad nekande. Inga tecken på svår depression. Ingen missbruksanamnes.'],
        ['Somatiskt', 'Inget noterat. Inga prover tagna i ärendet.'],
        ['Åtgärd', 'Psykoedukation och situationsanalys genomförd. iKBT startar denna vecka.']
      ],
      intro: [
        'Torsdag förmiddag. Du är jourläkare: inga egna bokade patienter, du finns till för de försäkringsmedicinska utredningarna.',
        'Det knackar. Psykolog Karin är klar med Anna och vill föredra ärendet.',
        'Anna sitter kvar i rummet. Hon går härifrån idag med ett besked.'
      ],
      introExtra: [
        { nyckel: 'anna-forslag', varde: 'ingen',
          text: ['Karins förslag: ingen sjukskrivning, behandling påbörjad, anpassad återgång, uppföljning om en vecka.'] },
        { nyckel: 'anna-forslag', varde: '25',
          text: ['Karins förslag: 25 procent i tre veckor som brygga, med behandling, upptrappningsplan och slutdatum.'] },
        { nyckel: 'anna-forslag', varde: '100',
          text: ['Karins förslag: 100 procent i fyra veckor för återhämtning. Ingen behandling är påbörjad.'] },
        { nyckel: 'anna-forslag', varde: 'inget',
          text: ['Utredningen saknar förslag. Karin skriver att läkaren får avgöra graden.'] }
      ],

      beats: [

        { typ: 'replik', talare: { name: 'PSYKOLOG KARIN', kind: 'you' }, humor: 'neutral',
          text: 'Jag tar det snabbt här ute först. Trettiofyra år, ångest sedan tre månader, vänder i bilen på parkeringen. Suicidfrågan ställd och nekad. Situationsanalysen är gjord, iKBT startar i veckan. Hon sitter kvar där inne.' },

        { typ: 'flera',
          banner: 'FÖREDRAGNING',
          fraga: 'Vad kontrollerar du i underlaget medan Karin föredrar?',
          antal: 3,
          tidPer: 2,
          tips: 'Du ska kunna försvara det här inför Försäkringskassan, inför Anna och inför dig själv om ett år.',
          val: [
            { text: 'Att DFA-kedjan går att följa och att aktivitetsbegränsningen är kopplad till faktiska arbetsuppgifter',
              ratt: true, princip: 'bedda-d1', fx: { underlag: 12 },
              varfor: 'Kedjan är kärnan. Utan en aktivitetsbegränsning i arbetsuppgifter är intyget inte bedömbart, hur välskrivet det än är i övrigt.' },
            { text: 'Att källan till varje uppgift framgår: Karins iakttagelse, Annas uppgift eller annan handling',
              ratt: true, princip: 'signering', fx: { underlag: 10, sakerhet: 8 },
              varfor: 'Du signerar för innehållet. Då måste det framgå vad som är observerat och vad som är berättat – annars kan du inte stå för det, och Försäkringskassan kan inte väga det.' },
            { text: 'Att den somatiska differentialdiagnostiken är gjord av någon – för Karin kan inte göra den',
              ratt: true, princip: 'rodflagga', fx: { sakerhet: 14 },
              varfor: 'En psykolog kan bedöma suicidrisk och depressionsgrad. Hon kan inte utesluta tyreoidearubbning, anemi, B12-brist eller sömnapné. På den raden står "inget noterat" – då är den din.' },
            { text: 'Att Anna är nöjd med förslaget',
              ratt: false, princip: 'signering', fx: { underlag: -8 },
              varfor: 'Annas uppfattning är viktig att känna till och att bemöta – men den är inte ett kriterium för om ett intyg är korrekt.' },
            { text: 'Att förslaget stämmer med hur du själv brukar göra',
              ratt: false, princip: 'signering', fx: { underlag: -6 },
              varfor: 'Vanan är ingen granskningspunkt. Frågan är om underlaget håller, inte om det liknar ditt eget.' },
            { text: 'Att sjukskrivningstiden håller sig inom beslutsstödets rekommendation, annars måste den kortas',
              ratt: false, princip: 'beslutsstod', fx: { underlag: -6 },
              varfor: 'Beslutsstödet är vägledning, inte ett tak. Både kortare och längre tid kan vara rätt – det som krävs är att avvikelsen motiveras.' }
          ] },

        { typ: 'val',
          fraga: 'Vad frågar du Karin innan ni går in till Anna?',
          tips: 'Det här är din enda chans att fylla luckorna utan att göra det över patientens huvud.',
          val: [
            { text: 'Har hon någon kroppslig sjukdom, medicinerar hon, och har någon tagit prover? Jag går igenom det med henne där inne.',
              tid: 3, ok: true, princip: 'rodflagga',
              humor: 'neutral', reaktion: 'Karin bläddrar i sina anteckningar.',
              svar: 'Karin: "Det har jag faktiskt inte frågat om. Det ligger utanför mitt område."',
              fx: { sakerhet: 14, underlag: 8 },
              varfor: 'Du identifierar luckan innan mötet i stället för att upptäcka den mitt i det. Och du säger att du tar den själv – det är den enda rimliga placeringen av den frågan.' },
            { text: 'Vad tycker du att jag ska skriva?',
              tid: 2, ok: false, princip: 'signering',
              humor: 'neutral', reaktion: 'Karin ser förvånad ut.',
              svar: 'Karin: "Det står ju i förslaget. Men det är väl du som bestämmer?"',
              fx: { underlag: -10, tydlighet: -8 },
              varfor: 'Du ber om ett facit i stället för att ta ställning. Beslutet är ditt, och att lämna över det till den som gjort utredningen tar bort hela poängen med att en läkare granskar den.' },
            { text: 'Hur många har du kvar idag? Jag har ett pass att hinna med.',
              tid: 1, ok: false, princip: 'bedda-e',
              humor: 'neutral', reaktion: 'Karin blir kort i tonen.',
              svar: 'Karin: "Två. Ska jag skynda mig?"',
              fx: { allians: -8, sakerhet: -6 },
              varfor: 'Jourpasset finns just för att det här ska få ta tid. Att öppna med tidsbrist sätter tonen för hela mötet, och kollegan börjar korta sin föredragning där det blir farligt.' },
            { text: 'Ingen fråga. Underlaget är fullständigt, vi går in.',
              tid: 1, ok: 'delvis', princip: 'rodflagga',
              humor: 'neutral', reaktion: 'Ni går in.',
              svar: '',
              fx: { sakerhet: -8 },
              varfor: 'Underlaget ÄR välskrivet – men "inget noterat" under Somatiskt är inte samma sak som "inget att notera". Luckan följer med in i rummet, och nu måste du hitta den framför patienten i stället.' }
          ] },

        { typ: 'replik', humor: 'orolig',
          text: 'Hej. Karin sa att du skulle komma. Betyder det att det är något som är fel med det hon skrivit?' },

        { typ: 'val',
          fraga: 'Ni är tre i rummet. Hur inleder du?',
          tips: 'Ett trepartsmöte har en egen fälla: att de två i personalen pratar med varandra och patienten blir ett ärende på bordet.',
          val: [
            { text: 'Vänd dig till Anna. Sammanfatta med egna ord vad du uppfattat, och be henne rätta dig där det blivit fel.',
              tid: 4, ok: true, princip: 'bedda-e',
              humor: 'neutral', reaktion: 'Anna rätar på sig och tittar på dig i stället för på Karin.',
              svar: 'Nästan. Det är inte att jag inte vill – jag kommer bara inte in genom dörren.',
              fx: { allians: 14, agens: 10, underlag: 10, sakerhet: 6 },
              varfor: 'Tre saker på en gång: Anna blir part i sitt eget ärende, du får din egen kännedom om det du strax ska intyga, och rättelsen hon gör är själva skillnaden mellan ovilja och oförmåga. Det är också den formulering intyget behöver.' },
            { text: 'Vänd dig till Karin och gå igenom utredningen punkt för punkt medan Anna lyssnar.',
              tid: 4, ok: false, princip: 'bedda-e',
              humor: 'sluten', reaktion: 'Anna sjunker ihop i stolen och tittar i golvet.',
              svar: 'Ni kan väl prata som om jag inte var här.',
              fx: { allians: -18, agens: -14 },
              varfor: 'Den klassiska trepartsfällan. Anna blir ett ärende som två personer diskuterar över hennes huvud, och du får dessutom ingen egen kännedom – bara Karins, en gång till, högt.' },
            { text: 'Börja om från början med en egen fullständig anamnes.',
              tid: 8, ok: 'delvis', princip: 'signering',
              humor: 'trott', reaktion: 'Anna suckar. "Ska jag berätta allt igen?"',
              svar: 'Jag har ju precis gått igenom allt det där med Karin.',
              fx: { underlag: 6, allians: -8, agens: -6 },
              varfor: 'Du får din egen kännedom, men till priset av att göra om kollegans arbete inför henne och att låta Anna upprepa sig. Åtta minuter av ett jourpass som ska räcka till flera utredningar. Det du behöver är att komplettera, inte att duplicera.' }
          ] },

        { typ: 'kontroll',
          banner: 'DITT ANSVAR',
          fraga: 'Vad i det här ärendet kan bara du ta ansvar för?',
          tidFel: 2,
          princip: 'rodflagga',
          val: [
            { text: 'Den somatiska differentialdiagnostiken och att inget kroppsligt förklarar bilden', ratt: true },
            { text: 'Bedömningen av suicidrisk', ratt: false,
              varfor: 'Den ligger inom psykologens kompetens och är redan gjord och dokumenterad.' },
            { text: 'Att beskriva aktivitetsbegränsningen i arbetsuppgifter', ratt: false,
              varfor: 'Det är utredningens uppgift, och den är gjord. Din uppgift är att pröva om beskrivningen håller.' },
            { text: 'Att välja behandlingsmetod', ratt: false,
              varfor: 'Behandlingen är psykologens område. Du tar ställning till om planen är rimlig, inte till hur den ska utföras.' }
          ],
          forklaring: 'Det som gör LESS-flödet försvarbart är att varje profession svarar för det den kan – och att det som ingen annan kan göra hamnar hos dig, uttryckligen. Trötthet, sömnstörning och koncentrationssvikt har en somatisk differentialdiagnostik som en psykolog varken får eller kan göra. Står det "inget noterat" på den raden är den din.' },

        { typ: 'val',
          fraga: 'Hur tar du det somatiska med Anna sittande?',
          tips: 'Det ska rymmas i ett jourpass som ska räcka till fler utredningar, och det ska ändå hålla.',
          val: [
            { text: 'Kort riktad genomgång: vikt, tyreoideasymtom, mediciner, alkohol, snarkning och dagtrötthet. Prover om något faller ut.',
              tid: 5, ok: true, princip: 'rodflagga',
              humor: 'neutral', reaktion: 'Anna svarar snabbt på allt. Karin antecknar.',
              svar: 'Nej, ingenting av det. Jag har alltid varit frisk i kroppen.',
              fx: { sakerhet: 16, underlag: 12 },
              varfor: 'Riktad, inte fullständig. Fem minuter räcker för att kunna skriva att det somatiska är övervägt och vad du grundar det på – och det är den raden som gör att du kan stå för intyget.' },
            { text: 'Hoppa över det. Karin har träffat henne i en timme, hade hon varit sjuk hade det märkts.',
              tid: 1, ok: false, princip: 'rodflagga',
              humor: 'neutral', reaktion: 'Ingen märker något. Mötet går fort.',
              svar: '',
              fx: { sakerhet: -20, underlag: -10 },
              varfor: 'En timmes samtal om ångest upptäcker inte hypotyreos. Det här är precis den lucka LESS-flödet strukturellt riskerar att skapa: när läkaren inte är förstakontakt tilldelas den somatiska frågan ingen alls – om inte du tar den.' },
            { text: 'Full somatisk genomgång med status och brett provpaket.',
              tid: 10, ok: 'delvis', princip: 'rodflagga',
              humor: 'trott', reaktion: 'Karin tittar på klockan. Nästa utredning väntar.',
              svar: 'Ska jag klä av mig?',
              fx: { sakerhet: 10, underlag: 4, tydlighet: -6 },
              varfor: 'Ingen skada sker, men tio minuter av ett jourpass för en anamnestiskt frisk 34-åring utan symtom är fel dos. Riktad anamnes med prover vid utfall ger samma säkerhet till en tredjedel av tiden.' }
          ] },

        { typ: 'beslut',
          banner: 'STÄLLNINGSTAGANDE',
          fraga: 'Anna sitter kvar. Vad blir ditt besked?',
          tips: 'Hon går härifrån idag med ett besked. Det är hela poängen med upplägget – och det är också vad som gör att beslutet måste vara ditt.',
          val: [
            { text: 'Ta ställning enligt förslaget och signera det, med Anna i rummet',
              okOm: { nyckel: 'anna-forslag', varden: { ingen: true, '25': true, '100': false, inget: false }, standard: true },
              princip: 'signering', tid: 3,
              kampanj: { nyckel: 'anna-beslut', varde: 'signerat' },
              fx: { underlag: 10, tydlighet: 10, allians: 8 },
              utfall: 'Anna får beskedet av dig, ansikte mot ansikte, samma förmiddag som utredningen gjordes.',
              varfor: 'Kedjan håller: kollegan har utrett, du har granskat, kompletterat det bara du kan komplettera och träffat patienten. Skriv samtidigt din egen bedömning i journalen med vad du grundar den på och vad du själv hört. Blir ställningstagandet att inte sjukskriva är det just det som ska dokumenteras: skälet, vad som gäller i stället och när det omprövas.',
              varforFel: 'Underlaget bakom förslaget håller inte. Att signera för att kollegan står bredvid och patienten väntar är precis det tryck upplägget skapar – och det är därför granskningen måste vara på riktigt.' },

            { text: 'Justera grad eller längd efter en kort dialog med Karin och Anna, och signera det',
              ok: 'delvis', princip: 'signering', tid: 4,
              kampanj: { nyckel: 'anna-beslut', varde: 'justerat' },
              fx: { underlag: 8, tydlighet: 8, allians: 6 },
              utfall: 'Ni landar i en gemensam bedömning och Anna får besked innan hon går.',
              varfor: 'Alltid försvarbart, och upplägget är byggt för det: alla tre är i rummet, så justeringen kan förankras direkt i stället för att bli en överraskning i brevlådan. Dokumentera skälet till justeringen – annars ser det ut som en förhandling.' },

            { text: 'Begära komplettering av Karin innan du tar ställning, och be Anna vänta',
              okOm: { nyckel: 'anna-forslag', varden: { ingen: false, '25': false, '100': true, inget: true }, standard: false },
              princip: 'signering', tid: 2,
              kampanj: { nyckel: 'anna-beslut', varde: 'komplettering' },
              fx: { underlag: 6, tydlighet: -4 },
              utfall: 'Karin kompletterar medan Anna väntar. Beskedet kommer en halvtimme senare, men samma dag.',
              varfor: 'Rätt när något väsentligt saknas eller när förslaget inte följer av underlaget. Fördelen med jourupplägget är att kompletteringen kan ske direkt i stället för att ärendet studsar mellan inkorgar i två dagar. Säg exakt vad som ska kompletteras.',
              varforFel: 'Underlaget innehåller allt du behöver, och förslaget följer av det. Att låta Anna sitta och vänta på en komplettering som inte behövs kostar förtroende, och lär Karin att utredningar ändå inte duger.' },

            { text: 'Avstå från att ta ställning nu och boka in Anna på ett eget läkarbesök',
              ok: false, princip: 'signering', tid: 2,
              kampanj: { nyckel: 'anna-beslut', varde: 'eget' },
              fx: { underlag: -10, tydlighet: -12, allians: -8 },
              utfall: 'Anna får en tid om nio dagar. Hon frågar vad förmiddagen var till för.',
              varfor: 'Du har just träffat henne, med utredningen framför dig och kollegan bredvid. Att ändå skjuta upp beslutet tar bort hela vinsten med upplägget och lämnar Anna utan besked – efter att ha lovats ett. Ett eget besök är rätt när något faktiskt inte går att avgöra idag, inte som förstahandsval.' }
          ] }
      ]
    },

    /* ================================================================
       BENGT – kampanjärende 2, steg 3.
       ================================================================ */
    {
      id: 'lak-bengt',
      roll: 'lakare',
      titel: 'Jourpass, fredag förmiddag',
      patient: 'bengt',
      lage: 'trepart',
      kollega: 'fysioterapeut',
      minuter: 15,
      kampanj: 'bengt',
      svarighet: 2,
      principer: ['signering', 'grad', 'dfa-aktivitet', 'ansvar', 'rodflagga'],
      journal: [
        ['Ärende', 'Bengt Nilsson, 52 år, lagerarbetare. Utredning av leg. fysioterapeut Sara Ohlin.'],
        ['Diagnos', 'M54.5 Lumbago'],
        ['Funktion – fysioterapeutens undersökning', 'Nedsatt flexion, fingertopp–golv 45 cm. Reflexer, kraft och känsel u.a.'],
        ['Aktivitet – Bengts uppgift, stämd mot momentlistan från arbetsplatsen', 'Kan ej pallyft eller upprepad framåtböjning. Klarar truck och plockning.'],
        ['Röda flaggor', 'Ej dokumenterat.'],
        ['Åtgärd', 'Anpassad träning påbörjad. Uppföljning om 10 dagar.']
      ],
      intro: [
        'Fredag förmiddag, jourpass. Sara är klar med Bengt och hämtar dig.',
        'Bengt sitter kvar. Han har fått med sig en lista på moment från arbetsplatsen.'
      ],
      introExtra: [
        { nyckel: 'bengt-forslag', varde: 'anpassning',
          text: ['Förslaget: anpassade arbetsuppgifter i första hand, 50 procent i två veckor endast om arbetsgivaren inte kan anpassa.'] },
        { nyckel: 'bengt-forslag', varde: '50',
          text: ['Förslaget: 50 procent i två veckor med träning och uppföljning.'] },
        { nyckel: 'bengt-forslag', varde: '100',
          text: ['Förslaget: 100 procent i fyra veckor, som vid tidigare episoder.'] },
        { nyckel: 'bengt-forslag', varde: 'ingen',
          text: ['Förslaget: ingen sjukskrivning alls.'] }
      ],

      beats: [
        { typ: 'replik', talare: { name: 'FYSIOTERAPEUT SARA', kind: 'you' }, humor: 'neutral',
          text: 'Femtiotvå, lagerarbetare, ryggen i nio dagar. Flexionen är nedsatt, neurologin ren. Truck och plock går, pallyft går inte. Han undrar vad som gäller om chefen inte kan ta bort lyften.' },

        { typ: 'kontroll',
          banner: 'RÖDA FLAGGOR',
          fraga: 'Innan ni går in: vad måste vara avklarat innan du skriver ett ryggintyg på en 52-åring?',
          tidFel: 2,
          princip: 'rodflagga',
          val: [
            { text: 'En tagen och negativ anamnes på röda flaggor: nattlig smärta som väcker, viktnedgång, feber, tidigare cancer, blås- och tarmpåverkan', ratt: true },
            { text: 'Att fysioterapeuten har testat neurologin – det räcker', ratt: false },
            { text: 'Att besvären har varat kortare än sex veckor', ratt: false },
            { text: 'Att slätröntgen av ländryggen är gjord', ratt: false }
          ],
          forklaring: 'Sara har testat reflexer, kraft och känsel. Det säger något om nervrötterna men ingenting om malignitet, infektion eller cauda equina – de frågorna är anamnestiska, och på den raden står "ej dokumenterat". Duration är ingen röd flagga, och slätröntgen vid lumbago ändrar varken handläggning eller intyg. Fördelen med upplägget är att du kan ställa frågorna själv, om två minuter, med Bengt sittande framför dig. Röda flaggor går alltid före flödet, också när flödet fungerar.' },

        { typ: 'replik', humor: 'smarta',
          text: 'Jaha, så nu ska doktorn också titta. Jag har ju redan gått igenom allt med henne.' },

        { typ: 'val',
          fraga: 'Ni är tre i rummet. Vad gör du först?',
          tips: 'Röda flagg-raden är tom, och mannen som kan fylla i den sitter framför dig.',
          val: [
            { text: 'Förklara kort varför du är med, och ta sedan de frågor Sara inte ställt: nattlig värk som väcker, viktnedgång, feber, tidigare cancer, blås- och tarmpåverkan.',
              tid: 3, ok: true, princip: 'rodflagga',
              humor: 'neutral', reaktion: 'Bengt svarar snabbt och lite otåligt på allt.',
              svar: 'Nej. Nej. Nej. Jag sover som en stock när jag väl somnat, och jag har gått upp två kilo sen jul.',
              fx: { sakerhet: 18, underlag: 12, allians: 6 },
              varfor: 'Två minuter, och raden som stod tom är ifylld av den som vet svaret – med dig som källa. Det är exakt det jourupplägget finns till för: att luckan täpps medan patienten är kvar, inte i en journalanteckning tre dagar senare.' },
            { text: 'Läsa igenom Saras underlag i lugn och ro medan Bengt väntar.',
              tid: 4, ok: false, princip: 'bedda-e',
              humor: 'spand', reaktion: 'Bengt tittar demonstrativt på klockan.',
              svar: 'Ska jag sitta här medan du läser?',
              fx: { allians: -12, sakerhet: -8 },
              varfor: 'Underlaget läser du under föredragningen, inte framför patienten. Och röda flagg-raden blir inte ifylld av att du läser att den är tom.' },
            { text: 'Fråga Sara om hon hunnit gå igenom röda flaggor.',
              tid: 2, ok: 'delvis', princip: 'rodflagga',
              humor: 'neutral', reaktion: 'Sara skakar på huvudet. Bengt tittar mellan er.',
              svar: 'Sara: "Nej, det ligger utanför det jag brukar fråga om."',
              fx: { sakerhet: 4, allians: -6 },
              varfor: 'Du får rätt svar men ställer frågan till fel person, över huvudet på den som faktiskt vet. Frågan tar lika lång tid att ställa till Bengt – och då blir svaret dessutom ditt eget, vilket är det intyget behöver.' }
          ] },

        { typ: 'kontroll',
          banner: 'BEDÖMNING',
          fraga: 'Underlaget säger att Bengt klarar truck och plockning men inte lyft. Vad är rätt slutsats?',
          tidFel: 2,
          princip: 'grad',
          val: [
            { text: 'Om arbetsgivaren kan erbjuda de moment han klarar finns ingen nedsatt arbetsförmåga i det egna arbetet; annars är partiell sjukskrivning motiverad', ratt: true },
            { text: 'Han är arbetsoförmögen eftersom en del av arbetet inte går', ratt: false },
            { text: 'Arbetsgivaren är skyldig att ta bort lyften, så ingen sjukskrivning behövs', ratt: false },
            { text: 'Han bör sjukskrivas 100 procent i väntan på besked från arbetsgivaren', ratt: false }
          ],
          forklaring: 'De första 90 dagarna prövas arbetsförmågan mot Bengts vanliga arbete – eller mot annat lämpligt arbete som arbetsgivaren tillfälligt erbjuder. Erbjuds truckpassen finns arbetsförmåga; erbjuds de inte finns en reell begränsning i det egna arbetet. Vad arbetsgivaren är skyldig att göra är däremot inte din bedömning att göra i intyget – och att sjukskriva i väntan på ett besked gör vården till part i en arbetsrättslig fråga.' },

        { typ: 'val',
          fraga: 'Hur formulerar du intyget så att det håller?',
          tips: 'Försäkringskassan ska kunna följa resonemanget utan att ringa dig.',
          val: [
            { text: 'Skriva ut både begränsning och kvarvarande förmåga, ange att partiell nedsättning avser de moment som inte kan utföras, och sätta uppföljningsdatum.',
              tid: 4, ok: true, princip: 'dfa-aktivitet',
              humor: 'neutral', reaktion: 'Texten blir kort men går att följa rad för rad.',
              svar: '',
              fx: { underlag: 16, tydlighet: 10 },
              varfor: 'Det är kombinationen av begränsning, kvarvarande förmåga och omprövningsdatum som gör ett intyg bedömbart och som förhindrar automatiska förlängningar. Skriv också ut varifrån varje uppgift kommer – fyndet är Saras, aktivitetsprofilen är Bengts uppgift, bedömningen är din. Sjukpenning finns bara i fjärdedelar: du beskriver momenten i text, men graden måste bli 25, 50, 75 eller 100, och hur du översatte momenten till en fjärdedel av arbetstiden ska gå att läsa.' },
            { text: 'Skriva "kan ej utföra sitt arbete" och ange 100 procent.',
              tid: 2, ok: false, princip: 'dfa-aktivitet',
              humor: 'neutral', reaktion: 'Intyget är klart på två minuter.',
              svar: '',
              fx: { underlag: -16 },
              varfor: 'En slutsats utan underlag, och den motsägs av utredningen du just läst. Sådana intyg genererar kompletteringsförfrågningar och gör att Bengt får vänta på pengar.' },
            { text: 'Skriva att arbetsgivaren ska omplacera patienten.',
              tid: 2, ok: false, princip: 'ansvar',
              humor: 'neutral', reaktion: 'Meningen ser rimlig ut på skärmen.',
              svar: '',
              fx: { underlag: -12, sakerhet: -6 },
              varfor: 'Intyget beskriver medicinsk funktion och begränsning. Arbetsrättsliga beslut är arbetsgivarens, och en instruktion i intyget flyttar en konflikt in i en handling som ska vara medicinsk.' }
          ] },

        { typ: 'beslut',
          banner: 'STÄLLNINGSTAGANDE',
          fraga: 'Bengt sitter kvar. Vad blir ditt besked?',
          val: [
            { text: 'Signera partiell sjukskrivning i den grad som svarar mot momenten, och notera att full förmåga finns om anpassning erbjuds',
              ok: true, princip: 'grad', tid: 2,
              kampanj: { nyckel: 'bengt-beslut', varde: 'partiellt' },
              fx: { underlag: 12, tydlighet: 10 },
              utfall: 'Bengt går därifrån med beskedet och momentlistan i handen. Arbetsgivaren erbjuder truckpass och sjukskrivningen behöver aldrig användas fullt ut.',
              varfor: 'Intyget beskriver verkligheten: en begränsning i vissa moment, bevarad förmåga i andra. Det ger arbetsgivaren något att arbeta med och Försäkringskassan något att bedöma.' },
            { text: 'Signera 100 procent i fyra veckor',
              ok: false, princip: 'grad', tid: 2,
              kampanj: { nyckel: 'bengt-beslut', varde: '100' },
              fx: { underlag: -14, agens: -12 },
              utfall: 'Bengt är hemma i fyra veckor. Ryggen är bättre men konditionen sämre, och han återvänder till exakt samma pallar.',
              varfor: 'Underlaget säger att han klarar truck och plock. Att ändå skriva heltid är att signera något som motsägs av handlingen du själv läst.' },
            { text: 'Skicka hem Bengt och ta ställning senare i lugn och ro',
              ok: false, princip: 'signering', tid: 2,
              kampanj: { nyckel: 'bengt-beslut', varde: 'returnerat' },
              fx: { tydlighet: -12, allians: -10 },
              utfall: 'Bengt går hem utan besked. Intyget kommer i 1177 på måndag, utan att någon förklarat det.',
              varfor: 'Underlaget innehåller fynd, aktivitetsprofil och plan, och han sitter framför dig. Att ändå skjuta upp beskedet tar bort hela vinsten med jourupplägget – och ett intyg som dyker upp i 1177 utan förklaring är det som genererar telefonsamtalen på måndag morgon.' }
          ] }
      ]
    },

    /* ================================================================
       BRISTFÄLLIGT UNDERLAG – endast övningsläge.
       ================================================================ */
    {
      id: 'lak-brist',
      roll: 'lakare',
      titel: 'Granskning: bristfälligt underlag',
      patient: 'jonas',
      lage: 'granskning',
      minuter: 16,
      svarighet: 3,
      endastDrill: true,
      principer: ['signering', 'bedda-d1', 'dfa-funktion', 'dfa-aktivitet', 'plan'],
      journal: [
        ['Ärende', 'Jonas Ek, 38 år, IT-support. Försäkringsmedicinskt underlag från kollega på mottagningen.'],
        ['Diagnos', 'F43.8A Utmattningssyndrom'],
        ['Text i underlaget', '"Patienten är mycket trött och orkar inte arbeta. Behöver sjukskrivning 100 % i 3 månader."'],
        ['Rehabkedjan', 'Sjukskriven 100 % i elva månader. Passerat dag 180. Detta är en begäran om förlängning.'],
        ['Övrigt', 'Ingen funktionsbeskrivning. Ingen behandling angiven. Ingen uppföljning. Ingen källa till någon uppgift.']
      ],
      intro: [
        'Underlaget är tre rader långt.',
        'Din kollega har redan sagt till patienten att intyget är på väg.'
      ],

      beats: [
        { typ: 'flera',
          banner: 'GRANSKNING',
          fraga: 'Vad saknas i underlaget?',
          antal: 3,
          tidPer: 2,
          tips: 'Läs raderna som om Försäkringskassan läste dem. Vad går inte att följa?',
          val: [
            { text: 'Funktionsnedsättning: inga observationer, inga test, ingen strukturerad beskrivning',
              ratt: true, princip: 'dfa-funktion', fx: { underlag: 12 },
              varfor: '"Mycket trött" är ett symtom som patienten uppger, inte en beskriven funktionsnedsättning.' },
            { text: 'Aktivitetsbegränsning: inget om vilka arbetsuppgifter som inte fungerar',
              ratt: true, princip: 'dfa-aktivitet', fx: { underlag: 14 },
              varfor: '"Orkar inte arbeta" är en slutsats. Utan konkreta arbetsmoment finns ingen kedja att bedöma. Efter dag 180 prövas förmågan dessutom mot normalt förekommande arbeten och inte bara mot IT-supporten – då räcker den formuleringen ännu mindre.' },
            { text: 'Åtgärd och uppföljning: ingen behandling påbörjad, inget datum för omprövning',
              ratt: true, princip: 'plan', fx: { underlag: 12, tydlighet: 8 },
              varfor: 'Tre månaders sjukskrivning utan behandling och utan omprövningsdatum är en frånvaro, inte en åtgärd.' },
            { text: 'Patientens egen uppfattning om sjukskrivningens längd',
              ratt: false, fx: { underlag: -6 },
              varfor: 'Bra att känna till, men inte det som saknas för att intyget ska hålla.' },
            { text: 'Uppgift om arbetsgivarens organisation',
              ratt: false, fx: { underlag: -6 },
              varfor: 'Hör inte hemma i intyget och löser inte bristerna.' },
            { text: 'Laboratorieprover',
              ratt: false,
              varfor: 'Somatisk differentialdiagnostik vid utmattning – tyreoidea, blodstatus, B12 och folat, glukos, sömnapné – är ditt ansvar och ska vara gjord någon gång i ärendet. Men den avgörs inte här: det som gör just det här underlaget obedömbart är att hela kedjan saknas. Ta den somatiska frågan i din egen journalanteckning, inte i kompletteringsbegäran.' }
          ] },

        { typ: 'val',
          fraga: 'Din kollega har redan lovat patienten ett intyg. Hur hanterar du det?',
          tips: 'Två saker ska hanteras: patientens besked och kollegans lärande. Ingen av dem löses genom att du signerar.',
          val: [
            { text: 'Ringa kollegan direkt, gå igenom exakt vad som ska kompletteras och komma överens om vem som säger vad till patienten.',
              tid: 4, ok: true, princip: 'signering',
              humor: 'neutral', reaktion: 'Kollegan svarar efter en signal.',
              svar: 'Kollega: "Jag trodde det räckte med diagnosen. Jag ringer honom och kompletterar idag."',
              fx: { underlag: 14, tydlighet: 12 },
              varfor: 'Bristen åtgärdas, patienten får besked samma dag och kollegan lär sig något konkret. Det är så kvaliteten i ett delegerat utredningsflöde hålls uppe.' },
            { text: 'Signera för att inte göra kollegan besviken, och skärpa till det vid nästa förlängning.',
              tid: 1, ok: false, princip: 'signering',
              humor: 'neutral', reaktion: 'Intyget går iväg. Klockan är 16.40.',
              svar: 'Kollega: "Tack, du är en klippa. Jag hann inte mer idag."',
              fx: { allians: 8, underlag: -20, sakerhet: -14 },
              varfor: 'Det här är det val som känns bäst i stunden: kollegan blir tacksam, Jonas får sitt intyg, och du hinner hem. Sedan står ditt namn under ett intyg du inte kan försvara, och nästa gång går det inte att kräva kvalitet – du har redan visat att det inte behövs. Att intyga något man inte har kännedom om är inte en administrativ slarvsak; osant intygande är straffbart, och det är intygsutfärdaren som är den som intygar.' },
            { text: 'Returnera underlaget utan kommentar.',
              tid: 1, ok: 'delvis', princip: 'signering',
              humor: 'neutral', reaktion: 'Underlaget skickas tillbaka.',
              svar: '',
              fx: { tydlighet: -8, allians: -6 },
              varfor: 'Rätt beslut, dåligt utfört. En retur utan fråga tar lika lång tid att skriva men lär ingen någonting, och patienten får vänta i onödan.' }
          ] },

        { typ: 'beslut',
          banner: 'STÄLLNINGSTAGANDE',
          fraga: 'Vad gör du med underlaget?',
          val: [
            { text: 'Returnera med tre konkreta kompletteringsfrågor och ett datum',
              ok: true, princip: 'signering', tid: 2,
              fx: { underlag: 14, sakerhet: 10 },
              utfall: 'Kompletteringen kommer in samma eftermiddag. Intyget blir bedömbart.',
              varfor: 'Ett underlag som inte går att följa ska inte signeras. Men returen måste vara användbar, annars är den bara en fördröjning som kostar Jonas pengar. Frågorna ska gå att besvara i en mening var: (1) Vilka konkreta arbetsuppgifter klarar han inte, och vilka klarar han? (2) Vad sågs vid besöket – vilka observationer eller test ligger bakom "mycket trött"? (3) Vilken behandling är påbörjad eller inbokad, och vilket datum omprövas sjukskrivningen? Sätt ett datum för svaret, och se till att Jonas får veta idag att intyget dröjer och varför.' },
            { text: 'Signera enligt förslaget',
              ok: false, princip: 'signering', tid: 1,
              fx: { underlag: -24, sakerhet: -18 },
              utfall: 'Försäkringskassan begär komplettering. Jonas får ingen ersättning på sex veckor.',
              varfor: 'Det oframkomliga intyget drabbar patienten hårdast. Och du står som ansvarig för en bedömning du inte hade underlag för.' },
            { text: 'Boka in patienten hos dig och göra om hela bedömningen',
              ok: 'delvis', princip: 'signering', tid: 2,
              fx: { underlag: 6 },
              utfall: 'Du får en fullständig bild – om två veckor, när du har en ledig tid.',
              varfor: 'Ibland nödvändigt, men här går det snabbare att komplettera. Och kollegan lär sig ingenting av att ärendet tas ifrån hen.' }
          ] }
      ]
    }
  ];

})(window);
