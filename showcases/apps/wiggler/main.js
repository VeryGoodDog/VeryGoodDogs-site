window.onload = () => {
  start();
}
let canv;
const DEG_TO_RAD = Math.PI / 180,
  HEIGHT = 300,
  WIDTH = 800,
  RATE_FACTOR = 1 / 100;

function start() {
  let cont = document.getElementById('cont');
  canv = document.createElement('canvas');
  canv.setAttribute('height', HEIGHT);
  canv.setAttribute('width', WIDTH);
  cont.appendChild(canv);
  canv = canv.getContext('2d', {
    alpha: false
  });
  canv.fillStyle = '#000';
  canv.font = '15px monospaced';
  draw();
}

let width = 5;
let freq = 0;

function draw(time) {
  freq++;
  clear();
  canv.fillText('Rate: ' + Math.trunc(freq * RATE_FACTOR * 100), 10, 15);
  for (var i = 0; i < 360; i += width / 2) {
    let xpos, ypos, angle = i * DEG_TO_RAD;
    xpos = Math.sin(angle * freq * RATE_FACTOR) * (HEIGHT / 2 - 20) + HEIGHT / 2;
    ypos = i * WIDTH / 360;
    rect(xpos, ypos);
  }
  requestAnimationFrame(draw);
}

function rect(x, y) {
  canv.fillRect(y - width / 2, x - width / 2, width, width);
}

function clear() {
  canv.clearRect(0, 0, WIDTH, HEIGHT);
}