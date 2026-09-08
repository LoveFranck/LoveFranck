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
      minuter: 28,
      kampanj: 'anna',
      svarighet: 2,
      principer: ['signering', 'rodflagga', 'somatik', 'dfa-aktivitet', 'grad', 'bedda-e', 'beslutsstod'],
      journal: [
        ['Ärende', 'Anna Ek, 34 år. Försäkringsmedicinsk utredning av leg. psykolog Karin Lund, klar för föredragning.'],
        ['Diagnos', 'F41.1 Generaliserat ångestsyndrom (psykologens förslag)'],
        ['Förlopp', 'Debut i maj, i samband med omorganisationen. Tre månader. Inga tidigare ångestepisoder, ingen tidigare kontakt för psykisk ohälsa.'],
        ['Funktion – psykologens iakttagelse', 'Uttalad autonom reaktion när arbetsplatsen kommer på tal. Tappar tråden två gånger under besöket.'],
        ['Funktion – Annas uppgift', 'Vaknar 03–04 och somnar inte om. Sömnen bruten sedan i maj.'],
        ['Aktivitet – Annas uppgift, stämd mot arbetsbeskrivningen', 'Klarar textproduktion hemifrån. Klarar ej närvaro på arbetsplatsen eller möten.'],
        ['Risk', 'Suicidfrågan ställd, besvarad nekande. Inga tecken på svår depression. Ingen missbruksanamnes.'],
        ['Somatiskt', 'Inget noterat. Inga prover tagna i ärendet.'],
        ['Åtgärd', 'Psykoedukation och situationsanalys genomförd. iKBT startar denna vecka.']
      ],
      intro: [
        'Du är jourläkaren: inga egna bokade patienter, du finns till för de försäkringsmedicinska utredningarna.',
        'Karin lägger sin utredning framför dig. Anna sitter kvar.',
        'Hon går härifrån idag med ett besked.'
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
            { text: 'Att hela DFA-kedjan går att följa – att diagnosen är rimlig mot förloppet och att aktivitetsbegränsningen är kopplad till faktiska arbetsuppgifter',
              ratt: true, princip: 'bedda-d1', fx: { underlag: 12 },
              varfor: 'Kedjan är kärnan, och den börjar i D. Diagnosen är det första du signerar för, och F41.1 följer inte självklart av tre månaders besvär med debut i en omorganisation: generaliserat ångestsyndrom förutsätter långvarig, fritt flytande oro över flera livsområden, medan det här är situationsbundet och stressutlöst. F43-spektrum ligger närmare, och skillnaden får försäkringsmedicinska följder – beslutsstödets rekommendationer skiljer sig mellan dem. Sedan A: utan en aktivitetsbegränsning i faktiska arbetsuppgifter är intyget inte bedömbart, hur välskrivet det än är i övrigt.' },
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
          princip: 'somatik',
          val: [
            { text: 'Den somatiska differentialdiagnostiken och att inget kroppsligt förklarar bilden', ratt: true },
            { text: 'Bedömningen av suicidrisk', ratt: false,
              varfor: 'Den ligger inom psykologens kompetens och är redan gjord och dokumenterad.' },
            { text: 'Att beskriva aktivitetsbegränsningen i arbetsuppgifter', ratt: false,
              varfor: 'Det är utredningens uppgift, och den är gjord. Din uppgift är att pröva om beskrivningen håller.' },
            { text: 'Att välja behandlingsmetod', ratt: false,
              varfor: 'Behandlingen är psykologens område. Du tar ställning till om planen är rimlig, inte till hur den ska utföras.' }
          ],
          forklaring: 'Det som gör LESS-flödet försvarbart är att varje profession svarar för det den kan – och att det som ingen annan kan göra hamnar hos dig, uttryckligen. Trötthet, sömnstörning och koncentrationssvikt har en somatisk differentialdiagnostik som en psykolog varken får eller kan göra. Står det "inget noterat" på den raden är den din. Detsamma gäller diagnoskoden och själva intyget: uppgiften att utfärda det får inte delegeras, och enligt Socialstyrelsens intygsföreskrifter (HSLF-FS 2018:54, 6 kap. 2 §) får du bara uttala dig om sådant du har tillräcklig kännedom om.' },

        { typ: 'val',
          fraga: 'Hur tar du det somatiska med Anna sittande?',
          tips: 'Det ska rymmas i ett jourpass som ska räcka till fler utredningar, och det ska ändå hålla.',
          val: [
            { text: 'Kort riktad genomgång: vikt, tyreoideasymtom, mediciner, alkohol, snarkning och dagtrötthet – och TSH och blodstatus i samma vända, oavsett utfall.',
              tid: 5, ok: true, princip: 'somatik',
              humor: 'neutral', reaktion: 'Anna svarar snabbt på allt. Karin antecknar.',
              svar: 'Nej, ingenting av det. Jag har alltid varit frisk i kroppen.',
              fx: { sakerhet: 16, underlag: 12 },
              varfor: 'Riktad, inte fullständig. Fem minuter räcker för att kunna skriva vad det somatiska övervägandet bestod i och vad du grundar det på – och det är den raden som gör att du kan stå för intyget. Proverna tar du ändå: hypertyreos härmar ångest nästan symtom för symtom, TSH och blodstatus kostar nästan ingenting när hon redan är på plats, och det är det normala svaret som gör raden skrivbar. Vänta däremot inte in svaren innan du ger beskedet. De ändrar inte handläggningen idag, och att skjuta upp beslutet för deras skull vore att köpa din egen trygghet för Annas pengar.' },
            { text: 'Hoppa över det. Karin har träffat henne i en timme, hade hon varit sjuk hade det märkts.',
              tid: 1, ok: false, princip: 'somatik',
              humor: 'neutral', reaktion: 'Ingen märker något. Mötet går fort.',
              svar: '',
              fx: { sakerhet: -20, underlag: -10 },
              varfor: 'En timmes samtal om ångest upptäcker inte hypotyreos. Det här är precis den lucka LESS-flödet strukturellt riskerar att skapa: när läkaren inte är förstakontakt tilldelas den somatiska frågan ingen alls – om inte du tar den.' },
            { text: 'Full somatisk genomgång med status och brett provpaket.',
              tid: 10, ok: 'delvis', princip: 'somatik',
              humor: 'trott', reaktion: 'Karin tittar på klockan. Nästa utredning väntar.',
              svar: 'Ska jag klä av mig?',
              fx: { sakerhet: 10, underlag: 4, tydlighet: -6 },
              varfor: 'Ingen skada sker, men tio minuter av ett jourpass för en anamnestiskt frisk 34-åring utan kroppsliga symtom är fel dos – och ett brett provpaket producerar bifynd du sedan är skyldig att hantera fast de inte betyder något. Riktad anamnes plus TSH och blodstatus ger samma säkerhet på en tredjedel av tiden.' }
          ] },

        { typ: 'beslut',
          banner: 'STÄLLNINGSTAGANDE',
          fraga: 'Anna sitter kvar. Vad blir ditt besked?',
          tips: 'Hon går härifrån idag med ett besked. Det är hela poängen med upplägget – och det är också vad som gör att beslutet måste vara ditt.',
          val: [
            { text: 'Ta ställning enligt förslaget och ge Anna beskedet med Karin i rummet',
              okOm: { nyckel: 'anna-forslag', varden: { ingen: true, '25': true, '100': false, inget: false }, standard: true },
              princip: 'signering', tid: 3,
              kampanj: { nyckel: 'anna-beslut', varde: 'signerat' },
              fx: { underlag: 10, tydlighet: 10, allians: 8 },
              utfall: 'Anna får beskedet av dig, ansikte mot ansikte, samma förmiddag som utredningen gjordes.',
              varfor: 'Kedjan håller: kollegan har utrett, du har granskat, kompletterat det bara du kan komplettera och träffat patienten. Skriv samtidigt din egen bedömning i journalen med vad du grundar den på och vad du själv hört. Blir ställningstagandet att inte sjukskriva är det just det som ska dokumenteras: skälet, vad som gäller i stället och när det omprövas. Säg också vad som händer praktiskt. Blir det deltid är det arbetsgivaren som betalar sjuklön de första fjorton dagarna, och intyget dit behöver inte innehålla diagnosen om Anna inte vill det – men deltid förutsätter att chefen får veta något alls, och det har hon ännu inte sagt.',
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
      principer: ['signering', 'grad', 'dfa-aktivitet', 'ansvar', 'rodflagga', 'beslutsstod'],
      journal: [
        ['Ärende', 'Bengt Nilsson, 52 år, lagerarbetare. Utredning av leg. fysioterapeut Sara Ohlin.'],
        ['Diagnos', 'M54.5 Lumbago'],
        ['Funktion – fysioterapeutens undersökning', 'Nedsatt flexion, fingertopp–golv 45 cm. Reflexer, kraft och känsel u.a.'],
        ['Aktivitet – Bengts uppgift, stämd mot momentlistan från arbetsplatsen', 'Kan ej pallyft eller upprepad framåtböjning. Klarar truck och plockning.'],
        ['Röda flaggor', 'Ej dokumenterat.'],
        ['Åtgärd', 'Anpassad träning påbörjad. Uppföljning om 10 dagar.']
      ],
      intro: [
        'Jourpass. Sara lägger sin utredning framför dig.',
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
          forklaring: 'Sara har testat reflexer, kraft och känsel. Det säger något om nervrötterna men ingenting om malignitet, infektion eller cauda equina – de frågorna är anamnestiska, och på den raden står "ej dokumenterat". Duration är ingen röd flagga, och slätröntgen vid lumbago ändrar varken handläggning eller intyg. Listan är heller inte fullständig: uttalat trauma, kortisonbehandling eller annan immunsuppression, intravenöst missbruk och en kraftnedsättning som tilltar hör också dit. Faller någon av dem ut byter ärendet spår – till bilddiagnostik eller ett standardiserat vårdförlopp – och intygsfrågan får vänta. Fördelen med upplägget är att du kan ställa frågorna själv, om två minuter, med Bengt sittande framför dig. Röda flaggor går alltid före flödet, också när flödet fungerar.' },

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
          tips: 'Den som läser ska kunna följa resonemanget utan att ringa dig – och de första två veckorna är det chefen som läser, inte Försäkringskassan.',
          val: [
            { text: 'Skriva ut både begränsning och kvarvarande förmåga, ange att partiell nedsättning avser de moment som inte kan utföras, och sätta uppföljningsdatum.',
              tid: 4, ok: true, princip: 'dfa-aktivitet',
              humor: 'neutral', reaktion: 'Texten blir kort men går att följa rad för rad.',
              svar: '',
              fx: { underlag: 16, tydlighet: 10 },
              varfor: 'Det är kombinationen av begränsning, kvarvarande förmåga och omprövningsdatum som gör ett intyg bedömbart och som förhindrar automatiska förlängningar. Skriv också ut varifrån varje uppgift kommer – fyndet är Saras, aktivitetsprofilen är Bengts uppgift, bedömningen är din. Sjukpenning finns bara i fjärdedelar: du beskriver momenten i text, men graden måste bli 25, 50, 75 eller 100, och hur du översatte momenten till en fjärdedel av arbetstiden ska gå att läsa. Håll också reda på vem som läser. Bengt är inne på dag nio: till och med dag fjorton är det arbetsgivaren som betalar sjuklön och som är mottagare av intyget, och dit är diagnosen frivillig – Bengt bestämmer själv om chefen ska få se den. Först från dag femton är det Försäkringskassan som prövar.' },
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
              varfor: 'Underlaget säger att han klarar truck och plock. Att ändå skriva heltid är att signera något som motsägs av handlingen du själv läst. Fyra veckor på heltid ligger dessutom klart över beslutsstödets rekommendation vid akut lumbago med tungt arbete, som är upp till två veckor. Beslutsstödet är vägledning och inget tak – men en avvikelse åt det hållet ska motiveras i intyget, och här finns ingen motivering att skriva.' },
            { text: 'Avstå från sjukskrivning idag: skriv ett intyg som beskriver momenten, be Bengt fråga chefen om anpassning och boka avstämning om tre dagar',
              ok: 'delvis', princip: 'ansvar', tid: 3,
              kampanj: { nyckel: 'bengt-beslut', varde: 'anpassning' },
              fx: { agens: 10, underlag: -4, tydlighet: -6 },
              utfall: 'Chefen svarar på måndag och kan erbjuda truckpass. Dagarna dessförinnan blir obetalda.',
              varfor: 'Medicinskt är resonemanget riktigt, och att avstå från sjukskrivning är ett ställningstagande som ska motiveras och dokumenteras – inte ett administrativt nej. Två saker talar ändå emot att göra det till förstahandsval här. Bengt är inne på dag nio, och utan intyg finns ingen sjuklön från dag åtta; blir chefens svar nej har han redan förlorat dagar han inte får tillbaka. Och du lägger förhandlingen på en man med ont i ryggen som ännu inte vet vad han får begära. Det partiella intyget med noterad kvarvarande förmåga gör samma sak utan den risken: det beskriver att förmågan finns om momenten erbjuds, och behöver aldrig användas om anpassningen kommer. Värt att diskutera i gruppen – hur ofta hinner chefen svara samma dag hos er?' },

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
        ['Ärende', 'Jonas Ek, 38 år, IT-support. Försäkringsmedicinskt underlag från behandlande kollega på mottagningen – inte läkare.'],
        ['Diagnos', 'F43.8A Utmattningssyndrom'],
        ['Text i underlaget', '"Patienten är mycket trött och orkar inte arbeta. Behöver sjukskrivning 100 % i 3 månader."'],
        ['Rehabkedjan', 'Sjukskriven 100 % i elva månader, drygt 330 dagar. Passerat dag 180. Den begärda förlängningen på tre månader passerar dag 365.'],
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
              varfor: 'Somatisk differentialdiagnostik vid utmattning – tyreoidea, blodstatus, B12 och folat, glukos, sömnapné – är ditt ansvar. Men efter elva månader är frågan inte om den gjordes en gång i början, utan om något ändrats sedan dess. Den frågan avgör du i din egen journalanteckning, inte i en kompletteringsbegäran till en kollega som varken får ordinera prover eller tolka dem. Det som gör just det här underlaget obedömbart är att hela kedjan saknas.' }
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
              varfor: 'Det här är det val som känns bäst i stunden: kollegan blir tacksam, Jonas får sitt intyg, och du hinner hem. Sedan står ditt namn under ett intyg du inte kan försvara, och nästa gång går det inte att kräva kvalitet – du har redan visat att det inte behövs. Att intyga något man inte har kännedom om är inte en administrativ slarvsak; osant intygande är straffbart enligt brottsbalken 15 kap. 11 §, och det är intygsutfärdaren som intygar.' },
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
              varfor: 'Ett underlag som inte går att följa ska inte signeras. Men returen måste vara användbar, annars är den bara en fördröjning som kostar Jonas pengar. Frågorna ska gå att besvara i en mening var: (1) Vilka konkreta arbetsuppgifter klarar han inte, och vilka klarar han? (2) Vad sågs vid besöket – vilka observationer eller test ligger bakom "mycket trött"? (3) Vilken behandling är påbörjad eller inbokad, och vilket datum omprövas sjukskrivningen? Läs dem sedan mot rätt tidsgräns: den begärda förlängningen passerar dag 365. Där prövas arbetsförmågan mot hela arbetsmarknaden, och sjukpenning på normalnivå tar slut efter 364 dagar – därefter blir det fortsatt sjukpenning på 75 procent, som Jonas måste ansöka om själv. Ett intyg som bara beskriver IT-supporten räcker inte dit, och det är Jonas ekonomi som bär konsekvensen. Sätt ett datum för svaret, och se till att Jonas får veta idag att intyget dröjer och varför.' },
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
    },

    /* ================================================================
       RONNY – oplanerat besök. Ser ut som ett intygsärende som redan
       är triagerat och bokat. Är en akut suicidriskbedömning där
       LESS-flödets normala tempo är för långsamt. Endast övningsläge.
       ================================================================ */
    {
      id: 'lak-ronny',
      roll: 'lakare',
      titel: 'Jourtid klockan två',
      patient: 'ronny',
      lage: 'rum',
      minuter: 32,
      svarighet: 3,
      laser: 'oplanerat',
      endastDrill: true,
      principer: ['rodflagga', 'bedda-e', 'plan', 'samtycke', 'ansvar', 'evidens', 'grad'],
      journal: [
        ['Ärende', 'Ronny Holmqvist, 24 år, lagerarbetare 75 procent. Inbokad akut på dagens jourtid efter telefonkontakt med sjuksköterska i morse.'],
        ['Bakgrund till kontakten', 'Chattärende inkommet i natt 01.52, 02.40 och 03.14. Sista meddelandet: "Jag orkar inte det här. Glöm det. Förlåt att jag skrev." Läst 08.05, uppringd på förmiddagen.'],
        ['Hans egna ord i telefon, sjuksköterskans anteckning', '"Skönt att bara slippa." Har i natt sökt information om intoxikation med anhörigs läkemedel. Har inte gjort något. Ensam i lägenheten. Har inte berättat för någon. Dricker nästan varje kväll. Var berusad när meddelandena skrevs.'],
        ['Situation', 'Separation för tre veckor sedan, sambon flyttade ut. Har inte varit på arbetet sedan i tisdags. Har slutat höra av sig till vänner.'],
        ['Närstående', 'Mormor bor i lägenheten ovanför – det är hennes läkemedel han läst om. Ronny har samtyckt till att hon kontaktas. Hon följde med hit och sitter i väntrummet.'],
        ['Risknivå', 'Ingen gradering gjord. Sjuksköterskan har dokumenterat uppgifter, inte en bedömning.'],
        ['Tidigare', 'Inga tidigare kontakter för psykisk ohälsa. Inga kända suicidförsök. Inga läkemedel. Inga kända kroppsliga sjukdomar. Inga prover tagna.'],
        ['Sjukanmälan till arbetsgivaren', 'Ingen uppgift.']
      ],
      intro: [
        'Jourtiden klockan två var avsatt för en försäkringsmedicinsk föredragning. Sjuksköterskan tog den i morse i stället.',
        'Anteckningen från telefonsamtalet är läst. Uppgifterna finns. Bedömningen finns inte – den är din.',
        'Ronny kommer in med jackan på och sätter sig på stolskanten. Hans mormor sitter kvar i väntrummet.'
      ],

      beats: [

        { typ: 'replik', humor: 'sluten',
          text: 'Hej. Alltså … jag mår bra nu. Jag vet inte varför hon ringde upp det där. Jag var full när jag skrev. Det är inte så farligt som det lät.' },

        { typ: 'val',
          fraga: 'Han tar tillbaka det han skrev i natt. Vad gör du med det?',
          tips: 'Han ljuger inte. Klockan två är det ofta sant att det inte känns lika farligt. Frågan är vilken av de två versionerna du ska planera efter.',
          val: [
            { text: 'Säg att du är glad att han kom, att du läst vad han berättade i telefon, och att du tänker fråga om samma sak igen – för att du behöver höra det av honom själv, inte för att någon misstror honom.',
              tid: 3, ok: true, princip: 'bedda-e',
              humor: 'ledsen', reaktion: 'Han drar ner dragkedjan men behåller jackan på.',
              svar: 'Okej. Men jag skulle inte gjort nåt. Jag ville bara att det skulle sluta snurra.',
              fx: { allians: 12, sakerhet: 12, tydlighet: 8 },
              varfor: 'Två saker på en gång. Du normaliserar att frågan ställs igen – annars läser han om-frågandet som misstro och stänger. Och du gör klart att bedömningen är din och att den bygger på det här samtalet. Att en patient tar tillbaka det han sa på natten är regel, inte undantag, och det är inte lögn: risken svänger över dygnet och den svänger tillbaka. Din uppgift är inte att avgöra vilken version som är den sanna, utan att planera för att båda är det.' },

            { text: 'Ta emot det. Han verkar samlad, han säger själv att det inte var så farligt, och suicidfrågan är redan ställd och besvarad i morse. Gå vidare till sjukskrivningen.',
              tid: 2, ok: false, princip: 'rodflagga',
              humor: 'lattad', reaktion: 'Han slappnar av direkt. Samtalet blir lätt.',
              svar: 'Skönt. Ja, det är väl mest att jag behöver sova och komma tillbaka till jobbet.',
              fx: { allians: 14, sakerhet: -22, underlag: -12 },
              varfor: 'Det här är genvägen som faktiskt tas, och den tas sällan av okunskap. Den tas för att frågan är obehaglig och för att patienten just erbjudit dig en väg förbi den. Två fel i ett. Suicidrisk är färskvara: ett svar klockan 08.20 i telefon säger något om klockan 08.20. Och du kan ärva uppgifter av en kollega, men inte en riskbedömning – sjuksköterskan skrev ned vad han sagt och avstod uttryckligen från att gradera, eftersom graderingen inte är hennes. Tar inte du den finns den inte.' },

            { text: 'Läs upp hans egna ord ur telefonanteckningen och fråga vad han menade med dem.',
              tid: 4, ok: 'delvis', princip: 'bedda-b',
              humor: 'spand', reaktion: 'Han rodnar och tittar ner. "Står det så där?"',
              svar: 'Det låter mycket värre när du säger det högt.',
              fx: { sakerhet: 8, underlag: 6, allians: -6 },
              varfor: 'Metoden är riktig – att gå tillbaka till patientens egna ord slår att fråga abstrakt – men ordningen skaver. Att bli citerad ur en journal innan han blivit hälsad på gör att han försvarar sig i stället för att berätta. Samma citat fungerar tre minuter senare, ställt som en fråga: "Du sa något i morse som jag fastnade för. Får jag fråga om det?"' },

            { text: 'Fråga vad han vill få ut av besöket, så att ni inte lägger tiden på fel saker.',
              tid: 2, ok: false, princip: 'forvantan',
              humor: 'sluten', reaktion: 'Han tittar upp för första gången.',
              svar: 'Ett intyg, väl? Och kanske nåt att sova på.',
              fx: { allians: 4, tydlighet: -8, sakerhet: -14 },
              varfor: 'En bra öppning i nästan varje annat besök, och fel i det här. Du lämnar över dagordningen till den enda person i rummet som har starka skäl att vilja prata om något annat, och du gör det innan du vet vad du har framför dig. Att fråga efter patientens förväntan är rätt – efter att du satt ramen för vad besöket måste innehålla, inte i stället för.' }
          ] },

        { typ: 'flera',
          banner: 'DIN EGEN BEDÖMNING',
          fraga: 'Sköterskan har uppgifterna. Graderingen är din. Vad tar du reda på som hon inte kunde? Välj tre.',
          antal: 3,
          tidPer: 2,
          tips: 'Fyra frågor är redan ställda och besvarade i journalen. Att fråga om dem igen är inte fel – men de tre platserna här är till för det som ligger bortom dem.',
          val: [
            { text: 'Vad som fått honom att inte göra något hittills. Vad som håller emot – och om det håller ikväll också.',
              ratt: true, princip: 'rodflagga', flagga: 'ambivalens-fragad',
              fx: { sakerhet: 16, underlag: 10, agens: 8 },
              varfor: 'Den viktigaste frågan i besöket och den som ställs minst. Att fråga efter skyddsfaktorer är inte att leta tröst – det är att ta reda på vad planen ska byggas av. Svaret ger dig namnet på det som bär honom, och det talar samtidigt om hur tunt det är. En man som säger "mormor skulle inte klara det" har något att arbeta med. En man som blir tyst har inte det, och den tystnaden är ett fynd du inte får någon annanstans ifrån.' },

            { text: 'Vad han tänker sig om ikväll, konkret: var han ska vara, om han ska dricka, och vad han gör när klockan blir tre.',
              ratt: true, princip: 'plan', fx: { sakerhet: 16, tydlighet: 12 },
              varfor: 'Suicidrisk är inte ett värde du mäter, det är ett förlopp du planerar för. Nattens timmar är hans farligaste och alkoholen är den enskilt mest påverkbara faktorn i dem – han dricker nästan varje kväll och han var berusad när han skrev. Frågar du inte om ikväll blir din bedömning en beskrivning av eftermiddagen. Svaret är dessutom det som ska stå i planen, med hans ord och inte dina.' },

            { text: 'Om det svängt förut i livet: tidigare perioder av nedstämdhet, tidigare självskada, och hur det ser ut i familjen.',
              ratt: true, princip: 'bedda-b', fx: { underlag: 12, sakerhet: 10 },
              varfor: 'Det här är anamnesen som skiljer en kris efter en separation från en depressiv episod som separationen utlöste, och skillnaden avgör både behandling och tempo. Tidigare självskadehandling är dessutom en av de starkaste kända riskfaktorerna för suicid – och den står inte i journalen, för ingen har frågat. Det är också den enda av frågorna här som kräver din kompetens snarare än ditt mod.' },

            { text: 'Ställ om sköterskans fyra frågor ordagrant, som en checklista, så att du har dem i din egen anteckning.',
              ratt: false, princip: 'signering', fx: { sakerhet: 4, allians: -8 },
              varfor: 'Delvis riktigt och därför lockande: du ska höra det själv, och det ska stå i din anteckning. Men att upprepa fyra frågor ordagrant är inte en bedömning, och det kostar dig alla tre platserna. Väv in dem i samtalet i stället – "du sa i morse att du läst om tabletterna, har du tänkt på det idag också?" tar tjugo sekunder och ger mer än en omtagning.' },

            { text: 'MADRS-S i väntrummet, så att du får en siffra på depressionsdjupet innan du bestämmer dig.',
              ratt: false, princip: 'evidens', fx: { sakerhet: -12, allians: -6 },
              varfor: 'Det ser strukturerat ut och det kostar inte din tid – därför lockar det. Men ingen skattningsskala har tillräcklig tillförlitlighet för att förutsäga suicid. Skalor är ett stöd för att inte missa frågor i ett samtal, aldrig en ersättning för samtalet, och den här skalan svarar inte på frågan du faktiskt har. Att skicka ut honom med ett formulär är dessutom att byta bort den enda halvtimme du hade honom hos dig.' },

            { text: 'TSH, blodstatus, B12 och leverstatus, för att inte missa en somatisk orsak till nedstämdheten.',
              ratt: false, princip: 'somatik', fx: { sakerhet: -6, tydlighet: -6 },
              varfor: 'Precis rätt reflex i fel ögonblick. Den somatiska frågan måste tilldelas någon och i ett stressärende är den din – och han dricker dagligen, så levervärden är dessutom rimliga. Poängen är tidpunkten. Prover som besvaras i övermorgon köper ingen säkerhet ikväll, och att vänta in dem är att skjuta upp ett beslut som inte går att skjuta upp. Beställ dem på vägen ut, inte i stället för bedömningen.' },

            { text: 'Vilka arbetsuppgifter på lagret han inte klarar, så att aktivitetsbegränsningen blir rätt beskriven i intyget.',
              ratt: false, princip: 'dfa-aktivitet', fx: { underlag: -8, sakerhet: -10 },
              varfor: 'DFA-kedjan gjord enligt konstens alla regler, på fel dag. Aktivitetsbegränsningen går att komplettera nästa vecka. Kvällen går inte att komplettera. Ett formellt oklanderligt intyg på en patient vars risk ingen graderat är den sortens handling som ser bra ut i en efterhandsgranskning och inte hjälpte någon.' }
          ] },

        { typ: 'replik', humor: 'ledsen',
          text: 'Jag vet inte vad som håller emot. Mormor, kanske. Hon skulle ta det jättehårt. … Ikväll blir väl som vanligt. Jag sitter uppe. Jag brukar köpa några öl på vägen hem. Och nej, jag har aldrig gjort nåt sånt förut. Farsan var väl deppig ibland, men det pratades inte om.' },

        { typ: 'kontroll',
          banner: 'GRADERINGEN',
          fraga: 'Du ska gradera risken och skriva den i journalen. Vad ska graderingen bygga på?',
          tidFel: 2,
          princip: 'rodflagga',
          val: [
            { text: 'En sammanvägning av hans egna ord, förloppet, tillgången till medel, alkoholen ikväll och vad som håller emot – med risknivån och de åtgärder den leder till skrivna i klartext.',
              ratt: true },
            { text: 'Antalet riskfaktorer: ung man, separation, isolering, sömnbrist, alkohol, tillgång till läkemedel.', ratt: false,
              varfor: 'Riskfaktorer beskriver en grupp, inte en kväll, och de allra flesta unga män med precis den listan gör aldrig något. Att räkna faktorer ger en känsla av mätning utan att skilja de två grupperna åt. Det som gör bedömningen användbar är konkretion, tillgång, ensamhet, alkohol och förändringstakt – och vad du gör åt de av dem som går att göra något åt.' },
            { text: 'Poängen på en skattningsskala, som ger en jämförbar och dokumenterbar risknivå.', ratt: false,
              varfor: 'En skala gör bedömningen dokumenterbar men inte riktig. Ingen skattningsskala har tillräcklig tillförlitlighet för att förutsäga suicid, och en siffra i journalen som ser objektiv ut är farligare än ett ord som är ärligt osäkert.' },
            { text: 'Att han besvarade suicidfrågan i telefon i morse och att han kom till besöket – det talar för låg risk.', ratt: false,
              varfor: 'Att han kom är ett gott tecken, men det är inte en bedömning. Att svara på frågor och komma till en tid utesluter ingenting; de flesta som dör i suicid har haft vårdkontakt kort dessförinnan. Och risken klockan 14 säger begränsat om risken klockan tre på natten. Det är därför planen, inte graderingen, är det som skyddar honom.' }
          ],
          forklaring: 'Tre saker att ta med. Ett: risknivån ska skrivas ut – låg, måttlig, hög eller svårbedömd – och den ska följas av vad den leder till. En gradering utan åtgärd är en anteckning, inte en bedömning. Två: skriv hans egna ord, inte dina slutsatser. "Uttrycker att det vore skönt att slippa, har i natt sökt information om intoxikation med anhörigs läkemedel, ensam nattetid, dricker dagligen, anger mormor som skäl att inte göra något" går att ompröva av nästa läkare. "Suicidrisk bedöms låg" går inte, och den formuleringen är det vanligaste sättet att låsa en efterföljare. Tre: du kan inte förutsäga. Det ingen kan är att veta vad som händer i natt. Det alla kan är att minska det som går att minska – medlen, ensamheten, alkoholen – och att se till att nästa kontakt har ett namn och ett klockslag.' },

        { typ: 'val',
          humor: 'orolig',
          text: 'Du får inte säga till mormor vad jag sa. Hon får tro att det handlar om att jag inte sover.',
          fraga: 'Tabletterna ligger i mormors lägenhet, en trappa upp. Vad gör du?',
          tips: 'Han har samtyckt till att hon kontaktas. Det är inte samma sak som samtycke till vad du får säga.',
          val: [
            { text: 'Förhandla ramen med honom först: vad du måste säga för att hon ska kunna göra det du behöver att hon gör, och vad du kan lämna därhän. Be sedan in henne, med honom kvar i rummet.',
              tid: 4, ok: true, princip: 'samtycke',
              humor: 'orolig', reaktion: 'Han tänker länge. Sedan nickar han långsamt.',
              svar: 'Du kan säga att jag mår dåligt och att tabletter inte ska ligga framme. Inte resten.',
              fx: { sakerhet: 18, allians: 10, agens: 10, tydlighet: 10 },
              varfor: 'Samtycke är inte en ja- eller nej-fråga du ställer en gång, det är en ram du förhandlar. Han behöver inte gå med på allt – han behöver gå med på tillräckligt: att hon vet att han mår dåligt, att hon finns i kväll och att läkemedlen inte ligger framme. Det räcker för att göra kvällen annorlunda, och det respekterar gränsen han satte. Att ta in henne medan han sitter kvar är dessutom det enda sättet att göra det utan att han sedan går och undrar vad ni sa. Skriv i journalen exakt vad samtycket omfattade.' },

            { text: 'Be honom själv säga till mormor att tabletterna ska bort, och stäm av med honom imorgon att det blev gjort.',
              tid: 3, ok: 'delvis', princip: 'agens',
              humor: 'neutral', reaktion: 'Han nickar. "Jag kan väl säga det."',
              svar: 'Jag kan väl säga att jag inte vill ha tabletter framme. Hon frågar väl inte varför.',
              fx: { agens: 10, allians: 6, sakerhet: 4 },
              varfor: 'Respektfullt och inte fel – det han klarar själv ska han göra själv, och att äga sin egen begäran är i sig verksamt. Men du lägger ett samtal han har starka skäl att skjuta upp på den person i rummet som har minst kraft just nu, och du får inte veta om det blev av förrän imorgon. Värt att diskutera i gruppen: när blir respekt för patientens autonomi ett sätt att slippa ett obehagligt samtal själv?' },

            { text: 'Ring mormor efteråt och ge henne hela bilden. Läget är akut och hon behöver veta allt för att kunna hjälpa.',
              tid: 2, ok: false, princip: 'samtycke',
              humor: 'spand', reaktion: 'Han vet ingenting om det. Ännu.',
              svar: '',
              fx: { sakerhet: -12, allians: -18, tydlighet: -8 },
              varfor: 'Han har samtyckt till att hon kontaktas, inte till innehållet, och han har uttryckligen satt en gräns. Sekretessen gäller mot närstående som mot alla andra. Det finns undantag för akuta nödsituationer, men de är till för ögonblicket då någon håller på att dö framför dig – de är inte ett planeringsverktyg för en kväll du känner dig orolig inför. Priset betalas ikväll och det är konkret: den första person i vården han berättade något för blev den som gick bakom hans rygg.' },

            { text: 'Lämna tablettfrågan. Vill han verkligen göra något hittar han ett annat sätt.',
              tid: 2, ok: false, princip: 'plan',
              humor: 'neutral', reaktion: 'Frågan lämnas. Ni går vidare.',
              svar: '',
              fx: { sakerhet: -20 },
              varfor: 'Det låter luttrat och det är fel. Att begränsa tillgången till medel är en av få suicidpreventiva åtgärder med robust stöd: handlingen är ofta impulsiv, tidsfönstret kort, och en substitution sker långt ifrån alltid. Just de här tabletterna är dessutom det han låg och läste om i natt. Att lämna dem kvar en trappa upp är att lämna kvar den enda konkreta sak i hela ärendet som du faktiskt kunde ändra på.' }
          ] },

        { typ: 'kontroll',
          banner: 'VAR GÅR GRÄNSEN',
          fraga: 'Är det här ett vårdintyg?',
          tidFel: 2,
          princip: 'ansvar',
          val: [
            { text: 'Nej. Han tar emot hjälp frivilligt, och tvångsvård förutsätter både en allvarlig psykisk störning och att han motsätter sig vården.',
              ratt: true },
            { text: 'Ja. Konkreta suicidtankar med tillgång till medel räcker för vårdintyg.', ratt: false,
              varfor: 'Suicidtankar är inte i sig en allvarlig psykisk störning i lagens mening, hur konkreta de än är. Tvångsvård förutsätter dessutom att patienten motsätter sig vården eller inte kan ta grundad ställning till den – och Ronny sitter i din stol och samtalar med dig.' },
            { text: 'Ja, om psykiatrin säger att de inte kan ta emot honom. Då är vårdintyget vägen in.', ratt: false,
              varfor: 'Den vanligaste felanvändningen och den mest begripliga: du är orolig, dörren är stängd, och vårdintyget ser ut som en nyckel. Men ett vårdintyg är ett rättsligt intygande om att förutsättningarna för tvång är uppfyllda – det är inte ett sätt att lösa en resursbrist. Skriver du det utan att kriterierna finns intygar du något du vet inte stämmer.' },
            { text: 'Nej – vårdintyg får bara utfärdas av psykiater.', ratt: false,
              varfor: 'Vanlig missuppfattning. Ett vårdintyg får utfärdas av varje legitimerad läkare efter en särskild läkarundersökning, alltså också av dig på vårdcentralen. Att du får skriva det är precis därför du måste veta när du inte ska.' }
          ],
          forklaring: 'Lagen om psykiatrisk tvångsvård kräver tre saker samtidigt: allvarlig psykisk störning, ett oundgängligt behov av psykiatrisk vård dygnet runt som inte kan tillgodoses på annat sätt, och att patienten motsätter sig vården eller inte kan ta grundad ställning till den (3 §). Vårdintyget får utfärdas av en legitimerad läkare efter en särskild läkarundersökning och ska skrivas i omedelbar anslutning till den (4–5 §§). Har ett vårdintyg utfärdats får patienten hållas kvar tills frågan om intagning avgjorts (6 §), och polishandräckning kan begäras (47 §). Vägrar någon låta sig undersökas alls får en läkare i allmän tjänst besluta om omhändertagande för undersökning (4 §). Allt det här är verktyg du faktiskt har på en vårdcentral. Poängen med att kunna dem är att veta att Ronny inte är där – och att också det ska stå i journalen. Ett övervägande om tvångsvård som gjordes och landade i nej ser i efterhand ut som en fråga ingen ställde, om det inte är skrivet.' },

        { typ: 'val',
          humor: 'spand',
          text: 'Jag åker inte in på nån psykakut. Jag är inte galen.',
          fraga: 'Klockan är 14.35. Vad gör du med psykiatrin?',
          tips: 'Tre olika saker heter "kontakta psykiatrin", och de tar olika lång tid att bli av med.',
          val: [
            { text: 'Ring psykiatrisk akutmottagning eller bakjour medan han sitter kvar. Föredra vad du sett, säg vad du är osäker på, och kom överens om vem som gör vad och när. Skriv in vem du talade med, klockslag och vad ni bestämde.',
              tid: 5, ok: true, princip: 'ansvar',
              humor: 'orolig', reaktion: 'Sju minuter i kö. Ronny sitter kvar och hör din halva av samtalet.',
              svar: 'Vad sa dom?',
              fx: { sakerhet: 16, tydlighet: 12, underlag: 10 },
              varfor: 'Konsultation, inte överlämning. Du behåller ärendet men delar bedömningen med någon som gör den varje dag, och du gör det medan patienten är kvar – så att beskedet kan ges till honom direkt i stället för att bli ett brev. Två saker gör samtalet användbart: att du refererar vad du faktiskt hört med hans ord, och att du säger vad du är osäker på i stället för att argumentera för ett utfall. Blir svaret nej har du en delad och dokumenterad bedömning att stå på. Blir svaret ja har du sluppit skicka honom till en väntsal på vinst och förlust. Att han hörde samtalet är inget problem – det är det mest respektfulla i hela besöket.' },

            { text: 'Skicka honom till psykiatriska akutmottagningen nu. Ring en taxi och se till att han åker.',
              tid: 3, ok: 'delvis', princip: 'rodflagga',
              humor: 'spand', reaktion: 'Han reser sig halvvägs ur stolen.',
              svar: 'Menar du allvar? Jag har ju inte gjort nåt.',
              fx: { sakerhet: 6, allians: -10, agens: -12, tydlighet: -6 },
              varfor: 'Ibland är det precis rätt, och då ska du inte tveka en sekund: pågående handling, uttalad förvirring eller psykos, kraftig påverkan, eller att du helt enkelt inte kan svara för att han lever i natt. Men det är inte gratis. Han vill inte, du kan inte tvinga eftersom kriterierna för tvång inte är uppfyllda, och en frivillig resa patienten inte vill göra slutar ofta i att han kliver av på vägen. Kommer han fram väntar han i flera timmar och skickas hem sent på kvällen – och nästa gång söker han inte. Att eskalera är ett verktyg, inte ett bevis på omsorg.' },

            { text: 'Skriv en remiss till allmänpsykiatrin, märk den akut, och ge honom kopian med hem.',
              tid: 2, ok: false, princip: 'plan',
              humor: 'neutral', reaktion: 'Remissen är skriven på två minuter och ser bra ut.',
              svar: 'Så då hör dom av sig?',
              fx: { sakerhet: -16, tydlighet: -12 },
              varfor: 'Det känns som en åtgärd och är en fördröjning. En remiss är en begäran om bedömning, inte en tid: den ska läsas, prioriteras och bedömas, och ordet akut i en remiss betyder olika saker på olika håll. Under tiden har Ronny ett papper i fickan och ingenting i kalendern. Remissen ska skickas – den är bara inte det som bär kvällen.' },

            { text: 'Tidigarelägg psykologtiden till imorgon och nöj dig med det. Psykologen är den som ska göra utredningen ändå.',
              tid: 2, ok: false, princip: 'triage-f',
              humor: 'lattad', reaktion: 'Han verkar okej med det.',
              svar: 'Imorgon, ja. Det är väl bra.',
              fx: { allians: 8, sakerhet: -18, tydlighet: -8 },
              varfor: 'Det här är LESS-svaret, och det är därför det är farligt. Modellen är byggd för ärenden där ett dygn inte spelar någon roll, och för dem är den bra. Här spelar dygnet roll. En psykologtid är dessutom inte en riskbedömning – det är en behandlingsinsats som förutsätter att någon redan bedömt att patienten kan vänta till dess. Den bedömningen är din, den är gjord, och den säger något annat. Flytta tiden också. Den är bara inte svaret på frågan om ikväll.' }
          ] },

        { typ: 'val',
          humor: 'trott',
          text: 'Kan jag inte bara få nåt så jag sover? Och papperet till chefen, han har frågat.',
          fraga: 'Två saker han själv har bett om. Vad gör du med dem?',
          tips: 'Det ena kan hjälpa i natt, skjuta upp en behandling eller bli metoden. Det andra är två minuters arbete – frågan är vad det är värt just idag.',
          val: [
            { text: 'Ta ställning till sömnen i klartext, och förskriv i så fall litet och kortvarigt med begränsat uttag. Vänta med antidepressiv behandling till uppföljningen om ett par dagar. Fråga om han sjukanmält sig – och säg att intyget inte är det som brådskar.',
              tid: 3, ok: true, princip: 'grad',
              humor: 'neutral', reaktion: 'Han ser förvånad ut när du säger att papperet kan vänta.',
              svar: 'Så jag behöver inget intyg idag?',
              fx: { tydlighet: 14, underlag: 12, allians: 8, sakerhet: 6 },
              varfor: 'Tre små beslut som alla spelar roll. Sömnen: två–tre timmar per natt i tre veckor är i sig en riskförstärkare och att göra något åt den är verksamt – men mängden i handen är en del av risken, så förskriv litet, kortvarigt och med begränsat uttag, och säg varför. Att avstå helt är också ett svar, och då ska det sägas rakt, inte som "vi tar det sen". Behandlingen: att starta ett antidepressivum kan mycket väl bli rätt, men diagnosen är oklar så länge han dricker dagligen, effekten kommer först efter veckor, och de första veckorna hos en ung vuxen kräver täta kontakter. Det beslutet blir bättre om två dagar, när du vet om planen höll. Intyget: han har varit borta sedan i tisdags, arbetsgivaren betalar sjuklön de första fjorton dagarna och kan enligt sjuklönelagen som huvudregel begära läkarintyg först från och med dag åtta. Att kunna den regeln är det som låter dig rensa bordet utan att neka honom något. Fråga däremot om han sjukanmält sig – har han inte det finns ingen sjuklön att intyga för, och det märker han först om två veckor.' },

            { text: 'Starta en SSRI idag och skriv en liten mängd sömnmedel, med återbesök om en vecka.',
              tid: 3, ok: 'delvis', princip: 'evidens',
              humor: 'neutral', reaktion: 'Han tar emot recepten.',
              svar: 'Okej. Hur lång tid tar det innan det funkar?',
              fx: { allians: 8, tydlighet: 4, sakerhet: -4 },
              varfor: 'Fullt försvarbart, och många skulle göra det. Bilden talar för en depressiv episod och behandling ska starta. Det som gör det till andrahandsval idag är att den dagliga alkoholen gör både diagnosen och läkemedelseffekten svårvärderad, och att en vecka är lång tid när planen för ikväll ännu inte är prövad. En kortare första uppföljning kostar dig ingenting och gör beslutet bättre. Värt att diskutera i gruppen: startar ni antidepressivt vid första besöket när det finns suicidtankar, eller vid den första uppföljningen?' },

            { text: 'Skriv ut en förpackning zopiklon och en SSRI, och boka uppföljning om fyra veckor.',
              tid: 2, ok: false, princip: 'evidens',
              humor: 'lattad', reaktion: 'Han ser lättad ut. Det här kände han igen som hjälp.',
              svar: 'Tack. Då kanske jag får sova i alla fall.',
              fx: { allians: 10, sakerhet: -18, tydlighet: -8 },
              varfor: 'Fyra veckor är fel intervall i varje del av det här. Effekten av antidepressiv behandling kommer inte förrän efter flera veckor, och de första veckorna är de känsligaste hos en ung vuxen – han ska ses långt innan dess. Och du har just lämnat över två fulla förpackningar till en man som samma natt läste på om hur mycket som skulle behövas. Läkemedel kan vara rätt här, men mängd, uttag och nästa besök är delar av ordinationen, inte administrativa detaljer.' },

            { text: 'Ingen medicin och inget intyg idag – vi tar det när läget är utrett.',
              tid: 2, ok: false, princip: 'forvantan',
              humor: 'sluten', reaktion: 'Han tittar ner i golvet.',
              svar: 'Så jag kom hit för ingenting.',
              fx: { allians: -12, agens: -8, tydlighet: -10, sakerhet: 2 },
              varfor: 'Försiktighet utan besked är inte försiktighet, det är att skjuta upp. Två saker fattas. Sömnen är en riskfaktor du valde att inte göra något åt utan att säga varför, och ett nej som inte motiveras hörs som ett nej till honom. Och han fick inget besked om pengarna, så den oron går han hem med ovanpå allt annat – trots att svaret på just den frågan var enkelt och lugnande. Att avstå från sjukskrivning eller från en förskrivning är ett medicinskt ställningstagande som ska motiveras och dokumenteras, aldrig ett tyst nej.' }
          ] },

        { typ: 'val',
          om: { saknas: 'ambivalens-fragad' },
          humor: 'sluten',
          text: 'Han drar upp dragkedjan och reser sig. "Tack ändå."',
          fraga: 'Han är på väg ut och du vet fortfarande inte vad som håller emot. Vad gör du?',
          tips: 'Frågan blir inte lättare av att komma sent. Den blir bara obligatorisk.',
          val: [
            { text: 'Be honom sätta sig igen och fråga rakt: vad är det som gjort att du inte gjort något, och håller det ikväll också?',
              tid: 3, ok: true, princip: 'rodflagga', flagga: 'ambivalens-fragad',
              humor: 'ledsen', reaktion: 'Han står kvar en stund. Sedan sätter han sig.',
              svar: 'Mormor, väl. Hon skulle ta det jättehårt.',
              fx: { sakerhet: 14, underlag: 8, allians: -4 },
              varfor: 'Sent är oändligt mycket bättre än aldrig, och priset är litet: några minuter och att han märker att du tvekade. Utan svaret vet du inte vad planen ska byggas av, och en säkerhetsplan konstruerad av dina antaganden om vad som betyder något för honom håller inte till natten.' },

            { text: 'Ställ frågan stående, i dörren.',
              tid: 2, ok: 'delvis', princip: 'rodflagga', flagga: 'ambivalens-fragad',
              humor: 'spand', reaktion: 'Han svarar med handen på handtaget.',
              svar: 'Nej … jag vet inte. Mormor kanske. Hej då.',
              fx: { sakerhet: 6, allians: -6 },
              varfor: 'Frågan är ställd och det räknas – dörrhandtagsfrågor ger ofta besked. Men svaret du får i dörren är det korta, och du har ingenstans att ta det vidare. Att be någon sätta sig igen kostar två minuter och ändrar vad du får veta.' },

            { text: 'Låt honom gå. Skriv "inga aktuella suicidtankar framkom" i journalen.',
              tid: 1, ok: false, princip: 'signering',
              humor: 'neutral', reaktion: 'Dörren går igen. Anteckningen tar tjugo sekunder.',
              svar: '',
              fx: { sakerhet: -26, underlag: -16 },
              varfor: 'Du skriver att något inte framkom ur en fråga du aldrig ställde. Journalen är inte en sammanfattning av din känsla, den är en handling som nästa läkare fattar beslut på – och den här raden kommer att läsas som att risken bedömts och avfärdats. Det är samma sak som gör en intygsrad osann: en slutsats placerad där en observation ska stå. Skriv i stället vad du faktiskt gjorde och inte gjorde, också när det är obekvämt.' }
          ] },

        { typ: 'beslut',
          banner: 'STÄLLNINGSTAGANDE',
          fraga: 'Klockan är 14.50. Vad går Ronny härifrån med?',
          tips: 'Du kan inte förutsäga natten. Du kan minska det som går att minska och se till att någon annan än han själv håller i nästa kontakt.',
          val: [
            { text: 'En skriven plan för kvällen och en tid imorgon: mormor inne i rummet inom den ram han godkänt, tabletterna omhändertagna, överenskommet att han inte dricker ikväll, återbesök hos dig om två dagar och ett telefonsamtal imorgon förmiddag från en namngiven person – och hela riskbedömningen dokumenterad med hans egna ord.',
              ok: true, princip: 'plan', tid: 3,
              fx: { sakerhet: 18, tydlighet: 14, underlag: 12, allians: 8, agens: 8 },
              utfall: 'Mormor tar med sig sina tabletter hem och Ronny sover i hennes gästrum. Sjuksköterskan ringer 09.10 dagen efter och han svarar. Han kommer på återbesöket. Psykologtiden ligger på fredag.',
              varfor: 'Det här är vad en vårdcentral faktiskt kan göra en eftermiddag, och det räcker längre än det ser ut. Fyra ben: någon vet, medlen är borta, alkoholen är avtalad bort för just ikväll, och nästa kontakt har ett namn, ett klockslag och en ansvarig som inte är han själv. Ovanpå det står bedömningen skriven, så att den går att ompröva av nästa läkare i stället för att behöva göras om från noll. Att du inte kan förutsäga natten är inte ett skäl att låta bli – det är skälet att göra just det som går att göra. Lägg också märke till vad som inte hände: ingen tvingades någonstans, inget vårdintyg skrevs, ingen skickades till en väntsal. Det är inte en mildare variant av rätt svar. Det är rätt svar.' },

            { text: 'Skicka honom till psykiatriska akutmottagningen ändå. Hellre en gång för mycket.',
              ok: 'delvis', princip: 'rodflagga', tid: 3,
              fx: { sakerhet: 4, allians: -12, agens: -12, tydlighet: -6 },
              utfall: 'Han säger ja i rummet. Mormor kör honom. De vänder efter tjugo minuter i väntsalen och åker hem.',
              varfor: 'Ibland är det det enda rätta, och då ska det göras utan att tveka. Men hellre en gång för mycket är en princip som fungerar för den som skickar och sällan för den som skickas. Han samtycker inte på riktigt, du kan inte tvinga, och en frivillig transport patienten inte vill göra är ingen säkerhetsåtgärd – bara en överlämning som ser ut som en. Det som faktiskt skyddar honom går att göra här: färre tabletter i huset, någon som vet, en nykter kväll och en tid imorgon med ett namn på. Värt att diskutera i gruppen: var går er gräns, och vem hos er bestämmer den klockan tre på eftermiddagen?' },

            { text: 'Intyg fjorton dagar, psykologtiden ligger kvar, och han hör av sig om det blir värre.',
              ok: false, princip: 'plan', tid: 1,
              fx: { allians: 10, sakerhet: -26, tydlighet: -16 },
              utfall: 'Han går klockan 14.55 med ett intyg och en tid längre fram. Mormor får aldrig veta något. På söndagen svarar han inte i telefon.',
              varfor: 'Flödet korrekt tillämpat på en patient flödet inte är byggt för. Varje steg är rimligt för sig: triagerat, uppringt, bokat till rätt profession, intyg utfärdat. Det som saknas är att någon tog ställning till om tempot höll – och det var den enda frågan i det här besöket som bara du kunde svara på. "Hör av dig om det blir värre" flyttar dessutom bedömningen till den som är sämst rustad att göra den, ensam klockan tre på natten, efter några öl.' },

            { text: 'Skriv ett vårdintyg och begär polishandräckning, så vet du att han kommer fram.',
              ok: false, princip: 'ansvar', tid: 2,
              fx: { sakerhet: -20, allians: -20, agens: -16 },
              utfall: 'Psykiatrin bedömer att kriterierna inte är uppfyllda och han skrivs ut samma kväll. Han kommer aldrig tillbaka till er.',
              varfor: 'Det ser ut som det mest ansvarsfulla alternativet och det är det minst tillåtna. Förutsättningarna för tvångsvård är inte uppfyllda: ingen allvarlig psykisk störning i lagens mening, och han motsätter sig inte vård – han sitter i din stol och samtalar. Att intyga att kriterierna är uppfyllda när du vet att de inte är det är inte en försiktighetsåtgärd, det är ett osant intygande. Priset betalas av en 24-åring som hämtas av polis efter att ha berättat sanningen för en läkare. Nästa gång berättar han inte.' }
          ] }
      ]
    }
  ];

})(window);
