import React from "react";

const CardModal = ({ openModal, modalData, setOpenModal }) => {
  if (!openModal) return null;
  return (
    <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px]">
        <button
          className="text-red-500 text-2xl flex"
          onClick={() => setOpenModal(false)}
        >
          X
        </button>
        <div className="p-5 bg-indigo-900 text-white dark:bg-indigo-800 rounded-md shadow-lg shadow-yellow-300/40 ">
          <div>
            <b className="font-bold text-xl">Title:</b>{" "}
            {modalData.title_english} | <span>{modalData.title_japanese}</span>{" "}
            <br />
            <b className="font-bold text-xl">Genre:</b>{" "}
            {modalData.genres[0].name} <br />
            <b className="font-bold text-xl">Rating:</b> {modalData.rating}{" "}
            <br />
            <b className="font-bold text-xl">Synopsis:</b> {modalData.synopsis}{" "}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
