export const AUTH_FLOW_BEGIN = 'AUTH_FLOW_BEGIN';
export const AUTH_FLOW_ERROR = 'AUTH_FLOW_BEGIN';
export const AUTH_FLOW_SUCCESS = 'AUTH_FLOW_BEGIN';

export const authFlowBegin = () => ({ type: AUTH_FLOW_BEGIN });
export const authFlowError = () => ({ type: AUTH_FLOW_ERROR });
export const authFlowSuccess = (user) => ({
  type: AUTH_FLOW_SUCCESS,
  payload: user,
});

export const LOGOUT_BEGIN = 'LOGOUT_BEGIN';
export const LOGOUT_ERROR = 'LOGOUT_BEGIN';
export const LOGOUT_SUCCESS = 'LOGOUT_BEGIN';

export const logoutBegin = (user) => ({ type: LOGOUT_BEGIN, payload: user });
export const logoutError = () => ({ type: LOGOUT_ERROR });
export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });
