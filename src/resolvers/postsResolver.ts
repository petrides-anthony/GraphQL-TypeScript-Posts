import getPosts from '../dataFetching/getPosts';

const postsResolver = {
  Query: {
    posts: (root: any, args: any, context: any) => {
      console.log('Posts queried');
      return getPosts();
    },
  }
};

export { postsResolver };

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