/**
 * Check if user is authenticated, then send user data from req.user
 * @param {object} req -- If user is logged in, should contain .user property
 * @returns {object} -- user data
 */
function getUser(req, res) {
  if (req.user) {
    return res.status(200).json(req.user);
  }
  return res.status(404).json({ error: 'User not found' });
}

module.exports = getUser;
