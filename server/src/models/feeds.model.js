const feeds = require('./feeds.mongo');

async function findFeed(id) {
  try {
    return await feeds.findOne({
      feedNumber: id,
    })
  } catch (error) {
    console.error(`Could not find feed ${id}`)
  }
}

/**
 * Insert mock data
 */
const mockFeed = {
  feedNumber: 1,
  feedTitle: 'Temp-title',
  posts: [],
  canSubsPost: false,
  inviteLink: 'temp-link',
  subscribers: [],
  removedSubscribers: [],
};

async function saveFeedToDb(feed) {
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
  await saveFeedToDb(mockFeed);
}

module.exports = {
  insertTempData,
  findFeed,
};
