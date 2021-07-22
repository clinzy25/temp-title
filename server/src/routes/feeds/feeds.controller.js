const { findFeed } = require('../../models/feeds.model');

async function httpGetFeed(req, res) {
  const feedId = +req.params.id;
  const foundFeed = findFeed(feedId);
  
  if (!foundFeed) {
    return res.status(404).json({
      error: 'Feed not found',
    });
  }
  
  const feed = await findFeed(feedId);
  return res.status(200).json(feed)
}

module.exports = {
  httpGetFeed,
};
