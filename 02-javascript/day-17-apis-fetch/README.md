# Day 17: APIs and `fetch`

## Objective

Retrieve data from a public API with `fetch` and display it in a browser page.

## Practice

- Send an HTTP request with `fetch`.
- Handle loading, success, empty, and error states.
- Transform API data into accessible user cards.
- Retry a failed request without reloading the page.

## How to run

Open [`index.html`](./index.html) in a browser. An internet connection is
required to request data from JSONPlaceholder.

## What I learned

- `fetch` returns a promise that resolves to a `Response`.
- A response must be checked with `response.ok` before reading its JSON body.
- Rendering a loading and error state makes asynchronous UI easier to understand.
- User-controlled or remote text should be inserted as text, not HTML.

## Verification

Confirm that the page initially displays a loading message, then shows user
cards with names, usernames, email addresses, and locations. Use the retry
button after an error to request the data again.
