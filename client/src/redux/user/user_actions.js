export const FETCH_USER_BEGIN = 'FETCH_USER_BEGIN';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';

export const fetchUserBegin = () => ({
  type: FETCH_USER_BEGIN,
});
export const fetchUserError = () => ({ type: FETCH_USER_ERROR });
export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});

export const LOGOUT = 'LOGOUT';

export const logout = () => ({
  type: logout,
});
