import axios from 'axios';

const API_URL = 'http://localhost:3001';

/** TODO: unique identifier */
export const fetchFeed = async () => {
  try {
    const res = await axios.get(`${API_URL}/feeds/1`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};
