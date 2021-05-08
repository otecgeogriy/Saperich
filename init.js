function setupCanvas() {
  let root = document.getElementById("canvasRoot");
  canv = createCanvas(root.offsetWidth, root.offsetHeight);
  canv.parent(root);
}

function preload() {
  // P5 function
  MiNa = loadImage("papzan.gif");
  Losik = loadImage("losik.gif");
}

function initAnimations() {
  MiNa.play();
}
