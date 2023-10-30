import React, { useState, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { db } from "../firebase";
import { userAuth } from "../context/AuthContext";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";

const MyListPage = () => {
  const { user } = userAuth();
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setAnime(doc.data()?.favorited);
    });
  }, [user?.email]);

  const favedTitleRef = doc(db, "users", `${user?.email}`);
  const deleteAnimeTitle = async (titleId) => {
    try {
      const result = anime.filter((item) => item.id !== titleId);
      await updateDoc(favedTitleRef, {
        favorited: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto my-2 min-h-[80vh]">
      <h1 className="text-black dark:text-white text-center text-xl mb-3">
        ❤️‍🔥 My Favorite Animes ❤️‍🔥
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {anime.map((data) => (
          <div
            className="flex flex-col text-center relative font-semibold text-md bg-card hover:bg-[#1d5592] dark:hover:bg-neutral-900 p-3 rounded-lg h-full"
            key={data.id}
          >
            <Link to={`/anime/${data.id}`}>
              <img src={data.img} alt="anime image" className="w-60 h-80" />
              <p className="text-white mt-2 text-xs sm:text-sm truncate">
                {data.title}
              </p>
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
