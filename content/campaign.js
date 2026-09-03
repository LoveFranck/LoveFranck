/* campaign.js – kampanjläget: tre ärenden hela vägen genom LESS-flödet */
(function (global) {
  'use strict';
  var LESS = global.LESS;

  LESS.kampanj = {

    arenden: [

      {
        id: 'anna',
        titel: 'ÄRENDE 1 · ANNA EK',
        patient: 'anna',
        beskrivning: 'Ångest och önskemål om sjukskrivning. Hela kedjan: triage, utredning, signering, uppföljning.',
        steg: [
          { fall: 'ssk-anna', mellanspel: ['Ett nytt ärende ligger i chattkorgen.', 'Du är sjuksköterska idag.'] },
          { fall: 'psy-anna', mellanspel: ['Tre dagar senare. Torsdag.', 'Nu är du psykolog.'] },
          { fall: 'lak-anna', mellanspel: ['Samma förmiddag. Anna sitter kvar i rummet.', 'Nu är du jourläkaren som Karin kommer och hämtar.'] },
          { fall: 'rko-anna', mellanspel: ['Två veckor senare.', 'Nu är du rehabkoordinator.'] }
        ],
        epilog: [
          { om: { nyckel: 'anna-triage', varde: 'lakare' },
            text: ['SEX MÅNADER SENARE',
                   'Anna är tillbaka i arbete, men det tog längre tid än det behövde.',
                   'Akutbesöket gav fyra veckors sjukskrivning innan någon behandling hann börja. Undvikandet hann sätta sig.',
                   'Det är precis den omvägen LESS är byggt för att ta bort.'] },
          { om: { nyckel: 'anna-triage', varde: 'avslut' },
            text: ['SEX MÅNADER SENARE',
                   'Anna är sjukskriven på heltid sedan fyra månader.',
                   'Ärendet stängdes i chatten utan att någon dörr öppnades. Nästa gång hon sökte var det akut.',
                   'Att stänga en dörr utan att öppna en annan är inte LESS. Det är bara ett nej.'] },
          { om: { nyckel: 'anna-forslag', varde: '100' },
            text: ['SEX MÅNADER SENARE',
                   'Anna arbetar heltid igen, men fyra veckors frånvaro utan behandling gjorde entrén svårare.',
                   'Hon säger själv: "Jag trodde att vila var behandlingen."'] },
          { text: ['SEX MÅNADER SENARE',
                   'Anna arbetar heltid. KBT:n avslutades efter åtta sessioner.',
                   'Hon åker fortfarande tidigt vissa dagar. Det står i planen, och det fungerar.',
                   'Noll dagars sjukskrivning. Två veckor från chatt till behandling.'] }
        ]
      },

      {
        id: 'bengt',
        titel: 'ÄRENDE 2 · BENGT NILSSON',
        patient: 'bengt',
        beskrivning: 'Ländryggssmärta och tungt arbete. Triage, fysioterapeutisk utredning och läkarens ställningstagande.',
        steg: [
          { fall: 'ssk-bengt', mellanspel: ['Nästa ärende i chatten.', 'Du är sjuksköterska.'] },
          { fall: 'fys-bengt', mellanspel: ['Dagen efter. Fredag morgon.', 'Nu är du fysioterapeut.'] },
          { fall: 'lak-bengt', mellanspel: ['Samma förmiddag. Bengt sitter kvar.', 'Nu är du jourläkaren som Sara kommer och hämtar.'] }
        ],
        epilog: [
          { om: { nyckel: 'bengt-beslut', varde: '100' },
            text: ['TRE MÅNADER SENARE',
                   'Bengt var borta i fyra veckor och är tillbaka på samma pallar.',
                   'Ryggen har låst sig en gång till sedan dess. Ingen har pratat med arbetsgivaren om lyften.'] },
          { om: { nyckel: 'bengt-triage', varde: 'lakare' },
            text: ['TRE MÅNADER SENARE',
                   'Bengt fick sina fyra veckor på akuttiden, som förra gången.',
                   'Fysioterapeuten träffade honom först i vecka fem. Då var ryggen stel och konditionen sämre.',
                   'Behandlingen fanns hela tiden – den kom bara för sent.'] },
          { text: ['TRE MÅNADER SENARE',
                   'Bengt kör truck och plockar. Lyften tas av en kollega tills vidare.',
                   'Han tränar två gånger i veckan och har inte varit sjukskriven en enda dag.',
                   'Chefen har börjat fråga om fler på lagret kan få samma genomgång.'] }
        ]
      },

      {
        id: 'carina',
        titel: 'ÄRENDE 3 · CARINA HOLM',
        patient: 'carina',
        beskrivning: 'Handartros och ett arbete som kräver händer. Ett ärende som aldrig behöver nå läkaren.',
        steg: [
          { fall: 'ssk-carina', mellanspel: ['Ett ärende till i chatten. Det är skrivet och omskrivet.', 'Du är sjuksköterska.'] },
          { fall: 'arb-carina', mellanspel: ['Fredag förmiddag.', 'Nu är du arbetsterapeut.'] }
        ],
        epilog: [
          { om: { nyckel: 'carina-triage', varde: 'lakare' },
            text: ['ETT ÅR SENARE',
                   'Carina fick sin diagnos bekräftad och 50 procent i fyra veckor.',
                   'Ingen tittade på musen, pärmarna eller helgerna. Hon är nu sjukskriven på heltid.'] },
          { om: { nyckel: 'carina-forslag', varde: '50' },
            text: ['ETT ÅR SENARE',
                   'Carina är tillbaka på heltid men händerna är sämre.',
                   'Halva veckan hemma tog inte bort en enda tumbelastning.'] },
          { text: ['ETT ÅR SENARE',
                   'Carina arbetar heltid med vertikalmus, ortos och pärmhållare.',
                   'Hon har inte varit sjukskriven en dag. Två kollegor har fått samma genomgång.',
                   'Ärendet nådde aldrig en läkare – och behövde inte göra det.'] }
        ]
      }
    ],

    /* Slutskärm när alla tre ärenden är klara */
    final: [
      'Tre ärenden. Sex roller. Ett flöde.',
      'Skillnaden mellan LESS och det gamla flödet ligger inte i vem som bestämmer – läkaren skriver fortfarande under.',
      'Skillnaden ligger i vem patienten möter först, och hur snabbt något faktiskt börjar hända.',
      'Öva vidare i övningsläget. Handledartipsen tonas bort när en roll sitter.'
    ]
  };

  /* Slår upp ett fall på id, oavsett roll. */
  LESS.hittaFall = function (id) {
    var roller = Object.keys(LESS.fall), i, j, lista;
    for (i = 0; i < roller.length; i++) {
      lista = LESS.fall[roller[i]];
      for (j = 0; j < lista.length; j++) if (lista[j].id === id) return lista[j];
    }
    return null;
  };

  /* Alla fall för en roll som får spelas i övningsläget. */
  LESS.drillFall = function (roll) {
    return (LESS.fall[roll] || []).slice();
  };

})(window);
