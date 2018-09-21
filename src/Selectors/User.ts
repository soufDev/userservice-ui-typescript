import { UserState } from '../types/users';
import { State } from '../types';

export function selectUsers(state: State): UserState {
  return state.entities.users;
}
