import React from "react";

const Sidebar = ({ topAnime }) => {
  return (
    <div className="bg-neutral-800 text-white rounded-md p-2">
      <div className="p-4 border-b-2">
        <h1 className="text-center text-xl">🔥 Hot Anime 🔥</h1>
      </div>
      {topAnime.map((animeTitle) => (
        <ul
          className="border-b-2 border-slate-600 p-2 hover:bg-neutral-900"
          key={animeTitle.mal_id}
        >
          <li className="flex gap-3">
            <img
              src={animeTitle.images.jpg.image_url}
              alt={animeTitle.title}
              className="basis-1/5 rounded-md object-contain h-20 w-9"
            />
            <a href={animeTitle.url} target="_blank" className="basis-4/5">
              {animeTitle.title}
              <br />
              <div className="text-xs">
                <span className="text-slate-500">Genres: </span>
                {/* rendering only two genres */}
                {animeTitle.genres[0].name}, {animeTitle.genres[1].name}
                <p className="text-slate-500">
                  Rank:{" "}
                  <span className="text-white font-semibold">
                    {animeTitle.rank}
                  </span>
                </p>
              </div>
            </a>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Sidebar;
