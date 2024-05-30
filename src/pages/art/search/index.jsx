import { useEffect, useState } from "react";
import ArtCardGroup from "@/components/art/ArtCardGroup";
import RightSearch from "@/components/art/RightSearch";
import ArtCard from "../../../components/art/ArtCard";
import OrderSelect from "../../../components/art/(search-panel)/OrderSelect";
import { HiOutlineBarsArrowDown } from "react-icons/hi2";
import { useRouter } from "next/router";
// import { fetcher } from "@/utils/utils";

const fetcher = async (url, options) =>
  fetch(url, options).then((res) => {
    if (!res.ok) {
      return res.json().then((err) => {
        throw new Error(err.message);
      });
    }
    return res.json();
  });
export default function Index() {
  const router = useRouter();
  const [sortMethod, setSortMethod] = useState(0);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [keyword, setKeyword] = useState("");

  async function getData() {
    const searchbody = localStorage.getItem("searchbody");
    if (!searchbody) {
      router.push("/art/");
    }
    const objBody = await JSON.parse(searchbody);
    setKeyword(objBody?.keyword);
    const newBody = JSON.stringify({ ...objBody, page, sortMethod }); //sortMethod直接覆蓋
    localStorage.setItem("searchbody", newBody);

    try {
      console.log(newBody, "newBody");
      const res = await fetch("/api/art/search", {
        method: "POST",
        body: newBody,
      });
      const r = await res.json();
      setData(r);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(sortMethod);
    getData();
  }, [sortMethod, page]);

  if (error || data?.error) return <div>failed to load</div>;
  if (data?.info)
    return (
      <>
        <section className="flex flex-row justify-center mt-5">
          <div className="w-2/3">
            <div className="flex justify-between  items-center mt-4">
              <h2 className="text-3xl font-black text-zinc-500 pl-5">
                {keyword && `"${keyword}"的`}搜尋結果
              </h2>
            </div>
            <div className="text-2xl font-black text-zinc-500 pl-5 bg-zinc-200 rounded-3xl flex justify-center items-center h-[70%] my-10">
              甚麼也沒有，再搜一次吧
            </div>
          </div>
          <RightSearch></RightSearch>
        </section>
      </>
    );
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <section className="flex flex-row justify-center mt-5">
        <div className="w-2/3">
          <div className="flex justify-between  items-center mt-4">
            <h2 className="text-3xl font-black text-zinc-500 pl-5">
              {keyword && `"${keyword}"的`}搜尋結果
            </h2>
            <div className=" w-fit flex items-center gap-3 mr-5">
              <HiOutlineBarsArrowDown className="text-4xl" />

              <OrderSelect setSortMethod={setSortMethod}></OrderSelect>
            </div>
          </div>
          <h2 className="text-2xl font-black text-zinc-500 pl-5">
            共{data.count}筆結果
          </h2>
          <div className="flex justify-center items-center gap-5 my-5">
            <button
              className="btn btn-circle"
              onClick={(e) => {
                setPage((prev) => prev - 1);
              }}
              disabled={page - 1 < 0}
            >
              «
            </button>
            <button className=" btn text-xl font-black text-zinc-500">
              第{page + 1}頁
            </button>
            <button
              className="btn btn-circle"
              onClick={(e) => {
                setPage((prev) => prev + 1);
              }}
              disabled={data.count < 20 * (page + 1)}
            >
              »
            </button>
            <span className=" font-black text-zinc-500">
              共{Math.ceil(data.count / 20)}頁
            </span>
          </div>
          <div className="mx-2 card-group">
            <div className="flex flex-col gap-10">
              {data.data.map((v, i) => {
                return <ArtCard key={v._id} data={v}></ArtCard>;
              })}
            </div>
          </div>
          {data.count % 20 > 10 ||
            (data.count % 20 === 0 && (
              <div className="flex justify-center items-center gap-5 my-5">
                <button
                  className="btn btn-circle"
                  onClick={(e) => {
                    setPage((prev) => prev - 1);
                  }}
                  disabled={page - 1 < 0}
                >
                  «
                </button>
                <button className=" btn text-xl font-black text-zinc-500">
                  第{page + 1}頁
                </button>
                <button
                  className="btn btn-circle"
                  onClick={(e) => {
                    setPage((prev) => prev + 1);
                  }}
                  disabled={data.count < 20 * (page + 1)}
                >
                  »
                </button>
                <span className=" font-black text-zinc-500">
                  共{Math.ceil(data.count / 20)}頁
                </span>
              </div>
            ))}
        </div>
        <RightSearch></RightSearch>
      </section>
    </>
  );
}
