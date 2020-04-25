import axios from 'axios'

export default class Api {
  get (url) {
    return axios.get(url)
      .then(response => response.data)
  }
}
