/* people.js – roller, personal och patienter (utseende + grunddata) */
(function (global) {
  'use strict';
  var LESS = global.LESS, SK = LESS.SKIN, HR = LESS.HAIR;

  /* Forsåker vårdcentrals profilfärger. All vårdpersonal bär samma
     mintgröna arbetsdräkt; rollen märks på rummet och på HUD:en, inte
     på plagget. */
  var PROFIL = LESS.PAL.markMint, PROFIL_D = LESS.PAL.markMintD;

  /* ---------------- roller ---------------- */
  LESS.roller = {
    ssk: {
      id: 'ssk', namn: 'SJUKSKÖTERSKA', kort: 'SSK', rum: 'TRIAGE',
      farg: '#00443c',
      uppdrag: 'Triagera inkommande ärenden i chatten. Salutogen kommunikation och tydliga förväntningar (BEDDA). Boka rätt profession, hänvisa vidare eller avsluta ärendet.',
      sprite: { skin: SK.ljus, hair: HR.brun, hairStyle: 'knut', uni: PROFIL, uni2: PROFIL_D, acc: '#00443c' }
    },
    psykolog: {
      id: 'psykolog', namn: 'PSYKOLOG', kort: 'PSY', rum: 'PSYKOLOG',
      farg: '#00443c',
      uppdrag: 'Ta emot sjukskrivningsärenden med F-diagnos i botten. Göra den försäkringsmedicinska utredningen som läkaren tar ställning till. Psykoedukation och korta insatser som ökar agens och arbetsförmåga.',
      sprite: { skin: SK.mellan, hair: HR.mork, hairStyle: 'kort', uni: PROFIL, uni2: PROFIL_D, acc: '#00443c', glasogon: true }
    },
    fysioterapeut: {
      id: 'fysioterapeut', namn: 'FYSIOTERAPEUT', kort: 'FYS', rum: 'FYSIO',
      farg: '#00443c',
      uppdrag: 'Ta emot sjukskrivningsärenden med M-diagnos i botten. Göra den försäkringsmedicinska utredningen. Fysioterapeutiska insatser, belastningsanpassning och åtgärder som ökar agens och arbetsförmåga.',
      sprite: { skin: SK.ljus, hair: HR.blond, hairStyle: 'kort', uni: PROFIL, uni2: PROFIL_D, acc: '#00443c' }
    },
    lakare: {
      id: 'lakare', namn: 'LÄKARE', kort: 'LÄK', rum: 'LÄKARE',
      farg: '#00443c',
      uppdrag: 'Jourläkare på förmiddagen, utan egna bokade patienter. Utredaren hämtar dig och föredrar ärendet, sedan går ni in till patienten tillsammans. Du granskar, kompletterar det bara du kan komplettera, tar ställning och signerar – på plats, med patienten kvar. Ditt namn står på beslutet.',
      sprite: { skin: SK.mork, hair: HR.mork, hairStyle: 'kort', uni: PROFIL, uni2: PROFIL_D, acc: '#00443c', glasogon: true }
    },
    rehabkoordinator: {
      id: 'rehabkoordinator', namn: 'REHABKOORDINATOR', kort: 'RKO', rum: 'REHABKOORD.',
      farg: '#00443c',
      uppdrag: 'Spindeln i nätet. Stötta patienten i kontakten med arbetsgivaren utan att ta över ansvaret. Skapa och följa upp rehabplaner. Följa upp långtidssjukskrivna.',
      sprite: { skin: SK.ljus, hair: HR.rod, hairStyle: 'langt', uni: PROFIL, uni2: PROFIL_D, acc: '#00443c' }
    },
    arbetsterapeut: {
      id: 'arbetsterapeut', namn: 'ARBETSTERAPEUT', kort: 'ARB', rum: 'ARBETSTER.',
      farg: '#00443c',
      uppdrag: 'Aktivitetsbegreppet kopplat till arbetsförmåga. Vardagsrevidering, aktivitetsbalans, handfunktion och hjälpmedel. Salutogen kommunikation.',
      sprite: { skin: SK.mellan, hair: HR.gra, hairStyle: 'kort', uni: PROFIL, uni2: PROFIL_D, acc: '#00443c' }
    }
  };

  LESS.rollLista = ['ssk', 'psykolog', 'fysioterapeut', 'arbetsterapeut', 'lakare', 'rehabkoordinator'];

  /* ---------------- patienter ---------------- */
  /* portratt = utseende, plus fakta som visas i journalpanelen */
  LESS.personer = {

    anna: {
      namn: 'Anna Ek', alder: 34, yrke: 'Kommunikatör, kommunen',
      portratt: { skin: SK.ljus, hair: HR.brun, hairStyle: 'langt', klader: '#8a94b8', ogon: '#4a5a38' },
      bakgrund: 'Två barn, sambo. Inga tidigare kontakter för psykisk ohälsa. Omorganisation på jobbet sedan i våras.'
    },

    bengt: {
      namn: 'Bengt Nilsson', alder: 52, yrke: 'Lagerarbetare, tunga lyft',
      portratt: { skin: SK.ljus, hair: HR.gra, hairStyle: 'kort', klader: '#5c7a8c', skagg: true, ogon: '#3a4a5a' },
      bakgrund: 'Arbetat på lagret i 19 år. Rökare. Tidigare två episoder av ryggskott, båda självläkande inom 3 veckor.'
    },

    carina: {
      namn: 'Carina Holm', alder: 47, yrke: 'Ekonomiassistent, tangentbord 7 tim/dag',
      portratt: { skin: SK.mellan, hair: HR.mork, hairStyle: 'knut', klader: '#a06878', glasogon: true, ogon: '#3a2a20' },
      bakgrund: 'Tumbasartros bilateralt, värst höger. Vårdar sin mamma på helgerna. Vill inte "vara till besvär".'
    },

    david: {
      namn: 'David Ohlsson', alder: 26, yrke: 'Kock, restaurang',
      portratt: { skin: SK.ljus, hair: HR.mork, hairStyle: 'kort', klader: '#6a8a6a', ogon: '#3a3028' },
      bakgrund: 'Akut ryggskott för tre dagar sedan när han lyfte en gryta. Ingen tidigare sjukskrivning.'
    },

    elin: {
      namn: 'Elin Sund', alder: 41, yrke: 'Förskollärare',
      portratt: { skin: SK.mycketljus, hair: HR.blond, hairStyle: 'langt', klader: '#8ca0b0', ogon: '#5a6a48' },
      bakgrund: 'Sömnsvårigheter i 8 månader, minnesluckor, gråter lätt. Ensamstående med tre barn. Redan sjukskriven 50 % i sex veckor.'
    },

    farid: {
      namn: 'Farid Aziz', alder: 58, yrke: 'Distributionsförare',
      portratt: { skin: SK.mork, hair: HR.gra, hairStyle: 'kort', klader: '#7a7a8a', skagg: true, ogon: '#2a2018' },
      bakgrund: 'Axelsmärta höger sedan fem månader. Lyfter paket över axelhöjd dagligen. Diabetes typ 2.'
    },

    gunilla: {
      namn: 'Gunilla Berg', alder: 63, yrke: 'Undersköterska, hemtjänst',
      portratt: { skin: SK.ljus, hair: HR.vit, hairStyle: 'kort', klader: '#a89078', ogon: '#4a4a3a' },
      bakgrund: 'Knäartros bilateralt. Tre år kvar till pension. Har börjat tacka nej till pass med trappor.'
    },

    hasse: {
      namn: 'Hasse Lund', alder: 61, yrke: 'Snickare, egen firma',
      portratt: { skin: SK.ljus, hair: HR.gra, hairStyle: 'flint', klader: '#8a7060', skagg: true, ogon: '#3a3a30' },
      bakgrund: 'Ryggsmärta i sex veckor, nu även nattlig värk och 6 kg viktnedgång. Behandlad för prostatacancer för fyra år sedan.'
    },

    iris: {
      namn: 'Iris Palm', alder: 29, yrke: 'Butikssäljare',
      portratt: { skin: SK.mycketljus, hair: HR.rod, hairStyle: 'kort', klader: '#b08898', ogon: '#4a5a5a' },
      bakgrund: 'Panikattacker sedan tre månader, undviker bussen och köer. Sjukskriven 100 % i två veckor av jourläkare.'
    },

    jonas: {
      namn: 'Jonas Ek', alder: 38, yrke: 'IT-support',
      portratt: { skin: SK.ljus, hair: HR.brun, hairStyle: 'kort', klader: '#78889a', glasogon: true, ogon: '#3a4a3a' },
      bakgrund: 'Sjukskriven 100 % i elva månader för utmattningssyndrom. Kontakten med arbetsgivaren har tystnat.'
    }
  };

  /* ---------------- handledaren ----------------
     Samma röst som ger återkopplingen efter mötena, men här med kropp:
     han står alltid utanför den dörr du ska in genom och kan fråga:s om
     vägen hur många gånger som helst. */
  LESS.handledare = {
    namn: 'HANDLEDARE OVE',
    sprite: { skin: SK.ljus, hair: HR.vit, hairStyle: 'kort',
              uni: PROFIL, uni2: PROFIL_D, acc: '#00443c', glasogon: true }
  };

  /* ---------------- personal i overworld ---------------- */
  LESS.npcs = [
    { x: 2, y: 15, dir: 'down', namn: 'MEDARBETARE ROSA',
      sprite: { skin: SK.mellan, hair: HR.mork, hairStyle: 'knut', uni: PROFIL, uni2: PROFIL_D, acc: '#00443c' },
      repliker: [
        'Hej! Receptionen är också vårdcentralens ansikte utåt.',
        'Tryck A mot disken om du vill byta spelläge, spara eller börja om.'
      ] },
    { x: 7, y: 17, dir: 'left', namn: 'VÄNTANDE PATIENT',
      sprite: { skin: SK.ljus, hair: HR.blond, hairStyle: 'langt', uni: '#c8a0b0', uni2: '#a88090', acc: '#8a6070', bricka: false },
      repliker: [
        'Jag fick tid hos fysioterapeuten direkt. Trodde man alltid måste till doktorn först?'
      ] },
    { x: 3, y: 18, dir: 'right', namn: 'VÄNTANDE PATIENT',
      sprite: { skin: SK.mork, hair: HR.mork, hairStyle: 'kort', uni: '#88a0c0', uni2: '#6880a0', acc: '#405878', bricka: false },
      repliker: [
        'Sjuksköterskan skrev i chatten att vi bokar en tid ihop. Kändes tydligt.'
      ] },
    { x: 16, y: 11, dir: 'down', namn: 'VERKSAMHETSCHEF PIA',
      sprite: { skin: SK.ljus, hair: HR.gra, hairStyle: 'kort', uni: PROFIL, uni2: PROFIL_D, acc: '#00443c' },
      repliker: [
        'Poängen med LESS är inte att spara läkartid. Den är att patienten möter rätt kompetens först.',
        'Läkaren skriver fortfarande under. Ansvaret flyttar inte – kön gör det.'
      ] },
    { x: 24, y: 11, dir: 'down', namn: 'AT-LÄKARE OMAR',
      sprite: { skin: SK.mellan, hair: HR.mork, hairStyle: 'kort', uni: PROFIL, uni2: PROFIL_D, acc: '#00443c' },
      repliker: [
        'Jag signerar inget jag inte kan försvara. Saknas aktivitetsbegränsning går underlaget tillbaka.',
        'Läs anslagstavlan i korridoren om du vill se hur det går för ärendena.'
      ] }
  ];

})(window);
