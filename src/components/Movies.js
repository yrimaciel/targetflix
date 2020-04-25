import Category from './Category'
import Api from '../services/api'

export default class Movies {
  render () {
    const main = document.createElement('main')

    const api = new Api()

    api.get('http://localhost:3001/categories').then(function (categories) {
      for (const category of categories) {
        const categoryComponent = new Category(category)
        main.appendChild(categoryComponent.render())
      }
    })

    return main
  }
}
