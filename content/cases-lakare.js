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
      titel: 'Granskning: psykologutredning',
      patient: 'anna',
      lage: 'granskning',
      minuter: 18,
      kampanj: 'anna',
      svarighet: 2,
      principer: ['signering', 'bedda-d1', 'dfa-aktivitet', 'rodflagga', 'grad'],
      journal: [
        ['Ärende', 'Anna Ek, 34 år. Försäkringsmedicinsk utredning av leg. psykolog Karin Lund.'],
        ['Diagnos', 'F41.1 Generaliserat ångestsyndrom (psykologens bedömning)'],
        ['Funktion – psykologens iakttagelse', 'Uttalad autonom reaktion när arbetsplatsen kommer på tal. Tappar tråden två gånger under besöket.'],
        ['Funktion – Annas uppgift', 'Vaknar 03–04 och somnar inte om. Sömnen bruten sedan i maj.'],
        ['Aktivitet – Annas uppgift, stämd mot arbetsbeskrivningen', 'Klarar textproduktion hemifrån. Klarar ej närvaro på arbetsplatsen eller möten.'],
        ['Risk', 'Suicidfrågan ställd, besvarad nekande. Inga tecken på svår depression. Ingen missbruksanamnes.'],
        ['Somatiskt', 'Inget noterat. Inga prover tagna i ärendet. Ingen läkare har träffat Anna.'],
        ['Åtgärd', 'KBT med exponering påbörjad. Uppföljning inbokad om en vecka.']
      ],
      intro: [
        'En lucka mellan två besök. Psykologens utredning ligger uppe på skärmen.',
        'Det är ditt namn som ska stå under beslutet.'
      ],
      introExtra: [
        { nyckel: 'anna-forslag', varde: 'ingen',
          text: ['Förslaget lyder: ingen sjukskrivning, behandling påbörjad, anpassad återgång, uppföljning om en vecka.'] },
        { nyckel: 'anna-forslag', varde: '25',
          text: ['Förslaget lyder: 25 procent i tre veckor som brygga, med behandling, upptrappningsplan och slutdatum.'] },
        { nyckel: 'anna-forslag', varde: '100',
          text: ['Förslaget lyder: 100 procent i fyra veckor för återhämtning. Ingen behandling är påbörjad.'] },
        { nyckel: 'anna-forslag', varde: 'inget',
          text: ['Utredningen saknar förslag. Psykologen skriver att läkaren får avgöra graden.'] }
      ],

      beats: [

        { typ: 'replik', talare: { name: 'PSYKOLOG KARIN', kind: 'you' }, humor: 'neutral',
          text: 'Jag har lagt in utredningen. Anna vet att du tar ställning och att hon får besked idag. Hon har redan gjort sitt första beteendeexperiment.' },

        { typ: 'flera',
          banner: 'GRANSKNING',
          fraga: 'Vad kontrollerar du i underlaget innan du tar ställning?',
          antal: 3,
          tidPer: 2,
          tips: 'Du ska kunna försvara det här inför Försäkringskassan, inför patienten och inför dig själv om ett år.',
          val: [
            { text: 'Att DFA-kedjan går att följa och att aktivitetsbegränsningen är kopplad till faktiska arbetsuppgifter',
              ratt: true, princip: 'bedda-d1', fx: { underlag: 12 },
              varfor: 'Kedjan är kärnan. Utan en aktivitetsbegränsning i arbetsuppgifter är intyget inte bedömbart, hur välskrivet det än är i övrigt.' },
            { text: 'Att källan till varje uppgift framgår: eget iakttagande, patientens uppgift eller annan handling',
              ratt: true, princip: 'signering', fx: { underlag: 10, sakerhet: 8 },
              varfor: 'Du signerar för innehållet. Då måste det framgå vad som är observerat och vad som är berättat – annars kan du inte stå för det.' },
            { text: 'Att risken är bedömd – och att den somatiska differentialdiagnostiken är gjord av någon, för psykologen kan inte göra den',
              ratt: true, princip: 'rodflagga', fx: { sakerhet: 14 },
              varfor: 'Suicidrisk och depressionsgrad ligger inom psykologens kompetens och står bedömda. Tyreoidearubbning, anemi, B12-brist, sömnapné och läkemedelsbiverkan gör de inte. På den raden står "inget noterat" – då är den din, och den går inte att returnera bort till någon annan.' },
            { text: 'Att patienten är nöjd med förslaget',
              ratt: false, princip: 'signering', fx: { underlag: -8 },
              varfor: 'Patientens uppfattning är viktig att känna till och att bemöta – men den är inte ett kriterium för om ett intyg är korrekt.' },
            { text: 'Att förslaget stämmer med hur du själv brukar göra',
              ratt: false, princip: 'signering', fx: { underlag: -6 },
              varfor: 'Vanan är inte en granskningspunkt. Frågan är om underlaget håller, inte om det liknar ditt eget.' },
            { text: 'Att sjukskrivningstiden håller sig inom beslutsstödets rekommendation, annars måste den kortas',
              ratt: false, princip: 'beslutsstod', fx: { underlag: -6 },
              varfor: 'Beslutsstödet är vägledning, inte ett tak. Både kortare och längre tid kan vara rätt – det som krävs är att avvikelsen motiveras.' }
          ] },

        { typ: 'kontroll',
          banner: 'BEDÖMNING',
          fraga: 'Underlaget anger att Anna klarar textproduktion hemifrån men inte närvaro på arbetsplatsen. Vad betyder det försäkringsmedicinskt?',
          tidFel: 2,
          princip: 'dfa-aktivitet',
          val: [
            { text: 'Arbetsförmågan är delvis bevarad – helt nedsatt arbetsförmåga är svår att motivera', ratt: true },
            { text: 'Att hon är helt arbetsoförmögen eftersom hon inte kan vara på plats', ratt: false },
            { text: 'Att arbetsgivaren måste erbjuda hemarbete', ratt: false },
            { text: 'Att diagnosen är felaktig', ratt: false }
          ],
          forklaring: 'Kvarvarande förmåga i en del av arbetsuppgifterna talar emot heltidssjukskrivning och för anpassning eller partiell grad. Vad arbetsgivaren ska erbjuda är däremot inte något du beslutar om i intyget – du beskriver förmåga och begränsning, arbetsgivaren gör sin bedömning.' },

        { typ: 'val',
          fraga: 'Du har aldrig träffat Anna. Vad gör du innan du tar ställning?',
          tips: 'Huvudregeln i intygsföreskriften är att ett intyg utfärdas efter en undersökning av patienten. Frågan är inte om du ska ha egen kontakt, utan hur stor den behöver vara.',
          val: [
            { text: 'Ringa Anna. Kort egen anamnes, egen riskfråga, ta hand om det somatiska – och ge beskedet direkt.',
              tid: 5, ok: true, princip: 'signering',
              humor: 'neutral', reaktion: 'Anna svarar efter två signaler.',
              svar: 'Anna: "Så du har läst allt? Och du har egna frågor också?"',
              fx: { tydlighet: 12, allians: 8, sakerhet: 10, underlag: 8 },
              varfor: 'Kontaktsättet är inte reglerat – telefon räknas som undersökning om du bedömer att det går att göra patientsäkert, och sättet ska anges i intyget. Fem minuter ger dig en egen iakttagelse att stå för, täpper till den tomma somatiska raden och låter dig ge beskedet själv. Det är billigare än ett nybesök och det är det som gör signaturen till din.' },
            { text: 'Boka in ett eget nybesök nästa vecka och göra om bedömningen.',
              tid: 2, ok: 'delvis', princip: 'signering',
              humor: 'neutral', reaktion: 'Kalendern öppnas. Första lediga tid är om nio dagar.',
              svar: 'Psykolog Karin: "Ska jag säga till Anna att det dröjer?"',
              fx: { tydlighet: -10, underlag: -4 },
              varfor: 'Rätt instinkt, fel storlek. Att du behöver egen kontakt stämmer – men att göra om en fullständig utredning kostar Anna nio dagar och lär teamet att deras arbete ändå inte duger. Spara det egna besöket till det som inte går att reda ut på telefon: oklar diagnos, misstanke om något allvarligt, eller ett status du måste se.' },
            { text: 'Signera direkt på underlaget. Det är fullständigt, och psykologen har ju träffat henne.',
              tid: 1, ok: false, princip: 'signering',
              humor: 'neutral', reaktion: 'Beslutet är fattat på en minut. Anna vet inget.',
              svar: 'Psykolog Karin: "Vad smidigt. Då kör vi så nästa gång också."',
              fx: { allians: 4, tydlighet: -10, underlag: -8, sakerhet: -12 },
              varfor: 'Det känns effektivt och kollegan blir nöjd – det är därför det är den farliga knappen. Men du intygar förhållanden du inte har egen kännedom om, i ett förstagångsintyg där ingen läkare har hört patientens röst och den somatiska raden är tom. Det är precis den situation huvudregeln om undersökning finns för. LESS flyttar utredningen, inte kravet på att du ska ha något eget att stå för.' }
          ] },

        { typ: 'beslut',
          banner: 'STÄLLNINGSTAGANDE',
          fraga: 'Vad gör du med utredningen?',
          val: [
            { text: 'Ta ställning enligt förslaget och signera det',
              okOm: { nyckel: 'anna-forslag', varden: { ingen: true, '25': true, '100': false, inget: false }, standard: true },
              princip: 'signering', tid: 2,
              kampanj: { nyckel: 'anna-beslut', varde: 'signerat' },
              fx: { underlag: 10, tydlighet: 8 },
              utfall: 'Beslutet är fattat samma dag som utredningen gjordes.',
              varfor: 'När kedjan håller, risken är bedömd och förslaget är motiverat är det rätt att gå på det. Patienten får både behandling och besked utan att vänta på en läkartid. Skriv samtidigt din egen bedömning i journalen, med vad du grundar den på och vad du själv har hört – utan den raden finns inget att försvara om ett år. Blir ställningstagandet att inte sjukskriva är det just det som ska dokumenteras: skälet, vad som gäller i stället och när det omprövas. Ett nej som inte står i journalen går varken att ompröva eller att stå för.',
              varforFel: 'Underlaget bakom förslaget håller inte. Att signera för att någon annan skrivit det är precis det som gör delegerad utredning riskabel – ditt namn står under beslutet, oavsett vem som formulerade det.' },
            { text: 'Signera men justera grad eller längd efter kort dialog med psykologen',
              ok: 'delvis', princip: 'signering', tid: 3,
              kampanj: { nyckel: 'anna-beslut', varde: 'justerat' },
              fx: { underlag: 8, tydlighet: 6 },
              utfall: 'Ni landar i en gemensam bedömning och Anna får besked samma dag.',
              varfor: 'Alltid försvarbart. Dialogen kostar några minuter och gör att kollegan lär sig något inför nästa utredning – men se till att justeringen och skälet dokumenteras.' },
            { text: 'Returnera för komplettering',
              okOm: { nyckel: 'anna-forslag', varden: { ingen: false, '25': false, '100': true, inget: true }, standard: false },
              princip: 'signering', tid: 2,
              kampanj: { nyckel: 'anna-beslut', varde: 'returnerat' },
              fx: { underlag: 6 },
              utfall: 'Utredningen går tillbaka med en tydlig fråga. Anna får besked två dagar senare.',
              varfor: 'Rätt när något väsentligt saknas eller när förslaget inte följer av underlaget. Skriv då exakt vad som ska kompletteras – ett returnerat underlag utan fråga är bara en fördröjning.',
              varforFel: 'Underlaget innehåller allt du behöver, och förslaget följer av det. En retur här kostar patienten dagar utan att tillföra något, och lär kollegan att utredningar ändå inte duger.' },
            { text: 'Skriva ett eget intyg utan att använda utredningen',
              ok: false, princip: 'signering', tid: 3,
              kampanj: { nyckel: 'anna-beslut', varde: 'eget' },
              fx: { underlag: -10, tydlighet: -8 },
              utfall: 'Du skriver ett intyg med tunnare underlag än det som redan låg framför dig.',
              varfor: 'Du har ansvaret men inte monopolet på uppgifter. Att gå förbi en fullständig utredning ger ett sämre intyg och signalerar till hela teamet att arbetet var meningslöst.' }
          ] }
      ]
    },

    /* ================================================================
       BENGT – kampanjärende 2, steg 3.
       ================================================================ */
    {
      id: 'lak-bengt',
      roll: 'lakare',
      titel: 'Granskning: fysioterapeututredning',
      patient: 'bengt',
      lage: 'granskning',
      minuter: 9,
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
      intro: ['Fysioterapeutens utredning ligger i din inkorg, tillsammans med en fråga.'],
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
          text: 'En fråga innan du signerar: Bengt undrar vad som gäller om chefen inte kan ta bort lyften. Han har fått med sig en lista på moment.' },

        { typ: 'kontroll',
          banner: 'RÖDA FLAGGOR',
          fraga: 'Vad måste finnas i underlaget innan du skriver ett ryggintyg på en 52-åring du aldrig har träffat?',
          tidFel: 2,
          princip: 'rodflagga',
          val: [
            { text: 'En tagen och negativ anamnes på röda flaggor: nattlig smärta som väcker, viktnedgång, feber, tidigare cancer, blås- och tarmpåverkan', ratt: true },
            { text: 'Att fysioterapeuten har testat neurologin – det räcker', ratt: false },
            { text: 'Att besvären har varat kortare än sex veckor', ratt: false },
            { text: 'Att slätröntgen av ländryggen är gjord', ratt: false }
          ],
          forklaring: 'Sara har testat reflexer, kraft och känsel. Det säger något om nervrötterna men ingenting om malignitet, infektion eller cauda equina – de frågorna är anamnestiska, och på den raden står "ej dokumenterat". Duration är ingen röd flagga, och slätröntgen vid lumbago ändrar varken handläggning eller intyg. Att ringa Sara eller Bengt och få raden ifylld tar två minuter. Röda flaggor går alltid före flödet, också när flödet fungerar.' },

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
          fraga: 'Vad blir ditt beslut?',
          val: [
            { text: 'Signera partiell sjukskrivning i den grad som svarar mot momenten, och notera att full förmåga finns om anpassning erbjuds',
              ok: true, princip: 'grad', tid: 2,
              kampanj: { nyckel: 'bengt-beslut', varde: 'partiellt' },
              fx: { underlag: 12, tydlighet: 10 },
              utfall: 'Bengt får besked samma dag. Arbetsgivaren erbjuder truckpass och sjukskrivningen behöver aldrig användas fullt ut.',
              varfor: 'Intyget beskriver verkligheten: en begränsning i vissa moment, bevarad förmåga i andra. Det ger arbetsgivaren något att arbeta med och Försäkringskassan något att bedöma.' },
            { text: 'Signera 100 procent i fyra veckor',
              ok: false, princip: 'grad', tid: 2,
              kampanj: { nyckel: 'bengt-beslut', varde: '100' },
              fx: { underlag: -14, agens: -12 },
              utfall: 'Bengt är hemma i fyra veckor. Ryggen är bättre men konditionen sämre, och han återvänder till exakt samma pallar.',
              varfor: 'Underlaget säger att han klarar truck och plock. Att ändå skriva heltid är att signera något som motsägs av handlingen du själv läst.' },
            { text: 'Returnera för komplettering',
              ok: false, princip: 'signering', tid: 2,
              kampanj: { nyckel: 'bengt-beslut', varde: 'returnerat' },
              fx: { tydlighet: -8 },
              utfall: 'Fysioterapeuten skickar tillbaka samma uppgifter, formulerade på nytt. Fyra dagar har gått.',
              varfor: 'Underlaget innehåller fynd, aktivitetsprofil och plan. En retur utan tydlig brist kostar patienten dagar och kollegan förtroende.' }
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
