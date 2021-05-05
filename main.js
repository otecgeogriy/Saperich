let MiNa;
let K = 75; //коэф-нт для 1 клеточки
let W = 10;
let H = 10;
let W_field = W * K; //ширина поля
let H_field = H * K; //Высотааааа поля
let beru_minu = 13;
let mines = [];
let PapuchON = false;
function preload() {
  MiNa = loadImage("papzan.gif");
  Losik = loadImage("losik.gif");
}

function setup() {
  let root = document.getElementById("canvasRoot");
  canv = createCanvas(root.offsetWidth, root.offsetHeight);
  canv.parent(root);
  MiNa.play();

  let inp = createInput("13");
  inp.position(W * K + 10, (H * K) / 2 + 15);
  inp.size(150);
  inp.input(myInputEvent);

  pamParam();
  console.log(mines);
}

function myInputEvent() {
  //console.log("you are typing: ", this.value());
  //beru_minu = this.value();
  if (this.value() != "") {
    beru_minu = Number(this.value());
  } else {
    beru_minu = 0;
  }
  if (isNaN(beru_minu)) beru_minu = 13;
  if (beru_minu > W * H) {
    beru_minu = 100;
  }
  console.log(beru_minu);
  pamParam();
}

function pRoVeRKa(x, y) {
  console.log(mines);
  for (let i = 0; i < mines.length; i++) {
    console.log(`X: ${mines[i].X}, Y: ${mines[i].Y}, x: ${x}, y:${y}`);
    //if (mines[i].X == x && mines[i].Y == y) {
    if (mines[i].Y == y && mines[i].X == x) {
      return false;
    }
  }
  return true;
}

function pamParam() {
  mines = [];

  for (let i = 0; i < beru_minu; i++) {
    let minesX = Math.round(Math.random() * (W - 1));
    let minesY = Math.round(Math.random() * (H - 1));
    while (!pRoVeRKa(minesX, minesY)) {
      minesX = Math.round(Math.random() * (W - 1));
      minesY = Math.round(Math.random() * (H - 1));
    }
    let Minich = {
      X: minesX,
      Y: minesY,
    };
    mines.push(Minich);
  }
}

function svoya_functia() {
  for (let i = 0; i < mines.length; i++) {
    image(
      MiNa,
      mines[i].X * K + 1, //Math.round(Math.random() * (W - 1)) * K + 1,
      mines[i].Y * K + 1, //Math.round(Math.random() * (H - 1)) * K + 1,

      K - 1,
      K - 1
    );
  }
}

function draw() {
  background("#fabcff");
  for (let i = 0; i <= W; i++) {
    line(K * i, 0, K * i, K * W);
  }
  for (let j = 0; j <= H; j++) {
    line(0, K * j, K * H, K * j);
  }
  //image(MiNa, 1, 1, K - 1, K - 1);
  svoya_functia();
  text("Введите кол-во мин", W * K + 10, (H * K) / 2 + 5);
  if (PapuchON) {
    image(Losik, 0, 0, width, height);
  }
}

function mousePressed() {
  PapuchON = true;

  Losik.play();
}
function mouseReleased() {
  PapuchON = false;
  Losik.pause();
}

//line(X1, Y1, X2, Y2);

// noFill();
// //fill("black");
// stroke("red");
// //noStroke();
// rect(100, 40, 50, 41);
// // stroke("purple");
// // rect(400,140,150,441)

// for (let i = 0; i < nol.length; i++) {
//   fill(nol[i][2]); //kapec
//   rect(setka * nol[i][0], setka * nol[i][1], setka, setka); //xy width heh
// }

let nol = [
  [10, 20, "red"],
  [30, 40, "black"],
  [15, 25, "blue"],
];
