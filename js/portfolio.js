/**
 * ==========================================================================
 * PORTFOLIO - DYNAMICKÉ NAČÍTÁNÍ VŠECH 5 PROJEKTŮ
 * ==========================================================================
 */

// Kompletní databáze obsahující  5 projektů
const projects = [
  {
    title: "Kalkulačka",
    description: "Moderní a uživatelsky přívětivá kalkulačka s podporou základních matematických operací, historií výpočtů, ovládáním klávesnicí a příjemným designem.",
    image: "images/projects/project1.jpg",
    githubUrl: "https://github.com/Ksena2611",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Základní operace (+, −, ×, ÷)",
      "Historie výpočtů",
      "Podpora klávesnice",
      "Responzivní design",
      "Ošetření chyb"
    ]
  },
  {
    title: "Interaktivní kniha HTML & CSS",
    description: "Velký interaktivní projekt obsahující 12 různých HTML & CSS cvičení. Uživatel může listovat projekty jako v knize pomocí šipek, prohlížet výsledky, zobrazovat zdrojový kód a kopírovat ho.",
    image: "images/projects/project2.jpg",
    githubUrl: "https://github.com/Ksena2611",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Listování projektů jako v knize",
      "Zobrazení živého náhledu",
      "Zobrazení zdrojového kódu (HTML + CSS)",
      "Tlačítko pro kopírování kódu",
      "Ovládání klávesnicí"
    ]
  },
  {
    title: "SketchUp - Vizualizace domu",
    description: "Komplexní 3D projekt modelování rodinného domu v programu SketchUp včetně dispozic, elektroinstalace, kanalizace a porovnání návrhu s reálnou realizací.",
    image: "images/projects/project3.jpg",
    githubUrl: "https://github.com/Ksena2611",
    technologies: ["SketchUp", "3D modeling"],
    features: [
      "3D modelace domu",
      "Návrh elektro a kanalizace",
      "Vizualizace všech stran",
      "Porovnání Before / After",
      "Interaktivní prohlížeč"
    ]
  },
  {
    title: "Uklid - Web pro úklidovou službu",
    description: "Moderní a funkční landing page pro úklidovou firmu. Obsahuje interaktivní chat-bota, kalkulačku ceny úklidu, objednávkový formulář a přehledné modální okna.",
    image: "images/projects/project4.jpg",
    githubUrl: "https://github.com/Ksena2611",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Interaktivní chat-bot",
      "Kalkulačka ceny úklidu",
      "Objednávkový formulář",
      "Hamburger menu s animací",
      "Modální okna",
      "Responzivní design"
    ]
  },
  {
    title: "Jednoduchý Finanční Tracker",
    description: "Moderní aplikace pro sledování osobních financí. Umožňuje přidávat příjmy a výdaje, kategorizaci, ukládání do localStorage, výpočet bilance a přehledný koláčový graf výdajů.",
    image: "images/projects/project5.jpg",
    githubUrl: "https://github.com/Ksena2611",
    technologies: ["HTML", "CSS", "JavaScript", "Chart.js"],
    features: [
      "Přidávání příjmů a výdajů",
      "Kategorizace transakcí",
      "Ukládání do localStorage",
      "Automatický výpočet bilance",
      "Interaktivní koláčový graf",
      "Mazání jednotlivých záznamů"
    ]
  }
];

// Spuštění vykreslování projektů po úplném načtení DOM struktury
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});

/**
 * Funkce pro generování HTML struktury karet projektů s podporou AOS animací
 */
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = '';

  projects.forEach((project) => {
    const html = `
      <div class="portfolio-card" data-aos="fade-up">
        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          
          <h4>Hlavní funkce:</h4>
          <ul>
            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
          
          <div class="project-tags">
            ${project.technologies.map(tech => `<span class="project-tag">${tech}</span>`).join('')}
          </div>
        </div>

        <div>
          <div class="project-image-container">
            <img src="${project.image}" alt="${project.title}" class="project-image">
          </div>
          
          <a href="${project.githubUrl}" target="_blank" class="project-btn">
            <i class="fab fa-github"></i>
            Zobrazit projekt na GitHub
          </a>
        </div>
      </div>
    `;
    container.innerHTML += html;
  });
}