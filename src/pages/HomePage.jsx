import { useState, useEffect } from "react";
import "../styles/home.css";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Carousel from "../components/Carousel";
import AnimeCard from "../components/AnimeCard";

const HomePage = () => {
  const [hotAnime, setHotAnime] = useState([]);
  const [recentAnime, setRecentAnime] = useState([]);
  const [upcomingAnime, setUpcomingAnime] = useState([]);

  const getHotAnime = async () => {
    await axios
      .get("https://api.jikan.moe/v4/top/anime")
      .then((res) => setHotAnime(res.data.data));
  };

  const getRecentAnime = async () => {
    await axios
      .get("https://api.jikan.moe/v4/seasons/now?sfw")
      .then((res) => setRecentAnime(res.data.data));
  };

  const getUpcomingAnime = async () => {
    await axios
      .get("https://api.jikan.moe/v4/seasons/upcoming?sfw?limit=10")
      .then((res) => setUpcomingAnime(res.data.data));
  };

  // on initial page render, call once
  useEffect(() => {
    getHotAnime();
    getRecentAnime();
    getUpcomingAnime();
  }, []);

  return (
    <section id="home-page">
      <div id="hero-carousel">
        <Carousel recentAnime={recentAnime} />
      </div>
      <div id="side-hotAnime" className="text-white">
        <Sidebar hotAnime={hotAnime} />
      </div>
      <div id="recommendations">
        <h1 className="text-2xl font-semibold mb-2">Upcoming Anime</h1>
        <div className="flex overflow-x-auto">
          {upcomingAnime.map((data) => (
            <AnimeCard data={data} key={data.mal_id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
