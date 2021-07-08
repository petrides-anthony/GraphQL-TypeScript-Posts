import { gql } from 'apollo-server';

const companyType = gql`
  type Company {
    name: String!
    catchPhrase: String!
    bs: String!
  }
`;

export { companyType };