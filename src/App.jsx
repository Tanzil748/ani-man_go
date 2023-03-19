import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AnimeCard from "./components/AnimeCard";
import { BsSearch } from "react-icons/bs";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [search, setSearch] = useState("");
  const [anime, setAnime] = useState([]);

  const getApiCall = async () => {
    await axios
      .get(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
      .then((response) => {
        setAnime(response.data.data);
      });
  };

  useEffect(() => {
    getApiCall();
  }, []);

  const searchHandler = (e) => {
    e.preventDefault();
    getApiCall();
    setSearch("");
  };

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 min-h-screen dark:bg-[#1F1F1F]">
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <form
          className="flex justify-center items-center mb-5 bg-yellow-300 dark:bg-yellow-200 mx-auto rounded-full max-w-[600px]"
          onSubmit={searchHandler}
        >
          <input
            type="text"
            placeholder="Search an anime title..."
            className="w-[500px] h-[40px] text-xl p-3 bg-transparent outline-none placeholder-indigo-900 dark:placeholder-black"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <BsSearch
            size={20}
            onClick={searchHandler}
            className="cursor-pointer mr-3"
          />
        </form>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          <AnimeCard anime={anime} />
        </div>
      </div>
    </div>
  );
};

export default App;
