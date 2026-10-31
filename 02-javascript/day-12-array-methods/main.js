"use strict";

// Day 12: Practise common array methods.
// Run this file with Node.js or paste it into a browser console.

const lessons = [
  { title: "Variables", minutes: 30, completed: true },
  { title: "Functions", minutes: 45, completed: true },
  { title: "Arrays", minutes: 40, completed: false },
  { title: "Objects", minutes: 35, completed: false },
];

// 1. Use map to create a transformed array.
const lessonTitles = lessons.map((lesson) => lesson.title);
console.log(`1. Lesson titles: ${lessonTitles.join(", ")}`);

// 2. Use filter to keep every item that matches a condition.
const completedLessons = lessons.filter((lesson) => lesson.completed);
console.log(
  `2. Completed lessons: ${completedLessons
    .map((lesson) => lesson.title)
    .join(", ")}`,
);

// 3. Use reduce to combine all values into one result.
const totalMinutes = lessons.reduce(
  (total, lesson) => total + lesson.minutes,
  0,
);
console.log(`3. Total lesson time: ${totalMinutes} minutes`);

// 4. Use find to return the first matching item.
const nextLesson = lessons.find((lesson) => !lesson.completed);
console.log(`4. Next lesson: ${nextLesson.title}`);

// 5. Use some to check whether at least one item matches.
const hasLongLesson = lessons.some((lesson) => lesson.minutes >= 45);
console.log(`5. Has a lesson lasting at least 45 minutes: ${hasLongLesson}`);

// 6. Use every to check whether all items match.
const areAllLessonsCompleted = lessons.every((lesson) => lesson.completed);
console.log(`6. Are all lessons completed: ${areAllLessonsCompleted}`);
