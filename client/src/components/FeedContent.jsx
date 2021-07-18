import React from 'react';
import TextPost from './TextPost';
import ImagePost from './ImagePost';
import VideoPost from './VideoPost';
import ErrorPost from './ErrorPost';

const FeedContent = () => {
  const postType = 'detect post type';

  switch (postType) {
    case 'Text': {
      return <TextPost />;
    }
    case 'Image': {
      return <ImagePost />;
    }
    case 'Video': {
      return <VideoPost />;
    }
    default: {
      return <ErrorPost />;
    }
  }
};

export default FeedContent;
