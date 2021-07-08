import { query } from './query';
import { postType, userType, addressType, companyType, geoLocationType } from './types';

const typeDefs = [query, postType, userType, addressType, companyType, geoLocationType];

export { typeDefs }