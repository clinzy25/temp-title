import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchFeed } from '../../api';
import { fetchFeedSuccess, fetchFeedError, FETCH_FEED_BEGIN } from '../feed_actions';

function* fetchFeedFlow(action) {
  try {
    const res = yield call(fetchFeed, action.payload);
    yield put(fetchFeedSuccess(res));
  } catch (e) {
    yield put(fetchFeedError());
  }
}

export default function* feedSaga() {
  yield takeLatest(FETCH_FEED_BEGIN, fetchFeedFlow);
}
