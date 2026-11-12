# Day 23: Classes and modules

## Objective

Use classes and modules, then convert the task tracker model from JavaScript
to TypeScript.

## Practice

- Keep task state inside a `Task` class.
- Manage tasks with a typed `TaskTracker` class.
- Import the model and tracker from separate modules.
- Filter tasks without mutating the original collection.

## How to run

Compile the modules with:

```bash
tsc --strict --target ES2020 --module commonjs main.ts task.ts tracker.ts
node main.js
```
