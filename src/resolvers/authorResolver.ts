let getUserById = require('../dataFetching/getUserById');

const authorResolver = {
  Post: {
    author: (root: any, args: any, context: any) => {
      console.log('Author queried');
      return getUserById(root.userId);
    },
  }
};

export { authorResolver };

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