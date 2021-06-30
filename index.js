const { ApolloServer, gql } = require("apollo-server");
let getPosts = require('./getPosts');

const allPosts = getPosts();

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Post {
    userId: ID!
    id: ID!
    title: String!
    body: String!
  }

  type Query {
    posts: [Post]
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    posts: (root, args, context) => {
      console.log('Posts queried');
      return allPosts;
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
query HelloWorld($c: Int, $d: Int) {
  posts {
    userId
    id
    title
    body
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