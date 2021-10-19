import React from "react";
import { TiLocationArrowOutline } from "react-icons/ti";
import { MdMyLocation, MdArrowDropDown } from "react-icons/md";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsScissors, BsDot } from "react-icons/bs";
import { GiDelicatePerfume } from "react-icons/gi";
import Spa from "../images/spa-2.jpg";
import "./ImageSlider.css";
const ImageSlider = () => {
  return (
    <div className="image-container">
      <div className="image-slider">
        <h2 className="image-caption">
          Treat Yourself To a Revitalising Treatment
        </h2>
        <div className="search-field">
          <TiLocationArrowOutline size={60} className="icon1" />
          <input type="text" placeholder="Thiruvanatpuram" className="search" />
          <MdArrowDropDown size={60} className="icon2" />
          <MdMyLocation size={60} className="icon3" />
        </div>
      </div>
      <img src={Spa} alt="" className="spa-image" />
      <div className="image-footer">
        <AiOutlineLeft size={50} />
        <div className="div1">
          <GiDelicatePerfume size={30} />
          <div>
            <BsDot color="tomato" size={30} />
            <BsDot color="darkgrey" size={30} />
          </div>
          Massage & Spa
        </div>
        <div className="div2">
          {" "}
          <BsScissors size={30} />
          <div>
            <BsDot color="tomato" size={30} />
            <BsDot color="darkgrey" size={30} />
          </div>
          Beauty & Salon
        </div>
        <div className="div3">
          <GiDelicatePerfume size={30} />
          <div>
            <BsDot color="tomato" size={30} />
            <BsDot color="darkgrey" size={30} />
          </div>
          Massage & Spa
        </div>
        <div className="div4">
          <BsScissors size={30} />
          <div>
            <BsDot color="tomato" size={30} />
            <BsDot color="darkgrey" size={30} />
          </div>
          Beauty & Salon
        </div>
        <div className="div5">
          <GiDelicatePerfume size={30} />
          <div>
            <BsDot color="tomato" size={30} />
            <BsDot color="darkgrey" size={30} />
          </div>
          Massage & Spa
        </div>
        <AiOutlineRight size={50} />
      </div>
    </div>
  );
};

export default ImageSlider;
