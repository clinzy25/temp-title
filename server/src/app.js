const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const passport = require('passport');
const cookieSession = require('cookie-session');
const { googleStrategy } = require('./routes/auth/auth.controller');
const api = require('./routes/api');
require('dotenv').config();

const app = express();

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  COOKIE_KEY_1: process.env.COOKIE_KEY_1,
  COOKIE_KEY_2: process.env.COOKIE_KEY_2,
};
/** TODO: fix contentSecurityPolicy bug, see Jira TODOs for more info */
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
/** Create a 24hr cookie session */
app.use(
  cookieSession({
    name: 'cookie-session',
    maxAge: 86400000,
    keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2],
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(googleStrategy);

/**
 * Mock authentication endpoint called before testing protected endpoints
 * Sets req.user with fakeUser
 */
const fakeUser = {
  feeds: [],
  provider: 'google',
  userName: 'fakeymcfakerson',
  email: 'bigfake@gmail.com',
  displayName: 'fakey faker',
  avatar: 'fake-link',
};

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  app.use((req, res, next) => {
    if (req && req.session && req.session.user_tmp) {
      req.user = req.session.user_tmp;
    }
    if (next) {
      next();
    }
  });
  app.get('/auth/fake', (req, res) => {
    if (!req.session) {
      req.session = {};
    }
    req.session.user_tmp = fakeUser;
    req.user = req.session.user_tmp;

    res.redirect('/');
  });
}

/**
 * @property {boolean} credentials -- ensure user data is attatched to each req as a cookie
 */
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/', api);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
