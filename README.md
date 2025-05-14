# ARC Funnel Page

Dit is een responsive one-pager landingspagina gebouwd met HTML en Tailwind CSS.

## Setup

1.  **Clone de repository (indien van toepassing) of download de bestanden.**

2.  **Installeer de dependencies:**
    Navigeer naar de projectmap in je terminal en voer het volgende commando uit om de benodigde development dependencies (Tailwind CSS, PostCSS, Autoprefixer) te installeren:
    ```bash
    npm install
    ```

3.  **Compileer de Tailwind CSS:**
    Om de Tailwind CSS te compileren en de `dist/output.css` te genereren, gebruik je het volgende commando:
    ```bash
    npm run build:css
    ```
    Dit commando zal de CSS compileren en blijven "watchen" voor wijzigingen in `index.html` en `src/input.css`. Voor een eenmalige build kun je `npm run build` gebruiken.

4.  **Open `index.html` in je browser:**
    Open het `index.html` bestand in je webbrowser om de landingspagina te bekijken.

## Structuur

-   `index.html`: De hoofd HTML-file met alle content en structuur.
-   `src/input.css`: Het input CSS-bestand waar Tailwind's directives worden geïmporteerd.
-   `dist/output.css`: Het gecompileerde CSS-bestand dat gelinkt wordt in `index.html` (automatisch gegenereerd).
-   `tailwind.config.js`: Configuratiebestand voor Tailwind CSS (bijv. lettertypes, kleuren).
-   `postcss.config.js`: Configuratiebestand voor PostCSS.
-   `package.json`: Definieert project scripts en dependencies.

## Aanpassingen

-   **Logo:** Vervang de placeholder `<!-- ARC Logo Placeholder -->` in `index.html` met je daadwerkelijke logo.
-   **Achtergrond Hero:** Pas de `background-image` URL aan in de `<style>` tag van de Hero sectie in `index.html` of verwijder de placeholder.
-   **Calendly Embed:** Vervang de `<!-- Calendly Embed Placeholder -->` div in de Contact sectie met je daadwerkelijke Calendly embed code.
-   **Telefoonnummer:** Pas het telefoonnummer aan in de `href` van de "Bel Ons Direct" knop.
-   **Contactformulier actie:** Het contactformulier heeft momenteel `action="#"`. Pas dit aan naar je backend endpoint of form-handling service. 