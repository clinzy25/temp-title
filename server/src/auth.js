const express = require('express');

function checkIsLoggedIn(req, res, next) {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return res.statusCode(401).json({
      error: 'Not logged in',
    });
  }
  return next();
}

const authRouter = express.Router();

authRouter.get('/auth/google', (req, res) => {});

authRouter.get('auth/google/callback', (req, res) => {});

authRouter.get('auth/logout', (req, res) => {});

module.exports = {
  checkIsLoggedIn,
};
