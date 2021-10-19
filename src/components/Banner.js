import React from "react";
import "./Banner.css";
import BannerPic from "../images/banner.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <img src={BannerPic} alt="" />
      <div className="banner-content">
        <h2>
          Grow your Business With Us. <br />
          Become a Professional
        </h2>
        <button>JOIN NOW</button>
      </div>
    </div>
  );
};

export default Banner;
