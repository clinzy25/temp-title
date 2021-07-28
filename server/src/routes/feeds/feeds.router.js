const express = require('express');
const { httpGetFeed, httpCreateFeed } = require('./feeds.controller');

const feedsRouter = express.Router();

feedsRouter.post('/', httpGetFeed);
feedsRouter.post('/create', httpCreateFeed);

module.exports = feedsRouter;
