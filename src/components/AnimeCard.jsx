import React from "react";

const AnimeCard = ({ anime }) => {
  return (
    <>
      {anime
        ? anime.map((anItem) => {
            return (
              <div className="" key={anItem.mal_id}>
                <img src={anItem.images.jpg.image_url} alt="anime image" />
                <h4>{anItem.title}</h4>
              </div>
            );
          })
        : "No Matching Titles"}
    </>
  );
};

export default AnimeCard;
