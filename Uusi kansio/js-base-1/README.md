# js-base-1 – Kahvila Kaarna gets JavaScript

The same fictional café as in the CSS lectures, now with a menu you can filter and an order list.

1. Open this folder in VS Code.
2. Open `index.html` in Chrome or Firefox (double-click, or use Live Server).
3. Open DevTools (F12) and choose the **Console** tab. You should see `app.js is loaded`.
4. Edit only `app.js`. The six steps are written in it as comments. Save and reload after each step.

Steps 1–3 use the DOM and events parts of the lecture, steps 4–6 the "lists that change" part. The lecture slides have the code for every step if you get stuck.

`solution.js` is one possible answer. It goes to Moodle after the lecture: to try it, change `app.js` to `solution.js` in the `<script>` tag in `index.html`.

## Stuck?

- **Nothing happens at all?** Look for red errors in the Console. The message and the line number tell you where.
- **`null` errors** (`Cannot read properties of null`) mean `querySelector` found nothing. Check the selector against the Elements tab.
- **Is your listener there?** Select the button in the Elements tab. Chrome: the *Event Listeners* tab on the right. Firefox: the small `event` badge next to the element.
- **Want to stop inside your code?** Write `debugger;` on a line, reload with DevTools open, and look at the variables.
