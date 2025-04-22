const loadingText = document.getElementById("loadingText");
const fullText = "Entering Orbit...";
let charIndex = 0;

// Typing effect
function typeText() {
  if (charIndex < fullText.length) {
    const span = document.createElement("span");
    span.textContent = fullText[charIndex];
    
    // Randomly glitch some characters
    if (Math.random() < 0.25 && fullText[charIndex] !== " ") {
      span.classList.add("glitch-flicker");
    }

    loadingText.appendChild(span);
    charIndex++;

    setTimeout(typeText, 100); // typing speed
  }
}

// Clear initial text content
loadingText.textContent = "";
typeText();

const planet = document.getElementById("planet");
const wrapper = document.getElementById("planetWrapper");
const galaxy = document.getElementById("galaxy");

planet.addEventListener("animationend", () => {
  wrapper.classList.add("arrived");
});

wrapper.addEventListener("click", () => {
  // Add blur/fade effect
  galaxy.classList.add("fade-out");

  // Zoom planet
  wrapper.style.transition = "transform 1s ease";
  wrapper.style.transform = "scale(2) rotate(360deg)";

  // Navigate after delay
  setTimeout(() => {
    window.location.href = "VoyageToVirelia.html";
  }, 1000);
});
