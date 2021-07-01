let getPosts = require('../dataFetching/getPosts');

const postsResolver = {
  Query: {
    posts: (root, args, context) => {
      console.log('Posts queried');
      return getPosts();
    },
  }
};

module.exports = {
  postsResolver,
};

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
```
*/