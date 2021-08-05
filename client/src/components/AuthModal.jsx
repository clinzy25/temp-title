import React, { useState } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';

const GOOGLE_OAUTH_URL = 'https://localhost:3001/auth/google';

const initialValues = {
  username: '',
  email: '',
  password: '',
};

const validateEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Please create a username';
  }
  if (!values.email) {
    errors.email = 'Please enter your email';
  } else if (!validateEmail(values.email)) {
    errors.email = 'Invalid email format';
  }
  if (!values.password) {
    /** Validate password and format on backend, only check for empty on frontend */
    errors.password = 'Please enter your password';
  }
  return errors;
};

const AuthModal = () => {
  /*
   * Display different values depanding on user logging in or signing up,
   * controlled by btn at bottom of form
   */
  const [isSignUpForm, setIsSignUpForm] = useState(false);

  const onSubmit = (values) => {
    /** TODO -- Build endpoints and sagas */
    // const { username, email, password } = values;
    // if (isSignUpForm) {
    //   dispatch(registerBegin( username, email, password ));
    // } else {
    //   dispatch(loginBegin( email, password ));
    // }
    console.log('Form values: ', values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <Wrapper>
      {/* OAuth */}
      <form className='form-ctr' onSubmit={formik.handleSubmit}>
        <div className='google-btn'>
          <a href={GOOGLE_OAUTH_URL}>Sign in with Google</a>
        </div>

        {/* Username */}
        <div className='form-control'>
          {isSignUpForm && (
            <input
              type='text'
              name='username'
              placeholder='Username'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
          )}
          {isSignUpForm
          && formik.touched.username
          && formik.errors.username && <div>{formik.errors.username}</div>}
        </div>

        {/* Email */}
        <div className='form-control'>
          <input
            type='text'
            name='email'
            placeholder='Email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <div>{formik.errors.email}</div>
          )}
        </div>

        {/* Password */}
        <div className='form-control'>
          <input
            type='text'
            name='password'
            placeholder='Password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password && (
            <div>{formik.errors.password}</div>
          )}
        </div>

        {/* Buttons */}
        <button type='submit'>{isSignUpForm ? 'Sign up' : 'Log in'}</button>
        <div className='switch-forms'>
          <span>
            {isSignUpForm
              ? 'Already have an account?'
              : "Don't have an account?"}
          </span>
          <button type='button' onClick={() => setIsSignUpForm(!isSignUpForm)}>
            {isSignUpForm ? 'Sign in' : 'Sign up'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
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
  .form-ctr {
    display: flex;
    flex-direction: column;
  }
  .switch-forms {
    display: flex;
  }
`;

export default AuthModal;
