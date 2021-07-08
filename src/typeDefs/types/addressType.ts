import { gql } from 'apollo-server';

const addressType = gql`
  type Address {
    street: String!
    suite: String!
    city: String!
    zipcode: String!
    geo: Geolocation
  }
`;

export { addressType };