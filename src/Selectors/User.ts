import { UserState } from '../types/users';
import { State } from '../types';

export function selectUsers(state: State): UserState {
  console.log('entities ', state.entities.users);
  return state.entities.users;
}
