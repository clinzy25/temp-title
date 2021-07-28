import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchFeed = async (userId) => {
  try {
    const response = await axios.post(`${API_URL}/feeds`, { userId });
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
    const response = await axios.post(`${API_URL}/feeds/create`, feed);
    return response.data;
  } catch (e) {
    console.error(e);
    return e;
  }
};
