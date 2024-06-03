import React, { useEffect, useRef, useState } from "react";
import Msg from "./Msg";
import { IoClose } from "react-icons/io5";
import { pusherClient } from "@/utils/pusher";
import useSWR from "swr";
import { fetcher } from "@/utils/utils";
import MsgTarget from "./MsgTarget";
import { motion } from "framer-motion";

export default function MsgBoardImcoming({
  userId,
  setOpenConversation,
  roomId,
}) {
  const { data, error, isLoading } = useSWR(`/api/art/room/${roomId}`, fetcher);
  const [msgTosend, setMsgTosend] = useState("");
  const [msgs, setMsgs] = useState([]);
  const msgAnimateRef = useRef(null);
  async function send(e) {
    e.preventDefault();

    try {
      const saveMsgBody = { userId, msgTosend };
      const sendRes = await fetch(`/api/art/room/${roomId}`, {
        method: "POST",
        body: JSON.stringify(saveMsgBody),
      });
      const sendResult = await sendRes.json();
      console.log(sendResult.status);
      setMsgTosend("");
      console.log(" setMsgTosend()");
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
  }

  useEffect(() => {
    init(roomId);
    pusherClient.subscribe(roomId);
    pusherClient.bind("incoming-msg", (data) => {
      console.log("incoming-msg data:", data);
      if (data) {
        handler(data);
      }
    });
    console.log("Subscribed to room_id:", roomId);
    return () => {
      console.log("Unsubscribing from room_id:", roomId);
      pusherClient.unsubscribe(roomId);
      pusherClient.unbind("incoming-msg");
    };
  }, []);

  useEffect(() => {
    if (msgAnimateRef.current) {
      msgAnimateRef.current.scrollTop = msgAnimateRef.current.scrollHeight;
    }
  }, [msgs]);
  if (error || data?.error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <div className="author-banner w-full flex justify-center items-center">
        loading...
      </div>
    );

  const { id, room_id, member_id, user_id, createdAt, updatedAt } = data.data;
  const target_id = userId === member_id ? user_id : member_id;
  return (
    <>
     <motion.div 
         initial={{ opacity: 0 ,y:30 }}
         animate={{ opacity: 1 ,y:0}}
         exit={{ opacity: 0 }} className="w-[350px] h-fit flex flex-col shadow-xl bg-theme-1 p-5 rounded-3xl z-50 gap-5">
        <div className="flex items-center rounded-xl justify-between ">
          <MsgTarget target_id={target_id}></MsgTarget>

          <div
            className="btn btn-sm btn-circle self-start btn-ghost"
            onClick={() => setOpenConversation(false)}
          >
            <IoClose className="  " />
          </div>
        </div>
        <div
          className="w-full h-[250px] bg-white px-2 py-2
         bg-opacity-50 rounded-xl overflow-y-scroll flex flex-col gap-2
            "
          ref={msgAnimateRef}
        >
          {msgs.length > 0 &&
            msgs.map((msg, i) => {
              return <Msg msg={msg} userId={userId} key={i}></Msg>;
            })}
        </div>

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
      </motion.div>
    </>
  );
}
