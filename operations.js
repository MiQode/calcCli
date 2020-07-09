const add = (x, y) => +x + +y;

const subtract = (x, y) => +x - +y;

const multiply = (x, y) => +x * +y;

const divide = (x, y) => +x / +y;

const validateNumbers = (x, y) => {
  if (isNaN(x) || isNaN(y)) {
    return false;
  }
  return tru;
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  validateNumbers,
};
