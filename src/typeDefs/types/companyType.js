const { gql } = require("apollo-server");

const companyType = gql`
  type Company {
    name: String!
    catchPhrase: String!
    bs: String!
  }
`;

module.exports = {
  companyType,
};