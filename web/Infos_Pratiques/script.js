const trigger = document.getElementById("sheet-trigger");
const sheet = document.getElementById("sheet-content");
const closeBtn = document.getElementById("sheet-close");

trigger.addEventListener("click", () => {
  sheet.classList.toggle("open");
});

closeBtn.addEventListener("click", () => {
  sheet.classList.remove("open");
});


// Récupère tous les boutons d'accordéon
const accButtons = document.querySelectorAll(".accordion-button");

accButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;

    // Ouvre/ferme le contenu
    if (content.style.maxHeight) {
      content.style.maxHeight = null; // ferme
    } else {
      content.style.maxHeight = content.scrollHeight + "px"; // ouvre
    }

    // Active la classe pour rotation du +
    btn.classList.toggle("active");
  });
});