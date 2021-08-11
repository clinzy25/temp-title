const { findFeed, addFeed } = require('../../models/feed/feed.model');

/**
 * Get feed from db by user id from req.user
 * @param {object} req -- Contains user id for search
 * @returns {object} -- A feed
 */
async function httpGetFeed(req, res) {
  const userId = req.user._id;
  /** 'feedTitle' is not required */
  const { feedTitle } = req.body;
  if (!req.user._id) {
    return res.status(401).json({
      error: 'Unauthorized',
    });
  }
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
 * @param {object} req -- Contains user-defined values and the user id
 * @returns {object} -- A feed
 */
async function httpCreateFeed(req, res) {
  const feed = req.body;
  if (!feed.host_id || !feed.feedTitle) {
    return res.status(400).json({ error: 'Missing required feed property' });
  }
  const completeFeed = await addFeed(feed);
  if (!completeFeed) {
    return res.status(500).json({
      error: 'Could not create feed',
    });
  }
  return res.status(201).json(completeFeed);
}

module.exports = {
  httpGetFeed,
  httpCreateFeed,
};
