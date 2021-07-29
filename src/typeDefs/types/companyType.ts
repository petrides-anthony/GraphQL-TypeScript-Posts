import { gql } from 'apollo-server';

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

const companyType = gql`
  type Company {
    name: String!
    catchPhrase: String!
    bs: String!
  }
`;

export { companyType, Company };