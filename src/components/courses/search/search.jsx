import React, { useState, useRef, createRef } from 'react';
export default function Search({ setSearch }) {
	const handleData = e => {
		e.preventDefault();
		setSearch(inputEl.current.value);
	};

	const inputEl = createRef();

    return (
        <>
            <div className="mx-auto max-w-xl relative ">
                {/* Form */}
                <form onSubmit={handleData}>
                    <div className=" relative z-10 flex space-x-3    rounded-lg shadow-lg shadow-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-gray-900/20">
                        <div className="flex-[1_0_0%] ">
                            <label
                                htmlFor="hs-search-article-1"
                                className="block text-sm text-gray-700 font-medium dark:text-white"
                            >
                                <span className="sr-only">搜尋熱門: 心理學</span>
                            </label>
                            <input
                                type="text"
                                name="hs-search-article-1"
                                id="hs-search-article-1"
                                className="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 border-2"
                                placeholder="搜尋熱門: 心理學"
                                ref={inputEl}
                            />
                        </div>
                        <div className="flex-[0_0_auto] ">
                            <button
                                type="submit"
                                className="size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                href="#"
                            >
                                <svg
                                    className="flex-shrink-0 size-5"
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
                                    <circle cx={11} cy={11} r={8} />
                                    <path d="m21 21-4.3-4.3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
                {/* End Form */}
                {/* SVG Element */}
              
            </div>
        </>
    )
}
