const eventDate = new Date("Jul 04, 2026 21:00:00").getTime();

const countdownEl = document.getElementById('countdown');
const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance <= 0) {
    clearInterval(x);
    countdownEl.innerHTML = "¡El gran día ha llegado! 🎉";
    return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerHTML =
    `${days} días ${hours} h ${minutes} m ${seconds} s`;
}, 1000);


// Linternas
  const container = document.getElementById('lantern-container');

  function createLantern() {
    const lantern = document.createElement('div');
    lantern.classList.add('lantern');

    // Posición inicial aleatoria
    lantern.style.left = Math.random() * 100 + 'vw';
    lantern.style.animationDuration = (8 + Math.random() * 5) + 's'; // velocidad
    lantern.style.opacity = Math.random() * 0.5 + 0.5;

    container.appendChild(lantern);

    // Eliminar después de flotar
    setTimeout(() => {
      lantern.remove();
    }, 15000);
  }

  setInterval(createLantern, 800);

  window.addEventListener("scroll", function() {
  const flecha = document.getElementById("flecha");
  if (window.scrollY > 50) {
    flecha.style.opacity = "0";   // Se oculta
  } else {
    flecha.style.opacity = "1";   // Visible al inicio
  }
});