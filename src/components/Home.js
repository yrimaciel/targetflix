import Header from './Header'
import Movies from './Movies'

export default class Home {
  render () {
    const header = new Header()

    const headerHtml = header.render()

    const movies = new Movies()

    const moviesHtml = movies.render()

    document.querySelector('.app').innerHTML = headerHtml + moviesHtml
  }
}
