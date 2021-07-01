const { gql } = require("apollo-server");

const query = gql`
  type Query {
    posts: [Post]
    users: [User]
  }
`;

module.exports = {
  query,
};