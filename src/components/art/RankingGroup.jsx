import React from "react";
import Ranking from "./Ranking";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function RankingGroup() {
  const { data, error, isLoading } = useSWR("/api/art/ranking", fetcher);
  if (error||data?.error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div className="pt-1 ranking">
      <h2 className="text-xl mb-8 bg-orange-100 text-center font-black rounded-xl py-3 shadow-right-bottom-sm text-[#ff8d0a] tracking-widest">
        熱門文章
      </h2>
      <ul className="flex flex-col gap-5 pb-20">
        <Ranking ranking={1} art={data.data[0]}></Ranking>
        <Ranking ranking={2} art={data.data[1]}></Ranking>
        <Ranking ranking={3} art={data.data[2]}></Ranking>
      </ul>
    </div>
  );
}
