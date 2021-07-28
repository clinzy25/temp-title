import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createFeedBegin } from '../../redux/feeds/feed_actions';
import { fetchUserBegin } from '../../redux/user/user_actions';

const CreateFeed = ({ user, setCreatedFirstFeed }) => {
  const feedNameRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const feedData = {
      host_id: user._id,
      feedTitle: feedNameRef.current.value,
    };
    await dispatch(createFeedBegin(feedData));
    setCreatedFirstFeed(true);
  };

  return (
    <form>
      <span>Type a name for the feed: </span>
      <input ref={feedNameRef} type='text' />
      <button onClick={(e) => handleSubmit(e)} type='submit'>
        Start a Feed
      </button>
    </form>
  );
};

export default CreateFeed;
