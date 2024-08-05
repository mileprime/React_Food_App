import React from "react";
import { LogoImage, AccountIcon } from "../assets";

function Header() {
  return (
    <header>
      <div>
        <img src={LogoImage} alt="logo" />
      </div>

      <div className="user-nav">
        <div className="business-btn">
          <img src="./fi-rr-briefcase.png" alt="business icon" />
          <p>Start your business</p>
        </div>
        <button className="main-btn">
          <img src={AccountIcon} alt="account icon" />
          <p>Account</p>
        </button>
      </div>
    </header>
  );
}
export default Header;
