/* Imports */

import { fetchMovies, fetchShows } from './fetch-utils.js';
import { renderMovie, renderShow } from './render-utils.js';

/* Get DOM Elements */
const showsContainer = document.getElementById('shows-list');
const moviesContainer = document.getElementById('movies-list');

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

// display movies on page load
window.addEventListener('load', async () => {
    const movies = await fetchMovies();

    for (let movie of movies) {
        const movieEl = renderMovie(movie);
        moviesContainer.append(movieEl);
    }
    console.log('hello');
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
