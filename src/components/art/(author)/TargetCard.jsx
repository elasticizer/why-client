import FollowBtn from "../(withbehavior)/FollowBtn";
import MsgBtn from "../(withbehavior)/MsgBtn";
import { useAuth } from "../../../hooks/use-auth";
import useSWR from "swr";
import { fetcher } from "@/utils/utils";

export default function TargetCard({ target_id }) {
  const { auth } = useAuth();

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
  const isAccountOwner = auth?.id === author_id;
  return (
    <div className="flex flex-row bg-base-100 shadow-xl max-w-[1550px] w-full m-auto px-10 py-5">
      <div className="rounded-2xl overflow-hidden h-48 w-48 ">
        <img src={profile_image_url} alt="img" className="h-48 w-48 " />
      </div>
      <div className="card-body items-stretch max-w-[calc(100%-17rem)]">
        <h2 className="card-title tracking-widest text-2xl font-black">
          {name}
        </h2>
        <p className="tracking-widest text-xl text-zinc-500">
          {meta_description}
        </p>
        <div className="flex gap-4 justify-end">
          {!isAccountOwner && (
            <>
              <FollowBtn large={true} target={author_id}></FollowBtn>
              <MsgBtn
                target={author_id}
                user={auth?.id}
                setOpen={() => {}}
              ></MsgBtn>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
