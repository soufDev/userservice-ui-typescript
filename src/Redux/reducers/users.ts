import { UserState as State, UsersAction as Action } from '../../types/users';

function users(
  state: State = { users: [], isFetching: false },
  action: Action
) {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return {
        ...state,
        users: [],
        isFetching: true
      };
    case 'FETCH_USERS_SUCCESS':
      return {
        users: action.payload.reverse(),
        isFetching: false
      };
    case 'FETCH_USERS_FAILURE':
      return {
        users: [],
        isFetching: false
      };
    case 'ADD_USER':
    case 'ADD_USER_REQUEST':
      return {
        ...state,
        isFetching: true,
      };
    case 'ADD_USER_SUCCESS':
      return {
        ...state,
        isFetching: false,
        users: { ...users, ...action.payload }
      };
    case 'ADD_USER_FAILURE':
      return {
        ...state,
        isFetching: false,
        message: action.payload,
      };
    default: return state;
  }
}

export default users;
