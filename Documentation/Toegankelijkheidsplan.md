# Toegankelijkheidsplan

**Naam:** Tom Bijsterbosch
**Opleiding:** Junior Software Developer (MBO4)
**Jaar:** 2026

---

Voor een moderne web app moeten we rekening houden met moderne web design, daarom heb ik ervoor gezorgd dat mijn portfolio netjes toegankelijk is. 
Om dit te checken heb ik een scan gedraaid met **Google Lighthouse** in opera gx (chromium).
Hieronder leg ik kort uit wat ik in mijn code gefixt heb om de site a11y-compliant te maken.

## Wat heb ik gefixt?

**Aria-labels toegevoegd:**
Sommige knoppen en links op mijn site (zoals de "Let's Talk" button en de social media links in de footer) waren voor een screenreader misschien niet helemaal duidelijk. 
Ik heb daarom overal `aria-label` attributen aan de HTML tags toegevoegd. 
Hierdoor snapt een screenreader precies waar een link naartoe gaat, in plaats van dat hij alleen maar "GitHub" of een icoontje voorleest.

**Alt-teksten op images:**
Bij alle `<img>` tags, zoals mijn profielfoto en de screenshots van mijn projecten (bijv. de Guild Shop screenshot), heb ik duidelijke `alt="..."` attributen gezet. 
Als een image niet inlaadt of als iemand blind is, wordt in ieder geval opgelezen wat er op het plaatje te zien was.

**Contrast en kleuren:**
Omdat ik een vrij donker thema gebruik (Hollow Knight stijl), heb ik gecheckt of de tekst nog wel goed leesbaar is. 
Door de Lighthouse scan zag ik dat sommige teksten wegvielen tegen de achtergrondvideo.
Ik heb dit gefixt door de tekst lichter te maken en een donkere `text-shadow` toe te voegen.
Hierdoor popt de tekst eruit en haal ik een hoge contrast score.

**Keyboard Navigatie:**
Ik heb getest of ik met de `Tab` toets door de hele site kan navigeren, zonder mijn muis aan te raken.
Omdat ik semantische HTML gebruik (zoals `<nav>`, `<header>`, `<a>` en `<button>`), werkt dit al best goed. 
Mensen die de site zonder muis gebruiken kunnen nu overal bij.