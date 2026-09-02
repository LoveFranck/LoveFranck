/* cases-rehabkoordinator.js – Rehabkoordinatorns samordning
   ⚠ EJ KLINISKT GRANSKAT – pedagogiskt utkast, ska granskas av verksamheten. */
(function (global) {
  'use strict';
  var LESS = global.LESS;

  LESS.fall.rehabkoordinator = [

    /* ================================================================
       ANNA – kampanjärende 1, steg 4.
       ================================================================ */
    {
      id: 'rko-anna',
      roll: 'rehabkoordinator',
      titel: 'Uppföljning, två veckor senare',
      patient: 'anna',
      lage: 'rum',
      minuter: 23,
      kampanj: 'anna',
      svarighet: 2,
      principer: ['ansvar', 'samtycke', 'plan', 'uppfoljning', 'salutogen'],
      journal: [
        ['Ärende', 'Anna Ek, 34 år. Överlämnad från psykolog.'],
        ['Behandling', 'KBT med exponering, session 2 av 8'],
        ['Status', 'Har varit på arbetsplatsen fyra av tio dagar'],
        ['Arbetsgivare', 'Chefen Karin har hört av sig till vårdcentralen och vill ha information'],
        ['Samtycke', 'Ej dokumenterat']
      ],
      intro: [
        'Två veckor efter psykologbesöket. Anna kommer in och sätter sig utan att ta av jackan.',
        'På din skärm ligger ett meddelande: Annas chef har ringt och vill prata med er.'
      ],

      beats: [

        { typ: 'replik', humor: 'neutral',
          text: 'Jag har varit där fyra dagar. Två gånger klarade jag hela dagen. Men igår vände jag på parkeringen igen och nu känns allt värdelöst.' },

        { typ: 'val',
          fraga: 'Anna ser bara bakslaget. Vad gör du?',
          tips: 'Fyra av tio dagar är inte noll. Salutogen kommunikation betyder att leta rätt på det som faktiskt hände.',
          val: [
            { text: 'Fyra dagar av tio, och två hela. För två veckor sedan var det noll. Berätta om en av de dagar som gick – vad gjorde du annorlunda då?',
              tid: 4, ok: true, princip: 'salutogen',
              humor: 'oppen', reaktion: 'Anna tittar upp för första gången.',
              svar: 'Jag... åkte tidigare, när det inte var någon i entrén. Och jag hade sagt till Karin att jag skulle komma. Då kunde jag inte vända.',
              fx: { agens: 18, allians: 12, underlag: 10 },
              varfor: 'Undantagsfrågan ger både hopp och en konkret mekanism att bygga planen på: tidig ankomst och en överenskommelse med chefen. Det är information ingen skattningsskala hade gett dig.' },
            { text: 'Bakslag är normalt i återhämtning, oroa dig inte.',
              tid: 2, ok: 'delvis', princip: 'salutogen',
              humor: 'neutral', reaktion: 'Anna nickar utan att titta upp.',
              svar: 'Mm.',
              fx: { allians: 4, agens: -4 },
              varfor: 'Vänligt och sant, men tomt. Ett generellt lugnande besked ger henne inget att göra imorgon.' },
            { text: 'Då kanske behandlingen inte räcker – vi får överväga sjukskrivning igen.',
              tid: 2, ok: false, princip: 'evidens',
              humor: 'lattad', reaktion: 'Anna ser lättad ut och sjunker ner i stolen.',
              svar: 'Kanske det. Det kanske var för tidigt.',
              fx: { agens: -20, tydlighet: -12 },
              varfor: 'Vid session två av åtta, mitt i en pågående förbättring, är ett bakslag förväntat. Att erbjuda frånvaro just då belönar undvikandet i exakt det ögonblick behandlingen börjar verka.' }
          ] },

        { typ: 'kontroll',
          banner: 'JURIDIK',
          fraga: 'Annas chef har ringt vårdcentralen och vill prata om hennes situation. Vad gäller?',
          tidFel: 2,
          princip: 'samtycke',
          val: [
            { text: 'Du behöver Annas dokumenterade samtycke innan du talar med arbetsgivaren, och ni bör komma överens om vad som får sägas', ratt: true },
            { text: 'Chefen har rätt till information eftersom hon är arbetsgivare med rehabiliteringsansvar', ratt: false },
            { text: 'Du får berätta om planen men inte om diagnosen', ratt: false },
            { text: 'Du får prata fritt så länge du inte skriver något', ratt: false }
          ],
          forklaring: 'Arbetsgivarens rehabiliteringsansvar ger ingen rätt till uppgifter från vården. Sekretessen bryts av patientens samtycke, inte av mottagarens behov – och samtycket bör vara dokumenterat och avgränsat: vem, om vad, hur länge.' },

        { typ: 'val',
          fraga: 'Anna: "Kan inte du ringa Karin och förklara? Jag vet inte vad jag ska säga."',
          tips: 'Du ska stötta, inte överta. Vad är minsta möjliga hjälp som gör att Anna klarar samtalet själv?',
          val: [
            { text: 'Jag kan sitta med när du ringer, och vi kan förbereda vad du vill säga. Men det är du som ska prata med Karin – det är din relation, och den behöver du ha kvar efteråt.',
              tid: 5, ok: true, princip: 'ansvar',
              humor: 'neutral', reaktion: 'Anna funderar. Sedan nickar hon.',
              svar: 'Om du sitter bredvid... då går det. Vad ska jag säga om varför jag vänder på parkeringen?',
              fx: { agens: 20, allians: 12, tydlighet: 10 },
              varfor: 'Maximalt stöd, minimalt övertagande. Anna behåller relationen till sin chef och tränar samtidigt det hon behöver kunna när du inte är med.' },
            { text: 'Absolut, jag ringer Karin i eftermiddag och reder ut det.',
              tid: 3, ok: false, princip: 'ansvar',
              humor: 'lattad', reaktion: 'Anna ser tacksam ut.',
              svar: 'Tack. Jag är så dålig på sånt.',
              fx: { agens: -18, sakerhet: -10, tydlighet: -6 },
              varfor: 'Du tar över både samtalet och ansvaret, och du gör det utan dokumenterat samtycke. Nästa gång kan Anna ännu mindre – och du har blivit part i hennes anställning.' },
            { text: 'Nej, det där får du sköta själv. Vi lägger oss inte i arbetsgivarkontakter.',
              tid: 1, ok: false, princip: 'ansvar',
              humor: 'orolig', reaktion: 'Anna drar upp axlarna.',
              svar: 'Okej. Då får jag väl försöka.',
              fx: { agens: -8, allians: -12 },
              varfor: 'Rätt princip, fel tillämpning. Att stötta i arbetsgivarkontakten är kärnan i uppdraget – det är övertagandet som ska undvikas, inte hjälpen.' }
          ] },

        { typ: 'flera',
          banner: 'REHABPLAN',
          fraga: 'Vad måste finnas i planen ni skriver ihop?',
          antal: 3,
          tidPer: 2,
          tips: 'En plan utan ansvarig och datum är en önskelista.',
          val: [
            { text: 'Konkreta steg med namngiven ansvarig för varje steg', ratt: true, princip: 'plan',
              fx: { tydlighet: 12 },
              varfor: 'Utan en namngiven ansvarig blir varje steg allas och därmed ingens.' },
            { text: 'Datum för varje delmål och för nästa avstämning', ratt: true, princip: 'plan',
              fx: { tydlighet: 12, underlag: 6 },
              varfor: 'Datumen är det som gör att planen kan följas upp i stället för att bara existera.' },
            { text: 'Vad som ska hända om planen inte håller', ratt: true, princip: 'plan',
              fx: { tydlighet: 10 },
              varfor: 'Ett bakslag ska inte kräva ett nytt beslut i panik. Skriv i förväg vad som gäller om det går trögt.' },
            { text: 'Annas diagnos och symtombeskrivning', ratt: false, princip: 'samtycke',
              fx: { sakerhet: -10 },
              varfor: 'En plan som delas med arbetsgivaren ska handla om vad som ska göras, inte om medicinska uppgifter. Arbetsgivaren behöver funktion och behov – inte diagnos.' },
            { text: 'En bedömning av hur bra chefen har hanterat situationen', ratt: false,
              fx: { tydlighet: -8 },
              varfor: 'Värderingar av tredje part hör inte hemma i en plan som ska användas av just den parten.' },
            { text: 'Ett slutdatum för när Anna ska vara helt återställd', ratt: false,
              fx: { agens: -8 },
              varfor: 'Planen styr aktiviteter, inte tillfrisknande. Ett garanterat friskdatum skapar bara ett nytt misslyckande att bära.' }
          ] },

        { typ: 'beslut',
          banner: 'AVSLUT',
          fraga: 'Hur avslutar du besöket?',
          val: [
            { text: 'Sammanfatta planen, boka avstämning om två veckor, dokumentera samtycket och låt Anna läsa igenom och godkänna det som ska sägas till chefen.',
              ok: true, princip: 'uppfoljning', tid: 3,
              kampanj: { nyckel: 'anna-rehab', varde: 'plan' },
              fx: { tydlighet: 16, allians: 10, sakerhet: 10 },
              utfall: 'Vid avstämningen fyra veckor senare arbetar Anna full tid med anpassad start på morgnarna.',
              varfor: 'Plan, datum, samtycke och delaktighet i ett avslut. Det är exakt det som gör att uppföljningen inte glider iväg – och det tog tre minuter.' },
            { text: 'Sammanfatta planen och be Anna höra av sig om det inte går.',
              ok: 'delvis', princip: 'uppfoljning', tid: 2,
              kampanj: { nyckel: 'anna-rehab', varde: 'oppen' },
              fx: { tydlighet: -4 },
              utfall: 'Anna hör inte av sig. Ni ses igen om nio veckor.',
              varfor: 'Öppen återkomst låter generöst men lägger initiativet hos den som har svårast att ta det. De som fastnar är nästan alltid de som inte hörde av sig.' },
            { text: 'Avsluta rehabkoordinatorkontakten – hon är ju på väg tillbaka.',
              ok: false, princip: 'uppfoljning', tid: 1,
              kampanj: { nyckel: 'anna-rehab', varde: 'avslut' },
              fx: { tydlighet: -12, agens: -6 },
              utfall: 'Tre veckor senare är Anna sjukanmäld igen och ingen plan finns kvar.',
              varfor: 'Att avsluta mitt i en pågående återgång, precis när arbetsgivarkontakten ska sättas, är att lämna ärendet vid det svåraste steget.' }
          ] }
      ]
    },

    /* ================================================================
       JONAS – 11 månader sjukskriven. Endast övningsläge.
       ================================================================ */
    {
      id: 'rko-jonas',
      roll: 'rehabkoordinator',
      titel: 'Långtidsuppföljning, månad 11',
      patient: 'jonas',
      lage: 'rum',
      minuter: 19,
      svarighet: 3,
      endastDrill: true,
      principer: ['plan', 'ansvar', 'uppfoljning', 'salutogen'],
      journal: [
        ['Pågående', 'Sjukskriven 100 % i 11 månader. F43.8A.'],
        ['Behandling', 'Avslutad KBT för fem månader sedan'],
        ['Arbetsgivare', 'Ingen kontakt de senaste fyra månaderna'],
        ['Plan', 'Rehabplan upprättad månad 3. Ej uppdaterad sedan dess.'],
        ['Rehabkedjan', 'Passerat dag 180']
      ],
      intro: [
        'Jonas har varit borta i elva månader. Han kommer i tid, som alltid.',
        'Ni har setts fyra gånger. Ingenting har hänt mellan gångerna.'
      ],

      beats: [
        { typ: 'replik', humor: 'trott',
          text: 'Det är ungefär som förra gången. Jag sover bättre men jag klarar inte tanken på att gå tillbaka. Kan vi inte bara förlänga så jag får lite mer tid?' },

        { typ: 'kontroll',
          banner: 'ANALYS',
          fraga: 'Vad är det allvarligaste problemet i Jonas ärende?',
          tidFel: 2,
          princip: 'plan',
          val: [
            { text: 'Sjukfallet har pågått utan aktiva åtgärder – behandlingen är avslutad, planen är inaktuell och arbetsgivarkontakten har upphört', ratt: true },
            { text: 'Att han inte är tillräckligt motiverad', ratt: false },
            { text: 'Att sjukskrivningen är för låg i grad', ratt: false },
            { text: 'Att han har fel diagnos', ratt: false }
          ],
          forklaring: 'Elva månaders sjukskrivning där fem månader saknar både behandling och plan är ett systemfel, inte ett motivationsfel. Vid passerad dag 180 prövas dessutom arbetsförmågan mot normalt förekommande arbete – att inte ha förberett det är att låta Jonas möta beskedet ensam.' },

        { typ: 'val',
          fraga: 'Hur tar du upp att tiden håller på att rinna ut?',
          tips: 'Han behöver veta hur det ser ut, utan att beskedet blir ett hot.',
          val: [
            { text: 'Vara rak: förklara vad som händer i rehabkedjan, vad det kan betyda för hans ersättning, och att ni har några veckor på er att göra något åt det – tillsammans.',
              tid: 5, ok: true, princip: 'forvantan',
              humor: 'orolig', reaktion: 'Jonas blir blek men lyssnar hela vägen.',
              svar: 'Det har ingen sagt till mig. Varför har ingen sagt det?',
              fx: { tydlighet: 18, allians: 8, agens: 10 },
              varfor: 'Obehaglig information i tid är omtanke. Att undanhålla den för att skona någon leder till att beskedet kommer från Försäkringskassan i stället, utan förberedelse och utan plan.' },
            { text: 'Undvika ämnet idag – han är redan nedstämd.',
              tid: 2, ok: false, princip: 'forvantan',
              humor: 'trott', reaktion: 'Samtalet blir trevligt och innehållslöst.',
              svar: 'Skönt att prata i alla fall.',
              fx: { tydlighet: -16, agens: -10 },
              varfor: 'Den femte trevliga uppföljningen utan innehåll. Att skydda någon från information är att ta ifrån dem möjligheten att agera.' },
            { text: 'Säga att sjukpenningen sannolikt dras in om han inte börjar jobba.',
              tid: 2, ok: false, princip: 'salutogen',
              humor: 'orolig', reaktion: 'Jonas kniper ihop.',
              svar: 'Så nu hotar ni mig också.',
              fx: { allians: -18, agens: -12 },
              varfor: 'Samma information, levererad som ett hot och som en förutsägelse du inte får göra. Det slår sönder alliansen och löser ingenting.' }
          ] },

        { typ: 'flera',
          banner: 'ÅTGÄRDER',
          fraga: 'Vilka tre saker sätter du igång nu?',
          antal: 3,
          tidPer: 2,
          tips: 'Något som ger behandling, något som ger arbetsplatskontakt, något som ger struktur och datum.',
          val: [
            { text: 'Ny medicinsk bedömning och ställningstagande till återupptagen behandling', ratt: true, princip: 'plan',
              fx: { underlag: 12 },
              varfor: 'Fem månader utan behandling i ett pågående sjukfall är i sig ett skäl till omprövning.' },
            { text: 'Avstämningsmöte med arbetsgivaren, efter samtycke, med Jonas närvarande', ratt: true, princip: 'ansvar',
              fx: { tydlighet: 12, agens: 8 },
              varfor: 'Kontakten har legat nere i fyra månader. Ett avstämningsmöte är verktyget när planen står still – och Jonas ska vara med, inte omtalad.' },
            { text: 'Uppdaterad rehabplan med arbetsträning i små steg, ansvarig och datum', ratt: true, princip: 'plan',
              fx: { tydlighet: 14 },
              varfor: 'Efter elva månader krävs konkreta, små och daterade steg. Det första steget ska vara så litet att det är svårt att misslyckas med.' },
            { text: 'Föreslå att han byter yrke', ratt: false,
              fx: { agens: -10 },
              varfor: 'Kan bli aktuellt, men inte som första åtgärd och inte innan arbetsplatsspåret prövats.' },
            { text: 'Skriva till Försäkringskassan och begära förlängning', ratt: false, princip: 'plan',
              fx: { tydlighet: -10 },
              varfor: 'Det är inte rehabkoordinatorns beslut, och en förlängning utan innehåll förlänger bara problemet.' },
            { text: 'Boka in honom hos dig var fjärde vecka som förut', ratt: false, princip: 'uppfoljning',
              fx: { tydlighet: -8 },
              varfor: 'Samma uppföljning som inte gett något på fem månader. Frekvensen är inte problemet – innehållet är.' }
          ] },

        { typ: 'beslut',
          banner: 'AVSLUT',
          fraga: 'Vad blir nästa steg?',
          val: [
            { text: 'Avstämningsmöte inom två veckor, uppdaterad plan med daterade delmål, ny medicinsk bedömning bokad, och Jonas ringer själv sin chef i morgon med ditt stöd.',
              ok: true, princip: 'plan', tid: 3,
              fx: { tydlighet: 16, agens: 12 },
              utfall: 'Arbetsträning startar sex veckor senare, två timmar två dagar i veckan.',
              varfor: 'Allt som saknades sätts igång samtidigt: behandling, arbetsplatskontakt och en plan med datum. Och Jonas gör det som är hans att göra.' },
            { text: 'Uppdatera planen och boka återbesök om fyra veckor.',
              ok: 'delvis', princip: 'uppfoljning', tid: 2,
              fx: { tydlighet: 4 },
              utfall: 'Planen är uppdaterad men arbetsgivaren är fortfarande inte kontaktad.',
              varfor: 'Bättre än inget, men den kritiska bristen kvarstår. Utan arbetsplatskontakt finns ingenting att återgå till.' },
            { text: 'Låta honom vila några veckor till och ta upp det vid nästa besök.',
              ok: false, princip: 'plan', tid: 1,
              fx: { tydlighet: -16, agens: -12 },
              utfall: 'Vid månad tolv får Jonas avslag på sjukpenningen. Ingen plan finns.',
              varfor: 'Elva månader blev tolv utan att något ändrades. Det är så ett sjukfall slutar med både ohälsa och utan försörjning.' }
          ] }
      ]
    }
  ];

})(window);
