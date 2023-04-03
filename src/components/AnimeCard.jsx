import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

const AnimeCard = ({ anime }) => {
  return (
    <>
      {anime
        ? anime.map((anItem) => {
            return (
              <div
                className="flex flex-col text-center relative font-semibold text-md bg-neutral-800 hover:bg-neutral-900 p-3 rounded-lg h-full"
                key={anItem.mal_id}
              >
                <img
                  src={anItem.images.jpg.image_url}
                  alt="anime image"
                  className="w-full rounded-md flex-1"
                />
                <a
                  href={anItem.url}
                  target="_blank"
                  key={anItem.mal_id}
                  className="text-white mt-2 text-sm"
                >
                  {anItem.title}
                </a>

                <button className="w-[30px] h-[40px] bg-transparent rounded-full absolute top-0 right-1 hover:opacity-90">
                  <AiFillHeart
                    size={30}
                    color="grey"
                    onClick={() => {
                      console.log("clo");
                    }}
                  ></AiFillHeart>
                </button>
              </div>
            );
          })
        : "No Matching Titles"}
    </>
  );
};

export default AnimeCard;
