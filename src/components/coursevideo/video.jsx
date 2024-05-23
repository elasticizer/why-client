import React from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import { MdPeopleAlt } from 'react-icons/md';
import '@/styles/test.module.css';
// import videoSource from "./design01.mp4"; // 將影片檔案導入

export function Video() {
  return (
    <div className="  backdrop-filter backdrop-saturate-125 backdrop-opacity-20">
      <video
        autoPlay
        loop
        muted
        className=" rounded-lg w-full h-auto">
        <source
          src="/video/design02.mp4"
          type="video/mp4"
        />

      </video>
      <div className="content"></div>
    </div>
  );
}

export default Video;