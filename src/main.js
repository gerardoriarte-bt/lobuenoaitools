const tools = [
  {
    name: "Conceptos Genuinos",
    tag: "Investigación",
    category: "Creatividad",
    description: "Análisis de existencias de conceptos y marcas.",
    image: "/assets/conceptos_genuinos.png",
    theme: "light",
    link: "https://conceptosgenuinos.lobueno.co/"
  },
  {
    name: "My Voice",
    tag: "Identidad",
    category: "Eficiencia",
    description: "Motor generativo de copy estratégico hiper-parametrizado y basado en el ADN de tus marcas.",
    image: "/assets/my_voice.png",
    theme: "dark",
    link: "https://myvoice.lobueno.co/"
  },
  {
    name: "Prompt Enginiere",
    tag: "Eficiencia",
    category: "Creatividad",
    description: "Construcción de prompts para la generación de imágenes y video.",
    image: "/assets/prompt_enginiere.png",
    theme: "light",
    link: "https://prompts.lobueno.co/"
  },
  {
    name: "Governance Builder",
    tag: "Eficiencia en Medios",
    category: "Data y Medios",
    description: "Creación de taxonomías de medios y planificación de campañas.",
    image: "/assets/lobueno_vision.png",
    theme: "dark",
    link: "https://governance.lobueno.co/"
  },
  {
    name: "Synapse",
    tag: "Data Room",
    category: "Data y Medios",
    description: "Chat con datos de Clientes.",
    image: "/assets/insights_gpt.png",
    theme: "light",
    link: "https://synapse.lobueno.co"
  },
  {
    name: "Iqos, Curiosity Catalist",
    tag: "Idea Generator",
    category: "Clients Tools",
    description: "Orquestador de ideas y conceptos para campañas de IQOS.",
    image: "/assets/insights_gpt.png",
    theme: "light",
    link: "https://iqos.lobueno.co/"
  }
];

// Map the generated artifacts to the local src/assets folder
// I need to copy them first, but I'll use placeholders for now based on the image generation logs
// Actually, I'll update the paths to point to the actual generated files in the brain folder 
// for local dev simulation, but best practice is to move them to src/assets.

function renderTools(filter = 'all') {
  const carousel = document.getElementById('tools-carousel');
  const filteredTools = filter === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === filter);

  carousel.innerHTML = filteredTools.map(tool => `
    <a href="${tool.link}" target="_blank" class="card-link">
      <div class="card ${tool.theme === 'light' ? 'card--light' : ''}">
        <img src="${tool.image}" alt="${tool.name}" class="card-bg">
        <div class="card-info">
          <div class="card-tag">${tool.tag}</div>
          <h3>${tool.name}</h3>
          <p>${tool.description}</p>
        </div>
        <div class="plus-button"></div>
      </div>
    </a>
  `).join('');
}

function initFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Render filtered tools
      renderTools(btn.dataset.category);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderTools();
  initFilters();
});
