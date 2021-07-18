import React from 'react';
import styled from 'styled-components';

import Navbar from '../Navbar';
import MainInput from '../MainInput';
import FeedContent from '../FeedContent';

const HostFeed = () => (
  <Wrapper>
    <Navbar />
    <MainInput />
    <FeedContent />
  </Wrapper>
);

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default HostFeed;
