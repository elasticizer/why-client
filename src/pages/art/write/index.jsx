import ArtDetailLeft from "@/components/art/ArtDetailLeft";
import RightSearch from "@/components/art/RightSearch";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa";
import DOMPurify from "dompurify";
import { FaTrashAlt } from "react-icons/fa";
const demo = {
  title: "",
  subTitle: "",
  content: { name: "", content: "" },
};

export default function Index({}) {
  const [isSave, setIsSave] = useState(false);
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [para, setPara] = useState([{ name: "段落", content: "" }]);
  const id = router.query.slug;
  function addNewPara() {
    const next = [...para, { name: "段落", content: "" }];
    setPara(next);
  }
  function save() {
    toast.success("保存成功");
    setIsSave(true);
  }
  function saveParaName(e, i) {
    const next = para.map((v, index) => v);
    next[i].name = e.currentTarget.value;
    setPara(next);
  }
  function saveParaContent(e, i) {
    const next = para.map((v, index) => v);
    next[i].content = DOMPurify.sanitize(e.currentTarget.value);
    setPara(next);
  }
  function saveTitle(e) {
    setTitle(DOMPurify.sanitize(e.currentTarget.value));
  }
  function saveSubTitle(e) {
    setSubTitle(DOMPurify.sanitize(e.currentTarget.value));
  }
  // const clean = DOMPurify.sanitize("<b>hello there</b>");

  console.log(para);
  return (
    <>
      <section className="flex flex-row justify-center mt-5 gap-5 min-h-screen">
        <div className="w-[1000px] flex flex-col gap-5 mb-20">
          <div className=" flex flex-row justify-between">
            <h2 className="text-xl font-black text-zinc-500">文章標題</h2>
            <div className="flex flex-row gap-5">
              {isSave && (
                <div className="btn w-fit text-xl font-black">
                  <FaPlus className="text-3xl" />
                  發布文章
                </div>
              )}

              <div className="btn w-fit text-xl font-black" onClick={save}>
                <FaPlus className="text-3xl" />
                儲存草稿
              </div>
            </div>
          </div>
          <textarea
            placeholder="文章標題"
            className="textarea textarea-bordered textarea-sm w-full"
            onBlur={saveTitle}
          ></textarea>
          <h2 className="text-xl font-black text-zinc-500">文章副標題</h2>
          <textarea
            placeholder="文章副標題"
            className="textarea textarea-bordered textarea-sm w-full"
            onBlur={saveSubTitle}
          ></textarea>
          <h2 className="text-xl font-black text-zinc-500">文章內容</h2>
          <div className="divider"></div>
          {para.map((item, i) => {
            return (
              <div className="flex flex-row w-full" key={i}>
                <div className="flex flex-col justify-between  w-36 mr-3 ">
                  <div className="flex flex-col gap-3">
                    <h2 className="text-lg font-black text-zinc-400">
                      段落標題
                    </h2>
                    <textarea
                      type="text"
                      defaultValue={item.name}
                      placeholder={item.name}
                      className="input text-xl font-black text-zinc-700"
                      onBlur={(e) => saveParaName(e, i)}
                    ></textarea>
                  </div>
                  <button className="btn">
                    <FaTrashAlt className="text-2xl"  />
                  </button>
                </div>
                <textarea
                  onBlur={(e) => saveParaContent(e, i)}
                  placeholder="文章內容"
                  className="textarea textarea-bordered textarea-sm min-h-[500px] w-full"
                ></textarea>
              </div>
            );
          })}

          <div
            className="btn w-fit text-xl font-black ml-auto"
            onClick={addNewPara}
          >
            <FaPlus className="text-3xl" />
            新增段落
          </div>
        </div>
        <div className="w-[350px] flex justify-center h-screen items-center sticky top-0 h-screen ">
          <ul className="timeline timeline-vertical">
          <h2 className="text-2xl font-black text-zinc-500 text-end mb-5">文章架構</h2>
            {para.map((item, i) => {
              return (
                <li key={i}>
                  {i !== 0 && <hr />}
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end timeline-box">
                    {item.name}
                  </div>
                  {i + 1 !== para.length && <hr />}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
