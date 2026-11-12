# Day 13: DOM and events

## Objective

Make a task list interactive with DOM events. Tasks can be added, completed,
and deleted without reloading the page.

## Features

- Submit the form to add a task.
- Use the checkbox `change` event to toggle completion.
- Use event delegation on the list to delete tasks with a button click.
- Render the task list and remaining-task count from JavaScript.
- Persist tasks in `localStorage` and restore them on refresh.

## How to run

Open [index.html](./index.html) in a browser. No build step is required.

## What I learned

- `querySelector` selects the DOM elements an interaction needs.
- `addEventListener` connects user actions to application behavior.
- Event delegation lets one list listener handle dynamically rendered buttons.
- `preventDefault` stops the form submission from reloading the page.

## Verification

Add a task, mark it complete, delete it, and refresh the page to confirm that
the remaining tasks are persisted.
