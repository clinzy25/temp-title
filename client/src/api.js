import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const fetchFeed = async (feedNumber) => {
  try {
    const response = await axios.get(`${API_URL}/feeds/${feedNumber}`);
    return response.data;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export const authenticateUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/auth/google`);
    return response.data;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export const logout = async () => {
  try {
    const response = await axios.get(`${API_URL}/auth/logout`);
    return response.data;
  } catch (e) {
    console.error(e);
    return e;
  }
};
