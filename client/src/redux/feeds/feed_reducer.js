import {
  FETCH_FEED_SUCCESS,
  FETCH_FEED_BEGIN,
  FETCH_FEED_ERROR,
} from './feed_actions';

const initialState = {
  feedNumber: 0,
  feedTitle: '',
  inviteLink: '',
  feed_loading: false,
  feed_error: false,
};

const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FEED_BEGIN:
      return {
        ...state,
        feed_loading: true,
      };
    case FETCH_FEED_ERROR:
      return {
        ...state,
        feed_error: true,
        feed_loading: false,
      };
    case FETCH_FEED_SUCCESS:
      /** TODO: destructuring acting weird */
      return {
        ...state,
        feedNumber: action.payload.feedNumber,
        feedTitle: action.payload.feedTitle,
        inviteLink: action.payload.inviteLink,
        feed_loading: false,
      };
    default:
      return state;
  }
};

export default feedReducer;
