import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";

const AnimeCard = ({ anime }) => {
  return (
    <>
      {anime
        ? anime.map((anItem) => {
            return (
              <div
                className="w-[250px] h-[420px] bg-indigo-900 dark:bg-indigo-800 mx-auto mb-5 p-5 rounded-lg flex flex-col justify-between text-center relative font-extrabold text-md"
                key={anItem.mal_id}
              >
                <img
                  src={anItem.images.jpg.image_url}
                  alt="anime image"
                  className="h-[90%] w-full rounded-md "
                />
                <h4 className="text-white">{anItem.title}</h4>
                <button className="w-[33px] h-[45px] bg-transparent rounded-full absolute inset-y-0 right-0 z-10 hover:opacity-90">
                  <AiFillInfoCircle size={30} color="grey" />
                </button>
              </div>
            );
          })
        : "No Matching Titles"}
    </>
  );
};

export default AnimeCard;
