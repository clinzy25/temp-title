const feeds = require('./feeds.mongo');

async function findFeed(id) {
  try {
    return await feeds.findOne({
      feedNumber: id,
    });
  } catch (error) {
    console.error(`Could not find feed ${id}`);
    return error;
  }
}

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

/** TODO: generate links */
function generateInviteLink() {
  return 'Temp-link';
}

async function getLastFeedNumber() {
  const lastFeed = await feeds.findOne().sort('-feedNumber');
  if (!lastFeed) {
    return 1;
  }
  return lastFeed.feedNumber;
}

async function addFeed(feed) {
  const feedNumber = (await getLastFeedNumber()) + 1;
  /** TODO: remove .concat */
  const inviteLink = generateInviteLink().concat(feedNumber);

  const newFeed = Object.assign(feed, {
    feedNumber,
    inviteLink,
    posts: [],
    subscribers: [],
    removedSubscribers: [],
  });

  await saveFeedToDb(newFeed);
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

async function insertTempData() {
  await saveFeedToDb(mockFeed);
}

module.exports = {
  insertTempData,
  findFeed,
  addFeed,
};
