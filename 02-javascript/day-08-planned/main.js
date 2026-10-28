"use strict";

// Day 8: Practise functions, parameters, return values, and scope.
// Run this file with Node.js or paste it into a browser console.

const courseName = "JavaScript fundamentals";

// 1. Accept one parameter and return a greeting.
function greetLearner(name) {
  return `Hello, ${name}!`;
}

// 2. Accept two parameters and return their sum.
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

// 3. Return a boolean based on one parameter.
function isEven(number) {
  return number % 2 === 0;
}

// 4. Return the larger of two parameters.
function findLarger(firstNumber, secondNumber) {
  return Math.max(firstNumber, secondNumber);
}

// 5. Use two parameters to calculate an area.
function calculateRectangleArea(length, width) {
  return length * width;
}

// 6. Convert a temperature and return the converted value.
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// 7. Build and return a value from two text parameters.
function createFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// 8. Count matching characters in a string parameter.
function countVowels(text) {
  let vowelCount = 0;
  const vowels = "aeiou";

  for (const character of text.toLowerCase()) {
    if (vowels.includes(character)) {
      vowelCount += 1;
    }
  }

  return vowelCount;
}

// 9. Return the average of an array parameter.
function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  const total = numbers.reduce(
    (runningTotal, number) => runningTotal + number,
    0,
  );

  return total / numbers.length;
}

// 10. Demonstrate scope: this local variable exists only inside this function.
function createLessonSummary(topic) {
  const lessonLabel = "Today's lesson";
  return `${lessonLabel}: ${topic} in ${courseName}.`;
}

console.log(`1. ${greetLearner("Sanket")}`);
console.log(`2. 12 + 8 = ${addNumbers(12, 8)}`);
console.log(`3. Is 14 even? ${isEven(14)}`);
console.log(`4. Larger number: ${findLarger(21, 17)}`);
console.log(`5. Rectangle area: ${calculateRectangleArea(6, 4)}`);
console.log(`6. 25°C in Fahrenheit: ${celsiusToFahrenheit(25)}°F`);
console.log(`7. Full name: ${createFullName("Ada", "Lovelace")}`);
console.log(`8. Vowels in "function": ${countVowels("function")}`);
console.log(`9. Average: ${calculateAverage([10, 20, 30])}`);
console.log(`10. ${createLessonSummary("functions and scope")}`);
