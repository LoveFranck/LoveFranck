/* cases-mote.js – Reflektionsmötet. Spelets sista scen.

   ⚠ EJ KLINISKT GRANSKAT – pedagogiskt utkast, ska granskas av verksamheten.

   Scenen är ograderad med flit. Allt annat i spelet mäter något; det här
   gör det inte. Ett samtal om egna känslor som får GULD lär ut att det
   finns ett rätt sätt att känna, och det är motsatsen till poängen.

   MEDICINSK GENOMGÅNG (läkarrådgivare, 2026-09-10): säkerhetsspärren och
   samtliga försäkringsmedicinska utsagor är genomgångna. Grad- och
   längdangivelser kommer från Socialstyrelsens försäkringsmedicinska
   beslutsstöd och ska kontrolleras mot gällande lydelse. Påståenden om vad
   sjukskrivning leder till är medvetet hedgade – underlaget är svagt åt båda
   hållen. Flaggan ovan står kvar.

   NOTERING TILL UTVECKLAREN: fallet ligger under LESS.fall.mote, men bär
   roll: 'psykolog' eftersom motorn behöver ett rollvärde. Om filen kopplas
   in så att LESS.fall.psykolog också når det, se upp med drillurvalet:
   nastaDrill() rankar efter principträffar minus antal spelningar, och
   ograderade fall räknas aldrig som spelade (drillSpelad anropas inte).
   Ett ograderat fall med fyllda principer skulle därför kunna lägga sig
   först i psykologens övningsläge varje gång. Håll det ur drillistan, eller
   inför en flagga i motorn för fall som bara hör hemma i kampanjen. */

