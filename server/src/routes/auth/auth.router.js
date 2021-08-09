const express = require('express');
const passport = require('passport');

const authRouter = express.Router();

const CLIENT_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://localhost:3001'
    : 'http://localhost:3000';

/** First endpoint in Oauth flow. Send by @component AuthModal in client */
authRouter.get(
  '/google',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  })
);

/**
 * Redirect on success or failure
 * Success: redirect to /feeds endpoint
 */
authRouter.get(
  '/google/callback',
  passport.authenticate('google', {
    // TODO: Redirect to Dashboard and some kind of error page
    failureRedirect: '/failure',
    successRedirect: `${CLIENT_URL}/feeds`,
  }),
  (req, res) => {
    console.log('Google called back');
  }
);

authRouter.get('/failure', (req, res) => res.send('Failed to log in'));

/** Logout endpoint and redirect to home */
authRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

module.exports = authRouter;
