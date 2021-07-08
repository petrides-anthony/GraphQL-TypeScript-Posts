import { gql } from 'apollo-server';

const userType = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    address: Address!
    phone: String!
    website: String!
    company: Company!
    posts: [Post]!
  }
`;

export { userType };