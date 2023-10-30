// import { useState } from "react";
// import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
// import { userAuth } from "../context/AuthContext";
// import { db } from "../firebase";
// import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { Link } from "react-router-dom";

const AnimeCard = ({ data }) => {
  // const { user } = userAuth();
  // const [favorite, setFavorite] = useState(false);
  // const [saved, setSaved] = useState(false);

  // const animeTitleRef = doc(db, "users", `${user?.email}`);

  // const favoriteTitles = async () => {
  //   {
  //     user?.email
  //       ? (setFavorite(!favorite),
  //         setSaved(true),
  //         await updateDoc(animeTitleRef, {
  //           favorited: arrayUnion({
  //             id: data.mal_id,
  //             img: data.images.jpg.image_url,
  //             title: data.title,
  //             url: data.url,
  //           }),
  //         }))
  //       : alert("Login to save titles to profile");
  //   }
  // };

  return (
    <>
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

        {/* DELETE after finish selectedAnime page */}
        {/* <button
          className="w-[30px] h-[40px] bg-transparent rounded-full absolute top-0 right-1 hover:opacity-90"
          onClick={favoriteTitles}
        >
          {!favorite ? (
            <AiOutlineHeart size={30} color="gray" />
          ) : (
            <AiFillHeart size={30} color="red" />
          )}
        </button> */}
      </div>
    </>
  );
};

export default AnimeCard;
