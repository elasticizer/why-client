import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import useSWR from "swr";
import AuthorCard from "./AuthorCard";
import clsx from "clsx";
import FollowBtn from "./(withbehavior)/FollowBtn";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Author = ({ author_id }) => {
  const { data, error, isLoading } = useSWR(
    `/api/art/author/${author_id}`,
    fetcher
  );

  if (error || data?.error) return <div>failed to load</div>;
  if (isLoading) return <div>loadingAuthor</div>;

  const { sn, _id, name, profile_image_url, meta_description, links } =
    data.data;
  return (
    <>
      <a
        className="flex items-center gap-4 max-w-[45%]"
        href={`/art/author/${author_id}`}
        target="_blank"
      >
        <div className="w-20 h-20 overflow-hidden rounded-full card-img hidden md:block author-avator">
          <img
            src={profile_image_url}
            alt=""
            className="object-cover w-20 h-20"
          />
        </div>
        {/* AuthorCard */}
        {/* {isHovered ? <AuthorCard></AuthorCard> : <></>} */}
        <div className="flex flex-col align-middle gap-2">
          <h2 className="hidden md:inline-block">{name}</h2>
          <FollowBtn target={author_id}></FollowBtn>
        </div>
      </a>
    </>
  );
};

export default Author;
