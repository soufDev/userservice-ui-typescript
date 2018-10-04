import * as actionTypes from '../constants/User';
import { User } from '../../entities/User';

export const fetchUsers = (users: User[]) => ({
  action: actionTypes.FETCH_USERS,
  isFetching: false,
  users,
});

export const addUser = (user: Partial<User>) => ({
  type: actionTypes.ADD_USER,
  user,
  isFetching: true,
});

export const getUserRequest = () => ({
  type: actionTypes.GET_USER_REQUEST,
  isFetching: true,
});

export const getchUserSuccess = (payload: Partial<User>) => ({
  type: actionTypes.GET_USER_SUCCESS,
  payload,
  isFetching: false,
});

export const getUserFailure = (error: string) => ({
  type: actionTypes.GET_USER_FAILURE,
  error,
  isFetching: false,
});
