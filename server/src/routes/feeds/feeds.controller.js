async function httpGetFeed(req, res) {
  const feed = await httpGetFeed();
  return res.status(200).json(feed);
}

module.exports = {
  httpGetFeed,
};
