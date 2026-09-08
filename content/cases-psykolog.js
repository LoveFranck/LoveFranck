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
      minuter: 44,
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
        'Ni sätter er. Anna har med sig en anteckningsbok.',
        'Torsdag 14.00. Fyrtiofyra minuter.'
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
          tips: 'S är det yttre läget. O är vad som händer inuti henne där och då – tanke, kroppslig förnimmelse och beteendeimpuls, var för sig. R är vad hon faktiskt gör. Sedan konsekvenserna, först på minuter och sedan på månader.',
          tidFel: 1,
          princip: 'sorkk',
          lank: [
            { etikett: 'S – SITUATION',
              fraga: 'Vad är situationen?',
              val: [
                { text: 'Måndag 07.50. Anna sitter i bilen på parkeringen. Kollegor går in genom entrén.', ratt: true },
                { text: 'Hon har sovit 3,5 timmar och inte ätit frukost.',
                  varfor: 'En etablerande omständighet: den gör beteendet mycket mer sannolikt, men den är inte situationen och inte heller något hon upplever i den.' },
                { text: 'Tanken "jag klarar inte det här idag".',
                  varfor: 'Det är tankedelen av organismfaktorerna.' },
                { text: 'Hon startar bilen och kör hem.',
                  varfor: 'Det är responsen.' },
                { text: 'Lättnaden när hon svänger ut från parkeringen.',
                  varfor: 'Den kortsiktiga konsekvensen.' }
              ],
              forklaring: 'Situationen ska gå att filma: tid, plats, vad som händer runt omkring.' },

            { etikett: 'O – TANKE',
              fraga: 'Vilken tanke dyker upp i situationen?',
              val: [
                { text: '"Jag är så trött. Jag klarar inte det här idag."', ratt: true },
                { text: 'Måndag 07.50 på parkeringen utanför kontoret.',
                  varfor: 'Situationen.' },
                { text: 'Hög puls och värmekänsla.',
                  varfor: 'Kroppsdelen av organismfaktorerna – nästa led.' },
                { text: 'Impulsen att bara komma därifrån.',
                  varfor: 'Beteendeimpulsen – ledet efter det.' },
                { text: 'Hon har undvikit arbetsplatsen i tre månader.',
                  varfor: 'Inlärningshistoria, alltså en etablerande omständighet. Den förklarar varför tanken är så snabb, men den är inte tanken.' }
              ] },

            { etikett: 'O – KROPPSLIG FÖRNIMMELSE',
              fraga: 'Vad känner hon i kroppen?',
              val: [
                { text: 'Hög puls, värmekänsla, spänd mage, ytlig andning.', ratt: true },
                { text: '"Jag klarar inte det här idag."',
                  varfor: 'Tanken.' },
                { text: 'Vill bara härifrån.',
                  varfor: 'Beteendeimpulsen.' },
                { text: 'Sömnbristen efter natten.',
                  varfor: 'En etablerande omständighet. Den sänker tröskeln för allt det andra, men den uppstår inte i situationen.' },
                { text: 'Hon kör hem.',
                  varfor: 'Responsen.' }
              ] },

            { etikett: 'O – BETEENDEIMPULS',
              fraga: 'Vad drar hon sig till att göra?',
              val: [
                { text: 'Flyktimpuls: bara härifrån, hem.', ratt: true },
                { text: 'Hjärtat slår hårt och hon blir varm.',
                  varfor: 'Den kroppsliga förnimmelsen.' },
                { text: '"Jag klarar inte det här idag."',
                  varfor: 'Tanken.' },
                { text: 'Hon startar bilen, kör hem och sjukanmäler sig i appen.',
                  varfor: 'Det är vad hon faktiskt gör – responsen. Impulsen är dragningen strax innan.' },
                { text: 'Obehaget släpper efter några minuter.',
                  varfor: 'Den kortsiktiga konsekvensen.' }
              ],
              forklaring: 'Impulsen är en dragning, inte en handling. Att den får ett eget led gör det möjligt att se att det fanns ett ögonblick där något annat var möjligt.' },

            { etikett: 'R – RESPONS',
              fraga: 'Vad gör hon?',
              val: [
                { text: 'Hon startar bilen, kör hem och sjukanmäler sig i appen.', ratt: true },
                { text: 'Flyktimpulsen: bara härifrån.',
                  varfor: 'Impulsen. Innehållet är detsamma, men responsen är det utförda beteendet.' },
                { text: 'Kollegorna går in genom entrén.',
                  varfor: 'Situationen.' },
                { text: 'På kvällen känner hon sig misslyckad.',
                  varfor: 'En konsekvens, och den kommer senare.' },
                { text: 'Hon har sovit 3,5 timmar.',
                  varfor: 'Etablerande omständighet.' }
              ],
              forklaring: 'Impuls och respons har ofta samma innehåll. Skillnaden är att impulsen är en dragning och responsen ett utfört beteende. För Anna framstår de som samma sak – hon ser inte hemresan som ett undvikande utan som den enda lösningen. Att skilja dem åt i analysen är ofta första gången patienten ser att det fanns ett val.' },

            { etikett: 'K – KORT SIKT',
              fraga: 'Vad händer direkt efteråt?',
              val: [
                { text: 'Obehaget släpper inom några minuter. Lättnad. Hon slipper morgonmötet.', ratt: true },
                { text: 'Hon blir alltmer övertygad om att hon inte klarar arbetsplatsen.',
                  varfor: 'Det byggs upp över tid – lång sikt.' },
                { text: 'Hon startar bilen och kör hem.',
                  varfor: 'Responsen, inte dess konsekvens.' },
                { text: 'Flyktimpulsen.',
                  varfor: 'Organismfaktor. Den kommer före beteendet, inte efter.' },
                { text: 'Chefen vet fortfarande ingenting.',
                  varfor: 'Sant, men det är en omständighet – inte den konsekvens som styr beteendet.' }
              ],
              forklaring: 'Här sitter hela nyckeln: lättnaden kommer inom minuter och belönar beteendet varje gång.' },

            { etikett: 'K – LÅNG SIKT',
              fraga: 'Vad händer på månaders sikt?',
              val: [
                { text: 'Undvikandet förstärks. Tröskeln höjs, fler dagar uteblir, tilltron till egen förmåga sjunker.', ratt: true },
                { text: 'Lättnad direkt när hon vänder.',
                  varfor: 'Den kortsiktiga konsekvensen – och just skillnaden i tid är poängen.' },
                { text: 'Hög puls och värmekänsla.',
                  varfor: 'Kroppslig förnimmelse.' },
                { text: 'Hon vaknar klockan fyra.',
                  varfor: 'Etablerande omständighet.' },
                { text: 'Kollegorna går in genom entrén.',
                  varfor: 'Situationen.' }
              ] }
          ],
          forklaring: 'Två saker att ta med sig. Organismfaktorerna är vad som händer inuti Anna i situationen – tanke, kropp och impuls – medan sömnbristen och den uteblivna frukosten är etablerande omständigheter: de skapar inte beteendet men gör det betydligt mer sannolikt. Och den kortsiktiga konsekvensen är stark, kommer direkt och belönar undvikandet, medan priset betalas långsamt. Det är också därför en sjukskrivning här är riskabel: den ger samma lättnad, i större dos och med vårdens signatur under.' },

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
    },

    /* ================================================================
       KATRIN – oplanerat besök. Läser som Anna. Är det inte.
       Fortsättningen på det felaktiga triagebeslutet i ssk-katrin:
       ärendet kom hit i stället för till läkare, och psykologen är den
       som sitter fyrtio minuter med henne. Tredje delen av resonemanget
       om den somatiska frågan – efter lak-somatisk-utredning-f43 och
       beatet DEN FRÅGA INGEN ÄGER i ssk-anna.
       Låses upp när kampanjen är klar. Endast övningsläge.
       ================================================================ */
    {
      id: 'psy-katrin',
      roll: 'psykolog',
      titel: 'Nybesök, torsdag 13.00',
      patient: 'katrin',
      lage: 'rum',
      minuter: 37,
      svarighet: 3,
      laser: 'oplanerat',
      endastDrill: true,
      principer: ['somatik', 'bedda-b', 'signering', 'dorr', 'forvantan', 'evidens', 'plan', 'agens', 'hypotes'],
      journal: [
        ['Remiss', 'Triagerad av sjuksköterska i chatt för tre veckor sedan. Bedömd som trolig utmattning – nattarbete i nio år, underbemannad avdelning. Bokad hit för nybesök och försäkringsmedicinsk utredning.'],
        ['Noterat i triagen', 'Trötthet ca 6 månader, tappar tråden, glömmer saker på arbetet, sover uselt på dagarna. Nekar tankar på att inte vilja leva. Rubriken Somatik är tom.'],
        ['Tidigare', 'Inga kontakter för psykisk ohälsa. Inga läkemedel. Röker ej.'],
        ['Prover', 'Inga laboratorieprover registrerade. Katrin uppgav i chatten att senaste provet togs vid en graviditet för fjorton år sedan.'],
        ['Arbete', 'Undersköterska, kommunalt särskilt boende. Ständig natt sedan nio år, fyra nätter i rad och sedan ledigt. Nästa pass lördag natt.'],
        ['Socialt', 'Sambo, två barn 14 och 18 år.']
      ],
      intro: [
        'Torsdag 13.00. Tiden är avsatt för nybesök och försäkringsmedicinsk utredning. Triagen har redan skrivit vad ärendet handlar om, och mallen ligger öppen på skärmen.',
        'Katrin kommer in i ytterjacka och behåller den på.'
      ],

      beats: [

        { typ: 'replik', humor: 'trott',
          text: 'Det står visst att jag är utbränd. Jag vet inte om jag är det. Jag är inte ledsen och jag tycker fortfarande om jobbet. Jag är bara trött på ett sätt jag inte kan förklara. Sedan i mars.' },

        { typ: 'val',
          fraga: 'Hur ramar du in besöket?',
          tips: 'Du har fått ett ärende med en förklaring redan påklistrad. Frågan är om du prövar den eller bygger vidare på den.',
          val: [
            { text: 'Det står utmattning i remissen, men det är någon annans hypotes, inte en diagnos. Jag vill börja om från början och höra hur tröttheten faktiskt ser ut. Sedan bestämmer vi vad det här besöket ska bli.',
              tid: 3, ok: true, princip: 'bedda-b',
              humor: 'oppen', reaktion: 'Katrin tittar upp för första gången.',
              svar: 'Tack. Jag kände mig lite dum som satt här och tänkte att det inte stämmer.',
              fx: { allians: 10, tydlighet: 12, sakerhet: 6 },
              varfor: 'En hypotes man får med sig från någon annan är den svåraste sorten att pröva – man börjar leta bekräftelse utan att märka det, och materialet man samlar in passar alltid. Att säga högt att den är en hypotes gör den prövbar, och ger dessutom Katrin tillstånd att invända. Hon försökte redan i sin första replik.' },

            { text: 'Vi tar det i tur och ordning. Berätta hur belastningen på avdelningen sett ut det senaste året.',
              tid: 3, ok: 'delvis', princip: 'bedda-b',
              humor: 'neutral', reaktion: 'Katrin drar på det och börjar berätta om schemat.',
              svar: 'Vi är underbemannade. Men det har vi varit i nio år.',
              fx: { underlag: 4, sakerhet: -4 },
              varfor: 'En fråga vilken psykolog som helst ställer, och den är inte fel – men du började i triagens förklaring, och då får du material som passar den. Lägg märke till svaret: belastningen är oförändrad, tröttheten är ny. Frågan är värd att ställa som prövning av hypotesen, inte som utgångspunkt för den.' },

            { text: 'Vad bra att du kom. Vi hinner göra hela utredningen idag, så slipper du komma tillbaka.',
              tid: 2, ok: false, princip: 'forvantan',
              humor: 'lattad', reaktion: 'Katrin ser lättad ut och lossar på jackan.',
              svar: 'Skönt. Jag har bytt bort ett pass för att komma hit.',
              fx: { allians: 8, tydlighet: -6, underlag: -6, sakerhet: -10 },
              varfor: 'Du lovade ett resultat innan du gjort en bedömning, och priset betalas senare i besöket: när det visar sig att utredningen inte borde slutföras idag är det ditt eget löfte som står i vägen. Ett besök ramas in med vad ni ska göra, aldrig med vad det ska mynna ut i.' },

            { text: 'Jag ser att inga prover är tagna. Det tar vi först – jag skickar en remiss på blodstatus och TSH så har vi svaren.',
              tid: 2, ok: false, princip: 'signering',
              humor: 'neutral', reaktion: 'Katrin: "Får du göra det?"',
              svar: 'Ska jag gå och lämna blod nu, alltså?',
              fx: { sakerhet: -12, tydlighet: -6 },
              varfor: 'Rätt instinkt, fel hand. En provbeställning är en ordination: någon ska svara för indikationen, tolka svaret och ta ansvar när det avviker. Det är inte du. Du har dessutom inte hört anamnesen ännu, så du vet inte vilken fråga proverna skulle svara på. Instinkten kommer tillbaka senare i besöket – då med rätt ägare.' }
          ] },

        { typ: 'flera',
          banner: 'ANAMNESEN',
          fraga: 'Du hinner fyra frågor innan du bestämmer vad besöket ska bli. Välj fyra.',
          antal: 4,
          tidPer: 2,
          tips: 'Fråga efter det som skulle kunna få dig att ändra dig. En fråga som bara kan bekräfta hypotesen är ingen fråga.',
          val: [
            { text: 'Är du lika trött de veckor du är ledig, eller släpper det då?',
              ratt: true, princip: 'bedda-b', fx: { underlag: 10, sakerhet: 8 },
              varfor: 'En trötthet som kommer ur belastning varierar oftast med belastningen. En trötthet som kommer ur kroppen gör det inte. Svaret bevisar ingenting på egen hand – vid ett utvecklat utmattningstillstånd uteblir återhämtningen också – men det är den enskilda fråga som flyttar mest per sekund, och den kostar tio.' },

            { text: 'Har något annat i kroppen ändrat sig det här halvåret? Vikt, mage, hud, hår, blödningar.',
              ratt: true, princip: 'somatik', flagga: 'kroppen-fragad',
              fx: { underlag: 12, sakerhet: 12 },
              varfor: 'Det här är en anamnesfråga, inte en undersökning. Du ställer ingen diagnos genom att fråga – du samlar det som gör att någon annan kan göra det. Att psykologen varken får utreda eller uttala sig om kroppen betyder inte att psykologen inte får fråga om den. Tvärtom: du är den i huset som sitter längst tid med patienten, och därför den som har råd att ställa den.' },

            { text: 'Vill du men orkar inte, eller har lusten till saker försvunnit?',
              ratt: true, princip: 'bedda-b', fx: { underlag: 10 },
              varfor: 'Skiljer bevarad lust med bristande ork från anhedoni och nedstämdhet. Det är frågan som avgör om en depressionsbild överhuvudtaget är på bordet, och den ställs förvånansvärt sällan uttryckligen – man antar svaret i stället, och antar oftast fel håll.' },

            { text: 'Hur många timmar sover du efter ett nattpass – och hur är det de nätter du är ledig och kan sova en hel natt?',
              ratt: true, princip: 'evidens', fx: { underlag: 10, sakerhet: 6 },
              varfor: 'Två frågor i en, och det är den andra som bär. Fem timmars dagsömn efter ett nattpass gör vem som helst trött, och så har hon sovit i nio år. Frågan om de lediga nätterna skiljer den kroniska sömnskulden från något som inte ger med sig ens när sömnen räcker till. Utan den delfrågan blir nattarbetet en förklaring som täcker allt och förklarar ingenting.' },

            { text: 'Låt henne fylla i KEDS så ni har ett utgångsvärde.',
              ratt: false, princip: 'bedda-b', fx: { underlag: -6, sakerhet: -8 },
              varfor: 'Instrumentet är inte fel, men det kan inte göra det du behöver här. En skala för uttröttbarhet blir hög oavsett vad tröttheten beror på – en obehandlad kroppslig sjukdom ger också hög poäng. Du får en siffra som gör hypotesen mer övertygande utan att göra den mer sann, och som pekar ut riktningen för nästa läsare av journalen.' },

            { text: 'Hur är stämningen i arbetsgruppen, och hur fungerar det med chefen?',
              ratt: false, princip: 'bedda-b', fx: { underlag: -4 },
              varfor: 'Varken dum eller oviktig – men den kan bara ge material till den förklaring du redan blivit tilldelad, och svaret blir ja, för svaret blir alltid ja. Den skiljer ingenting, och den kostar två minuter i just den del av besöket där du fortfarande kunde ha ändrat dig.' },

            { text: 'Hur länge tänker du dig själv att du skulle behöva vara borta från jobbet?',
              ratt: false, princip: 'forvantan', fx: { allians: 4, tydlighet: -8, agens: -8 },
              varfor: 'Frågan förutsätter slutsatsen. Ni är några minuter in i ett besök där ingen ännu vet vad tröttheten beror på, och du har just gjort sjukskrivningen till besökets ämne. Efter det blir varje annan väg en besvikelse.' },

            { text: 'Har du provat att sätta gränser hemma och prioritera bort saker?',
              ratt: false, princip: 'bedda-b', fx: { allians: -6, agens: -6 },
              varfor: 'Ett råd förklätt till en fråga, givet före bedömningen. Om tröttheten har en kroppslig orsak är rådet dessutom en anklagelse: hon har slitit i ett halvår för att orka, och får nu höra att hon inte försökt.' }
          ] },

        { typ: 'replik', humor: 'trott',
          text: 'Ledig? Nej, det spelar ingen roll. Jag var borta två veckor i somras och kom hem precis lika trött. Och nej, lusten finns kvar – jag ligger på soffan och vill upp och göra saker, jag kommer bara inte upp. Efter ett pass sover jag fem timmar med gardinerna för, som alltid. Men de lediga nätterna sover jag nio timmar och vaknar precis lika trött. Det gjorde jag inte förr.' },

        { typ: 'replik', om: { finns: 'kroppen-fragad' }, humor: 'trott',
          text: 'Kroppen, säger du... jo. Jag fryser hela tiden, jag har filt på mig på nattpasset och tjejerna skrattar åt mig. Har gått upp sex kilo utan att äta annorlunda, och magen går trögt. Håret ligger i duschen. Och blödningarna har varit riktigt rikliga sedan i höstas, jag trodde det var övergångsåldern. Fast det har väl inte med saken att göra?' },

        { typ: 'val', om: { saknas: 'kroppen-fragad' },
          humor: 'trott',
          text: 'Förlåt – är det kallt här inne? Jag fryser jämt nuförtiden. Ta det inte personligt, jag har filt på mig på nattpasset också.',
          fraga: 'Hon ber om ursäkt för en detalj. Vad gör du?',
          tips: 'Det som sägs som en ursäkt är ofta det som inte fick plats bland frågorna du hann ställa.',
          val: [
            { text: 'Stanna vid det: sedan när fryser du, och har något annat i kroppen ändrat sig samtidigt – vikt, mage, hud, hår, blödningar?',
              tid: 3, ok: true, princip: 'somatik', flagga: 'kroppen-fragad',
              humor: 'neutral', reaktion: 'Katrin tystnar och tänker efter.',
              svar: 'Sedan i höstas, ungefär. Jag har gått upp sex kilo utan att äta annorlunda, magen går trögt och håret ligger i duschen. Och blödningarna har varit riktigt rikliga, jag trodde det var övergångsåldern. Fast det har väl inte med saken att göra?',
              fx: { underlag: 14, sakerhet: 14, allians: 6 },
              varfor: 'Du fick en andra chans och tog den – och den kostade tre minuter du kunde ha lagt i anamnesen. Patienter avväpnar det som skrämmer dem genom att be om ursäkt för det. Att stanna vid en sådan mening är billigare än varje utredning som görs för att ingen stannade.' },

            { text: 'Notera det och gå vidare – ni har ont om tid och mycket kvar av utredningen.',
              tid: 1, ok: false, princip: 'somatik',
              humor: 'sluten', reaktion: 'Katrin nickar och drar jackan tätare om sig.',
              svar: 'Nej nej, det är inget. Fast jag har gått upp sex kilo också, och håret ligger i duschen. Men det är väl bara åldern.',
              fx: { underlag: -8, sakerhet: -14 },
              varfor: 'Hon säger det ändå, i förbifarten, som något hon redan förklarat bort. Uppgiften hölls aldrig undan från dig – du hann bara bestämma vad besöket handlade om innan du hörde den. Så här försvinner den somatiska frågan i praktiken: inte för att någon döljer något, utan för att ingen stannar.' },

            { text: 'Frusenhet hör till när kroppen gått på högvarv länge. Det brukar ge med sig när stressen släpper.',
              tid: 1, ok: false, princip: 'bedda-b',
              humor: 'lattad', reaktion: 'Katrin ser lugnad ut. "Jaha, så det hör ihop."',
              svar: 'Skönt. Då är det inget konstigt alltså.',
              fx: { allians: 8, underlag: -10, sakerhet: -18 },
              varfor: 'Du gjorde en invändning mot hypotesen till ett stöd för den, och du gjorde det med en fysiologisk förklaring du inte har täckning för. Nu har Katrin dessutom fått höra av vården att symtomet är förklarat, vilket är det effektivaste sättet att se till att hon inte tar upp det nästa gång heller.' }
          ] },

        { typ: 'kontroll',
          banner: 'STÄMMER FÖRKLARINGEN MED BILDEN?',
          fraga: 'Trötthet i ett halvår, tappar tråden, sover uselt på dagarna – och nattarbete i nio år på en underbemannad avdelning. Vad i det Katrin berättat går INTE ihop med den förklaring du fick med remissen?',
          tidFel: 2,
          princip: 'hypotes',
          val: [
            { text: 'Att tröttheten är lika stor ledig som i arbete och inte ger med sig av nio timmars sömn, att lusten är kvar – och att fem andra saker i kroppen ändrat sig under samma halvår.',
              ratt: true },
            { text: 'Att hon tappar tråden och glömmer saker.',
              ratt: false,
              varfor: 'Kognitiv svikt finns vid båda förklaringarna, och vid sömnbrist också. Det är det vanligaste i rummet och det som skiljer dem åt allra sämst.' },
            { text: 'Att hon bara sover fem timmar efter ett nattpass.',
              ratt: false,
              varfor: 'Det är en verklig sömnskuld och en verklig delförklaring – men den har sett likadan ut i nio år. En exponering som är oförändrad förklarar sällan en förändring som är ett halvår gammal. Att den ändå kan ha börjat ta ut sin rätt, eftersom tåligheten för skiftarbete typiskt minskar med åldern, är värt att diskutera i gruppen. Det gör den till en delförklaring, inte till det som skaver.' },
            { text: 'Att inga prover någonsin är tagna.',
              ratt: false,
              varfor: 'Sant, och en brist i handläggningen – men det är ingen iakttagelse hos Katrin. Hade allt annat stämt med utmattning hade det varit rätt att arbeta vidare och lämna provfrågan vidare i skrift.' },
            { text: 'Att hon aldrig sökt för psykisk ohälsa förut.',
              ratt: false,
              varfor: 'Säger ingenting om vad tröttheten beror på. Utmattning drabbar oftast just den som aldrig varit sjuk förut.' }
          ],
          forklaring: 'Ett tillstånd som utvecklas ur belastning brukar också röra sig med belastningen: det byggs upp av krav och lättar, långsamt, av avlastning. Katrins trötthet gör ingetdera. Den ligger still oavsett om hon arbetar eller är ledig, den påverkas inte av att hon får sova ut, och lusten är kvar – hon vill men orkar inte. Samtidigt har fem andra saker i kroppen ändrat sig under samma halvår, och belastningen som skulle vara motorn har varit oförändrad i nio år. Kombinationen trötthet som inte svarar på vila och nytillkomna kroppsliga förändringar är ett mönster med flera möjliga orsaker. Vilken av dem det är kan du varken avgöra eller behöva avgöra. Det du kan säga, och som är hela din uppgift här, är att bilden inte har den form som utmattning brukar ha.' },

        { typ: 'kontroll',
          banner: 'DEN FRÅGA INGEN ÄGER',
          fraga: 'Du sitter med det här, och tiden som återstår är bokad för en försäkringsmedicinsk utredning. Vad är slutsatsen?',
          tidFel: 2,
          princip: 'somatik',
          val: [
            { text: 'Underlaget för en psykiatrisk diagnos håller inte förrän någon tagit ställning till det kroppsliga. Utredningen kan inte slutföras idag.',
              ratt: true },
            { text: 'Ingenting i det hon berättar talar för allvarlig kroppslig sjukdom. Slutför utredningen.',
              ratt: false,
              varfor: 'En uteslutning du inte får göra. Att du inte kan bedöma något är inte samma sak som att det inte finns – och att fria kroppen är exakt lika mycket en medicinsk bedömning som att fälla den. Det är samma otillåtna beslut, sett från andra hållet.' },
            { text: 'Kroppsligt och psykiskt kan pågå samtidigt. Slutför utredningen och lägg till en rad om att prover bör tas.',
              ratt: false,
              varfor: 'Sant att de kan pågå samtidigt – men ett underlag som är skrivet blir läst, och slutsatsen i det väger tyngre än reservationen längre ned. Du skulle beskriva en uttalad funktionsnedsättning vars orsak du inte känner till, och en läkare bygger sedan ett intyg på den beskrivningen.' },
            { text: 'Somatiken är läkarens bord. Gör din del och skicka med frågan i journalen.',
              ratt: false,
              varfor: 'Halva vägen, och det är den halva som brister. Att skriva ned frågan är nödvändigt men inte tillräckligt. En anteckning utan mottagare och utan datum är inte en tilldelad fråga – den är en spårbar underlåtenhet. Någon ska heta något, och något ska stå i en kalender.' },
            { text: 'Det här är akut. Hon ska till akutmottagningen idag.',
              ratt: false,
              varfor: 'Ingenting i bilden är akut. Ett halvårs successiv trötthet utreds planerat, med prover först och en bokad tid sedan. Att göra varje obesvarad fråga till en akuttid är samma mekaniska reflex som spelet tränar bort på andra ställen, bara med omvänt förtecken.' }
          ],
          forklaring: 'Sjuksköterskan mötte samma fråga i triagen och lämnade den vidare hit. Du är sista ledet – och du är den som sitter fyrtio minuter med Katrin, vilket gör dig till den som faktiskt hör att hon fryser. Du ska inte utreda kroppen: du får inte beställa prover, inte tolka dem och inte ställa diagnosen. Men Socialstyrelsens intygsföreskrift (HSLF-FS 2018:54) säger i 6 kap. 2 § att intygsutfärdaren endast ska uttala sig om sådana förhållanden hon har tillräcklig kännedom om, och i 6 kap. 3 § att det ska framgå från vem varje uppgift kommer och vad som är utfärdarens egen bedömning. Båda kraven träffar också det underlag en läkare bygger sitt intyg på. Att beskriva en uttalad funktionsnedsättning med en psykiatrisk diagnos i botten, när ingen tagit ett prov på fjorton år, är att uttala sig om något du inte vet. Det du ska göra är att formulera frågan så skarpt att den går att svara på – och se till att den får en namngiven ägare och ett datum.' },

        { typ: 'val',
          humor: 'orolig',
          text: 'Vad tänker du? Är det utbrändhet?',
          fraga: 'Vad svarar du?',
          tips: 'Du får säga att något behöver undersökas. Du får inte säga vad det är, och inte heller vad det inte är. Skillnaden mellan de meningarna är hela din legitimation.',
          val: [
            { text: 'Jag vet inte, och det är faktiskt mitt svar. Att tröttheten är lika stor när du är ledig, att du fryser, att flera saker i kroppen ändrat sig samtidigt – och att ingen tagit ett prov på fjorton år. Det behöver en läkare titta på innan någon skriver något om utmattning. Jag ordnar det. Du ska inte behöva driva det själv.',
              tid: 4, ok: true, princip: 'signering',
              humor: 'oppen', reaktion: 'Katrin blir alldeles tyst. Sedan börjar hon gråta.',
              svar: 'Förlåt. Det är bara... jag har gått ett halvår och trott att jag håller på att bli dement. Eller att jag bara blivit lat.',
              fx: { allians: 12, tydlighet: 14, sakerhet: 14, agens: 8 },
              varfor: 'Tre saker på en gång, och alla tre behövs. Du säger vad du inte vet, vilket är det enda du har grund för att säga. Du säger att det finns en fråga som ska besvaras, vilket är det Katrin behöver höra. Och du tar ägarskapet, i stället för att lämna ett halvårs trötthet till den tröttaste personen i rummet att administrera.' },

            { text: 'Det här låter faktiskt som sköldkörteln. Kylan, vikten, håret – det är ganska klassiskt. Vi ska ta prover på det.',
              tid: 2, ok: false, princip: 'signering',
              humor: 'lattad', reaktion: 'Katrin ser hoppfull ut för första gången under besöket.',
              svar: 'Så det finns en förklaring? Och den går att behandla?',
              fx: { allians: 10, tydlighet: -6, sakerhet: -14 },
              varfor: 'Den varmaste reaktionen i hela besöket, och den kommer av att du sa något du inte får säga. Du är psykolog och har just ställt en medicinsk diagnos, utan undersökning och utan prover. Blir provet normalt har du inte bara haft fel om sköldkörteln – du har förbrukat trovärdigheten för allt annat du sagt, inklusive att det kan finnas en psykologisk del. Och ser hon ett provsvar i appen innan läkaren hunnit ringa, är det du som satt förväntan på vad det betyder.' },

            { text: 'Nej, det här är inte utbrändhet. Men det är ingenting allvarligt – vi tar några prover så får vi se.',
              tid: 2, ok: false, princip: 'signering',
              humor: 'lattad', reaktion: 'Katrin slappnar av. "Skönt att det inte är något farligt."',
              svar: 'Vad skönt. Då behöver jag inte gå och oroa mig i alla fall.',
              fx: { allians: 10, tydlighet: -8, sakerhet: -16 },
              varfor: 'Du friade i stället för att fälla, och trodde att det var den ofarliga riktningen. Det är det inte. Att säga att ingenting är allvarligt är precis lika mycket en medicinsk bedömning som att säga vad det är – och den versionen har dessutom en biverkning: en patient som blivit lugnad söker senare när det blir sämre. Du har ingen aning om vad proverna visar.' },

            { text: 'Jag kan tyvärr inte uttala mig om kroppsliga saker. Det får du ta med en läkare.',
              tid: 1, ok: 'delvis', princip: 'dorr',
              humor: 'sluten', reaktion: 'Katrin drar jackan tätare om sig.',
              svar: 'Okej. Då ringer jag och bokar en läkartid då.',
              fx: { allians: -10, agens: -10, tydlighet: -8, sakerhet: 4 },
              varfor: 'Formellt korrekt och praktiskt oanvändbart, och värt att diskutera i gruppen: gränsen är riktigt dragen, men den levereras som en dörr i ansiktet. Du stängde utan att öppna, och lämnade frågan till den som redan väntat ett halvår på att någon skulle ställa den. Att inte få uttala sig om något är inte samma sak som att inte få ta ansvar för att det blir gjort.' }
          ] },

        { typ: 'val',
          humor: 'orolig',
          text: 'Men jag är ju kallad hit för det där intyget. Jag har väntat tre veckor och bytt bort ett pass för att komma. Ska jag komma tillbaka en gång till?',
          fraga: 'Vad gör du med den avsatta tiden?',
          tips: 'Att inte slutföra utredningen är rätt beslut. Frågan är vad du gör med de tjugo minuter som blir över.',
          val: [
            { text: 'Vi gör inte klart intygsdelen idag – jag skulle skriva något jag inte vet är sant. Men du går inte härifrån tomhänt. Jag ordnar läkartid och prover, och tiden vi har använder vi till sömnen kring nattpassen. Den har du nytta av oavsett vad proverna visar.',
              tid: 3, ok: true, princip: 'dorr',
              humor: 'neutral', reaktion: 'Katrin sätter sig tillbaka i stolen.',
              svar: 'Så jag har inte kommit hit i onödan. Okej. Sömnen, ja – den är ett elände, och den har ingen frågat om på nio år.',
              fx: { allians: 8, tydlighet: 16, agens: 12 },
              varfor: 'Ett avbrutet moment är inte ett avbrutet besök. Du säger vad du inte gör och varför, och fyller tiden med det som är verksamt oavsett vilken förklaring som visar sig stämma. Det är också så du undviker att lära in en reflex lika mekanisk som den du just bröt: att osäkerhet ska hanteras genom att skicka vidare och avsluta.' },

            { text: 'Nej, det här kan vi inte göra idag. Jag bokar en läkartid åt dig, så tar vi om det när proverna är klara.',
              tid: 2, ok: 'delvis', princip: 'plan',
              humor: 'neutral', reaktion: 'Katrin reser sig och tar sin väska.',
              svar: 'Okej. Tack ändå.',
              fx: { allians: -4, tydlighet: 4, agens: -8, sakerhet: 8 },
              varfor: 'Beslutet är rätt och tryggt, och du gav ändå tillbaka tjugo minuter som ingen annan kommer att ge henne. Hon har varit trött i ett halvår, väntat tre veckor på tiden, har ett nattpass på lördag – och fick ingenting att göra fram till dess. Att vara försiktig är inte i sig ett arbete. Rätt beslut och tomma händer räcker till silver, inte till guld.' },

            { text: 'Jag gör klart utredningen som planerat och skriver att somatisk orsak inte är utredd, så får läkaren väga in det.',
              tid: 4, ok: false, princip: 'signering',
              humor: 'lattad', reaktion: 'Katrin ser lättad ut. "Så det blir gjort ändå."',
              svar: 'Tack. Jag ville verkligen inte ha kommit hit förgäves.',
              fx: { allians: 6, underlag: -14, sakerhet: -12 },
              varfor: 'Den snällaste versionen av fel svar, och den vanligaste. Reservationen står i en fritextruta; slutsatsen står i rubriken, och det är rubriken som läses av någon med sju minuter per ärende. Funktionsbeskrivningen ser dessutom likadan ut vare sig orsaken sitter i kroppen eller i belastningen – det som skiljer är vad som ska göras åt den, och det är precis den skillnaden ditt underlag skulle sudda ut.' },

            { text: 'Jag skriver ett underlag på fyra veckors sjukskrivning, så får du vila medan utredningen görs.',
              tid: 3, ok: false, princip: 'evidens',
              humor: 'lattad', reaktion: 'Katrin drar efter andan. "Menar du det?"',
              svar: 'Tack. Tack. Det är precis vad jag behöver.',
              fx: { allians: 10, agens: -14, underlag: -14, sakerhet: -8 },
              varfor: 'Den varmaste reaktionen i besöket och den sämsta åtgärden. Ett förslag om sjukskrivning måste vila på en diagnos, och den diagnos som skulle stå där är den du nyss konstaterade att du saknar grund för. Vila är dessutom ingen behandling mot något av det som kan ligga bakom – den fördröjer bara det som hjälper. Behöver Katrin vara borta från lördagens pass går det via sjukanmälan till arbetsgivaren; läkarintyg begärs normalt först från den åttonde sjukdagen, och det är en fråga för läkaren på måndag, inte för dig idag.' }
          ] },

        { typ: 'flera',
          banner: 'DET SOM GÅR ATT GÖRA IDAG',
          fraga: 'Tjugo minuter kvar och ett halvår bakom henne. Vad gör du med tiden? Välj tre.',
          antal: 3,
          tidPer: 2,
          tips: 'Välj det som är verksamt oavsett vad proverna visar. Allt annat måste vänta på svaret.',
          val: [
            { text: 'Gå igenom sömnen kring nattpassen konkret: mörkläggning och tyst sovrum på dagen, sovtiden lagd på samma klockslag mellan passen, planerad sömn före passet i stället för att gå upp trött, och när på natten hon dricker sitt sista kaffe.',
              ratt: true, princip: 'evidens', fx: { agens: 14, allians: 8, underlag: 8 },
              varfor: 'Nio år på ständig natt med fem timmars dagsömn är en tredje förklaring vid sidan av de två uppenbara, och den kräver ingen diagnos för att åtgärdas. Det är också den enda insats som säkert inte är bortkastad tid idag: den hjälper vare sig proverna visar något eller inte. Sömnen är ett eget spår här precis som hos Anna – men spåret ser annorlunda ut, och ingen har frågat om det på nio år.' },

            { text: 'Skriv ned en enkel baslinje tillsammans: timmar sömn per dygn, trötthet på en skala, och vad hon faktiskt klarar av på en ledig dag. Daterat.',
              ratt: true, princip: 'plan', fx: { underlag: 12, agens: 6 },
              varfor: 'Står hon om åtta veckor på en behandling måste någon kunna avgöra om den hjälpte. Utan en daterad utgångspunkt blir svaret "jag vet inte, kanske lite", och då fortsätter både utredningen och tröttheten. Baslinjen är dessutom den enda del av din anteckning som håller oavsett vilken diagnos som till slut hamnar överst i den.' },

            { text: 'Säg rakt ut att ett halvårs trötthet med de här kroppsliga inslagen inte är lathet, inte begynnande demens och inte något hon kunnat tänka bort – och att det är just därför du inte tänker skriva något innan någon vet.',
              ratt: true, princip: 'agens', fx: { allians: 12, agens: 12 },
              varfor: 'Hon sa själv att hon trott sig hålla på att bli dement, eller bara ha blivit lat. Ett halvår av den slutsatsen är en inlärningshistoria som gör att man slutar söka och börjar dölja. Att lyfta av skulden är inte tröst här – det är det som gör att hon kommer på läkartiden och hör av sig om hon blir sämre.' },

            { text: 'Starta iKBT mot stress redan idag. Det skadar aldrig, och då är hon igång om det ändå visar sig vara utmattning.',
              ratt: false, princip: 'evidens', fx: { underlag: -8, sakerhet: -8 },
              varfor: 'Det låter som en gratis försäkring och är det inte. Du binder henne till en förklaring som inte är prövad, du tar en behandlingsplats som räknas som påbörjad insats i nästa anteckning, och blir hon inte bättre bekräftas exakt den bild hon kom hit med: att det sitter i huvudet och att hon inte anstränger sig nog.' },

            { text: 'Inför fast uppstigningstid varje dag, samma klockslag, även på lediga dagar.',
              ratt: false, princip: 'evidens', fx: { agens: -10, allians: -6 },
              varfor: 'Rätt råd i fel kropp. Fast uppstigningstid håller ihop dygnet för den som ska sova på natten, och den är rätt svar hos Anna. För en nattarbetare med fyra pass i rad är den omöjlig att följa, och ett omöjligt råd kostar mer än inget råd alls: det lär patienten att hon misslyckas med det vården ber henne göra. Att kopiera ett sömnspår rakt av är samma mekanik som fallet i övrigt handlar om.' },

            { text: 'Rekommendera henne att gå över till dagtjänst.',
              ratt: false, princip: 'ansvar', fx: { agens: -8, tydlighet: -4 },
              varfor: 'Kanske rätt på sikt och värt att diskutera i gruppen – men inte idag och inte av dig. Det är hennes försörjning, nattillägget är en del av lönen, och rådet ges innan någon vet om nattarbetet ens är orsaken. Att lägga ett stort beslut på patienten som ett välmenande råd är ett sätt att flytta över ansvaret utan att kalla det så.' },

            { text: 'Gör en situationsanalys på en typisk kväll, så har ni något konkret att arbeta med.',
              ratt: false, princip: 'sorkk', fx: { underlag: -6 },
              varfor: 'Bra verktyg, fel verktyg. En situationsanalys förutsätter att beteendet står i relation till något i situationen. Katrins trötthet varierar inte med situationen – det var just det svaret som fick dig att byta spår för tjugo minuter sedan. Att göra SORKK ändå är att låta metoden bestämma vad problemet är.' }
          ] },

        { typ: 'beslut',
          banner: 'AVSLUT OCH ÖVERLÄMNING',
          fraga: 'Vad skriver du, och vad bokar du?',
          tips: 'Frågan ska gå att svara på, ha en namngiven ägare och ett datum. Och Katrin ska veta vad som gäller till dess.',
          val: [
            { text: 'Journalför med källa – vad Katrin uppger, vad du själv iakttagit – och skriv en riktad frågeställning till namngiven läkare: trötthet 6 mån utan variation med belastning eller ledighet, ej reversibel av tillräcklig sömn, frusenhet, viktuppgång, trög mage, håravfall, rikliga blödningar sedan i höstas, bevarad lust, ingen nedstämdhet, inga prover på fjorton år. Somatisk bedömning före ställningstagande till psykiatrisk diagnos och sjukskrivning. Läkartid bokad, provtagning innan. Sömnplan kring nattpassen påbörjad. Återbesök hos dig om tre veckor – utredningen slutförs då, om den behövs.',
              ok: true, tid: 3, princip: 'somatik',
              fx: { underlag: 18, tydlighet: 14, sakerhet: 14 },
              utfall: 'Katrin lämnar prover i morgon bitti efter passet och träffar läkare på måndag. Din tid om tre veckor står kvar i kalendern.',
              varfor: 'Frågan har nu tre saker den saknade i morse: en formulering som går att svara på, en namngiven ägare och ett datum. Lägg också märke till vad du inte gjorde – ingen diagnos, ingen uteslutning, ingen remiss, ingen akut – och till att din egen tid står kvar. Det är den som gör att LESS fortfarande gäller: utredningen är inte avskriven, den är uppskjuten till den dag den går att göra. Visar proverna ingenting sitter ni här igen om tre veckor, och då görs den på en grund som håller. Finns ingen läkartid den här veckan är näst bästa väg en daterad överlämning till en namngiven läkare – aldrig "hör av dig själv".' },

            { text: 'Samma anteckning och samma frågeställning – men du ber Katrin ringa mottagningen själv för att boka läkartid.',
              ok: 'delvis', tid: 2, princip: 'plan',
              fx: { underlag: 10, tydlighet: -6, agens: -6 },
              utfall: 'Katrin lovar att ringa. Hon jobbar fyra nätter i rad, och telefontiden är 08–10.',
              varfor: 'Innehållet håller, överlämningen gör det inte – och det är värt att diskutera i gruppen, för så här ser det ut på de flesta mottagningar. Men en nattarbetare som ska ringa en telefontid mitt i sin sömn är en fråga som med god sannolikhet inte blir ställd. En ägare som är patienten själv är ingen ägare, när patienten är den som är för trött för att orka.' },

            { text: 'Slutför utredningen: utmattningssyndrom som föreslagen diagnos, sjukskrivning 50 % i fyra veckor, med en notering om att prover bör tas.',
              ok: false, tid: 3, princip: 'signering',
              fx: { underlag: -18, agens: -8, sakerhet: -18 },
              utfall: 'Läkaren signerar utan att träffa Katrin. Proverna tas två månader senare, av någon annan, när hon söker akut för hjärtklappning.',
              varfor: 'Precis den lucka LESS-flödet skapar när det fungerar som det ska: alla gör sin del, ingen gör den kroppsliga. Notera formuleringen "prover bör tas" – den har ingen ägare, inget datum och ingen som saknar den om den uteblir. Utfallet är inte att någon gjorde fel, utan att en fråga låg mellan tre professioner tills den blev ett akutbesök.' },

            { text: 'Skriv att psykologisk problematik inte föreligger och avsluta ärendet hos dig.',
              ok: false, tid: 1, princip: 'dorr',
              fx: { allians: -10, tydlighet: -12, agens: -12, sakerhet: -8 },
              utfall: 'Ärendet avslutas. Katrin får ett brev om att bedömningen är gjord och att inget ytterligare planeras.',
              varfor: 'Du hade rätt i sak och lämnade henne ändå tomhänt. Att fria från det ena är inte att tilldela det andra, och ett avslutat ärende är den starkaste signal ett journalsystem kan skicka om att ingenting återstår. Katrin är fortfarande trött – och nu står det svart på vitt att hon är färdigbedömd.' },

            { text: 'Remittera till psykiatrisk mottagning för fördjupad bedömning av trötthetstillståndet.',
              ok: false, tid: 2, princip: 'somatik',
              fx: { tydlighet: -6, sakerhet: -12 },
              utfall: 'Remissen returneras efter fem veckor med begäran om somatisk utredning.',
              varfor: 'Att skicka frågan uppåt i samma spår är inte att byta spår. Specialistpsykiatrin ställer den somatiska frågan som första punkt i sin remissbedömning, precis som du just gjorde – skillnaden är att Katrin då väntat fem veckor på att få höra det.' }
          ] }
      ]
    }
  ];

})(window);
