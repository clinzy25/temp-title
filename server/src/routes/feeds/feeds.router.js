const express = require('express');
const { httpGetFeed } = require('./feeds.controller');

const feedsRouter = express.Router();

feedsRouter.get('/:id', httpGetFeed);

module.exports = feedsRouter;
