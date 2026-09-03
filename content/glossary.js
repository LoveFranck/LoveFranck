/* glossary.js – Handboken (spelets uppslagsverk).

   ⚠ EJ KLINISKT GRANSKAT. Texterna är ett pedagogiskt utkast skrivet för
   spelet och ska granskas av verksamheten innan de används i utbildning.
   Regelverk ändras – kontrollera alltid mot Socialstyrelsens
   försäkringsmedicinska beslutsstöd, Försäkringskassan och lokala rutiner. */

(function (global) {
  'use strict';
  var LESS = global.LESS;

  LESS.handbok = [

    {
      id: 'less',
      titel: 'LESS-modellen',
      text: [
        'LESS är vårdcentralens arbetssätt för sjukskrivningsärenden.',
        'Kärnan: ett sjukskrivningsärende triageras INTE automatiskt till läkare.',
        'Sjuksköterskan gör en första bedömning av om en F-diagnos (psykisk ohälsa) eller M-diagnos (rörelseorganen) rimligen ligger i botten. Om så är fallet bokas patienten direkt till psykolog respektive fysioterapeut – inte till en akut läkartid.',
        'Psykolog/fysioterapeut/arbetsterapeut gör den försäkringsmedicinska utredningen. Läkaren granskar, tar ställning och signerar – det medicinska beslutet och namnet är fortsatt läkarens.',
        'Utredningarna schemaläggs på förmiddagen, och samtidigt finns en jourläkare utan egna bokade patienter. När utredningen är klar hämtar utredaren läkaren och föredrar ärendet. Sedan går de in tillsammans: patient, utredare och läkare talas kort vid, och läkaren tar ställning på plats.',
        'Patienten lämnar alltså vårdcentralen samma förmiddag, med ett besked och efter att ha blivit bedömd av läkare. Läkaren återkommer inte senare.',
        'Syftet: patienten möter rätt kompetens direkt, behandlingen startar tidigare och färre hamnar i långa passiva sjukskrivningar med rådet att "gå hem och vila upp sig".'
      ],
      punkter: [
        'Sjukskrivning är en åtgärd med biverkningar – den ska ordineras, doseras och följas upp.',
        'Stäng dörren till det som inte hjälper. Öppna en annan dörr samtidigt – aldrig bara stänga.',
        'Läkaren är kvar som försäkringsmedicinskt ansvarig, men behöver inte vara första kontakten.',
        'Jourupplägget är det som gör konstruktionen hållbar: läkaren träffar faktiskt patienten, vilket är huvudregeln när ett intyg utfärdas. Det som flyttats är utredningsarbetet, inte bedömningen och inte ansvaret.',
        'Trepartsmötet har en egen fallgrop: att de två i personalen diskuterar patienten över hennes huvud. Vänd dig till patienten först, sammanfatta vad du uppfattat och be henne rätta dig.'
      ],
      todo: 'FYLL I: vad bokstäverna i LESS står för hos er.'
    },

    {
      id: 'bedda',
      titel: 'BEDDA – samtalsstrukturen',
      text: ['En struktur för sjukskrivningssamtalet. Fem steg, i den här ordningen.'],
      lista: [
        ['B – Bedömning', 'Vad är problemet, funktionellt? Vilka besvär, sedan när, vad har prövats? Röda flaggor?'],
        ['E – Empati', 'Visa att du hört. Bekräfta upplevelsen innan du bemöter önskemålet. Utan detta steg hör patienten bara ett nej.'],
        ['D – DFA-kedjan', 'Diagnos → Funktionsnedsättning → Aktivitetsbegränsning, kopplat till patientens faktiska arbetsuppgifter.'],
        ['D – Dialog om alternativ', 'Vad finns i stället för/utöver sjukskrivning? KBT, fysisk aktivitet, anpassning på jobbet, hjälpmedel, deltid, rehabplan.'],
        ['A – Avslut', 'Tydlig sammanfattning: vad händer nu, vem gör vad, när hörs vi igen? Patienten ska kunna återberätta planen.']
      ]
    },

    {
      id: 'dfa',
      titel: 'DFA-kedjan',
      text: [
        'Ett intyg håller när kedjan går att följa hela vägen:',
        'DIAGNOS – vad patienten har.',
        'FUNKTIONSNEDSÄTTNING – vad som är nedsatt, helst observerat eller beskrivet med undersökningsfynd, test eller strukturerad anamnes.',
        'AKTIVITETSBEGRÄNSNING – vad patienten till följd av detta inte klarar, uttryckt i konkreta arbetsuppgifter.'
      ],
      punkter: [
        'Diagnos ensam motiverar aldrig sjukskrivning.',
        '"Kan inte arbeta" är ingen aktivitetsbegränsning – det är en slutsats. Skriv vad hen inte klarar: lyfta över axelhöjd, hålla en tråd i ett samtal i 20 minuter, köra bil i tjänsten.',
        'Aktivitetsbegränsningen ska relateras till de faktiska arbetsuppgifterna, inte till yrkestiteln.',
        'Beskriv också vad patienten KAN – det styr graden och möjligheten till anpassning.'
      ]
    },

    {
      id: 'sorkk',
      titel: 'SORKK – situationsanalysen',
      text: [
        'Ett sätt att ta ett enda tillfälle och se varför beteendet återkommer. Leden görs i den här ordningen, och görs tillsammans med patienten.'
      ],
      lista: [
        ['S – Situation', 'Det yttre läget, så konkret att det skulle gå att filma: tid, plats, vad som händer runt omkring.'],
        ['O – Organismfaktorer', 'Vad som händer inuti personen i situationen. Dela upp det i tre: tanke, kroppslig förnimmelse och beteendeimpuls.'],
        ['R – Respons', 'Det beteende som faktiskt utförs.'],
        ['K – Kortsiktig konsekvens', 'Vad som händer inom minuter. Här sitter oftast förklaringen: lättnad kommer snabbt och belönar beteendet varje gång.'],
        ['K – Långsiktig konsekvens', 'Vad som byggs upp över veckor och månader. Priset betalas långsamt och märks därför inte i stunden.']
      ],
      punkter: [
        'Blanda inte ihop organismfaktorer med etablerande omständigheter. Sömnbrist, utebliven frukost, lång tids undvikande och pågående belastning skapar inte beteendet – de gör det mycket mer sannolikt. De hör hemma i bakgrunden, inte i O.',
        'Beteendeimpulsen och responsen har ofta samma innehåll. Skillnaden är att impulsen är en dragning och responsen ett utfört beteende. När patienten inte ser undvikandets funktion upplevs de som samma sak: inte som ett val, utan som den enda lösningen.',
        'Att skilja impuls från respons i analysen är därför ofta första gången patienten ser att det fanns ett ögonblick där något annat var möjligt.',
        'Analysen görs i patientens eget material. Poängen är att hen ska se mönstret, inte att du ska.',
        'Vid sjukskrivningsärenden är analysen ofta det som gör beslutet begripligt: en sjukskrivning kan ge exakt samma kortsiktiga lättnad som beteendet man vill förändra – fast i större dos.'
      ]
    },

    {
      id: 'salutogen',
      titel: 'Salutogen kommunikation',
      text: [
        'Utgå från det som fungerar och bygger hälsa, inte bara från det som är trasigt. Nära besläktat med KASAM: begriplighet, hanterbarhet, meningsfullhet.'
      ],
      punkter: [
        'Fråga efter undantag: "När var det senast lite lättare? Vad var annorlunda då?"',
        'Fråga efter det som fortfarande fungerar: aktiviteter, relationer, arbetsuppgifter som går bra.',
        'Undvik sjukdomsförstärkande språk ("utsliten rygg", "utbränd", "du måste vila").',
        'Placera patienten som aktör: "Vad skulle du behöva för att klara ett par timmar?" i stället för "Vi får se vad vi kan göra åt dig".',
        'Bekräfta utan att lova. Empati är inte samma sak som att gå med på förslaget.'
      ]
    },

    {
      id: 'sjukskrivning',
      titel: 'Sjukskrivning – grunder',
      text: [
        'Sjukpenning förutsätter att arbetsförmågan är nedsatt på grund av sjukdom. Diagnos, besvär eller livssituation räcker inte i sig.',
        'Rehabiliteringskedjan (socialförsäkringsbalken) prövar arbetsförmågan mot olika saker beroende på hur länge sjukfallet pågått: först det egna arbetet, senare annat arbete hos arbetsgivaren, och därefter normalt förekommande arbete på arbetsmarknaden.'
      ],
      punkter: [
        'Sjukskrivning kan vara 25, 50, 75 eller 100 procent. Deltid är ofta ett bättre verktyg än heltid.',
        'Sätt alltid ett syfte och ett slutdatum: vad ska hända under tiden, och vad ska vara annorlunda sedan?',
        'Långvarig passiv sjukskrivning har egna risker: minskad aktivitet, sämre sömndygn, tappad arbetsidentitet, svårare återgång.',
        'Vid lindrig till medelsvår psykisk ohälsa är kvarvarande kontakt med arbetet oftast gynnsam – anpassning slår ofta frånvaro.',
        'Arbetsgivaren har ett rehabiliteringsansvar och ska ta fram en plan för återgång i arbete vid längre sjukfall. Vården tar inte över det ansvaret.'
      ],
      varning: 'Regler för karens, intygsdagar och tidsgränser ändras. Kontrollera alltid aktuella regler hos Försäkringskassan.'
    },

    {
      id: 'beslutsstod',
      titel: 'Försäkringsmedicinskt beslutsstöd',
      text: [
        'Socialstyrelsens beslutsstöd har två delar: övergripande principer och diagnosspecifika rekommendationer.',
        'Rekommendationerna anger en normal sjukskrivningstid vid ett typiskt förlopp. De är vägledning, inte en regel.'
      ],
      punkter: [
        'Individuell bedömning gäller alltid – både kortare och längre tid kan vara rätt.',
        'Avvikelse från rekommendationen ska motiveras i intyget, inte döljas.',
        'Beslutsstödet ersätter inte DFA-kedjan; det hjälper dig att kalibrera längd och grad.'
      ]
    },

    {
      id: 'f-diagnoser',
      titel: 'F-diagnoser i primärvården',
      text: [
        'Vanliga: F41 ångestsyndrom, F43 reaktion på svår stress och anpassningsstörningar (inklusive utmattningssyndrom), F32 depressiv episod.'
      ],
      punkter: [
        'Vid lindrig ångest och lindrig depression: undvikande underhåller besvären. Sjukskrivning kan förstärka undvikandet.',
        'KBT, fysisk aktivitet, sömnåtgärder, alkoholgenomgång och arbetsanpassning är förstahandsdörrar att öppna.',
        'Dosera insatsen efter tyngden. Vid lindrig till medelsvår problematik räcker ofta psykoedukation, korta insatser och iKBT med behandlarstöd – och de går att starta samma vecka. Långa seriebokningar ansikte mot ansikte finns sällan att få, och att lova dem skapar en väntetid som i sig är en risk.',
        'Sömnen förtjänar ofta ett eget spår. Sömnbrist sänker tröskeln för ångest och ångest stör sömnen – kausaliteten går åt båda håll, så det räcker sällan att vänta ut den ena.',
        'Vid utmattningssyndrom med uttalad kognitiv påverkan kan sjukskrivning behövas – men då med aktiv plan och successiv upptrappning, inte enbart vila.',
        'Screena alltid för suicidtankar, allvarlig depression, psykos och missbruk. Röd flagga = läkare/akut samma dag.'
      ]
    },

    {
      id: 'm-diagnoser',
      titel: 'M-diagnoser i primärvården',
      text: [
        'Vanliga: M54 rygg- och nackvärk, M75 skulderbesvär, M18/M19 artros, tendinopatier.'
      ],
      punkter: [
        'Ospecifik ryggsmärta: rörelse och gradvis belastning slår sängläge. Aktivitet är behandling.',
        'Röda flaggor rygg: blås- eller tarmpåverkan, ridbyxeanestesi, progredierande kraftnedsättning, betydande trauma, feber, malignitetsanamnes, oförklarad viktnedgång, uttalad nattlig smärta. Dessa ska till läkare skyndsamt.',
        'Smärtintensitet styr inte sjukskrivningsgraden – aktivitetsbegränsningen i förhållande till arbetsuppgifterna gör det.',
        'Tung, ensidig eller helt oanpassad arbetsmiljö: gå på arbetsanpassning och deltid före heltidsfrånvaro.'
      ]
    },

    {
      id: 'aktivitet',
      titel: 'Aktivitetsbegreppet (arbetsterapi)',
      text: [
        'Arbetsförmåga är inte en egenskap hos personen utan uppstår i mötet mellan person, aktivitet och miljö.',
        'Ändra någon av de tre så ändras förmågan: träna personen, förenkla aktiviteten, eller anpassa miljön.'
      ],
      punkter: [
        'Vardagsrevidering: kartlägg dygnet, se var energin går, fördela om i stället för att bara dra ner.',
        'Aktivitetsbalans betyder inte mindre av allt – det betyder rätt blandning av krav, återhämtning och det som ger mening.',
        'Vid handbesvär: greppfunktion, uthållighet, repetitivitet och belastningsvinklar avgör – inte diagnosen i sig.',
        'Hjälpmedel, ortoser och ändrad arbetsteknik kan göra hela skillnaden mellan sjukskrivning och kvarstannande i arbete.'
      ]
    },

    {
      id: 'rehabkoordinator',
      titel: 'Rehabkoordinatorns uppdrag',
      text: [
        'Tre ben: internt stöd i vården, stöd till patienten, och samverkan med arbetsgivare, Försäkringskassan och Arbetsförmedlingen.'
      ],
      punkter: [
        'Stötta patienten i kontakten med arbetsgivaren – utan att ta över patientens eller arbetsgivarens ansvar.',
        'Samtycke krävs innan du kontaktar arbetsgivare eller andra aktörer.',
        'Rehabplanen ska ha konkreta steg, ansvarig person och datum. En plan utan datum är en önskelista.',
        'Följ upp aktivt. Långtidssjukskrivna som inte hörs av är gruppen som fastnar.',
        'Avstämningsmöte är ett verktyg, inte en artighet – kalla när planen står still.'
      ]
    },

    {
      id: 'triage',
      titel: 'Triage i LESS-flödet',
      text: ['Sjuksköterskans beslutsträd i sjukskrivningsärenden, förenklat.'],
      lista: [
        ['1. Röda flaggor?', 'Medicinsk eller psykiatrisk akutfråga → läkare/akut samma dag. Alltid först.'],
        ['2. F-diagnos i botten?', 'Ångest, stressreaktion, nedstämdhet utan röda flaggor → psykolog för försäkringsmedicinsk utredning och tidig insats.'],
        ['3. M-diagnos i botten?', 'Rörelseorganen, ospecifik smärta, belastning → fysioterapeut.'],
        ['4. Aktivitet/hand/vardag?', 'Aktivitetsproblematik, handfunktion, hjälpmedel, vardagsstruktur → arbetsterapeut.'],
        ['5. Redan sjukskriven/lång duration?', 'Rehabkoordinator för plan och arbetsgivarkontakt.'],
        ['6. Inget vårdbehov hos oss?', 'Hänvisa rätt – företagshälsovård, 1177, kommun, psykiatri – eller avsluta ärendet med tydlig information.']
      ],
      varning: 'Triage är en bedömning av vårdnivå, inte en diagnos. Osäker? Fråga kollega eller boka bredare.'
    },

    {
      id: 'juridik',
      titel: 'Juridik och dokumentation',
      punkter: [
        'Intyget är en handling som styr en myndighets beslut. Skriv bara det du har underlag för och ange källan: eget iakttagande, patientens uppgift eller annan handling.',
        'Den som signerar ansvarar för innehållet. Signera aldrig ett underlag du inte skulle kunna försvara.',
        'Journalför bedömningen även när du INTE sjukskriver – motiveringen är lika viktig.',
        'Samtycke krävs för kontakt med arbetsgivare och för att hämta uppgifter från andra vårdgivare.',
        'Patienten har rätt att ta del av intyget. Skriv så att det går att läsa högt för patienten.',
        'Att neka sjukskrivning är ett medicinskt ställningstagande som ska förklaras, dokumenteras och gå att ompröva.'
      ]
    },

    {
      id: 'spelet',
      titel: 'Så funkar spelet',
      punkter: [
        'Tryck K när som helst för att se var knapparna sitter på tangentbordet.',
        'Handledare Ove står alltid i korridoren utanför den dörr du ska in genom. Prata med honom när du vill så säger han vart du ska och vad du ska göra där.',
        'Tiden i besöket är den enda mätare du ser. Varje replik och åtgärd kostar minuter.',
        'Patientens förtroende, agens, dina ramar och kvaliteten på underlaget mäts hela tiden – men i det dolda. Du läser dem på patientens kroppsspråk och svar, precis som i verkligheten.',
        'Går tiden ut tvingas du fatta beslutet ändå. Det räknas.',
        'Efter besöket visar handledaren allt: val för val, mätarna och vad som hände sedan.',
        'Det du missar läggs i en repetitionskö och kommer tillbaka i övningsläget.',
        'Handledartipsen tonas bort när du klarat en roll med guld två gånger.'
      ]
    }
  ];

})(window);

