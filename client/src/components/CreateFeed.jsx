import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createFeedBegin } from '../redux/feed/feed_actions';

/**
 * A form that renders conditionally based on whether the user has 0 feeds
 * Propts user to create a new feed
 * Because it unmounts itself, user will be 'redirected' to the feed they create
 * @component
 * @param {object} user
 * @param {function} setUnmountCreateFeed
 * @returns A form to create a feed
 */
const CreateFeed = ({ user, setUnmountCreateFeed }) => {
  const feedNameRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const feedData = {
      host_id: user._id,
      feedTitle: feedNameRef.current.value,
    };
    await dispatch(createFeedBegin(feedData));
    /** Unmount this component */
    setUnmountCreateFeed(true);
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
