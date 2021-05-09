const K = 75; // Коэф-нт для 1 клеточки
const W = 10; // Гирина поля
const H = 10; // Высотааааа поля
const mines = []; // Массив мин
const nule = [];
let MiNa; // картинка мины
let Losik; // картинка папани
let beru_minu = 13; // Кол-во мин
let PapuchON = false; // Влключен ли скример папани

function edinenie() {
  clearArray(nule);
  for (let i = 0; i < H; i++) {
    let rofl = [];
    for (let j = 0; j < W; j++) {
      // rofl.push(`${i} ${j}`);
      rofl.push(0);
    }
    nule.push(rofl);
  }
  console.log(nule);
}

function setup() {
  // P5 function
  setupCanvas(); // Растягиваем холст на весь экран
  initAnimations(); // Автоматически запускаем анмиации

  createNiceInput("13", W * K + 10, (H * K) / 2 + 15, 150, mineInputHandler);
  // Делаем поле ввода для мин

  pamParam(); // Рандомим мины
}

function mineInputHandler(event) {
  // Обработчик ввода значений в поле кол-ва мин
  // this.value() - текущее введенное значение
  let value = event.target.value;

  beru_minu = value != "" ? Number(value) : (beru_minu = 0);
  // кол-во мин равно числу, если введено оно или нулю если введено говно

  if (isNaN(beru_minu)) beru_minu = 13;
  // Если число вышло NaN (неопределнным), то сбрасываем на 13

  beru_minu = Math.min(beru_minu, W * H); // if (beru_minu > W * H) beru_minu = W * H;
  // Если кол-во мин больше кол-ва клеток

  console.log(beru_minu);
  pamParam(); // Перегенериваем мины под новое кол-во
}

function pRoVeRKa(x, y) {
  // Проверка есть ли в массиве мин уже мина с координатами x , y
  for (let mine of mines) {
    if (mine.Y == y && mine.X == x) {
      return false;
    }
  }
  return true;
}

function aboba() {
  for (let abobas of mines) {
    okrY = [-1, 1];
    okrX = [-1, 1];

    if (nule[abobas.Y - 1] == undefined) {
      okrY[0] = 0;
    }
    if (nule[abobas.Y + 1] == undefined) {
      okrY[1] = 0;
    }
    if (nule[abobas.Y][abobas.X - 1] == undefined) {
      okrX[0] = 0;
    }
    if (nule[abobas.Y][abobas.X + 1] == undefined) {
      okrX[1] = 0;
    }

    for (let i = okrY[0]; i <= okrY[1]; i++) {
      for (let j = okrX[0]; j <= okrX[1]; j++) {
        nule[abobas.Y + i][abobas.X + j]++;
      }
    }
  }
  for (let abobas of mines) {
    nule[abobas.Y][abobas.X] = 9;
  }
  console.log(nule);
}

function pamParam() {
  clearArray(mines);
  edinenie();

  for (let i = 0; i < beru_minu; i++) {
    let minesX = getRandomInteger(0, W - 1);
    let minesY = getRandomInteger(0, H - 1);

    while (!pRoVeRKa(minesX, minesY)) {
      minesX = getRandomInteger(0, W - 1);
      minesY = getRandomInteger(0, H - 1);
    }

    let Minich = {
      X: minesX,
      Y: minesY,
    };

    mines.push(Minich);
  }
  aboba();
  // console.log(nule);
}

function svoya_functia() {
  for (let mine of mines) {
    image(
      MiNa,
      mine.X * K + 1, // mine = mines[i] //Math.round(Math.random() * (W - 1)) * K + 1,
      mine.Y * K + 1, // mine = mines[i] //Math.round(Math.random() * (H - 1)) * K + 1,
      K - 1,
      K - 1
    );
  }
}

function draw() {
  // P5 function
  background("#fabcff");

  for (let i = 0; i <= W; i++) {
    line(K * i, 0, K * i, K * W);
  }
  for (let j = 0; j <= H; j++) {
    line(0, K * j, K * H, K * j);
  }

  svoya_functia();

  text("Введите кол-во мин", W * K + 10, (H * K) / 2 + 5);

  if (PapuchON) {
    image(Losik, 0, 0, width, height);
  }
}
