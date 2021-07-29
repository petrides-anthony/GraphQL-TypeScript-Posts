import { gql } from 'apollo-server';
import type { GeoLocation } from './geoLocationType';

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoLocation
}

const addressType = gql`
  type Address {
    street: String!
    suite: String!
    city: String!
    zipcode: String!
    geo: Geolocation
  }
`;

export { addressType, Address };