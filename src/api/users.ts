import { User } from '../entities/User';
import service from '../api/Api';

export function fetchUsers(): Promise<User> | Promise<User[]> {
  return service.get('users');
}

export function fetchUser(id: number): Promise<User> | Promise<{}> {
  return service.get(`users/${id}`);
}

export function updateUser(payload: User): Promise<User> | Promise<{}> {
  const { id, ...rest } = payload;
  return service.update(`users/${id}`, rest);
}

export function deleteUser(id: number): Promise<User> | Promise<{}> {
  return service.delete(`users/${id}`);
}
