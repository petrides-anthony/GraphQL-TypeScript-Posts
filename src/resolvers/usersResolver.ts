let getUsers = require('../dataFetching/getUsers');

const usersResolver = {
  Query: {
    users: (root: any, args: any, context: any) => {
      console.log('Users queried');
      return getUsers();
    }
  }
};

export { usersResolver };

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