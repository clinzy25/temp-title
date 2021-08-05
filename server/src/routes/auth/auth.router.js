const express = require('express');
const passport = require('passport');
const { checkIsLoggedIn } = require('../../auth');

const authRouter = express.Router();

const CLIENT_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://localhost:3001'
    : 'http://localhost:3000';

authRouter.get(
  '/google',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  })
);

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

authRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

authRouter.get('/users', checkIsLoggedIn, (req, res) => {
  if (req.user) {
    return res.status(200).json(req.user);
  }
  return res.status(404).json({ error: 'User not found' });
});

module.exports = authRouter;
