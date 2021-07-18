import axios from 'axios';

const API_URL = 'localhost:3001';

export const fetchFeed = async (url) => {
  try {
    const res = await axios.get(`${API_URL}/feed/${url}`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};
