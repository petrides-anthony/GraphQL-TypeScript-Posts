const { query } = require("./query");
const { postType, userType, addressType, companyType, geoLocationType } = require("./types");

const typeDefs = [query, postType, userType, addressType, companyType, geoLocationType ];

module.exports = {
  typeDefs,
};