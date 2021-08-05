const express = require('express');
const { httpGetFeed, httpCreateFeed } = require('./feeds.controller');
const { checkIsLoggedIn } = require('../../auth');

const feedsRouter = express.Router();

feedsRouter.post('/', checkIsLoggedIn, httpGetFeed);
feedsRouter.post('/create', checkIsLoggedIn, httpCreateFeed);

module.exports = feedsRouter;
