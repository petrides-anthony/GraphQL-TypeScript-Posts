import axios, { AxiosResponse } from 'axios';
import type { User } from '../typeDefs/types';

const usersEndpoint = 'https://jsonplaceholder.typicode.com/users'

async function getUserById(id: string): Promise<User> {

  const res = await axios.get<any, AxiosResponse<User>>(`${usersEndpoint}/${id}`);

  return res.data;
}

export default getUserById;