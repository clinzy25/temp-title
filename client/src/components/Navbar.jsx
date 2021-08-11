import React, { useState, lazy, Suspense } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setFeedTitle } from '../redux/feed/feed_actions';
import LogoutBtn from './LogoutBtn';
import SmallLoader from './SmallLoader';

const ManageFeedsModal = lazy(() => import('./ManageFeedsModal'));
/**
 * @component
 * @returns Reusable Navbar component
 */
const Navbar = () => {
  const { feedTitle, inviteLink } = useSelector((state) => state.feed_reducer);
  const dispatch = useDispatch();

  /** @param {boolean} isEditingFeedTitle - Checks if user is editing title for style adjustments */
  const [isEditingFeedTitle, setisEditingFeedTitle] = useState(false);
  const [manageFeedModal, setManageFeedModal] = useState(false);

  return (
    <Wrapper isEditingFeedTitle={isEditingFeedTitle}>
      <input
        type='text'
        className='feed-title'
        defaultValue={feedTitle}
        onFocus={() => setisEditingFeedTitle(true)}
        onBlur={(e) => dispatch(setFeedTitle(e.target.value))}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            setisEditingFeedTitle(false);
            e.target.blur();
          }
        }}
      />
      {inviteLink}
      <button
        type='button'
        onClick={() => setManageFeedModal(!manageFeedModal)}
      >
        Manage Feeds
      </button>
      {manageFeedModal && (
        <Suspense fallback={<SmallLoader />}>
          <ManageFeedsModal />
        </Suspense>
      )}
      <LogoutBtn />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .feed-title {
    width: 50%;
    font-size: 2rem;
    font-family: 'Nunito Sans', sans-serif;
    outline: ${(props) => props.isEditingFeedTitle || 'none'};
    border: 0;
    border-radius: 5px;
    transition: background-color 0.2s;
    :hover {
      background-color: ${(props) => props.isEditingFeedTitle || '#00000011'};
    }
  }
  .create-feed-btn {
    position: absolute;
  }
`;
export default Navbar;
