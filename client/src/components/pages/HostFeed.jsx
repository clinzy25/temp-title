import React, {
  useEffect, useState, lazy, Suspense
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Navbar from '../Navbar';
import MainInput from '../MainInput';
import FeedContent from '../FeedContent';
import LoadingPage from './LoadingPage';
import SmallLoader from '../SmallLoader';
import Error from '../Error';
import { fetchUserBegin } from '../../redux/user/user_actions';
import { fetchFeedBegin } from '../../redux/feed/feed_actions';

const CreateFeed = lazy(() => import('../CreateFeed'));

/**
 * @component
 * @returns The last feed the host opened, based on the 'lastActive' state value
 */
const HostFeed = () => {
  const dispatch = useDispatch();
  const { feed_loading, feed_error } = useSelector(
    (state) => state.feed_reducer
  );
  const { user, user_loading, user_error } = useSelector(
    (state) => state.user_reducer
  );

  /** @param {boolean} unmountCreateFeed - Unmount CreateFeed when it's submit button is clicked */
  const [unmountCreateFeed, setUnmountCreateFeed] = useState(false);

  useEffect(() => {
    dispatch(fetchUserBegin());
  }, []);

  /** Ensure user has been fetched before attempting to fetch feeds */
  useEffect(() => {
    if (user && user.feeds.length > 0) {
      dispatch(fetchFeedBegin());
    }
  }, [user]);

  if (feed_loading || user_loading) {
    return <LoadingPage />;
  }
  if (feed_error || user_error) {
    return <Error />;
  }
  /** If the user doesn't have any feeds, and the user hasn't pressed 'create a feed' btn */
  if (user && user.feeds.length === 0 && !unmountCreateFeed) {
    return (
      <Suspense fallback={<SmallLoader />}>
        <CreateFeed user={user} setUnmountCreateFeed={setUnmountCreateFeed} />
      </Suspense>
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
