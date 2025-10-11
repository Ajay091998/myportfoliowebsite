const greetings = [
  "Hello",     // English
  "Hola",      // Spanish
  "Bonjour",   // French
  "Ciao",      // Italian
  "Hallo",     // German
  "Olá",       // Portuguese
  "नमस्ते",     // Hindi
  "こんにちは",  // Japanese
  "안녕하세요",  // Korean
  "سلام",      // Arabic
  "Привет",     // Russian
  "வணக்கம்"     // Tamil
];

let currentIndex = 0;

// Wait for DOM to load
window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("greeting");

  setInterval(() => {
    currentIndex = (currentIndex + 1) % greetings.length;
    button.textContent = greetings[currentIndex];
  }, 1500);
});

function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Close modal when clicking outside the content
window.onclick = function(event) {
  let modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}
