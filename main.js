let MiNa;
let K = 75; //коэф-нт для 1 клеточки
let W = 10;
let H = 10;
let W_field = W * K; //ширина поля
let H_field = H * K; //Высотааааа поля
let beru_minu = 13;

function preload() {
  MiNa = loadImage("papzan.gif");
}

function setup() {
  let root = document.getElementById("canvasRoot");
  canv = createCanvas(root.offsetWidth, root.offsetHeight);
  canv.parent(root);
  MiNa.play();

  let inp = createInput("Введите кол-во мин");
  inp.position(W * K + 10, (H * K) / 2 + 5);
  inp.size(150);
  inp.input(myInputEvent);
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
  console.log(beru_minu);
}

function svoya_functia() {
  for (let i = 0; i <= beru_minu; i++) {
    image(
      MiNa,
      Math.round(Math.random() * (W - 1)) * K + 1,
      Math.round(Math.random() * (H - 1)) * K + 1,
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
  image(MiNa, 1, 1, K - 1, K - 1);
  svoya_functia();
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
