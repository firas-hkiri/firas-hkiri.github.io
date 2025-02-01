// Load Particles.js for AI/Developer Animated Background
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

// Typewriter Effect for the Hero Section
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

document.addEventListener("DOMContentLoaded", function () {
  if (roles.length) setTimeout(type, delayBetweenRoles);
});
