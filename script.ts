// script.js

// Generate floating chalk dust particles
const dustContainer = document.getElementById("dust-container");
const numParticles = 40;

for (let i = 0; i < numParticles; i++) {
  const particle = document.createElement("div");
  particle.classList.add("dust-particle");

  // Random size
  const size = Math.random() * 5 + 2;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  // Random position
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.top = `${Math.random() * 100}vh`;

  // Random animation duration
  const duration = Math.random() * 10 + 5;
  particle.style.animationDuration = `${duration}s`;

  dustContainer.appendChild(particle);
}

// 🎉 Add a click interaction to the card
const card = document.querySelector(".card");
card.addEventListener("click", () => {
  card.classList.add("clicked");

  // Fire confetti effect
  for (let i = 0; i < 20; i++) {
    createConfetti();
  }

  // Remove animation class after some time
  setTimeout(() => {
    card.classList.remove("clicked");
  }, 1500);
});

// Function to create confetti
function createConfetti() {
  const confetti = document.createElement("div");
  confetti.innerHTML = "🎉";
  confetti.style.position = "fixed";
  confetti.style.left = `${Math.random() * 100}vw`;
  confetti.style.top = `100vh`;
  confetti.style.fontSize = `${Math.random() * 20 + 15}px`;
  confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;
  document.body.appendChild(confetti);

  setTimeout(() => confetti.remove(), 4000);
}
