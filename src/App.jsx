import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MyListPage from "./pages/MyListPage";
import RegisterPage from "./pages/RegisterPage";
import SignInPage from "./pages/SignInPage";
import Footer from "./components/Footer";
import SelectedAnime from "./pages/SelectedAnime";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/list" element={<MyListPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/anime/:id" element={<SelectedAnime />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
