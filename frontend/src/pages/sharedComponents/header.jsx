import React from "react";
import { MainLogo, BriefcaseIcon, AccountIcon } from "../imagesAndIcons";
import { Link } from "react-router-dom";
import "../styling/header.css";
import { FaRegListAlt } from "react-icons/fa";

function Header() {
  return (
    <header>
      <div>
        <Link to="/home">
          <img src={MainLogo} alt="Hanki Logo" />
        </Link>
      
      </div>
      <div className="user-nav">
        <div className="business-btn">
          <img src={BriefcaseIcon} alt="Briefcase Icon" />
          <p>Start your business</p>
        </div>
        <Link to="/admin/orders">
        <FaRegListAlt color="#7a44ff" size={30}/>
        </Link>
        <button className="main-btn">
          <img src={AccountIcon} alt="Account icon" />
          <p>Account</p>
        </button>
      </div>
    </header>
  );
}

export default Header;
