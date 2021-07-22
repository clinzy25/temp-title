const feeds = require('./feeds.mongo');

const mockFeed = {
  feedNumber: 1,
  feedTitle: 'Temp-title',
  posts: [],
  canSubsPost: false,
  inviteLink: 'temp-link',
  subscribers: [],
  removedSubscribers: [],
};

async function saveFeed(feed) {
  await feeds.findOneAndUpdate(
    {
      feedNumber: feed.feedNumber,
    },
    feed,
    {
      upsert: true,
    }
  );
}

async function insertTempData() {
  await saveFeed(mockFeed);
}

module.exports = {
  insertTempData,
};
