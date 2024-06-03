import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/utils/utils";
import LastMsg from "./LastMsg";
import { pusherClient } from "@/utils/pusher";

export default function ContactLiItem({
  data: item,
  userId,
  setOpenConversation,
  setOpenMyMsg,
}) {
  const { id, room_id, member_id, user_id, createdAt, updatedAt } = item;
  const target = member_id === userId ? user_id : member_id;
  const { data, error, isLoading } = useSWR(
    `/api/art/author/${target}`,
    fetcher
  );
  const [msgs, setMsgs] = useState([]);
  const [received, setReceived] = useState(false);
  useEffect(() => {
    const channel = pusherClient.subscribe(room_id);
    console.log("Subscribed to room_id:", room_id);

    const handleIncomingMsg = (data) => {
      console.log("incoming-msg data:", data);
      setReceived(data);
    };

    channel.bind("incoming-msg", handleIncomingMsg);

    return () => {
      console.log("Unsubscribing from room_id:", room_id);
      channel.unbind("incoming-msg", handleIncomingMsg);
      pusherClient.unsubscribe(room_id);
    };
  }, []);

  if (error || data?.error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  function openConversation() {
    setOpenMyMsg(false);
    setOpenConversation(room_id);
  }
  const { name, profile_image_url, meta_description, links } = data.data;
  console.log("received", received);
  return (
    <li
      className="border-b-2  p-3 bg-white hover:cursor-pointer"
      onClick={openConversation}
    >
      <div className="flex items-center gap-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={profile_image_url} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between">
            <div className="font-bold">{name}</div>
            {received && (
              <span class="indicator-item badge badge-error text-white">
                new
              </span>
            )}
          </div>
          <LastMsg room_id={room_id} received={received}></LastMsg>
        </div>
      </div>
    </li>
  );
}
