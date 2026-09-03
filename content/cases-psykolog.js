/* cases-psykolog.js – Psykologens försäkringsmedicinska utredning
   ⚠ EJ KLINISKT GRANSKAT – pedagogiskt utkast, ska granskas av verksamheten. */
(function (global) {
  'use strict';
  var LESS = global.LESS;

  LESS.fall.psykolog = [

    /* ================================================================
       ANNA – kampanjärende 1, steg 2.
       ================================================================ */
    {
      id: 'psy-anna',
      roll: 'psykolog',
      titel: 'Nybesök, torsdag 14.00',
      patient: 'anna',
      lage: 'rum',
      minuter: 40,
      kampanj: 'anna',
      svarighet: 2,
      principer: ['bedda-d1', 'dfa-funktion', 'dfa-aktivitet', 'agens', 'evidens', 'bedda-d2'],
      journal: [
        ['Remiss', 'Triagerad av sjuksköterska. Ångest, sjukskrivningsfråga.'],
        ['Duration', 'Ca 3 månader'],
        ['Funktion', 'Vaknar 04, undviker arbetsplatsen, klarar hemmarutiner'],
        ['Risk', 'Inga suicidtankar. Ingen känd missbruksproblematik.'],
        ['Arbete', 'Kommunikatör. Möten, texter, deadlines. Omorganisation pågår.']
      ],
      intro: [
        'Torsdag 14.00. Anna sitter redan i väntrummet när du hämtar henne.',
        'Hon har med sig en anteckningsbok.'
      ],
      introExtra: [
        { nyckel: 'anna-triage', varde: 'lakare',
          text: ['Hon har redan varit hos jourläkaren, som skrev fyra veckor på heltid.',
                 'Du börjar alltså inte på noll – du börjar på minus.'] },
        { nyckel: 'anna-triage', varde: 'avslut',
          text: ['Ärendet stängdes i chatten för tre veckor sedan. Anna sökte akut i förrgår och är nu sjukskriven.'] }
      ],

      beats: [

        { typ: 'replik', humor: 'orolig',
          text: 'Hej. Jag vet inte riktigt varför jag är här hos en psykolog. Jag är inte tokig, jag behöver bara komma undan jobbet ett tag.' },

        { typ: 'val',
          fraga: 'Hur ramar du in besöket?',
          tips: 'Anna vet inte vad ett psykologbesök i LESS-flödet är. Om du inte sätter ramen sätter hennes förväntan den åt dig.',
          val: [
            { text: 'Du är inte här för att vara tokig. Du är här för att vi ska förstå vad som gör morgnarna omöjliga – och för att jag ska göra det underlag som en läkare sedan tar ställning till.',
              tid: 3, ok: true, princip: 'forvantan',
              humor: 'neutral', reaktion: 'Anna lägger ifrån sig väskan.',
              svar: 'Så du kan inte skriva intyget själv?',
              fx: { allians: 10, tydlighet: 14 },
              varfor: 'Både normalisering och en tydlig ram: vad besöket är, vad du gör och var beslutet fattas. Det förebygger den vanligaste besvikelsen i LESS-flödet.' },
            { text: 'Vi tar det steg för steg. Berätta om din ångest.',
              tid: 2, ok: 'delvis', princip: 'forvantan',
              humor: 'neutral', reaktion: 'Anna börjar berätta, men tittar på klockan.',
              svar: 'Okej... var ska jag börja?',
              fx: { underlag: 5, tydlighet: -4 },
              varfor: 'Du kommer igång, men ramen är osatt. Anna vet fortfarande inte om hon ska lämna rummet med ett intyg.' },
            { text: 'Jag kan säga direkt att jag inte tänker rekommendera sjukskrivning.',
              tid: 1, ok: false, princip: 'bedda-e',
              humor: 'sluten', reaktion: 'Anna korsar armarna.',
              svar: 'Så det var bestämt innan jag ens kom hit.',
              fx: { allians: -18, agens: -8, underlag: -6 },
              varfor: 'Du har fattat beslutet före utredningen och stängt en dörr innan du öppnat någon. Resten av besöket blir en förhandling i stället för en bedömning.' }
          ] },

        { typ: 'val',
          humor: 'neutral',
          text: 'Det började i februari. Nu vaknar jag vid fyra och ligger med hjärtat bultande. Jag kör till kontoret, sitter på parkeringen och åker hem igen. Jag har varit sjukanmäld sju dagar den senaste månaden.',
          fraga: 'Vad gör du med det här?',
          tips: 'Du behöver funktion i konkreta situationer – både det som inte går och det som fortfarande går. Det är det som senare blir F och A i kedjan.',
          val: [
            { text: 'Kartlägg vecka för vecka: vilka arbetsuppgifter går, vilka går inte, vad händer i kroppen och vad gör hon då?',
              tid: 6, ok: true, princip: 'dfa-funktion',
              humor: 'neutral', reaktion: 'Anna hämtar anteckningsboken.',
              svar: 'Att skriva texter hemma går. Redigering går. Det är morgonmöten och att gå genom entrén. Jag börjar svettas redan i bilen. Då åker jag hem, och då blir det lugnt.',
              fx: { underlag: 18, agens: 6, allians: 4 },
              varfor: 'Nu har du både funktionsnedsättning, aktivitetsbegränsning kopplad till faktiska arbetsuppgifter och undvikandebeteendets belöningsslinga – tre saker i ett svep.' },
            { text: 'Låt henne skatta ångesten på GAD-7 och gå vidare.',
              tid: 4, ok: 'delvis', princip: 'dfa-funktion',
              humor: 'neutral', reaktion: 'Anna fyller i formuläret.',
              svar: 'Fjorton poäng. Är det mycket?',
              fx: { underlag: 6 },
              varfor: 'Skattningsskalor är bra för att följa förlopp och komplettera – men ett tal på ett formulär är ingen funktionsnedsättning och blir aldrig en aktivitetsbegränsning.' },
            { text: 'Fokusera på orsaken: gå igenom konflikten på arbetsplatsen.',
              tid: 6, ok: false, princip: 'dfa-aktivitet',
              humor: 'spand', reaktion: 'Anna blir engagerad och arg, och tiden går.',
              svar: 'Alltså, det började när vi fick en ny chef som...',
              fx: { underlag: -6, allians: 4 },
              varfor: 'Konflikten är verklig men den är inte en sjukdom, och den gör dig inte klokare på funktionen. Sex minuter gick, och du står utan underlag.' }
          ] },

        { typ: 'val',
          fraga: 'Anna frågar varför hon inte bara kan få vila några veckor. Vad gör du?',
          tips: 'Psykoedukation är inte att informera om regler. Det är att göra hennes eget mönster begripligt för henne själv.',
          val: [
            { text: 'Göra en situationsanalys tillsammans: ta måndagen på parkeringen och gå igenom den led för led.',
              tid: 5, ok: true, princip: 'agens',
              humor: 'neutral', reaktion: 'Anna letar fram måndagen ur minnet.',
              svar: 'Måndagen, då. Den var värst. Jag satt där i tjugo minuter.',
              fx: { agens: 12, allians: 8, tydlighet: 8 },
              varfor: 'Du går från att prata om ångest i allmänhet till ett enda tillfälle som går att undersöka. Hon upptäcker mekanismen själv i sitt eget material, och då blir en utebliven sjukskrivning en logisk följd i stället för ett avslag.' },
            { text: 'Förklara att forskningen visar att sjukskrivning vid lindrig ångest ofta försämrar förloppet.',
              tid: 3, ok: 'delvis', princip: 'evidens',
              humor: 'neutral', reaktion: 'Anna nickar artigt.',
              svar: 'Mm. Men jag är väl inte lindrig?',
              fx: { agens: 4, tydlighet: 4 },
              varfor: 'Sant och relevant, men det är din kunskap, inte hennes insikt. Generell evidens övertygar sällan den som upplever sig vara ett undantag.' },
            { text: 'Bekräfta att hon behöver vila och föreslå kort sjukskrivning för återhämtning.',
              tid: 3, ok: false, princip: 'evidens',
              humor: 'lattad', reaktion: 'Anna slappnar av synligt.',
              svar: 'Tack. Det är precis vad jag behöver.',
              fx: { allians: 8, agens: -18, underlag: -10 },
              varfor: 'Du förstärkte undvikandet med vårdens auktoritet. Lättnaden i rummet är äkta – och det är precis den som gör åtgärden skadlig i det här fallet.' }
          ] },

        { typ: 'kedja',
          banner: 'SORKK',
          fraga: 'Gör situationsanalysen på måndagen vid parkeringen.',
          tips: 'S är det yttre läget. O är vad hon bär med sig in i det. R är vad hon tänker, känner, gör. Sedan kommer konsekvenserna – först på minuter, sedan på månader.',
          tidFel: 1,
          princip: 'agens',
          lank: [
            { etikett: 'S – SITUATION',
              fraga: 'Vad är situationen?',
              val: [
                { text: 'Måndag 07.50. Anna sitter i bilen på parkeringen. Kollegor går in genom entrén.', ratt: true },
                { text: 'Hjärtklappning och illamående.', varfor: 'Det är kroppsdelen av responsen, inte situationen.' },
                { text: 'Hon har haft ångest i tre månader.', varfor: 'Det hör till organismfaktorerna – vad hon bär med sig in i situationen.' },
                { text: 'Hon startar bilen och kör hem.', varfor: 'Det är beteendedelen av responsen.' },
                { text: 'På kvällen känner hon sig misslyckad.', varfor: 'Det är en konsekvens, och den kommer senare.' }
              ],
              forklaring: 'Situationen ska gå att filma: tid, plats, vad som händer runt omkring.' },

            { etikett: 'O – ORGANISMFAKTORER',
              fraga: 'Vad bär hon med sig in i situationen?',
              val: [
                { text: 'Sovit 3,5 timmar, vaken sedan kl 04. Ingen frukost. Tre månaders undvikande bakom sig.', ratt: true },
                { text: 'Kollegorna står och pratar i entrén.', varfor: 'Det är yttre – det hör till situationen.' },
                { text: 'Tanken "jag klarar inte det här".', varfor: 'Det är responsens tankedel.' },
                { text: 'Lättnaden när hon svänger ut från parkeringen.', varfor: 'Det är den kortsiktiga konsekvensen.' },
                { text: 'Hon vänder bilen och åker hem.', varfor: 'Det är responsens beteendedel.' }
              ],
              forklaring: 'Organismfaktorer är det inre tillstånd hon möter situationen med: sömn, kropp, tidigare inlärning. Här är sömnbristen inte en detalj – den sänker tröskeln för allt annat.' },

            { etikett: 'R – RESPONS',
              fraga: 'Vad gör, tänker och känner hon?',
              val: [
                { text: 'Tanke: "Jag klarar inte det här". Hjärtklappning, illamående. Hon startar bilen och kör hem.', ratt: true },
                { text: 'Parkeringen utanför kontoret klockan 07.50.', varfor: 'Situationen.' },
                { text: 'Ångesten är starkare nästa morgon.', varfor: 'Långsiktig konsekvens.' },
                { text: 'Lättnad så fort hon svänger ut från parkeringen.', varfor: 'Kortsiktig konsekvens – den kommer efter responsen.' },
                { text: 'Hon har sovit 3,5 timmar.', varfor: 'Organismfaktor.' }
              ],
              forklaring: 'Responsen har tre delar: tanke, kropp och beteende. Beteendet är det som konsekvenserna hänger på.' },

            { etikett: 'K – KORT SIKT',
              fraga: 'Vad händer direkt efteråt?',
              val: [
                { text: 'Obehaget släpper inom några minuter. Lättnad. Hon slipper morgonmötet.', ratt: true },
                { text: 'Hon blir alltmer övertygad om att hon inte klarar arbetsplatsen.', varfor: 'Det byggs upp över tid – det hör till lång sikt.' },
                { text: 'Hon startar bilen och kör hem.', varfor: 'Det är responsen, inte dess konsekvens.' },
                { text: 'Hon vaknade kl 04.', varfor: 'Organismfaktor.' },
                { text: 'Chefen vet fortfarande ingenting.', varfor: 'Sant, men det är en omständighet – inte den konsekvens som styr beteendet.' }
              ],
              forklaring: 'Här sitter hela nyckeln: lättnaden kommer inom minuter och belönar beteendet varje gång.' },

            { etikett: 'K – LÅNG SIKT',
              fraga: 'Vad händer på månaders sikt?',
              val: [
                { text: 'Undvikandet förstärks. Tröskeln höjs, fler dagar uteblir, tilltron till egen förmåga sjunker.', ratt: true },
                { text: 'Lättnad direkt när hon vänder.', varfor: 'Det är den kortsiktiga konsekvensen – och just skillnaden i tid är poängen.' },
                { text: 'Hjärtklappning och illamående.', varfor: 'Responsens kroppsdel.' },
                { text: 'Hon vaknar klockan fyra.', varfor: 'Organismfaktor.' },
                { text: 'Kollegorna går in genom entrén.', varfor: 'Situationen.' }
              ] }
          ],
          forklaring: 'Analysen visar varför problemet växer: den kortsiktiga konsekvensen är stark, kommer direkt och belönar undvikandet, medan priset betalas långsamt. Det är också därför en sjukskrivning här är riskabel – den ger samma lättnad, fast i större dos och med vårdens signatur under.' },

        { typ: 'val',
          humor: 'trott',
          text: 'Och så sover jag ju inte. Jag vaknar vid fyra och sen ligger jag bara där och tänker. På helgerna sover jag till elva för att ta igen det.',
          fraga: 'Hur hanterar du sömnen?',
          tips: 'Sömnbrist och ångest driver varandra åt båda håll. Frågan är om sömnen är ett symtom att vänta ut eller ett eget spår.',
          val: [
            { text: 'Ta sömnen som ett eget spår redan nu: kartlägg tiderna, fast uppstigningstid alla dagar, bort med sovmorgnar och tupplurar. Följ den parallellt med ångestarbetet.',
              tid: 4, ok: true, princip: 'evidens',
              humor: 'neutral', reaktion: 'Anna antecknar. "Även på helgen?"',
              svar: 'Även på helgen? Det är ju då jag äntligen sover.',
              fx: { underlag: 12, agens: 12, allians: 6 },
              varfor: 'Sömnbrist sänker tröskeln för ångest, och ångest stör sömnen – kausaliteten går åt båda håll. Sovmorgnarna på helgen känns som återhämtning men förskjuter dygnet och gör måndagen värre. Sömnen behöver därför en egen, enkel plan från start, inte vänta på att ångesten ska ge med sig.' },
            { text: 'Förklara att sömnen brukar lösa sig när ångesten behandlas, och lämna den så länge.',
              tid: 2, ok: 'delvis', princip: 'evidens',
              humor: 'neutral', reaktion: 'Anna nickar men ser inte övertygad ut.',
              svar: 'Okej. Men det är ju det som är värst.',
              fx: { underlag: -4 },
              varfor: 'Ofta stämmer det – men här är dygnet redan förskjutet och sömnbristen underhåller både ångesten och den kognitiva svikten. Att vänta ut den kostar veckor i onödan, och Anna upplever dessutom att du inte tog det hon tycker är värst på allvar.' },
            { text: 'Föreslå att hon får sömntabletter utskrivna så att hon kommer i fas.',
              tid: 2, ok: false, princip: 'evidens',
              humor: 'lattad', reaktion: 'Anna ser hoppfull ut.',
              svar: 'Går det? Det vore skönt.',
              fx: { agens: -12, sakerhet: -8 },
              varfor: 'Inte förstahandsåtgärd vid den här bilden, inte din ordination, och risken för tillvänjning är reell. Framför allt lär det Anna att sömnen är något som ska fixas åt henne.' },
            { text: 'Råda henne att sova längre på morgnarna för att ta igen sömnen.',
              tid: 2, ok: false, princip: 'evidens',
              humor: 'lattad', reaktion: 'Anna ser lättad ut.',
              svar: 'Skönt. Då slipper jag ha dåligt samvete för det.',
              fx: { agens: -14, underlag: -8 },
              varfor: 'Det förskjuter dygnet ytterligare och är dessutom samma undvikandemönster en gång till, fast i sängen. Fast uppstigningstid är det som håller ihop dygnet.' }
          ] },

        { typ: 'kedja',
          banner: 'DFA-KEDJAN',
          fraga: 'Bygg DFA-kedjan för intyget.',
          tips: 'D = vad hon har. F = vad som är nedsatt. A = vad hon till följd av detta inte klarar av att göra i sitt arbete.',
          tidFel: 1,
          princip: 'bedda-d1',
          lank: [
            { etikett: 'D – DIAGNOS',
              fraga: 'Vilken rad är diagnosen?',
              val: [
                { text: 'F41.1 Generaliserat ångestsyndrom / F43 reaktion på svår stress', ratt: true },
                { text: 'Uttalad förväntansångest med autonoma symtom', varfor: 'Det beskriver funktionen, inte diagnosen.' },
                { text: 'Klarar inte att vistas på arbetsplatsen', varfor: 'Det är aktivitetsbegränsningen.' },
                { text: 'Omorganisation på arbetsplatsen sedan i våras', varfor: 'En omständighet i livet. Den är verklig men den är inte en sjukdom.' },
                { text: 'Nedsatt arbetsförmåga', varfor: 'Det är slutsatsen som kedjan ska leda fram till, inte dess första led.' }
              ] },
            { etikett: 'F – FUNKTIONSNEDSÄTTNING',
              fraga: 'Vilken rad är funktionsnedsättningen?',
              val: [
                { text: 'Uttalad förväntansångest med autonoma symtom, nedsatt koncentration, avbruten sömn från kl 04', ratt: true },
                { text: 'F41.1 Generaliserat ångestsyndrom', varfor: 'Diagnosen. Den bär ingenting på egen hand.' },
                { text: 'Avbryter arbetsdagen vid entrén och åker hem', varfor: 'Det är vad hon inte klarar av att göra – aktivitetsbegränsningen.' },
                { text: 'GAD-7: 14 poäng', varfor: 'En skattning kan komplettera, men den beskriver ingen funktion och kan inte bära ett intyg.' },
                { text: 'Bedöms behöva sjukskrivning 50 procent', varfor: 'Ett förslag till åtgärd. Det hör inte hemma i beskrivningen av funktionen.' }
              ] },
            { etikett: 'A – AKTIVITETSBEGRÄNSNING',
              fraga: 'Vilken rad är aktivitetsbegränsningen?',
              val: [
                { text: 'Klarar ej fysisk närvaro på arbetsplatsen eller möten med fler än två deltagare. Klarar textproduktion och redigering hemifrån.', ratt: true },
                { text: 'Nedsatt koncentrationsförmåga', varfor: 'Det är funktionen. Aktivitetsledet ska säga vad den nedsättningen gör omöjligt att utföra.' },
                { text: 'Patienten är arbetsoförmögen', varfor: 'En slutsats, inte en beskrivning – och den motsägs av att hon arbetar hemifrån.' },
                { text: 'F43 reaktion på svår stress', varfor: 'Diagnosen igen.' },
                { text: 'Har svårt att sova', varfor: 'Ett symtom. Det blir en aktivitetsbegränsning först när det sägs vad hon inte klarar till följd av det.' }
              ] }
          ],
          forklaring: 'Lägg märke till att aktivitetsraden också säger vad Anna KAN. Utan den uppgiften läser Försäkringskassan bara "kan inte arbeta", och då finns varken deltid eller anpassning att bedöma.' },

        { typ: 'flera',
          banner: 'UTREDNINGEN',
          fraga: 'Vilka tre formuleringar hör hemma i den försäkringsmedicinska utredningen?',
          antal: 3,
          tidPer: 2,
          tips: 'Läkaren ska kunna signera det du skriver. Skriv observationer och konkreta begränsningar – inte slutsatser, gissningar eller åsikter om arbetsgivaren.',
          val: [
            { text: 'Uppger avbruten sömn sedan ca 3 mån, uppvaknande kl 04, kan ej somna om. Vid samtalet påtaglig psykomotorisk oro.',
              ratt: true, princip: 'dfa-funktion', fx: { underlag: 10 },
              varfor: 'Funktionsnedsättning med angiven källa: vad patienten uppger och vad du själv observerar. Precis så ska det stå.' },
            { text: 'Klarar textproduktion och redigering hemifrån. Klarar ej fysisk närvaro på arbetsplatsen eller möten med fler än två deltagare.',
              ratt: true, princip: 'dfa-aktivitet', fx: { underlag: 12 },
              varfor: 'Aktivitetsbegränsning i konkreta arbetsuppgifter – och lika viktigt: vad som fortfarande fungerar. Det är det som gör deltid och anpassning möjlig att bedöma.' },
            { text: 'Planerad åtgärd: psykoedukation och situationsanalys genomförd vid besöket. iKBT med behandlarstöd startar denna vecka. Separat sömnåtgärd med fast uppstigningstid. Uppföljning om 1 vecka inför ställningstagande till fortsatt intyg.',
              ratt: true, princip: 'bedda-d2', fx: { underlag: 10, tydlighet: 8 },
              varfor: 'Ett underlag utan plan är en beskrivning av ett problem. Läkaren behöver veta vad som redan gjorts, vad som startar när, och vilket datum funktionen ska omvärderas.' },
            { text: 'Patienten är helt arbetsoförmögen.',
              ratt: false, princip: 'dfa-aktivitet', fx: { underlag: -12 },
              varfor: 'Det är en slutsats, inte en observation – och den motsägs dessutom av att hon arbetar hemifrån. Slutsatsen om arbetsförmåga är läkarens att dra, utifrån det du beskriver.' },
            { text: 'Arbetsgivaren har hanterat omorganisationen undermåligt.',
              ratt: false, princip: 'signering', fx: { underlag: -14, sakerhet: -8 },
              varfor: 'Andrahandsuppgift, oprövad, och en värdering av tredje part i en myndighetshandling. Det hör inte hemma i ett intyg.' },
            { text: 'Bedöms behöva sjukskrivning 100 % i minst 8 veckor.',
              ratt: false, princip: 'signering', fx: { underlag: -10 },
              varfor: 'Du får absolut föreslå grad och längd – men då som ett tydligt märkt förslag med motivering, inte som en fastslagen bedömning i utredningsdelen. Beslutet är läkarens.' }
          ] },

        { typ: 'val',
          fraga: 'Vilken insats föreslår du?',
          tips: 'Vad öppnar dörren i stället för sjukskrivning – och vad kan faktiskt starta den här veckan, inte om två månader?',
          val: [
            { text: 'Psykoedukation nu, med hennes egen situationsanalys som underlag. iKBT med behandlarstöd startar den här veckan. Ett beteendeexperiment redan i morgon: gå in genom entrén och stanna 10 minuter. Anna ringer själv sin chef om anpassad start – med ett datum för när den ska trappas av.',
              tid: 5, ok: true, princip: 'agens',
              humor: 'oppen', reaktion: 'Anna skriver ner det i sin bok. Rösten är stadigare.',
              svar: 'Tio minuter. Det ska jag klara. Och jag ringer Karin imorgon förmiddag.',
              fx: { agens: 20, allians: 10, tydlighet: 12, underlag: 8 },
              varfor: 'Insatsen startar den här veckan i stället för om två månader, och den är dimensionerad efter problemets tyngd: psykoedukation och iKBT med behandlarstöd räcker långt vid lindrig till medelsvår ångest. Det konkreta steget imorgon ger henne något att lyckas med innan nästa besök, och arbetsgivarkontakten äger hon själv.' },

            { text: 'Boka åtta KBT-sessioner ansikte mot ansikte med start nästa vecka.',
              tid: 3, ok: 'delvis', princip: 'evidens',
              humor: 'neutral', reaktion: 'Anna ser nöjd ut. Du tittar i kalendern.',
              svar: 'Åtta gånger? Då är jag nog frisk till sommaren.',
              fx: { agens: 6, tydlighet: -6, underlag: -4 },
              varfor: 'Innehållet är rätt men upplägget håller inte i verkligheten: åtta sammanhängande tider i följd finns sällan att boka, och de behövs sällan vid den här svårighetsgraden. Att lova något kalendern inte kan hålla skapar en ny besvikelse. iKBT med behandlarstöd eller några korta besök är förstahandsvalet – spara de långa serierna till dem som verkligen behöver dem.' },

            { text: 'Sätta upp henne i kön för KBT och avvakta tills en plats blir ledig om åtta veckor.',
              tid: 2, ok: false, princip: 'evidens',
              humor: 'orolig', reaktion: 'Anna: "Åtta veckor?"',
              svar: 'Vad gör jag fram till dess då?',
              fx: { agens: -12, tydlighet: -8 },
              varfor: 'Åtta veckors väntan på behandling är åtta veckor av fortsatt undvikande. Hela poängen med LESS är att något börjar hända direkt – annars har det snabbare flödet ingen effekt alls.' },

            { text: 'Sjukskrivning 100 % i fyra veckor, sedan utvärdering.',
              tid: 2, ok: false, princip: 'evidens',
              humor: 'lattad', reaktion: 'Anna ser lättad ut.',
              svar: 'Tack. Då kan jag samla mig.',
              fx: { agens: -20, underlag: -8 },
              varfor: 'Fyra veckors frånvaro utan behandling gör entrén svårare, inte lättare – precis det som situationsanalysen just visade. Om sjukskrivning ändå bedöms nödvändig ska den kombineras med behandling och en upptrappningsplan, aldrig stå ensam.' },

            { text: 'Föreslå att Anna sjukanmäler sig tills chefen ändrar organisationen.',
              tid: 2, ok: false, princip: 'ansvar',
              humor: 'neutral', reaktion: 'Anna: "Kan man göra så?"',
              svar: 'Så jag ska vara hemma tills de fixar det?',
              fx: { agens: -16, tydlighet: -14, sakerhet: -6 },
              varfor: 'Sjukskrivning är inte ett förhandlingsverktyg mot arbetsgivaren. Det är en medicinsk åtgärd, och att använda den så skadar både patienten och intygets trovärdighet.' }
          ] },

        { typ: 'beslut',
          banner: 'FÖRSLAG TILL LÄKARE',
          fraga: 'Vad rekommenderar du i utredningen?',
          tips: 'Väg samman: funktionen, vad som fortfarande fungerar, behandlingen som startar och risken med frånvaro. Motivera oavsett vad du väljer.',
          val: [
            { text: 'Ingen sjukskrivning. iKBT och sömnåtgärd startar denna vecka, anpassad återgång via arbetsgivaren med avtrappningsdatum, uppföljning om 1 vecka.',
              ok: true, princip: 'grad', tid: 2,
              kampanj: { nyckel: 'anna-forslag', varde: 'ingen' },
              fx: { underlag: 12, agens: 10 },
              utfall: 'Underlaget går till läkaren för ställningstagande. Anna har tid för uppföljning om sju dagar.',
              varfor: 'Vid lindrig till medelsvår ångest med bevarad funktion i delar av arbetet är tidig behandling och bibehållen arbetsplatskontakt oftast bäst. Att hon klarar textproduktion hemifrån och saknar röda flaggor gör alternativet väl motiverat – och insatsen är dimensionerad så att den faktiskt kan börja den här veckan.' },
            { text: 'Sjukskrivning 25 % i tre veckor som brygga, med behandling, upptrappningsplan och slutdatum.',
              ok: 'delvis', princip: 'grad', tid: 2,
              kampanj: { nyckel: 'anna-forslag', varde: '25' },
              fx: { underlag: 8 },
              utfall: 'Underlaget går till läkaren, som noterar att motiveringen är hållbar.',
              varfor: 'Ett fullt försvarbart alternativ som är värt att diskutera i gruppen: en liten, tidsbegränsad avlastning kan göra exponeringen genomförbar. Det avgörande är att den har ett syfte, ett slutdatum och en behandling kopplad till sig – inte att siffran är noll.' },
            { text: 'Sjukskrivning 100 % i fyra veckor för återhämtning.',
              ok: false, princip: 'evidens', tid: 2,
              kampanj: { nyckel: 'anna-forslag', varde: '100' },
              fx: { underlag: -12, agens: -12 },
              utfall: 'Underlaget går till läkaren. Ingen behandling är påbörjad.',
              varfor: 'Heltidsfrånvaro utan behandling vid undvikandedriven ångest är den åtgärd som mest tillförlitligt gör ett kort sjukfall långt. Dessutom motsägs helt nedsatt arbetsförmåga av att hon arbetar hemifrån.' },
            { text: 'Avstår från att ta ställning – låt läkaren avgöra graden.',
              ok: false, princip: 'signering', tid: 1,
              kampanj: { nyckel: 'anna-forslag', varde: 'inget' },
              fx: { underlag: -14 },
              utfall: 'Läkaren får ett underlag utan riktning och bokar in Anna för ett eget besök.',
              varfor: 'Du är den som träffat patienten och gjort utredningen. Att inte föreslå något flyttar hela bedömningen till någon med sämre underlag – och gör LESS-flödet till en omväg i stället för en genväg.' }
          ] }
      ]
    },

    /* ================================================================
       ELIN – utmattningssyndrom. Sjukskrivning KAN vara rätt.
       ================================================================ */
    {
      id: 'psy-elin',
      roll: 'psykolog',
      titel: 'Återbesök, 50 % sjukskriven',
      patient: 'elin',
      lage: 'rum',
      minuter: 18,
      svarighet: 3,
      endastDrill: true,
      principer: ['grad', 'dfa-funktion', 'evidens', 'plan'],
      journal: [
        ['Pågående', 'Sjukskriven 50 % sedan 6 veckor'],
        ['Symtom', 'Sömnstörning 8 mån, minnesluckor, koncentrationssvikt, gråtmildhet'],
        ['Yrke', 'Förskollärare. Hög ljudnivå, ständiga avbrott.'],
        ['Socialt', 'Ensamstående, tre barn 4, 8 och 11 år'],
        ['Risk', 'Inga suicidtankar. Ingen alkohol.']
      ],
      intro: [
        'Elin har varit sjukskriven 50 procent i sex veckor och blir inte bättre.',
        'Hon ser tröttare ut än förra gången.'
      ],

      beats: [
        { typ: 'replik', humor: 'trott',
          text: 'Jag vet inte vad jag gör för fel. Jag är ju hemma halva tiden. Ändå glömmer jag saker hela tiden och börjar gråta i personalrummet.' },

        { typ: 'val',
          fraga: 'Vad undersöker du först?',
          tips: 'Femtio procent på papperet är inte alltid femtio procent i verkligheten. Och de lediga timmarna behöver inte vara återhämtning.',
          val: [
            { text: 'Gå igenom ett faktiskt dygn: när stiger hon, vad gör hon på de lediga halvdagarna, hur ser kvällarna ut?',
              tid: 6, ok: true, princip: 'dfa-funktion',
              humor: 'neutral', reaktion: 'Elin tystnar mitt i uppräkningen.',
              svar: 'De lediga eftermiddagarna? Då hämtar jag barnen tidigare, storhandlar, kör till mamma. Och jag svarar ändå i föräldragruppen på kvällarna. Jag har... aldrig tänkt på att det inte är vila.',
              fx: { underlag: 20, agens: 10, allians: 8 },
              varfor: 'Här ligger nyckeln. Halva sjukskrivningen har gått åt till obetalt arbete. Utan den kartläggningen hade en gradhöjning bara gett fler timmar av samma sak.' },
            { text: 'Låta henne skatta utmattning på KEDS och jämföra med förra gången.',
              tid: 4, ok: 'delvis', princip: 'dfa-funktion',
              humor: 'trott', reaktion: 'Elin fyller i.',
              svar: 'Det är högre än sist.',
              fx: { underlag: 8 },
              varfor: 'Bra för att följa förloppet, men skalan talar bara om att det är sämre – inte varför. Åtgärden går inte att välja utifrån poängen.' },
            { text: 'Konstatera att 50 procent uppenbarligen inte räcker och höja till 100 procent.',
              tid: 2, ok: false, princip: 'grad',
              humor: 'trott', reaktion: 'Elin nickar tacksamt.',
              svar: 'Kanske det. Jag orkar ju inte.',
              fx: { underlag: -12, agens: -8 },
              varfor: 'Att höja dosen av en åtgärd som inte fungerar, utan att veta varför den inte fungerar, är inte en bedömning. Den lediga tiden kan behöva ändra innehåll snarare än bli längre.' }
          ] },

        { typ: 'kontroll',
          banner: 'RESONEMANG',
          fraga: 'Vad är det viktigaste felet i Elins nuvarande upplägg?',
          tidFel: 2,
          princip: 'evidens',
          val: [
            { text: 'Den frilagda tiden används inte till återhämtning utan till andra krav', ratt: true },
            { text: 'Graden är för låg', ratt: false },
            { text: 'Hon har fel diagnos', ratt: false },
            { text: 'Hon borde inte ha sjukskrivits alls', ratt: false }
          ],
          forklaring: 'Sjukskrivning frigör tid – den fyller den inte med något. Utan en plan för vad tiden ska användas till blir en deltidssjukskrivning ofta bara en omfördelning av belastning. Det är därför sjukskrivning ska ordineras med innehåll, precis som en behandling.' },

        { typ: 'val',
          fraga: 'Elin frågar: "Ska jag sjukskriva mig helt?"',
          tips: 'LESS betyder inte att aldrig sjukskriva. Det betyder att sjukskrivningen ska ha ett syfte, ett innehåll och ett slut.',
          val: [
            { text: 'Kanske. Men i så fall behöver vi först bestämma vad tiden ska användas till – annars blir hundra procent bara mer av det du redan gör.',
              tid: 4, ok: true, princip: 'grad',
              humor: 'neutral', reaktion: 'Elin drar efter andan.',
              svar: 'Alltså att jag skulle behöva säga nej till saker hemma också? Det har ingen sagt förut.',
              fx: { agens: 16, tydlighet: 12, allians: 8 },
              varfor: 'Du håller dörren öppen för sjukskrivning men kopplar den till innehåll. Det är precis så en åtgärd med biverkningar ska doseras.' },
            { text: 'Nej. Arbete är hälsosamt, vi ska undvika sjukskrivning.',
              tid: 2, ok: false, princip: 'grad',
              humor: 'ledsen', reaktion: 'Elin ser ner i golvet.',
              svar: 'Okej. Då får jag väl försöka hårdare.',
              fx: { allians: -16, agens: -14, sakerhet: -8 },
              varfor: 'Detta är LESS-modellen missförstådd som ett förbud. Vid utmattningssyndrom med uttalad kognitiv påverkan kan sjukskrivning vara helt rätt. Att mekaniskt säga nej är lika oreflekterat som att mekaniskt säga ja.' },
            { text: 'Ja, jag föreslår 100 procent i tre månader.',
              tid: 2, ok: false, princip: 'plan',
              humor: 'lattad', reaktion: 'Elin ser lättad ut.',
              svar: 'Tack. Då slipper jag tänka på det ett tag.',
              fx: { tydlighet: -12, agens: -10 },
              varfor: 'Lång sjukskrivning utan plan, utan innehåll och utan inbokad omprövning. "Slippa tänka på det" är en varningssignal, inte ett behandlingsmål.' }
          ] },

        { typ: 'beslut',
          banner: 'FÖRSLAG TILL LÄKARE',
          fraga: 'Vad rekommenderar du?',
          val: [
            { text: '100 % i 4 veckor med uttalat syfte: strukturerad dygnsrytm, avlastning även hemma, behandlingsstart. Uppföljning vecka 2 och inbokad upptrappning. Rehabkoordinator kopplas in för arbetsgivarkontakt.',
              ok: true, princip: 'plan', tid: 3,
              fx: { underlag: 14, tydlighet: 12 },
              utfall: 'Läkaren signerar och noterar att motiveringen är ovanligt tydlig.',
              varfor: 'Här är sjukskrivning motiverad – och den är dessutom ordinerad: grad, längd, syfte, innehåll, uppföljning och en plan för vägen tillbaka. Så ser skillnaden ut mellan en behandling och en frånvaro.' },
            { text: 'Fortsatt 50 % men med ändrat innehåll: återhämtningsplan, avlastning hemma, behandlingsstart och tät uppföljning.',
              ok: 'delvis', princip: 'plan', tid: 3,
              fx: { underlag: 10 },
              utfall: 'Läkaren signerar efter en kort diskussion med dig om graden.',
              varfor: 'Rimligt och väl värt att diskutera i gruppen. Fördelen är bibehållen arbetsplatskontakt, risken är att försämringen fortsätter. Det avgörande är att innehållet faktiskt ändras och följs upp tätt.' },
            { text: '100 % i tre månader, utvärdering därefter.',
              ok: false, princip: 'plan', tid: 2,
              fx: { tydlighet: -14 },
              utfall: 'Läkaren returnerar underlaget och begär en plan.',
              varfor: 'Rätt riktning, fel utförande. Tre månader utan innehåll eller delmål är den sortens sjukfall som sedan blir arton månader.' },
            { text: 'Avsluta sjukskrivningen, full återgång med anpassning.',
              ok: false, princip: 'grad', tid: 2,
              fx: { sakerhet: -14, agens: -10 },
              utfall: 'Elin är hemma igen inom två veckor, nu helt utan plan.',
              varfor: 'Att avsluta en sjukskrivning hos en patient som försämras, utan att något ändrats, är inte aktiv rehabilitering. Det är att flytta problemet till nästa akutbesök.' }
          ] }
      ]
    }
  ];

})(window);
