import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createFeedBegin } from '../../redux/feed_actions';

export const Home = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    const feedData = {
      canSubsPost: false,
      feedTitle: 'New title',
    };
    dispatch(createFeedBegin(feedData));
  };
  return (
    <main>
      <h1>Home / Landing Page</h1>
      {/* TODO: This link will actually go to 'auth' when OAuth is setup
    then to a 'setup feed' page */}
      <Link to='/feed'>
        <button onClick={handleClick} type='button'>
          Create a feed
        </button>
      </Link>
    </main>
  );
};

export default Home;
