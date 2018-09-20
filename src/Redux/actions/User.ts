import { ADD_USER, FETCH_USERS } from '../constants/User';
import { User } from '../../entities/User';

export const fetchUsers = (users: User[]) => ({
  action: FETCH_USERS,
  isFetching: false,
  users,
});

export const addUser = (user: Partial<User>) => ({
  type: ADD_USER,
  user,
  isFetching: true,
});
