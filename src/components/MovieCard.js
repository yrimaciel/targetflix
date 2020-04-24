import MovieDetails from './MovieDetails'

export default class MovieCard {
  constructor ({ id, title, imgUrl }) {
    this.id = id
    this.title = title
    this.imgUrl = imgUrl
  }

  showDetails () {
    const movieDetails = new MovieDetails()
    movieDetails.render()
  }

  render () {
    const divMovieCard = document.createElement('div')
    divMovieCard.className = 'movie-card'
    divMovieCard.style.backgroundImage = `url('${this.imgUrl}')`
    divMovieCard.onclick = this.showDetails

    const h2 = document.createElement('h2')
    h2.innerText = this.title
    divMovieCard.appendChild(h2)

    return divMovieCard
  }
}
