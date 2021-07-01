const axios = require('axios');

const postsEndpoint = 'https://jsonplaceholder.typicode.com/posts'

async function getPosts() {

  let res = await axios.get(`${postsEndpoint}`);

  let data = res.data;
  return data;
}

module.exports = getPosts;