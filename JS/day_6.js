"use strict";

// Day 6: Use if/else, comparisons, and logical operators
// Run this file with Node.js or paste it into a browser console.

const learnerName = "Sanket";
const score = 86;
const attendancePercentage = 92;

const isScoreValid = score >= 0 && score <= 100;
const isAttendanceValid =
  attendancePercentage >= 0 && attendancePercentage <= 100;

if (!isScoreValid || !isAttendanceValid) {
  console.log("Enter a score and attendance percentage between 0 and 100.");
} else {
  let grade;

  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  const hasPassed = score >= 60 && attendancePercentage >= 75;
  const needsAttendanceWarning =
    attendancePercentage < 75 && score >= 60;

  console.log(`${learnerName}'s grade: ${grade}`);
  console.log(`Score: ${score}%`);
  console.log(`Attendance: ${attendancePercentage}%`);

  if (hasPassed) {
    console.log("Result: Pass");
  } else if (needsAttendanceWarning) {
    console.log("Result: Not passed because attendance is below 75%.");
  } else {
    console.log("Result: Not passed because the score is below 60%.");
  }
}
