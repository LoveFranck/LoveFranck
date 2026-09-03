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
      { id: 'lak-signera-annans-underlag',
        fraga: 'Signerar läkare i primärvården intyg som bygger på en annan professions utredning, utan att själv ha träffat patienten?',
        bakgrund: 'LESS-modellens juridiska kärna. Hela läkarrollen i spelet bygger på det.',
        berorFall: ['lak-anna', 'lak-bengt'],
        skattning: 30, sakerhet: 'låg',
        motivering: 'Sker, men nästan alltid i den informella varianten: fysioterapeuten eller kuratorn ringer eller skriver i journalen, och läkaren skriver ut förlängningen utan egen kontakt. Som formaliserat flöde med ett skrivet försäkringsmedicinskt underlag från annan profession är det ovanligt. Siffran är därför ett medelvärde av två helt olika saker och drar iväg uppåt vid förlängningar och vid hyrläkarbemanning, nedåt vid förstagångsintyg. Berör även fysioterapeut- och psykologrollen.',
        status: 'skattad av rådgivare' },

      { id: 'lak-forstagangsintyg-utan-egen-kontakt',
        fraga: 'Skrivs ett FÖRSTA sjukintyg utan att läkaren haft någon egen kontakt med patienten – varken besök, video eller telefon?',
        bakgrund: 'Delar upp frågan ovan. Huvudregeln i Socialstyrelsens intygsföreskrift är att intyg utfärdas efter en undersökning av patienten; lak-anna gör i dag motsatsen till guldsvar.',
        berorFall: ['lak-anna'],
        skattning: 10, sakerhet: 'medel',
        motivering: 'Förekommer, men få skriver ett förstagångsintyg helt utan att ha hört patientens röst – det är den situation som oftast blir en IVO-anmälan eller ett kompletteringsärende. Kontaktformen är däremot fri: telefon räknas som undersökning om läkaren bedömer att det går att göra patientsäkert.',
        status: 'skattad av rådgivare' },

      { id: 'lak-somatisk-utredning-f43',
        fraga: 'Tas prover för somatisk differentialdiagnostik (tyreoidea, blodstatus, B12/folat, glukos) innan första sjukskrivningen vid utmattning eller depression?',
        bakgrund: 'I lak-anna och lak-brist gör psykolog respektive kollega utredningen. Frågan är om den somatiska delen faktiskt blir gjord när läkaren inte är förstakontakt.',
        berorFall: ['lak-anna', 'lak-brist'],
        skattning: 60, sakerhet: 'låg',
        motivering: 'Görs ofta, men långt ifrån alltid, och oftare när läkaren träffat patienten själv än när underlaget kommer från någon annan. Det är precis den lucka LESS-flödet riskerar att skapa: ingen profession äger frågan.',
        status: 'skattad av rådgivare' },

      { id: 'lak-ringer-patienten',
        fraga: 'Ringer läkaren patienten för att ge besked om ett intygsbeslut samma dag?',
        bakgrund: 'Bästa alternativet i lak-anna förutsätter ett kort samtal i stället för ett eget besök.',
        berorFall: ['lak-anna'],
        skattning: 15, sakerhet: 'medel',
        motivering: 'Intyget dyker i regel bara upp i 1177 och patienten får beskedet där. Läkaren ringer främst när svaret är ett nej eller en kortare tid än patienten begärt – och då oftast inte samma dag. Samma dag som underlaget kom in är ovanligt.',
        status: 'skattad av rådgivare' }
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
