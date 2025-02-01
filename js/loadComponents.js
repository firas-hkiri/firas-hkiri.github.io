const components = [
  "header",
  "hero",
  "about",
  "skills",
  "projects",
  "contact",
  "footer",
];

function loadComponents() {
  let loaded = 0;
  components.forEach((component) => {
    fetch(`components/${component}.html`)
      .then((response) => {
        if (!response.ok) throw new Error(`Could not load ${component}.html`);
        return response.text();
      })
      .then((data) => {
        document.getElementById(component).innerHTML = data;
        loaded++;
        if (loaded === components.length) initializeScripts();
      })
      .catch((error) =>
        console.error(`Error loading ${component} component:`, error)
      );
  });
}

function initializeScripts() {
  // Initialize Particles.js only after hero is loaded
  if (document.getElementById("particles-js")) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#f39c12" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        move: { speed: 2, direction: "none", out_mode: "out" },
      },
      interactivity: {
        events: { onhover: { enable: true, mode: "repulse" } },
        modes: { repulse: { distance: 100, duration: 0.4 } },
      },
    });
  }

  // Start Typewriter Effect
  const roles = [
    "Full Stack Developer 💻",
    "AI Enthusiast 🤖",
    "Game Developer 🎮",
    "Software Engineer 🚀",
  ];
  const typewriterElement = document.getElementById("typewriter");
  let roleIndex = 0,
    charIndex = 0;
  const typingSpeed = 120,
    erasingSpeed = 80,
    delayBetweenRoles = 1500;

  function type() {
    if (charIndex < roles[roleIndex].length) {
      typewriterElement.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenRoles);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typewriterElement.textContent = roles[roleIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, typingSpeed);
    }
  }

  if (typewriterElement) setTimeout(type, delayBetweenRoles);
}

// Start Loading Components
document.addEventListener("DOMContentLoaded", loadComponents);
