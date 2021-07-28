import axios from 'axios';

const API_URL = 'https://localhost:3001';

export const fetchFeed = async (feedNumber) => {
  try {
    const response = await axios.get(`${API_URL}/feeds/${feedNumber}`);
    return response.data;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export const fetchUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/auth/users`, {
      withCredentials: true,
    });
    return response;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export const createFeed = async (feed) => {
  try {
    const response = await axios.post(`${API_URL}/feeds`, feed);
    return response.data;
  } catch (e) {
    console.error(e);
    return e;
  }
};
