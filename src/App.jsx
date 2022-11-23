import React, { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 min-h-screen dark:bg-fuchsia-800 font-architect">
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Body />
      </div>
    </div>
  );
};

export default App;
