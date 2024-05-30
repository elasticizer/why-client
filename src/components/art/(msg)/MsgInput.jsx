import { useEffect, useState } from "react";
import { pusherClient } from "../../../utils/pusher";

export default function MsgInput({ memberId, userId }) {
  const [msgTosend, setMsgTosend] = useState("");
  const body = { memberId, userId };
  async function send() {
    try {
      const res = await fetch(`/api/art/room`, {
        method: "POST",
        body: JSON.stringify(body),
      });
      const r = await res.json();

      const sendRes = await fetch(`/api/art/room/${r.data.room_id}`, {
        method: "POST",
        body: msgTosend,
      });
      const sendResult = await sendRes.json();

      console.log(sendResult.status);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    pusherClient.subscribe("channel-1");

    pusherClient.bind("incoming-msg", (data) => {
      console.log(JSON.stringify(data));
      alert(JSON.stringify(data));
    });

    return () => {
      pusherClient.unsubscribe("channel-1");
    };
  }, []);
  return (
    <div className="w-full rounded-x flex flex-row justify-between gap-3 ">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered bg-opacity-70 w-full"
        value={msgTosend}
        onChange={(e) => {
          setMsgTosend(e.target.value);
        }}
      />
      <button className="btn btn-ghost" onClick={send}>
        送出
      </button>
    </div>
  );
}
