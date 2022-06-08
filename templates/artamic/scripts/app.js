import Screen from "./screen.js";
const screen = new Screen(800, 400, 50);
let x = 100;
let y = 100;
let dx = 1;
let dy = 1;
screen.show();
function draw() {
  screen.ctx.beginPath();
  screen.ctx.arc(x, y, 50, 0, 2 * Math.PI);
  screen.ctx.fillStyle = "red";
  screen.ctx.fill();
}
function update() {
  if (x - 50 <= 0 || x + 50 >= screen.screen.width) {
    dx = -dx;
  }
  if (y - 50 <= 0 || y + 50 >= screen.screen.height) {
    dy = -dy;
  }
  x += dx;
  y += dy;
}
function animation() {
  screen.ctx.clearRect(0, 0, screen.screen.width, screen.screen.height);
  update();
  draw();
  requestAnimationFrame(animation);
}
animation();
