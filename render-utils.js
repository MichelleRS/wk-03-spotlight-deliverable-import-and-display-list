// show
export function renderShow(show) {
    // create div container for each show
    const div = document.createElement('div');

    // ELEMENTS
    // add title
    const title = document.createElement('h2');
    title.textContent = show.title;

    // add release date
    const release = document.createElement('p');
    release.textContent = `Released in ${show.release_date}`;

    // add seasons
    const seasons = document.createElement('p');
    seasons.textContent = `${show.seasons} seasons`;

    // append elements to div container
    div.append(title, release, seasons);

    // return div container
    return div;
}
