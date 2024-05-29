import useSWR from "swr";
import { fetcher } from "@/utils/utils";
import moment from "moment";
import "moment/locale/zh-tw";
export default function LastMsg({ room_id, received }) {
  const { data, error, isLoading } = useSWR(
    `/api/art/room/${room_id}/last`,
    fetcher
  );
  if (error || data?.error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const { msg_id, sender_id, msg, createdAt, updatedAt } = data.data;
  return (
    <div className="flex justify-between w-full">
      <div className="text-sm opacity-70">{received?.msg || msg}</div>
      <div className="badge-sm text-zinc-400">
        {(received && "剛剛") || moment(createdAt).startOf("seconds").fromNow()}
      </div>
    </div>
  );
}
