import React from "react";
// import { LogoImage, AccountIcon } from "../assets";

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
        <section className="steps-info">
          <div>
            <img src="./imagefood.png" alt="food" />
          </div>

          <section className="text-image">
            <div>
              <span className="steps-head">How It Works</span>
              <div>
                {/* Item div */}
                <div className="step-item">
                  <div className="step-num">01</div>
                  <div>
                    <p className="step-title">Enter Your Location</p>
                    <p className="step-doc">
                      We'll Show you stores and restaurants nearby you can order
                      from
                    </p>
                  </div>
                </div>
                {/* Item div 
               Item div  */}
                <div className="step-item">
                  <div className="step-num">02</div>
                  <div>
                    <p className="step-title">Find What You Want</p>
                    <p className="step-doc">
                      Search for items or dishes, businesses or cuisines.
                    </p>
                  </div>
                </div>
                {/* Item div 
              Item div  */}
                <div className="step-item">
                  <div className="step-num">03</div>
                  <div>
                    <p className="step-title">Order For Delivery</p>
                    <p className="step-doc">
                      We'll update you on your order's progress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="side-image">
              <img src="./pasta.png" alt="food" />
            </div>
          </section>
        </section>
      </section>

      <section className="app-section">
        <div>
          <div>
            <p className="app-download">Download Our Mobile App</p>
            <p className="app-text">And order food easily</p>
          </div>
          <div className="btn-app-container">
            <button className="btn-app btn-app-dark">
              <img src="./apple.png" />
              <p>Apple Store</p>
            </button>
            <button className="btn-app">
              <img src="./google.png" />
              <p>Google Play</p>
            </button>
          </div>

          <p className="app-text">
            Or Login or Create an Account to start order
          </p>
        </div>

        <div className="image-container">
          <img src="./app-image.png" alt="Mobile App Display" />
        </div>
      </section>
      <footer>
        <section>
          <img src="./images/logo.svg" alt="" />
          <p className="footer-text">
            Order Your Favorite Food From Restaurants and shops
          </p>
          <div className="btn-app-container">
            <button className="btn-app btn-app-dark">
              <img src="./apple.png" />
              <p>Apple Store</p>
            </button>
            <button className="btn-app">
              <img src="./google.png" />
              <p>Google Play</p>
            </button>
          </div>
        </section>
        <section className="footer-list">
          <div className="list-head-footer">Foods</div>
          <div className="ul-list">
            <ul>
              <li>Food</li>
              <li>Pizza</li>
              <li>Chinese</li>
              <li>Vegan</li>
              <li>Sushi</li>
              <li>Indian</li>
            </ul>
            <ul>
              <li>Doner</li>
              <li>Burgers</li>
              <li>Ice Cream</li>
              <li>Asian</li>
              <li>Groceries</li>
              <li>Order more food</li>
            </ul>
          </div>
        </section>
        <section className="footer-list">
          <div className="list-head-footer">Quick Links</div>
          <div className="ul-list">
            <ul>
              <li>Customer Service</li>
              <li>Recommend a business</li>
              <li>List Your Business</li>
              <li>Become an affiliate</li>
              <li>Become a courier</li>
              <li>Jobs</li>
            </ul>
            <ul>
              <li>Points</li>
              <li>Terms of use</li>
              <li>Privacy Statement</li>
              <li>Colophon</li>
              <li>Cookie statement</li>
              <li>Newsroom</li>
            </ul>
          </div>
        </section>
      </footer>
      <section className="copy-right">
        <div>
          <p className="copy-right-text">Hanki By TeachMeCode Institute 2024</p>
        </div>
        <div>
          <img src="" />
          <img src="" />
          <img src="" />
          <img src="" />
        </div>
      </section>
    </div>
  );
}

export default Landing;
