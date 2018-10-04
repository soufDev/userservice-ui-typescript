import { User } from '../entities/User';

export interface UserState {
  users?: User[];
  isFetching?: boolean;
  user?: Partial<User>;
  message?: string;
}

export interface ActionUserType {
  type: string;
  payload?: User | User[];
  id: string;
}
export type UsersAction =
  { type: 'FETCH_USERS' }
  | { type: 'FETCH_USERS_IF_NEEDED' }
  | { type: 'FETCH_USERS_REQUEST' }
  | { type: 'FETCH_USERS_SUCCESS', payload: User[] }
  | { type: 'FETCH_USERS_FAILURE' }
  | { type: 'ADD_USER', payload: Partial<User>}
  | { type: 'ADD_USER_REQUEST' }
  | { type: 'ADD_USER_SUCCESS', payload: User }
  | { type: 'ADD_USER_FAILURE', payload: string }
  | { type: 'GET_USER', id: string }
  | { type: 'GET_USER_REQUEST' }
  | { type: 'GET_USER_SUCCESS', payload: Partial<User> }
  | { type: 'GET_USER_FAILURE', error: string };
