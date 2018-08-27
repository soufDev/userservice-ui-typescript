import { combineReducers } from 'redux';
import users from './users';

const reducers = combineReducers({
  users
});

const rootReducers = combineReducers({
  entities: reducers
});

export default rootReducers;
