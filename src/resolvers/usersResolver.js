let getUsers = require('../dataFetching/getUsers');

const allUsers = getUsers();

const usersResolver = {
  Query: {
    users: (root, args, context) => {
      console.log('Users queried');
      return allUsers;
    }
  }
};

module.exports = {
  usersResolver,
};

/*
Try
```
query Users {
  users {
    id
    name
    username
    email
    address {
      street
      suite
      city
      zipcode
      geo {
        lat
        lng
      }
    }
    phone
    website
    company {
      name
      catchPhrase
      bs
    }
  }
}
```
*/