import { UsersState } from '../types/users';
import { State } from '../types';

export function selectUsers(state: State): UsersState {
  return state.entities.users;
}
