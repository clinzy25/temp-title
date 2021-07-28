import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Navbar from '../Navbar';
import MainInput from '../MainInput';
import FeedContent from '../FeedContent';
import Loading from '../Loading';
import Error from '../Error';
import { fetchUserBegin } from '../../redux/user/user_actions';
import CreateFeed from './CreateFeed';

const HostFeed = () => {
  const dispatch = useDispatch();
  const { feed_loading, feed_error } = useSelector(
    (state) => state.feed_reducer
  );
  const { user, user_loading, user_error } = useSelector(
    (state) => state.user_reducer
  );

  const [createdFirstFeed, setCreatedFirstFeed] = useState(false);

  useEffect(() => {
    dispatch(fetchUserBegin());
  }, []);

  if (feed_loading || user_loading) {
    return <Loading />;
  }
  if (feed_error || user_error) {
    return <Error />;
  }
  if (user && user.feeds.length === 0 && !createdFirstFeed) {
    return <CreateFeed user={user} setCreatedFirstFeed={setCreatedFirstFeed} />;
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
