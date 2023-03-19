import React from "react";

const Header = ({ darkTheme, setDarkTheme }) => {
  return (
    <section className="flex justify-between p-5 w-screen">
      <div className="text-2xl text-stone-900 dark:text-stone-50">
        ANI-MAN
        <strong className="text-indigo-700 dark:text-amber-400 font-semibold">
          GO
        </strong>
      </div>
      <button
        onClick={() => setDarkTheme(!darkTheme)}
        className="w-12 h-10 bg-indigo-900 dark:bg-indigo-800 rounded-full hover:shadow-lg"
      >
        {darkTheme ? `💡` : "🌙"}
      </button>
    </section>
  );
};

export default Header;
