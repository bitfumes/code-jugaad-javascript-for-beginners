const scoreCard = [
  { name: "Math", score: 80 },
  { name: "Science", score: 60 },
  { name: "History", score: 94 },
  { name: "Geography", score: 60 },
  { name: "English", score: 75 },
];
// 80 + 60 + 74 + 60 + 75 = 349
const highestMarkSubject = scoreCard.reduceRight(
  function(acc, subject){
    return subject.score < acc.score ? subject : acc;
  }
);

console.log(highestMarkSubject);
