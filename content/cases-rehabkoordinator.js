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
      minuter: 27,
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

        { typ: 'val',
          fraga: 'Hon åkte tidigare för att slippa folk i entrén. Hur ser du på det?',
          tips: 'Det fungerade – och det är samtidigt samma mönster som gjorde henne sjuk. Båda sakerna är sanna på en gång.',
          val: [
            { text: 'Det var smart, och det fick dig in genom dörren. Samtidigt är det ju att gå runt det som är svårt. Vi behåller det ett par veckor, och sätter ett datum för att flytta tiden framåt i steg.',
              tid: 4, ok: true, princip: 'evidens',
              humor: 'neutral', reaktion: 'Anna funderar. "Så det är fusk?"',
              svar: 'Så det är fusk på sätt och vis? Fast det funkade ju.',
              fx: { agens: 16, tydlighet: 14, allians: 8 },
              varfor: 'En anpassning som gör det första steget möjligt är rätt använd som brygga – men den är också ett undvikande, och undvikanden som får stå kvar växer. Att sätta ett avtrappningsdatum redan när anpassningen införs är skillnaden mellan en trappa och en ny platå.' },
            { text: 'Bra hittat! Fortsätt så, det viktiga är att du kommer dit.',
              tid: 2, ok: 'delvis', princip: 'evidens',
              humor: 'lattad', reaktion: 'Anna ser nöjd ut.',
              svar: 'Skönt. Då gör jag så tills vidare.',
              fx: { allians: 6, agens: -8, tydlighet: -10 },
              varfor: 'Uppmuntran är rätt, men "tills vidare" gör undvikandet permanent. Om ett halvår är den tidiga ankomsten en förutsättning i stället för ett steg, och att flytta den blir då en ny exponering att börja om med.' },
            { text: 'Det där är ett undvikandebeteende. Det måste du sluta med, från och med imorgon.',
              tid: 2, ok: false, princip: 'bedda-e',
              humor: 'orolig', reaktion: 'Anna drar ihop axlarna.',
              svar: 'Så det jag faktiskt klarade var fel också?',
              fx: { allians: -14, agens: -12 },
              varfor: 'Analysen stämmer, men tidpunkten och tonen är fel. Att rycka undan den enda anpassning som fick henne in genom dörren, mitt i en pågående förbättring, riskerar ett återfall – och beskedet landar som att det hon klarade inte räknades.' }
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
            { text: 'Konkreta steg med namngiven ansvarig, inklusive hur den anpassade starttiden ska trappas av', ratt: true, princip: 'plan',
              fx: { tydlighet: 12 },
              varfor: 'Utan en namngiven ansvarig blir varje steg allas och därmed ingens. Och en anpassning utan avtrappningsplan blir kvar tills någon råkar ifrågasätta den.' },
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
            { text: 'Trepartsmöte med Jonas och arbetsgivaren, efter dokumenterat samtycke – och en begäran till Försäkringskassan om avstämningsmöte', ratt: true, princip: 'ansvar',
              fx: { tydlighet: 12, agens: 8 },
              varfor: 'Kontakten har legat nere i fyra månader. Håll isär de två mötena: trepartsmötet med patient och arbetsgivare kallar du till själv, avstämningsmötet kallar Försäkringskassan till i ett pågående ärende och det du kan göra är att begära det. Att veta vilket möte som är vems är skillnaden mellan att få till ett möte och att vänta på ett. Jonas ska vara med, inte omtalad.' },
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
            { text: 'Trepartsmöte inom två veckor, begäran om avstämningsmöte skickad, uppdaterad plan med daterade delmål, ny medicinsk bedömning bokad, och Jonas ringer själv sin chef i morgon med ditt stöd.',
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
    },

    /* ================================================================
       MIRIAM – bokad hit på triagens 'delvis'-val i ssk-miriam.
       Inte sjukskriven, inget sjukfall, ingenting att koordinera.
       Fallet som lär ut var rehabkoordinatorns uppdrag börjar och
       slutar – och att ett nej ändå måste innehålla något.
       Låses upp när kampanjen är klar. Endast övningsläge.
       ================================================================ */
    {
      id: 'rko-miriam',
      roll: 'rehabkoordinator',
      titel: 'Bokat besök, tisdag 14.30',
      patient: 'miriam',
      lage: 'rum',
      minuter: 28,
      svarighet: 3,
      laser: 'oplanerat',
      endastDrill: true,
      principer: ['ansvar', 'forvantan', 'dorr', 'samtycke', 'evidens', 'agens', 'uppfoljning', 'bedda-b', 'sjukdomskrav'],
      journal: [
        ['Ärende', 'Triagerad av sjuksköterska i chatt i fredags. Bokad hit med texten "stöd i dialogen med arbetsgivaren".'],
        ['Noterat i triagen', 'Ny chef sedan januari. Fråntagen sina arbetsuppgifter, kallas inte till enhetens möten. Sover, äter och tränar som vanligt. Nekar tankar på att inte vilja leva. Utför de uppgifter hon får.'],
        ['Sjukskrivning', 'Ingen. Inget pågående sjukfall. Ingen sjukanmälan hos arbetsgivaren.'],
        ['Tidigare', 'Inga kontakter för psykisk ohälsa. Senaste besök 2022, öroninflammation. Inga läkemedel.'],
        ['Arbete', 'Teamledare, kommunal förvaltning. Samma enhet i nitton år.'],
        ['Samtycke', 'Ej taget. Ingen kontakt med tredje part har förekommit.']
      ],
      intro: [
        'Tisdag 14.30. Tiden är en av dem du håller för uppföljning av sjukskrivna. I kallelsen står det "stöd i dialogen med arbetsgivaren".',
        'Miriam Sjödin kommer in med en pärm under armen och lägger den på bordet innan hon sätter sig.'
      ],

      beats: [

        { typ: 'replik', humor: 'spand',
          text: 'Sköterskan sa att sjukskrivning inte gick, men att du hjälper folk med arbetsgivaren. Jag har skrivit ner allt sedan i februari. Varje möte jag inte blivit kallad till, varje uppgift som flyttats. Kan du ta det med honom?' },

        { typ: 'val',
          fraga: 'Hur ramar du in besöket?',
          tips: 'Hon kom hit med en förväntan som någon annan skapade. Den behöver justeras innan ni börjar – annars justeras den av sig själv, senare, och då som en besvikelse.',
          val: [
            { text: 'Innan vi börjar måste jag vara ärlig om vad jag är. Jag samordnar vård och arbetsliv för den som är sjukskriven, och jag ringer inte chefer åt patienter – det är din relation och den ska du ha kvar. Sköterskans bedömning tänker jag varken göra om eller överpröva. Men du sitter här nu, och jag tänker att vi använder tiden till att reda ut vem som faktiskt äger det du beskriver, och vad du kan göra med det. Går det?',
              tid: 4, ok: true, princip: 'forvantan',
              humor: 'neutral', reaktion: 'Miriam drar handen från pärmen. "Så vad kan du då?"',
              svar: 'Okej. Så vad kan du göra, då?',
              fx: { tydlighet: 18, agens: 8, allians: 4 },
              varfor: 'Tre saker på trettio sekunder: vad du är, vad du inte gör, och vad tiden ska användas till. En förväntan som inte justeras i början kostar dubbelt i slutet – då står ditt eget uteblivna löfte i vägen för det besked hon ska få. Att du samtidigt säger att du inte omprövar sköterskans bedömning stänger den vanligaste flykten: att patienten söker en ny bedömare tills någon säger ja.' },

            { text: 'Berätta från början, i din takt. Jag har tjugoåtta minuter och jag lyssnar.',
              tid: 5, ok: 'delvis', princip: 'bedda-e',
              humor: 'oppen', reaktion: 'Miriam öppnar pärmen på första fliken.',
              svar: 'Tack. Då börjar jag i februari. Det första var att jag inte fick vara med på planeringsdagen...',
              fx: { allians: 12, tydlighet: -10 },
              varfor: 'Ett gott bemötande som ändå kostar. Du har inte sagt vad besöket kan mynna ut i, så hon fyller själv i svaret – och du har öppnat pärmen, alltså utredningen av konflikten. Om tjugo minuter är materialet stort, förväntan hög och tiden slut. Att lyssna är rätt; att lyssna innan ramen är satt gör att lyssnandet blir ett löfte.' },

            { text: 'Låt mig läsa igenom pärmen, så ringer jag honom i veckan. Det här ska inte få fortsätta.',
              tid: 3, ok: false, princip: 'ansvar',
              humor: 'lattad', reaktion: 'Miriam ser lättad ut och skjuter fram pärmen.',
              svar: 'Tack. Äntligen någon som gör något.',
              fx: { allians: 14, agens: -18, sakerhet: -14, tydlighet: -12 },
              varfor: 'Rummets varmaste ögonblick och tre fel på en gång. Du tar över en relation hon ska ha kvar när du är borta. Du gör vården till part i en arbetsrättslig fråga där du hört ena sidan. Och du planerar en kontakt med tredje part utan att samtycket ens kommit på tal – där sekretessen bryts av hennes samtycke, aldrig av att du tycker att saken är angelägen. Fråga dig dessutom vad du skulle säga i luren: du har ingen sjukdom att beskriva och ingen funktionsnedsättning att beskriva. Det enda du kan förmedla är hennes berättelse, och den kan hon förmedla själv, med större tyngd.' },

            { text: 'Jag arbetar bara med sjukskrivna patienter. Du är felbokad hit och får ta det här med din arbetsgivare.',
              tid: 1, ok: false, princip: 'dorr',
              humor: 'sluten', reaktion: 'Miriam lägger handen på pärmen och reser sig halvvägs.',
              svar: 'Ni skickade hit mig.',
              fx: { allians: -16, agens: -10, tydlighet: -4 },
              varfor: 'Uppdragsbedömningen är i sak riktig och slutsatsen är ändå fel. Felbokningen är vår, inte hennes, och den går inte att lämna tillbaka till patienten. "Ta det med din arbetsgivare" är dessutom ingen dörr när det är arbetsgivaren som är problemet. Hon sitter redan i rummet – tiden är förbrukad oavsett vad du gör med den.' }
          ] },

        { typ: 'kontroll',
          banner: 'MANDATET',
          fraga: 'Miriam är inte sjukskriven och har inget pågående sjukfall. Vad säger ditt uppdrag om att hon sitter här?',
          tidFel: 2,
          princip: 'ansvar',
          val: [
            { text: 'Lagen om koordineringsinsatser gäller sjukskrivna patienter, så det här är inte en koordineringsinsats. Om du får ta emot henne alls avgörs av vårdcentralens eget uppdrag – och även om du får finns det inget sjukfall att koordinera.',
              ratt: true },
            { text: 'Lagen förbjuder mig att träffa henne. Besöket ska avbrytas.',
              ratt: false,
              varfor: 'Lagen ålägger regionen en skyldighet mot sjukskrivna patienter. Den säger ingenting om att andra inte får tas emot. I remissarbetet ville flera myndigheter och organisationer att skyldigheten skulle gälla även förebyggande, och regeringen valde att inte införa den – det är ett nej till ett skallkrav, inte ett förbud. Skillnaden är hela poängen: det som avgör om du får sitta här är din vårdgivares uppdrag, inte lagens ordalydelse.' },
            { text: 'Hon riskerar att bli sjukskriven, alltså är hon min patient.',
              ratt: false,
              varfor: 'Förebyggande koordinering finns på riktigt – flera regioner har uttryckligen med den som riskerar sjukskrivning i uppdraget, och där kan det vara helt rätt. Men den vilar på ett lokalt beslut, inte på lagen, och den förutsätter att risken går att påverka med vårdens medel. Här har sköterskan redan konstaterat att det inte finns något sjukdomstillstånd. Risken ligger i arbetsmiljön, och den förebyggs av arbetsgivaren.' },
            { text: 'Sjuksköterskan har bokat hit henne, alltså är hon triagerad rätt och mitt uppdrag följer av bokningen.',
              ratt: false,
              varfor: 'En bokning är inte ett mandat. Den som tar emot ett ärende måste själv kunna säga vad hen gör med det, annars vandrar ärendet vidare i huset tills det tar slut hos någon som inte heller kan säga det. Att en kollega tvekade är ett skäl att titta noga, inte ett skäl att sluta titta.' }
          ],
          forklaring: 'Lagen om koordineringsinsatser för sjukskrivna patienter (2019:1297) ger regionen en skyldighet att erbjuda insatser till sjukskrivna patienter, när det behövs för att främja återgång till eller inträde i arbetslivet. Miriam är inte sjukskriven, så skyldigheten är inte utlöst – och lagen förbjuder inte att hon tas emot ändå. Frågan avgörs av ditt lokala uppdrag, och den skiljer sig mellan regioner och mellan vårdcentraler. Två saker till, som gör svaret skarpare än en formalitet. Det första: även om du får ta emot henne finns här inget att koordinera. Ingen sjukskrivning, ingen rehabplan att skriva, ingen behandling att samordna med och ingen funktionsbeskrivning att ta med till en arbetsgivare. Det andra: tiden du lägger här är tid som tillhör de sjukskrivna patienter du faktiskt har en skyldighet mot. Det var invändningen mot hela lagen från flera remissinstanser – undanträngning – och den blir konkret först i ett rum som det här. Det betyder inte att du ska köra ut henne. Det betyder att besöket ska vara kort, avgränsat och sluta i något hon kan använda, inte i ett ärende hos dig.' },

        { typ: 'replik', humor: 'spand',
          text: 'Nitton år har jag varit där. Nitton. Och nu sitter jag i ett rum på vårdcentralen och får höra att det inte hör hit heller.' },

        { typ: 'flera',
          banner: 'DET DU FAKTISKT BEHÖVER VETA',
          fraga: 'Du hinner tre frågor innan ni landar besöket. Välj tre.',
          antal: 3,
          tidPer: 2,
          tips: 'Du ska inte utreda konflikten. Du ska veta om bilden rört sig sedan i fredags, vad hon redan gjort, och vem som finns på hennes sida.',
          val: [
            { text: 'Har något ändrat sig sedan du chattade med oss i fredags – sömnen, orken, hur söndagskvällarna känns?',
              ratt: true, princip: 'bedda-b', fx: { underlag: 12, sakerhet: 10 },
              varfor: 'Fyra dagar är kort, och det är precis därför frågan är billig. Du misstror inte sköterskans bedömning, du sätter ett datum på den. En reaktion på en pågående kränkning kan över tid utvecklas till ett sjukdomstillstånd, och det sker sällan med ett larm – det börjar med att sömnen viker och att söndagskvällen blir outhärdlig. Frågan tar tjugo sekunder och den är det enda som gör "hör av dig om det ändras" till något annat än en artighet.' },
            { text: 'Vad har du redan gjort åt det här, och vad hände då?',
              ratt: true, princip: 'agens', fx: { agens: 12, underlag: 10 },
              varfor: 'Hon har en pärm. Antingen har hon redan tagit steg som ingen följt upp, eller så har hon samlat i tysthet i sju månader – och de två lägena kräver helt olika råd. Det är dessutom den enda frågan i listan som utgår från att hon är någon som kan handla, och det är den utgångspunkten hennes chef har ägnat sju månader åt att ta ifrån henne.' },
            { text: 'Vet du vem som är skyddsombud hos er, och har er förvaltning företagshälsovård?',
              ratt: true, princip: 'ansvar', fx: { tydlighet: 14, agens: 8 },
              varfor: 'Frågan som avgör vad ditt avslut kan innehålla. Finns ett skyddsombud finns redan en person med rätt att skriftligt begära åtgärder av arbetsgivaren, få besked, och gå vidare till Arbetsmiljöverket om svaret uteblir – det är den enda part i det här som kan tvinga fram ett svar. Företagshälsovården är arbetsgivarens resurs och byggd för just det här. Lägg märke till att frågan gäller vem skyddsombudet är, inte om hon är fackligt ansluten. Facklig tillhörighet är en särskilt skyddad personuppgift och har inget i en journal att göra – och du behöver inte veta det för att kunna säga att facket finns.' },
            { text: 'Vad sa chefen exakt på mötet i mars?',
              ratt: false, princip: 'ansvar', fx: { underlag: -6, sakerhet: -6 },
              varfor: 'Nu utreder du konflikten. Du hör ena sidan, du har ingen befogenhet att pröva den andra, och allt du skriver ner blir en partsinlaga om en namngiven chef i en journal som ska följa Miriam i decennier. I chatten kostade den frågan lite. Här kostar den mer: pärmen ligger på bordet och hon vill inget hellre än att gå igenom den med dig.' },
            { text: 'Skulle du vilja att jag följer med på ett möte med din chef?',
              ratt: false, princip: 'ansvar', fx: { agens: -12, tydlighet: -10 },
              varfor: 'Ett erbjudande förklätt till en fråga, och ett du inte kan hålla. Det finns inget sjukfall, inget samtycke och ingenting från vården att säga på mötet. Har du väl frågat är löftet givet, och att ta tillbaka det kostar mer förtroende än att aldrig ha erbjudit det.' },
            { text: 'Hur mycket skulle du behöva vara borta för att orka?',
              ratt: false, princip: 'dorr', fx: { tydlighet: -12 },
              varfor: 'Förutsätter en sjukskrivning som ingen bedömt och som du dessutom inte beslutar om. Efter den frågan är längden förhandlad och varje annat besked låter som ett svek.' },
            { text: 'Har du funderat på att söka något annat? Nitton år är länge.',
              ratt: false, princip: 'agens', fx: { agens: -10, allians: -6 },
              varfor: 'Ett råd förklätt till en fråga, och det billigaste sättet att lägga problemet tillbaka på den som drabbats av det. Det kan mycket väl bli hennes slutsats – men det är hennes att komma fram till, och den dag hon gör det ska det vara ett val och inte en reträtt.' }
          ] },

        { typ: 'replik', humor: 'spand',
          text: 'Nej, det är sig likt. Jag sover, jag springer på tisdagar och torsdagar. Jag är inte ledsen, jag är arg. Och jo – jag mejlade HR i maj. De svarade att jag skulle prata med min närmaste chef. Det var hela svaret. Skyddsombud har vi, Lasse på andra våningen tror jag. Företagshälsovård finns, men dit ska man gå via chefen.' },

        { typ: 'val',
          humor: 'spand',
          text: 'Kan du inte i alla fall skriva något? Ett papper där det står att jag mår dåligt av det här. Då kanske de tar det på allvar.',
          fraga: 'Vad svarar du?',
          tips: 'Fråga dig vad ett papper från vården faktiskt skulle innehålla – och vad det skulle göra med frågan om vems problemet är.',
          val: [
            { text: 'Nej, och jag ska säga varför. Allt jag kunde skriva är det du berättat för mig, och det står redan bättre i din egen pärm. Ett papper från vården skulle dessutom göra det här till en fråga om din hälsa i stället för om deras arbetsmiljö, och det är precis den flytten du inte vill ha. Det som väger hos er är en skriftlig begäran från skyddsombudet – den måste arbetsgivaren svara på.',
              tid: 4, ok: true, princip: 'ansvar',
              humor: 'neutral', reaktion: 'Miriam blir tyst. Sedan: "Måste de svara?"',
              svar: 'Måste de svara? Det visste jag inte.',
              fx: { tydlighet: 16, agens: 16, sakerhet: 8 },
              varfor: 'Nejet har ett skäl som handlar om henne och inte om regler, och det byts direkt mot ett verktyg som biter hårdare än det hon bad om. Mekanismen är värd att se: ett intyg om att någon mår dåligt av sin arbetsplats flyttar frågan från arbetsmiljö till hälsa, och därmed från arbetsgivarens bord till hennes. Skyddsombudets framställan gör tvärtom – den tvingar fram ett skriftligt besked från den som faktiskt äger frågan, och uteblir beskedet finns Arbetsmiljöverket.' },

            { text: 'Jag skriver en anteckning om det du berättat, så kan du begära ut din journal själv och visa den var du vill.',
              tid: 3, ok: 'delvis', princip: 'samtycke',
              humor: 'lattad', reaktion: 'Miriam nickar. "Bra. Då står det svart på vitt."',
              svar: 'Bra. Då står det i alla fall svart på vitt någonstans.',
              fx: { allians: 8, sakerhet: -8, underlag: -6 },
              varfor: 'Juridiskt renare än det ser ut – hon bär själv ut uppgiften, ingen sekretessprövning behövs och ingen tredje part kontaktas. Problemet är innehållet. Ena partens anklagelser mot en namngiven chef, nedskrivna av vården, får vårdens auktoritet utan vårdens underlag, och de blir kvar i journalen i decennier. Skilj på två saker: att besöket, beslutet och den information du gett ska journalföras är självklart, och det ska det. Att journalföra konflikten är något annat. Värt att diskutera i gruppen: hur skriver ni om en arbetsplatskonflikt som ni samtidigt bedömt inte är ett vårdärende?' },

            { text: 'Jag kan ringa HR och berätta hur det här påverkar dig. Ibland lyssnar de mer på oss.',
              tid: 3, ok: false, princip: 'samtycke',
              humor: 'lattad', reaktion: 'Miriam ler för första gången.',
              svar: 'Skulle du? Tack.',
              fx: { allians: 12, sakerhet: -18, agens: -14 },
              varfor: 'Meningen "ibland lyssnar de mer på oss" är sann, och det är just därför den är farlig. Du planerar att lämna uppgifter om en patient till tredje part utan dokumenterat samtycke, och ett samtycke hade gjort det tillåtet men inte klokt: vad ska du säga? Du har ingen sjukdom att beskriva, ingen funktion att beskriva och ingen plan att förankra. Kvar blir att vården gått in som part i hennes anställning, att din auktoritet lånats ut till ena sidan i en konflikt du inte utrett – och att hon nästa gång kan det ännu lite mindre själv.' },

            { text: 'Jag kan inte skriva något, men jag bokar in dig hos vår läkare så att du åtminstone får en bedömning.',
              tid: 2, ok: false, princip: 'sjukdomskrav',
              humor: 'lattad', reaktion: 'Miriam: "Okej. När då?"',
              svar: 'Okej. När kan jag komma?',
              fx: { allians: 8, tydlighet: -14, underlag: -10 },
              varfor: 'Det respektablaste sättet att göra det här till hennes sjukdom. Bedömningen är redan gjord och svaren ligger framför dig: hon sover, äter, tränar och utför det hon får utföra. Läkartiden skulle användas till att säga samma sak en gång till, tio dagar senare, till någon som under tiden hunnit sjukanmäla sig. Att skicka vidare när man känner obehag är inte försiktighet – det är obehaget som fattar beslutet.' }
          ] },

        { typ: 'kontroll',
          banner: 'OM DET ÄNDÅ BLIR EN ARBETSGIVARKONTAKT',
          fraga: 'Miriam frågar: "Och om jag blir sjukskriven längre fram – då kan du väl vara med på ett möte?" Vad krävs för att du ska få tala med hennes arbetsgivare den dagen?',
          tidFel: 2,
          princip: 'samtycke',
          val: [
            { text: 'Ett dokumenterat och avgränsat samtycke – vem du får tala med, om vad, och hur länge det gäller – och något från vården att faktiskt säga: en beskrivning av funktion och behov, inte hennes berättelse om chefen.',
              ratt: true },
            { text: 'Att hon är sjukskriven. Sjukskrivningen ger dig rätt att kontakta arbetsgivaren.',
              ratt: false,
              varfor: 'Sjukskrivningen utlöser regionens skyldighet att erbjuda dig som stöd. Den ger ingen rätt att lämna ut uppgifter. Sekretessen bryts av hennes samtycke, aldrig av ditt uppdrag och aldrig av mottagarens behov.' },
            { text: 'Ett generellt samtycke till kontakt med berörda aktörer, taget vid första besöket.',
              ratt: false,
              varfor: 'Vanligt, bekvämt och för brett. Ett samtycke som inte säger vem, om vad och hur länge kan hon varken överblicka eller i praktiken ta tillbaka – och du vet inte var gränsen går den dag någon ställer en fråga du inte tänkt på. Ett samtycke ska gå att läsa upp för den det gäller utan att någon blir förvånad.' },
            { text: 'Arbetsgivarens rehabiliteringsansvar. Chefen är skyldig att agera och måste därför få veta vad som gäller.',
              ratt: false,
              varfor: 'Ansvaret är verkligt och det ger ingen rätt till uppgifter från vården. Arbetsgivaren ska få veta vad som behövs för att anpassa arbetet – vilka moment som inte fungerar och vad som skulle hjälpa – och det kan Miriam förmedla själv eller du med hennes samtycke. Diagnosen ska aldrig dit.' }
          ],
          forklaring: 'Rätt svar har två halvor och den andra glöms nästan alltid. Formen: samtycket ska vara dokumenterat och avgränsat i vem, vad och hur länge, och ett samtycke som är taget i förväg för allt är i praktiken inget samtycke. Innehållet: du måste ha något att säga. Ett möte där vården beskriver funktion och behov är användbart. Ett möte där vården återger patientens beskrivning av sin chef är ett partsmöte med en extra part. Lägg också märke till vad frågan gjorde med rummet. Hon frågade om ett scenario där hon är sjukskriven, och om du svarar utan att säga att det är hypotetiskt har du just bekräftat att sjukskrivningen är på väg. Svara på frågan – och säg samtidigt att den beskriver ett annat läge än det ni är i.' },

        { typ: 'val',
          humor: 'orolig',
          text: 'Och om det inte blir bättre? Om jag går så här ända till jul?',
          fraga: 'Vad svarar du?',
          tips: 'Ett nej som öppnar en dörr måste säga när dörren gäller. "Hör av dig om det blir värre" är inte ett kriterium – det är ett ord var och en tolkar själv.',
          val: [
            { text: 'Då vill jag att du hör av dig, och jag ska vara konkret om vad jag menar. Inte "om det blir värre" – utan: om du börjar sova dåligt, om du slutar springa, om söndagskvällarna blir outhärdliga, eller om du märker att du inte kommer igång ens när du varit ledig en vecka. Då är det något annat än en dålig arbetsplats och då är det vår fråga. Och skulle det någon gång kännas som att du inte orkar leva ringer du samma dag.',
              tid: 4, ok: true, princip: 'dorr',
              humor: 'neutral', reaktion: 'Miriam skriver ner det på baksidan av pärmen.',
              svar: 'Sömnen, löpningen, söndagarna. Okej. Det kan jag hålla koll på.',
              fx: { tydlighet: 18, agens: 12, sakerhet: 12, allians: 8 },
              varfor: 'Fyra namngivna tecken hon själv kan avläsa, plus ett som inte tål väntan. Det är skillnaden mellan att avvakta och att missa något: du avvaktar med ett kriterium, inte med en förhoppning. Kriterierna är dessutom valda så att de fångar just det som skulle förändra bedömningen – att besvären följer med hem och överlever ledigheten. Och lägg märke till att hon skriver ner dem. Det är hon som blir sin egen uppföljning, vilket är den enda uppföljning som finns när det inte finns något ärende.' },

            { text: 'Jag ringer dig om en månad och hör hur det gått.',
              tid: 2, ok: 'delvis', princip: 'uppfoljning',
              humor: 'lattad', reaktion: 'Miriam ser lättad ut. "Skönt att någon hör av sig."',
              svar: 'Skönt. Då vet jag att någon hör av sig i alla fall.',
              fx: { allians: 12, tydlighet: 4, agens: -8 },
              varfor: 'Genuint försvarbart, och det är därför det är svårt. Utfrysning och kränkande särbehandling är kända riskfaktorer, och ett samtal om en månad fångar upp den som annars aldrig hör av sig – de som fastnar är nästan alltid de som inte hörde av sig. Priset är två saker: du gör henne till ett ärende hos dig utan sjukfall, och du flyttar initiativet från henne till dig i just det ögonblick hela poängen är att hon ska agera. Värt att diskutera i gruppen: ringer ni uppföljande samtal till patienter som inte har ett sjukfall, och vems tid är det?' },

            { text: 'Håller det i sig till jul får vi nog titta på en sjukskrivning ändå. Ingen orkar hur länge som helst.',
              tid: 2, ok: false, princip: 'sjukdomskrav',
              humor: 'lattad', reaktion: 'Miriam slappnar av i axlarna för första gången.',
              svar: 'Okej. Då vet jag att det finns en gräns i alla fall.',
              fx: { allians: 14, agens: -18, tydlighet: -16, underlag: -10 },
              varfor: 'Rummets snällaste mening och besökets dyraste. Du har gjort sjukskrivning till belöningen för att ingenting händer, i ett ärende där det saknas sjukdom och där du inte ens är den som beslutar. Från och med nu har Miriam ett datum att härda ut till och ett skäl att inte ringa skyddsombudet – för blir det värre går det ju att lösa här. Och den dag hon kommer tillbaka i december är det någon annan som ska säga nej till ett löfte du gav.' },

            { text: 'Det vet vi inte idag. Vi får ta det när det händer.',
              tid: 1, ok: false, princip: 'forvantan',
              humor: 'sluten', reaktion: 'Miriam stänger pärmen.',
              svar: 'Mm.',
              fx: { tydlighet: -12, allians: -8, agens: -6 },
              varfor: 'Sant och oanvändbart. Hon frågade efter en gräns och fick veta att det inte finns någon. Det som återstår för henne är att gissa var gränsen går, och de flesta gissar för sent.' }
          ] },

        { typ: 'beslut',
          banner: 'AVSLUT',
          fraga: 'Hur avslutar du?',
          tips: 'Alla besök ska inte bli ett ärende. Men inget besök får sluta tomt.',
          val: [
            { text: 'Avsluta kontakten idag: sammanfatta vad du är och inte är, ge Lasse som adressat, ett första steg som är hennes, och kriterierna för när det blir vårdens fråga. Journalför besöket, beslutet och given information – inte konflikten.',
              ok: true, princip: 'ansvar', tid: 3,
              fx: { tydlighet: 16, agens: 14, sakerhet: 10 },
              utfall: 'Miriam pratar med Lasse på fredagen. Tre veckor senare ligger en skriftlig begäran om åtgärder hos förvaltningen. I journalen står vad hon sökt för, vilket besked hon fått och när hon ska höra av sig – ingenting om chefen.',
              varfor: 'Det här är fallet där rehabkoordinatorn gör mest nytta genom att inte öppna ett ärende. Miriam går härifrån med tre saker hon inte hade när hon kom: besked om varför det hon beskriver inte är något vården kan sjukskriva för, namnet på den som är skyldig att svara henne, och fyra tecken att bevaka. Att avsluta är ett beslut och ska dokumenteras som ett – vad hon sökte för, vad du beslutat och varför, och vad hon fått för information. Att det tog tjugo minuter i stället för ett halvårs ärende är inte snålhet; det är att tiden fortsätter tillhöra dem du har en skyldighet mot.' },

            { text: 'Avsluta med besked och hänvisning, och boka samtidigt ett kort uppföljande telefonsamtal om en månad.',
              ok: 'delvis', princip: 'uppfoljning', tid: 3,
              fx: { tydlighet: 8, allians: 8, agens: -6 },
              utfall: 'Miriam väntar in ditt samtal innan hon gör något. Skyddsombudet kontaktas först i november.',
              varfor: 'Omtänksamt, försvarbart och priset syns först i utfallet: så länge vården håller i tråden är det vården hon väntar på. Gör ni det ändå – och det finns goda skäl – säg då uttryckligen att samtalet inte ersätter hennes egna steg, och inled samtalet med vad hon gjort, inte med hur hon mår. Värt att diskutera i gruppen: vem betalar den tiden, och vilken sjukskriven patient fick vänta för den?' },

            { text: 'Öppna ett koordineringsärende: samtyckesblankett, rehabplan och kallelse till avstämningsmöte med arbetsgivaren.',
              ok: false, princip: 'plan', tid: 4,
              fx: { tydlighet: -12, sakerhet: -16, agens: -10 },
              utfall: 'Arbetsgivaren svarar inte. Vid tredje besöket säger Miriam att hon nog måste bli sjukskriven för att någon ska ta det på allvar.',
              varfor: 'Varje enskilt verktyg är rätt verktyg – i ett sjukfall. Här finns inget sjukfall, ingen plan att skriva och ingen sjukskrivning att koordinera mot, och till ett avstämningsmöte kallar Försäkringskassan i ett pågående ärende; det är inget forum för en arbetsplatskonflikt. Det du byggt är en vårdapparat runt en arbetsmiljöfråga, och den lär Miriam en sak med stor precision: vägen till att bli tagen på allvar går genom att bli sjukare.' },

            { text: 'Skicka tillbaka ärendet till triagen med noteringen att patienten är felbokad.',
              ok: false, princip: 'dorr', tid: 1,
              fx: { allians: -14, tydlighet: -10 },
              utfall: 'Miriam får ett meddelande i vårdappen tre dagar senare om att ärendet avslutats. Hon söker på nytt i oktober, och i januari.',
              varfor: 'Mandatbedömningen är riktig och den kommer för sent för att vara till någon nytta. Hon satt redan i rummet, felet var vårdens och det går inte att lämna tillbaka till henne. Att vara den som säger nej utan att vara den som säger något annat är den dyraste rollen i huset: nästa gång kommer hon tillbaka med mer symtom, för det är det språk hon lärt sig att vi lyssnar på.' }
          ] }
      ]
    }
  ];

})(window);
