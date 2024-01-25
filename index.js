const scoreCard = [
  { name: "Math", score: 80 },
  { name: "Science", score: 60 },
  { name: "History", score: 74 },
  { name: "Geography", score: 60 },
  { name: "English", score: 75 },
];

const punishmentMilega = scoreCard.some((subject) => {
  console.log(subject.name);
  return subject.score < 70;
});

console.log(punishmentMilega);
