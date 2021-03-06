export const FETCH_USER_BEGIN = 'FETCH_USER_BEGIN';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const fetchUserBegin = () => ({
  type: FETCH_USER_BEGIN,
});

export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});

export const fetchUserError = (error) => ({
  type: FETCH_USER_ERROR,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});
