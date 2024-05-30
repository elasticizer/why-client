import React, { useState } from 'react'
import Image from 'next/image';
import { MdThumbUp } from 'react-icons/md';
import { FaStar } from 'react-icons/fa6';

export default function Review({ SN, sethandtime, content, nickname, whenCreated }) {

    return (
        <>
        
            <div className=" mb-3 p-5  mx-6 rounded-lg bg-white shadow-lg  ">
                <div className="  inline-flex items-center gap-2">
                    <div className=" w-12 h-12  bg-white/opacity-0 rounded-3xl shadow border-black/opacity-5 justify-center items-center inline-flex">
                        <img
                            className="inline-block size-[46px] rounded-full"
                            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                            alt="Image Description"
                        />
                    </div>

                    <div className="   flex flex-col items-start gap-1">
                        <div className="flex gap-3">
                            <div className=" text-zinc-600 text-sm font-semibold font-['Inter'] leading-snug">
                                {nickname}
                            </div>
                            <div className=" text-neutral-400 text-[13.02px] font-normal font-['Inter'] leading-snug">
                                {whenCreated}
                            </div>
                        </div>
                        <span className="flex">
                            <FaStar className="  text-[15px]  text-yellow-300 " />
                            <FaStar className="  text-[15px]  text-yellow-300 " />
                            <FaStar className="  text-[15px]  text-yellow-300 " />
                            <FaStar className="  text-[15px]  text-yellow-300 " />
                            <FaStar className="  text-[15px]  text-yellow-300 " />
                        </span>
                    </div>
                </div>
               
                <div className="w-full mt-3 text-neutral-500 text-sm font-normal font-['Inter'] leading-relaxed text-justify tracking-wide " >
                 
                    </div>
              

                <hr className="w-full  my-3  " />

                <div className="items-center inline-flex gap-2 justify-start w-full">
                    <div className=" text-zinc-600 text-sm font-semibold font-['Inter'] leading-snug">
                        盧美妏心理師
                    </div>
                    <div className="px-2 py-0.5 rounded-lg text-blue-500 flex text-center border border-blue-500 text-xs font-semibold font-['Inter'] leading-snug">
                        授課老師
                    </div>
                    <div className=" text-neutral-400 text-[13.02px] font-normal font-['Inter'] leading-snug">
                        2023-05-21
                    </div>
                </div>

                <div className="w-full my-3 text-neutral-500 text-sm font-normal font-['Inter'] leading-relaxed text-justify tracking-wide line-clamp-3">
                    感謝你的回饋與支持！
                </div>
                <div className="w-full items-center gap-2 inline-flex">
                    <div className="self-stretch rounded-lg border-2 border-green-100 justify-center items-center gap-1 inline-flex">
                        <button className="mx-auto px-2 py-2 active:bg-green-100 flex text-center text-teal-500 text-sm font-semibold font-['Inter'] leading-snug">
                            <MdThumbUp className="mr-1" />
                            有幫助
                        </button>
                    </div>
                    <div className="text-zinc-600 text-sm font-normal font-['Inter'] leading-snug">
                        9 人覺得有幫助
                    </div>
                </div>

            </div>
        </>
    )
}
