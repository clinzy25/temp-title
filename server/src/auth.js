const { Strategy } = require('passport-google-oauth20');
const passport = require('passport');
const User = require('./models/users/users.mongo');

const AUTH_OPTIONS = {
  callbackURL: '/auth/google/callback',
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
};

async function verifyCallback(accessToken, refreshToken, profile, done) {
  try {
    const existingUser = await User.findOne({ email: profile._json.email });
    if (existingUser) {
      return done(null, existingUser);
    }
  } catch (e) {
    console.error(e);
  }

  try {
    const newUser = await new User({
      provider: 'google',
      userName: `user${profile.id}`,
      email: profile._json.email,
      displayName: profile.displayName,
      avatar: profile._json.picture,
    });
    User.create(newUser, () => {
      console.log('New user added to db');
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

// TODO: lookup user by id and return from database
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
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
