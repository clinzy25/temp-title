import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Auth from '../Auth';

export const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user_reducer);

  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <Wrapper>
      <h1>Home / Landing Page</h1>
      {isLoggedIn ? (
        <Link to='/dashboard'>
          <button type='button'>Go to Dashboard</button>
        </Link>
      ) : (
        <button type='button' onClick={() => setIsAuthOpen(!isAuthOpen)}>
          Login / Signup
        </button>
      )}
      {isAuthOpen && <Auth />}
    </Wrapper>
  );
};

const Wrapper = styled.main`

`;

export default Home;
