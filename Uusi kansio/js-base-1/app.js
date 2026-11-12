// Kahvila Kaarna – Lecture 5 hands-on.
// Edit only this file. Don't touch index.html or style.css.
//
// Open index.html in the browser and keep DevTools open (F12) on the Console tab.
// Do the steps in order. After each step, save and reload the page.
//
// Python → JavaScript reminders:
//   for (const x of list)   is Python's   for x in list
//   for (const i in list)   gives the indexes as strings. You almost never want it.
//   ===                     instead of ==
//   []  and  {}             are TRUE in JavaScript (empty, but still true)

console.log('app.js is loaded');


// ─── The page ──────────────────────────────────────────────────────────────

// STEP 1 · Read the page
// a) Find every menu card:   document.querySelectorAll('#menu-list article')
// b) Loop over them with for...of and console.log each card's name (its h3).
// c) Put the text "Showing 6 of 6" into the element with id menu-status.
//    Use the real number from your list, not a 6 you typed.
//    Hint: a list of elements has .length, like len() in Python.



// STEP 2 · Today's opening hours
// Each row in the opening hours table has data-days, e.g. data-days="1 2 3 4 5".
// a) Get today's weekday number:   new Date().getDay()
//    Careful: Sunday is 0 and Saturday is 6. (Python's weekday() starts from Monday = 0.)
// b) Find the row whose data-days includes today's number.
//    row.dataset.days gives the attribute as a string; .split(' ') makes a list.
// c) Add the class "today" to that row (classList.add).
// d) Write "Today we're open 7.30–17.00." into #today-hours,
//    taking the hours from the row's second cell (row.cells[1]).



// STEP 3 · Filter the menu
// Each filter button has data-filter: "all", "vegan" or "gluten-free".
// Each card has data-diet, e.g. data-diet="vegan gluten-free" (or "" for neither).
// a) Add a click listener to each of the three filter buttons.
// b) In the listener: set aria-pressed="true" on the clicked button and "false" on the others.
// c) Loop over the cards. Hide the ones that don't match:   card.hidden = true
//    (and card.hidden = false for the ones that do). "all" shows everything.
// d) Update #menu-status: "Showing 3 of 6".
// Test with the keyboard only: Tab to a button, press Enter or Space.



// ─── Lists that change ─────────────────────────────────────────────────────

// STEP 4 · Add to order (closures)
// a) Loop over every button with the class "order".
// b) For each button, make a counter:   let count = 0;
//    then add a click listener that adds 1 to count
//    and writes "1 in your order", "2 in your order"... into that card's .count element.
//    Hint: button.closest('article') finds the card the button is in.
// Each button now remembers its own count. That memory is a closure.



// STEP 5 · Today's special (and the bug)
// index.html has an empty menu card inside <template id="card-template">.
// Today's special arrives as data, the way it would come from a server:
//
//   const special = {
//     name: 'Blueberry pie',
//     description: 'Today only: wild blueberries from Kuortane under a crumble top, with vanilla sauce.',
//     price: '5,50 €',
//     diet: '',
//   };
//
// a) Add a click listener to #add-special. In it:
//      - copy the empty card:
//          const template = document.querySelector('#card-template');
//          const card = template.content.firstElementChild.cloneNode(true);
//      - fill it from the special object: the h3, .description and .price get
//        textContent, and card.dataset.diet gets special.diet
//      - give it the class "special" (it gets a dashed border)
//      - add it to the list:   document.querySelector('#menu-list').append(card);
//    Then disable the button so the special can only be added once.
// b) Click "Add to order" on the blueberry pie. Nothing happens. Why?
// c) Fix it with event delegation: delete your step 4 code and put
//    ONE click listener on #menu-list instead.
//      - event.target.closest('.order') tells you which button was clicked (or null)
//      - keep each card's count in the card itself:   card.dataset.count
//        (the closure can't hold it any more, because there's only one listener now)



// STEP 6 · The order summary
// Write a function updateSummary() and call it whenever the order changes.
// a) Go through the cards that have a count, and add up the number of items and the total price.
// b) The price is text like "3,50 €". Turn it into a number:
//      parseFloat(text.replace(',', '.'))
// c) Show it in #order-summary, e.g. "3 items, 9,80 €". This formats a Finnish price:
//      new Intl.NumberFormat('fi-FI', { style: 'currency', currency: 'EUR' }).format(total)
// d) Nothing in the order? Show "Nothing added yet."



// ─── Done early? ────────────────────────────────────────────────────────────
// 1. Choose "Vegan", then show today's special. The blueberry pie appears even
//    though it isn't vegan. Make the current filter apply to new cards too.
// 2. Make a "Clear order" button with document.createElement('button'), append it
//    to #order, and make it reset every count. (Set its type to "button".)
// 3. Money in floating point: try 0.1 + 0.2 in the console. Same as Python!
//    Change step 6 to count in cents (whole numbers) and divide only when you show it.
