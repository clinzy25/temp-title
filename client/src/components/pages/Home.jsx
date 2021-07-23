import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
  <main>
    <h1>Home / Landing Page</h1>
    {/* TODO: This link will actually go to 'auth' when OAuth is setup
    then to a 'setup feed' page */}
    <Link to='/auth'>
      <button type='button'>
        Create a feed
      </button>
    </Link>
  </main>
);

export default Home;
