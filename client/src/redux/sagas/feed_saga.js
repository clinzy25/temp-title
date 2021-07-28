import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchFeed, createFeed } from '../../api';
import {
  fetchFeedSuccess,
  fetchFeedError,
  FETCH_FEED_BEGIN,
  CREATE_FEED_BEGIN,
  createFeedSuccess,
  createFeedError,
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

function* createFeedFlow(action) {
  try {
    const response = yield call(createFeed, action.payload);
    yield put(createFeedSuccess(response));
  } catch (error) {
    yield put(createFeedError());
  }
}

export default function* feedSaga() {
  yield takeLatest(FETCH_FEED_BEGIN, fetchFeedFlow);
  yield takeLatest(CREATE_FEED_BEGIN, createFeedFlow);
}
