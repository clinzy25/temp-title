case CREATE_FEED_SUCCESS:
    return {
      ...state,
      feedNumber: action.payload.feedNumber,
      feedTitle: action.payload.feedTitle,
      inviteLink: action.payload.inviteLink,
      feed_loading: false,
    };
    
const handleClick = async () => {
    const feedData = {
      canSubsPost: false,
      feedTitle: 'New title',
    };
    await dispatch(createFeedBegin(feedData));
  };
  
  export const CREATE_FEED_BEGIN = 'CREATE_FEED_BEGIN';
export const CREATE_FEED_SUCCESS = 'CREATE_FEED_SUCCESS';
export const CREATE_FEED_ERROR = 'CREATE_FEED_ERROR';

export const createFeedBegin = (feed) => ({
  type: CREATE_FEED_BEGIN,
  payload: feed,
});

export const createFeedSuccess = (response) => ({
  type: CREATE_FEED_SUCCESS,
  payload: response,
});

export const createFeedError = () => ({ type: CREATE_FEED_ERROR });

function* createFeedFlow(action) {
  try {
    const response = yield call(createFeed, action.payload);
    yield put(createFeedSuccess(response));
  } catch (error) {
    yield put(createFeedError());
  }
}

export const createFeed = async (feed) => {
  try {
    const response = await axios.post(`${API_URL}/feeds`, { feed });
    return response.data;
  } catch (e) {
    console.error(e);
    return e;
  }
};
