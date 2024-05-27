import Image from "next/image";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import RankingGroup from "./RankingGroup";
import FieldGroup from "./FieldGroup";
import { AnimatePresence, motion } from "framer-motion";

import ArtDetailRight from "./ArtDetailRight";
import SearchPanel from "./(search-panel)/SearchPanel";
export default function RightSearch({ id }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      {selected && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring" }}
            onClick={() => setSelected(null)}
            className=" bg-zinc-500  bg-opacity-70  fixed bottom-0 left-0  w-screen h-screen backdrop-blur-sm z-10 flex   justify-center items-center cursor-pointer"
          >
            <AnimatePresence>
              <SearchPanel
                selected={selected}
                setSelected={setSelected}
              ></SearchPanel>
            </AnimatePresence>
          </motion.div>
        </>
      )}
      <motion.div
        layoutId={"search"}
        className="z-50 bg-white fixed right-20 w-20 h-1 "
      ></motion.div>

      <section className="bg-white w-[350px] sticky top-0 h-screen overflow-y-scroll">
        <div className="px-4 flex flex-col gap-8">
          <div
            onClick={(e) => {
              setSelected("search");
            }}
          >
            <button className="search-btn ">
              搜索文章
              <FaSearch />
            </button>
          </div>
          {id && <ArtDetailRight id={id}></ArtDetailRight>}
          <FieldGroup></FieldGroup>
          <RankingGroup></RankingGroup>
        </div>
      </section>
    </>
  );
}
