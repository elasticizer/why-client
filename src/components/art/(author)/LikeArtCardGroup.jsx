import React from "react";
import { fetcher } from "@/utils/utils";
import useSWR from "swr";
import ArtCard from "../ArtCard";

export default function LikeArtCardGroup({ tab, author_id }) {
  let url = ";";
  switch (tab) {
    case "default":
      url = `/api/art`;
      break;
    case "released":
      url = `/api/art/author/${author_id}/released`;
      break;
    case "clapped":
      url = `/api/art/author/${author_id}/clap-art`;
      break;
    case "liked":
      url = `/api/art/author/${author_id}/like-art`;
      break;
  }

  const { data, error, isLoading } = useSWR(url, fetcher);
  if (error || data?.error) return <div className="w-[1200px] h-[600px] flex justify-center items-center">failed to load</div>;
  if (isLoading) return <div className="w-[1200px] h-[600px] flex justify-center items-center">loading...</div>;

  return (
    <>
      <div className="flex flex-col gap-10 min-h-[600px] mb-20">
        {data?.data.length > 0 &&
          data.data.map((v) => {
            return <ArtCard key={v._id} data={v}></ArtCard>;
          })}
        {data?.data.length < 1 && (
          <div className="flex justify-center items-center gap-10 w-[1200px] h-[600px] text-title-tracking-widest ">
            空空如也
          </div>
        )}
      </div>
    </>
  );
}
