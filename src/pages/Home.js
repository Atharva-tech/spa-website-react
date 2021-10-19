import React from "react";
import Navbar from "../components/Navbar";

import "./Home.css";

import BannerSection from "../components/Banner";

import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import Trending from "../components/Trending";
import Download from "../components/Download";
import ImageSlider from "../components/ImageSlider";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <ImageSlider />
        <Trending />
        <BannerSection />
        <Reviews />
        <Download />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
