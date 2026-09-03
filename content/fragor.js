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
        fraga: 'Gör arbetsterapeuter i primärvården arbetsplatsbesök eller arbetsplatsbedömning?',
        bakgrund: 'Bästa beslutsalternativet i arb-carina innehåller "arbetsplatsbedömning bokad". Utvecklaren har aldrig sett det göras och misstänker att det hör till företagshälsovården eller specialiserad rehabilitering.',
        berorFall: ['arb-carina'],
        skattning: null, sakerhet: null, motivering: '',
        status: 'väntar på rådgivare' },

      { id: 'at-arbetsinriktat-uppdrag',
        fraga: 'Ingår arbetsinriktade insatser över huvud taget i primärvårdsarbetsterapeutens uppdrag, eller är tyngdpunkten ADL, hjälpmedel och äldre?',
        bakgrund: 'Hela arbetsterapeutens roll i LESS bygger på arbetsinriktat arbete.',
        berorFall: ['arb-carina', 'arb-gunilla'],
        skattning: null, sakerhet: null, motivering: '',
        status: 'väntar på rådgivare' },

      { id: 'at-ortos-utprovning',
        fraga: 'Provas tumortoser ut och lämnas ut vid besöket på vårdcentralen?',
        bakgrund: 'I arb-carina känner patienten skillnaden i rummet, vilket förutsätter att ortosen finns på plats.',
        berorFall: ['arb-carina'],
        skattning: null, sakerhet: null, motivering: '',
        status: 'väntar på rådgivare' }
    ],

    lakare: [
      { id: 'lak-signera-annans-underlag',
        fraga: 'Signerar läkare i primärvården intyg som bygger på en annan professions utredning, utan att själv ha träffat patienten?',
        bakgrund: 'LESS-modellens juridiska kärna. Hela läkarrollen i spelet bygger på det.',
        berorFall: ['lak-anna', 'lak-bengt'],
        skattning: null, sakerhet: null, motivering: '',
        status: 'väntar på rådgivare' },

      { id: 'lak-ringer-patienten',
        fraga: 'Ringer läkaren patienten för att ge besked om ett intygsbeslut samma dag?',
        bakgrund: 'Bästa alternativet i lak-anna förutsätter ett kort samtal i stället för ett eget besök.',
        berorFall: ['lak-anna'],
        skattning: null, sakerhet: null, motivering: '',
        status: 'väntar på rådgivare' }
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
