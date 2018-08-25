import { FETCH_USERS } from '../constants/User';
import { User } from '../../entities/User';

export const fetchUsers = (users: User[]) => ({
  action: FETCH_USERS,
  isFetching: false,
  users,
});
