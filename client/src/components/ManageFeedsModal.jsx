import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import CreateFeed from './CreateFeed';
import { deleteFeedBegin } from '../redux/feed/feed_actions';

const ManageFeedsModal = () => {
  const [unmountCreateFeed, setUnmountCreateFeed] = useState(false);
  const { user } = useSelector((state) => state.user_reducer);
  const dispatch = useDispatch();

  /**
   * Delete feed by feedId
   * @param {string} feedId
   */
  const handleDelete = async (feedId) => {
    await dispatch(deleteFeedBegin(feedId));
  };

  return (
    <Wrapper>
      <h1>Manage Feeds</h1>
      {!unmountCreateFeed && (
        <CreateFeed
          className='create-feed-btn'
          user={user}
          setUnmountCreateFeed={setUnmountCreateFeed}
        />
      )}
      <h1>Your feeds</h1>
      <ul className='feed-list'>
        {user.feeds.map((feed) => {
          const { feedId, feedTitle } = feed;
          return (
            <li key={feedId}>
              {feedTitle}
              <button onClick={() => handleDelete(feedId)} type='button'>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};
const Wrapper = styled.aside`
  /* Center in viewport */
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  /*********************/
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
  border: 1px solid black;
  .feed-list {
    list-style-type: none;
  }
`;

export default ManageFeedsModal;