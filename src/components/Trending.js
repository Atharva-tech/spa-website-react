import React from "react";
import "./Trending.css";
import { IoStarSharp } from "react-icons/io5";
import Tr1 from "../images/trending1.jpg";
import Tr2 from "../images/trending2.jpg";
import Tr3 from "../images/trending3.jpg";
import { BsDot } from "react-icons/bs";

const Trending = () => {
  return (
    <div className="trending">
      <h2>Trending</h2>
      <div className="menu">
        <div className="menuList">
          <div className="menuItem">
            <div style={{ backgroundImage: `url(${Tr1})` }}> </div>
            <h1 className="name">Total Relief Massage Center</h1>
            <p style={{ color: "orange" }}>Unisex Massage Center</p>
            <p>Kothrud,Pune</p>
            <div className="menu-footer">
              <div className="rating-time">
                <div className="rating">
                  {" "}
                  <IoStarSharp color="orange" />
                </div>
                <div className="rating-number"> 3.4</div>
                <div className="time">
                  <BsDot color="tomato" /> 21min
                </div>
                <div style={{ color: "purple" }}>30% Off</div>
              </div>
            </div>
          </div>
        </div>
        <div className="menuList">
          <div className="menuItem">
            <div style={{ backgroundImage: `url(${Tr2})` }}> </div>
            <h1 className="name">Total Relief Massage Center</h1>
            <p style={{ color: "orange" }}>Unisex Massage Center</p>
            <p>Kothrud,Pune</p>
            <div className="menu-footer">
              <div className="rating-time">
                <div className="rating">
                  {" "}
                  <IoStarSharp color="orange" />
                </div>
                <div className="rating-number"> 3.4</div>
                <div className="time">
                  <BsDot color="tomato" /> 21min
                </div>
                <div style={{ color: "purple" }}>30% Off</div>
              </div>
            </div>
          </div>
        </div>
        <div className="menuList">
          <div className="menuItem">
            <div style={{ backgroundImage: `url(${Tr3})` }}> </div>
            <h1 className="name">Total Relief Massage Center</h1>
            <p style={{ color: "orange" }}>Unisex Massage Center</p>
            <p>Kothrud,Pune</p>
            <div className="menu-footer">
              <div className="rating-time">
                <div className="rating">
                  {" "}
                  <IoStarSharp color="orange" />
                </div>
                <div className="rating-number"> 3.4</div>
                <div className="time">
                  <BsDot color="tomato" /> 21min
                </div>
                <div style={{ color: "purple" }}>30% Off</div>
              </div>
            </div>
          </div>
        </div>
        <div className="menuList">
          <div className="menuItem">
            <div style={{ backgroundImage: `url(${Tr1})` }}> </div>
            <h1 className="name">Total Relief Massage Center</h1>
            <p style={{ color: "orange" }}>Unisex Massage Center</p>
            <p>Kothrud,Pune</p>
            <div className="menu-footer">
              <div className="rating-time">
                <div className="rating">
                  {" "}
                  <IoStarSharp color="orange" />
                </div>
                <div className="rating-number"> 3.4</div>
                <div className="time">
                  <BsDot color="tomato" /> 21min
                </div>
                <div style={{ color: "purple" }}>30% Off</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
