import React, { useState, lazy, Suspense } from 'react';
import styled from 'styled-components';
import LogoutBtn from '../LogoutBtn';
import SmallLoader from '../SmallLoader';

const AuthModal = lazy(() => import('../AuthModal'));

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
      {authModal && (
        <Suspense fallback={<SmallLoader />}>
          <AuthModal />
        </Suspense>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default Home;
