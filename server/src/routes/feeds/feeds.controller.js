const { findFeed, addFeed } = require('../../models/feeds/feeds.model');

async function httpGetFeed(req, res) {
  const feedId = +req.params.id;
  const foundFeed = findFeed(feedId);
  if (!foundFeed) {
    return res.status(404).json({
      error: 'Feed not found',
    });
  }
  const feed = await findFeed(feedId);
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
