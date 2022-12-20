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
