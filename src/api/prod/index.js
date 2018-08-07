import Axios from 'axios'

export default {
  fetchPosts () {
    return Axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.data)
  }
}