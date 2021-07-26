const express = require('express');
const feedsRouter = require('./feeds/feeds.router');
const authRouter = require('./auth/auth.router');

const api = express.Router();

api.use('/feeds', feedsRouter);
api.use('/auth', authRouter);

module.exports = api;
