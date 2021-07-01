const { gql } = require("apollo-server");

const geoLocationType = gql`
  type Geolocation {
    lat: String!
    lng: String!
  }
`;

module.exports = {
  geoLocationType,
};