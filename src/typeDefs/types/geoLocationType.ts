import { gql } from 'apollo-server';

const geoLocationType = gql`
  type Geolocation {
    lat: String!
    lng: String!
  }
`;

export { geoLocationType };