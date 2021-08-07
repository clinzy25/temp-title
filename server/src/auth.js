const { Strategy } = require('passport-google-oauth20');
const passport = require('passport');
const User = require('./models/users/users.mongo');
require('dotenv').config();

const AUTH_OPTIONS = {
  callbackURL: '/auth/google/callback',
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
};

/**
 * TODO TT-42 -- implement refresh token
 * Passport.js callback function. If user exists, find the user in db,
 * Else, create new user with google profile data and add to db
 * @param {string} accessToken
 * @param {string} refreshToken
 * @param {object} profile -- Google profile data
 * @param {function} done -- passport function to end
 * @returns @function done --
 */
async function verifyCallback(accessToken, refreshToken, profile, done) {
  const {
    id,
    _json: { email, picture },
    displayName,
  } = profile;
  /** Check db for user */
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return done(null, existingUser);
    }
  } catch (e) {
    console.error(e);
  }
  /** Create new user */
  try {
    const newUser = await new User({
      provider: 'google',
      userName: `user${id}`,
      email,
      displayName,
      avatar: picture,
    });

    User.create(newUser, () => {
      console.log(`User ${displayName}`);
    });

    done(null, newUser);
  } catch (e) {
    console.error(e);
  }
  return null;
}

const googleStrategy = new Strategy(AUTH_OPTIONS, verifyCallback);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

/**
 * Check if user is logged in with passport's isAuthenticated function
 * and check if req.user exists
 * This function is added to secure routes
 * @param {object} req
 * @param {object} res
 * @param {next} next
 * @returns {function} next
 */
function checkIsLoggedIn(req, res, next) {
  const isLoggedIn = req.isAuthenticated() && req.user;
  if (!isLoggedIn) {
    return res.status(401).json({
      error: 'Not logged in',
    });
  }
  return next();
}

module.exports = {
  checkIsLoggedIn,
  googleStrategy,
};
