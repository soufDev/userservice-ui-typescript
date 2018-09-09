import { call, put, takeLatest } from 'redux-saga/effects';
import { ADD_USER_FAILURE, ADD_USER_REQUEST, ADD_USER_SUCCESS } from '../../Redux/constants/User';
import { addUser as apiAddUser } from '../../api/users';
import navigateTo from '../../services/navigation';
import { ActionUserType } from '../../types/users';

function* addUser(action: ActionUserType) {
    yield put({ type: ADD_USER_REQUEST });
    try {
        const newUser = yield call(apiAddUser, action.payload);
        yield put({ type: ADD_USER_SUCCESS, payload: newUser });
        navigateTo('/users');
    } catch (e) {
        yield put({ type: ADD_USER_FAILURE, error: e.message });
    }
}

export default function* watchCreateUser() {
    yield takeLatest('ADD_USER', addUser);
}