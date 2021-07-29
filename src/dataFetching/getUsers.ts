import axios, { AxiosResponse } from 'axios';
import { User } from '../typeDefs/types';

const usersEndpoint = 'https://jsonplaceholder.typicode.com/users'

async function getUsers(): Promise<User[]> {

  const res = await axios.get<any, AxiosResponse<User[]>>(`${usersEndpoint}`);

  return res.data;
}

export default getUsers;