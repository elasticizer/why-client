import React, { useEffect, useRef, useState } from "react";
import Msg from "./Msg";
import { IoClose } from "react-icons/io5";
import { pusherClient } from "@/utils/pusher";

export default function MsgBoard({ memberId, userId, name, img, setOpen }) {
  const [msgTosend, setMsgTosend] = useState("");
  const [roomId, setRoomId] = useState(null);
  const [msgs, setMsgs] = useState([]);
  const hasEffectRun = useRef(false);
  async function send(e) {
    e.preventDefault();
    if (roomId) {
      try {
        const saveMsgBody = { userId, msgTosend };
        const sendRes = await fetch(`/api/art/room/${roomId}`, {
          method: "POST",
          body: JSON.stringify(saveMsgBody),
        });
        const sendResult = await sendRes.json();
        console.log(sendResult.status);
      } catch (error) {
        console.log(error);
      }
    }
  }
  async function checkRoomId() {
    try {
      const body = { memberId, userId };
      const res = await fetch(`/api/art/room`, {
        method: "POST",
        body: JSON.stringify(body),
      });
      const r = await res.json();
      setRoomId(r.data.room_id);
    } catch (error) {
      console.log(error);
    }
  }
  async function getOldData(roomId) {
    try {
      const res = await fetch(`/api/art/room?room_id=${roomId}`);
      const r = await res.json();
      if (r.data) {
        setMsgs(r.data);
        console.log(r.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  function handler(data) {
    setMsgs((prevMsgs) => [...prevMsgs, data]);
  }
  async function init(roomId) {
    await getOldData(roomId);
    pusherClient.subscribe(roomId);
    pusherClient.bind("incoming-msg", (data) => {
      if (data) {
        handler(data);
      }
    });
  }

  useEffect(() => {
    if (!hasEffectRun.current) {
      checkRoomId();
      hasEffectRun.current = true;
    }
  }, []);

  useEffect(() => {
    if (roomId) {
      init(roomId);

      return () => {
        pusherClient.unsubscribe(roomId);
        pusherClient.unbind("incoming-msg");
      };
    } else {
      setMsgs([]);
    }
  }, [roomId]);
  return (
    <>
      <div className="w-[350px] h-fit fixed left-36 flex flex-col shadow-xl bg-theme-1 p-5 rounded-3xl z-50 bottom-20 gap-5">
        <div className="flex items-center gap-5 rounded-xl">
          <div className="avatar">
            <div className="w-14 rounded-xl border-4 border-white ">
              <img src={img} />
            </div>
          </div>
          <span className="text-xl font-black ">{name}</span>
          <div
            className="btn btn-sm btn-circle self-start btn-ghost"
            onClick={() => setOpen(false)}
          >
            <IoClose className="  " />
          </div>
        </div>
        <div
          className="w-full h-[250px] bg-white px-2 py-2
         bg-opacity-50 rounded-xl overflow-y-scroll flex flex-col gap-2
            "
        >
          {msgs.length > 0 &&
            msgs.map((msg, i) => {
              return <Msg msg={msg} userId={userId} key={i}></Msg>;
            })}
        </div>

        {/* <MsgInput memberId={memberId} userId={userId}></MsgInput> */}
        <form
          className="w-full rounded-x flex flex-row justify-between gap-3 "
          onSubmit={send}
        >
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered bg-opacity-70 w-full"
            value={msgTosend}
            onChange={(e) => {
              setMsgTosend(e.target.value);
              console.log(msgs);
            }}
          />
          <button className="btn btn-ghost" onClick={send}>
            送出
          </button>
        </form>
      </div>
    </>
  );
}
