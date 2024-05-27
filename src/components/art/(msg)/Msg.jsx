import clsx from "clsx";
import moment from "moment";
import React from "react";

export default function Msg({ msg, userId }) {
  const {
    msg_id,
    room_id,
    sender_id,
    msg: msgContent,
    created_at,
    updated_at,
  } = msg;
  const isSender = userId === sender_id;
  console.log(isSender);
  return (
    <>
      <div className="w-full">
        <time
          className={clsx(
            "text-xs opacity-50 ",
            isSender && "pl-auto items-end    "
          )}
        >
          {moment(updated_at).format("hh:mm a")}
        </time>
        <div
          className={clsx(
            "px-2 py-1 rounded-md bg-white max-w-[90%] w-fit ",
            isSender && "bg-blue-300 ml-auto"
          )}
        >
          {msgContent}
        </div>
      </div>
    </>
  );
}