/* Principregister – används av repetitionskön och av handledarens återkoppling. */
(function (global) {
  'use strict';
  var LESS = global.LESS;

  LESS.principer = {
    'bedda-b':       'BEDDA · Bedömning före beslut',
    'bedda-e':       'BEDDA · Empati före bemötande',
    'bedda-d1':      'BEDDA · DFA-kedjan',
    'bedda-d2':      'BEDDA · Dialog om alternativ',
    'sorkk':         'SORKK · situationsanalys',
    'bedda-a':       'BEDDA · Tydligt avslut',
    'salutogen':     'Salutogen kommunikation',
    'rodflagga':     'Röda flaggor först',
    'triage-f':      'F-diagnos i botten → psykolog',
    'triage-m':      'M-diagnos i botten → fysioterapeut',
    'triage-akt':    'Aktivitet och handfunktion → arbetsterapeut',
    'triage-rko':    'Lång duration → rehabkoordinator',
    'dorr':          'Stäng en dörr – öppna en annan',
    'agens':         'Stärk patientens agens',
    'dfa-funktion':  'Funktionsnedsättning med fynd',
    'dfa-aktivitet': 'Aktivitetsbegränsning i arbetsuppgifter',
    'grad':          'Rätt grad och längd på sjukskrivningen',
    'signering':     'Signera bara det du kan försvara',
    'beslutsstod':   'Beslutsstödet är vägledning, inte ett tak',
    'ansvar':        'Ta inte över patientens eller arbetsgivarens ansvar',
    'samtycke':      'Samtycke före kontakt med tredje part',
    'plan':          'Rehabplan med ansvarig och datum',
    'uppfoljning':   'Uppföljning bokas alltid',
    'evidens':       'Sjukskrivning är en åtgärd med biverkningar',
    'hjalpmedel':    'Anpassning och hjälpmedel före frånvaro',
    'vardagsrev':    'Vardagsrevidering och aktivitetsbalans',
    'forvantan':     'Skapa tydliga förväntningar'
  };

  LESS.fall = {};      /* fylls av content/cases-*.js */

})(window);
