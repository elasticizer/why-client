
import React, { useState, useRef, createRef } from 'react'


export default function Search({ setSearch }) {
    const handleData = (e) => {
        e.preventDefault()
        setSearch(inputEl.current.value)
    }

    const inputEl = createRef()

    return (
        <>
            <div className="sm:mt-12 mx-auto max-w-xl relative ">
                {/* Form */}
                <form onSubmit={handleData}>
                    <div className=" relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-gray-900/20">
                        <div className="flex-[1_0_0%] ">
                            <label
                                htmlFor="hs-search-article-1"
                                className="block text-sm text-gray-700 font-medium dark:text-white"
                            >
                                <span className="sr-only">搜尋熱門: 程式設計</span>
                            </label>
                            <input
                                type="text"
                                name="hs-search-article-1"
                                id="hs-search-article-1"
                                className="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                placeholder="搜尋熱門: 程式設計"
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
                <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                    <svg
                        className="w-16 h-auto text-orange-500"
                        width={121}
                        height={135}
                        viewBox="0 0 121 135"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                            stroke="currentColor"
                            strokeWidth={10}
                            strokeLinecap="round"
                        />
                        <path
                            d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                            stroke="currentColor"
                            strokeWidth={10}
                            strokeLinecap="round"
                        />
                        <path
                            d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                            stroke="currentColor"
                            strokeWidth={10}
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </div>
        </>
    )
}
