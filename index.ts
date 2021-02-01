const square = (arr : [number]) => {
  if (Array.isArray(arr)) {
    return arr.map((item) => item * item);
  } else {
    throw "Input must be an array!";
  }
};

const cube = (arr : [number]) => {
  if (Array.isArray(arr)) {
    return arr.map((item) => item * item * item);
  } else {
    throw "Input must be an array!";
  }
};

const sum = (arr :[number]) => {
  let total = 0;
  arr.forEach((element) => {
    total += element;
  });
  return total;
};

const longestWord = (str:string) => {
  let arr = str.split(" ");
  let longest = 0;
  let returnedWord :string;
  arr.forEach((word) => {
    if (word.length > longest) {
      longest = word.length;
      returnedWord = word;
    }
    return `The longest word is ${returnedWord} with ${longest} characters`;
  });
};

module.exports = {
  square,
  cube,
  sum,
  longestWord,
};
