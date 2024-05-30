import React, { useState } from 'react';
// 實心圖
import { BsBookmarkHeartFill } from 'react-icons/bs';
// 空心圖
import { BsBookmarkHeart } from 'react-icons/bs';


export default function CarIimg() {
    const [hover, setHover] = useState(false);
  return (
      <>
          <div className=" md:shrink-0 relative  group-hover:scale-105 transi   tion-transform duration-500 ease-in-out "
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
             >
              <div className="absolute end-5 top-3 size-9 " >
                  {hover ? <BsBookmarkHeart className="size-7 text-red-500 " /> : ''}
              </div>
              <img
                  className=" z-0 border-spacing-4 border rounded-[15px] h-60 w-full object-cover md:h-full md:w-60 "
                  src="/image/group-1.jpg"
                  alt="Modern building architecture "
              />
          </div>
    </>
  )
}
