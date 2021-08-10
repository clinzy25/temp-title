import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

/**
 * IMPORTANT: All api calls should have the 'withCredentials: true' header to pass
 * req.user to each request for operations on the backend
 */

export const fetchFeed = async (feedTitle) => {
  const response = await axios.post(`${API_URL}/feeds`, feedTitle, {
    withCredentials: true,
  });
  return response.data;
};

export const fetchUser = async () => {
  const response = await axios.get(`${API_URL}/users`, {
    withCredentials: true,
  });
  return response;
};

export const createFeed = async (feed) => {
  const response = await axios.post(`${API_URL}/feeds/create`, feed, {
    withCredentials: true,
  });
  return response.data;
};

export const deleteFeed = async (feedId) => {
  const response = await axios.delete(
    `${API_URL}/feeds`,
    { data: feedId },
    {
      withCredentials: true,
    }
  );
  return response.data;
};
