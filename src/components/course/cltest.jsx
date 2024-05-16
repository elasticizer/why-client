import React, { useEffect, useState } from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import { MdPeopleAlt } from 'react-icons/md';
import { IoTimeOutline } from 'react-icons/io5';
import { FaRegBookmark } from 'react-icons/fa6';
// 實心圖
import { BsBookmarkHeartFill } from 'react-icons/bs';
// 空心圖
import { BsBookmarkHeart } from 'react-icons/bs';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/course');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>


      {courses.map(course => (
        <div key={course.SN}
          className={` group bg-gray rounded-xl overflow-hidden md:max-w-2xl md:flex gap-3 `}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}>

          <div className="md:shrink-0 relative  group-hover:scale-105 transition-transform duration-500 ease-in-out ">
           
            <div className="absolute end-5 top-3 size-9 ">
              {hover ? <BsBookmarkHeart className="size-7 text-red-500 " /> : ''}
            </div>
            
            <img
              className="z-0 border-spacing-4 border rounded-[20px] h-48 w-full object-cover md:h-full md:w-48"
              src="/img/group-1.jpg"
              alt="Modern building architecture "
            />
          </div>
          <div className="inline-flex flex-col space-y-1">
            <div className="  tracking-wide text-lg text-black font-bold ">
              {course.Name}
            </div>
            <span className="block mt-1 text-sm leading-tight font-normal text-gray-500 ">
              講師
            </span>

            <div className="flex space-x-3">
              <div className="inline-flex space-x-1 ">
                <div className="mt-0.5 size-15 inline-flex  justify-center  rounded-full text-yellow-400 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <div className="mb-5 lg:text-sm text-base text-gray-500 hover:underline">
                  5.0 <span>( 168 )</span>
                </div>
              </div>
              <div className="inline-flex ">
                <div className="mt-0.5 size-5 flex justify-center  rounded-full bg-blue-0 text-blue-600">
                  <MdPeopleAlt />
                </div>
                <div className="lg:text-sm text-base text-gray-500">
                  1,990 <span className="font-bold"></span>
                </div>
              </div>
              <div className="inline-flex ">
                <div className="mt-0.5 size-5 flex justify-center  rounded-full bg-blue-0 text-blue-600">
                  <IoTimeOutline />
                </div>
                <div className="lg:text-sm text-base text-gray-500">15.1H</div>
              </div>
            </div>
            <span className="mb-8 text-2xl font-bold tracking-tight  text-[#019fde]	 ">
              NT$<span>{course.Price}</span>
            </span>
          </div>

        </div>
      ))
      }
    </div>
	
  );
};

export default CourseList;

//此為GPT用箭頭函數跟函式表達式預設導出
