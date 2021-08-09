const express = require('express');
const { checkIsLoggedIn } = require('../auth/auth.controller');
const getUser = require('./user.controller');

const usersRouter = express.Router();
/**
 * @function checkIsLoggedIn -- Check if user is authenticated before serving routes
 */
usersRouter.get('/', checkIsLoggedIn, getUser);

module.exports = usersRouter;
