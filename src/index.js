fetch('http://localhost:3000/movies')
    .then(resp => resp.json())
    .then(movies => renderMovies(movies))

//DOM selectors
const movieListNav = document.querySelector('#movie-list')

//renderMovies function
function renderMovies(movies) {
    movies.forEach(movie => {
        const imgTag = document.createElement('img')
        imgTag.src = movie.image
        //console.log(imgTag)
        movieListNav.append(imgTag)
        imgTag.addEventListener('click', showMovieDetails(movie))
    })
}

function showMovieDetails(movie) {
    const detailedImage = document.querySelector('detail-image')
    detailedImage.src = movie.image
    const movieTitle = document.querySelector('#title')
    movieTitle.textContent = movie.title
    const releaseYear = document.querySelector('#year-released')
    releaseYear.textContent = movie.release_year
    const movieDescription = document.querySelector('#description')
    movieDescription.textContent = movie.description
    const movieWatched = document.querySelector('#watched')
    movieWatched.textContent = movie.watched ? "Watched" : "UnWatched"
    const bloodAmount = document.querySelector('#blood-amount')
    bloodAmount.textContent = movie.blood_amount
    movieWatched.addEventListener('click', () => toggleWatchedButton(movie))
}

