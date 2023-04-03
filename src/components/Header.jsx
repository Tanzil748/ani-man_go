import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <section className="border-b-2">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-3 px-3 md:px-0">
          <Link to="/ani-man_go/">
            <div className="text-2xl text-stone-900 dark:text-stone-50">
              ANI-MAN
              <strong className="text-indigo-700 dark:text-amber-400 font-semibold">
                GO
              </strong>
            </div>
          </Link>

          <div className="hidden md:block">
            <button
              className="py-2 px-3 bg-button rounded-full hover:shadow-lg"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? "💡" : "🌙"}
            </button>
            <Link to="/list" className="hover:text-accent pl-3">
              My List
            </Link>
          </div>

          {/* Menu Icon */}
          <div
            onClick={() => setNav(!nav)}
            className="block md:hidden cursor-pointer z-10"
          >
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>

          {/* Mobile Menu */}
          <div
            className={
              nav
                ? "md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary z-10"
                : "fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between"
            }
          >
            <ul className="w-full text-center">
              <li onClick={() => setNav(!nav)} className="border-b py-6">
                <Link to="/ani-man_go/">Home</Link>
              </li>
              <li onClick={() => setNav(!nav)} className="border-b py-6">
                <Link to="/list">My List</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
