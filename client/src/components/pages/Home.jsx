import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import HostFeed from './HostFeed';
import Auth from '../Auth';
import { fetchUserBegin } from '../../redux/user/user_actions';
import LogoutBtn from '../LogoutBtn';

export const Home = () => {
  const { isAuthenticated } = useSelector((state) => state.user_reducer);
  const dispatch = useDispatch();

  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchUserBegin());
  }, []);

  return (
    <Wrapper>
      {isAuthenticated ? (
        <HostFeed />
      ) : (
        <>
          <h1>Home / Landing Page</h1>
          <button type='button' onClick={() => setIsAuthOpen(!isAuthOpen)}>
            Login / Signup
          </button>
          <LogoutBtn />
        </>
      )}
      {isAuthOpen && <Auth />}
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default Home;
