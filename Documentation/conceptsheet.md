# Conceptsheet Portfolio

**Naam:** Tom Bijsterbosch
**Opleiding:** Junior Software Developer (MBO4)
**Jaar:** 2026

---

## Situational demands

Ik moet deze portfolio website fixen voor school, maar het is eigenlijk vooral bedoeld om later mee te sturen als ik ga solliciteren voor een stage of een junior dev rol. 
Ik wil hiermee laten zien wat ik qua code in elkaar kan knutselen, zowel voor school opdrachten als mijn eigen side-projects.
Het moet er wel een beetje strak uitzien natuurlijk, maar ik wil ook een relaxende vibe aan mee geven.
Vandaar dat ik dat Hollow Knight kleur thema heb gekozen.

---

## Use-case demands

De mensen die hier naar gaan kijken zijn docenten, stagebegeleiders en recruiters.
Die hebben meestal geen tijd om hele verhalen te lezen, dus ze moeten in een paar seconden kunnen zien dat ik coding interessant vind en dat ik echt bezig ben met nieuwe dingen maken en welke talen ik ken.
Ze checken de site waarschijnlijk gewoon op een laptop of computer.
Toch ga ik er wel voor zorgen dat alles responsive is, voor als iemand de link opent op mobiel, resposivity is heel belangrijk.

---

## Functionality demands

Zodra je op de page landt, moet je direct mijn projecten zien staan. 
Ik heb daarvoor van die interactieve flip cards bedacht. Als je daar overheen hovert, draait de card om en zie je een korte beschrijving en de tech stack (bijv. C#, HTML, JS) die ik heb gebruikt. 
Ook zet ik er werkende linkjes in, zodat je direct door kan klikken naar mijn GitHub repo of een live build van de app.
In de footer drop ik linkjes naar mijn socials (LinkedIn en GitHub).
Voor spectakel heb ik gebruik gemaakt van video voor de hero sectie en een shot van Ghost in the Shell (beste anime ever).

---

## Documentation demands

De code moet clean zijn, met goeie indentation.
Verder moet ik nog een document aanmaken waarin ik mijn color choices en UI design keuzes uitleg.
Deze conceptsheet hou ik ook gewoon up-to-date als er requirements veranderen tijdens het coden.

---

## Structural demands

Ik maak er gewoon een single-page applicatie van. 
Bovenin een Header en een stukje About me, in het midden het Work/Projects overzicht en onderaan een simpele Contact/Footer. 
Ik ga niet gebruik maken van zware frameworks, ik build het HTML, CSS en wat basic JavaScript. 
Hierdoor kan ik makkelijk op github mijn portfolio hosten op github.
De mapjes structuur is vrij standaard: een `src` folder voor de echte code.
Een `Documentation` map voor documentatie en een `images` mapje voor de assets.

---

## Scaleability demands

Het is best wel belangrijk dat ik later makkelijk nieuwe projecten kan toevoegen. 
Als ik over een maand weer een project af heb, moet ik een nieuwe card kunnen aanmaken zonder dat heel mijn layout breekt. 
Als ik ooit besluit om er een multi-page site van te maken, moet ik dat makkelijk in de navbar kunnen linken.

---

## Performance demands

Omdat er een video in de background draait, moet ik oppassen dat de load time niet te hoog wordt. 
Ik ga videos compressen zodat ze smooth lopen en niet te grote filesize hebben.
Verder moeten CSS animaties (flip cards) niet laggen, dus ik hou de styling redelijk lightweight.

---

## Planning demands

- **Week 1:** Beetje nadenken over het concept, design keuzes bepalen (dat Hollow Knight thema) en de boilerplate HTML neerzetten.
- **Week 2:** Vooral CSS pushen, die custom gradient background maken en de flip cards stylen.
- **Week 3:** De site vullen met mijn content, de video erin gooien en checken of alles goed responsive is op mobile.
- **Week 4:** Alles nalopen, de laatste dingetjes polishen, bugs fixen en de docu voor school afmaken.

---

## Maintenance demands

Zoals ik al zei, nieuwe projecten toevoegen makkelijk zijn. 
Als ik iets nieuws wil showen, copy-paste ik gewoon een HTML card block en edit ik de text, plaatje en optioneel link naar de source code.
Voor de styling gebruik ik `:root` variables in CSS. 
Als ik die kleuren later toch lelijk vind, hoef ik ze maar op één plek aan te passen en dan update de hele site.
