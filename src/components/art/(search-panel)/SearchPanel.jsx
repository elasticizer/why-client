import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import FormFieldGroup from "./FormFieldGroup";
import { IoClose } from "react-icons/io5";
import FormFieldSubGroup from "./FormFieldSubGroup";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import OrderSelect from "./OrderSelect";
import { useRef } from "react";
const keywordLikeArr = ["文章標題", "作者", "tag", "內容"];
export default function SearchPanel({ selected }) {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [keywordLike, setKeywordLike] = useState(["1", "2", "3", "4"]);
  const [groups, setGroups] = useState([]);
  const [subgroups, setSubGroups] = useState({});
  const [sortMethod, setSortMethod] = useState(0);
  const [showSub, setShowSub] = useState(false);
  const keywordInput = useRef(null);
  const [oldKeywordArr, setOldKeywordArr] = useState(
    JSON.parse(localStorage.getItem("keyword")) || []
  );
  console.log(oldKeywordArr, "oldKeywordArr");
  async function handleSubmit(e) {
    e.preventDefault();
    const dataToSend = {
      keyword: keyword?.trim(),
      keywordLike,
      groups,
      subgroups,
      sortMethod,
    };
    const body = JSON.stringify(dataToSend);
    console.log(body);
    localStorage.setItem("searchbody", body);
    if (keyword?.trim() && !oldKeywordArr.includes(keyword.trim())) {
      localStorage.setItem(
        "keyword",
        JSON.stringify([...oldKeywordArr, keyword.trim()])
      );
    }
    if (router.pathname === "/art/search") {
      router.reload();
    } else {
      router.push("/art/search");
    }
  }

  function remove_history(v) {
    console.log(" e.stopPropagation();");
    if (oldKeywordArr.includes(v)) {
      const newKeywordArr = oldKeywordArr.filter((item) => item !== v);
      localStorage.setItem("keyword", JSON.stringify(newKeywordArr));
      setOldKeywordArr(newKeywordArr);
    }
  }
  function handle_keyword(e) {
    setKeyword(e.target.value);
  }
  function handle_history(e) {
    keywordInput.current.focus();
    setKeyword(e.currentTarget.getAttribute("value"));
  }
  function handle_keywordLike(e) {
    if (keywordLike.includes(e.currentTarget.value)) {
      setKeywordLike(keywordLike.filter((v) => v !== e.currentTarget.value));
      return;
    }
    setKeywordLike([...keywordLike, e.currentTarget.value]);
  }
  // useEffect(() => {
  //   return () => {};
  // }, [groups]);

  return (
    <>
      <motion.ul
        onClick={(e) => {
          e.stopPropagation();
        }}
        layoutId={selected}
        className="cursor-default w-1/2 z-50 bg-white rounded-box p-10 text-2xl "
      >
        <form
          className="rounded-3xl indent-2 p-4 my-4 flex justify-between outline outline-orange-300"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="dropdown">
            <div tabIndex={0} role="button" onKeyUp={(e) => e.preventDefault()}>
              <input
                placeholder="搜索文章"
                className="focus-visible:outline-none indent-1"
                value={keyword}
                onChange={handle_keyword}
                ref={keywordInput}
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {oldKeywordArr.length > 0 && (
                <li className="font-bold  text-left text-zinc-500">歷史搜索</li>
              )}
              {oldKeywordArr.map((v, i) => {
                return (
                  <li
                    className=" search-history-li font-bold text-zinc-500 rounded-xl"
                    value={v}
                    onClick={handle_history}
                    key={i}
                  >
                    {v}
                    <div
                      className="btn btn-circle btn-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        remove_history(v);
                      }}
                    >
                      <IoClose />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="text-3xl search-icon text-orange-300 flex items-center">
            <FaSearch />
          </div>
        </form>
        <div className="max-h-[500px] overflow-scroll">
          <li className="menu-title text-left text-xl text-bg-line-1">
            關鍵字符合
          </li>
          {/* 使用關鍵字查詢需最少選擇一項 */}
          <div className="grid grid-cols-4 gap-3">
            {keywordLikeArr.map((v, i) => {
              return (
                <label
                  key={i}
                  className="label cursor-pointer justify-start gap-5 rounded-xl p-5"
                >
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox"
                    value={i + 1}
                    onChange={handle_keywordLike}
                  />
                  <span className="label-text text-xl font-black">{v}</span>
                </label>
              );
            })}
          </div>

          <li className="menu-title text-left text-xl text-bg-line-1">
            文章分類
          </li>
          <FormFieldGroup
            groups={groups}
            setGroups={setGroups}
            subgroups={subgroups}
            setSubGroups={setSubGroups}
          ></FormFieldGroup>
          <label className="label cursor-pointer justify-start gap-2 rounded-xl p-5">
            <input
              type="checkbox"
              className="checkbox"
              onChange={() => {
                setShowSub(!showSub);
              }}
            />
            <span className="font-black text-zinc-400 text-xl ">
              顯示子分類
            </span>
          </label>

          {groups.length > 0 && showSub && (
            <>
              <FormFieldSubGroup
                groups={groups}
                subgroups={subgroups}
                setSubGroups={setSubGroups}
              ></FormFieldSubGroup>
            </>
          )}

          <li className="menu-title text-left text-xl text-bg-line-1">
            排序方法
          </li>
          <div className="flex justify-evenly items-center">
            <OrderSelect setSortMethod={setSortMethod}></OrderSelect>

            <button
              className="btn btn-theme"
              type="button"
              onClick={handleSubmit}
            >
              搜尋
            </button>
          </div>
        </div>
      </motion.ul>
    </>
  );
}
