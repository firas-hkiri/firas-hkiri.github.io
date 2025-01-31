// Particle.js Background
particlesJS.load("particles-js", "assets/particles.json", function () {
  console.log("Particles.js loaded!");
});

// Typing Effect for Home Section
const typingEffect = document.querySelector(".typing-effect");
const text = "Software Engineer | Game Developer | Full-Stack Developer";
let index = 0;

function type() {
  if (index < text.length) {
    typingEffect.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100); // Adjust typing speed here
  }
}

type();

// Smooth Scrolling for Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
