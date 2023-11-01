import React, { useState, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { db } from "../firebase";
import { userAuth } from "../context/AuthContext";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";
import "../styles/list.css";

const MyListPage = () => {
  const { user } = userAuth();
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setAnime(doc.data()?.bookmarked);
    });
  }, [user?.email]);

  const animeTitleRef = doc(db, "users", `${user?.email}`);
  const deleteAnimeTitle = async (titleId) => {
    try {
      const result = anime.filter((item) => item.id !== titleId);
      await updateDoc(animeTitleRef, {
        bookmarked: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto my-2 min-h-[83vh]">
      <h1 className="text-black dark:text-white text-center text-xl mb-3">
        ❤️‍🔥 My Favorite Animes ❤️‍🔥
      </h1>

      {/* used similar code to search page grid, but all cards have absolute positioned x mark */}
      <div className="anime-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {anime?.map((data) => (
          <div
            className="flex-none mx-2 text-center relative bg-card hover:bg-[#1d5592] dark:hover:bg-neutral-900 p-3 rounded-lg group w-full h-52 sm:h-60 lg:h-64 xl:h-72"
            key={data?.id}
          >
            <Link to={`/anime/${data.id}`}>
              <img
                src={data.img}
                alt="anime image"
                className="w-full h-full object-cover"
                draggable="false"
              />
              {/* hover title */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-neutral-700 to-black h-12 rounded-b-md flex items-center justify-center px-1 opacity-0 group-hover:opacity-75 transition duration-500">
                <p className="text-center text-xs line-clamp-2 text-white font-semibold">
                  {data.title}
                </p>
              </div>
            </Link>
            <button
              className="w-[30px] h-[40px] bg-transparent rounded-full absolute top-0 right-1 hover:opacity-90"
              onClick={() => deleteAnimeTitle(data.id)}
            >
              <AiFillCloseCircle size={30} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyListPage;
