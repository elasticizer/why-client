import React, { useEffect, useState } from "react";
import LikeArtCardGroup from "./LikeArtCardGroup";
import toast from "react-hot-toast";
import { useAuth } from "../../../hooks/use-auth";
import FollowTarget from "./FollowTarget";

export default function CheckBlocked({ tab, id }) {
  const [settings, setsettings] = useState([true, true, true]);
  const { auth } = useAuth();
  let isOwner = false;
  isOwner = auth?.id === id;
  async function init() {
    try {
      const res = await fetch(`/api/art/author/${id}`);
      const r = await res.json();
      if (r.data) {
        const { is_hide_clap, is_hide_liked, is_hide_followed } = r.data;
        setsettings([is_hide_clap, is_hide_liked, is_hide_followed]);
        return;
      } else {
        throw new Error("獲取隱私設定失敗");
      }
    } catch (error) {
      console.log(error);
      toast.success("獲取隱私設定失敗");
    }
  }
  console.log(settings, "settings");

  useEffect(() => {
    init();
  }, []);
  return (
    <>
      {tab === "released" && (
        <LikeArtCardGroup tab={tab} author_id={id}></LikeArtCardGroup>
      )}

      {((tab === "clapped" && !settings[0]) ||
        (tab === "clapped" && isOwner)) && (
        <LikeArtCardGroup
          tab={tab}
          author_id={id}
          isOwner={isOwner}
          isHide={settings[0]}
        ></LikeArtCardGroup>
      )}
      {tab === "clapped" && settings[0] && !isOwner && (
        <div className="flex flex-col gap-10 min-h-[600px] mb-20">
          <div className="flex justify-center items-center gap-10 w-[1250px] h-[600px] text-title-tracking-widest ">
            空空如也
          </div>
        </div>
      )}
      {((tab === "liked" && !settings[1]) || (tab === "liked" && isOwner)) && (
        <LikeArtCardGroup
          tab={tab}
          author_id={id}
          isOwner={isOwner}
          isHide={settings[0]}
        ></LikeArtCardGroup>
      )}
      {tab === "liked" && settings[1] && !isOwner && (
        <div className="flex flex-col gap-10 min-h-[600px] mb-20">
          <div className="flex justify-center items-center gap-10 w-[1250px] h-[600px] text-title-tracking-widest ">
            空空如也
          </div>
        </div>
      )}
      {((tab === "follow" && !settings[2]) ||
        (tab === "follow" && isOwner)) && (
        <FollowTarget
          author_id={id}
          isOwner={isOwner}
          isHide={settings[2]}
        ></FollowTarget>
      )}
      {tab === "follow" && settings[2] && !isOwner && (
        <div className="flex flex-col gap-10 min-h-[600px] mb-20">
          <div className="flex justify-center items-center gap-10 w-[1250px] h-[600px] text-title-tracking-widest ">
            空空如也
          </div>
        </div>
      )}
    </>
  );
}
