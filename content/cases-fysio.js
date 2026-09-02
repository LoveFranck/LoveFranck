/* cases-fysio.js – Fysioterapeutens försäkringsmedicinska utredning
   ⚠ EJ KLINISKT GRANSKAT – pedagogiskt utkast, ska granskas av verksamheten. */
(function (global) {
  'use strict';
  var LESS = global.LESS;

  LESS.fall.fysioterapeut = [

    /* ================================================================
       BENGT – kampanjärende 2, steg 2.
       ================================================================ */
    {
      id: 'fys-bengt',
      roll: 'fysioterapeut',
      titel: 'Nybesök, fredag 08.30',
      patient: 'bengt',
      lage: 'rum',
      minuter: 31,
      kampanj: 'bengt',
      svarighet: 2,
      principer: ['dfa-funktion', 'dfa-aktivitet', 'evidens', 'grad', 'ansvar'],
      journal: [
        ['Remiss', 'Triagerad av sjuksköterska. Ländryggssmärta, sjukskrivningsfråga.'],
        ['Röda flaggor', 'Efterfrågade och negativa'],
        ['Duration', '9 dagar. Två tidigare episoder, självläkande.'],
        ['Arbete', 'Lager. Truck går. Plocklistor går. Pallyft och djupa böjningar går ej.'],
        ['Övrigt', 'Rökare. Inga läkemedel.']
      ],
      intro: [
        'Fredag 08.30. Bengt kommer in stelt men går obehindrat.',
        'Han sätter sig långsamt och håller handen i ryggslutet.'
      ],
      introExtra: [
        { nyckel: 'bengt-triage', varde: 'lakare',
          text: ['Han har redan varit hos läkare och har fyra veckors heltidssjukskrivning i fickan.',
                 'Han undrar varför han också ska träffa dig.'] }
      ],

      beats: [

        { typ: 'replik', humor: 'smarta',
          text: 'Jag ska säga som det är: jag är här för intygets skull. Ryggen läker som den brukar, jag behöver bara vara borta tills det gett med sig.' },

        { typ: 'val',
          fraga: 'Bengt har satt agendan. Vad gör du?',
          tips: 'Han har rätt i att ryggen brukar läka. Frågan är vad som händer med honom under tiden – och vad som gör att den här gången blir den fjärde och inte den sista.',
          val: [
            { text: 'Du känner din rygg bättre än jag gör. Låt oss titta på vad som faktiskt går och inte går just nu, så kan jag skriva ett underlag som stämmer – och kanske hitta något som gör att det inte kommer tillbaka en fjärde gång.',
              tid: 3, ok: true, princip: 'bedda-e',
              humor: 'neutral', reaktion: 'Bengt tittar upp.',
              svar: 'En fjärde gång... det har jag väl tänkt på. Kör igång då.',
              fx: { allians: 12, tydlighet: 8, agens: 6 },
              varfor: 'Du bekräftar hans erfarenhet, kopplar utredningen till hans egen nytta och byter fokus från intyg till framtid – utan att ge upp din bedömning.' },
            { text: 'Jag skriver inga intyg. Vi kör igång med undersökningen.',
              tid: 2, ok: 'delvis', princip: 'forvantan',
              humor: 'spand', reaktion: 'Bengt suckar hörbart.',
              svar: 'Va? Vad gör jag här då?',
              fx: { allians: -10, tydlighet: 4 },
              varfor: 'Halvsant och därför förvirrande. Du gör faktiskt den försäkringsmedicinska utredningen som läkaren tar ställning till – säg det, annars tror han att han skickats runt i onödan.' },
            { text: 'Fyra veckor är för mycket, det säger forskningen.',
              tid: 2, ok: false, princip: 'bedda-e',
              humor: 'spand', reaktion: 'Bengt korsar armarna.',
              svar: 'Forskningen har inte lyft mina pallar.',
              fx: { allians: -16, agens: -6 },
              varfor: 'Du inledde med en förhandling om längd innan du undersökt något. Nu försvarar han sin position i stället för att beskriva sin rygg.' }
          ] },

        { typ: 'val',
          fraga: 'Hur lägger du upp bedömningen?',
          tips: 'Du behöver dokumenterbara fynd som håller i ett intyg – och du behöver veta exakt vilka arbetsmoment som fallerar.',
          val: [
            { text: 'Aktiv rörelseundersökning, neurologisk screening, och sedan gå igenom arbetsdagens moment ett i taget.',
              tid: 8, ok: true, princip: 'dfa-funktion',
              humor: 'neutral', reaktion: 'Bengt gör rörelserna, morrar vid framåtböjning.',
              svar: 'Framåt går inte. Att vrida går. Trucken skulle jag klara idag om jag slapp kliva ur hela tiden.',
              fx: { underlag: 20, allians: 6 },
              varfor: 'Nu har du både funktionsfynd att skriva ner och en aktivitetsprofil kopplad till hans faktiska arbetsuppgifter. Det är den kombinationen som gör ett intyg hållbart.' },
            { text: 'Beställ röntgen först och avvakta med bedömningen.',
              tid: 4, ok: false, princip: 'evidens',
              humor: 'neutral', reaktion: 'Bengt: "Bra, då får man se vad det är."',
              svar: 'Äntligen någon som tar det på allvar.',
              fx: { underlag: -12, agens: -10 },
              varfor: 'Vid ospecifik ryggsmärta utan röda flaggor tillför bilddiagnostik sällan något och riskerar att hitta åldersförändringar som ökar oro och undvikande. Dessutom står ärendet still i två veckor.' },
            { text: 'Fråga hur ont han har och utgå från det.',
              tid: 3, ok: false, princip: 'dfa-aktivitet',
              humor: 'smarta', reaktion: 'Bengt: "Åtta. Kanske nio på morgonen."',
              svar: 'Åtta. Nio på morgonen.',
              fx: { underlag: -6 },
              varfor: 'Smärtskattning är inte en funktionsnedsättning och inte en aktivitetsbegränsning. Den kan inte bära ett intyg och styr inte graden.' }
          ] },

        { typ: 'kontroll',
          banner: 'FAKTAKONTROLL',
          fraga: 'Vad är förstahandsbehandling vid ospecifik ländryggssmärta utan röda flaggor?',
          tidFel: 2,
          princip: 'evidens',
          val: [
            { text: 'Fortsatt aktivitet och successivt ökad belastning, med information om godartat förlopp', ratt: true },
            { text: 'Sängläge tills smärtan gått över', ratt: false },
            { text: 'Avlastning från all fysisk aktivitet i fyra veckor', ratt: false },
            { text: 'Vila i väntan på magnetkamera', ratt: false }
          ],
          forklaring: 'Rörelse och gradvis belastning har bättre effekt än vila, och information om att förloppet oftast är godartat minskar rädsla och undvikande. Det betyder inte "jobba på som vanligt" – det betyder att belastningen ska anpassas, inte tas bort.' },

        { typ: 'val',
          fraga: 'Bengt: "Så jag ska jobba med ont i ryggen? Det låter som att spara in på min hälsa."',
          tips: 'Han hör "kör på". Du menar "belasta annorlunda". Skillnaden måste bli hans, inte din.',
          val: [
            { text: 'Nej – du ska inte lyfta pallar med den här ryggen. Men trucken och plocklistorna kan du köra, och de håller ryggen igång medan den läker. Det är skillnad på att skona ett moment och att stänga av hela kroppen.',
              tid: 4, ok: true, princip: 'evidens',
              humor: 'neutral', reaktion: 'Bengt nickar långsamt.',
              svar: 'Alltså att jag skulle vara på jobbet men slippa lyften? Det har ingen frågat chefen om.',
              fx: { agens: 16, tydlighet: 12, allians: 8 },
              varfor: 'Du skiljer på moment och på arbete i stort. Det gör alternativet konkret och trovärdigt, och det öppnar för anpassning i stället för frånvaro.' },
            { text: 'Smärta är inte farligt, du kan jobba som vanligt.',
              tid: 2, ok: false, princip: 'evidens',
              humor: 'spand', reaktion: 'Bengt: "Som vanligt?"',
              svar: 'Ska jag lyfta tjugofem kilo med det här? Nej tack.',
              fx: { allians: -14, agens: -6 },
              varfor: 'Halvsanning som gör dig otrovärdig. "Smärta är inte farligt" gäller inte som instruktion till någon vars arbete är tunga lyft. Anpassa belastningen, ta inte bort principen om skydd.' },
            { text: 'Du har rätt, vi tar fyra veckor så får det läka i lugn och ro.',
              tid: 2, ok: false, princip: 'grad',
              humor: 'lattad', reaktion: 'Bengt ser nöjd ut.',
              svar: 'Bra. Då säger jag det till chefen.',
              fx: { agens: -16, underlag: -10 },
              varfor: 'Fyra veckors fullständig frånvaro utan träning ger stelare rygg, sämre kondition och en tredje episod som blir en fjärde. Du valde det bekväma svaret i rummet.' }
          ] },

        { typ: 'ordna',
          banner: 'DFA-KEDJAN',
          fraga: 'Sortera in Bengts uppgifter i kedjan.',
          tidFel: 2,
          princip: 'bedda-d1',
          delar: [
            { text: 'M54.5 Lumbago', etikett: 'DIAGNOS' },
            { text: 'Nedsatt flexion i ländrygg (fingertopp–golv 45 cm), smärtinhibition vid lyft, negativ neurologi', etikett: 'FUNKTIONSNEDSÄTTNING' },
            { text: 'Kan ej utföra pallyft 15–25 kg eller upprepad framåtböjning; klarar truckkörning och plockning', etikett: 'AKTIVITETSBEGRÄNSNING' }
          ],
          forklaring: 'Lägg märke till att aktivitetsraden också säger vad Bengt KAN. Det är den uppgiften som gör deltid och anpassning möjlig att bedöma – utan den läser Försäkringskassan bara "kan inte arbeta".' },

        { typ: 'flera',
          banner: 'UTREDNINGEN',
          fraga: 'Vilka tre uppgifter ska med i underlaget till läkaren?',
          antal: 3,
          tidPer: 2,
          tips: 'Fynd, funktion i arbetsmoment och plan. Inget om vad arbetsgivaren borde tycka.',
          val: [
            { text: 'Fingertopp–golv 45 cm, smärta vid flexion, ingen kraftnedsättning, negativ Lasègue. Undersökt av mig 2024-xx-xx.',
              ratt: true, princip: 'dfa-funktion', fx: { underlag: 12 },
              varfor: 'Objektiva fynd med källa och datum. Detta är vad läkaren behöver för att kunna stå bakom intyget.' },
            { text: 'Kan ej utföra lyft över 10 kg eller upprepad framåtböjning. Kan köra truck, plocka och utföra administrativa moment.',
              ratt: true, princip: 'dfa-aktivitet', fx: { underlag: 14 },
              varfor: 'Aktivitetsbegränsning och kvarvarande förmåga, båda i arbetsmoment. Det är den formuleringen som gör partiell sjukskrivning eller anpassning möjlig.' },
            { text: 'Åtgärd: individuellt anpassad träning påbörjad idag, progression enligt plan. Uppföljning om 10 dagar med förnyad bedömning av arbetsmoment.',
              ratt: true, princip: 'plan', fx: { underlag: 10, tydlighet: 8 },
              varfor: 'Behandlingen har startat och det finns ett datum då förmågan ska omprövas. Ett intyg utan omprövningsdatum blir en förlängningsautomat.' },
            { text: 'Arbetsgivaren bör omplacera patienten permanent.',
              ratt: false, princip: 'ansvar', fx: { underlag: -12 },
              varfor: 'Du beskriver funktion och begränsningar. Vad arbetsgivaren ska göra åt det är arbetsgivarens bedömning – vården ska inte lägga sig i arbetsrättsliga beslut i ett intyg.' },
            { text: 'Patienten är rökare och sköter inte sin hälsa.',
              ratt: false, princip: 'signering', fx: { underlag: -14, allians: -10 },
              varfor: 'Värderande, ovidkommande för aktivitetsbegränsningen och skadligt för förtroendet. Rökning kan nämnas som riskfaktor i behandlingsplanen – inte som ett omdöme.' },
            { text: 'Smärta VAS 8 av 10.',
              ratt: false, princip: 'dfa-aktivitet', fx: { underlag: -4 },
              varfor: 'Får gärna finnas med som komplement, men bär ingenting på egen hand. Smärtnivå är inte en aktivitetsbegränsning.' }
          ] },

        { typ: 'val',
          fraga: 'Bengt: "Ska du ringa min chef och fixa det där med anpassningen?"',
          tips: 'Vem äger kontakten med arbetsgivaren? Och vad krävs innan vården ringer någon?',
          val: [
            { text: 'Det är du som pratar med din chef – du känner ju både honom och jobbet. Jag skriver ner exakt vilka moment som inte går, så har du något konkret att komma med. Och behöver du stöd i det finns vår rehabkoordinator.',
              tid: 3, ok: true, princip: 'ansvar',
              humor: 'neutral', reaktion: 'Bengt rätar på sig lite.',
              svar: 'Med en lapp på vad jag klarar? Då kan jag ta det på måndagsmötet.',
              fx: { agens: 18, tydlighet: 10, allians: 6 },
              varfor: 'Du stöttar utan att ta över. Bengt behåller ansvaret och relationen till sin arbetsgivare, och får ett verktyg som gör samtalet möjligt.' },
            { text: 'Ja, jag ringer honom direkt efter besöket.',
              tid: 2, ok: false, princip: 'samtycke',
              humor: 'lattad', reaktion: 'Bengt: "Skönt, då slipper jag."',
              svar: 'Skönt. Jag är inte så bra på sånt.',
              fx: { agens: -14, sakerhet: -12, tydlighet: -6 },
              varfor: 'Två fel i ett. Du tar över Bengts ansvar, och du gör det utan dokumenterat samtycke. Samtycke krävs innan vården kontaktar arbetsgivare – och även med samtycke är övertagandet sällan en tjänst.' },
            { text: 'Nej, det där lägger vi oss inte i.',
              tid: 1, ok: false, princip: 'bedda-d2',
              humor: 'spand', reaktion: 'Bengt rycker på axlarna.',
              svar: 'Okej. Då blir det väl som det blir.',
              fx: { agens: -8, tydlighet: -8 },
              varfor: 'Rätt att inte ta över – fel att inte stötta alls. Utan konkret beskrivning av begränsningarna har Bengt inget att förhandla med, och anpassningen blir aldrig av.' }
          ] },

        { typ: 'beslut',
          banner: 'FÖRSLAG TILL LÄKARE',
          fraga: 'Vad rekommenderar du?',
          tips: 'Han klarar delar av arbetet. Vad är minsta åtgärd som skyddar ryggen utan att stänga av hela arbetsförmågan?',
          val: [
            { text: 'Anpassade arbetsuppgifter i första hand (truck och plock, inga lyft). Om arbetsgivaren inte kan anpassa: 50 % i 2 veckor. Träning startad, uppföljning om 10 dagar.',
              ok: true, princip: 'grad', tid: 2,
              kampanj: { nyckel: 'bengt-forslag', varde: 'anpassning' },
              fx: { underlag: 14, agens: 10 },
              utfall: 'Underlaget går till läkaren. Bengt har med sig en lista på moment att visa sin chef.',
              varfor: 'Minsta verksamma åtgärd. Ryggen skyddas där den behöver skyddas, arbetsförmågan används där den finns, och intyget beskriver båda delarna så att Försäkringskassan kan följa resonemanget.' },
            { text: '50 % i 2 veckor med träning och uppföljning.',
              ok: 'delvis', princip: 'grad', tid: 2,
              kampanj: { nyckel: 'bengt-forslag', varde: '50' },
              fx: { underlag: 8 },
              utfall: 'Läkaren signerar utan invändning.',
              varfor: 'Fullt försvarbart och långt bättre än heltid. Det som saknas är att anpassningsspåret prövas först – ibland behövs ingen sjukskrivning alls om rätt moment kan bytas ut.' },
            { text: '100 % i 4 veckor, som förra gången.',
              ok: false, princip: 'evidens', tid: 2,
              kampanj: { nyckel: 'bengt-forslag', varde: '100' },
              fx: { underlag: -14, agens: -12 },
              utfall: 'Underlaget går vidare med samma innehåll som för fyra år sedan.',
              varfor: 'Att upprepa en åtgärd som redan gett återfall två gånger är inte en bedömning, det är en rutin. Fyra veckors total frånvaro motsägs dessutom av att han klarar truck och plock.' },
            { text: 'Ingen sjukskrivning alls – ryggen mår bäst av arbete.',
              ok: false, princip: 'grad', tid: 2,
              kampanj: { nyckel: 'bengt-forslag', varde: 'ingen' },
              fx: { sakerhet: -12, allians: -10 },
              utfall: 'Bengt går tillbaka till pallyften och är hemma igen efter tre dagar.',
              varfor: 'Detta är LESS-modellen missförstådd. Om arbetsgivaren inte kan ta bort lyften finns en reell aktivitetsbegränsning i det egna arbetet, och då är partiell sjukskrivning rätt åtgärd – inte en eftergift.' }
          ] }
      ]
    },

    /* ================================================================
       FARID – axelsmärta. Endast övningsläge.
       ================================================================ */
    {
      id: 'fys-farid',
      roll: 'fysioterapeut',
      titel: 'Nybesök, axelbesvär',
      patient: 'farid',
      lage: 'rum',
      minuter: 15,
      svarighet: 3,
      endastDrill: true,
      principer: ['evidens', 'dfa-aktivitet', 'grad', 'hjalpmedel'],
      journal: [
        ['Kontaktorsak', 'Höger axel, 5 månaders duration'],
        ['Arbete', 'Distributionsförare. Paket över axelhöjd, 60–80 stopp/dag.'],
        ['Övrigt', 'Diabetes typ 2. Icke rökare.'],
        ['Röda flaggor', 'Efterfrågade och negativa']
      ],
      intro: ['Farid håller armen tätt intill kroppen när han sätter sig.'],

      beats: [
        { typ: 'replik', humor: 'smarta',
          text: 'Jag har haft ont i fem månader. Jag behöver en magnetkamera och sen operation. Fram till dess kan jag inte jobba, det är omöjligt.' },

        { typ: 'val',
          fraga: 'Farid kommer med en färdig behandlingsplan. Vad gör du?',
          tips: 'Han har levt med det här i fem månader. Ta hans slutsats på allvar innan du ersätter den.',
          val: [
            { text: 'Fem månader är lång tid att ha ont varje arbetsdag. Låt mig undersöka axeln ordentligt, så går vi igenom vad som faktiskt hjälper vid den här sortens besvär.',
              tid: 3, ok: true, princip: 'bedda-e',
              humor: 'neutral', reaktion: 'Farid släpper axeln något.',
              svar: 'Okej. Men jag har läst att det är en avsliten sena.',
              fx: { allians: 12, underlag: 4 },
              varfor: 'Bekräftelse av durationen, sedan mandat att undersöka. Du varken avfärdar eller bekräftar hans hypotes i förväg.' },
            { text: 'Magnetkamera behövs inte, det visar bara åldersförändringar.',
              tid: 2, ok: false, princip: 'bedda-e',
              humor: 'spand', reaktion: 'Farid höjer rösten.',
              svar: 'Så jag inbillar mig? Fem månader!',
              fx: { allians: -16 },
              varfor: 'Innehållet är oftast korrekt, men som första replik läses det som ett avfärdande. Nu behöver du lägga tid på att reparera i stället för att undersöka.' },
            { text: 'Skriva remiss för magnetkamera och sjukskriva i väntan på svar.',
              tid: 2, ok: false, princip: 'evidens',
              humor: 'lattad', reaktion: 'Farid ser nöjd ut.',
              svar: 'Tack. Äntligen.',
              fx: { agens: -14, underlag: -12 },
              varfor: 'Sjukskrivning i väntan på en undersökning som sällan ändrar behandlingen. Väntetiden blir behandlingstid som går förlorad, och axeln blir stelare.' }
          ] },

        { typ: 'kontroll',
          banner: 'FAKTAKONTROLL',
          fraga: 'Vad är förstahandsbehandling vid långvarig subakromiell axelsmärta utan trauma?',
          tidFel: 2,
          princip: 'evidens',
          val: [
            { text: 'Strukturerad, progressiv träning under handledning', ratt: true },
            { text: 'Immobilisering och vila tills smärtan upphör', ratt: false },
            { text: 'Kirurgi', ratt: false },
            { text: 'Sjukskrivning tills bilddiagnostik utförts', ratt: false }
          ],
          forklaring: 'Progressiv träning är förstahandsval och ger i studier likvärdiga resultat som kirurgi vid den här typen av besvär. Immobilisering försämrar. Vid diabetes är dessutom risken för stelhet i axeln förhöjd – ytterligare ett skäl att hålla den i rörelse.' },

        { typ: 'val',
          fraga: 'Vad gör du med arbetssituationen?',
          tips: 'Det är höjden över axelhöjd som är problemet, inte arbetet i sig.',
          val: [
            { text: 'Kartlägg vilka moment som gör ont: lyfthöjd, vikt, repetitioner. Fråga om paketen kan hanteras lägre, om rutten kan ändras eller om hjälpmedel finns.',
              tid: 6, ok: true, princip: 'hjalpmedel',
              humor: 'neutral', reaktion: 'Farid räknar på fingrarna.',
              svar: 'Det är hyllan över huvudhöjd i bilen. De tunga paketen ligger alltid överst. Det skulle nog gå att lasta om.',
              fx: { underlag: 18, agens: 14 },
              varfor: 'En omlastning av bilen kan vara skillnaden mellan sjukskrivning och arbete. Aktiviteten och miljön går ofta att ändra långt innan personen behöver tas bort från arbetet.' },
            { text: 'Konstatera att arbetet är olämpligt och rekommendera omskolning.',
              tid: 3, ok: false, princip: 'ansvar',
              humor: 'orolig', reaktion: 'Farid bleknar.',
              svar: 'Omskolning? Jag är femtioåtta. Vem anställer mig?',
              fx: { agens: -18, allians: -10 },
              varfor: 'Ett stort livsbeslut föreslaget efter tio minuter, utan att enklare anpassningar prövats. Det skapar ångest och stänger dörrar i stället för att öppna dem.' },
            { text: 'Sjukskriva 100 % i 8 veckor så att axeln får läka.',
              tid: 2, ok: false, princip: 'evidens',
              humor: 'lattad', reaktion: 'Farid nickar.',
              svar: 'Det låter vettigt.',
              fx: { agens: -16, underlag: -10 },
              varfor: 'Åtta veckors vila vid en axel som redan haft besvär i fem månader – med diabetes som riskfaktor för stelhet. Det är den snabbaste vägen till en frusen axel och ett långt sjukfall.' }
          ] },

        { typ: 'beslut',
          banner: 'FÖRSLAG TILL LÄKARE',
          fraga: 'Vad rekommenderar du?',
          val: [
            { text: 'Ingen sjukskrivning om omlastning av bilen kan ordnas. Progressiv träning startar idag, uppföljning om 3 veckor. Beskriv i underlaget exakt vilka lyfthöjder som inte fungerar.',
              ok: true, princip: 'grad', tid: 2,
              fx: { underlag: 14, agens: 12 },
              utfall: 'Arbetsgivaren lastar om bilen. Farid är kvar i arbete och tränar två gånger i veckan.',
              varfor: 'Miljön ändrades i stället för att arbetsförmågan togs bort. Behandlingen som faktiskt hjälper påbörjades samma dag.' },
            { text: '25 % i 4 veckor under träningsuppbyggnad, med beskrivning av begränsningarna och plan för upptrappning.',
              ok: 'delvis', princip: 'grad', tid: 2,
              fx: { underlag: 8 },
              utfall: 'Läkaren signerar. Farid kör kortare rutter under uppbyggnadsfasen.',
              varfor: 'Rimligt när anpassning inte räcker hela vägen. Det som gör det försvarbart är att det är tidsbegränsat, kopplat till behandling och har ett slutdatum.' },
            { text: '100 % i 8 veckor i väntan på magnetkamera.',
              ok: false, princip: 'evidens', tid: 2,
              fx: { underlag: -14, agens: -14 },
              utfall: 'Bilddiagnostiken visar åldersförändringar. Axeln är stelare än vid besöket.',
              varfor: 'Sjukskrivning i väntan på en undersökning som inte ändrar behandlingen. Åtta veckor av rörelseinskränkning hos en diabetiker är en aktiv försämring.' }
          ] }
      ]
    }
  ];

})(window);
