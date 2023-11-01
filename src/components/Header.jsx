import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { userAuth } from "../context/AuthContext";

const Header = () => {
  const [nav, setNav] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const { user, logOut } = userAuth();
  const navigate = useNavigate();

  const logOutHandler = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="border-b-2">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-3 px-3 md:px-0">
          <Link to="/">
            <div className="text-2xl text-stone-900 dark:text-stone-50">
              ANI-MAN
              <strong className="text-[#133a62] dark:text-amber-400 font-semibold">
                GO
              </strong>
            </div>
          </Link>

          {user?.email ? (
            <div className="hidden md:block">
              <Link to="/search" className="hover:text-accent px-3">
                Search Anime
              </Link>
              |
              <Link to="/list" className="hover:text-accent px-3">
                My List
              </Link>
              |
              <button
                onClick={logOutHandler}
                className="hover:text-accent px-3"
              >
                Sign Out
              </button>
              <button
                className="py-2 px-3 rounded-full text-white bg-card hover:scale-110"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
              </button>
            </div>
          ) : (
            <div className="hidden md:block">
              <Link to="/search" className="hover:text-accent px-3">
                Search Anime
              </Link>
              |
              <Link to="/signIn" className="hover:text-accent px-3">
                Sign In
              </Link>
              |
              <Link to="/register" className="hover:text-accent px-3">
                Register
              </Link>
              <button
                className="py-2 px-3 rounded-full text-white bg-card hover:scale-110"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
              </button>
            </div>
          )}

          {/* Menu Icon */}
          <div
            onClick={() => setNav(!nav)}
            className="block md:hidden cursor-pointer z-10"
          >
            <AiOutlineMenu size={30} />
          </div>

          {/* Mobile Menu */}
          <div
            className={
              nav
                ? "md:hidden fixed right-0 top-0 w-full h-full bg-primary z-10 transition-transform duration-300 ease-in-out transform translate-x-0"
                : "fixed right-[-100%] top-0 h-full transition-transform duration-300 ease-in-out transform translate-x-full"
            }
          >
            {user?.email ? (
              <ul className="w-full flex flex-col justify-center items-center">
                <li onClick={() => setNav(!nav)} className="py-6 ml-auto mr-3">
                  <AiOutlineClose size={30} />
                </li>
                <li onClick={() => setNav(!nav)} className="py-6">
                  <Link to="/">Home</Link>
                </li>
                <li onClick={() => setNav(!nav)} className="py-6">
                  <Link to="/search">Search Anime</Link>
                </li>
                <li onClick={() => setNav(!nav)} className="py-6">
                  <Link to="/list">My List</Link>
                </li>
                <li onClick={logOutHandler} className="py-6">
                  Sign Out
                </li>
              </ul>
            ) : (
              <ul className="w-full flex flex-col justify-center items-center">
                <li onClick={() => setNav(!nav)} className="py-6 ml-auto mr-3">
                  <AiOutlineClose size={30} />
                </li>
                <li onClick={() => setNav(!nav)} className="py-6">
                  <Link to="/">Home</Link>
                </li>
                <li onClick={() => setNav(!nav)} className="py-6">
                  <Link to="/search">Search Anime</Link>
                </li>
                <li onClick={() => setNav(!nav)} className="py-6">
                  <Link to="/signIn">Sign In</Link>
                </li>
                <li onClick={() => setNav(!nav)} className="py-6">
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
