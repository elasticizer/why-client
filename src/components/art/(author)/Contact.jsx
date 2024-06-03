import { IoClose } from "react-icons/io5";
import useSWR from "swr";
import { fetcher } from "@/utils/utils";
import { IoMdContact } from "react-icons/io";
import ContactLiItem from "./ContactLiItem";
import { motion } from "framer-motion";
export default function Contact({ userId, setOpenMyMsg ,setOpenConversation}) {
  const { data, error, isLoading } = useSWR(
    `/api/art/author/${userId}/contact`,
    fetcher
  );
  if (error || data?.error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <div className="">
        loading...
      </div>
    );
  
  return (
    <motion.div 
         initial={{ opacity: 0 ,y:30 }}
         animate={{ opacity: 1 ,y:0}}
         exit={{ opacity: 0 }} className="w-[350px] h-fit flex flex-col shadow-xl bg-theme-1 p-5 rounded-3xl z-50 gap-3">
      <div className="flex items-center gap-5 rounded-xl justify-between ">
        <div className="flex items-center gap-3">
          <IoMdContact className="icon" />
          <span className="text-xl font-black">聯絡人</span>
        </div>
        <div
          className="btn btn-sm btn-circle btn-ghost "
          onClick={() => {
            setOpenMyMsg(false);
          }}
        >
          <IoClose />
        </div>
      </div>

      <ul className="bg-white bg-opacity-80 rounded-3xl overflow-hidden">
        <div className="overflow-y-auto max-h-[300px]  contact-div">
          {data.data.map((item, i) => {
            return (
              <ContactLiItem
                data={item}
                key={i}
                userId={userId}
                setOpenConversation={setOpenConversation}setOpenMyMsg={setOpenMyMsg}
              ></ContactLiItem>
            );
          })}
        </div>
      </ul>
    </motion.div >
  );
}
