import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Sidebar = ({ hotAnime }) => {
  return (
    <div id="sidebar" className="bg-card text-white rounded-md p-2">
      <div className="p-4">
        <h1 className="text-center text-xl">🔥 Hot Anime 🔥</h1>
      </div>
      {hotAnime.map((animeTitle) => (
        <ul
          className="border-t-2 border-white dark:border-slate-600 p-2 hover:bg-[#1d5592] dark:hover:bg-neutral-900"
          key={animeTitle.mal_id}
        >
          <li>
            <Link to={`/anime/${animeTitle.mal_id}`} className="flex gap-3">
              {/* left container */}
              <div>
                <img
                  src={animeTitle.images.jpg.image_url}
                  alt={animeTitle.title}
                  className="w-14 object-cover"
                  draggable="false"
                />
              </div>

              {/* right container */}
              <div className="w-3/4">
                <h2 className="truncate text-base">{animeTitle.title}</h2>
                <div className="text-slate-400 dark:text-slate-500 text-xs">
                  {/* genres */}
                  <ul className="flex">
                    <span className="mr-1">Genres:</span>
                    <span className="flex flex-wrap text-white">
                      {animeTitle.genres.slice(0, 3).map((genre, i) => {
                        return (
                          <li key={i}>
                            {i !== animeTitle.genres.length && i !== 0 && ", "}
                            {genre.name}
                          </li>
                        );
                      })}
                    </span>
                  </ul>

                  {/* rank */}
                  <p>
                    Rank:{" "}
                    <span className="text-white font-semibold">
                      {animeTitle.rank}
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Sidebar;
