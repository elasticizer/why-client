import React from 'react';
import Player from './content';

export default function Video() {
  const videoUrl = '/video/design02.mp4';
  return (
    <>
      
        <Player videoSrc={videoUrl} />
     
    </>
  );
}