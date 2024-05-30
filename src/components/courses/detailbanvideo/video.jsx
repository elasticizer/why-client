import React from 'react';

import '@/styles/test.module.css';


export function Video() {
  return (
    <div className=" ">
      <video
        autoPlay
        loop
        muted
        className=" contrast-50  w-full ">
        <source
          src="/video/job.mp4"
          type="video/mp4"
        />

      </video>
    
    </div>
  );
}

export default Video;