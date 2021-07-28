const { findFeed, addFeed } = require('../../models/feeds/feeds.model');

async function httpGetFeed(req, res) {
  const { userId } = req.body;
  const feed = await findFeed(userId);
  if (!feed) {
    return res.status(404).json({
      error: 'Feed not found',
    });
  }
  return res.status(200).json(feed);
}

async function httpCreateFeed(req, res) {
  const feed = req.body;
  const completeFeed = await addFeed(feed);
  return res.status(201).json(completeFeed);
}

module.exports = {
  httpGetFeed,
  httpCreateFeed,
};
