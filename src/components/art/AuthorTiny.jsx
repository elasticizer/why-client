import React from "react";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function AuthorTiny({ id }) {
  const { data, error, isLoading } = useSWR(`/api/art/author/${id}`, fetcher);
  if (error || data?.error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  const author = data.data;
  return (
    <a
      className="flex flex-row items-center gap-3 "
      href={`/art/author/${id}`}
      target="_blank"
    >
      <div className="w-12 h-12 rounded-full overflow-hidden border-4">
        <img
          src={author.profile_image_url}
          className="w-12 h-12 object-cover "
        />
      </div>
      <span className="">{author.name}</span>
    </a>
  );
}
