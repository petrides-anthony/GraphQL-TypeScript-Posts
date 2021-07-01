const { postsResolver } = require('./postsResolver');
const { usersResolver } = require('./usersResolver');

const resolvers = [postsResolver, usersResolver];

module.exports = {
  resolvers,
};