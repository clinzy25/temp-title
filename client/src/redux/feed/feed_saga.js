import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchFeed, createFeed } from '../../api';
import {
  fetchFeedSuccess,
  fetchFeedError,
  FETCH_FEED_BEGIN,
  CREATE_FEED_BEGIN,
  createFeedSuccess,
  createFeedError,
} from './feed_actions';

/**
 * Fetch feed using req.user._id to search db
 * Req.user attached to each request by OAuth
 */
function* fetchFeedFlow() {
  try {
    const response = yield call(fetchFeed);
    yield put(fetchFeedSuccess(response));
  } catch {
    yield put(fetchFeedError());
  }
}

/**
 * Create feed in db
 * @param {string} action -- payload should be user-selected feed details
 */
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
