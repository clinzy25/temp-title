const express = require('express');
const { checkIsLoggedIn } = require('../auth/auth.controller');
const getUser = require('./user.controller');

const usersRouter = express.Router();

usersRouter.get('/', checkIsLoggedIn, getUser);

module.exports = usersRouter;
