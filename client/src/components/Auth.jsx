import React, { useState } from 'react';
import styled from 'styled-components';

const Auth = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(false);

  const AUTH_URL = 'https://localhost:3001/auth/google';

  return (
    <Wrapper>
      <a href={AUTH_URL}>Google</a>
      {isSignUpForm && <input type='text' placeholder='Username' />}
      <input type='text' placeholder='Email' />
      <input type='text' placeholder='Password' />
      <div className='switch-forms'>
        <span>
          {isSignUpForm ? 'Already have an account?' : "Don't have an account?"}
        </span>
        <button type='button' onClick={() => setIsSignUpForm(!isSignUpForm)}>
          {isSignUpForm ? 'Sign in' : 'Sign up'}
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
  border: 1px solid black;
  .switch-forms {
    display: flex;
  }
`;

export default Auth;
