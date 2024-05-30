import React from "react";
import useSWR from "swr";
import ArtCard from "./ArtCard";
import { IoCaretUp } from "react-icons/io5";
import { fetcher } from "@/utils/utils";

const ArtCardGroup = () => {
  const { data, error, isLoading } = useSWR("/api/art", fetcher);
  if (error || data?.error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <div className="flex flex-col gap-10">
        {data.data.map((v, i) => {
          return <ArtCard key={v._id} data={v}></ArtCard>;
        })}
      </div>
    </>
  );
};

export default ArtCardGroup;
