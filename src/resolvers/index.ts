import { postsResolver } from './postsResolver';
import { usersResolver } from './usersResolver';
import { authorResolver } from './authorResolver';
import { userPostsResolver } from './userPostsResolver';

const resolvers = [postsResolver, usersResolver, authorResolver, userPostsResolver];

export { resolvers };