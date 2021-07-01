let getPosts = require('../dataFetching/getPosts');

const allPosts = getPosts();

const postsResolver = {
  Query: {
    posts: (root, args, context) => {
      console.log('Posts queried');
      return allPosts;
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