# Day 14: Modern JavaScript

## Objective

Practise destructuring, spread and rest syntax, template literals, and ES
modules by building a small order summary.

## Practice

- Import product data and a formatting helper from another module.
- Use object and array destructuring to read order details.
- Use spread syntax to add an item without changing the original order.
- Use rest syntax to collect the remaining item arguments.
- Use a template literal to format the order summary.

## How to run

```powershell
node .\02-javascript\day-14-modern-javascript\main.mjs
```

## What I learned

- Destructuring extracts values from arrays and objects into named variables.
- Spread creates a new array or object from existing values.
- Rest collects remaining values into an array.
- Template literals make interpolated multi-line strings readable.
- ES modules share values explicitly through `export` and `import`.

## Verification

Run the command above and confirm that it prints the customer, item count,
item names, and total for the original and updated orders.
