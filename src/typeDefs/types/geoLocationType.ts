import { gql } from 'apollo-server';

interface GeoLocation {
  lat: string;
  lng: string;
}

const geoLocationType = gql`
  type Geolocation {
    lat: String!
    lng: String!
  }
`;

export { geoLocationType, GeoLocation };