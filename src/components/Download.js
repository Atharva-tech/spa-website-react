import React from "react";
import "./Download.css";
import Apple from "../images/apple.png";
import Android from "../images/android.png";
import Iphone from "../images/iphone.png";
import Huawei from "../images/huawei.png";

const Download = () => {
  return (
    <div className="download-now">
      <img src={Iphone} alt="" className="iphone" />
      <img src={Huawei} alt="" className="huawei" />
      <div className="store">
        <h2>Download The App</h2>
        <h4>Choose & book from available services at our plaform</h4>
        <div className="store-container">
          <img src={Apple} alt="" className="app-store" />
          <img src={Android} alt="" className="play-store" />
        </div>
      </div>
    </div>
  );
};

export default Download;
