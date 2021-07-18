const SET_FEED_TITLE = 'SET_FEED_TITLE';

export const setFeedTitle = (newTitle) => ({
  type: SET_FEED_TITLE,
  payload: newTitle,
});

/**
 * Saga Actions
 */

export const FETCH_FEED_BEGIN = 'FETCH_FEED_BEGIN';
const FETCH_FEED_SUCCESS = 'FETCH_FEED_SUCCESS';
const FETCH_FEED_ERROR = 'FETCH_FEED_ERROR';

export const fetchFeedBegin = () => ({ type: FETCH_FEED_BEGIN });

export const fetchFeedSuccess = (feed) => ({
  type: FETCH_FEED_SUCCESS,
  payload: feed,
});

export const fetchFeedError = () => ({ type: FETCH_FEED_ERROR });
