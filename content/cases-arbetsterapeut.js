/* cases-arbetsterapeut.js – Arbetsterapeutens aktivitetsbedömning
   ⚠ EJ KLINISKT GRANSKAT – pedagogiskt utkast, ska granskas av verksamheten. */
(function (global) {
  'use strict';
  var LESS = global.LESS;

  LESS.fall.arbetsterapeut = [

    /* ================================================================
       CARINA – kampanjärende 3, steg 2.
       ================================================================ */
    {
      id: 'arb-carina',
      roll: 'arbetsterapeut',
      titel: 'Nybesök, fredag 10.00',
      patient: 'carina',
      lage: 'rum',
      minuter: 28,
      kampanj: 'carina',
      svarighet: 2,
      principer: ['vardagsrev', 'hjalpmedel', 'dfa-aktivitet', 'salutogen', 'agens', 'ansvar', 'uppfoljning'],
      journal: [
        ['Remiss', 'Triagerad av sjuksköterska. Handfunktion och arbetsförmåga.'],
        ['Diagnos', 'Tumbasartros bilateralt, värst höger (känd sedan 2 år)'],
        ['Arbete', 'Ekonomiassistent. Tangentbord ca 7 tim/dag, mus, pärmhantering.'],
        ['Vardag', 'Vårdar sin mamma på helgerna. Bor i lägenhet, hiss.'],
        ['Noterat', 'Tonar konsekvent ner sina besvär.']
      ],
      intro: [
        'Fredag 10.00. Carina kommer fem minuter för tidigt och ber om ursäkt för det.',
        'Hon håller höger tumme i vänster hand.'
      ],

      beats: [

        { typ: 'replik', humor: 'trott',
          text: 'Hej. Jag vet inte om jag borde ta upp en tid. Det finns säkert andra som behöver den mer. Det är ju bara tummarna.' },

        { typ: 'val',
          fraga: 'Hur börjar du?',
          tips: 'Hon underrapporterar. Om du bekräftar nedtoningen blir bedömningen fel innan den börjat.',
          val: [
            { text: 'Du har en tid, och den är din. Jag skulle vilja följa med dig genom en helt vanlig dag, från att du vaknar tills du somnar. Vi tittar på både det som skaver och det som fungerar.',
              tid: 4, ok: true, princip: 'vardagsrev',
              humor: 'neutral', reaktion: 'Carina slappnar av i axlarna och börjar berätta.',
              svar: 'Vanlig dag... Jag vaknar av att handen är stel. Jag har slutat använda kaffekvarnen. Jag öppnar burkar med en kniv. På jobbet klarar jag tangentbordet men musen får jag byta hand med.',
              fx: { allians: 12, underlag: 20, agens: 8 },
              varfor: 'Dygnsgenomgången ger dig aktivitetsdata som Carina själv aldrig hade rapporterat. Hon har redan gjort en rad anpassningar utan att kalla dem för det.' },
            { text: 'Okej, då tar vi det snabbt. Hur ont har du?',
              tid: 2, ok: false, princip: 'salutogen',
              humor: 'sluten', reaktion: 'Carina svarar snabbt och kortfattat.',
              svar: 'Det går bra. Det är inte så farligt.',
              fx: { allians: -10, underlag: -12 },
              varfor: 'Du bekräftade hennes bild av att hon tar för mycket plats, och fick ett svar som du inte kan bygga något på.' },
            { text: 'Artros går inte att göra något åt, men vi kan titta på hjälpmedel.',
              tid: 2, ok: 'delvis', princip: 'salutogen',
              humor: 'ledsen', reaktion: 'Carina nickar tyst.',
              svar: 'Ja. Det är väl bara att vänja sig.',
              fx: { agens: -12, underlag: 4 },
              varfor: 'Hjälpmedelsspåret är rätt, men inramningen är sjukdomsförstärkande. "Går inte att göra något åt" sänker hennes tilltro till att något kan bli bättre – vilket i sin tur påverkar arbetsförmågan.' }
          ] },

        { typ: 'kontroll',
          banner: 'AKTIVITETSBEGREPPET',
          fraga: 'Arbetsförmåga uppstår i mötet mellan tre saker. Vilka?',
          tidFel: 2,
          princip: 'vardagsrev',
          val: [
            { text: 'Person, aktivitet och miljö', ratt: true },
            { text: 'Diagnos, motivation och arbetsgivare', ratt: false },
            { text: 'Smärta, styrka och rörlighet', ratt: false },
            { text: 'Sjukdom, behandling och tid', ratt: false }
          ],
          forklaring: 'Ändras något av de tre så ändras förmågan. Du kan träna personen, förenkla eller byta ut aktiviteten, eller anpassa miljön. Just därför är arbetsförmåga aldrig en fast egenskap hos patienten – och därför kan sjukskrivning sällan vara den enda åtgärden.' },

        { typ: 'flera',
          banner: 'AKTIVITETSANALYS',
          fraga: 'Vilka tre moment i Carinas arbetsdag ska analyseras närmare?',
          antal: 3,
          tidPer: 2,
          tips: 'Leta efter kraftgrepp, tumbelastning och repetitivitet – inte efter det som bara känns jobbigt.',
          val: [
            { text: 'Musarbete: greppform, handledsvinkel, antal klick per dag', ratt: true, princip: 'dfa-aktivitet',
              fx: { underlag: 10 },
              varfor: 'Musgreppet belastar tumbasen kraftigt och används tusentals gånger per dag. Ett byte till vertikalmus eller rullmus är en liten åtgärd med stor effekt.' },
            { text: 'Pärmhantering: lyft, öppning av ringpärmar, kraftgrepp', ratt: true, princip: 'dfa-aktivitet',
              fx: { underlag: 10 },
              varfor: 'Kraftgrepp med tummen i ytterläge är den rörelse som gör mest ont vid tumbasartros. Här finns både teknik och hjälpmedel att sätta in.' },
            { text: 'Återhämtningsmönster: pauser, variation, helgernas belastning hos mamman', ratt: true, princip: 'vardagsrev',
              fx: { underlag: 12, agens: 8 },
              varfor: 'Helgerna är en osynlig arbetsvecka. Utan den delen av kartläggningen ser det ut som att jobbet ensamt orsakar besvären.' },
            { text: 'Hur ofta hon dammsuger', ratt: false,
              varfor: 'Kan vara relevant i en bredare ADL-bedömning men styr varken arbetsförmågan eller åtgärderna här.' },
            { text: 'Hennes inställning till att be om hjälp', ratt: false, fx: { allians: -6 },
              varfor: 'Riskerar att bli en personlighetsbedömning. Det du behöver är aktivitetsdata, inte en karaktärsanalys.' },
            { text: 'Om hon vill byta yrke', ratt: false, fx: { agens: -8 },
              varfor: 'Alldeles för tidigt. Yrkesbyte diskuteras när anpassning, hjälpmedel och arbetsteknik prövats – inte som första fråga.' }
          ] },

        { typ: 'val',
          fraga: 'Vad sätter du in?',
          tips: 'Person, aktivitet, miljö. Vilken av dem är billigast att ändra – och vad kan Carina göra redan idag?',
          val: [
            { text: 'Ortos för tumbasen till de belastande momenten, vertikalmus och pärmhållare, ändrad arbetsteknik och ledskydd, instruktion i handträning – och en genomgång av helgbelastningen tillsammans med Carina.',
              tid: 8, ok: true, princip: 'hjalpmedel',
              humor: 'oppen', reaktion: 'Carina provar ortosen och trycker på musen. Ögonbrynen åker upp.',
              svar: 'Åh. Det gör faktiskt inte ont så här. Får jag verkligen ta med den?',
              fx: { agens: 20, allians: 12, tydlighet: 10, underlag: 10 },
              varfor: 'Ortos, ergonomisk rådgivning och handträning är grundbehandlingen vid tumbasartros; hjälpmedlen och arbetstekniken är det som gör att grundbehandlingen håller en hel arbetsdag. Du ändrar miljön och aktiviteten i stället för att ta bort arbetet. Att hon känner skillnaden redan i rummet är den starkaste tänkbara feedbacken – hon lämnar besöket med bevis, inte med löften.' },
            { text: 'Du sliter ju för alla andra. Jag ordnar en ortos, så hör du av dig om det inte räcker.',
              tid: 3, ok: false, princip: 'uppfoljning',
              humor: 'lattad', reaktion: 'Carina ler för första gången under besöket.',
              svar: 'Tack. Det känns skönt att någon säger det.',
              fx: { allians: 14, agens: -14, underlag: -12, tydlighet: -10 },
              varfor: 'Besökets behagliga fälla. Hon blir tacksam, du blir omtyckt, och ingenting i hennes arbetsdag ändras. En ortos utan arbetsteknik, hjälpmedel och handträning är en tredjedel av grundbehandlingen. Och "hör av dig" lägger ansvaret tillbaka på den som redan tycker att hon tar för mycket plats – hon kommer inte att höra av sig.' },
            { text: 'Sjukskrivning 50 procent så att händerna får vila.',
              tid: 3, ok: false, princip: 'hjalpmedel',
              humor: 'orolig', reaktion: 'Carina blir orolig.',
              svar: 'Men vem gör mitt jobb då? Och blir det bättre av att jag är hemma?',
              fx: { agens: -16, underlag: -10 },
              varfor: 'Halva arbetstiden bort tar inte bort tumbelastningen – hemma väntar burkar, kassar och mammas hushåll. Utan anpassning löser frånvaron ingenting.' },
            { text: 'Rekommendera att hon slutar med helgerna hos mamman.',
              tid: 3, ok: false, princip: 'ansvar',
              humor: 'ledsen', reaktion: 'Carina blir tyst.',
              svar: 'Det kan jag inte. Det finns ingen annan.',
              fx: { allians: -14, agens: -10 },
              varfor: 'Vardagsrevidering görs tillsammans med patienten och handlar om att fördela om, inte om att stryka det som betyder mest. Ett omöjligt råd skapar bara skuld.' }
          ] },

        { typ: 'kedja',
          banner: 'DFA-KEDJAN',
          fraga: 'Bygg DFA-kedjan för Carina.',
          tips: 'Mätvärdet på greppstyrkan är funktionen. Aktivitetsledet ska handla om moment i hennes arbetsdag, med tid eller antal.',
          tidFel: 1,
          princip: 'bedda-d1',
          lank: [
            { etikett: 'D – DIAGNOS',
              fraga: 'Vilken rad är diagnosen?',
              val: [
                { text: 'M18.0 Tumbasartros bilateralt', ratt: true },
                { text: 'Nedsatt kraftgrepp höger, Jamar 12 kg mot 24 kg vänster', varfor: 'Ett mätvärde. Det hör till funktionen.' },
                { text: 'Kan ej hantera ringpärmar', varfor: 'Aktivitetsbegränsningen.' },
                { text: 'Tangentbordsarbete sju timmar om dagen', varfor: 'Exponeringen i arbetet, inte en diagnos.' },
                { text: 'Vårdar sin mamma på helgerna', varfor: 'En belastning i vardagen. Viktig för planeringen, men inte en diagnos.' }
              ] },
            { etikett: 'F – FUNKTIONSNEDSÄTTNING',
              fraga: 'Vilken rad är funktionsnedsättningen?',
              val: [
                { text: 'Nedsatt kraftgrepp höger (Jamar 12 kg mot 24 kg vänster), smärta vid tumopposition, morgonstelhet', ratt: true },
                { text: 'M18.0 Tumbasartros', varfor: 'Diagnosen. Artros i sig säger inget om vad handen klarar.' },
                { text: 'Byter hand med musen efter tjugo minuter', varfor: 'Ett kompensationsbeteende i en arbetsuppgift – aktivitetsledet.' },
                { text: 'Det gör ont i tummarna', varfor: 'Ett symtom hon uppger. Funktionen ska vara undersökt eller strukturerat beskriven.' },
                { text: 'Behöver ortos och vertikalmus', varfor: 'Åtgärder. De hör till planen, inte till funktionsbeskrivningen.' }
              ] },
            { etikett: 'A – AKTIVITETSBEGRÄNSNING',
              fraga: 'Vilken rad är aktivitetsbegränsningen?',
              val: [
                { text: 'Kan ej hantera ringpärmar eller använda standardmus mer än 20 min i följd. Tangentbordsarbete fungerar med pauser.', ratt: true },
                { text: 'Morgonstelhet i händerna', varfor: 'Funktionsledet.' },
                { text: 'Klarar inte sitt arbete', varfor: 'En slutsats, och den stämmer inte – hon klarar en stor del av det.' },
                { text: 'Artros är en kronisk sjukdom', varfor: 'Allmän kunskap om diagnosen. Den säger inget om Carina.' },
                { text: 'Vill inte vara till besvär', varfor: 'En viktig observation för bemötandet, men inte en aktivitetsbegränsning.' }
              ] }
          ],
          forklaring: 'Notera skillnaden mellan "har ont i tummen" och en mätbar nedsättning med tidsangivelse i ett arbetsmoment. Det senare går att följa upp om fyra veckor, det förra går bara att tycka om.' },

        { typ: 'beslut',
          banner: 'REKOMMENDATION',
          fraga: 'Vad går vidare?',
          val: [
            { text: 'Ingen sjukskrivning. Ortos, hjälpmedel och handträning på plats. Skriftlig sammanfattning av aktivitetsbegränsningarna och vad de kräver av arbetsplatsen, som Carina själv tar med till sin chef. Uppföljning om 4 veckor. Underlag till läkare för kännedom.',
              ok: true, princip: 'hjalpmedel', tid: 2,
              kampanj: { nyckel: 'carina-forslag', varde: 'anpassning' },
              fx: { underlag: 12, agens: 12, tydlighet: 8 },
              utfall: 'Carina är kvar i arbete. Vid uppföljningen har hon slutat byta hand med musen.',
              varfor: 'Aktiviteten och miljön ändrades, arbetsförmågan behölls. Notera vem som gör vad: du beskriver begränsningen och vad den kräver, Carina för samtalet, och arbetsgivaren beslutar om anpassningen – det är arbetsgivarens ansvar enligt arbetsmiljölagstiftningen, inte ditt. Att hon bär pappret själv gör dessutom att ingen sekretessprövning behövs. Och ärendet nådde aldrig en läkare, vilket var hela poängen.' },
            { text: 'Ingen sjukskrivning, men underlag till läkare med förslag om 25 % under 4 veckor om anpassningen inte räcker.',
              ok: 'delvis', princip: 'grad', tid: 2,
              kampanj: { nyckel: 'carina-forslag', varde: 'villkorat' },
              fx: { underlag: 10 },
              utfall: 'Läkaren noterar förslaget och avvaktar uppföljningen.',
              varfor: 'Ordentligt tänkt och tydligt villkorat. Risken är att den öppna dörren blir det som Carina hör – se till att uppföljningsdatumet är bokat innan hon lämnar rummet.' },
            { text: 'Sjukskrivning 50 % i 6 veckor.',
              ok: false, princip: 'hjalpmedel', tid: 2,
              kampanj: { nyckel: 'carina-forslag', varde: '50' },
              fx: { agens: -14, underlag: -10 },
              utfall: 'Carina är hemma halva veckan och gör lika mycket med händerna som förut.',
              varfor: 'Frånvaro utan anpassning avlastar inte tummarna. Dessutom börjar en yrkesidentitet vittra redan efter några veckor, och återgången blir svårare än problemet motiverar.' },
            { text: 'Avsluta – hon klarar ju sitt arbete.',
              ok: false, princip: 'bedda-b', tid: 1,
              kampanj: { nyckel: 'carina-forslag', varde: 'avslut' },
              fx: { agens: -10, underlag: -12 },
              utfall: 'Ett halvår senare är Carina sjukskriven på heltid och remitterad till handkirurg.',
              varfor: 'Hon klarade sitt arbete genom att kompensera på ett sätt som förvärrade belastningen. Att avsluta utan åtgärd är att låta den som underrapporterar betala för sin egen försiktighet.' }
          ] }
      ]
    },

    /* ================================================================
       GUNILLA – knäartros i hemtjänsten. Endast övningsläge.
       ================================================================ */
    {
      id: 'arb-gunilla',
      roll: 'arbetsterapeut',
      titel: 'Bedömning, hemtjänstpersonal',
      patient: 'gunilla',
      lage: 'rum',
      minuter: 16,
      svarighet: 3,
      endastDrill: true,
      principer: ['vardagsrev', 'hjalpmedel', 'ansvar', 'grad'],
      journal: [
        ['Kontaktorsak', 'Knäsmärta, klarar inte alla arbetsmoment'],
        ['Diagnos', 'Knäartros bilateralt'],
        ['Arbete', 'Undersköterska i hemtjänst. Trappor, förflyttningar, tidspress.'],
        ['Övrigt', '63 år, 3 år till pension. Har börjat tacka nej till pass.']
      ],
      intro: ['Gunilla sätter sig försiktigt och sträcker ut höger ben.'],

      beats: [
        { typ: 'replik', humor: 'trott',
          text: 'Jag har jobbat i hemtjänsten i trettio år. Nu klarar jag inte trapporna längre. Kanske är det bara dags att sjukskriva sig fram till pensionen.' },

        { typ: 'val',
          fraga: 'Hur bemöter du "fram till pensionen"?',
          tips: 'Tre år är inte ett kort sjukfall. Vad förlorar Gunilla – och vad kan behållas?',
          val: [
            { text: 'Tre år är lång tid att vara borta från något man gjort i trettio. Innan vi går dit vill jag veta exakt vilka moment som inte går – kanske finns det ett jobb kvar här som du klarar.',
              tid: 4, ok: true, princip: 'vardagsrev',
              humor: 'neutral', reaktion: 'Gunilla ser upp.',
              svar: 'Trapporna. Och att böja mig ner vid duschstolen. Men jag är bäst i gruppen på demensbesöken, det säger alla.',
              fx: { allians: 12, agens: 14, underlag: 12 },
              varfor: 'Du tar hennes förslag på allvar men bryter ner det i moment, och du hittar en bevarad kompetens. Det öppnar för omfördelning av arbetsuppgifter i stället för avveckling.' },
            { text: 'Det är förståeligt vid din ålder. Efter trettio år har du gjort ditt – vi kan titta på en längre sjukskrivning.',
              tid: 2, ok: false, princip: 'grad',
              humor: 'lattad', reaktion: 'Gunilla ser lättad ut.',
              svar: 'Skönt att någon äntligen förstår. Man har väl gjort sitt.',
              fx: { allians: 12, agens: -18, underlag: -10 },
              varfor: 'Lägg märke till att hon blir tacksam. Det är så den här fällan känns i stunden, och därför den är svår att se. Ålder är inte en aktivitetsbegränsning, och en avvecklande sjukskrivning tre år före pension är svår att motivera försäkringsmedicinskt. Den kostar dessutom Gunilla en yrkesidentitet hon fortfarande har kvar – och du fick den att låta som en gåva.' },
            { text: 'Sjukskrivning fram till pension går inte, det beviljas aldrig.',
              tid: 1, ok: false, princip: 'bedda-e',
              humor: 'sluten', reaktion: 'Gunilla tystnar.',
              svar: 'Nej, jag antar det.',
              fx: { allians: -14, agens: -10 },
              varfor: 'Ett administrativt nej till en person som just beskrivit slutet på sitt yrkesliv. Inget alternativ öppnades, och nu berättar hon inget mer.' }
          ] },

        { typ: 'flera',
          banner: 'AKTIVITETSANALYS',
          fraga: 'Vilka tre åtgärder prövar du först?',
          antal: 3,
          tidPer: 2,
          tips: 'Ändra aktiviteten och miljön innan du tar bort arbetet. Vem äger vilken åtgärd?',
          val: [
            { text: 'Tillsammans med Gunilla gå igenom vilka moment som fallerar: trapphus utan hiss, antal trappor per pass, vilka besök som skulle kunna bytas ut', ratt: true, princip: 'vardagsrev',
              fx: { underlag: 12 },
              varfor: 'Aktivitetsanalys av det som faktiskt fallerar, inte av allt. Den ger både innehållet i underlaget och ett konkret förslag Gunilla kan lägga fram – men själva ruttfördelningen är arbetsgivarens beslut, inte ditt.' },
            { text: 'Gå igenom förflyttningsteknik och hjälpmedel vid duschstol och säng', ratt: true, princip: 'hjalpmedel',
              fx: { underlag: 10, agens: 8 },
              varfor: 'Arbetsteknik och hjälpmedel minskar knäbelastningen i just de moment Gunilla beskrivit.' },
            { text: 'Stötta Gunilla i att själv ta upp ruttfördelningen med sin chef, med en skriftlig beskrivning av begränsningarna', ratt: true, princip: 'ansvar',
              fx: { agens: 14, tydlighet: 10 },
              varfor: 'Arbetsgivaren äger arbetsfördelningen. Vården beskriver begränsningen, Gunilla för samtalet – med underlag i handen.' },
            { text: 'Ringa arbetsgivaren och kräva omplacering', ratt: false, princip: 'samtycke',
              fx: { sakerhet: -12, agens: -10 },
              varfor: 'Utan samtycke, och dessutom ett övertagande av både Gunillas och arbetsgivarens ansvar.' },
            { text: 'Rekommendera knäprotesoperation', ratt: false,
              fx: { underlag: -8 },
              varfor: 'Inte arbetsterapeutens bedömning, och inte första steget vid knäartros. Träning och anpassning kommer före.' },
            { text: 'Föreslå att hon går ner i tid och tar ut pension i förtid', ratt: false, princip: 'ansvar',
              fx: { agens: -10 },
              varfor: 'Ett ekonomiskt livsbeslut som inte är vårdens att föreslå, och som stänger dörren innan anpassningarna prövats.' }
          ] },

        { typ: 'beslut',
          banner: 'REKOMMENDATION',
          fraga: 'Vad går vidare?',
          val: [
            { text: 'Ingen sjukskrivning nu. Hjälpmedel och arbetsteknik insatta, artrosskola och träning hos fysioterapeut påbörjad, skriftlig beskrivning av begränsningarna till arbetsgivarsamtalet, rehabkoordinator inkopplad, uppföljning om 4 veckor.',
              ok: true, princip: 'hjalpmedel', tid: 2,
              fx: { agens: 12, underlag: 12 },
              utfall: 'Gunilla får en rutt utan trapphus och är kvar i arbete.',
              varfor: 'Aktiviteten anpassades, arbetsförmågan behölls och Gunilla behöll sitt yrke. Artrosskola och ledd träning är grundbehandling vid knäartros och bygger dessutom det som ska bära henne tre år till. Rehabkoordinatorn finns med om arbetsgivarsamtalet krånglar.' },
            { text: '50 % i 8 veckor i väntan på att arbetsgivaren ordnar anpassning.',
              ok: 'delvis', princip: 'grad', tid: 2,
              fx: { underlag: 6 },
              utfall: 'Läkaren signerar. Anpassningen dröjer sex veckor.',
              varfor: 'Kan behövas som brygga, men risken är att sjukskrivningen ersätter anpassningen i stället för att möjliggöra den. Sätt då ett datum för när anpassningen ska vara klar.' },
            { text: '100 % tills vidare med hänvisning till ålder och slitage.',
              ok: false, princip: 'grad', tid: 2,
              fx: { agens: -16, underlag: -14 },
              utfall: 'Gunilla blir hemma. Efter fyra månader är knäna stelare och hon går inte längre till affären.',
              varfor: '"Slitage" och ålder är inte försäkringsmedicinska begrepp, och total inaktivitet försämrar artros. Det är en avveckling förklädd till behandling.' }
          ] }
      ]
    },

    /* ================================================================
       YVONNE – oplanerat besök. Ser ut som Carina, är det inte.
       Låses upp när kampanjen är klar. Endast övningsläge.
       ================================================================ */
    {
      id: 'arb-yvonne',
      roll: 'arbetsterapeut',
      titel: 'Nybesök, tisdag 09.20',
      patient: 'yvonne',
      lage: 'rum',
      minuter: 23,
      svarighet: 3,
      laser: 'oplanerat',
      endastDrill: true,
      principer: ['bedda-b', 'rodflagga', 'somatik', 'dorr', 'hjalpmedel', 'ansvar', 'bedda-a'],
      journal: [
        ['Remiss', 'Triagerad till arbetsterapeut. Frågeställning: ortos och greppanpassning vid handartros.'],
        ['Diagnos', 'Ingen. "Artros" är patientens egen benämning. Ingen läkarbedömning och ingen undersökning av händerna finns dokumenterad.'],
        ['Arbete', 'Förskolechef. Administration, möten, viss tid i barngrupp.'],
        ['Hereditet', 'Modern hade handartros, opererad i tummen.'],
        ['Övrigt', 'I triagen även nämnt: "snubblar ibland". Ej följt upp.'],
        ['Väntetid', '9 veckor. Yvonne har flyttat ett möte för att komma.']
      ],
      intro: [
        'Tisdag 09.20. Du hämtar Yvonne i väntrummet. Hon reser sig med en hand på armstödet och tar tag i dörrkarmen på vägen in.',
        'Hon har med sig en utskrift från nätet om tumbasortoser.'
      ],

      beats: [

        { typ: 'replik', humor: 'oppen',
          text: 'Hej! Jag ska inte ta lång tid. Jag vet nog vad det är – mamma hade precis samma sak, artros i händerna, hon fick opereras till slut. Jag tappar saker hela tiden. Så jag tänkte att jag skulle få en sån där skena, och kanske några tips för jobbet.' },

        { typ: 'val',
          fraga: 'Hur börjar du?',
          tips: 'Hon har ställt diagnosen själv, bokat besöket utifrån den och väntat nio veckor på det. Du behöver inte riva ner den för att titta bakom den.',
          val: [
            { text: 'Jag ska titta på händerna, det lovar jag. Men innan vi väljer skena vill jag veta hur det går till när du tappar saker. Gör det ont när det händer, eller åker saken bara?',
              tid: 4, ok: true, princip: 'bedda-b',
              humor: 'neutral', reaktion: 'Yvonne stannar upp. Hon har inte fått den frågan förut.',
              svar: 'Nej... det gör faktiskt inte ont. Det är det som är konstigt, för mamma hade så ont. Min hand bara släpper. Kaffekoppen igår, jag såg den falla.',
              fx: { allians: 8, underlag: 20, sakerhet: 12 },
              varfor: 'Den fråga som skiljer fallen åt, ställd först och utan att ta ifrån henne det hon kommit för. Vid artros är det leden som gör ont och smärtan som gör att greppet släpper. Att tappa utan smärta är en annan mekanism – och nu står hennes egna ord om det i journalen.' },
            { text: 'Då kör vi. Jag har mjuka tumortoser i skåpet, vi provar ut en direkt så får du med dig den idag.',
              tid: 3, ok: false, princip: 'hjalpmedel',
              humor: 'lattad', reaktion: 'Yvonne ler brett och sträcker fram handen.',
              svar: 'Vad skönt. Jag var rädd att jag skulle behöva vänta nio veckor till.',
              fx: { allians: 14, sakerhet: -16, underlag: -14 },
              varfor: 'Det snabbaste, vänligaste och mest efterfrågade valet i hela besöket. Du gjorde exakt det som var rätt hos Carina – och det är därför det är farligt här. Du har övertagit en diagnos som ingen har ställt, och en ortos runt tumbasen ger både dig och Yvonne kvitto på att frågan är avgjord.',
              extra: { typ: 'replik', humor: 'oppen',
                text: 'Den sitter fint. Fast det är nog inte bara händerna – jag snubblade i trappan hemma förra veckan också. Man blir väl gammal.' } },
            { text: 'Innan vi går vidare – du höll i dörrkarmen på vägen in. Berätta om det.',
              tid: 2, ok: 'delvis', princip: 'rodflagga',
              humor: 'orolig', reaktion: 'Yvonne ser förvirrad ut och tittar mot dörren.',
              svar: 'Jag... ja, jag är lite ostadig. Men det var ju händerna jag bokade tid för.',
              fx: { underlag: 10, sakerhet: 8, allians: -8 },
              varfor: 'Du såg rätt sak, och det är besökets viktigaste iakttagelse. Men du började i det hon inte kommit för utan att först ta emot det hon kom för. Rätt innehåll, fel tidpunkt – och du betalar i förtroende som du kommer att behöva om en stund, när du säger nej till skenan.' },
            { text: 'Artros i släkten är en stark ärftlighet, så det stämmer säkert. Vi går igenom vad du har svårt för på jobbet.',
              tid: 2, ok: false, princip: 'bedda-b',
              humor: 'lattad', reaktion: 'Yvonne nickar ivrigt och börjar räkna upp.',
              svar: 'Precis. Det är pärmarna, och att skriva på tavlan, och att bära kaffebrickan.',
              fx: { allians: 10, underlag: -12, sakerhet: -12 },
              varfor: 'Ärftlighet gör en diagnos troligare, aldrig ställd. Du bekräftade förankringen och gick rakt in i aktivitetsanalysen – som nu kommer att bli utmärkt utförd på fel frågeställning.' }
          ] },

        { typ: 'flera',
          banner: 'VAD TAR DU REDA PÅ?',
          fraga: 'Du hinner tre saker till innan du bestämmer dig. Välj tre.',
          antal: 3,
          tidPer: 2,
          tips: 'Du är inte ute efter hur mycket hon klarar, utan efter mönstret: vad som händer, hur det händer och åt vilket håll det rör sig.',
          val: [
            { text: 'Be henne göra momenten framför dig – knäppa manschettknappen, plocka upp ett gem, skruva av ett lock – och titta på händerna medan hon gör det.',
              ratt: true, princip: 'dfa-aktivitet',
              fx: { underlag: 14, sakerhet: 10 },
              varfor: 'Utförd aktivitet slår beskriven aktivitet. Här ser du både vad som fallerar och hur handen ser ut när den arbetar: muskelvolymen mellan tumme och pekfinger, om lederna är förstorade, om något gör ont. Vid handartros är tumbasleden oftast öm och bredare. Hos Yvonne är den varken eller.' },
            { text: 'Förloppet: vad som gick i våras och inte går nu, och åt vilket håll det rör sig.',
              ratt: true, princip: 'bedda-b',
              fx: { underlag: 12, sakerhet: 12 },
              varfor: 'Artros svänger med belastning och står stilla i långa perioder. Något som blivit stadigt sämre varje månad i ett halvår är ett annat slags förlopp. Riktningen är det enda i rummet som säger något om hur bråttom det är.' },
            { text: 'Snubblandet: var och hur ofta, om hon fallit, om hon börjat hålla i ledstången eller undvika mörker och ojämnt underlag.',
              ratt: true, princip: 'rodflagga',
              fx: { underlag: 12, sakerhet: 14 },
              varfor: 'Fallanamnes är arbetsterapeutens vardag och kräver ingen neurologi. Det den ger här är avgörande: besvären är inte begränsade till händerna. En ledsjukdom i tummarna förklarar inte en osäker gång.' },
            { text: 'Arbetsplatsens ergonomi: skrivbordshöjd, mus, hur många timmar hon skriver.',
              ratt: false,
              fx: { underlag: -6 },
              varfor: 'Den kartläggning frågeställningen bad om. Den är välgjord, den tar tid, och den kommer att beskriva belastningen på en hand vars problem inte är belastning.' },
            { text: 'Smärtskattning 0–10 i tumbasen, i vila och vid grepp.',
              ratt: false,
              fx: { underlag: -4 },
              varfor: 'Du mäter det hon redan sagt att hon inte har. Att smärtan saknas är fyndet – en nolla på en skala tillför inget utöver det hon just berättade.' },
            { text: 'Vilken ortos mamman hade, och om den hjälpte henne.',
              ratt: false,
              fx: { allians: 6, underlag: -8 },
              varfor: 'Varmt, personligt – och det förankrar dig hårdare i en diagnos som ingen har ställt. Mammans sjukdom är Yvonnes förklaringsmodell, inte hennes journal.' },
            { text: 'Sömn, stress och arbetsbelastning – förskolechef är ett tungt uppdrag.',
              ratt: false,
              fx: { underlag: -4 },
              varfor: 'Rimligt att fråga om vid ett annat besök, och trötthet gör mycket. Men fumlighet och snubblande i ett halvår, i stigande, förklaras inte av stress förrän det som gör kroppen fumlig har fått ett svar.' },
            { text: 'Vilka receptfria värktabletter hon tar och om de hjälper.',
              ratt: false,
              fx: { underlag: -6 },
              varfor: 'Frågan förutsätter smärta. Den är rutin vid artros och just därför lätt att ställa på autopilot – och den bekräftar frågeställningen i stället för att pröva den.' }
          ] },

        { typ: 'kontroll',
          banner: 'STÄMMER DIAGNOSEN MED BILDEN?',
          fraga: 'Yvonne får manschettknappen på fjärde försöket och tittar på handen medan hon gör det. Gemet får hon inte upp från bordet. Tumbasen är varken öm eller förstorad, och muskeln mellan tumme och pekfinger är plattare än du väntat dig – på båda händerna. Hon har hållit i ledstången sedan i somras. Vad är det som inte går ihop med artros?',
          tidFel: 2,
          princip: 'bedda-b',
          val: [
            { text: 'Att det inte gör ont, att lederna saknar fynd, att kraften försvunnit ur muskler som magrat – och att besvären finns i benen också.', ratt: true },
            { text: 'Att hon har nedsatt greppstyrka.', ratt: false,
              varfor: 'Nedsatt greppstyrka finns vid båda. Det är det vanligaste fyndet i rummet och det som skiljer dem åt allra sämst.' },
            { text: 'Att hon är 56 år.', ratt: false,
              varfor: '56 är en helt typisk ålder för handartros. Åldern talar snarare för hennes hypotes än emot den.' },
            { text: 'Att besvären hållit i sig i ett halvår.', ratt: false,
              varfor: 'Duration är inte ett mönster. Artros håller i sig i årtionden. Det är riktningen som betyder något, inte längden.' },
            { text: 'Att ingen läkare har undersökt henne.', ratt: false,
              varfor: 'Sant, och det är en brist i handläggningen – men det är ingen iakttagelse hos Yvonne. Hade allt annat stämt med artros hade det varit rätt att arbeta vidare och skicka underlaget till läkare i efterhand.' }
          ],
          forklaring: 'Vid handartros är det leden som gör ont, smärtan som får greppet att släppa, leden ofta öm och förstorad – och besvären stannar i händerna. Yvonnes hand gör inte ont, den orkar inte. Kombinationen fumliga händer och osäker gång, stadigt tilltagande, är ett känt mönster med flera möjliga orsaker. Vilken av dem det är kan du varken avgöra eller behöva avgöra. Det du kan säga, och som är hela din uppgift här, är att det inte är ett aktivitetsproblem som en ortos löser, och att det inte bara är händerna.' },

        { typ: 'val',
          humor: 'orolig',
          text: 'Okej. Men jag har väntat nio veckor på den här tiden och flyttat ett möte. Kan jag inte få skenan i alla fall, så länge? Det kan väl inte skada?',
          fraga: 'Vad svarar du?',
          tips: 'Stäng aldrig en dörr utan att öppna en annan. Och hon ska inte behöva gissa vad du har sett.',
          val: [
            { text: 'Nej, och jag ska säga varför. En skena avlastar en led som gör ont. Din hand gör inte ont – den orkar inte hålla. Då gör skenan ingen nytta, och det som skulle kunna skada är att den fick oss att vänta. Det jag har sett vill jag att en läkare tittar på den här veckan. Under tiden går vi igenom trappan, mattorna och hur du bär saker.',
              tid: 5, ok: true, princip: 'dorr',
              humor: 'orolig', reaktion: 'Yvonne sitter tyst en stund. Sedan nickar hon långsamt.',
              svar: 'Jag har faktiskt tänkt tanken själv. Jag ville bara att det skulle vara artros.',
              fx: { tydlighet: 16, sakerhet: 16, agens: 8, allians: 8 },
              varfor: 'Du säger nej till det hon bad om, förklarar varför på ett språk hon kan upprepa hemma, och lämnar inte tomrummet öppet – hon får både ett datum och något att göra idag. Att hon själv har tänkt tanken är vanligt: den som skaffar sig en förklaring har ofta gjort det för att slippa en annan.' },
            { text: 'Ta den här mjuka så länge, den kostar inget och kan inte skada. Så hör du av dig och bokar läkare om det inte blir bättre.',
              tid: 3, ok: false, princip: 'hjalpmedel',
              humor: 'lattad', reaktion: 'Yvonne stoppar ner ortosen i väskan och ser nöjd ut.',
              svar: 'Tack! Då provar jag den ett par månader först.',
              fx: { allians: 12, sakerhet: -20, tydlighet: -14, agens: -8 },
              varfor: 'Ortosen är ofarlig. Beskedet är det inte. Du gav henne kvitto på att det var artros, ansvaret för nästa steg, och ett villkor – "om det inte blir bättre" – som betyder att hon hör av sig först när det blivit sämre. I ett tilltagande förlopp är väntetiden själva skadan.' },
            { text: 'Det här är inte artros. Det kan vara något neurologiskt och det måste utredas.',
              tid: 2, ok: false, princip: 'bedda-e',
              humor: 'orolig', reaktion: 'Yvonne blir alldeles vit i ansiktet.',
              svar: 'Neurologiskt? Är det ALS? Jag har läst om det...',
              fx: { allians: -14, tydlighet: -10, sakerhet: 6 },
              varfor: 'Rätt slutsats, levererad som en diagnos du varken har ställt eller får ställa. Ordet gör hela arbetet och du får inte tillbaka det. Säg vad du har sett – smärtan saknas, kraften saknas, gången är med – och låt läkaren äga vad det betyder.' },
            { text: 'Det där ligger utanför vad jag kan bedöma. Du får ta upp det med läkaren.',
              tid: 2, ok: 'delvis', princip: 'ansvar',
              humor: 'sluten', reaktion: 'Yvonne börjar samla ihop sina saker.',
              svar: 'Så jag har väntat nio veckor i onödan.',
              fx: { sakerhet: 4, allians: -10, agens: -10, tydlighet: -6 },
              varfor: 'Sant om diagnosen, och gränsen är riktigt dragen – värt att diskutera i gruppen hur den formuleras utan att låta som en dörr i ansiktet. Men du lämnade ifrån dig mer än diagnosen: fallriskgenomgången, greppen, säkerheten hemma i väntan på besked. Det är ditt område, inte läkarens, och det är det enda som hjälper henne den här veckan.' }
          ] },

        { typ: 'kedja',
          banner: 'ANTECKNINGEN',
          fraga: 'Bygg de tre raderna som gör att nästa läsare förstår varför ärendet bytte spår.',
          tips: 'Skilj på vad du såg, vad du bedömer inom ditt eget område, och vad du lämnar över till vem – med tid.',
          tidFel: 1,
          princip: 'somatik',
          lank: [
            { etikett: 'OBSERVERAT',
              fraga: 'Vilken rad hör hemma under det du själv har sett?',
              val: [
                { text: 'Tappar föremål utan smärta. Fumlar med knappar och småföremål, styr handen med blicken. Tumbasleden ej öm eller förstorad. Nedsatt volym i handens småmuskler bilateralt. Håller i ledstången sedan i somras, snubblar på trösklar.', ratt: true },
                { text: 'Patienten uppger att modern hade handartros och blev opererad.',
                  varfor: 'Patientens uppgift, inte ditt iakttagande. Den ska stå i journalen, men på anamnesraden – annars läser nästa person hereditet som fynd.' },
                { text: 'Bilden förklaras inte av ledsjukdom.',
                  varfor: 'Din bedömning. Den hör till nästa led, och den blir trovärdig först när observationerna står före den.' },
                { text: 'Läkartid bokad torsdag.',
                  varfor: 'Åtgärden. Sista ledet.' },
                { text: 'Ortos ej utprovad.',
                  varfor: 'Vad du avstod från. Det ska framgå, men som en följd av bedömningen – inte som ett fynd.' }
              ],
              forklaring: 'Iakttagelser går att ompröva. En läkare som läser "fumlar med knappar, tumbasen utan fynd" kan värdera det själv. En som läser "misstänkt neurologi" måste tro dig på ditt ord.' },
            { etikett: 'BEDÖMNING INOM MITT OMRÅDE',
              fraga: 'Vilken rad är din bedömning – och bara din?',
              val: [
                { text: 'Aktivitetsnedsättningen förklaras inte av ledbesvär: mönstret är kraftlöshet och nedsatt finmotorik utan smärta, och det omfattar även gången. Planerad aktivitetsbedömning och ortosutprovning därför avbruten.', ratt: true },
                { text: 'Misstänkt cervikal myelopati.',
                  varfor: 'En diagnos, och den är inte din att ställa. Den styr dessutom läkarens tanke i en riktning innan någon har undersökt henne.' },
                { text: 'Inget som talar för allvarlig sjukdom.',
                  varfor: 'En uteslutning du inte kan göra. Att du inte kan bedöma något är inte samma sak som att det inte finns.' },
                { text: 'Nedsatt volym i handens småmuskler bilateralt.',
                  varfor: 'Ett fynd. Det hör till första ledet.' },
                { text: 'Patienten är orolig och önskar ortos.',
                  varfor: 'Relevant för bemötandet och bör stå någonstans, men det är ingen bedömning av aktivitetsförmågan.' }
              ],
              forklaring: 'Två meningar: vad bilden inte stämmer med, och att du därför avbröt. Den andra meningen är den som hindrar nästa läsare från att tro att bedömningen är gjord.' },
            { etikett: 'ÖVERLÄMNAT TILL VEM, NÄR',
              fraga: 'Vilken rad avslutar anteckningen?',
              val: [
                { text: 'Läkarbedömning behövs för ställningstagande till fortsatt utredning; tid bokad torsdag, läkaren muntligt informerad. Arbetsterapeutisk uppföljning kvarstår och planeras efter läkarbesöket. Fallförebyggande råd givna. Patienten informerad om vad jag sett och varför ortos ej provats ut.', ratt: true },
                { text: 'Remiss till neurolog skickad.',
                  varfor: 'Hoppar över den bedömning som avgör vad som ska utredas och hur bråttom det är – och lägger henne i en kö i stället för i ett rum den här veckan.' },
                { text: 'Patienten uppmanad att höra av sig vid försämring.',
                  varfor: 'Ansvaret tillbaka till patienten. I ett tilltagande förlopp betyder det att kontakten tas först när det redan är sämre.' },
                { text: 'Ortos utprovad, uppföljning om fyra veckor.',
                  varfor: 'Planen från ett annat fall. Den är riktig vid tumbasartros och fel här.' },
                { text: 'Ärendet avslutat hos arbetsterapeut.',
                  varfor: 'Då försvinner både fallrisken och den aktivitetsbedömning som ska göras om när frågan är utredd.' }
              ],
              forklaring: 'Raden ska svara på tre saker: vem som har frågan nu, när, och att patienten vet om det. Utan tidsangivelse är en överlämning en förhoppning.' }
          ],
          forklaring: 'Anteckningen är den enda delen av besöket som finns kvar om tre veckor. Skriven så här ser nästa läsare exakt varför en bokad ortosutprovning inte blev av – och behöver varken lita på dig eller göra om det du redan sett.' },

        { typ: 'beslut',
          banner: 'VAD GÅR VIDARE?',
          fraga: 'Yvonne står vid dörren.',
          val: [
            { text: 'Aktivitetsbedömningen avbryts och görs om när frågan är utredd. Läkartid den här veckan, med muntlig föredragning av det du sett. Fallförebyggande genomgång idag: ledstång, trösklar, mattor, belysning, skor – och att inte bära varmt eller tungt genom rummet. Egen återbesökstid står kvar. Anteckning enligt ovan.',
              ok: true, princip: 'somatik', tid: 2,
              fx: { sakerhet: 18, tydlighet: 14, underlag: 12, agens: 8 },
              utfall: 'Yvonne träffar läkare på torsdag och utreds vidare. Hennes tid hos dig ligger kvar i kalendern.',
              varfor: 'Du gjorde inte det du var bokad för, och det var rätt – men du lämnade henne inte tomhänt. Fallförebyggande råd och säkrare grepp är arbetsterapi som hjälper oavsett vad utredningen visar, och de kostar fem minuter. Notera lika mycket vad du inte gjorde: ingen diagnos, ingen remiss, ingen akut. Finns ingen läkartid den här veckan är näst bästa väg en daterad överlämning till en namngiven läkare – aldrig "hör av dig själv".' },
            { text: 'Läkartid bokad. Arbetsterapin avslutas – det här är inte ett aktivitetsärende.',
              ok: 'delvis', princip: 'ansvar', tid: 2,
              fx: { sakerhet: 8, agens: -10, tydlighet: -6 },
              utfall: 'Yvonne kommer till läkaren. Ingen tar fallrisken, och hon ramlar i trappan medan hon väntar på undersökningen.',
              varfor: 'Den medicinska frågan är rätt tilldelad, och det är det viktigaste. Men du drog gränsen ett steg för långt: att orsaken är oklar gör inte fallrisken oklar, och nedsatt handfunktion och osäker gång är arbetsterapi vilken diagnos de än får. Värt att ta i gruppen – var går gränsen mellan att avbryta en frågeställning och att avsluta ett ärende?' },
            { text: 'Ortos och greppanpassningar utprovade. Uppföljning om fyra veckor, då tar vi ställning till om läkare behövs.',
              ok: false, princip: 'hjalpmedel', tid: 2,
              fx: { allians: 10, sakerhet: -20, underlag: -12 },
              utfall: 'Yvonne går nöjd. Vid uppföljningen har hon slutat köra bil och får inte längre in nyckeln i ytterdörren. Först då bokas läkare.',
              varfor: 'Precis den plan som var rätt för Carina. Skillnaden är att Carinas diagnos var ställd och undersökt och att hennes besvär satt i tummarna. Här blev fyra veckor till en utredning som redan var försenad med ett halvår – och du var den första som sett hela mönstret.' },
            { text: 'Skicka henne till akuten idag.',
              ok: false, princip: 'rodflagga', tid: 1,
              fx: { sakerhet: -8, allians: -12, tydlighet: -8 },
              utfall: 'Yvonne sitter sex timmar på akuten och skickas hem med rådet att kontakta vårdcentralen.',
              varfor: 'Ett halvår med långsam försämring är inte ett akutärende. Det som hade gjort akuten rätt är ett annat förlopp: snabb försämring över dagar, en arm eller ett ben som slutar fungera, eller nytillkomna svårigheter att kissa. Att eskalera för säkerhets skull ser ansvarsfullt ut, kostar henne en dag och en plats i akutkön, och slutar nästan alltid med ett återbesked till samma vårdcentral. Att avbryta ett besök är inte samma sak som att larma.' }
          ] }
      ]
    }
  ];

})(window);
