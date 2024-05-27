import React, { useState } from "react";
import { FaShareSquare } from "react-icons/fa";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import ClapBtn from "./(withbehavior)/ClapBtn";

export default function ArtStateCard({ art }) {
  const [liked, setLiked] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const like = (e) => {
    setLiked(!liked);
  };
  const {
    _id,
    title,
    preview_description,
    clap_total,
    view_count,
    created_at,
    updated_at,
    published_at,
    cover_image,
    sub_group_id,
    tags,
    author_id,
    collections,
  } = art
  return (
    <div className="w-full rounded-2xl flex flex-row border-4 overflow-hidden h-24 items-stretch">
      <ClapBtn target={_id}></ClapBtn>
      <div className="btn btn-ghost btn-lg  w-1/3 flex justify-center items-between border-x-4 rounded-none h-auto ">
        <FaShareSquare className="text-4xl"></FaShareSquare>
        分享
      </div>
      <div
        className="btn btn-ghost btn-lg w-1/3 flex justify-center items-between rounded-none  h-auto"
        onClick={like}
      >
        {(liked || isHover) && (
          <IoBookmark className="text-4xl active:scale-90 text-red-500 " />
        )}
        {!liked && !isHover && (
          <IoBookmarkOutline className="text-4xl active:scale-90 transition" />
        )}
        收藏
      </div>
    </div>
  );
}
