export const SET_FEED_TITLE = 'SET_FEED_TITLE';

export const setFeedTitle = (newTitle) => ({
  type: SET_FEED_TITLE,
  payload: newTitle,
});

/**
 * Saga Actions
 */

export const FETCH_FEED_BEGIN = 'FETCH_FEED_BEGIN';
export const FETCH_FEED_SUCCESS = 'FETCH_FEED_SUCCESS';
export const FETCH_FEED_ERROR = 'FETCH_FEED_ERROR';

export const fetchFeedBegin = (feedNumber) => ({
  type: FETCH_FEED_BEGIN,
  payload: feedNumber,
});

export const fetchFeedSuccess = (feed) => ({
  type: FETCH_FEED_SUCCESS,
  payload: feed,
});

export const fetchFeedError = () => ({ type: FETCH_FEED_ERROR });

export const CREATE_FEED_BEGIN = 'CREATE_FEED_BEGIN';
export const CREATE_FEED_SUCCESS = 'CREATE_FEED_SUCCESS';
export const CREATE_FEED_ERROR = 'CREATE_FEED_ERROR';

export const createFeedBegin = (feed) => ({
  type: CREATE_FEED_BEGIN,
  payload: feed,
});

export const createFeedSuccess = (response) => ({
  type: CREATE_FEED_SUCCESS,
  payload: response,
});

export const createFeedError = () => ({ type: CREATE_FEED_ERROR });
