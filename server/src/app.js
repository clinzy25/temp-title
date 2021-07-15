const express = require('express');
const morgan = require('morgan');

const app = express();

/** Middlewares */
app.use(morgan('tiny'));
app.use(express.json());

module.exports = app;
