import { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import { UsersAction, UsersState } from './users';

export interface State {
  entities: {
    users: UsersState;
  };
}

export type ReduxInitAction = { type: '@@INIT' };
export type Action = ReduxInitAction | UsersAction;

export type Store = ReduxStore<State, Action>;
export type Dispatch = ReduxDispatch<Action>;
