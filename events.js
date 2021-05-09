// function mousePressed() {
//   PapuchON = true;
//   Losik.play();
// }

// function mouseReleased() {
//   PapuchON = false;
//   Losik.pause();
// }
function sam_pishu() {
  PapuchON = false;
  Losik.pause();
}

function mouseClicked() {
  PapuchON = true;
  Losik.play();
  setTimeout(sam_pishu, 100);
}
