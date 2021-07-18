import React, { useState } from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { useSelector, useDispatch } from 'react-redux';
import { RiArrowRightCircleFill } from 'react-icons/ri';
import { setFeedTitle } from '../../redux/feed_actions';

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('submit');
};

const HostFeed = () => {
  const feedTitle = useSelector((state) => state.feedReducer.feedTitle);
  const dispatch = useDispatch();

  const [isEditingFeedTitle, setisEditingFeedTitle] = useState(false);

  return (
    <Wrapper isEditingFeedTitle={isEditingFeedTitle}>
      <header className='header-ctr'>
        <input
          type='text'
          className='feed-title'
          defaultValue={feedTitle}
          onChange={(e) => dispatch(setFeedTitle(e.target.value))}
          onFocus={() => setisEditingFeedTitle(true)}
          onBlur={() => setisEditingFeedTitle(false)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              setisEditingFeedTitle(false);
              e.target.blur();
            }
          }}
        />
      </header>
      <form
        className='main-input-ctr'
        action=''
        onSubmit={(e) => handleSubmit(e)}
      >
        <TextareaAutosize className='main-input' />
        <RiArrowRightCircleFill className='main-input-btn' type='submit' />
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .header-ctr {
    margin: 25px;
  }
  .feed-title {
    font-size: 2rem;
    font-family: 'Nunito Sans', sans-serif;
    outline: ${(props) => props.isEditingFeedTitle || 'none'};
    border: 0;
    transition: background-color 0.2s;
    border-radius: 5px;
    :hover {
      background-color: ${(props) => props.isEditingFeedTitle || '#00000011'};
    }
  }

  .main-input-ctr {
    display: flex;
    align-items: center;
    width: 80%;
    .main-input {
      width: 100%;
      padding: 10px;
      border-radius: 25px;
      border: 1px solid #0000002d;
      outline: none;
      resize: none;
      height: 20px;
      font-family: 'Nunito Sans', sans-serif;
    }
    .main-input-btn {
      font-size: 3.5rem;
      cursor: pointer;
    }
  }
`;

export default HostFeed;
