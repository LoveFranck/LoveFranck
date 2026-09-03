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
    }
  ];

})(window);
