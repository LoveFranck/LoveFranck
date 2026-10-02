# MI-träning

Öva motiverande samtal (MI) med en AI-klient – i skrift eller i tal – och få
feedback direkt efteråt. Tänk Duolingo: välj en klient, för ett kort samtal,
få stjärnor, poäng och ett enda fokus till nästa gång.

## Kom igång

**Enklast:** öppna länken till verktyget på claude.ai och tryck på en klient.
Ingen nyckel behövs, eftersom samtalen går på ditt eget Claude-konto. Första
gången frågar sidan om den får använda Claude: svara ja.

**Utan claude.ai** (t.ex. GitHub Pages → `/mi/`): då ber sidan om en egen
Claude-API-nyckel från
[console.anthropic.com](https://console.anthropic.com/settings/keys). Nyckeln
sparas bara i din webbläsare.

## Så funkar det

* **Sex klienter** i tre svårighetsnivåer: alkohol, rökning, fysisk aktivitet,
  återgång i arbete, mediciner och cannabis. Klienten är ambivalent och svarar
  på *hur* du pratar: reflektioner och öppna frågor öppnar upp, pekpinnar och
  råd utan lov gör klienten defensiv.
* **💡 Ledtråd** ger ett kort förslag på vad du kan säga härnäst.
* **Klar – ge feedback** kodar dina repliker ungefär enligt MITI 4:
  reflektioner per fråga, andel öppna frågor, andel komplexa reflektioner,
  bekräftelser, sammanfattningar och MI-inkonsistenta beteenden – plus citat
  på vad som var bra och vad du kan prova i stället.
* **Prata:** klienten läser upp sina repliker. Du svarar med mikrofonen på
  mobilens tangentbord. Utanför claude.ai, i Chrome, Edge och Safari, finns
  också en egen mikrofonknapp i sidan.
* **🔥 dagar i rad, ⭐ poäng och stjärnor per klient** sparas lokalt.

## Lägga till en klient

Lägg till ett objekt i `SCENARIOS` i `index.html`: `brief` är vad du ser,
`opening` klientens första replik och `background` det bara AI:n vet.

Allt är en enda fil utan byggsteg. Samtalen skickas till Claude
(`claude-opus-5-5`); skriv inga riktiga patientuppgifter.
