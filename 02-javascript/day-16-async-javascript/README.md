# Day 16: Async JavaScript

## Objective

Understand callbacks, promises, `async`/`await`, and the event loop by
simulating asynchronous user loading.

## Practice

- Use a callback with the Node-style `(error, value)` signature.
- Wrap callback-based work in a promise.
- Consume the promise with both `.then()` and `async`/`await`.
- Compare synchronous code, promise microtasks, and timer callbacks.
- Handle asynchronous errors with `catch`.

## How to run

```powershell
node .\02-javascript\day-16-async-javascript\main.js
```

## What I learned

- Callbacks run later when the asynchronous operation completes.
- Promises represent a future result and can be chained.
- `async` functions return promises, and `await` pauses that function until a
  promise settles.
- Promise callbacks are microtasks and run before timer callbacks after the
  current synchronous code finishes.

## Verification

Run the command above. Confirm that `Main script finished...` appears before
the asynchronous examples, and that the event loop order is:

```text
synchronous -> promise microtask -> timer
```
