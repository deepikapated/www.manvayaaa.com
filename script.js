// SEARCH OVERLAY
const searchBtn = document.getElementById("searchBtn");
const searchOverlay = document.getElementById("searchOverlay");
const closeSearch = document.getElementById("closeSearch");

searchBtn.addEventListener("click", () => {
    searchOverlay.classList.add("active");
});

closeSearch.addEventListener("click", () => {
    searchOverlay.classList.remove("active");
});

searchOverlay.addEventListener("click", (e) => {
    if (e.target === searchOverlay) {
        searchOverlay.classList.remove("active");
    }
});

// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
const slides = document.querySelectorAll(".slide");
let i = 0;

setInterval(() => {
  slides[i].classList.remove("active");
  i = (i + 1) % slides.length;
  slides[i].classList.add("active");
}, 4000);
// Wait for page to load then add pop-in class
window.addEventListener('DOMContentLoaded', () => {
  const brandText = document.getElementById('brandText');
  setTimeout(() => {
    brandText.classList.add('pop-in');
  }, 300); // Delay for smooth effect
});
// Optional: Click animation for category cards
document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.add('clicked'); // optional class for animation
  });
});
// process section
const slider = document.querySelector('.process-slider');
const cards = document.querySelectorAll('.process-card');
const cardWidth = cards[0].offsetWidth + 20; // card width + gap
let index = 0;

// Duplicate first card for smooth looping
const firstClone = cards[0].cloneNode(true);
slider.appendChild(firstClone);

function slide() {
  index++;
  slider.style.transition = 'transform 0.5s ease-in-out';
  slider.style.transform = `translateX(${-cardWidth * index}px)`;

  if(index === cards.length) {
    // reset instantly after transition
    setTimeout(() => {
      slider.style.transition = 'none';
      slider.style.transform = 'translateX(0)';
      index = 0;
    }, 500);
  }
}

setInterval(slide, 3000);