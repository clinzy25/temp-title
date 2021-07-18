import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Navbar from '../Navbar';
import MainInput from '../MainInput';
import FeedContent from '../FeedContent';

import { fetchFeedBegin } from '../../redux/feed_actions';

const HostFeed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeedBegin());
  }, []);

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
