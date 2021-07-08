import axios from 'axios';

const postsEndpoint = 'https://jsonplaceholder.typicode.com/posts'

async function getPostsByUserId(userId: number) {

  let res = await axios.get(`${postsEndpoint}/?userId=${userId}`);

  let data = res.data;
  return data;
}

module.exports = getPostsByUserId;