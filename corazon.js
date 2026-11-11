const estrellas = document.getElementById("stars");
const boton = document.getElementById("abrirCarta");
const carta = document.getElementById("carta");
const musica = document.getElementById("miMusica");

// Crear estrellas
for (let i = 0; i < 120; i++) {
    const estrella = document.createElement("span");

    estrella.className = "star";
    estrella.textContent = "✦";

    estrella.style.left = Math.random() * 100 + "%";
    estrella.style.top = Math.random() * 100 + "%";

    estrella.style.fontSize =
        (Math.random() * 9 + 4) + "px";

    estrella.style.animationDelay =
        Math.random() * 3 + "s";

    estrellas.appendChild(estrella);
}

// Abrir carta y reproducir música
boton.addEventListener("click", async () => {

    carta.classList.add("abierta");

    boton.textContent = "Mi carta para ti está abierta ❤️";
    boton.disabled = true;

    carta.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    try {
        await musica.play();
    } catch (error) {
        boton.disabled = false;
        boton.textContent = "Toca para escuchar la canción 🎵";
    }

});

// Crear corazones flotantes
function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.className = "flotante";
    corazon.textContent = "♥️";

    corazon.style.left = Math.random() * 100 + "vw";

    corazon.style.fontSize =
        (Math.random() * 20 + 15) + "px";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 7000);
}

setInterval(crearCorazon, 700);