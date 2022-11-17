/* Imports */

import { fetchShows } from './fetch-utils.js';
import { renderShow } from './render-utils.js';

/* Get DOM Elements */
const showsContainer = document.getElementById('shows-list');

/* State */

/* Events */

// diplay shows on page load
window.addEventListener('load', async () => {
    const shows = await fetchShows();

    // display - loop, render, append
    // loop through list of shows
    for (let show of shows) {
        // initialize a variable to the render function
        const showEl = renderShow(show);
        // append the rendered show to the shows container in html
        showsContainer.append(showEl);
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
