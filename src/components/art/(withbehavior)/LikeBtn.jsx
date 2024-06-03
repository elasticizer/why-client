import React, { useEffect, useMemo, useState } from "react";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { useAuth } from "../../../hooks/use-auth";
import toast from "react-hot-toast";

export default function LikeBtn({ target }) {
  const { auth, favArt, setFavArt } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    if (favArt) {
      const isfollowed = favArt.includes(target);
      setLiked(isfollowed);
      return;
    }
    setLiked(false);
  }, [favArt]);

  const body = useMemo(() => {
    if (auth) {
      return JSON.stringify({
        target,
        user: auth.username,
      });
    }
  }, [auth]);

  const attemptToLike = async (e) => {
    if (liked && auth) {
      setLiked(!liked);
      try {
        const res = await fetch(`/api/art/action/like`, {
          method: "DELETE",
          body: body,
        });
        const data = await res.json();
        console.log(data);
        if (data.status) {
          toast.success("已取消收藏");
          setFavArt(favArt.filter((v) => v !== target));
          return;
        }
        setLiked(liked); //失敗就維持原狀
        toast.success("取消收藏失敗");
      } catch (error) {
        console.log(error);
        toast.success("錯誤");
      }

      return;
    }
    if (!liked && auth) {
      setLiked(!liked);

      try {
        const res = await fetch(`/api/art/action/like`, {
          method: "PUT",
          body: body,
        });
        const data = await res.json();
        console.log(data);
        if (data.status) {
          toast.success("已收藏文章");
          setFavArt([...favArt, target]);
          return;
        }
        setLiked(liked); //失敗就維持原狀
        toast.success("收藏失敗");
      } catch (error) {
        console.log(error);
        toast.success("錯誤");
      }
      return;
    }
    toast("需要登入");
  };
  return (
    <>
      <button
        className="rounded-full tooltip tooltip-bottom"
        data-tip="收藏"
        disabled={isLoading}
        onClick={async (e) => {
          e.preventDefault();
          setIsLoading(true);
          await attemptToLike(e);
          setIsLoading(false);
        }}
      >
        {liked && (
          <IoBookmark className="text-4xl active:scale-90 text-red-500 " />
        )}
        {!liked && (
          <IoBookmarkOutline className="text-4xl active:scale-90 transition hover:text-red-500" />
        )}
      </button>
    </>
  );
}
