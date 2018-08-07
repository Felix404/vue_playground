import Axios from 'axios'

export default {
  fetchPosts () {
    return Axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        let result = [];
        for(let i =0;i<10;i++){
            result.push(response.data[getRandomInt(0,response.data.length)]);
        }
        return result;
      });
  }
}

const getRandomInt = (min, max)  => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}