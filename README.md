# sum two

A single-page static web app that adds two numbers in the browser using vanilla HTML, CSS, and JavaScript.

## Scope
- Two numeric inputs
- Calculate action via form submit button
- Inline result display on the same page
- Graceful validation message for invalid or empty inputs
- No backend, no database, no external libraries

## Run locally
Because this is a static app, you can run it in either of these ways:

### Option 1: Open directly
Open `index.html` in any modern browser.

### Option 2: Serve locally (recommended)
From the project directory:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Usage
1. Enter two numbers.
2. Click **Calculate**.
3. See either:
   - `Result: <sum>` when inputs are valid, or
   - a clear validation error when either input is invalid/empty.

## Browser support
Tested for modern Chromium, Firefox, and Safari versions with JavaScript enabled.

## Demo purpose
This project is intentionally minimal for learning and demonstration of basic form handling, validation, and DOM updates.
