function openEnvelope() {
    document.getElementById("envelope").style.display = "none";
    document.getElementById("message").style.display = "block";
    createFlowers();
}
function openSesame() {
    document.getElementById("sesame").style.display = "none";
    document.getElementById("pesan").style.display = "block";
    createFlowers();
}

function playMusic() {
    const music = document.getElementById("background-music");
    music.play();
}

function createFlowers() {
    for (let i = 0; i < 5; i++) {
        const flower = document.createElement("div");
        flower.className = "bunga";
        flower.innerHTML = "🥳"; // Emoji bunga
        document.body.appendChild(flower);
        setTimeout(() => {
            flower.remove();
        }, 5000); // Hapus bunga setelah 5 detik
    }
}

  function sendEcho() {
    const emojis = ["🥳", "🤩"];
    for (let i = 0; i < 20; i++) {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.innerText = emojis[Math.floor(Math.random() * emojis.length)];

      // Posisi acak
      bubble.style.left = `${Math.random() * window.innerWidth}px`;
      bubble.style.top = `${Math.random() * window.innerHeight}px`;

      // Ukuran & warna acak
      bubble.style.fontSize = `${20 + Math.random() * 15}px`;
      bubble.style.color = `hsl(${Math.random() * 360}, 100%, 75%)`;

      document.body.appendChild(bubble);

      // Hapus setelah animasi
      setTimeout(() => {
        bubble.remove();
      }, 5000);
    }
  }

