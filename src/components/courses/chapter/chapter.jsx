import React, { useState } from 'react';
import Video from './video'

export default function Chapter({ SN, title }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <div
                className="border-b border-gray-200 my- hs-accordion-content w-full overflow-hidden transition-[height] duration-300 justify-start"
                aria-labelledby="hs-active-bordered-heading-two">
                <div className="w-full my-1 hover:bg-gray-300/55 pl-[26.20px] pr-6 pt-[7.50px] pb-2 justify-center items-start gap-[7.80px] inline-flex">
                    {/* 編號 */}
                    <div className="w-8 h-6 rounded-full mr-1 bg-orange-400 justify-center items-center inline-flex">
                        <div className="text-white text-sm font-semibold font-['Inter'] leading-snug">
                            {SN}
                        </div>
                    </div>
                    {/* 單元名稱 */}
                    <div className="w-full text-black/opacity-60 text-base font-normal font-['Inter'] leading-relaxed">
                        {title}
                    </div>
                    {/* 觀看影片按鈕 */}
                    <div className="w-40 rounded-sm justify-center inline-flex">
                        <button
                            type="button"
                            onClick={handleModalToggle}
                            className="py-1 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-100 text-red-600 hover:bg-red-200 disabled:opacity-50 disabled:pointer-events-none "
                        >
                            影片觀看
                        </button>
                    </div>
                    <div className="w-8 self-stretch inline-flex">
                        <div className="content-center w-[30.26px] h-[26px] text-right text-neutral-400 text-xs font-normal font-['Inter'] leading-relaxed">
                            25:30
                        </div>
                    </div>
                </div>
            </div>

            {/* 模態框 */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-[80] overflow-x-hidden overflow-y-auto flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                >
                    <div className="bg-white border shadow-sm rounded-xl w-full max-w-lg p-4 m-3">
                        <div className="flex justify-between items-center py-3 px-4 border-b">
                            <h3 className="font-bold text-gray-800">
                                <div className="w-8 h-8 rounded-full mr-1 bg-orange-400 justify-center items-center inline-flex">
                                    <div className="text-white text-sm font-semibold font-['Inter'] leading-snug">
                                        {SN}
                                    </div>
                                </div>{title}
                            </h3>
                            <button
                                type="button"
                                onClick={handleModalToggle}
                                className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100"
                            >
                                <span className="sr-only">Close</span>
                                <svg
                                    className="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-4">
                            <p className="text-gray-800">
                               <Video/>
                            </p>
                        </div>
                        <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
                            
                            <button
                                onClick={handleModalToggle}
                                type="button"
                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
                            >
                               返回
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
