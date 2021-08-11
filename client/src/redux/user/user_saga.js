import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_USER_BEGIN,
  fetchUserSuccess,
  fetchUserError,
} from './user_actions';
import { fetchUser } from '../../api';

/**
 * Get user data from db upon loading feed
 */
function* fetchUserFlow() {
  try {
    const response = yield call(fetchUser);
    if (response.data.error) {
      throw response;
    } else {
      yield put(fetchUserSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchUserError(error));
  }
}

export default function* userSaga() {
  yield takeLatest(FETCH_USER_BEGIN, fetchUserFlow);
}
