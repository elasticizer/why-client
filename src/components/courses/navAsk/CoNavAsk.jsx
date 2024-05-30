import React, { useState, useEffect, useCallback } from 'react';
import { TbMessageCircle2 } from 'react-icons/tb';
import { IoArrowRedo } from 'react-icons/io5';
import { BsFillSendFill } from 'react-icons/bs';

export default function CoNavAsk({ SN, content, firstname, res, whenCreated, nickname, setSendreview }) {


    return (
        <div className="w-full h-auto p-5 border inline-flex gap-4">
            <div className="w-12 h-12 bg-white/opacity-0 rounded-3xl shadow border-black/opacity-5 justify-center items-center inline-flex">
                <img
                    className="inline-block size-[46px] rounded-full"
                    src="/images/cat-5.jpg"
                    alt="Image Description"
                />
            </div>
            <div className="w-full inline-flex flex-col">
                <div className="inline-flex gap-3">
                    <div className="text-zinc-600 text-sm font-semibold font-['Inter'] leading-snug">
                        {nickname || firstname}
                    </div>
                    <div className="text-neutral-400 text-[13.02px] font-normal font-['Inter'] leading-snug">
                        {new Date(`${whenCreated}Z`).toLocaleString()}
                    </div>
                </div>
                <div className="w-full mt-2 text-zinc-700 text-sm font-medium font-['Inter'] leading-snug"
                >
                    {content}
                </div>
                {/* 老師回覆 */}
                {/* <div className="flex flex-col items-start gap-2 bg-neutral-200/55 rounded-lg p-4 mt-5 space-y-2">
                    <div className="flex gap-3">
                        <div className="text-zinc-600 text-sm font-semibold font-['Inter'] leading-snug">
                            盧美妏心理師
                        </div>
                        <div className="px-2 py-0.5 rounded-lg text-blue-500 flex text-center border border-blue-500 text-xs font-semibold font-['Inter'] leading-snug">
                           授課老師
                        </div>
                        <div className="text-neutral-400 text-[13.02px] font-normal font-['Inter'] leading-snug">
                            2023-05-06
                        </div>
                    </div>
                    <div className="text-zinc-600 text-sm font-medium font-['Inter'] leading-relaxed">
                        {res}
                    </div>
                </div> */}
                {/*                
                    <div className={`w-full flex justify-between items-center hs-collapse `}>
                    <button
             
                        type="button"
                        className="font-semibold text-sm hs-collapse-toggle py-3 px-4 inline-flex items-center gap-x-2 rounded-lg border-gray-200  text-gray-500 hover:text-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        id="hs-basic-collapse"
                        data-hs-collapse="#hs-basic-collapse-heading">
                        <IoArrowRedo />
                        回覆
                    </button>
                    <div className="flex gap-2 font-semibold text-sm justify-start items-center p-4 hover:text-blue-500 text-zinc-600 font-['Inter'] leading-snug">
                        <TbMessageCircle2 />
                        我也想問
                    </div>
                </div>
                <div
                    id="hs-basic-collapse-heading"
                    className="hs-collapse w-full overflow-hidden transition-[height] duration-300"
                   
                    aria-labelledby="hs-basic-collapse">
                    <hr className="my-5" />
                    <div className="relative">
                        <textarea
                            id="hs-floating-textarea-gray"
                            className="peer p-4 pt-9 block w-full h-10rem bg-gray-200/55 border-transparent rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                            placeholder="留下您的回覆內容"
                            defaultValue={''}
                        />
                        <label
                            htmlFor="hs-floating-textarea-gray"
                            className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-blue-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500">
                            留下您的回覆內容
                        </label>
                    </div>
                    <div className="pt-2 w-full flex justify-end gap-2">
                        <button
                            
                            type="button"
                            className="rounded-lg px-2 py-1 inline-flex flex-shrink-0 justify-center items-center size-18 text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            取消
                        </button>
                        <button
                            type="submit"
                            data-hs-overlay="#hs-sign-out-alert"
                            className="rounded-lg px-2 py-1 inline-flex flex-shrink-0 justify-center items-center size-18 text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            送出
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    );
}