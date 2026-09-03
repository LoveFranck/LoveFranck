/* fragor.js – professionsrådgivarnas öppna frågor om klinisk vardag.

   Varje fråga handlar om hur något FAKTISKT går till i svensk primärvård, inte
   om hur det borde gå till. Rådgivaragenten skattar på en kvotskala 0–100 hur
   vanligt förekommande något är; verklig personal skattar samma fråga i spelet,
   via planschen på väggen i sitt eget rum.

   Skalan (samma ankare för alla frågor):
       0   förekommer aldrig i svensk primärvård
      25   förekommer, men undantagsvis
      50   ungefär hälften av mottagningarna eller tillfällena
      75   vanligt, men inte självklart
     100   görs i princip alltid

   Fältet `skattning` är agentens gissning och ska ses som en hypotes att
   motbevisa. `sakerhet` säger hur mycket agenten litar på den.

   ⚠ EJ KLINISKT GRANSKAT. */

(function (global) {
  'use strict';
  var LESS = global.LESS;

  LESS.fragorAnkare = [
    [0,   'aldrig'],
    [25,  'undantagsvis'],
    [50,  'ungefär hälften'],
    [75,  'vanligt'],
    [100, 'i princip alltid']
  ];

  LESS.fragor = {

    ssk: [
      { id: 'ssk-chatt-triage',
        fraga: 'Sker triage av sjukskrivningsärenden i chatt, utan att patienten hörs eller ses?',
        bakgrund: 'Alla sjuksköterskefall i spelet utspelar sig i chatten. Om det i praktiken alltid blir ett telefonsamtal bör fallen spegla det.',
        berorFall: ['ssk-anna', 'ssk-bengt', 'ssk-carina'],
        skattning: null, sakerhet: null, motivering: '',
        status: 'väntar på rådgivare' },

      { id: 'ssk-suicidfraga-chatt',
        fraga: 'Ställs frågan om suicidtankar i skriftlig chatt, eller flyttas ärendet alltid till telefon då?',
        bakgrund: 'I ssk-anna är suicidfrågan ett av tre obligatoriska val i chatten.',
        berorFall: ['ssk-anna'],
        skattning: null, sakerhet: null, motivering: '',
        status: 'väntar på rådgivare' }
    ],

    psykolog: [
      { id: 'psy-ikbt-samma-vecka',
        fraga: 'Går det att starta iKBT med behandlarstöd inom en vecka från första psykologbesöket?',
        bakgrund: 'Guldsvaret i psy-anna förutsätter det.',
        berorFall: ['psy-anna'],
        skattning: null, sakerhet: null, motivering: '',
        status: 'väntar på rådgivare' },

      { id: 'psy-tid-45min',
        fraga: 'Hinner man en situationsanalys, psykoedukation, sömngenomgång och ett försäkringsmedicinskt underlag på ett nybesök?',
        bakgrund: 'psy-anna har 44 minuters budget och innehåller alla fyra momenten.',
        berorFall: ['psy-anna'],
        skattning: null, sakerhet: null, motivering: '',
        status: 'väntar på rådgivare' }
    ],

    fysioterapeut: [
      { id: 'fys-forsakringsmedicinskt-underlag',
        fraga: 'Skriver fysioterapeuter i primärvården försäkringsmedicinska underlag som läkare sedan tar ställning till?',
        bakgrund: 'Hela fysioterapeutens roll i LESS bygger på det.',
        berorFall: ['fys-bengt', 'fys-farid'],
        skattning: null, sakerhet: null, motivering: '',
        status: 'väntar på rådgivare' },

      { id: 'fys-uppfoljning-10-dagar',
        fraga: 'Går det att boka en uppföljning tio dagar fram?',
        bakgrund: 'fys-bengt förutsätter det i sitt bästa alternativ.',
        berorFall: ['fys-bengt'],
        skattning: null, sakerhet: null, motivering: '',
        status: 'väntar på rådgivare' }
    ],

    arbetsterapeut: [
      { id: 'at-arbetsplatsbedomning',
        fraga: 'Gör arbetsterapeuten på din mottagning arbetsplatsbesök ute hos patientens arbetsgivare?',
        bakgrund: 'Bästa beslutsalternativet i arb-carina innehöll tidigare "arbetsplatsbedömning bokad". Utvecklaren har aldrig sett det göras och misstänker att det hör till företagshälsovården eller specialiserad rehabilitering.',
        berorFall: ['arb-carina'],
        skattning: 10,
        sakerhet: 'medel',
        motivering: 'Jag tror att det är ovanligare än "undantagsvis". Arbetsanpassning på plats är arbetsgivarens ansvar enligt arbetsmiljölagstiftningen, och den som köper in kompetens dit är arbetsgivaren via företagshälsovården – inte patienten via vårdcentralen. Flera regionala uppdragsbeskrivningar avgränsar dessutom bort det arbetsinriktade helt; Region Uppsalas rutin för arbetsterapi i primärvård skriver rakt ut att arbetsförmågebedömningar inte ingår, och att insatser inte ens utförs i patientens eget hem. Nationella vårdprogrammet för tumbasartros har ortos, handträning och ergonomisk rådgivning som grundbehandling – inget arbetsplatsbesök. Det förekommer ändå: i arbetsinriktade rehabteam och multimodal rehabilitering i primärvård, och när ADA+ (ArbetsplatsDialog för Arbetsåtergång) används, ofta av rehabkoordinator. Men det är enstaka mottagningar, inte vardag. Berör även rehabkoordinator-rådgivaren.',
        status: 'skattad av rådgivare' },

      { id: 'at-arbetsinriktat-uppdrag',
        fraga: 'Ingår arbetsinriktade insatser i primärvårdsarbetsterapeutens uppdrag?',
        bakgrund: 'Hela arbetsterapeutens roll i LESS bygger på arbetsinriktat arbete. Alternativet är att tyngdpunkten i praktiken är ADL, hjälpmedel, kognitivt stöd och äldre.',
        berorFall: ['arb-carina', 'arb-gunilla'],
        skattning: 30,
        sakerhet: 'medel',
        motivering: 'Jag skattar det arbetsinriktade som en namngiven del av uppdraget, inte ergonomiska råd som råkar handla om jobbet. Sådana råd ges hela tiden – de ingår i handrehabilitering och i stress- och utmattningsspåret – och den siffran skulle vara hög. Men att ta emot en yrkesverksam person med arbetsåtergång som mål, och beskriva aktivitetsförmåga i förhållande till arbetsuppgifter, är i flera regioner uttryckligen bortavgränsat. Bemanningen pekar åt samma håll: en arbetsterapeut på deltid med lång kö prioriterar efter medicinskt behov, och yrkesverksamma med handbesvär hamnar sällan högst. Det här är den fråga i listan där jag helst vill bli motbevisad – blir svaret lågt vilar hela arbetsterapeutrollen i LESS på en resurs som inte finns.',
        status: 'skattad av rådgivare' },

      { id: 'at-ortos-utprovning',
        fraga: 'Provas tumortoser ut och lämnas ut vid besöket på vårdcentralen?',
        bakgrund: 'I arb-carina känner patienten skillnaden i rummet, vilket förutsätter att ortosen finns på plats.',
        berorFall: ['arb-carina'],
        skattning: 55,
        sakerhet: 'medel',
        motivering: 'Två frågor i en, och det är där osäkerheten sitter. Kommer patienten till en arbetsterapeut som har handrehabilitering i uppdraget är utprovning vid besöket nästan självklar – ortos är grundbehandling vid tumbasartros, prefabricerade mjuka tumortoser brukar finnas i skåpet och en hård ortos tillverkas på plats. Där skulle jag skatta 85. Men handrehabilitering ligger i flera regioner på en central enhet, inte på vårdcentralen, och sortiment och kostnadsansvar varierar. 55 är min sammanvägning. Delfrågan som avgör: har din mottagning ortoser i skåpet?',
        status: 'skattad av rådgivare' },

      { id: 'at-skriftligt-underlag-arbetsgivare',
        fraga: 'Skriver arbetsterapeuten en skriftlig beskrivning av aktivitetsbegränsningar som patienten själv tar med till sin chef?',
        bakgrund: 'Det är den realistiska ersättningen för "arbetsplatsbedömning bokad" i arb-carina, och det ligger redan i bästa alternativet i arb-gunilla. Om inte heller detta görs står båda fallen utan sin viktigaste åtgärd.',
        berorFall: ['arb-carina', 'arb-gunilla'],
        skattning: 35,
        sakerhet: 'låg',
        motivering: 'Det är den åtgärd som är billigast, mest juridiskt renhårig och mest i linje med att inte ta över patientens ansvar – patienten bär själv informationen till arbetsgivaren, så ingen sekretessprövning behövs. Men jag har inte sett någon regional mall för det, och utan mall blir det något var och en hittar på. Min gissning är att det görs av en del, ofta som en utskriven journalanteckning eller ett par punkter på ett papper, och att det inte är rutin någonstans. Låg säkerhet – det här är den fråga där jag tror att spridningen mellan mottagningar är störst.',
        status: 'skattad av rådgivare' },

      { id: 'at-nybesok-hinner-med',
        fraga: 'Ryms vardagskartläggning, aktivitetsanalys och ortosutprovning inom ett och samma nybesök?',
        bakgrund: 'arb-carina har 25 minuters budget och innehåller alla tre momenten plus ett underlag till läkare.',
        berorFall: ['arb-carina'],
        skattning: 40,
        sakerhet: 'medel',
        motivering: 'Ett arbetsterapeutiskt nybesök med handrehabilitering är i min erfarenhet bokat 45–60 minuter, inte 25, och då hinns det mesta med. Frågan är om alltihop ryms i ett besök eller måste delas på två – och om utprovningen görs samma dag eller vid återbesöket. Jag tror att det oftast blir två besök när dygnsgenomgången också ska hinnas med. Skatta det du faktiskt hinner en vanlig tisdag, inte det du hinner en bra dag.',
        status: 'skattad av rådgivare' }
    ],

    lakare: [
      { id: 'lak-jourpass-schemalagt',
        fraga: 'Finns det på din mottagning en läkare som en förmiddag i veckan är schemalagd utan egna bokade patienter?',
        bakgrund: 'Hela LESS-upplägget står och faller med det. Utan en läkare som är fri när utredningen blir klar blir modellen en inkorg i stället för ett möte.',
        berorFall: ['lak-anna', 'lak-bengt'],
        skattning: 15,
        sakerhet: 'medel',
        motivering: 'Dela frågan i två. Att det finns ett pass utan förbokade patienter i schemat är inte ovanligt – dagjour, akutslinga och administrativ tid finns på de flesta vårdcentraler. Men den tiden är inte fri. Dagjouren fylls av akuta besök inom timmen, och adm-tiden går åt till provsvar, receptförnyelser, telefonlistan och de intyg som redan ligger. En läkare som är schemalagd för att vara tillgänglig när en kollega knackar, och som får sitta av tiden om ingen knackar, är något annat. Jag har svårt att se en verksamhetschef med två vakanta läkartjänster försvara en obokad läkarförmiddag i veckan mot tillgänglighetskraven – och hyrläkartid köps per producerad besökstid, vilket gör just den timmen dyrast av alla. Blir svaret här under 20 vilar LESS på en resurs som måste beslutas fram, inte på en som finns. Då är det nästa fråga i listan som modellen måste bäras av i stället.',
        status: 'skattad av rådgivare' },

      { id: 'lak-avbryta-passet',
        fraga: 'Kan du avbrytas 10–15 minuter mitt i ditt pass för att gå in till en kollegas patient?',
        bakgrund: 'Den realistiska varianten av jourupplägget, om ingen fri jourläkare går att bemanna. Det är den lägre ribba LESS i så fall måste konstrueras för.',
        berorFall: ['lak-anna', 'lak-bengt'],
        skattning: 45,
        sakerhet: 'medel',
        motivering: 'Att bli hämtad av en sjuksköterska för en akut bedömning sker dagligen och ifrågasätts inte. Att bli hämtad av en psykolog eller fysioterapeut för en försäkringsmedicinsk föredragning är ovanligare, men hindret är kulturellt snarare än schematekniskt – tiden finns lika lite och lika mycket i båda fallen. Priset är att nästa patient får vänta ett kvart, och det priset betalas redan varje dag. Osäkerheten sitter i om det går att göra planerat och återkommande, eller bara när det råkar passa. Skatta det som faktiskt går, inte det som borde gå.',
        status: 'skattad av rådgivare' },

      { id: 'lak-trepartsmote',
        fraga: 'Förekommer trepartsmöten där utredare, läkare och patient träffas samtidigt?',
        bakgrund: 'I LESS hämtar utredaren läkaren, föredrar ärendet och går sedan in tillsammans med patienten kvar i rummet.',
        berorFall: ['lak-anna', 'lak-bengt'],
        skattning: 20,
        sakerhet: 'medel',
        motivering: 'Formen finns och är inte främmande. Den vanligaste varianten är intern: AT- eller ST-läkare föredrar ett ärende för sin handledare, som sedan går in till patienten – strukturellt exakt det LESS beskriver, och det görs varje dag på varje mottagning med utbildningsuppdrag. Rehabkoordinator, läkare och patient sitter ibland tillsammans i långa ärenden, och gemensam bedömning läkare–fysioterapeut förekommer där det finns MMR-uppdrag. Men som rutin i ett vanligt sjukskrivningsärende, med två professioner och patienten samtidigt, är det ovanligt: det kostar dubbel personaltid för ett besök. Att handledningsvarianten är så etablerad är samtidigt det starkaste argumentet för att modellen är genomförbar – den bryter inte mot något, den är bara ovanlig.',
        status: 'skattad av rådgivare' },

      { id: 'lak-signera-annans-underlag',
        fraga: 'Skriver du intyg där bedömningen i huvudsak bygger på en annan professions anteckning?',
        bakgrund: 'LESS-modellens juridiska kärna. Frågan gäller vad som faktiskt görs i dag, inte vad LESS föreslår.',
        berorFall: ['lak-anna', 'lak-bengt', 'lak-brist'],
        skattning: 55,
        sakerhet: 'medel',
        motivering: 'Omskattad efter modellförtydligandet, och uppåt. Jag tog tidigare ett medelvärde av två olika saker, vilket var fel sätt att svara. Den informella varianten är vanlig och underskattas: fysioterapeuten skriver i journalen att hon föreslår 50 procent, psykologen ringer, rehabkoordinatorn lägger en lapp – och läkaren skriver intyget utan att ha träffat patienten den dagen. Vid förlängningar är det snarare regel än undantag, särskilt när kontinuiteten är bruten och den som signerar är en hyrläkare som aldrig sett personen. Det är just det som gör LESS-frågan skarp: underlaget kommer redan från någon annan i dag, men utan struktur, utan källangivelse och utan att patienten träffar läkaren. Modellen formaliserar en praxis som redan finns, den skapar den inte. Den formaliserade varianten – ett skrivet försäkringsmedicinskt underlag som läkaren granskar – skattar jag däremot till omkring 10.',
        status: 'omskattad av rådgivare' },

      { id: 'lak-kalla-per-uppgift',
        fraga: 'Framgår det av dina intyg vem som iakttagit vad, när uppgiften kommer från någon annan?',
        bakgrund: 'Kravet i 6 kap. 3 § HSLF-FS 2018:54, och det som gör att en läkare kan stå bakom ett underlag hon inte själv tagit fram. Det tränas i FÖREDRAGNING-beaten i lak-anna.',
        berorFall: ['lak-anna', 'lak-bengt', 'lak-brist'],
        skattning: 15,
        sakerhet: 'medel',
        motivering: 'Föreskriften kräver att det ska framgå varifrån en uppgift kommer, och att intygsutfärdarens egna bedömningar går att skilja från annat. Fälten i FK 7804 är byggda för det. Min gissning är ändå att det görs sällan: i bästa fall står det "enligt fysioterapeut nedsatt rörlighet", i sämsta fall står patientens ord, kollegans fynd och läkarens slutsats i samma mening utan att någon kan säga vilket som är vilket. Det är också den brist som oftast genererar en kompletteringsförfrågan – och den kostar patientens försörjning, inte läkarens kalender. Är siffran låg är det ett av de starkaste skälen att LESS ska träna just det här.',
        status: 'skattad av rådgivare' },

      { id: 'lak-intyg-signeras-i-rummet',
        fraga: 'Hur ofta är intyget skrivet och signerat innan patienten lämnat rummet?',
        bakgrund: 'Både lak-anna och lak-bengt bygger på att patienten går därifrån med saken avgjord samma förmiddag.',
        berorFall: ['lak-anna', 'lak-bengt'],
        skattning: 20,
        sakerhet: 'medel',
        motivering: 'Två saker som fallen just nu låter smälta ihop. Att ge beskedet muntligt i rummet – grad, längd, vad som gäller och när det omprövas – är fullt realistiskt och görs ofta. Att intyget är formulerat, signerat och skickat innan patienten reser sig är något annat: intyget skrivs i regel efteråt, i en lucka som inte finns, ofta samma kväll och ibland tre dagar senare. Delfrågan som avgör: hur många osignerade intyg står i Webcert vid dagens slut? Blir siffran låg ska fallen skilja tydligare på beskedet, som ges i rummet, och handlingen, som blir klar sedan – annars lär de ut en tidsbudget som inte finns.',
        status: 'skattad av rådgivare' },

      { id: 'lak-somatisk-utredning-f43',
        fraga: 'Görs somatisk screening innan första sjukskrivningen vid utmattning eller ångest?',
        bakgrund: 'Den lucka LESS-flödet strukturellt riskerar att skapa: när läkaren inte är förstakontakt tilldelas den somatiska frågan ingen. I jourupplägget hamnar den hos läkaren i rummet.',
        berorFall: ['lak-anna', 'lak-brist'],
        skattning: 50,
        sakerhet: 'medel',
        motivering: 'Omskriven motivering, siffran justerad ned från 60. Två saker blandas lätt ihop. Att prover tas någon gång i ett psykiatriskt ärende är vanligt – TSH och blodstatus är billiga och nästan reflexmässiga, och den siffran skulle jag sätta till 75. Att den somatiska differentialdiagnostiken är riktad, övervägd och dokumenterad innan det första intyget skrivs är betydligt ovanligare: proverna tas ofta parallellt eller efteråt, och svaret läses inte förrän det larmar. 50 är sammanvägningen. Frågan blir strukturellt viktigare i LESS än i vanlig vård, eftersom den somatiska frågan tilldelas ingen alls när läkaren inte är förstakontakt. Berör även sjuksköterske-rådgivaren, som triagerar förbi läkaren.',
        status: 'omskattad av rådgivare' }
    ],

    rehabkoordinator: [
      { id: 'rko-sitta-med-vid-samtal',
        fraga: 'Sitter rehabkoordinatorn med när patienten själv ringer sin chef?',
        bakgrund: 'Bästa alternativet i rko-anna bygger på det.',
        berorFall: ['rko-anna'],
        skattning: null, sakerhet: null, motivering: '',
        status: 'väntar på rådgivare' },

      { id: 'rko-avstamningsmote-tva-veckor',
        fraga: 'Går det att få till ett avstämningsmöte inom två veckor?',
        bakgrund: 'Bästa alternativet i rko-jonas förutsätter det.',
        berorFall: ['rko-jonas'],
        skattning: null, sakerhet: null, motivering: '',
        status: 'väntar på rådgivare' }
    ]
  };

  /* Alla frågor i en platt lista, med rollen inbakad. */
  LESS.allaFragor = function () {
    var ut = [];
    Object.keys(LESS.fragor).forEach(function (roll) {
      LESS.fragor[roll].forEach(function (f) {
        ut.push({ roll: roll, f: f });
      });
    });
    return ut;
  };

})(window);
