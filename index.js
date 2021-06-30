const { ApolloServer, gql } = require("apollo-server");
let getPosts = require('./getPosts');
let getUsers = require('./getUsers');

const allPosts = getPosts();
const allUsers = getUsers();

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Post {
    userId: ID!
    id: ID!
    title: String!
    body: String!
  }

  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    address: Address!
    phone: String!
    website: String!
    company: Company!
  }

  type Address {
    street: String!
    suite: String!
    city: String!
    zipcode: String!
    geo: Geolocation
  }

  type Geolocation {
    lat: String!
    lng: String!
  }

  type Company {
    name: String!
    catchPhrase: String!
    bs: String!
  }

  type Query {
    posts: [Post]
    users: [User]
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    posts: (root, args, context) => {
      console.log('Posts queried');
      return allPosts;
    },
    users: (root, args, context) => {
      console.log('Users queried');
      return allUsers;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});


/*
Try querying
```
# Write your query or mutation here
query Posts {
  posts {
    userId
    id
    title
    body
  }
}

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

With variables:
```
{
  "c": 5,
  "d": 7
}
```

*/