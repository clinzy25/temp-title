import {
  FETCH_USER_BEGIN,
  FETCH_USER_ERROR,
  FETCH_USER_SUCCESS,
  LOGOUT,
} from './user_actions';

const initialState = {
  user: null,
  isAuthenticated: false,
  user_error: false,
  user_loading: true,
};

/**
 * @param {object} state
 * @param {{type: string, payload: object}} action
 * @returns new state
 */
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_BEGIN:
      return {
        ...state,
        user_loading: true,
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        user_error: true,
        user_loading: false,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        user_loading: false,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default userReducer;
