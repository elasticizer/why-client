import { useAuth } from "@/hooks/use-auth";
import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";
import { IoCaretUp } from "react-icons/io5";
import toast from "react-hot-toast";

export default function ClapBtn({ target }) {
  const { auth, clapArt, setClapArt } = useAuth();
  const [active, setActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // 初始狀態
  useEffect(() => {
    if (clapArt) {
      const isfollowed = clapArt.includes(target);
      setActive(isfollowed);
      return;
    }
    setActive(false);
  }, [clapArt]);

  const body = useMemo(() => {
    if (auth) {
      return JSON.stringify({
        target,
        user: auth.username,
      });
    }
  }, [auth]);
  const clap = async (e) => {
    if (active && auth) {
      setActive(!active);
      try {
        const res = await fetch(`/api/art/action/clap`, {
          method: "DELETE",
          body: body,
        });
        const data = await res.json();
        if (data.status) {
          toast.success("已取消贊同");
          setClapArt(clapArt.filter((v) => v !== target));
          return;
        }
        setActive(active); //失敗就維持原狀
        toast.success("失敗");
      } catch (error) {
        console.log(error);
        toast.success("錯誤");
      }

      return;
    }
    if (!active && auth) {
      setActive(!active);
      try {
        const res = await fetch(`/api/art/action/clap`, {
          method: "PUT",
          body: body,
        });
        const data = await res.json();
        console.log(data);
        if (data.status) {
          toast.success("已贊同");
          console.log([...clapArt, target]);
          setClapArt([...clapArt, target]);
          return;
        }
        setActive(active); //失敗就維持原狀
        toast.success("失敗");
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
      className={clsx(
        "btn btn-ghost btn-lg w-1/3 flex justify-center items-between rounded-none  h-auto",
        active && " text-[#449eff]"
      )}
      onClick={async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await clap(e);
        setIsLoading(false);
      }}
    >
      <IoCaretUp className="text-5xl my-[-4px]" />
      贊同
    </button>
  );
}
