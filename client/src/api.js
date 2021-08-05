import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

/**
 * IMPORTANT: All api calls should have the 'withCredentials: true' header to pass
 * req.user to each request for operations on the backend
 */

export const fetchFeed = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/feeds`,
      {
        withCredentials: true,
      }
    );
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
    const response = await axios.post(`${API_URL}/feeds/create`, feed, {
      withCredentials: true,
    });
    return response.data;
  } catch (e) {
    console.error(e);
    return e;
  }
};
