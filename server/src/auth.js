const { Strategy } = require('passport-google-oauth20');
const passport = require('passport');

const AUTH_OPTIONS = {
  callbackURL: '/auth/google/callback',
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
};

function verifyCallback(accessToken, refreshToken, profile, done) {
  console.log('Google Profile: ', profile);
  done(null, profile);
}

const googleStrategy = new Strategy(AUTH_OPTIONS, verifyCallback);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

// TODO: lookup user by id and return from database
passport.deserializeUser((id, done) => {
  done(null, id);
});

function checkIsLoggedIn(req, res, next) {
  const isLoggedIn = req.isAuthenticated() && req.user;
  if (!isLoggedIn) {
    return res.statusCode(401).json({
      error: 'Not logged in',
    });
  }
  return next();
}

module.exports = {
  checkIsLoggedIn,
  googleStrategy,
};
