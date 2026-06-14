# Moje Osobní Portfolio — Webová Architektura

Ahoj! V tomto repozitáři najdeš JavaScript kód k mému osobnímu portfoliu. Celý kód jsem uklidila, zrefaktorovala a rozdělila do dvou samostatných souborů. Proč? Aby se kód nepletl dohromady, stránky se načítaly rychle a konzole v prohlížeči ne házela zbytečné chyby.

## 🛠️ Jak mám kód rozdělený?

Místo jednoho velkého zmateného souboru používám dva specializované skripty:

### 1. `main.js` (Věci, které fungují na celém webu)
Tenhle soubor se stará o globální funkce, které potřebuji mít přístupné všude:
* **Mobilní menu:** Klasické hamburger menu. Po kliknutí se plynule otevře, ikona se změní na křížek, a když klikneš na odkaz, menu se zase samo zavře.
* **Animace při scrollování:** Nastavení knihovny **AOS**, díky které prvky na stránce při sjíždění dolů hezky vyskakují.
* **Kontaktní formulář:** Propojení s funkcí **EmailJS**. Formulář sbírá data, pošle mi e-mail a po úspěšném odeslání se sám vyčistí a zavře.

### 2. `portfolio.js` (Moje projekty pod lupou)
Tenhle skript se načítá **jenom na stránce s portfoliem** a má na starosti dynamické vykreslování mých **5 hlavních projektů**:
1. *Kalkulačka* — s historií výpočtů a podporou klávesnice.
2. *Interaktivní kniha HTML & CSS* — listování mezi 12 cvičeními a kopírování zdrojového kódu.
3. *SketchUp — Vizualizace domu* — 3D modelování rodinného domu včetně inženýrských sítí.
4. *Uklid — Web pro úklidovou službu* — landing page s vlastním chat-botem a kalkulačkou ceny.
5. *Jednoduchý Finanční Tracker* — hlídání rozpočtu s koláčovým grafem přes `Chart.js` a ukládáním dat do `localStorage`.

Všechny projekty mám uložené v jednom poli (databázi) a JavaScript z nich automaticky generuje HTML karty přímo do stránky.

## 📱 Responzivita (Aby to běželo všude)
Kód a CSS jsou napsané tak, aby se web dokonale přizpůsobil jakémukoliv displeji. Všechno sedí na milimetr přesně od malých mobilů (včetně iPhonů) přes tablety až po velké obrazovky notebooků.

## 🗂️ Pravidla čistého kódu, která hlídám:
* **Žádné inline věci:** V HTML nemám žádné styly ani staré `onclick` atributy. Všechno ovládám čistě přes posluchače událostí (`addEventListener`) v JavaScriptu.
* **Ochrana před chybami:** Předtím než JavaScript začne pracovat s nějakým tlačítkem nebo formulářem, vždycky si nejdřív ověří, jestli daný prvek na té konkrétní stránce vůbec existuje (`if (element)`). Díky tomu je konzole bez chyb.