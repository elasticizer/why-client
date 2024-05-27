import { useRouter } from "next/router";
import React from "react";
import { TbMessageChatbot } from "react-icons/tb";
import { useAuth } from "../../../hooks/use-auth";
import toast from "react-hot-toast";

export default function MsgBtn({ target, user = false, setOpen }) {
  if (!user) {
    const { auth } = useAuth();
    user = auth?.id;
  }

  const router = useRouter();
  //   確認下user

  function handler() {
    if (!user) {
      toast.success("需要登入");
      return;
    }
    setOpen(true);
  }
  return (
    <button className="btn font-bold rounded-full" onClick={handler}>
      <TbMessageChatbot className="icon" />
    </button>
  );
}
