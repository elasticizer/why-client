import clsx from "clsx";
import React, { useState } from "react";
import { HiEye } from "react-icons/hi";

import { IoCaretUp } from "react-icons/io5";
import AuthorTiny from "./AuthorTiny";

const Ranking = ({ ranking, art }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <li className="transition card  border-4 border-white hover:border-orange-200 shadow-xl p-5 font-medium leading-6 text-gray-900 flex flex-col gap-5">
        <div className="flex flex-row justify-between">
          <span
            className={clsx(
              `text-9xl italic font-black -ml-5 z-10`,
              ranking === 1 && "text-orange-500",
              ranking === 2 && "text-orange-400",
              ranking === 3 && "text-orange-300"
            )}
          >
            {ranking}
          </span>
        </div>
        <div className="rounded-lg overflow-hidden ">
          <img
            src={art.cover_image}
            alt="img"
            className="object-cover h-36 w-48"
          />
        </div>
        <div className="flex flex-col items-end gap-3">
          <div className="mr-auto">
            <span className="text-xl font-black transition hover:text-orange-500 hover:cursor-pointer">
              {art.title}
            </span>
            <AuthorTiny id={art.author_id}></AuthorTiny>
          </div>
          <div
            className="flex items-center gap-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className="flex justify-start items-center gap-2 tooltip tooltip-bottom transition hover:bg-slate-100 rounded-full px-4 py-1"
              data-tip={`${art.clap_total} 人贊同`}
            >
              <IoCaretUp className="icon" />
              <p>{art.clap_total}</p>
            </div>
            <div
              className="flex justify-start items-center gap-2 tooltip tooltip-bottom transition hover:bg-slate-100 rounded-full px-4 py-1"
              data-tip={`${art.view_count}人看過`}
            >
              <HiEye className="icon" />
              <span>{art.view_count}</span>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default Ranking;
