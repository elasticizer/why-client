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
    , Filename: ''
} }) {
    const { SN
        , Name
        , Intro
        , Price
        , Nickname, Filename } = data
    return (
        <a
            className="group bg-gray overflow-hidden md:max-w-2xl md:flex gap-3"
        href='#'>
            <div className="md:shrink-0 relative    group-hover:scale-[1.1] transition-transform duration-500 ease-in-out hover:rounded-lg"	>
                <img
                    className="z-0 border-spacing-4 sm:rounded-2xl lg:rounded-[15px] sm:h-auto  sm:w-[580px]    md:h-[180px] md:w-[250px] object-fill"
                    src={Filename}
                    alt="Modern building architecture "
                />

            </div>


            <div className=" inline-flex flex-col space-y-2">
                <BsBookmarkHeart className="sm:my-2 lg:my-0 md:size-7 sm:size-9 text-red-500 " />
                <div className=" lg:h-12 md:h-7 sm:h-5 tracking-wide text-lg text-black font-bold ">
                    {Name}
                </div>
                <span className="block mt-1 text-sm leading-tight font-normal text-gray-500 ">
                    {Nickname}
                </span>
                <div className="inline-flex space-x-4 ">
                    <div className="inline-flex space-x-2 ">
                        <div className="mt-0.5 size-15 inline-flex  justify-center  text-yellow-400 ">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        <div className=" lg:text-sm text-base text-gray-500 hover:underline">
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

                <span className=" text-2xl font-bold tracking-tight  text-[#019fde]">
                    NT$<span>{Price}</span>
                </span>
            </div>
        </a>)
}
