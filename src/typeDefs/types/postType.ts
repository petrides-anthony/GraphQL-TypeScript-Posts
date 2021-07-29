import { gql } from 'apollo-server';
import type { User } from './userType';

interface Post {
  userId: string;
  id: string;
  title: string;
  body: string;
  author: User;
}

const postType = gql`
  type Post {
    userId: ID!
    id: ID!
    title: String!
    body: String!
    author: User!
  }
  `;

export { postType, Post };