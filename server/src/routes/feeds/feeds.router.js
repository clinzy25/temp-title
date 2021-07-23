const express = require('express');
const { httpGetFeed, httpCreateFeed } = require('./feeds.controller');
const { checkIsLoggedIn } = require('../../auth');

const feedsRouter = express.Router();

feedsRouter.get('/:id', checkIsLoggedIn, httpGetFeed);
feedsRouter.post('/', httpCreateFeed);

module.exports = feedsRouter;
