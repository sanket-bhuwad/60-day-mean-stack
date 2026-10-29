"use strict";

// Day 9: Practise array indexing, iteration, and transformations.
// Run this file with Node.js or paste it into a browser console.

const scores = [72, 85, 91, 64, 88];

// 1. Read values by index.
console.log(`1. First score: ${scores[0]}`);
console.log(`2. Third score: ${scores[2]}`);
console.log(`3. Last score: ${scores[scores.length - 1]}`);

// 2. Iterate over every value with for...of.
let scoreTotal = 0;

for (const score of scores) {
  scoreTotal += score;
}

console.log(`4. Total score from iteration: ${scoreTotal}`);

// 3. Iterate with forEach when the index is also useful.
const labelledScores = [];

scores.forEach((score, index) => {
  labelledScores.push(`Test ${index + 1}: ${score}`);
});

console.log(`5. forEach labels: ${labelledScores.join(", ")}`);

// 4. Use map to create a new array without changing the original.
const bonusScores = scores.map((score) => score + 5);
console.log(`6. Scores after a five-point bonus: ${bonusScores.join(", ")}`);
console.log(`7. Original scores remain: ${scores.join(", ")}`);

// 5. Use filter to keep all scores that meet a condition.
const passingScores = scores.filter((score) => score >= 70);
console.log(`8. Passing scores: ${passingScores.join(", ")}`);

// 6. Use find to return the first score that meets a condition.
const firstExcellentScore = scores.find((score) => score >= 90);
console.log(`9. First excellent score: ${firstExcellentScore}`);

// 7. Apply the same methods to an array of objects.
const lessons = [
  { title: "Variables", completed: true },
  { title: "Functions", completed: true },
  { title: "Arrays", completed: false },
];

const lessonTitles = lessons.map((lesson) => lesson.title);
const completedLessons = lessons.filter((lesson) => lesson.completed);
const nextLesson = lessons.find((lesson) => !lesson.completed);

console.log(`10. Lesson titles: ${lessonTitles.join(", ")}`);
console.log(
  `11. Completed lessons: ${completedLessons
    .map((lesson) => lesson.title)
    .join(", ")}`,
);
console.log(`12. Next lesson: ${nextLesson.title}`);
