const trigger = document.getElementById("sheet-trigger");
const sheet = document.getElementById("sheet-content");
const closeBtn = document.getElementById("sheet-close");

trigger.addEventListener("click", () => {
  sheet.classList.toggle("open");
});

closeBtn.addEventListener("click", () => {
  sheet.classList.remove("open");
});