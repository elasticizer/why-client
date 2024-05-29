import clsx from "clsx";
import moment from "moment";

export default function Msg({ msg, userId }) {
  const { msg_id, room_id, sender_id, msg: msgContent, createdAt } = msg;

  const isSender = userId === sender_id;
  return (
    <>
      <div className="w-full">
        <span
          className={clsx(
            "text-xs opacity-50 flex",
            isSender && "justify-end "
          )}
        >
          {moment(createdAt).locale("en").format("YYYY-MM-DD　HH:mm")}
        </span>
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
