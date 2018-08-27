import { call, put, select, takeLatest } from 'redux-saga/effects';
import { fetchUsers as fetchUsersFromApi } from '../../api/users';
import { selectUsers } from '../../Selectors/User';
// import { selectUsers } from '../../Selectors/User';

function* fetchUsers() {
  yield put({ type: 'FETCH_USERS_REQUEST' });
  try {
    const users = yield call(fetchUsersFromApi);
    yield put({ type: 'FETCH_USERS_SUCCESS', payload: users });
  } catch (e) {
    yield put({ type: 'FETCH_USERS_FAILURE' });
  }
}

export function* watchFetchUsers() {
  yield takeLatest('FETCH_USERS', fetchUsers);
}

export function* fetchUsersIfNeeded() {
  try {
    const { users }  = yield select(selectUsers);
    console.log({ users });
    if (users.length === 0) {
      yield call(fetchUsers);
    }
  } catch (e) {
    console.log({ e });
  }
}

export function* watchFetchUsersIfNeeded() {
  yield takeLatest('FETCH_USERS_IF_NEEDED', fetchUsersIfNeeded);
}
