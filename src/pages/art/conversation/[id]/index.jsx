import { useRouter } from "next/router";
import { pusherClient } from "../../../../utils/pusher";
import { useEffect, useState } from "react";

export default function Index() {
  const [msgToSend, setmsgToSend] = useState("");
  const router = useRouter();
  const roomId = router.query.id;

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

  const disconnect = () => {
    pusherClient.unsubscribe("channel-1");
  };
  const sendMsg = async () => {
    const res = await fetch(`/api/art/conversation/${roomId}`, {
      method: "POST",
    });
    const r = await res.json();
    console.log(r);
  };
  return (
    <>
      <input
        type="text"
        onChange={({ target }) => {
          setmsgToSend(target.value);
        }}
      />
      <button onClick={sendMsg}>送出</button>
      <button onClick={disconnect}>斷連</button>
    </>
  );
}