import React from 'react'
import { FaStar } from 'react-icons/fa';
import { MdPeopleAlt } from 'react-icons/md';
import { IoTimeOutline } from 'react-icons/io5';
import { BsBookmarkHeart } from 'react-icons/bs';

export default function Card({ data = {
    SN: ''
    , Name: ''
    , Intro: ''
    , Price: 0
    , Nickname: ''
} }) {
    console.log(data)
    const { SN
        , Name
        , Intro
        , Price
        , Nickname } = data
    return (
        <div
            className="group bg-gray rounded-xl overflow-hidden md:max-w-2xl md:flex gap-3">
            <div className="md:shrink-0 relative  group-hover:scale-105 transition-transform duration-500 ease-in-out "	>
                <img
                    className=" z-0 border-spacing-4 border rounded-[15px] h-60 w-full object-cover md:h-full md:w-60"
                    src="/image/group-1.jpg"
                    alt="Modern building architecture "
                />

            </div>


            <div className="inline-flex flex-col space-y-2">
                <BsBookmarkHeart className="size-7 text-red-500 " />
                <div className=" h-12 tracking-wide text-lg text-black font-bold ">
                    {Name}
                </div>
                <span className="block mt-1 text-sm leading-tight font-normal text-gray-500 ">
                    {Nickname}
                </span>
                <div className="flex space-between">
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

                <span className=" text-2xl font-bold tracking-tight  text-[#019fde]	 ">
                    NT$<span>{Price}</span>
                </span>
            </div>
        </div>)
}
