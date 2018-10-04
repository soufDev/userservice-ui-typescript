import { UserState } from '../types/users';
import { State } from '../types';
import { User } from '../entities/User';

export function selectUsers(state: State): UserState {
  return state.entities.users;
}

export function selectUser(state: State): Partial<User> {
  console.log(state);
  return state.entities.users.user;
}
