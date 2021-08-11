import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchFeed, createFeed, deleteFeed } from '../../api';
import {
  fetchFeedSuccess,
  fetchFeedError,
  FETCH_FEED_BEGIN,
  CREATE_FEED_BEGIN,
  createFeedSuccess,
  createFeedError,
  DELETE_FEED_BEGIN,
  deleteFeedSuccess,
  deleteFeedError,
} from './feed_actions';

/**
 * Fetch feed using req.user._id to search db
 * Req.user attached to each request by OAuth
 * @param {{type: string, payload: string}} action -- payload should be feedTitle if
 * user is selecting specific feed, else user is logging in or refreshing and payload is undefined
 */
function* fetchFeedFlow(action) {
  try {
    const response = yield call(fetchFeed, action.payload);
    yield put(fetchFeedSuccess(response));
  } catch (error) {
    yield put(fetchFeedError(error));
  }
}

/**
 * Create feed in db
 * @param {{type: string, payload: {host_id: string, feedTitle: string}}} action --
 * payload should be user-selected feed details
 */
function* createFeedFlow(action) {
  try {
    const response = yield call(createFeed, action.payload);
    yield put(createFeedSuccess(response));
  } catch (error) {
    yield put(createFeedError(error));
  }
}

/**
 * Delete feed in db
 * @param {{type: string, payload: string}} action -- payload should be a feedId
 */
function* deleteFeedFlow(action) {
  try {
    const response = yield call(deleteFeed, action.payload);
    yield put(deleteFeedSuccess(response));
  } catch (error) {
    yield put(deleteFeedError(error));
  }
}

export default function* feedSaga() {
  yield takeLatest(FETCH_FEED_BEGIN, fetchFeedFlow);
  yield takeLatest(CREATE_FEED_BEGIN, createFeedFlow);
  yield takeLatest(DELETE_FEED_BEGIN, deleteFeedFlow);
}
