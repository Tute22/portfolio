import React, { useEffect, useState } from "react";
import { CloseIcon } from "../common/icons/CloseIcon";

export const Modal = ({ info, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setIsVisible(true);

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleBackgroundClick = (e) => {
    if (e.target.id === "modalBackground") {
      handleClose();
    }
  };

  return (
    <div
      id="modalBackground"
      className="fixed inset-0 backdrop-blur-lg overflow-y-auto h-full w-full"
      onClick={handleBackgroundClick}
    >
      <button
        onClick={handleClose}
        className="text-white hover:bg-[#21282E] p-1 rounded-xl absolute left-[1176px] top-[82px] z-50"
      >
        <CloseIcon className="text-white" />
      </button>
      <div
        className={`flex flex-col relative top-20 mx-auto p-5 w-[500px] shadow-2xl rounded-xl bg-[#151b1f] gap-5 transition-all duration-300 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-semibold leading-6 text-[#55D0B3]">
          {info.tittle}
        </h3>
        <p className="text-white text-lg">{info.details}</p>
        <div className="flex justify-center gap-8 text-xl font-semibold">
          <a href={info.URLClient} target="_blank" rel="noopener noreferrer">
            <button className="text-[#21282E] bg-[#55D0B3] p-2 rounded-xl hover:translate-y-[-1px] hover:shadow-emerald-600 shadow-md active:translate-y-0 active:shadow-none">
              CLIENT
            </button>
          </a>
          <a href={info.URLApi} target="_blank" rel="noopener noreferrer">
            <button className="text-[#21282E] bg-[#55D0B3] p-2 px-5 rounded-xl hover:translate-y-[-1px] hover:shadow-emerald-600 shadow-md active:translate-y-0 active:shadow-none">
              API
            </button>
          </a>
        </div>
        <img src={info.img} alt={info.tittle} className="rounded-xl" />
      </div>
    </div>
  );
};
