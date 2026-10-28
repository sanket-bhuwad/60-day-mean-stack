# 60-Day MEAN Stack Career Restart

This repository is a structured learning and portfolio workspace for my
60-day return to professional software development. It is designed to show
consistent practice, production-minded habits, and progressively stronger
MEAN stack projects.

## Repository map

| Track | Focus |
| --- | --- |
| [`01-foundations`](01-foundations) | HTML, CSS, accessibility, responsive UI |
| [`02-javascript`](02-javascript) | JavaScript fundamentals, browser APIs, and algorithms |
| [`03-mongodb`](03-mongodb) | Data modelling, queries, indexes, and aggregation |
| [`04-express`](04-express) | REST APIs, middleware, validation, and error handling |
| [`05-angular`](05-angular) | Components, routing, forms, services, and state |
| [`06-node`](06-node) | Node.js runtime, tooling, testing, and architecture |
| [`07-projects`](07-projects) | Integrated MEAN stack portfolio projects |
| [`docs`](docs) | Roadmap, engineering standards, and learning records |
| [`assets`](assets) | Shared static assets used by lessons |

## 60-day roadmap

The complete day-by-day plan is in [`docs/roadmap.md`](docs/roadmap.md).
Every lesson should contain a small README describing its objective,
implementation notes, and how to run it.

## Current progress

- [x] Days 1-4: HTML and CSS foundations
- [x] Days 5-7: JavaScript fundamentals and loops
- [ ] Days 8-14: JavaScript problem solving and browser APIs
- [ ] Days 15-21: MongoDB
- [ ] Days 22-28: Express and REST APIs
- [ ] Days 29-42: Angular
- [ ] Days 43-49: Node.js engineering practices
- [ ] Days 50-60: Integrated portfolio projects

## Running the current exercises

JavaScript lessons run without dependencies:

```powershell
node .\02-javascript\day-07-loops\main.js
```

Browser lessons can be opened by opening the `index.html` file inside the
relevant day folder.

## Engineering standards

- Keep each day focused on one measurable outcome.
- Use meaningful names and small, reviewable commits.
- Include validation, error handling, and tests as the stack becomes capable.
- Do not commit credentials, local environment files, build output, or
  dependency folders.
- Record what was learned and what remains unclear in the day's README.

## About this repository

This is a public learning portfolio, not a collection of copied tutorials.
Examples are implemented incrementally and will evolve into production-style
applications with clear requirements, API contracts, tests, and deployment
notes.
