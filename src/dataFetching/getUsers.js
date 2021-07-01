const axios = require('axios');

const usersEndpoint = 'https://jsonplaceholder.typicode.com/users'

async function getUsers() {

  let res = await axios.get(`${usersEndpoint}`);

  let data = res.data;
  return data;
}

module.exports = getUsers;