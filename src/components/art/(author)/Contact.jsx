import { IoClose } from "react-icons/io5";
import useSWR from "swr";
import { fetcher } from "@/utils/utils";

export default function Contact({ userId }) {
  const { data, error, isLoading } = useSWR(`/api/art/author/${id}`, fetcher);
  if (error || data?.error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <div className="author-banner w-full flex justify-center items-center">
        loading...
      </div>
    );

  return (
    <div className="w-[350px] h-fit fixed left-36 flex flex-col shadow-xl bg-theme-1 p-5 rounded-3xl z-50 bottom-20 gap-5">
      <div className="flex items-center gap-5 rounded-xl">
        <div className="avatar">
          <div className="w-14 rounded-xl border-4 border-white ">
            {/* <img src={img} /> */}
          </div>
        </div>
        {/* <span className="text-xl font-black ">{name}</span> */}
        <div className="btn btn-sm btn-circle self-start btn-ghost">
          <IoClose className="  " />
        </div>
      </div>

      <ul className="menu bg-base-200 w-56 rounded-box">
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
  );
}
