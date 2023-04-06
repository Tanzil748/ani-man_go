import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MyListPage from "./pages/MyListPage";
import RegisterPage from "./pages/RegisterPage";
import SignInPage from "./pages/SignInPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Routes>
        <Route path="/ani-man_go/" element={<HomePage />} />
        <Route path="/list" element={<MyListPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signIn" element={<SignInPage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
