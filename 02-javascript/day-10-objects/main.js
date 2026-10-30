"use strict";

// Day 10: Practise object properties, destructuring, and arrays of objects.
// Run this file with Node.js or paste it into a browser console.

// 1. Create an object with related properties.
const learner = {
  name: "Sanket",
  track: "JavaScript",
  completedDays: 9,
};

console.log(`1. Learner: ${learner.name} (${learner.track})`);

// 2. Read and update an object property.
learner.completedDays += 1;
learner.status = "active";

console.log(`2. Completed days: ${learner.completedDays}`);
console.log(`3. Status: ${learner.status}`);

// 3. Destructure properties into local variables.
const { name, track } = learner;
console.log(`4. Destructured learner: ${name} is studying ${track}`);

// 4. Destructure with a renamed variable and a default value.
const { completedDays: daysFinished, streak = 0 } = learner;
console.log(`5. Finished days: ${daysFinished}; Current streak: ${streak}`);

// 5. Destructure a nested object.
const course = {
  title: "JavaScript fundamentals",
  instructor: {
    name: "Ada Lovelace",
    experience: 8,
  },
};

const {
  instructor: { name: instructorName, experience },
} = course;

console.log(`6. Instructor: ${instructorName} (${experience} years)`);

// 6. Store and inspect an array of objects.
const lessons = [
  { day: 8, title: "Functions", completed: true, minutes: 45 },
  { day: 9, title: "Arrays", completed: true, minutes: 50 },
  { day: 10, title: "Objects", completed: false, minutes: 40 },
];

const lessonTitles = lessons.map(({ title }) => title);
console.log(`7. Lesson titles: ${lessonTitles.join(", ")}`);

// 7. Filter objects using a destructured property.
const completedLessons = lessons.filter(({ completed }) => completed);
console.log(
  `8. Completed lessons: ${completedLessons
    .map(({ title }) => title)
    .join(", ")}`,
);

// 8. Find one object and read its properties with destructuring.
const nextLesson = lessons.find(({ completed }) => !completed);
const { title: nextTitle, minutes: nextMinutes } = nextLesson;
console.log(`9. Next lesson: ${nextTitle} (${nextMinutes} minutes)`);

// 9. Calculate a value from an array of objects.
const totalMinutes = lessons.reduce(
  (total, { minutes }) => total + minutes,
  0,
);
console.log(`10. Total lesson time: ${totalMinutes} minutes`);
