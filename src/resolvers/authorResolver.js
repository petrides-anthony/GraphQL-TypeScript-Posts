let getUserById = require('../dataFetching/getUserById');

const authorResolver = {
  Post: {
    author: (root, args, context) => {
      console.log('Author queried');
      return getUserById(root.userId);
    },
  }
};

module.exports = {
  authorResolver,
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