import React, { useEffect, useRef, useState } from 'react';
function useOutsideAlerter(ref, setOpenPopup, callBack = false) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenPopup(false)
        callBack && callBack()
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const Popup = ({ children, open = false, closeIfClickOutElement = true, position = "center", className = "p-5", callBack }) => {
  const [openPopUp, setOpenPopup] = useState(open);
  const [posisi, setPosisi] = useState(position);
  const wrapPopUp = useRef(null);
  useOutsideAlerter(wrapPopUp, setOpenPopup, callBack);
  useEffect(() => {
    setOpenPopup(open)
  }, [open]);
  const initPosisi = () => {
    switch (position) {
      case "bottom":
        setPosisi("justify-center items-end")
        break;
      case "bottom right":
        setPosisi("justify-end items-end")
        break;
      case "bottom left":
        setPosisi("justify-start items-end")
        break;
      case "top":
        setPosisi("justify-center items-start")
        break;
      case "top right":
        setPosisi("justify-end items-start")
        break;
      case "top left":
        setPosisi("justify-start items-start")
        break;
      case "center right":
        setPosisi("justify-end items-center")
        break;
      case "center left":
        setPosisi("justify-start items-center")
        break;
      default:
        setPosisi("justify-center items-center")
        break;
    }
  }
  const getClassName = () => {
    let arr1 = "mx-auto max-w-[90%] min-w-[200px]".split(" ");
    let arr2 = className.split(" ");
    return arr1.concat(arr2).join(" ");
  }
  useEffect(() => {
    initPosisi();
    return () => {
      // cleanup
    };
  }, [position]);
  return (
    openPopUp && <div className="fixed inset-0 bg-gray-200 bg-opacity-10 overflow-y-auto h-full w-full" id="my-modal">
      <div className={"absolute justify-center flex w-full h-full " + (posisi)}>
        <div ref={wrapPopUp} className={getClassName()}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
