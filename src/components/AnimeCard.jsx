import { Link } from "react-router-dom";

const AnimeCard = ({ data }) => {
  return (
    <div className="flex-none mr-2 text-center relative bg-card hover:bg-[#1d5592] dark:hover:bg-neutral-900 p-3 rounded-lg group">
      <Link to={`/anime/${data.mal_id}`}>
        <img
          src={data.images.jpg.image_url}
          alt="anime image"
          className="w-40 h-56"
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
  );
};

export default AnimeCard;
