import { gql } from 'apollo-server';

const postType = gql`
  type Post {
    userId: ID!
    id: ID!
    title: String!
    body: String!
    author: User!
  }
  `;

export { postType };