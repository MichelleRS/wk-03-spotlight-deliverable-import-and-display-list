# Week 03 Spotlight Deliverable Import and Display List

## Goal

Asynchronously fetch and render 4 separate lists of things to the same index.html file.

## Workflow

-   Connect Supabase CDN to index.html
-   In fetch-utils set up Supabase client with KEY and URL

### Repeat the following process 4 times:

#### In Supabase:

-   come up with a domain for this data (ex: 'cats') - create a 'cats' table with at least 4 columns
-   create at least three rows in your table.

#### In app:

-   in render-utils.js, write a render function (with at least a `div.cat-item` and two `p` tags) for your domain accepting one object and returning a DOM element
-   in fetch-utils.js, add a fetch function called `getCats()` to fetch all cats asynchronously
-   in app.js, use `window.addEventListener('load', () => {})` to fetch and display your data from Supabase
-   in load event listener, first fetch the data, then, loop through the fetched array array, and for each object, render and appends a styled cat element to the container element you grabbed from the DOM.

_Note_: do this process one domain table at a time. Do not write 4 domain tables, then 4 render functions, etc. Please work through the first domain table, then the first render function, then the first display function.

## Table Objects

1. Shows: title, release date, seasons
2. Movies: title, release date, rating
3. Books: title, author, publication date
4. Albums: artist, release year, genre (array)
