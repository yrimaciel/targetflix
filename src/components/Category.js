import MovieCard from './MovieCard'

export default class Category {
  constructor ({ id, title, movies }) {
    this.id = id
    this.title = title
    this.movies = movies
  }

  render () {
    const section = document.createElement('section')
    const h1 = document.createElement('h1')
    h1.innerText = this.title
    section.appendChild(h1)

    const divCarousel = document.createElement('div')
    divCarousel.className = 'carousel'

    for (const movieItem of this.movies) {
      const movieCard = new MovieCard(movieItem)
      section.appendChild(movieCard.render())
    }

    return section
  }
}
