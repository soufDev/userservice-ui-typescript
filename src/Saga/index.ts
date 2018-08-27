import { all } from 'redux-saga/effects';
import { watchFetchUsers, watchFetchUsersIfNeeded } from './users/fetch';

export default function* rootSaga() {
  yield all([
    watchFetchUsersIfNeeded(),
    watchFetchUsers()
  ]);
}
