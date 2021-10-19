import React from "react";
import "./Navbar.css";
import { MdNewReleases } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-menu">
        <h2 className="logo">Spieler</h2>
        <div className="rightSide">
          <h3 className="offers">
            {" "}
            <MdNewReleases color="purple" />
            Offers
          </h3>
          <h3 className="professional">Become A Professional</h3>
          <h3 className="login">Login/Sign up</h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
