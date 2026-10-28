# Day 8: Functions and scope

This day is planned in [the 60-day roadmap](../../docs/roadmap.md).

## Objective

Write and call 10 independent JavaScript functions to practise parameters,
return values, and the difference between module, function, and block scope.

## Practice

- `greetLearner` accepts one parameter and returns a greeting.
- `addNumbers` and `calculateRectangleArea` use multiple parameters.
- `isEven` returns a boolean.
- `findLarger`, `celsiusToFahrenheit`, and `createFullName` return calculated or
  formatted values.
- `countVowels` and `calculateAverage` work with string and array parameters.
- `createLessonSummary` demonstrates a function-local variable accessing a
  module-scoped constant.

## How to run

```powershell
node .\02-javascript\day-08-planned\main.js
```

## What I learned

- Parameters are named inputs that let one function work with different values.
- A `return` statement sends a value back to the code that called the function.
- Variables declared inside a function are local to that function.
- A function can read an outer-scope value, while its local variables cannot be
  accessed from outside the function.

## Verification

The script prints one result for each of the 10 functions when run with Node.js.
