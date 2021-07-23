import {
  AUTH_FLOW_BEGIN,
  AUTH_FLOW_ERROR,
  AUTH_FLOW_SUCCESS,
  LOGOUT_BEGIN,
  LOGOUT_ERROR,
  LOGOUT_SUCCESS,
} from './user_actions';

const initialState = {
  user: null,
  isLoggedIn: true,
  user_error: false,
  user_loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_FLOW_BEGIN:
      return {
        ...state,
        user_loading: true,
      };
    case AUTH_FLOW_ERROR:
      return {
        ...state,
        user_error: true,
        user_loading: false,
      };
    case AUTH_FLOW_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        user_loading: false,
      };
    case LOGOUT_BEGIN:
      return {
        ...state,
        user_loading: true,
      };
    case LOGOUT_ERROR:
      return {
        ...state,
        user_error: true,
        user_loading: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        user_loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
