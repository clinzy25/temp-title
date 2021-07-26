import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFeedTitle } from '../redux/feeds/feed_actions';

const Navbar = () => {
  const { feedTitle, inviteLink } = useSelector((state) => state.feed_reducer);
  const dispatch = useDispatch();
  /** For styles only */
  const [isEditingFeedTitle, setisEditingFeedTitle] = useState(false);

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
      <Link to='/'>Logout</Link>
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
`;
export default Navbar;
