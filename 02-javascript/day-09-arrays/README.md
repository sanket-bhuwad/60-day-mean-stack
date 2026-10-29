# Day 9: Arrays and array transformations

## Objective

Practise reading array values by index, iterating over arrays, and creating
transformed or selected results with `map`, `filter`, and `find`.

## Practice

- Read the first, last, and a specific item by index.
- Iterate over an array with `for...of` and `forEach`.
- Use `map` to create a new array of transformed values.
- Use `filter` to keep every item that matches a condition.
- Use `find` to return the first matching item.

## How to run

```powershell
node .\02-javascript\day-09-arrays\main.js
```

## What I learned

- Array indexes start at zero, so the last item is at `length - 1`.
- Iteration is useful when an operation needs to run for every item.
- `map` returns a new array with one transformed value for each input item.
- `filter` returns a new array containing all matching items.
- `find` returns the first matching item, or `undefined` when there is no match.

## Verification

The script prints the indexed values, iteration results, and the output of each
array transformation when run with Node.js.
