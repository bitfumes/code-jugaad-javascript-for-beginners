let result;

let sum = function (a, b) {
  if (a === undefined || b === undefined) return;

  result = a + b;
  return result;
};

console.log(sum());
