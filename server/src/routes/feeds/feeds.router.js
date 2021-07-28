const express = require('express');
const { httpGetFeed, httpCreateFeed } = require('./feeds.controller');

const feedsRouter = express.Router();

feedsRouter.get('/', httpGetFeed);
feedsRouter.post('/', httpCreateFeed);

module.exports = feedsRouter;
