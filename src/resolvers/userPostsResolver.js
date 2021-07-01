let getPostsByUserId = require('../dataFetching/getPostsByUserId');

const userPostsResolver = {
  User: {
    posts: (root, args, context) => {
      console.log('User Posts queried');
      return getPostsByUserId(root.id);
    },
  }
};

module.exports = {
  userPostsResolver,
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