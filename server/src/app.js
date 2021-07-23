const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const api = require('./routes/api');

const app = express();

/** Middlewares */
app.use(
  helmet({
    // TODO: accounts.google.com will not unblock
    contentSecurityPolicy: false,
  })
);
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use('/', api);
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
