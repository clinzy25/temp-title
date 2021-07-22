const express = require('express');
const feedsRouter = require('./feeds/feeds.router');

const api = express.Router();

api.use('/feeds', feedsRouter);

module.exports = api;