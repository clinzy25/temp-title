const express = require('express');
const feedsRouter = require('./feed/feed.router');
const authRouter = require('./auth/auth.router');
const usersRouter = require('./user/user.router');

const api = express.Router();

api.use('/feeds', feedsRouter);
api.use('/auth', authRouter);
api.use('/users', usersRouter);

module.exports = api;
