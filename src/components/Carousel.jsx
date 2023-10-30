import { useState } from "react";
import { Link } from "react-router-dom";
import { BsBook } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ recentAnime }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= recentAnime.length) {
      newIndex = recentAnime.length - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel-wrapper group">
      <div className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] left-2 sm:left-8 cursor-pointer z-10">
        <FaChevronLeft
          size={30}
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] right-2 sm:right-8 cursor-pointer z-10">
        <FaChevronRight
          size={30}
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        />
      </div>
      <div
        id="carousel"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {recentAnime.map((anime, i) => (
          <div id="slide" key={i} className="relative flex-none w-full h-full">
            <img
              src={anime.trailer.images.large_image_url}
              alt={anime.title}
              className="w-full h-[500px] object-cover dark:opacity-50 select-none"
              draggable="false"
            />

            {/* slide content */}
            <div className="absolute z-10 top-1/3 left-10 sm:left-20 right-10 sm:right-20 leading-8 select-none text-white">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                {anime.title}
              </div>
              <div className="flex gap-2 items-center text-sm">
                <p className="font-semibold">{anime.year}</p>
                <p className="font-bold bg-zinc-700 rounded-sm px-2 py-1">
                  {anime.rating}
                </p>
              </div>
              <p>
                {anime.genres.map((genre, i) => {
                  return (
                    <span key={i} className="font-medium text-sm">
                      {i !== anime.genres.length && i !== 0 && ", "}
                      {genre.name}
                    </span>
                  );
                })}
              </p>
              <p className="line-clamp-3 mb-2">{anime.synopsis}</p>
              {/* inline-block prevents link from extending entire parent width */}
              <Link to={`/anime/${anime.mal_id}`} className="inline-block">
                <button className="bg-amber-500 py-1 px-3 rounded-md flex justify-center items-center gap-2 font-semibold">
                  More Info
                  <BsBook />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
