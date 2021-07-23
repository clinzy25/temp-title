import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchFeed } from '../../api';
import {
  fetchFeedSuccess,
  fetchFeedError,
  FETCH_FEED_BEGIN,
} from '../feeds/feed_actions';

function* fetchFeedFlow(action) {
  try {
    /** TODO: add action.payload as unique feed id */
    const response = yield call(fetchFeed, action.payload);
    yield put(fetchFeedSuccess(response));
  } catch {
    yield put(fetchFeedError());
  }
}

export default function* feedSaga() {
  yield takeLatest(FETCH_FEED_BEGIN, fetchFeedFlow);
}
