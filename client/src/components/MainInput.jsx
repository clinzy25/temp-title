import React from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { RiArrowRightCircleFill } from 'react-icons/ri';

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('submit');
};

const FeedContent = () => (
  <Wrapper>
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

const Wrapper = styled.div`
  width: 80%;
  .main-input-ctr {
    display: flex;
    align-items: center;
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

export default FeedContent;
