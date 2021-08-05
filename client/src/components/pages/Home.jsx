import React, { useState } from 'react';
import styled from 'styled-components';
import Auth from '../AuthModal';
import LogoutBtn from '../LogoutBtn';

/**
 * @component
 * Public Home / marketing page / landing page
 * @returns Home page
 */
export const Home = () => {
  /** @param {boolean} authModal - Display - hide login / signup modal */
  const [authModal, setAuthModal] = useState(false);

  return (
    <Wrapper>
      <h1>Home / Landing Page</h1>
      <button type='button' onClick={() => setAuthModal(!authModal)}>
        Login / Signup
      </button>
      <LogoutBtn />
      {authModal && <Auth />}
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default Home;
