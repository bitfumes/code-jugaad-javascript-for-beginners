const mathTest = {
  name: "Mathtest",
  score: 80,
  chapter: [1, 2, 3],
  students: 10,
};

Object.defineProperty(mathTest, "teacher", {
  value: "Sarthak",
  enumerable: true,
});

console.log(mathTest);
