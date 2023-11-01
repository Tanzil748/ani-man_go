import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/selectedAnime.css";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import { userAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

const SelectedAnime = () => {
  // anime id grabbed from URL - use it in API call's later
  const { id } = useParams();

  //   firebase related calls
  const { user } = userAuth();
  const [saved, setSaved] = useState(false);
  const [isBook, setIsBook] = useState(false);

  // api related calls
  const [anime, setAnime] = useState({});
  const [charList, setCharList] = useState([]);

  //   saving user-specific data under this document
  const animeTitleRef = doc(db, "users", `${user?.email}`);

  //   firebase function => book button logic
  const bookmarkedTitles = async () => {
    {
      user?.email
        ? (setIsBook(!isBook),
          setSaved(true),
          await updateDoc(animeTitleRef, {
            bookmarked: arrayUnion({
              id: anime.mal_id,
              img: anime.images.jpg.image_url,
              title: anime.title,
            }),
          }))
        : alert("Login to save titles to profile");
    }
  };

  const getAnime = async (chosenId) => {
    await axios
      .get(`https://api.jikan.moe/v4/anime/${chosenId}`)
      .then((res) => {
        setAnime(res.data.data);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  const getCharList = async (chosenId) => {
    await axios
      .get(`https://api.jikan.moe/v4/anime/${chosenId}/characters`)
      .then((res) => {
        setCharList(res.data.data);
      });
  };

  // grabbed the id from url and used it in API call to fetch individual anime data
  useEffect(() => {
    getAnime(id);
    getCharList(id);
  }, []);

  return (
    <div id="selected-anime-page">
      <div id="img-side" className="p-2">
        <div className="flex justify-end mb-2">
          <button
            className="bg-amber-500 py-1 px-3 rounded-md text-white"
            onClick={bookmarkedTitles}
          >
            {/* if bookmarked => fill appearance */}
            {!saved ? (
              <div className="flex gap-2 items-center">
                Bookmark
                <BsBookmarkStar />
              </div>
            ) : (
              <div className="flex gap-2 items-center">
                Bookmarked
                <BsBookmarkStarFill />
              </div>
            )}
          </button>
        </div>
        <img
          src={anime?.images?.jpg?.image_url}
          alt="poster image"
          draggable="false"
          className="w-full h-64 object-contain"
        />
      </div>

      <div id="meta-info" className="p-2">
        <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
          {anime?.title}
        </div>
        {/* prevents unwanted gap if data is missing */}
        <div className="flex gap-2 items-center text-sm mb-2">
          {anime.year && <p className="font-semibold">{anime.year}</p>}
          {anime.rating && (
            <p className="font-bold text-white bg-zinc-400 dark:bg-zinc-700 rounded-sm px-2 py-1">
              {anime.rating}
            </p>
          )}
        </div>
        <p className="mb-2">
          {anime?.genres?.map((genre, i) => {
            return (
              <span key={i} className="font-medium text-sm">
                {i !== anime.genres.length && i !== 0 && ", "}
                {genre.name}
              </span>
            );
          })}
        </p>
        <p className="mb-2">{anime?.synopsis}</p>
        <div className="flex gap-2 items-center mb-2">
          {anime.score && (
            <>
              <p className="font-semibold text-sm text-zinc-500">Score: </p>
              <span className="font-medium text-sm">{anime.score}</span>
            </>
          )}
        </div>
        {anime.producers && anime.producers.length > 0 && (
          <div className="flex flex-wrap items-center mb-2">
            <p className="font-semibold text-sm text-zinc-500 mr-2">
              Produced By:
            </p>
            {anime.producers.map((producer, i) => {
              return (
                <span key={i} className="font-medium text-sm">
                  {i !== anime.producers.length && i !== 0 && ", "}
                  {producer.name}
                </span>
              );
            })}
          </div>
        )}

        {anime?.trailer?.embed_url && (
          <>
            <h1 className="text-lg font-semibold text-zinc-500">Trailer:</h1>
            <iframe
              src={anime?.trailer?.embed_url}
              width={400}
              height={250}
              allowFullScreen
              className="video-dimension"
            ></iframe>
          </>
        )}
      </div>

      {charList && charList.length > 0 && (
        <div id="character-slider">
          <h1 className="text-xl font-semibold mb-2">
            Characters in {anime?.title}
          </h1>
          {/* similar to my anime card list code - excluded link */}
          <div className="flex overflow-x-auto">
            {charList.map((data) => (
              <div className="flex-none mr-2 text-center relative bg-card hover:bg-[#1d5592] dark:hover:bg-neutral-900 p-3 rounded-lg group">
                <img
                  src={data.character.images.jpg.image_url}
                  alt="anime image"
                  className="w-40 h-56"
                  draggable="false"
                />
                {/* hover title */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-neutral-700 to-black h-12 rounded-b-md flex items-center justify-center px-1 opacity-0 group-hover:opacity-75 transition duration-500">
                  <p className="text-center text-xs line-clamp-2 text-white font-semibold">
                    {data.character.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectedAnime;
