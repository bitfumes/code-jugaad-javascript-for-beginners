const add = (a, b) => a + b;

let result;

let sum = (a, b) => {
  if (a === undefined || b === undefined) return;

  result = a + b;
  return result;
};

console.log(add(34, 6565));
