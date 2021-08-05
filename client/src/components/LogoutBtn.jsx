import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/user/user_actions';

const LOGOUT_URL = `${process.env.REACT_APP_API_URL}/auth/logout`;

/**
 * @component
 * @returns A reusable logout button
 */
const LogoutBtn = () => {
  const dispatch = useDispatch();

  const startLogout = useCallback(() => dispatch(logout()), []);

  return (
    <div>
      <a onClick={startLogout} href={LOGOUT_URL}>
        Logout
      </a>
    </div>
  );
};

export default LogoutBtn;
