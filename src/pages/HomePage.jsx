import { useState, useEffect } from "react";
import "../styles/home.css";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Carousel from "../components/Carousel";

const HomePage = () => {
  const [hotAnime, setHotAnime] = useState([]);
  const [recentAnime, setRecentAnime] = useState([]);

  const getHotAnime = async () => {
    await axios
      .get("https://api.jikan.moe/v4/top/anime?limit=10")
      .then((res) => setHotAnime(res.data.data));
  };

  const getRecentAnime = async () => {
    await axios
      .get("https://api.jikan.moe/v4/seasons/now?sfw")
      .then((res) => setRecentAnime(res.data.data));
  };

  // on initial page render, call once
  useEffect(() => {
    getHotAnime();
    getRecentAnime();
  }, []);

  return (
    <section id="home-page">
      <div id="hero-carousel">
        <Carousel recentAnime={recentAnime} />
      </div>
      <div id="side-hotAnime" className="text-white">
        <Sidebar hotAnime={hotAnime} />
      </div>
      <div id="recommendations">recommended anime</div>
    </section>
  );
};

export default HomePage;
