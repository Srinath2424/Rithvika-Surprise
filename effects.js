const canvas = document.getElementById("loveCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function createHeart() {
  hearts.push({
    x: Math.random() * canvas.width,
    y: canvas.height,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 2 + 1
  });
}

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((h, i) => {
    ctx.fillText("💖", h.x, h.y);
    h.y -= h.speed;
    if (h.y < 0) hearts.splice(i, 1);
  });
}

setInterval(createHeart, 300);
setInterval(drawHearts, 30);
