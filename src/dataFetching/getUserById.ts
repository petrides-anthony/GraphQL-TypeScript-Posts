import axios from 'axios';

const usersEndpoint = 'https://jsonplaceholder.typicode.com/users'

async function getUserById(id: number) {

  let res = await axios.get(`${usersEndpoint}/${id}`);

  let data = res.data;
  return data;
}

module.exports = getUserById;