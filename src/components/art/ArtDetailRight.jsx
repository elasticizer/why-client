import React from "react";
import AuthorCard from "./AuthorCard";
import ArtStateCard from "./ArtStateCard";
import useSWR from "swr";
import { fetcher } from "@/utils/utils";
import CommentBoard from "./CommentBoard";
import ClapTotal from "./ClapTotal";

export default function ArtDetailRight({ id }) {
  const { data, error, isLoading } = useSWR(`/api/art/${id}`, fetcher);
  if (error || data?.error) return <div>failed to load</div>;
  if (isLoading) return <div>loadingAuthor</div>;
  return (
    <>
      <AuthorCard id={data.data.author_id}></AuthorCard>
      <ArtStateCard art={data.data}></ArtStateCard>
      <ClapTotal total={data.data.clap_total} art_id={data.data._id}></ClapTotal>

      <CommentBoard id={id}></CommentBoard>
    </>
  );
}
