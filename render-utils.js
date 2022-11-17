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

// movie
export function renderMovie(movie) {
    // create div container for each movie
    const div = document.createElement('div');

    //  ELEMENTS
    // add title
    const title = document.createElement('h2');
    title.textContent = movie.title;

    //  add release date
    const release = document.createElement('p');
    release.textContent = `Released on ${movie.release_date}`;

    // add rating
    const rating = document.createElement('p');
    rating.textContent = `${movie.rating} rating`;

    // append elements to div container
    div.append(title, release, rating);

    // return div container
    return div;
}

// book
export function renderBook(book) {
    // create div container for each book
    const div = document.createElement('div');

    // ELEMENTS
    // add title
    const title = document.createElement('h2');
    title.textContent = book.title;

    // add author
    const author = document.createElement('p');
    author.textContent = book.author;

    // add publication date
    const date = document.createElement('p');
    date.textContent = `Published on ${book.publication_date}`;

    // append elements to div container
    div.append(title, author, date);

    // return div container
    return div;
}

// album
export function renderAlbum(album) {
    // create div container for each album
    const div = document.createElement('div');

    // ELEMENTS
    // add album title
    const title = document.createElement('h2');
    title.textContent = album.album_title;

    // add artist
    const artist = document.createElement('p');
    artist.textContent = `Artist: ${album.artist}`;

    // add release year
    const year = document.createElement('p');
    year.textContent = `Released in: ${album.release_year}`;

    // render array for genre
    const ul = document.createElement('ul');
    for (let genre of album.genre) {
        const li = document.createElement('li');
        li.textContent = genre;
        ul.append(li);
    }
    ul.textContent = `Genre: ${album.genre}`;

    // append elements to div container
    div.append(title, artist, year, ul);

    // return div container
    return div;
}
