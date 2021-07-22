import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const fetchFeed = async () => {
  try {
    /** TODO: unique identifier */
    const response = await axios.get(`${API_URL}/feeds/1`);
    return response.data;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export const createFeed = async (feed) => {
  try {
    const response = await axios.post(`${API_URL}/feeds`, { feed });
    return response.data;
  } catch (e) {
    console.error(e);
    return e;
  }
};
