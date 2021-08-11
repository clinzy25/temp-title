const express = require('express');
const { httpGetFeed, httpCreateFeed } = require('./feed.controller');
const { checkIsLoggedIn } = require('../auth/auth.controller');

const feedsRouter = express.Router();

feedsRouter.post('/', checkIsLoggedIn, httpGetFeed);
feedsRouter.post('/create', checkIsLoggedIn, httpCreateFeed);

module.exports = feedsRouter;
