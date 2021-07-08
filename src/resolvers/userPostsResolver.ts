let getPostsByUserId = require('../dataFetching/getPostsByUserId');

const userPostsResolver = {
  User: {
    posts: (root: any, args: any, context: any) => {
      console.log('User Posts queried');
      return getPostsByUserId(root.id);
    },
  }
};

export { userPostsResolver };

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