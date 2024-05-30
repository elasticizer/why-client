/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import SecThird from '../../components/courses/detail/SecThird';
import SecTwo from '../../components/courses/detailbanner/SecTwo';
import Video from '../../components/courses/detailbanvideo/video';
import Link from 'next/link';




import Home from '../../layouts/home';



export default function CourseLesson() {



  return (
    <>
      {/* <h1>列表頁</h1> */}
      <Home>
        <div className="bg-[#fdf9f7]">
          <div className="relative top-0 w-full  justify-center">
            <div className=" w-full h-20 lg:absolute top-0  -z-1 ">
              <Video />
            </div>
            <div className=" top-0 lg:top-10 h-96 w-full absolute   -z-1">
              <SecTwo />
            </div>
          </div>

          {/* <div className="w-20 h-600 left-0 text-sm border border-y-red-300 bg-green-400 z-50 sticky top-20 ">
					找不到喜歡的課程嗎: 來看看其他領域吧~
				</div> */}
          <div className=" container  border border-white">
            <SecThird />
          </div>
          {/* <button
            href="/course"
            className="rounded-lg px-2 py-1 inline-flex flex-shrink-0 justify-center items-center size-18 text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {'<<'}返回上一頁
          </button> */}
        </div>

      </Home>
    </>
  );

}



