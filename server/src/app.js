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
