import { setFeedTitle } from './feed_actions';

const initialState = {
  feedTitle: 'Temp-title',
};

const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case setFeedTitle:
      return {
        ...state,
        feedTitle: action.payload,
      };
    default:
      return state;
  }
};

export default feedReducer;
