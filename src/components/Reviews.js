import React from "react";
import "./Reviews.css";
import Profile from "../images/profile.jpg";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Reviews = () => {
  return (
    <div className="reviews">
      <h2>Customer Reviews</h2>
      <div className="review-content">
        <AiOutlineLeft size={50} />
        <div className="review-card">
          <div className="review-header">
            <img src={Profile} alt="" className="review-image" />
            <h3>John Doe</h3>
          </div>
          <div className="review-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="review-card">
          <div className="review-header">
            <img src={Profile} alt="" className="review-image" />
            <h3>John Doe</h3>
          </div>
          <div className="review-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="review-card">
          <div className="review-header">
            <img src={Profile} alt="" className="review-image" />
            <h3>John Doe</h3>
          </div>
          <div className="review-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <AiOutlineRight size={50} />
      </div>
    </div>
  );
};

export default Reviews;
