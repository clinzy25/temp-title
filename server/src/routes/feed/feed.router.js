const express = require('express');
const { httpGetFeed, httpCreateFeed } = require('./feed.controller');
const { checkIsLoggedIn } = require('../auth/auth.controller');

const feedsRouter = express.Router();

/**
 * @function checkIsLoggedIn -- Check if user is authenticated before serving routes
 */
feedsRouter.post('/', checkIsLoggedIn, httpGetFeed);
feedsRouter.post('/create', checkIsLoggedIn, httpCreateFeed);

module.exports = feedsRouter;
