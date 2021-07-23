import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Navbar from '../Navbar';
import MainInput from '../MainInput';
import FeedContent from '../FeedContent';
import LoadingFeed from '../LoadingFeed';

import { fetchFeedBegin } from '../../redux/feeds/feed_actions';
import ErrorPost from '../ErrorPost';

const HostFeed = () => {
  const dispatch = useDispatch();

  const { feedNumber, feed_loading, feed_error } = useSelector(
    (state) => state.feed_reducer
  );
  const fetchFeed = async () => {
    await dispatch(fetchFeedBegin(feedNumber));
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  if (feed_loading) return <LoadingFeed />;
  if (feed_error) return <ErrorPost />;
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
