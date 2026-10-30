# Day 11: Task list mini-project

Build a small browser task list that supports adding tasks, marking tasks as
complete, deleting tasks, and preserving the list in browser storage.

## Features

- Add a task with the form.
- Mark a task complete or active with its checkbox.
- Delete a task with its delete button.
- Restore tasks after refreshing the page with `localStorage`.

## How to run

Open `index.html` in a browser, or serve this folder with any local static
server.

```powershell
cd .\02-javascript\day-11-task-list
```

## What I learned

- DOM events connect form controls and buttons to application behavior.
- Rendering from one state array keeps the UI synchronized after every action.
- `localStorage` stores JSON strings, so task data must be serialized and parsed.

## Verification

Add a task, mark it complete, delete it, and refresh the page to confirm that
the remaining tasks are persisted.
