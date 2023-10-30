import { useState, useEffect } from "react";
import "../styles/search.css";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [search, setSearch] = useState(""); //search anime title
  const [anime, setAnime] = useState([]); // display anime cards
  const getApiSearch = async () => {
    await axios
      .get(
        `https://api.jikan.moe/v4/anime?q=${search}&limit=24&order_by=start_date&sort=asc`
      )
      .then((res) => setAnime(res.data.data));
  };

  // only works if you enter result as opposed to every change to search state
  useEffect(() => {
    getApiSearch();
  }, []);

  const searchHandler = (e) => {
    e.preventDefault();
    getApiSearch();
    setSearch("");
  };

  return (
    <div id="search-section">
      <div className="search-box">
        <form
          className="flex justify-center items-center bg-yellow-300 dark:bg-yellow-200 mx-auto rounded-sm w-3/4 sm:w-[500px] md:w-[600px]"
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

      <div className="anime-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {/* this is essentially anime cards design - just different size */}
        {anime.map((data) => (
          <div
            className="flex-none mx-2 text-center relative bg-card hover:bg-[#1d5592] dark:hover:bg-neutral-900 p-3 rounded-lg group w-full h-52 sm:h-60 lg:h-64 xl:h-72"
            key={data.mal_id}
          >
            <Link to={`/anime/${data.mal_id}`}>
              <img
                src={data.images.jpg.image_url}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
