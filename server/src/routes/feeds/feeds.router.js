const express = require('express');
const { httpGetFeed, httpCreateFeed } = require('./feeds.controller');
const { checkIsLoggedIn } = require('../../auth');

const feedsRouter = express.Router();

/**
 * @function checkIsLoggedIn -- Check if user is authenticated before serving routes
 */
feedsRouter.get('/', checkIsLoggedIn, httpGetFeed);
feedsRouter.post('/create', checkIsLoggedIn, httpCreateFeed);

module.exports = feedsRouter;
