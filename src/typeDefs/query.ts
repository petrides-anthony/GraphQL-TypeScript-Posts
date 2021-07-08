import { gql } from 'apollo-server';

const query = gql`
  type Query {
    posts: [Post]
    users: [User]
  }
`;

export { query };