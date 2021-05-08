/*
function clearArray(array) {
  array.length = 0;
}
*/
const clearArray = (array) => {
  array.length = 0;
};

/*
function getRandomInteger(minValue = 0, maxValue) {
  return Math.round(minValue + Math.random() * (maxValue - minValue));
}
*/
const getRandomInteger = (b = 0, t) => Math.round(b + Math.random() * (t - b));

/*
function createInput(init_value, x, y, size, handler) {
  let inp = createInput("13");
  inp.position(W * K + 10, (H * K) / 2 + 15);
  inp.size(150);
  inp.input(mineInputHandler);
}
*/
const createNiceInput = (init_value, x, y, size, handler) => {
  const inp = createInput(init_value);
  inp.position(x, y);
  inp.size(size);
  inp.input(handler);
};
