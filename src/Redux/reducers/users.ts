import { UsersState as State, UsersAction as Action } from '../../types/users';

function users(
  state: State = { users: [], isFetching: false },
  action: Action
) {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return {
        ...state,
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
    default: return state;
  }
}

export default users;
