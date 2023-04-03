import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MyListPage from "./pages/MyListPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Routes>
        <Route path="/ani-man_go/" element={<HomePage />} />
        <Route path="/list" element={<MyListPage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
