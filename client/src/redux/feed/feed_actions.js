export const FETCH_FEED_BEGIN = 'FETCH_FEED_BEGIN';
export const FETCH_FEED_SUCCESS = 'FETCH_FEED_SUCCESS';
export const FETCH_FEED_ERROR = 'FETCH_FEED_ERROR';
export const CREATE_FEED_BEGIN = 'CREATE_FEED_BEGIN';
export const CREATE_FEED_SUCCESS = 'CREATE_FEED_SUCCESS';
export const CREATE_FEED_ERROR = 'CREATE_FEED_ERROR';
export const DELETE_FEED_BEGIN = 'DELETE_FEED_BEGIN';
export const DELETE_FEED_SUCCESS = 'DELETE_FEED_SUCCESS';
export const DELETE_FEED_ERROR = 'DELETE_FEED_ERROR';
export const SET_FEED_TITLE = 'SET_FEED_TITLE';

export const fetchFeedBegin = (feedTitle) => ({
  type: FETCH_FEED_BEGIN,
  payload: feedTitle,
});

export const fetchFeedSuccess = (feed) => ({
  type: FETCH_FEED_SUCCESS,
  payload: feed,
});

export const fetchFeedError = (error) => ({
  type: FETCH_FEED_ERROR,
  payload: error,
});

export const createFeedBegin = (feed) => ({
  type: CREATE_FEED_BEGIN,
  payload: feed,
});

export const createFeedSuccess = (response) => ({
  type: CREATE_FEED_SUCCESS,
  payload: response,
});

export const createFeedError = (error) => ({
  type: CREATE_FEED_ERROR,
  payload: error,
});

export const deleteFeedBegin = (feedId) => ({
  type: DELETE_FEED_BEGIN,
  payload: feedId,
});

export const deleteFeedSuccess = (response) => ({
  type: DELETE_FEED_SUCCESS,
  payload: response,
});

export const deleteFeedError = (error) => ({
  type: DELETE_FEED_ERROR,
  payload: error,
});

export const setFeedTitle = (newTitle) => ({
  type: SET_FEED_TITLE,
  payload: newTitle,
});
