import { useAuth } from "@/hooks/use-auth";
import clsx from "clsx";
import React, { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { FaCheck, FaPlus } from "react-icons/fa";

export default function FollowBtn({ large, target }) {
  const { auth, follow, setFollow } = useAuth();
  const [active, setActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 初始狀態
  useEffect(() => {
    if (follow) {
      const isfollowed = follow.includes(target);
      setActive(isfollowed);
      return;
    }
    setActive(false);
  }, [follow]);

  const body = useMemo(() => {
    if (auth) {
      return JSON.stringify({
        target,
        user: auth.username,
      });
    }
  }, [auth]);

  // 按按鈕
  const attemptTofollow = async (e) => {
    if (active && auth) {
      setActive(!active);
      try {
        const res = await fetch(`/api/art/action/follow`, {
          method: "DELETE",
          body: body,
        });
        const data = await res.json();
        console.log(data);
        if (data.status) {
          toast.success("已取消追蹤");
          setFollow(follow.filter((v) => v !== target));
          return;
        }
        setActive(active); //失敗就維持原狀
        toast.success("取消追蹤失敗");
      } catch (error) {
        console.log(error);
        toast.success("錯誤");
      }

      return;
    }
    if (!active && auth) {
      setActive(!active);
      try {
        const res = await fetch(`/api/art/action/follow`, {
          method: "PUT",
          body: body,
        });
        const data = await res.json();
        console.log(data);
        if (data.status) {
          toast.success("已追蹤作者");
          setFollow([...follow, target]);
          return;
        }
        setActive(active); //失敗就維持原狀
        toast.success("追蹤失敗");
      } catch (error) {
        console.log(error);
        toast.success("錯誤");
      }

      return;
    }
    toast("需要登入");
  };

  return (
    <button
      disabled={isLoading}
      onClick={async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await attemptTofollow(e);
        setIsLoading(false);
      }}
      className={clsx(
        "btn btn-sm rounded-full w-fit font-bold",
        active && "btn-active",
        large && "btn-md"
      )}
    >
      {active && <FaCheck className={clsx(large && "icon")} />}
      {!active && <FaPlus className={clsx(large && "icon")} />}
      {active && "已追蹤"}
      {!active && "追蹤"}
    </button>
  );
}
