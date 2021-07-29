import axios, { AxiosResponse } from 'axios';
import { Post, User } from '../typeDefs/types';

const postsEndpoint = 'https://jsonplaceholder.typicode.com/posts'

async function getPostsByUserId(userId: User["id"]): Promise<Post[]> {

  const res = await axios.get<any, AxiosResponse<Post[]>>(`${postsEndpoint}/?userId=${userId}`);

  return res.data;
}

export default getPostsByUserId;