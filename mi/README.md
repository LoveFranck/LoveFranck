# MI-träning

Öva motiverande samtal (MI) med en AI-klient – i skrift eller i tal – och få
feedback direkt efteråt. Tänk Duolingo: välj en klient, för ett kort samtal,
få stjärnor, poäng och ett enda fokus till nästa gång.

## Kom igång

1. Öppna `mi/index.html` via en webbserver (t.ex. GitHub Pages → `/mi/`, eller
   `npx http-server -p 8080` och gå till `http://localhost:8080/mi/`).
2. Klistra in din Claude-API-nyckel första gången (skapas på
   [console.anthropic.com](https://console.anthropic.com/settings/keys)).
   Nyckeln sparas bara i din webbläsare.
3. Välj **Skriva** eller **Prata**, välj en klient och börja.

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
* **Tal** använder webbläsarens inbyggda taligenkänning och uppläsning på
  svenska (Chrome, Edge och Safari). Tryck på mikrofonen, prata, tryck igen.
* **🔥 dagar i rad, ⭐ poäng och stjärnor per klient** sparas lokalt.

## Lägga till en klient

Lägg till ett objekt i `SCENARIOS` i `index.html`: `brief` är vad du ser,
`opening` klientens första replik och `background` det bara AI:n vet.

Allt är en enda fil utan byggsteg. Samtalen skickas till Claude
(`claude-opus-5-5`); skriv inga riktiga patientuppgifter.
