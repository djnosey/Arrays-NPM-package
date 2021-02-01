const square = (arr) => {
  if (Array.isArray(arr)) {
    return arr.map((item) => item * item);
  } else {
    throw "Input must be an array!";
  }
};

const cube = (arr) => {
  if (Array.isArray(arr)) {
    return arr.map((item) => item * item * item);
  } else {
    throw "Input must be an array!";
  }
};

const sum = (arr) => {
  let total = 0;
  arr.forEach((element) => {
    total += element;
  });
  return total;
};

module.exports = {
  square,
  cube,
  sum,
};
