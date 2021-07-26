import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Navbar from '../Navbar';
import MainInput from '../MainInput';
import FeedContent from '../FeedContent';
import LoadingFeed from '../LoadingFeed';
import ErrorPost from '../ErrorPost';
import { fetchUserBegin } from '../../redux/user/user_actions';

const HostFeed = () => {
  const dispatch = useDispatch();

  const { feed_loading, feed_error } = useSelector(
    (state) => state.feed_reducer
  );
  const { user, user_loading, user_error } = useSelector(
    (state) => state.user_reducer
  );

  useEffect(() => {
    dispatch(fetchUserBegin());
  }, []);

  if (feed_loading || user_loading) return <LoadingFeed />;
  if (feed_error || user_error) return <ErrorPost />;
  if (user.feeds.length === 0) {
    /** TODO: add feed */
    return <button type='button'>Start a Feed</button>;
  }
  return (
    <Wrapper>
      <Navbar />
      <MainInput />
      <FeedContent />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default HostFeed;
