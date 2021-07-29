import type { Post, User } from "../typeDefs/types";

import getUserById from '../dataFetching/getUserById';

const authorResolver = {
  Post: {
    author: (root: Post): Promise<User> => {
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