import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import AnimeCard from "./AnimeCard";
import { BsSearch } from "react-icons/bs";
import axios from "axios";

const Home = () => {
  const [search, setSearch] = useState(""); //search anime title
  const [anime, setAnime] = useState([]); // display anime cards
  const [topAnime, setTopAnime] = useState([]); //display top animes

  // call api when requesting anime title
  const getApiSearch = async () => {
    await axios
      .get(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
      .then((response) => {
        setAnime(response.data.data);
      });
  };

  // render popular anime
  const popularAnime = async () => {
    await axios
      .get(`https://api.jikan.moe/v4/top/anime?limit=10`)
      .then((response) => {
        setTopAnime(response.data.data);
      });
  };

  // api call rendered once when application loads
  useEffect(() => {
    getApiSearch();
    popularAnime();
  }, []);

  const searchHandler = (e) => {
    e.preventDefault();
    getApiSearch();
    setSearch("");
  };

  return (
    <section className="container mx-auto min-h-screen xl:min-h-[165vh]">
      {/* search bar */}
      <div className="mt-10">
        <form
          className="flex justify-center items-center mb-5 bg-yellow-300 dark:bg-yellow-200 mx-auto rounded-full max-w-[600px]"
          onSubmit={searchHandler}
        >
          <input
            type="text"
            placeholder="Search an anime title..."
            className="w-[500px] h-[40px] text-xl p-3 bg-transparent outline-none placeholder-black text-black"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <BsSearch
            size={20}
            onClick={searchHandler}
            className="cursor-pointer mr-3 text-black"
          />
        </form>
      </div>

      <div className="flex justify-center gap-3">
        {/* anime cards */}
        <div className="basis-3/4 min-h-screen">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {anime.map((data) => (
              <AnimeCard data={data} key={data.mal_id} />
            ))}
          </div>
        </div>

        {/* sidebar */}
        <div className="hidden xl:block basis-1/4 max-h-screen">
          <Sidebar topAnime={topAnime} />
        </div>
      </div>
    </section>
  );
};

export default Home;
