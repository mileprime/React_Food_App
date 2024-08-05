import React from "react";

function AppSection() {
  return (
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

        <p className="app-text">Or Login or Create an Account to start order</p>
      </div>

      <div className="image-container">
        <img src="./app-image.png" alt="Mobile App Display" />
      </div>
    </section>
  );
}
export default AppSection;
