import {
  FETCH_FEED_SUCCESS,
  FETCH_FEED_BEGIN,
  FETCH_FEED_ERROR,
  CREATE_FEED_SUCCESS,
  CREATE_FEED_BEGIN,
  CREATE_FEED_ERROR,
  DELETE_FEED_SUCCESS,
  DELETE_FEED_BEGIN,
} from './feed_actions';

const initialState = {
  feedTitle: '',
  inviteLink: '',
  feed_loading: false,
  feed_error: false,
  lastActive: true,
};

const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FEED_BEGIN:
    case FETCH_FEED_BEGIN:
      return {
        ...state,
        feed_loading: true,
      };
    case CREATE_FEED_ERROR:
    case FETCH_FEED_ERROR:
      return {
        ...state,
        feed_error: true,
        feed_loading: false,
      };
    case CREATE_FEED_SUCCESS:
    case FETCH_FEED_SUCCESS: {
      const { feedTitle, inviteLink } = action.payload;
      return {
        ...state,
        feedTitle,
        inviteLink,
        feed_loading: false,
      };
    }
    case DELETE_FEED_SUCCESS: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default feedReducer;
