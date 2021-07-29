import { gql } from 'apollo-server';
import type { Address } from './addressType';
import type { Company } from './companyType';
import type { Post } from './postType';

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
  posts: Post[];
}

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

export { userType, User };