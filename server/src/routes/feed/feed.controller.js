const { findFeed, addFeed } = require('../../models/feed/feed.model');

/**
 * Get feed from db by user id from req.user
 * @param {object} req -- Contains user id for search
 * @returns {object} -- A feed
 */
async function httpGetFeed(req, res) {
  const userId = req.user._id;
  const { feedTitle } = req.body;
  const feed = await findFeed(userId, feedTitle);
  if (!feed) {
    return res.status(404).json({
      error: 'Feed not found',
    });
  }
  return res.status(200).json(feed);
}

/**
 * Create a new feed
 * @param {object} req -- Contains user defined values and the user id
 * @returns {object} -- A feed
 */
async function httpCreateFeed(req, res) {
  const feed = req.body;
  const completeFeed = await addFeed(feed);
  return res.status(201).json(completeFeed);
}

module.exports = {
  httpGetFeed,
  httpCreateFeed,
};
