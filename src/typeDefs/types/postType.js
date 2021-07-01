const { gql } = require("apollo-server");

const postType = gql`
  type Post {
    userId: ID!
    id: ID!
    title: String!
    body: String!
  }
  `;

module.exports = {
  postType,
};