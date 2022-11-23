import React from "react";

const Header = ({ darkTheme, setDarkTheme }) => {
  return (
    <section className="flex justify-between p-5 w-screen">
      <div className="text-2xl text-stone-900 dark:text-stone-50">
        👾ANI-MAN
        <strong className="text-purple-500 dark:text-amber-600 font-extrabold">
          GO
        </strong>
      </div>
      <button
        onClick={() => setDarkTheme(!darkTheme)}
        className="w-12 h-10 bg-purple-500 rounded-full hover:shadow-lg"
      >
        {darkTheme ? `💡` : "🌙"}
      </button>
    </section>
  );
};

export default Header;
