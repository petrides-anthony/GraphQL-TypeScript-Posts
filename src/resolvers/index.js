const { postsResolver } = require('./postsResolver');
const { usersResolver } = require('./usersResolver');
const { authorResolver } = require('./authorResolver');
const { userPostsResolver } = require('./userPostsResolver');

const resolvers = [postsResolver, usersResolver, authorResolver, userPostsResolver];

module.exports = {
  resolvers,
};