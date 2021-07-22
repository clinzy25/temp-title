import { SET_FEED_TITLE, FETCH_FEED_SUCCESS } from './feed_actions';

const initialState = {
  feedTitle: '',
  inviteLink: ''
};

const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FEED_TITLE:
      return {
        ...state,
        feedTitle: action.payload,
      };
    case FETCH_FEED_SUCCESS:
      /** TODO: destructuring acting weird */
      return {
        ...state,
        feedTitle: action.payload.feedTitle,
        inviteLink: action.payload.inviteLink,
      };
    default:
      return state;
  }
};

export default feedReducer;
