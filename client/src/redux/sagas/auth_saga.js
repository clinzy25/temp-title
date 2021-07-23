import { call, put, takeLatest } from 'redux-saga/effects';
import {
  AUTH_FLOW_BEGIN,
  authFlowSuccess,
  authFlowError,
  logoutSuccess,
  logoutError,
  LOGOUT_BEGIN,
} from '../user/user_actions';
import { authenticateUser, logout } from '../../api';

function* authFlow() {
  try {
    const response = yield call(authenticateUser());
    yield put(authFlowSuccess(response));
  } catch {
    yield put(authFlowError());
  }
}

function* logoutFlow() {
  try {
    const response = yield call(logout());
    yield put(logoutSuccess(response));
  } catch {
    yield put(logoutError());
  }
}

export default function* authSaga() {
  yield takeLatest(AUTH_FLOW_BEGIN, authFlow);
  yield takeLatest(LOGOUT_BEGIN, logoutFlow);
}
