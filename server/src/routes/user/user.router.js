const express = require('express');
const { checkIsLoggedIn } = require('../auth/auth.controller');
const httpGetUser = require('./user.controller');

const usersRouter = express.Router();
/**
 * @function checkIsLoggedIn -- Check if user is authenticated before serving routes
 */
usersRouter.get('/', checkIsLoggedIn, httpGetUser);

module.exports = usersRouter;
