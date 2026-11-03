# Day 15: Errors and debugging

## Objective

Practise handling runtime errors with `try...catch`, and use browser DevTools,
console output, and breakpoints to find and fix problems.

## Practice

- Parse user-provided JSON safely with `try...catch`.
- Validate the parsed value and throw a meaningful error for invalid data.
- Use `finally` for cleanup that should happen whether an operation succeeds or
  fails.
- Use `console.table` to inspect processed data.
- Place a `debugger` statement where a breakpoint can be added in DevTools.

## How to run

```powershell
node .\02-javascript\day-15-errors-debugging\main.js
```

To practise with browser DevTools, open `main.js` in a browser-based JavaScript
runner or add it to an HTML page, then enable **Sources > Pause on exceptions**
and place a breakpoint on the `debugger` statement.

## What I learned

- `try...catch` prevents expected runtime errors from stopping the whole
  program.
- `throw new Error(...)` reports invalid input with a useful message.
- `finally` runs after both successful and failed operations.
- `console.table` makes collections easier to inspect while debugging.
- A `debugger` statement pauses execution when DevTools is open.

## Verification

Run the command above and confirm that the valid input is processed, malformed
JSON is reported without terminating the program, and the cleanup message is
printed for both cases.
