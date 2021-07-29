import axios, { AxiosResponse } from 'axios';
import { Post } from '../typeDefs/types';

const postsEndpoint = 'https://jsonplaceholder.typicode.com/posts'

async function getPosts(): Promise<Post[]> {

  const res = await axios.get<any, AxiosResponse<Post[]>>(`${postsEndpoint}`);

  return res.data;
}

export default getPosts;