import Api from '../services/api'
import { render } from 'preact'
import { html } from 'htm/preact'

export default class MovieDetails {
  constructor (id) {
    this.id = id
  }

  closeDetails () {
    render(null, document.querySelector('#movie-details'))
  }

  render () {
    const api = new Api()

    api.get(`http://localhost:3001/movies/${this.id}`).then((movie) => {
      const content = html`<aside class="movie-details">
      <h1>Detalhes do filme</h1>
      <button class="close" onclick="${this.closeDetails}">x</button>
      <h2>${movie.title}</h2>
      <img class="movie-image" src="${movie.imgUrl}" />
      <p>Ano de lançamento: ${movie.year}</p>
      <p>Diretor: ${movie.director}</p>
      <p>Gênero: ${movie.gender}</p>
      <p>Avaliação: ${movie.rate}</p>
      <p>Sinopse: ${movie.synopsis}</p>
      <p>Atores: ${movie.actors.map((actor) => {
        return actor.name
      })}</p>
      <img class="actor-image" src="${movie.actors.map((actor) => {
        return actor.imgUrl
      })}" />
      </aside>`

      render(content, document.querySelector('#movie-details'))
    })
  }
}
