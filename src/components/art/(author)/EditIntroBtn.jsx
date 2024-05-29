import clsx from "clsx";
import React, { useState } from "react";
import { FaPenAlt } from "react-icons/fa";

export default function EditIntroBtn({
  author_id,
  meta_description,
  setShowedIntro,
}) {
  const [intro, setIntro] = useState(meta_description);
  async function handleChange() {
    setShowedIntro(intro);
    document.getElementById("my_modal_3").close();
    const res = await fetch(`/api/art/author/${author_id}`, {
      method: "POST",
      body: JSON.stringify({ meta_description: intro }),
    });
    const r = await res.json();
    if (r.error) {
      console.log(chalk.bgRed("出事了"));
      return;
    }
  }
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setIntro(meta_description);
          document.getElementById("my_modal_3").showModal();
        }}
      >
        <FaPenAlt className="icon" />
        編輯簡介
      </button>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h2 className="pb-3 font-black tracking-widest text-zinc-500 ">編輯簡介</h2>

          <textarea
            className={clsx(
              "textarea textarea-bordered w-full mb-3",
              !intro && "textarea-error"
            )}
            onChange={({ target }) => {
              setIntro(target.value);
            }}
            value={intro}
          ></textarea>
          {!intro && (
            <span className="label-text-alt text-red-500">內容不能為空</span>
          )}
          <div className="w-full flex justify-end">
            <button
              className="btn bg-theme-1-1 border-none h-10 text-white tracking-widest text-lg"
              onClick={handleChange}
              disabled={!intro}
            >
              確認修改
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button
            onClick={() => {
              if (!intro) {
                setIntro(meta_description);
              }
            }}
          >
            close
          </button>
        </form>
      </dialog>
    </>
  );
}
