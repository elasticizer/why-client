import useSWR from "swr";
import { fetcher } from "@/utils/utils";

export default function MsgTarget({ target_id }) {
  const { data, error, isLoading } = useSWR(
    `/api/art/author/${target_id}`,
    fetcher
  );
  if (error || data?.error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <div className="author-banner w-full flex justify-center items-center">
        loading...
      </div>
    );
  const {
    sn,
    id: author_id,
    name,
    profile_image_url,
    meta_description,
    links,
  } = data.data;

  return (
    <>
      <div className="flex items-center gap-5">
        <div className="avatar">
          <div className="w-14 rounded-xl border-4 border-white ">
            <img src={profile_image_url} />
          </div>
        </div>
        <span className="text-xl font-black ">{name}</span>
      </div>
    </>
  );
}
