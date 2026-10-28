"use strict";

// Day 7: Practise loops with sums, factorials, and number patterns
// Run this file with Node.js or paste it into a browser console.

// 1. Find the sum of the numbers from 1 to a limit.
const sumLimit = 10;
let total = 0;

for (let number = 1; number <= sumLimit; number += 1) {
  total += number;
}

console.log(`1. Sum from 1 to ${sumLimit}: ${total}`);

// 2. Calculate the factorial of a number.
const factorialNumber = 5;
let factorial = 1;

for (let number = 1; number <= factorialNumber; number += 1) {
  factorial *= number;
}

console.log(`${factorialNumber}! = ${factorial}`);

// 3. Print a multiplication table.
const tableNumber = 3;
console.log(`3. Multiplication table for ${tableNumber}:`);

for (let multiplier = 1; multiplier <= 10; multiplier += 1) {
  console.log(
    `${tableNumber} x ${multiplier} = ${tableNumber * multiplier}`,
  );
}

// 4. Print a growing number pattern.
const patternRows = 5;
console.log("4. Number pattern:");

for (let row = 1; row <= patternRows; row += 1) {
  let pattern = "";

  for (let number = 1; number <= row; number += 1) {
    pattern += `${number} `;
  }

  console.log(pattern.trim());
}
