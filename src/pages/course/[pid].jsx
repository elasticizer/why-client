/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import SecTwo from '@/components/courseLesson/SecTwo';
import SecThird from '@/components/courseLesson/SecThird';
import Video from '../../components/coursevideo/video';

import Home from '../../layouts/home';
// `./course/$[pid]`


export default function CourseLesson() {
  const [course, setCourse] = useState({
    SN: ''
    , Name: ''
    , Intro: ''
    , Price: 0
    , Nickname: ''
    , Filename: ''
  })
  const getcourse = async (pid) => {
    const url = `/api/course`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
      //確定資料是陣列資料類型才設定到狀態當中
      if (Array.isArray(data)) {
        setCourse(data);
      }
    } catch (e) {
      console.error(e);
      setCourse([]);
    }
  };
  useEffect(() => {
    getcourse();
  }, []);
  return (
    <>
      {/* <h1>列表頁</h1> */}
      <Home>
        <div>
          <div className="container">
            <ol className=" flex items-center whitespace-nowrap">
              <li className=" pl-4 lg:pl-0 inline-flex items-center">
                <a
                  className="flex items-center text-xl font-medium text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
                  href="#">
                  全部領域
                </a>
                <svg
                  className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </li>
              <li
                className="inline-flex items-center text-xl font-semibold  text-gray-800 truncate"
                aria-current="page">
                網頁設計
              </li>
            </ol>
          </div>
        </div>
        <div className=" bg-[#FFFCF9]">
          <div className="lg:relative top-0 w-full h-full inline-block justify-center">
            <div className="w-full h-auto lg:absolute top-200 left-300 -z-1 ">
              <Video />
            </div>
            <div className="w-full lg:absolute top-200 left-500 -z-1">
              <SecTwo />
            </div>
          </div>

          {/* <div className="w-20 h-600 left-0 text-sm border border-y-red-300 bg-green-400 z-50 sticky top-20 ">
					找不到喜歡的課程嗎: 來看看其他領域吧~
				</div> */}
          <div className="mt-auto container  border">

            {/* Sec1-麵包屑 */}
            
            <SecThird />
          </div>
        </div>
      </Home>
    </>
  );

}



