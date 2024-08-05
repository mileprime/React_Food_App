import React from "react";
// import { LogoImage, AccountIcon } from "../assets";
import Header from "../shared/header";
import StepsInfo from "../pages/StepsInfo";
import AppSection from "../pages/AppSection";
import Footer from "../shared/footer";
function Landing() {
  return (
    <div>
      <Header />
      <section class="hearo">
        {/* Text Section  */}
        <div>
          <span className="hearo-title">Are You Hungry?</span>
          <p class="hearo-text">
            Order Your Favorite Food From Restaurants and shops
          </p>
          <div className="search-container">
            <input
              className="search-input"
              type="text"
              placeholder="Enter Address"
            />
            <button className="main-btn">Search</button>
          </div>
        </div>
        {/* Image Section */}
        <div>
          <img src="./woman.png" />
        </div>
      </section>
      <section className="center">
        <StepsInfo />
      </section>

      <AppSection />

      <Footer />
    </div>
  );
}

export default Landing;
