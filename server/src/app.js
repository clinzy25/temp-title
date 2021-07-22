const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const api = require('./routes/api');

const app = express();

/** Middlewares */
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(morgan('tiny'));
app.use(express.json());
app.use('/', api);

module.exports = app;
