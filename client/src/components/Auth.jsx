import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import styled from 'styled-components';

const responseGoogle = (response) => {
  console.log(response);
};

const Auth = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(false);

  const SwitchFormsBtn = () => (
    <button type='button' onClick={() => setIsSignUpForm(!isSignUpForm)}>
      {isSignUpForm ? 'Sign in' : 'Sign up'}
    </button>
  );

  return (
    <Wrapper>
      <GoogleLogin
        clientId='658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'
        buttonText={
          isSignUpForm ? 'Sign up with Google' : 'Sign in with Google'
        }
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy='single_host_origin'
      />
      {isSignUpForm && <input type='text' placeholder='Username' />}
      <input type='text' placeholder='Email' />
      <input type='text' placeholder='Password' />
      <div className='switch-forms'>
        {isSignUpForm ? (
          <>
            <span>Already have an account?</span>
            <SwitchFormsBtn />
          </>
        ) : (
          <>
            <span>Don&apos;t have an account?</span>
            <SwitchFormsBtn />
          </>
        )}
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
