import { all } from 'redux-saga/effects';
import { watchFetchUsers, watchFetchUsersIfNeeded, watchGetUser } from './users/fetch';
import watchCreateUser from './users/add';

export default function* rootSaga() {
  yield all([
    watchFetchUsersIfNeeded(),
    watchFetchUsers(),
    watchCreateUser(),
    watchGetUser(),
  ]);
}
