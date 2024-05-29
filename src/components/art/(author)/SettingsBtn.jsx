import { useEffect, useRef, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import SettingsModal from "./SettingsModal";
export default function SettingsBtn({ userId }) {
  const [isShowed, setIsShowed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const dialog = useRef(null);
  useEffect(() => {
    if (submitted) {
      dialog.current.close();
      setSubmitted(false)
    }
  }, [isShowed]);
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setIsShowed(true);
          dialog.current.showModal();
        }}
      >
        <IoSettingsOutline className="text-3xl" />
        隱私設定
      </button>
      <dialog className="modal" ref={dialog}>
        {isShowed && (
          <SettingsModal
            userId={userId}
            setIsShowed={setIsShowed}
            setSubmitted={setSubmitted}
          ></SettingsModal>
        )}
        <form method="dialog" className="modal-backdrop">
          <button
            onClick={(e) => {
              console.log("setIsShowed(false)");
              setIsShowed(false);
            }}
          >
            close
          </button>
        </form>
      </dialog>
    </>
  );
}
