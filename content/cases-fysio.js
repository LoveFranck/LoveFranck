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

        { typ: 'kedja',
          banner: 'DFA-KEDJAN',
          fraga: 'Bygg DFA-kedjan för Bengts intyg.',
          tips: 'Fynden du just tog fram är funktionen. Aktivitetsledet ska handla om moment på lagret – både de som inte går och de som går.',
          tidFel: 1,
          princip: 'bedda-d1',
          lank: [
            { etikett: 'D – DIAGNOS',
              fraga: 'Vilken rad är diagnosen?',
              val: [
                { text: 'M54.5 Lumbago', ratt: true },
                { text: 'Nedsatt flexion i ländrygg, fingertopp–golv 45 cm', varfor: 'Ett undersökningsfynd. Det hör till funktionen.' },
                { text: 'Kan ej utföra pallyft 15–25 kg', varfor: 'Aktivitetsbegränsningen.' },
                { text: 'Tungt lagerarbete med upprepade lyft', varfor: 'Exponeringen i arbetet. Viktig i sammanhanget, men den är inte en diagnos.' },
                { text: 'Smärta VAS 8', varfor: 'En skattning av symtomet. Den varken diagnostiserar eller beskriver funktion.' }
              ] },
            { etikett: 'F – FUNKTIONSNEDSÄTTNING',
              fraga: 'Vilken rad är funktionsnedsättningen?',
              val: [
                { text: 'Nedsatt flexion i ländrygg (fingertopp–golv 45 cm), smärtinhibition vid lyft, negativ neurologi', ratt: true },
                { text: 'M54.5 Lumbago', varfor: 'Diagnosen.' },
                { text: 'Klarar truckkörning och plockning', varfor: 'Kvarvarande förmåga i arbetsmoment – det hör till aktivitetsledet.' },
                { text: 'Har ont i ryggen', varfor: 'Ett symtom patienten uppger. En funktionsnedsättning ska gå att undersöka eller beskriva strukturerat.' },
                { text: 'Rekommenderas 50 procent i två veckor', varfor: 'Ett förslag till åtgärd, inte en beskrivning av funktionen.' }
              ] },
            { etikett: 'A – AKTIVITETSBEGRÄNSNING',
              fraga: 'Vilken rad är aktivitetsbegränsningen?',
              val: [
                { text: 'Kan ej utföra pallyft 15–25 kg eller upprepad framåtböjning. Klarar truckkörning, plockning och administrativa moment.', ratt: true },
                { text: 'Smärta vid framåtböjning', varfor: 'Funktionsledet. Aktivitetsledet ska säga vilka arbetsmoment det omöjliggör.' },
                { text: 'Kan inte arbeta', varfor: 'En slutsats – och den motsägs av att truck och plock fungerar.' },
                { text: 'Arbetsgivaren bör omplacera patienten', varfor: 'En rekommendation till tredje part. Den hör inte hemma i intyget alls.' },
                { text: 'Två tidigare episoder av ryggskott', varfor: 'Anamnes. Den förklarar förloppet men beskriver inte vad han inte klarar nu.' }
              ] }
          ],
          forklaring: 'Lägg märke till att aktivitetsraden också säger vad Bengt KAN. Det är den uppgiften som gör partiell sjukskrivning och anpassning möjliga att bedöma – utan den läser Försäkringskassan bara "kan inte arbeta".' },

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
    },

    /* ================================================================
       LEO – oplanerat besök. Läser som Bengt. Är det inte.
       Låses upp när kampanjen är klar. Endast övningsläge.
       ================================================================ */
    {
      id: 'fys-leo',
      roll: 'fysioterapeut',
      titel: 'Nybesök, torsdag 14.00',
      patient: 'leo',
      lage: 'rum',
      minuter: 28,
      svarighet: 3,
      laser: 'oplanerat',
      endastDrill: true,
      principer: ['rodflagga', 'bedda-b', 'somatik', 'forvantan', 'plan'],
      journal: [
        ['Kontaktorsak', 'Ländryggssmärta efter lyft. Begär sjukskrivning 2 veckor.'],
        ['Triage', 'Chattärende igår. Bedömd som ospecifik ländryggssmärta, bokad hit. Anteckningen avslutas med "inga röda flaggor". Vilka frågor som ställts framgår inte.'],
        ['Duration', 'Fyra dagar. Lyfte en cementsäck ur en skåpbil i tisdags och kände det ge till i ryggen.'],
        ['Tidigare', 'Ryggskott 2019 och 2022. Båda gångerna två veckors sjukskrivning, återgick i arbete.'],
        ['Arbete', 'Byggnadsarbetare, anställd. Ställning, stege, bärning. Sjukanmäld till arbetsgivaren dag 1.'],
        ['Läkemedel', 'Ibuprofen receptfritt. Har tagit mindre de senaste två dagarna.'],
        ['Övrigt', 'Inga andra sjukdomar. Icke rökare.']
      ],
      intro: [
        'Torsdag 14.00. Trettio minuter bokade: nybesök och försäkringsmedicinsk utredning.',
        'Leo kommer in i arbetskläder. Han går lite stelt och tar tag i dörrkarmen när han vänder sig om.'
      ],

      beats: [

        { typ: 'replik', humor: 'smarta',
          text: 'Jag ska säga som det är: jag är här för papperets skull. Ryggen har låst sig förut och den ger med sig, jag behöver bara två veckor som förra gången.' },

        { typ: 'val',
          fraga: 'Leo har satt agendan, precis som du är van vid. Hur öppnar du?',
          tips: 'Fyra dagar är kort tid. Han känner igen sitt eget ryggskott – och du vet ännu inte om det är samma sak den här gången.',
          val: [
            { text: 'Fyra dagar är färskt, och du känner igen det. Innan vi pratar papper vill jag ställa några frågor och titta på ryggen och benen – sen vet vi båda vad vi har att göra med.',
              tid: 2, ok: true, princip: 'bedda-b',
              humor: 'neutral', reaktion: 'Leo rycker på axlarna och sätter sig.',
              svar: 'Kör då. Men det är samma som förra gången, det känner jag.',
              fx: { allians: 10, tydlighet: 8, sakerhet: 4 },
              varfor: 'Du bekräftar hans erfarenhet, säger vad du ska göra och binder dig inte vid ett utfall. Skillnaden mot att lova ett underlag är liten i rummet och stor i efterhand: du har inte lovat något du kanske inte ska leverera.' },
            { text: 'Du känner din rygg bättre än jag. Låt oss gå igenom vad som faktiskt går och inte går på jobbet just nu, så kan jag skriva ett underlag som stämmer.',
              tid: 3, ok: 'delvis', princip: 'forvantan',
              humor: 'lattad', reaktion: 'Leo slappnar av.',
              svar: 'Så ska det låta. Ställning går inte, stege går inte, bärning går inte.',
              fx: { allians: 10, underlag: 6, tydlighet: -4 },
              varfor: 'Ordagrant nästan det som var rätt svar i ett annat ryggärende, och det är därför det ligger här. Innehållet är inte fel – men du har lovat ett underlag innan du vet vad frågan är, och du har börjat i aktiviteterna i stället för i kroppen. Det kostar dig ingenting än. Lägg märke till hur lätt det gick.' },
            { text: 'Det här låter som en läkarfråga. Jag bokar om dig så slipper vi krångel.',
              tid: 1, ok: false, princip: 'bedda-b',
              humor: 'spand', reaktion: 'Leo tittar upp.',
              svar: 'Bokar om? Jag tog ledigt en halvdag för att komma hit.',
              fx: { allians: -12, agens: -8, tydlighet: -10 },
              varfor: 'Du har inte hört något som skiljer Leo från vilket ryggskott som helst ännu. Att flytta en patient utan att ha en fråga att skicka med är inte försiktighet, det är en tom överlämning – och den kostar honom en halv arbetsdag till.' }
          ] },

        { typ: 'flera',
          banner: 'ANAMNES',
          fraga: 'Du hinner tre frågor innan du undersöker. Välj tre.',
          tips: 'Triageanteckningen säger "inga röda flaggor" men inte vad någon frågat. Och fyra dagar är tillräckligt lång tid för att något ska ha hunnit förändras.',
          antal: 3,
          tidPer: 1,
          val: [
            { text: 'Kissar och bajsar du som vanligt? Har du domnat i grenen eller på insidan av låren?',
              ratt: true, princip: 'rodflagga', flagga: 'cauda-fragad',
              fx: { sakerhet: 12, underlag: 4 },
              varfor: 'Blås- och tarmpåverkan med ridbyxeanestesi är cauda equina-misstanke och en akutmottagningsfråga direkt. Triagen skrev en slutsats i journalen, inte ett svar – en slutsats går inte att ompröva, ett svar gör det. Ställ den själv och skriv ner orden han svarar med.' },
            { text: 'Har något förändrats de senaste dygnen? Vad gör ryggen och benet idag jämfört med i tisdags?',
              ratt: true, princip: 'rodflagga', flagga: 'benet-fragat',
              fx: { sakerhet: 12, underlag: 8 },
              varfor: 'Förloppsfrågan. Ett ryggskott ska bli bättre i en riktning, inte bättre på ett håll och sämre på ett annat. Den är öppen, kostar en minut och är den enda fråga i listan som kan avslöja att något rör sig åt fel håll.' },
            { text: 'Feber, frossa, nattlig värk som väcker dig, oförklarad viktnedgång eller tidigare cancersjukdom?',
              ratt: true, princip: 'rodflagga',
              fx: { sakerhet: 8, underlag: 4 },
              varfor: 'Allmänsymtomen som pekar mot infektion eller malignitet. De är sällan svaret hos en trettiotreåring med ett lyft i anamnesen, och de ska ändå ställas en gång – det är billigare att fråga än att veta när man borde ha frågat.' },
            { text: 'Hur ont har du på en skala ett till tio, just nu och som värst?',
              ratt: false, princip: 'dfa-aktivitet',
              fx: { underlag: -2 },
              varfor: 'Smärtintensitet styr varken vårdnivå eller sjukskrivningsgrad, och här är den dessutom vilseledande: den kan sjunka av skäl som inte är läkning. Frågan om förändring över tid bär allt det den här frågan bär, och mer.' },
            { text: 'Hur gick lyftet till, och hur tungt var det?',
              ratt: false,
              varfor: 'Naturlig fråga och intressant för det förebyggande arbetet, men skademekanismen sorterar inte ärendet. Här kostar den en av tre platser som behövdes för att veta hur det utvecklat sig sedan dess.' },
            { text: 'Hur många veckor behöver du för att det ska gå ihop med jobbet?',
              ratt: false, princip: 'bedda-b',
              fx: { underlag: -6, tydlighet: -4 },
              varfor: 'Frågan han hoppades på, och därför den mest lockande. Du har gjort längden på en sjukskrivning till en förhandling innan du vet vad du bedömer. Bedömning före beslut, inte tvärtom.' }
          ] },

        { typ: 'replik', humor: 'oppen', om: { finns: 'benet-fragat' },
          text: 'Konstigt nog gör det faktiskt mindre ont nu. I tisdags kunde jag inte resa mig ur bilen, nu är det väl en trea. Men benet känns dött nedanför knät. Och foten... jag halkade på ställningsstegen igår, jag trodde jag bara var trött.' },

        { typ: 'val',
          fraga: 'Du har drygt tjugo minuter kvar. Vad använder du dem till?',
          tips: 'Det du undersöker är också det du kan skriva ner. Vad behöver den som eventuellt tar över efter dig kunna jämföra med?',
          val: [
            { text: 'Neurologisk screening först: kraft i fotled och stortå, känsel i benet, reflexer, häl- och tågång. Sedan ryggen.',
              tid: 6, ok: true, princip: 'rodflagga', flagga: 'neurostatus',
              humor: 'neutral', reaktion: 'Leo drar av sig skon.',
              svar: 'Ska jag gå på hälarna? Det där gick lättare förra veckan.',
              fx: { sakerhet: 18, underlag: 12 },
              varfor: 'Kraft och känsel är det enda i undersökningen som kan byta fråga i ärendet. De tar fyra minuter, kräver ingen utrustning och ger dig en status med klockslag som någon annan kan jämföra mot i morgon.' },
            { text: 'Gå igenom arbetsdagens moment ett i taget – ställning, stege, bärning – och bygg aktivitetsbegränsningen.',
              tid: 4, ok: false, princip: 'rodflagga',
              humor: 'lattad', reaktion: 'Leo räknar upp momenten utan att tveka.',
              svar: 'Precis. Ställning går inte, stegen går inte, bärningen definitivt inte. Så du fattar ju att det blir två veckor.',
              fx: { allians: 10, underlag: 8, sakerhet: -16 },
              varfor: 'Det här var guldsvaret i ett annat ryggärende och det är fel här, av ett enda skäl: du har kartlagt vad han inte kan göra utan att ha undersökt varför. En aktivitetsbegränsning som beror på en tilltagande pares ser i journalen ut precis som en som beror på ont i ryggen – och de ska handläggas olika.' },
            { text: 'Undersök ryggen: rörlighet, palpation, fingertopp–golv och Lasègue.',
              tid: 5, ok: 'delvis', princip: 'dfa-funktion',
              humor: 'smarta', reaktion: 'Leo böjer sig framåt och hejdar sig.',
              svar: 'Aj. Det där drar rakt ner i benet.',
              fx: { underlag: 6, sakerhet: -6 },
              varfor: 'Rätt undersökning för ospecifik ryggsmärta och långt bättre än ingen undersökning alls. Men Lasègue prövar nervspänning, inte kraft. En positiv Lasègue finns vid okomplicerat diskbråck också, och den säger ingenting om hur snabbt det ska handläggas. Det gör kraftprövningen.' }
          ] },

        { typ: 'replik', om: { finns: 'neurostatus' },
          talare: { name: 'UNDERSÖKNINGEN', kind: '' },
          text: 'Tågång går obehindrat. Vid hälgång faller höger framfot ner mot golvet direkt. Kraft: dorsalflexion höger 3 av 5 – han lyfter foten mot tyngdkraften men inte mot motstånd – stortåextension nästan upphävd. Vänster sida normal. Nedsatt beröringskänsel över höger fotrygg och stortå. Patellar- och akillesreflex sidlika. Lasègue positiv vid cirka 40 grader höger.' },

        { typ: 'val', om: { saknas: 'neurostatus' },
          humor: 'orolig',
          text: 'Förresten. Jag vet inte om det hör hit. Foten slår i golvet när jag går i trappan, och jag halkade på ställningsstegen igår. Jag trodde bara att benet var trött.',
          fraga: 'Klockan är mycket. Vad gör du?',
          tips: 'Han har just sagt något du inte undersökt.',
          val: [
            { text: 'Sätt dig och ta av skon. Jag vill testa kraften i foten innan du går härifrån.',
              tid: 4, ok: true, princip: 'rodflagga', flagga: 'neurostatus',
              humor: 'neutral', reaktion: 'Leo drar av sig skon.',
              svar: 'Ska jag gå på hälarna? Det där gick lättare förra veckan.',
              fx: { sakerhet: 14, underlag: 10 },
              varfor: 'Patienten gav dig fyndet gratis och sent. Det tar fyra minuter att pröva och det är den enda uppgiften i besöket som avgör hur snabbt ärendet ska handläggas – då får något annat stryka på foten.',
              extra: { typ: 'replik',
                talare: { name: 'UNDERSÖKNINGEN', kind: '' },
                text: 'Tågång går obehindrat. Vid hälgång faller höger framfot ner mot golvet direkt. Kraft: dorsalflexion höger 3 av 5 – han lyfter foten mot tyngdkraften men inte mot motstånd – stortåextension nästan upphävd. Vänster sida normal. Nedsatt beröringskänsel över höger fotrygg och stortå. Patellar- och akillesreflex sidlika.' } },
            { text: 'Notera det i journalen och ta upp det vid återbesöket.',
              tid: 1, ok: false, princip: 'rodflagga',
              humor: 'lattad', reaktion: 'Leo nickar och drar på sig jackan.',
              svar: 'Bra. Då tar vi det då.',
              fx: { sakerhet: -18, underlag: -8 },
              varfor: 'En anteckning om en försvagad fot är inte en undersökning av en försvagad fot, och den blir läst någon gång. Det som avgör handläggningen här är hur mycket kraft som finns kvar och åt vilket håll det rör sig – och det vet du inte, för du prövade inte.' }
          ] },

        { typ: 'kontroll', om: { saknas: 'cauda-fragad' },
          banner: 'INNAN DU GÅR VIDARE',
          fraga: 'Det finns en försvagning i foten. Vilken fråga har du fortfarande inte ställt?',
          tidFel: 2,
          princip: 'rodflagga',
          fx: { sakerhet: -10 },
          val: [
            { text: 'Blås- och tarmfunktion och känsel i grenen.', ratt: true },
            { text: 'Hur tungt lyftet var.', ratt: false,
              varfor: 'Skademekanismen ändrar ingenting i handläggningen nu.' },
            { text: 'Hur ont han har på en skala.', ratt: false,
              varfor: 'Smärtnivån är det som redan lurat er båda i det här ärendet.' },
            { text: 'Vilka arbetsmoment som inte går.', ratt: false,
              varfor: 'Den frågan är inte fel – den är bara inte den som avgör vart Leo ska härnäst.' }
          ],
          forklaring: 'Blåsa, tarm och känsel i grenen är den fråga som skiljer akutmottagningen från läkarrummet här på huset. Med sakral påverkan är det cauda equina-misstanke och akut bedömning; utan den är en pares något som ska handläggas skyndsamt men planerat. Du kan inte välja nivå förrän du ställt den, och du kan inte hänvisa till triagens "inga röda flaggor" – där står en slutsats, inte ett svar.' },

        { typ: 'kontroll',
          banner: 'FAKTAKONTROLL',
          fraga: 'Vad är det hos Leo som byter fråga i ärendet?',
          tidFel: 2,
          princip: 'rodflagga',
          val: [
            { text: 'Att kraften i fotens uppåtböjning har avtagit under de senaste dygnen.', ratt: true },
            { text: 'Att smärtan minskat från åtta till tre sedan i tisdags.', ratt: false,
              varfor: 'Det låter som läkning och är därför fällan. Smärta som avtar samtidigt som kraften avtar är inte ett tecken på att det går åt rätt håll – det är två saker som går åt varsitt håll, och det ena av dem är motoriskt bortfall.' },
            { text: 'Att smärtan strålar ner i benet.', ratt: false,
              varfor: 'Utstrålande smärta i sig är vanligt vid ischias och byter varken vårdnivå eller tempo. Det är kraften och känseln som gör det.' },
            { text: 'Att akillesreflexen är sidlik – det talar emot nervpåverkan.', ratt: false,
              varfor: 'Vanlig och farlig felslutning. Akillesreflexen speglar S1. Nivån som styr fotens uppåtböjning och stortåextension har ingen egen senreflex som testas rutinmässigt, så en normal akillesreflex utesluter inte det bortfall du just hittat.' },
            { text: 'Att han inte kommer ner till golvet med fingertopparna.', ratt: false,
              varfor: 'En rörelseinskränkning. Den beskriver funktionen i ryggen och hör hemma i ett intyg, men den avgör inte hur snabbt någon ska undersöka honom.' }
          ],
          forklaring: 'Tilltagande motoriskt bortfall är en röd flagga, och den är fysioterapeutens att hitta – den kräver ingen utrustning och syns inte i chatten. Rekommendationen i de regionala kunskapsstöden vid uttalad eller snabbt tilltagande pares, exempelvis begynnande droppfot, är kontakt med ryggjour eller ortoped för ställningstagande till hur skyndsamt det ska handläggas. Vid sakral påverkan – blås- eller tarmpåverkan, ridbyxeanestesi – är det i stället akutmottagningen direkt. Att avvakta och se är inget av alternativen.' },

        { typ: 'val',
          humor: 'orolig',
          fraga: 'Leo sitter kvar med skon i handen. Vad säger du?',
          tips: 'Han kom hit för ett papper och får något annat. Det du säger nu avgör om han förstår varför – och om han hör resten.',
          val: [
            { text: 'Leo, jag tänker inte göra det vi skulle göra idag. Jag hittar en försvagning i din högerfot som inte fanns förra veckan, och den ska en läkare undersöka innan någon skriver något om din arbetsförmåga. Det är inte för att jag tror att det är farligt – det är för att jag inte ska gissa.',
              tid: 4, ok: true, princip: 'bedda-b',
              humor: 'orolig', reaktion: 'Leo sätter ner skon.',
              svar: 'Men papperet då? Jag har hyra på fredag.',
              fx: { tydlighet: 16, sakerhet: 10, allians: 4 },
              varfor: 'Du säger vad du gör, vad du hittat och varför du inte fortsätter. Att uttryckligen ta bort dramatiken – "inte för att jag tror att det är farligt" – är inte en tröst utan en förutsättning för att han ska kunna ta in det praktiska du säger härnäst.' },
            { text: 'Jag skriver underlaget som vi tänkt och noterar foten, så tittar läkaren på det när han läser.',
              tid: 2, ok: false, princip: 'somatik',
              humor: 'lattad', reaktion: 'Leo ser lättad ut.',
              svar: 'Perfekt. Då är vi klara här.',
              fx: { allians: 12, sakerhet: -16, tydlighet: -10 },
              varfor: 'Det kändes bra i rummet, och det är precis därför det är farligt. En rad i ett underlag är ingen läkarbedömning – den läses kanske på måndag av någon som tror att den somatiska frågan redan är avgjord. Du lämnar dessutom kvar ett förslag om arbetsförmåga som bygger på en utredning du inte gjorde färdigt.' },
            { text: 'Det här kan vara allvarligt. Du måste åka till akuten direkt.',
              tid: 2, ok: false, princip: 'rodflagga',
              humor: 'orolig', reaktion: 'Leo bleknar.',
              svar: 'Akuten? Är det förlamning? Herregud.',
              fx: { agens: -12, allians: -8, tydlighet: -8 },
              varfor: 'Frågan om blåsa, tarm och känsel i grenen är den som skiljer akutmottagningen från läkarrummet här – och Leos svar var nej. En pares utan sakral påverkan handläggs skyndsamt, inte panikartat. Rädsla är inte samma sak som säkerhet, och en skrämd patient hör inte säkerhetsnätet du behöver ge honom.' }
          ] },

        { typ: 'flera',
          banner: 'PÅ VÄGEN UT',
          fraga: 'Besöket blev inte det du bokade. Vad ser du till att Leo har med sig när han går? Välj tre.',
          tips: 'Ett avbrutet besök är också ett besked. Han har en fot, en kväll och en hyra att förhålla sig till.',
          antal: 3,
          tidPer: 1,
          val: [
            { text: 'Statusen skriven i journalen med klockslag: kraft, känsel, häl- och tågång, samt att blås- och tarmfunktion efterfrågats och är normal.',
              ratt: true, princip: 'plan', fx: { underlag: 14, sakerhet: 8 },
              varfor: 'Det enda som gör en pares möjlig att följa är en tidsstämplad utgångspunkt. Läkaren om två timmar och ortopeden om två dagar behöver veta vad kraften var klockan 14.40, annars går det inte att avgöra om den rör sig. Skriv också ut den negativa cauda-frågan – ett nej som inte står i journalen finns inte.' },
            { text: 'Exakt vad som gör det akut i kväll: svårt att kissa eller kissar på sig, domning i grenen, snabbt tilltagande svaghet. Vart han ringer och vart han åker då.',
              ratt: true, princip: 'rodflagga', fx: { sakerhet: 14, tydlighet: 10 },
              varfor: 'Säkerhetsnät. Du kan inte undersöka honom igen klockan elva i kväll, men du kan göra honom till den som märker det. Muntligt räcker inte – han är trött, orolig och kommer minnas ungefär hälften. Ge det skriftligt.' },
            { text: 'Beskedet om pengarna: han är sjukanmäld och har sjuklön från arbetsgivaren, som huvudregel kan intyg krävas först från dag åtta – och intygsfrågan avgörs av läkaren idag, inte av mig.',
              ratt: true, princip: 'forvantan', fx: { tydlighet: 14, allians: 10 },
              varfor: 'Han kom hit av en anledning och den försvann inte för att du hittade något i foten. Arbetsgivaren betalar sjuklön de första fjorton dagarna och kan enligt sjuklönelagen som huvudregel begära läkarintyg först från och med dag åtta; idag är dag fyra. Säg det som huvudregel, inte som garanti – kollektivavtal och särskilda beslut kan kräva intyg tidigare. Och säg vem som avgör intygsfrågan, annars tror han att den föll bort.' },
            { text: 'Ett träningsprogram för ryggen att komma igång med hemma under tiden.',
              ratt: false, princip: 'plan', fx: { agens: 4, tydlighet: -8 },
              varfor: 'Inte skadligt, och allmänna råd om att röra sig gäller fortfarande. Men det tar en av tre platser och ger fel besked: ett program i handen betyder för Leo att bedömningen är klar. Träningen börjar när frågan om nerven är besvarad.' },
            { text: 'Ditt påbörjade försäkringsmedicinska underlag med förslag på grad och längd, så att läkaren har något att utgå från.',
              ratt: false, princip: 'somatik', fx: { underlag: -14 },
              varfor: 'Du utredde inte arbetsförmågan – du avbröt. Ett förslag byggt på en halv undersökning är sämre än inget förslag, för läkaren ärver din gissning utan att veta att det är en gissning. Skriv i stället rakt ut att den försäkringsmedicinska utredningen avbrutits och varför.' },
            { text: 'Beskedet att han kan vara hemma utan intyg i sju dagar och höra av sig igen om det inte blivit bättre.',
              ratt: false, princip: 'rodflagga', fx: { allians: 8, sakerhet: -16 },
              varfor: 'Det löser hans försörjning i en enda mening, och det är därför det lockar. Men du har just skjutit den medicinska frågan sju dagar framåt och gjort en tilltagande pares till något han själv ska bedöma hemma i soffan. Reglerna om intygsdagar är ett svar på hans oro för pengarna – aldrig ett skäl att inte undersöka honom.' }
          ] },

        { typ: 'beslut',
          banner: 'VAD GÖR DU NU',
          fraga: 'Hur avslutar du?',
          tips: 'Att avbryta en utredning är ett arbetsmoment. Frågan är vad du gör med de minuter du fick över.',
          val: [
            { text: 'Avbryt den försäkringsmedicinska utredningen och skriv varför. Dokumentera statusen med klockslag, gå ut och ta läkaren i huset för bedömning idag, ge säkerhetsnätet skriftligt och boka återbesök hos mig när läkaren tagit ställning.',
              ok: true, princip: 'somatik', tid: 2,
              fx: { sakerhet: 18, underlag: 10, tydlighet: 10 },
              utfall: 'Läkaren undersöker Leo 16.10, jämför med din status och tar kontakt med ryggjouren. Intygsfrågan avgörs samma dag, av läkaren. Leo har en tid hos dig nästa vecka.',
              varfor: 'Fynden bytte fråga, och då byter besöket innehåll. Du gjorde det du får göra – undersökte, dokumenterade, säkrade och lämnade över – och lät den som ska avgöra avgöra. Att intyget blev läkarens sak samma dag är ingen eftergift; det är rätt ordning när den medicinska frågan är öppen. Lägg märke till att du inte remitterade någonstans och inte ställde någon diagnos. Det är inte dina beslut, och du behövde dem inte.' },
            { text: 'Ingen läkare är fri idag. Du dokumenterar statusen, får en läkartid imorgon förmiddag, ger säkerhetsnätet både muntligt och skriftligt och ringer Leo själv imorgon eftermiddag.',
              ok: 'delvis', princip: 'plan', tid: 2,
              fx: { sakerhet: 6, tydlighet: 8, underlag: 6 },
              utfall: 'Leo ses av läkare fredag 09.20. Kraften i foten är oförändrad sedan igår.',
              varfor: 'Ofta är det här verkligheten en torsdag eftermiddag, och det är försvarbart – förutsatt att säkerhetsnätet är skriftligt och att en namngiven person följer upp. Det som gör det till andrahandsval är att du inte vet vad foten gör över natten. Värd att diskutera i gruppen: var går er gräns mellan "läkartid imorgon förmiddag" och "akutmottagningen i kväll", och vem bestämmer det när ingen läkare är fri?' },
            { text: 'Skriv underlaget färdigt som planerat och lägg till en rad om att foten bör kontrolleras vid tillfälle.',
              ok: false, princip: 'somatik', tid: 2,
              fx: { allians: 10, sakerhet: -20, underlag: -12 },
              utfall: 'Underlaget hamnar i läkarens inkorg. Leo får sina två veckor och kommer tillbaka om tio dagar med en fot som inte lyfter alls.',
              varfor: 'Modellen tillämpad rakt igenom en röd flagga. Allt i underlaget stämmer utom det viktigaste, och en rad om att något "bör kontrolleras" tilldelar frågan ingen alls. Det är precis det LESS gör med den somatiska frågan om ingen aktivt tar den: tar bort läkarbesöket och lämnar frågan kvar.' },
            { text: 'Boka om Leo till läkare och avsluta besöket nu – det här är inte längre din fråga.',
              ok: false, princip: 'plan', tid: 1,
              fx: { sakerhet: -8, tydlighet: -12, agens: -10 },
              utfall: 'Leo får en tid på måndag och går ut utan att veta vad han ska hålla utkik efter, och utan besked om intyget.',
              varfor: 'Slutsatsen är rätt och genomförandet tomt. Utan din status har läkaren ingen utgångspunkt att jämföra med, utan säkerhetsnät vet Leo inte vad som är akut i kväll, och utan besked om försörjningen fattar han det beslutet själv på fredagen. Att avbryta en utredning är ett arbetsmoment, inte att gå ut ur rummet.' }
          ] }
      ]
    }
  ];

})(window);
