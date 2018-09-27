import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchUsers as fetchUsersFromApi, fetchUser as fetchUserFromApi } from '../../api/users';
import { selectUsers } from '../../Selectors/User';
import * as actionUsers from '../../Redux/actions/User';
import { ActionUserType } from '../../types/users';

function* fetchUsers() {
  yield put({ type: 'FETCH_USERS_REQUEST' });
  try {
    const users = yield call(fetchUsersFromApi);
    yield put({ type: 'FETCH_USERS_SUCCESS', payload: users });
  } catch (e) {
    yield put({ type: 'FETCH_USERS_FAILURE' });
  }
}

function* getUser(action: ActionUserType) {
  yield put(actionUsers.getUserRequest());
  try {
    const user = yield call(fetchUserFromApi, action.id);
    yield put(actionUsers.getchUserSuccess(user));
  } catch (e) {
    yield put(actionUsers.getUserFailure(e.message));
  }
}

export function* watchFetchUsers() {
  yield takeLatest('FETCH_USERS', fetchUsers);
}

export function* fetchUsersIfNeeded() {
  try {
    const { users }  = yield select(selectUsers);
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

export function* watchGetUser() {
  yield takeEvery('GET_USER', getUser);
}
