import { User } from '../entities/User';

export interface UsersState {
  users: User[];
  isFetching: boolean;
}

export type UsersAction =
  | { type: 'FETCH_USERS' }
  | { type: 'FETCH_USERS_IF_NEEDED' }
  | { type: 'FETCH_USERS_REQUEST' }
  | { type: 'FETCH_USERS_SUCCESS', payload: User[] }
  | { type: 'FETCH_USERS_FAILURE' };
