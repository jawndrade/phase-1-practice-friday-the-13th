let currentMovie = {}

fetch('http://localhost:3000/movies')
    .then(resp => resp.json())
    .then(movies => {
        renderMovies(movies)
        showMovieDetails(movies[0])
        //handleSubmit()
        }
    )

//DOM selectors
const movieListNav = document.querySelector('#movie-list')
const detailedImage = document.querySelector('#detail-image')
const movieTitle = document.querySelector('#title')
const releaseYear = document.querySelector('#year-released')
const movieDescription = document.querySelector('#description')
const movieWatched = document.querySelector('#watched')
const bloodAmount = document.querySelector('#blood-amount')
const amount = document.querySelector('#amount')
const form = document.querySelector('#blood-form')
form.addEventListener('submit', handleSubmit)

//renderMovies function
function renderMovies(movies) {
    movies.forEach(movie => {
        const imgTag = document.createElement('img')
        imgTag.src = movie.image
        //console.log(imgTag)
        movieListNav.append(imgTag)
        imgTag.addEventListener('click', () => showMovieDetails(movie))
    })
}

function showMovieDetails(movie) {
    currentMovie = movie
    detailedImage.src = movie.image
    movieTitle.textContent = movie.title
    releaseYear.textContent = movie.release_year
    movieDescription.textContent = movie.description
    movieWatched.textContent = movie.watched ? "Watched" : "UnWatched"
    bloodAmount.textContent = movie.blood_amount
    movieWatched.addEventListener('click', () => toggleWatchedButton(movie))
}

function toggleWatchedButton(movie) {
    movie.watched = !movie.watched
    movieWatched.textContent = movie.watched ? "Watched" : "UnWatched"
}

function handleSubmit(e) {
    e.preventDefault()
    //console.log(e)
    currentMovie.blood_amount += parseInt(e.target[0].value)
    amount.textContent = currentMovie.blood_amount

}