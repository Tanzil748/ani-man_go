import React from "react";

const AnimeCard = ({ anime }) => {
  return (
    <>
      {anime
        ? anime.map((anItem) => {
            return (
              <div
                className="w-[250px] h-[350px] bg-purple-600 mx-auto mb-3 pb-7 rounded-lg flex flex-col justify-between items-center"
                key={anItem.mal_id}
              >
                <img
                  src={anItem.images.jpg.image_url}
                  alt="anime image"
                  className="h-[80%] w-full rounded-t-lg"
                />
                <h4>{anItem.title}</h4>
                <button className="w-1/2 h-[18px] bg-red-400 rounded-md">
                  More Info
                </button>
              </div>
            );
          })
        : "No Matching Titles"}
    </>
  );
};

export default AnimeCard;
