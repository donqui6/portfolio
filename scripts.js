document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  // Options de l'observateur
  const options = {
    threshold: 0.2, // L'élément est visible à 20%
  };

  // Fonction appelée lorsque l'élément est visible
  const revealSection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observer une fois qu'il est visible
      }
    });
  };
//////////////////////////////////////////////////////////////////////////
  const observer = new IntersectionObserver(revealSection, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});// Script pour l'horloge analogique
document.addEventListener("DOMContentLoaded", () => {
  const hourHand = document.querySelector(".hour-hand");
  const minuteHand = document.querySelector(".minute-hand");
  const secondHand = document.querySelector(".second-hand");

  function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Calcul des angles pour chaque aiguille
    const secondsDeg = (seconds / 60) * 360 + 90; // Ajout de 90° car le démarrage est vers 90°
    const minutesDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
    const hoursDeg = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

    // Appliquer les transformations de rotation
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
  }

  // Mise à jour de l'horloge chaque seconde
  setInterval(updateClock, 1000);

  // Lancer l'horloge lors du chargement
  updateClock();
});
