"use strict";

// Day 5: JavaScript basics
// Open this file in a browser console or run it with Node.js.

// 1. Store a value in a constant.
const learnerName = "Sanket";
console.log("1.", learnerName);

// 2. Use let when a value needs to change.
let completedLessons = 4;
completedLessons += 1;
console.log("2.", completedLessons);

// 3. Create a number value.
const score = 95;
console.log("3.", score, typeof score);

// 4. Create a string value.
const topic = "JavaScript basics";
console.log("4.", topic, typeof topic);

// 5. Create a boolean value.
const isPractising = true;
console.log("5.", isPractising, typeof isPractising);

// 6. Store an array of values.
const favouriteTopics = ["HTML", "CSS", "JavaScript"];
console.log("6.", favouriteTopics, favouriteTopics.length);

// 7. Store related values in an object.
const learner = {
  name: learnerName,
  level: "beginner",
};
console.log("7.", learner.name, learner.level);

// 8. Use arithmetic operators.
const totalMinutes = 30 + 45;
console.log("8.", totalMinutes);

// 9. Use multiplication and division.
const averageMinutes = (20 * 3) / 2;
console.log("9.", averageMinutes);

// 10. Use the remainder operator.
const remainder = 17 % 5;
console.log("10.", remainder);

// 11. Use assignment operators.
let points = 10;
points *= 2;
console.log("11.", points);

// 12. Compare values with strict equality.
const requiredScore = 80;
console.log("12.", score >= requiredScore, score === 95);

// 13. Combine conditions with logical operators.
const hasTime = true;
const hasLaptop = true;
console.log("13.", hasTime && hasLaptop, hasTime || false, !hasLaptop);

// 14. Build a message with a template literal.
const message = `${learnerName} is learning ${topic}.`;
console.log("14.", message);

// 15. Choose a value with the ternary operator.
const result = score >= requiredScore ? "Pass" : "Practise more";
console.log("15.", result);
