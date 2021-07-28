import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Navbar from '../Navbar';
import MainInput from '../MainInput';
import FeedContent from '../FeedContent';
import LoadingFeed from '../LoadingFeed';
import ErrorPost from '../ErrorPost';
import { fetchUserBegin } from '../../redux/user/user_actions';
import { createFeedBegin } from '../../redux/feeds/feed_actions';

const HostFeed = () => {
  const dispatch = useDispatch();

  const feedNameRef = useRef(null);

  const { feed_loading, feed_error } = useSelector(
    (state) => state.feed_reducer
  );
  const { user, user_loading, user_error } = useSelector(
    (state) => state.user_reducer
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedData = {
      host_id: user._id,
      feedTitle: feedNameRef.current.value,
    };

    await dispatch(createFeedBegin(feedData));
  };

  useEffect(() => {
    dispatch(fetchUserBegin());
  }, []);

  if (feed_loading || user_loading) return <LoadingFeed />;
  if (feed_error || user_error) return <ErrorPost />;
  if (user.feeds.length === 0) {
    return (
      <form>
        <span>Type a name for the feed: </span>
        <input ref={feedNameRef} type='text' />
        <button onClick={handleSubmit} type='submit'>
          Start a Feed
        </button>
      </form>
    );
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