(function (global) {
  'use strict';
  var LESS = global.LESS;

  LESS.fall.mote = [

    /* ================================================================
       REFLEKTIONSMÖTET – efter kampanjen. Sex professioner, inget betyg.

       Tre saker bär scenen:
         1. Samma SORKK som görs på patienten, riktad mot vårdgivaren.
         2. Symmetrin: ett nej av obehag analyseras likadant som ett ja.
         3. Spärren: ingenting här säger att sjukskrivning i regel är fel.
       ================================================================ */
    {
      id: 'mote-harbargering',
      roll: 'psykolog',
      titel: 'Reflektionsmöte, fredag 15.40',
      undertitel: 'Personalrummet. Ingen patient, ingen journal, inget betyg.',
      lage: 'mote',
      minuter: 60,
      ograderad: true,
      svarighet: 1,
      /* Bara de principer som faktiskt är taggade på en beat står här.
         Salutogen kommunikation, sjukdomskravet och sjukskrivningens
         biverkningar berörs i texten men prövas inte som val, och ska
         därför inte påstås vara tränade. */
      principer: ['sorkk', 'dorr', 'ansvar', 'skriftgrans', 'beslutsstod', 'individuell'],

      journal: [
        ['Dagordning', 'Ett ärende var. Det som satt kvar i kroppen, inte det som gick fel.'],
        ['Form', 'Ingen dokumentation. Inga namn på patienter som inte behöver nämnas.'],
        ['Tid', 'Femton minuter var det tänkt. Det blir alltid mer.'],
        ['Ordet på tavlan', 'HÄRBÄRGERA. Se handboken, H.']
      ],

      intro: [
        'Fredag 15.40. Personalrummet. Kaffet är från klockan två och smakar därefter.',
        'Ove har satt upp ett papper på whiteboarden med ett enda ord på: HÄRBÄRGERA.',
        'Sex stolar, sex professioner. Ingen patient. Ingen journal som ska bli klar.',
        'Ove: den här kvarten handlar inte om patienterna. Den handlar om vad som händer i er när ni fattar besluten – när ni säger ja för att slippa, och när ni säger nej för att slippa.',
        'Ingenting av det här betygsätts. Det finns inget guld att hämta i ett samtal om egna känslor.'
      ],

      beats: [

        /* ---------- 1. Var och en lägger upp sin dragning ---------- */

        { typ: 'replik', vem: 'ssk', humor: 'trott',
          text: 'Jag börjar, för jag har tänkt på det hela veckan. I onsdags hade jag tjugo ärenden i kön och en patient som inte släppte taget. Fjärde meddelandet på sex minuter.' },

        { typ: 'replik', vem: 'ssk', humor: 'trott',
          text: 'Och jag märkte att jag satt och formulerade en mening som gav henne det hon ville ha. Inte för att jag hade bedömt något. För att det skulle ta slut.' },

        { typ: 'replik', vem: 'arbetsterapeut', humor: 'neutral',
          text: 'Min ser inte alls likadan ut. Jag hade ingen kö och jag var inte trängd. Jag satt mitt emot en människa som jag tyckte oerhört synd om, och jag ville ge henne något. Sjukskrivningen var det enda jag hade som gick att ge på fem minuter.' },

        { typ: 'replik', vem: 'lakare', humor: 'spand',
          text: 'Och min ville jag inte ge någonting alls. Hon hade läst på, hon hade en utskrift med sig, och hon sa att jag ju inte är specialist på det här. Jag hörde själv hur snabbt mitt nej kom.' },

        { typ: 'replik', vem: 'psykolog', humor: 'oppen',
          text: 'Då gör vi det vi gör med patienterna. Vi tar ett enda tillfälle och går igenom det led för led. Samma verktyg – bara vänt åt andra hållet, mot oss själva.' },

        { typ: 'replik', vem: 'psykolog', humor: 'neutral',
          text: 'Vi börjar med onsdagen i chatten. Och kom ihåg vad som är vad: det som händer inuti dig i situationen är ett led, och det som gjorde dig sårbar innan du satte dig är ett annat.' },

        /* ---------- 2. SORKK på vårdgivaren: ett JA av obehag ---------- */

        { typ: 'kedja',
          banner: 'SORKK · SJUKSKÖTERSKAN',
          fraga: 'Gör situationsanalysen på sjuksköterskans onsdag.',
          tips: 'Exakt samma led som på en patient. S är det yttre läget. O är tanke, kropp och impuls – var för sig. R är det utförda. Kön, hungern och tre chattpass i rad är etablerande omständigheter och hör inte hemma i O.',
          tidFel: 1,
          princip: 'sorkk',
          lank: [

            { etikett: 'S – SITUATION',
              fraga: 'Vad är situationen?',
              val: [
                { text: 'Onsdag 15.42. Chattfönstret öppet. Patienten har skrivit fjärde gången på sex minuter: "kan du inte bara ordna det".', ratt: true },
                { text: 'Hon har suttit i chatten sedan klockan åtta och inte ätit lunch.',
                  varfor: 'En etablerande omständighet. Den skapar inte beteendet, den gör det mycket mer sannolikt – och den hör hemma i bakgrunden, inte i något av leden.' },
                { text: 'Tanken "det här kommer att ta tjugo minuter till".',
                  varfor: 'Tankedelen av organismfaktorerna.' },
                { text: 'Hon skriver att patienten får en läkartid på fredag och stänger ärendet.',
                  varfor: 'Responsen.' },
                { text: 'Trycket över bröstet släpper när hon tryckt skicka.',
                  varfor: 'Den kortsiktiga konsekvensen.' }
              ],
              forklaring: 'Situationen ska gå att filma. Kön och den uteblivna lunchen syns inte i bild.' },

            { etikett: 'O – TANKE',
              fraga: 'Vilken tanke dyker upp i situationen?',
              val: [
                { text: '"Det här blir en lång diskussion som jag ändå förlorar."', ratt: true },
                { text: 'Fjärde meddelandet på sex minuter.',
                  varfor: 'Situationen.' },
                { text: 'Tryck över bröstet och en brådska i händerna.',
                  varfor: 'Kroppsdelen av organismfaktorerna – nästa led.' },
                { text: 'Lusten att bara skriva klart och skicka.',
                  varfor: 'Beteendeimpulsen – ledet efter det.' },
                { text: 'Det är hennes tredje chattpass den här veckan.',
                  varfor: 'Etablerande omständighet. Den förklarar varför tanken kommer så fort, men den är inte tanken.' }
              ] },

            { etikett: 'O – KROPPSLIG FÖRNIMMELSE',
              fraga: 'Vad känner hon i kroppen?',
              val: [
                { text: 'Tryck över bröstet, värme i ansiktet, en brådska i händerna.', ratt: true },
                { text: '"Det här blir en lång diskussion som jag ändå förlorar."',
                  varfor: 'Tanken.' },
                { text: 'Dragningen att få det att ta slut.',
                  varfor: 'Beteendeimpulsen.' },
                { text: 'Hon har inte ätit sedan frukost.',
                  varfor: 'Etablerande omständighet. Den sänker tröskeln för allt annat, men den uppstår inte i situationen.' },
                { text: 'Hon skriver att patienten får en läkartid på fredag.',
                  varfor: 'Responsen.' }
              ] },

            { etikett: 'O – BETEENDEIMPULS',
              fraga: 'Vad drar hon sig till att göra?',
              val: [
                { text: 'Dragningen att skriva den mening som får samtalet att ta slut.', ratt: true },
                { text: 'Tryck över bröstet och värme i ansiktet.',
                  varfor: 'Den kroppsliga förnimmelsen.' },
                { text: '"Det här blir en lång diskussion som jag ändå förlorar."',
                  varfor: 'Tanken.' },
                { text: 'Hon skriver att patienten får en läkartid på fredag och stänger ärendet.',
                  varfor: 'Det är vad hon faktiskt gör – responsen. Impulsen är dragningen strax innan.' },
                { text: 'Axlarna sjunker när ärendet försvinner ur listan.',
                  varfor: 'Den kortsiktiga konsekvensen.' }
              ],
              forklaring: 'Impulsen är en dragning, inte en handling. Att den får ett eget led är det som gör att man kan se sekunden där något annat var möjligt – också på vår sida av skärmen.' },

            { etikett: 'R – RESPONS',
              fraga: 'Vad gör hon?',
              val: [
                { text: 'Hon skriver att patienten får en läkartid på fredag för sjukskrivningsfrågan, och stänger ärendet.', ratt: true },
                { text: 'Dragningen att få det att ta slut.',
                  varfor: 'Impulsen. Innehållet är detsamma, men responsen är det utförda beteendet.' },
                { text: '"Det är ju ändå läkaren som ska bedöma sjukskrivning."',
                  varfor: 'En tanke – och lägg märke till att den kom efter beslutet, som en motivering till det. Regelstyrt tänkande i efterhand känns igen på just den ordningen.' },
                { text: 'Patienten skriver för fjärde gången.',
                  varfor: 'Situationen.' },
                { text: 'Obehaget släpper.',
                  varfor: 'Den kortsiktiga konsekvensen.' }
              ],
              forklaring: 'Lägg märke till formen. Responsen var inte att skriva ett intyg – det kan hon inte. Undvikandet tog formen av en vidarebefordran. Obehaget löstes precis lika effektivt, och frågan blev någon annans.' },

            { etikett: 'K – KORT SIKT',
              fraga: 'Vad händer direkt efteråt?',
              val: [
                { text: 'Inom några sekunder: obehaget släpper, ärendet försvinner ur listan, hon hinner med nästa.', ratt: true },
                { text: 'Patienten lär sig att fyra meddelanden är vägen till en läkartid.',
                  varfor: 'Det byggs upp över tid – lång sikt.' },
                { text: 'Hon skriver läkartiden och stänger ärendet.',
                  varfor: 'Responsen, inte dess konsekvens.' },
                { text: 'Dragningen att få det att ta slut.',
                  varfor: 'Organismfaktor. Den kommer före beteendet, inte efter.' },
                { text: 'Kön var lång redan innan hon loggade in.',
                  varfor: 'Etablerande omständighet.' }
              ],
              forklaring: 'Lättnaden kommer inom sekunder och den kommer varje gång. Det är negativ förstärkning, och det är samma mekanism vi beskriver för patienterna: beteendet som tar bort obehag är det som upprepas.' },

            { etikett: 'K – LÅNG SIKT',
              fraga: 'Vad händer på veckors och månaders sikt?',
              val: [
                { text: 'Läkaren får frågan tre dagar senare utan en rad om funktion och får börja från noll, med en patient som redan fått höra att det är på gång – och sjuksköterskan har lärt sig att svåra chattar löser sig om man ger med sig. Nästa gång kommer det snabbare.', ratt: true },
                { text: 'Obehaget släpper när ärendet är skickat.',
                  varfor: 'Den kortsiktiga konsekvensen – och just skillnaden i tid är hela poängen.' },
                { text: 'Trycket över bröstet.',
                  varfor: 'Kroppslig förnimmelse.' },
                { text: 'Patienten skriver "kan du inte bara ordna det".',
                  varfor: 'Situationen.' },
                { text: 'Hon hade inte ätit lunch.',
                  varfor: 'Etablerande omständighet.' }
              ] }
          ],
          forklaring: 'Två saker att ta med sig. Det första: analysen är identisk med den vi gör på en patient. Kön, hungern och tre pass i rad är etablerande omständigheter; det som händer inuti i situationen är tanken, kroppen och impulsen. Det andra: den konsekvens som styr är den som kommer först. Lättnaden tar sekunder, priset betalas av någon annan i nästa vecka. Och ett nej blir inte automatiskt bättre – det blir det bara om det följs av ett begripligt skäl, av vad patienten faktiskt kan göra och av något som startar den här veckan. Ett nej utan det ledet är inte ökad förmåga. Det är bara ett nej.' },

        /* ---------- 3. Chefens bild, i sjuksköterskans mun ---------- */

        { typ: 'replik', vem: 'ssk', humor: 'neutral',
          text: 'Min gamla handledare hade ett ord för den sortens ja. Han sa att det är som att kissa på sig. Det är skönt och varmt en liten stund, och sen sitter du i det, och då är det kallare än det var innan.' },

        { typ: 'replik', vem: 'ssk', humor: 'trott',
          text: 'Jag tyckte att det var onödigt grovt när jag hörde det första gången. Nu tänker jag på det varje gång jag känner axlarna sjunka av lättnad mitt i ett samtal.' },

        /* ---------- 4. Vad som skulle gjorts i stället ----------
           Nejet ensamt duger inte. Det ledet ska synas i ett val, inte
           bara påstås i en förklaring.                                  */

        { typ: 'val',
          vem: 'psykolog',
          fraga: 'Spola tillbaka till sekunden före. Vad skulle hon gjort i stället?',
          tips: 'Leta efter det alternativ som både stänger dörren och öppnar en annan – och som går att göra i onsdags, inte i teorin.',
          val: [
            { text: 'Skrivit att hon inte kan lova en sjukskrivning, sagt varför på ett begripligt sätt, frågat vad som fortfarande fungerar – och bokat tiden hos psykologen i nästa vecka innan hon stänger ärendet.',
              tid: 3, ok: true, princip: 'dorr',
              reaktion: 'Sjuksköterskan nickar långsamt.',
              varfor: 'Nejet står kvar, men det står inte ensamt. Skälet gör det begripligt, frågan om vad som fungerar är den salutogena delen – samtalet handlar om vad hon kan, inte bara om vad hon inte får – och tiden gör att något faktiskt börjar. Det är kombinationen som gör att den långsiktiga konsekvensen kan bli en annan. Nejet i sig gör ingenting.' },
            { text: 'Gett henne läkartiden. Det är ju ändå läkaren som bedömer sjukskrivning.',
              tid: 1, ok: false, princip: 'ansvar',
              reaktion: 'Någon skrattar till. Det blir tyst igen.',
              varfor: 'Sant på papperet, och det är just därför det fungerar så bra som undvikande: det finns alltid en korrekt formulering att gömma sig bakom. Skillnaden mellan en välgrundad hänvisning och en flykt syns inte i journalen. Den syns i vad som hände i kroppen strax innan.',
              extra: { typ: 'replik', vem: 'lakare', humor: 'neutral',
                       text: 'Och jag är den som får ärendet. Utan en enda rad om funktion, och med en patient som redan har fått höra att det är fixat.' } },
            { text: 'Hållit fast vid nejet och avslutat ärendet.',
              tid: 1, ok: false, princip: 'dorr',
              varfor: 'Det tar bort ett ja som inte var motiverat och sätter ingenting i stället. Patienten söker igen, och då har ingenting hänt under tiden – utom att hon har lärt sig att det inte går att fråga här. Att stänga en dörr utan att öppna en annan är inte en bedömning, det är bara ett nej.' },
            { text: 'Ringt upp i stället för att skriva.',
              tid: 2, ok: 'delvis', princip: 'skriftgrans',
              varfor: 'Ofta rätt, och skriften bär dåligt i just den här sortens samtal – du hör ingen tvekan och du kan inte ställa en följdfråga snabbare än patienten hinner stänga fönstret. Men det avgör inte frågan. Det som ska sägas måste sägas ändå, och impulsen finns kvar i telefonen. Värt att diskutera i gruppen: hur ofta byter ni faktiskt kanal?' }
          ] },

        /* ---------- 5. Symmetrin, del ett: regelstyrt nej ---------- */

        { typ: 'replik', vem: 'fysioterapeut', humor: 'neutral',
          text: 'Jag vill ta min, för den går åt andra hållet. Min patient hade fått nej av två kollegor innan han kom till mig. Han satte sig och sa: "du kommer väl också säga nej".' },

        { typ: 'replik', vem: 'fysioterapeut', humor: 'sluten',
          text: 'Tanken jag fick var "han försöker sig på mig". Kroppsligt blev jag stel i nacken. Impulsen var att visa att jag inte är någon man pressar. Och det jag faktiskt gjorde var att dra hela stycket om att aktivitet är behandling innan jag hade ställt en enda fråga om vad han gör om dagarna.' },

        { typ: 'replik', vem: 'fysioterapeut', humor: 'sluten',
          text: 'På fem minuter kände jag mig stringent. På fem veckor visade det sig att han inte klarar att stå upp ett helt pass. Det hade jag kunnat veta första gången. Jag hade en regel i huvudet i stället för en patient framför mig.' },

        { typ: 'replik', vem: 'psykolog', humor: 'oppen',
          text: 'Det där är värt att stanna vid. Ett nej som kommer för att jag ska slippa känna mig lurad, eller för att jag ska få vara den som håller i modellen, är precis lika obehagsstyrt som ett ja som kommer för att någon ska sluta vara ledsen på mig.' },

        { typ: 'replik', vem: 'psykolog', humor: 'neutral',
          text: 'Så vi gör läkarens också. Den är den vi minst vill göra.' },

        /* ---------- 6. SORKK på vårdgivaren: ett NEJ av obehag ----------
           Utan den här kedjan blir scenen ett tillstånd att neka.        */

        { typ: 'kedja',
          banner: 'SORKK · LÄKAREN',
          fraga: 'Gör situationsanalysen på läkarens tisdag. Den här gången är beteendet ett nej.',
          tips: 'Samma led, samma ordning. Lägg märke till att ingenting i analysen ändras av att beteendet är ett nej i stället för ett ja.',
          tidFel: 1,
          princip: 'sorkk',
          lank: [

            { etikett: 'S – SITUATION',
              fraga: 'Vad är situationen?',
              val: [
                { text: 'Tisdag 10.20. Patienten lägger en utskrift på bordet och säger: "du är ju inte specialist på det här".', ratt: true },
                { text: 'Läkaren är inhyrd, tredje veckan, och känner ingen på mottagningen.',
                  varfor: 'Etablerande omständighet. Den gör allt annat mer sannolikt, men den händer inte i rummet.' },
                { text: 'Tanken "hon försöker köra över mig".',
                  varfor: 'Tankedelen av organismfaktorerna.' },
                { text: 'Ett snabbt nej med hänvisning till beslutsstödet.',
                  varfor: 'Responsen.' },
                { text: 'Käkarna släpper när patienten tystnar.',
                  varfor: 'Den kortsiktiga konsekvensen.' }
              ] },

            { etikett: 'O – TANKE',
              fraga: 'Vilken tanke dyker upp i situationen?',
              val: [
                { text: '"Hon försöker köra över mig. Ger jag efter nu är jag någon man kan pressa."', ratt: true },
                { text: 'Utskriften läggs på bordet.',
                  varfor: 'Situationen.' },
                { text: 'Hetta i ansiktet och spända käkar.',
                  varfor: 'Kroppsdelen av organismfaktorerna.' },
                { text: 'Lusten att avfärda utskriften och gå vidare.',
                  varfor: 'Beteendeimpulsen.' },
                { text: 'Hon fick en avvikelse på ett intyg i våras och har tänkt på den sedan dess.',
                  varfor: 'Inlärningshistoria, alltså en etablerande omständighet. Den förklarar varför tanken är så laddad, men den är inte tanken.' }
              ] },

            { etikett: 'O – KROPPSLIG FÖRNIMMELSE',
              fraga: 'Vad känner hon i kroppen?',
              val: [
                { text: 'Hetta i ansiktet, spända käkar, en stelhet över axlarna.', ratt: true },
                { text: '"Ger jag efter nu är jag någon man kan pressa."',
                  varfor: 'Tanken.' },
                { text: 'Lusten att avfärda utskriften.',
                  varfor: 'Beteendeimpulsen.' },
                { text: 'Tjugotvå bokade den dagen, och hon ligger tjugo minuter efter redan på förmiddagen.',
                  varfor: 'Etablerande omständighet.' },
                { text: 'Hon säger nej och går vidare i journalen.',
                  varfor: 'Responsen.' }
              ] },

            { etikett: 'O – BETEENDEIMPULS',
              fraga: 'Vad drar hon sig till att göra?',
              val: [
                { text: 'Dragningen att avfärda utskriften och få tillbaka rummet.', ratt: true },
                { text: 'Hetta i ansiktet och spända käkar.',
                  varfor: 'Den kroppsliga förnimmelsen.' },
                { text: '"Hon försöker köra över mig."',
                  varfor: 'Tanken.' },
                { text: 'Hon säger nej med hänvisning till beslutsstödet och går vidare.',
                  varfor: 'Det utförda beteendet – responsen. Impulsen är dragningen strax innan.' },
                { text: 'Käkarna släpper.',
                  varfor: 'Den kortsiktiga konsekvensen.' }
              ],
              forklaring: 'Också här är impulsen en dragning och inte en handling. Att den syns är det som gör nästa steg till ett val i stället för till den enda lösningen.' },

            { etikett: 'R – RESPONS',
              fraga: 'Vad gör hon?',
              val: [
                { text: 'Hon säger nej med hänvisning till beslutsstödet och går vidare – utan att ha gått igenom vad patienten faktiskt inte klarar i sitt arbete.', ratt: true },
                { text: 'Dragningen att avfärda utskriften.',
                  varfor: 'Impulsen. Innehållet är detsamma, men responsen är det utförda beteendet.' },
                { text: 'Utskriften på bordet.',
                  varfor: 'Situationen.' },
                { text: '"Hon är nog ute efter något."',
                  varfor: 'En tanke. Att den låter som ett skäl gör den inte till ett beteende.' },
                { text: 'Rummet blir hennes igen.',
                  varfor: 'Den kortsiktiga konsekvensen.' }
              ],
              forklaring: 'Lägg märke till vad som saknas i responsen. Inte nejet – utan bedömningen. Ett nej kan vara helt riktigt i sak och ändå vara fattat på fel grund. Lägg också märke till vad hänvisningen till beslutsstödet gör här. Beslutsstödet säger något om hur länge en viss funktionsnedsättning brukar sätta ned arbetsförmågan. Det säger ingenting om huruvida just den här patienten har en nedsättning. Att använda det som skäl för att slippa ta reda på det är att låta ett vägledande dokument fatta ett beslut som det inte kan fatta.' },

            { etikett: 'K – KORT SIKT',
              fraga: 'Vad händer direkt efteråt?',
              val: [
                { text: 'Inom en minut: rummet är hennes igen, obehaget släpper, hon ligger i fas med schemat.', ratt: true },
                { text: 'Patienten söker igen tre veckor senare, hos någon annan.',
                  varfor: 'Lång sikt.' },
                { text: 'Hon säger nej och går vidare.',
                  varfor: 'Responsen, inte dess konsekvens.' },
                { text: 'Dragningen att avfärda utskriften.',
                  varfor: 'Organismfaktor. Den kommer före beteendet.' },
                { text: 'Hon är inhyrd och känner ingen på mottagningen.',
                  varfor: 'Etablerande omständighet.' }
              ] },

            { etikett: 'K – LÅNG SIKT',
              fraga: 'Vad händer på veckors och månaders sikt?',
              val: [
                { text: 'Patienten söker igen tre veckor senare, sämre, hos någon annan – och får då fyra veckor utan plan. Och läkaren har lärt sig att ett snabbt nej tar bort obehag, vilket gör nästa snabba nej mer sannolikt.', ratt: true },
                { text: 'Käkarna släpper och hon kommer i fas med schemat.',
                  varfor: 'Den kortsiktiga konsekvensen. Skillnaden i tid är poängen.' },
                { text: 'Hetta i ansiktet.',
                  varfor: 'Kroppslig förnimmelse.' },
                { text: 'Utskriften ligger kvar på bordet.',
                  varfor: 'Situationen.' },
                { text: 'Hon låg tjugo minuter efter schemat redan innan hon ropade in patienten.',
                  varfor: 'Etablerande omständighet.' }
              ],
              forklaring: 'Och det obekväma: när ärendet till slut utreddes fanns det en aktivitetsbegränsning. Sjukskrivning kunde mycket väl ha varit rätt vård från början. Nejet var inte fel för att nej är fel. Det var fel för att det inte var en bedömning.' }
          ],
          forklaring: 'Kedjan är identisk med sjuksköterskans. Samma led, samma mekanism, motsatt beteende. Ett nej kan vara negativt förstärkt precis som ett ja: det tar bort ett obehag omedelbart, och därför upprepas det. Det finns en praktisk skillnad, och den är obehaglig – ett ja lämnar spår i ett intyg som någon kan granska, medan ett nej ofta inte lämnar någonting alls. Det är ett av skälen till att motiveringen ska journalföras även när du inte sjukskriver, och till att beslutet ska gå att ompröva.' },

        /* ---------- 6b. Vad som skulle gjorts i stället – nejets version ----------
           Jaet fick en reparation i beat 4. Utan motsvarande beat för nejet
           lär scenen ut att ett ja behöver repareras och ett nej inte gör det.
           Notera att det rätta alternativet inte säger vad utfallet blir.     */

        { typ: 'val',
          vem: 'psykolog',
          fraga: 'Samma sak här. Spola tillbaka till sekunden efter att utskriften landat på bordet. Vad skulle hon gjort i stället?',
          tips: 'Leta efter det alternativ som gör bedömningen. Vad bedömningen sedan landar i är inte givet på förhand – och det är hela skillnaden.',
          val: [
            { text: 'Tagit emot utskriften, sagt att hon inte är specialist men att det är hon som ska bedöma arbetsförmågan – och gått igenom vad patienten faktiskt inte klarar i sina arbetsuppgifter, innan hon säger något alls om sjukskrivning.',
              tid: 3, ok: true, princip: 'beslutsstod',
              reaktion: 'Läkaren tittar ner i bordet.',
              varfor: 'Här görs bedömningen, och beslutet faller ut ur den i stället för tvärtom. Lägg märke till att alternativet inte säger vad svaret blir. Det kan mycket väl sluta i en sjukskrivning, och då är det rätt vård. Det kan sluta i ett nej, och då står nejet på funktion och arbetsuppgifter i stället för på hennes käkar. Utskriften kostar en minut att läsa och kan innehålla något hon inte visste.' },
            { text: 'Sagt nej och hänvisat till att beslutsstödet inte rekommenderar sjukskrivning vid den här diagnosen.',
              tid: 1, ok: false, princip: 'beslutsstod',
              varfor: 'Låter försäkringsmedicinskt korrekt och är det inte. Beslutsstödet är vägledning för bedömningen av en enskild patient, inte ett tak och inte ett förbud – och en rekommendation om tid är skriven för att tillämpas på en funktion som någon har tagit reda på. Används den i stället för utredningen finns det efteråt ingen bedömning att ompröva. Det är den sortens nej som inte lämnar några spår alls.',
              extra: { typ: 'replik', vem: 'rehabkoordinator', humor: 'neutral',
                       text: 'Och när hon söker igen om tre veckor står det ingenting i journalen om varför det blev nej. Då börjar vi om från början, båda två.' } },
            { text: 'Skrivit sjukskrivningen. Patienten hade läst på, och diskussionen var inte värd det.',
              tid: 2, ok: false, princip: 'ansvar',
              reaktion: 'Ingen säger något på ett par sekunder.',
              varfor: 'Samma fel spegelvänt, och lika lite en bedömning. Skillnaden är att det här beslutet lämnar ett intyg efter sig med hennes namn på, där hon ska skilja på vad hon själv har iakttagit och vad som är patientens egna uppgifter. Har hon inte tagit reda på något har hon ingenting att skriva på de raderna – och då är det inte bara slarv, det är ett intyg som inte stämmer. Det tunna intyget ger dessutom en kompletteringsbegäran från Försäkringskassan, och den drabbar patientens försörjning, inte mottagningens schema.' },
            { text: 'Sagt att frågan kräver mer tid än hon har idag, och bokat ett längre besök för arbetsförmågebedömningen innan patienten går ut.',
              tid: 2, ok: 'delvis', princip: 'individuell',
              varfor: 'Ofta rimligt och ärligare än att pressa fram ett beslut på fyra minuter – en arbetsförmågebedömning ryms sällan i en kvart som var bokad för något annat. Men det är bara en bedömning om tiden faktiskt bokas medan patienten sitter kvar. Blir det ett "vi tar det nästa gång" utan tid är det samma undvikande i finare kläder. Värt att diskutera i gruppen: hur ofta blir det av?' }
          ] },

        /* ---------- 7. Säkerhetsspärren, strukturell ----------
           Frågan är formulerad så att det felaktiga svaret är just den
           generalisering scenen riskerar att lära ut.                    */

        { typ: 'kontroll',
          banner: 'VAD FÖLJER INTE',
          vem: 'psykolog',
          fraga: 'Ove skriver fyra påståenden på tavlan. Tre av dem följer av det ni just gjort. Ett gör det inte. Vilket?',
          tidFel: 1,
          princip: 'individuell',
          val: [
            { text: 'Att sjukskrivning vid F- eller M-diagnoser i regel bör undvikas.', ratt: true },
            { text: 'Att den egna impulsen är information, inte ett beslut.',
              ratt: false,
              varfor: 'Det följer, och det är hela poängen med att göra analysen på sig själv. Att märka känslan är inte samma sak som att lyda den.' },
            { text: 'Att ett nej måste följas av ett besked om vad som görs i stället.',
              ratt: false,
              varfor: 'Det följer. Ett nej utan nästa steg är inte en åtgärd, det är ett uteblivet ja.' },
            { text: 'Att ett nej kan vara lika obehagsstyrt som ett ja.',
              ratt: false,
              varfor: 'Det följer – det var precis läkarens kedja.' }
          ],
          forklaring: 'Rätt. Ingenting av det ni gjort i dag säger något om vad utfallet ska bli i ett enskilt ärende. Analysen säger bara något om vad som styr när ni fattar det. Och lägg märke till formen på påståendet: "i regel" är en regel. En restriktiv hållning är precis lika mycket en regel i huvudet som den fysioterapeuten satt med – den ersätter bedömningen i stället för att göra den, och den är obehagsstyrd på samma sätt. Socialstyrelsens beslutsstöd är vägledning för den försäkringsmedicinska bedömningen, inte ett tak och inte ett förbud. För flera F- och M-diagnoser är den rekommenderade tiden dessutom lång.' },

        { typ: 'replik', vem: 'lakare', humor: 'neutral',
          text: 'Jag vill säga det rakt ut, för det är mitt namn som står på besluten. Det finns ingen diagnosgrupp där svaret är givet på förhand. Varje ärende kräver en medicinsk och en försäkringsmedicinsk bedömning av just den patienten: rätt diagnos först, sedan funktionsnedsättning, sedan vad den begränsar i de arbetsuppgifter hon faktiskt har.' },

        /* Grad- och längdangivelserna nedan är hämtade ur Socialstyrelsens
           försäkringsmedicinska beslutsstöd för utmattningssyndrom. Kontrollera
           lydelsen mot beslutsstödet innan materialet används skarpt –
           rekommendationerna revideras. */
        { typ: 'replik', vem: 'lakare', humor: 'oppen',
          text: 'Och det finns gott om lägen där sjukskrivning är rätt vård, också vid F- och M-diagnoser. Vid utmattningssyndrom i akut fas kan man enligt beslutsstödet sjukskrivas hel eller partiell upp till ett halvår, och vid kvarstående kognitiva svårigheter heltid upp till ett år eller mer. Skriver jag två veckor där har jag gjort ett avsteg nedåt från vägledningen – och det avsteget ska jag kunna motivera med den här patientens funktion, precis lika noga som om jag hade gått uppåt.' },

        { typ: 'replik', vem: 'lakare', humor: 'neutral',
          text: 'Jag har en från andra hållet också, och den är minst lika obekväm. Kvinna, femtiotvå, utmattningssyndrom. Läser samma stycke fem gånger utan att få i sig det. Hon ville jobba, och jag ville också att hon skulle jobba – det hade varit det bekväma för oss båda. Jag sjukskrev heltid, tidsbegränsat, med en plan och en tid tillbaka till mig. Det var dagens svåraste beslut och det var rätt.' },

        /* Evidensläget, hedgat med flit. Kunskapen om sjukfrånvarons
           konsekvenser är svag åt båda hållen: SBU:s översikt från 2003 och
           senare genomgångar i Läkartidningen (2026) pekar på att underlaget i
           allt väsentligt består av observationsstudier där sjukdomens och
           sjukskrivningens effekter inte går att skilja åt. Skriv inte in
           starkare påståenden här utan att kontrollera källan. */
        { typ: 'replik', vem: 'lakare', humor: 'neutral',
          text: 'En sak till, eftersom vi suttit här och pratat om långsiktiga konsekvenser i en halvtimme. Vi vet mindre om dem än vi låter som. Det mesta som finns om vad sjukfrånvaro leder till är observationsstudier, där sjukdomen och sjukskrivningen inte går att skilja från varandra. Den som säger att sjukskrivning i sig gör folk sjukare vet inte det. Den som säger att den läker vet det inte heller.' },

        { typ: 'replik', vem: 'lakare', humor: 'oppen',
          text: 'Så jag kan inte luta mig mot att en tumregel ska bära åt något håll. Det jag har kvar är den här patienten, den här funktionen, de här arbetsuppgifterna – och en motivering som ska gå att läsa högt för henne. Det jag inte får göra är att låta min egen tisdagsförmiddag avgöra vad det blir.' },

        /* ---------- 8. De två som är kvar ---------- */

        { typ: 'replik', vem: 'rehabkoordinator', humor: 'sluten',
          text: 'Min är den svåraste att erkänna. Jag har en kvinna vars situation faktiskt är orimlig. Chefen har tagit ifrån henne arbetsuppgifter och slutat bjuda in henne till möten. Hon sover, äter och tränar som vanligt. Det finns ingen sjukdom att sätta i ett intyg.' },

        { typ: 'replik', vem: 'rehabkoordinator', humor: 'neutral',
          text: 'Impulsen var att fixa det åt henne. Jag kan inte utfärda något intyg, men jag kan gå in till doktorn och säga att här behövs fyra veckor, och de hade jag fått. Fyra veckor åt henne, och en känsla av att ha gjort något åt mig. På köpet hade jag gjort hennes arbetsmiljöproblem till en diagnos – och den enda som kan lösa det, arbetsgivaren, hade sluppit veta om det.' },

        { typ: 'replik', vem: 'rehabkoordinator', humor: 'oppen',
          text: 'Men en sak till. Hade jag bara sagt nej och skickat hem henne hade jag inte heller gjort någonting. Det som behövdes var hjälp att formulera vad hon skulle säga till sin chef, och att hon fick veta att skyddsombud och fack finns. Det tog tjugo minuter. Och jag frågade henne innan jag rörde arbetsgivaren – hennes samtycke, inte mitt.' },

        { typ: 'replik', vem: 'arbetsterapeut', humor: 'ledsen',
          text: 'Och min då. Jag tyckte synd om henne, och det gjorde jag med rätta – hon har det tungt. Men när jag gick igenom det efteråt såg jag att det jag ville ge henne var något att ge. Hon hade inte bett om det. Hon hade bett om att orka handla på lördagar.' },

        { typ: 'replik', vem: 'arbetsterapeut', humor: 'neutral',
          text: 'Det jag hade att erbjuda var en ortos, en genomgång av veckan och ett par rader om vad hon inte klarar, som hon själv fick ta med till sin chef. Det kändes futtigt i rummet. Det var det enda av alltihop som fortfarande fungerade i maj.' },

        { typ: 'replik', vem: 'psykolog', humor: 'sluten',
          text: 'Jag tar min också, för den är den pinsammaste. Min patient tycker jag väldigt mycket om. Vi har jobbat i fyra månader och hon har kämpat. När hon bad om förlängningen var min första tanke inte "är det indicerat". Den var "hon kommer att bli besviken på mig".' },

        { typ: 'replik', vem: 'psykolog', humor: 'oppen',
          text: 'Och om ordet på tavlan: att härbärgera är inte att bita ihop. Att sitta ensam med det där varje vecka håller ingen människa. Det är inte en karaktärsegenskap. Det är något ett team gör åt varandra.' },

        /* ---------- 9. Vad teamet faktiskt gör ----------
           Inget av alternativen är ett prov. Tre håller, ett lägger
           bördan tillbaka på individen – och det är fällan.             */

        { typ: 'val',
          vem: 'psykolog',
          fraga: 'Ove: om det här ska bli något annat än en trevlig fredag – vad gör vi?',
          tips: 'Leta efter det som lägger uppgiften på strukturen i stället för på karaktären. Det som bara kräver att någon skärper sig håller inte till november.',
          val: [
            { text: 'Femton minuter varannan vecka, samma tid, där var och en tar med sig ett ärende som satt kvar i kroppen – inte det svåraste, utan det som gjorde mest.',
              tid: 3, ok: true, princip: 'ansvar',
              reaktion: 'Någon börjar leta i kalendern.',
              varfor: 'Det gör reflektionen till en rutin i stället för till en ansträngning, och en rutin är det enda som håller över en vinter. Kort och återkommande slår en lång eftermiddag en gång per termin – det gäller inlärning i allmänhet och det gäller det här.',
              extra: { typ: 'replik', vem: 'rehabkoordinator', humor: 'oppen',
                       text: 'Jag lägger in det i schemat på måndag. Står det inte i kalendern händer det inte, det vet vi båda.' } },
            { text: 'Den som är på väg att ge ett nej som skaver säger det högt till en kollega först. Inte för att få tillstånd – för att höra efter om det är bedömningen som talar.',
              tid: 3, ok: true, princip: 'ansvar',
              reaktion: 'Läkaren ser upp.',
              varfor: 'Att formulera skälet för en annan människa är det billigaste sättet att upptäcka att skälet var obehaget. Och det gäller åt båda hållen: samma sak för ett ja som skaver. Notera att det inte flyttar ansvaret – beslutet är kvar hos den som fattar det.',
              extra: { typ: 'replik', vem: 'fysioterapeut', humor: 'neutral',
                       text: 'Då hade jag fått frågan "vad vet du om vad han gör om dagarna". Och jag hade fått svara att jag inte visste.' } },
            { text: 'Vi skriver in i mallen att motiveringen ska dokumenteras även när vi inte sjukskriver, tillsammans med det patienten fick i stället.',
              tid: 2, ok: true, princip: 'dorr',
              varfor: 'Det gör bedömningen granskningsbar också när den inte lämnar något intyg efter sig, och det tvingar fram raden om vad som gjordes i stället. Att aktuellt hälsotillstånd och de medicinska bedömningarna ska framgå av journalen är dessutom ett krav i journalföringsreglerna, inte en extra ambition. Ett nej som inte står någonstans går varken att ompröva eller att bygga vidare på.',
              extra: { typ: 'replik', vem: 'lakare', humor: 'oppen',
                       text: 'Och då slipper nästa kollega börja om från noll när patienten kommer tillbaka.' } },
            { text: 'Vi bestämmer att var och en tar ansvar för att inte låta känslorna styra.',
              tid: 1, ok: false, princip: 'ansvar',
              reaktion: 'Alla nickar. Ingen skriver ner något.',
              varfor: 'Det låter som ett beslut men är samma sak som ingenting: hela bördan läggs på karaktären hos den som är tröttast. Det är dessutom redan vad som gäller, och det är därför ni sitter här. Härbärgering som ensamprojekt går sönder på en vinter – det är hela skälet till att mötet finns.' }
          ] },

        /* ---------- 10. Slut ---------- */

        { typ: 'replik', vem: 'ssk', humor: 'lattad',
          text: 'Jag tar måndagens kvart. Jag har redan ett ärende.' },

        { typ: 'replik', vem: 'lakare', humor: 'oppen',
          text: 'Jag med. Och jag tänker berätta om tisdagen, inte om något där jag gjorde rätt.' },

        { typ: 'replik', vem: 'arbetsterapeut', humor: 'lattad',
          text: 'Ove, du får låta lappen sitta kvar på tavlan.' },

        { typ: 'replik', vem: 'psykolog', humor: 'oppen',
          text: 'Låt den sitta. Vi behöver läsa den igen om två veckor, och då kommer någon annan att ha en onsdag att berätta om.' }
      ]
    }
  ];

})(window);
