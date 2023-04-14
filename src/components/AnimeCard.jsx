import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { userAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

const AnimeCard = ({ data }) => {
  const { user } = userAuth();
  const [favorite, setFavorite] = useState(false);
  const [saved, setSaved] = useState(false);

  const animeTitleRef = doc(db, "users", `${user?.email}`);

  const favoriteTitles = async () => {
    {
      user?.email
        ? (setFavorite(!favorite),
          setSaved(true),
          await updateDoc(animeTitleRef, {
            favorited: arrayUnion({
              id: data.mal_id,
              img: data.images.jpg.image_url,
              title: data.title,
              url: data.url,
            }),
          }))
        : alert("Login to save titles to profile");
    }
  };

  return (
    <>
      <div className="flex flex-col text-center relative font-semibold text-md bg-card hover:bg-[#1d5592] dark:hover:bg-neutral-900 p-3 rounded-lg h-full">
        <img
          src={data.images.jpg.image_url}
          alt="anime image"
          className="w-full rounded-md flex-1"
        />
        <a
          href={data.url}
          target="_blank"
          className="text-white mt-2 text-xs sm:text-sm"
        >
          {data.title}
        </a>

        <button
          className="w-[30px] h-[40px] bg-transparent rounded-full absolute top-0 right-1 hover:opacity-90"
          onClick={favoriteTitles}
        >
          {!favorite ? (
            <AiOutlineHeart size={30} color="gray" />
          ) : (
            <AiFillHeart size={30} color="red" />
          )}
        </button>
      </div>
    </>
  );
};

export default AnimeCard;
