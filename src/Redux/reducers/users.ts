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
        users: [ ...state.users, action.payload ]
      };
    case 'ADD_USER_FAILURE':
      return {
        ...state,
        isFetching: false,
        message: action.payload,
      };
    case 'GET_USER_FAILURE':
      return {
        ...state,
        isFetching: true,
      };
    case 'GET_USER_SUCCESS':
      console.log('GET_USER_SUCCESS', action.payload);
      return {
        ...state,
        isFetching: false,
        user: action.payload,
      };
    case 'GET_USER_FAILURE': 
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default: return state;
  }
}

export default users;
