import React from "react";

function HomeFilter() {
  return (
    <aside>
      <p className="filter-text">Filter</p>
      {/* <!-- Search By --> */}
      <div>
        <p className="filter">Search By</p>
        <ul>
          {/* <!-- filter-item search--> */}
          <li className="filter-item">
            <div className="custom-checkbox">
              <input type="checkbox" id="checkbox1" />
              <label for="checkbox1"></label>
            </div>
            <div>
              <p className="filter-info">Special Offers</p>
              <p className="filter-info-text">56 places</p>
            </div>
          </li>
          {/* <!-- filter item search--> */}
          <li className="filter-item">
            <div className="custom-checkbox">
              <input type="checkbox" id="checkbox2" />
              <label for="checkbox2"></label>
            </div>
            <div>
              <p className="filter-info">Free Delivery</p>
              <p className="filter-info-text">408 places</p>
            </div>
          </li>
          {/* <!-- filter item search--> */}
          <li className="filter-item">
            <div className="custom-checkbox">
              <input type="checkbox" id="checkbox3" />
              <label for="checkbox3"></label>
            </div>
            <div>
              <p className="filter-info">Top Sellers</p>
              <p className="filter-info-text">15 places</p>
            </div>
          </li>
          {/* <!-- filter item search--> */}
          <li className="filter-item">
            <div className="custom-checkbox">
              <input type="checkbox" id="checkbox4" />
              <label for="checkbox4"></label>
            </div>
            <div>
              <p className="filter-info">Open Now</p>
              <p className="filter-info-text">255 places</p>
            </div>
          </li>
          {/* <!-- filter item search --> */}
          <li className="filter-item">
            <div className="custom-checkbox">
              <input type="checkbox" id="checkbox5" />
              <label for="checkbox5"></label>
            </div>
            <div>
              <p className="filter-info">Pickup</p>
              <p className="filter-info-text">350 places</p>
            </div>
          </li>
        </ul>
      </div>
      {/* <!-- Sort By --> */}
      <div>
        <p className="filter-text">Sort By</p>
        <ul>
          {/* <!-- filter-item sort--> */}
          <li className="filter-item">
            <div className="custom-checkbox">
              <input type="checkbox" id="checkbox6" />
              <label for="checkbox6"></label>
            </div>
            <div>
              <p className="filter-info">Nearest First</p>
            </div>
          </li>
          {/* <!-- filter-item sort--> */}
          <li className="filter-item">
            <div className="custom-checkbox">
              <input type="checkbox" id="checkbox7" />
              <label for="checkbox7"></label>
            </div>
            <div>
              <p className="filter-info">Best Match</p>
            </div>
          </li>
          {/* <!-- filter-item sort--> */}
          <li className="filter-item">
            <div className="custom-checkbox">
              <input type="checkbox" id="checkbox8" />
              <label for="checkbox8"></label>
            </div>
            <div>
              <p className="filter-info">Customer Rating</p>
            </div>
          </li>
          {/* <!-- filter-item sort--> */}
          <li className="filter-item">
            <div className="custom-checkbox">
              <input type="checkbox" id="checkbox9" />
              <label for="checkbox9"></label>
            </div>
            <div>
              <p className="filter-info">Delivery Fee</p>
            </div>
          </li>
        </ul>
      </div>
      {/* <!-- Ratings --> */}
      <div>
        <p className="filter-text">Ratings</p>
        <ul>
          {/* <!-- filter item rating --> */}
          <li className="filter-item">
            <div className="custom-checkbox">
              <input type="checkbox" id="checkbox10" />
              <label for="checkbox10"></label>
            </div>
            <div>
              <img src="./images/fi-sr-star.svg" alt="star" />
              <img src="./images/fi-sr-star.svg" alt="star" />
              <img src="./images/fi-sr-star.svg" alt="star" />
              <img src="./images/fi-sr-star.svg" alt="star" />
              <img src="./images/fi-sr-star.svg" alt="star" />
            </div>
          </li>
          {/* <!-- filter item rating --> */}
          <li className="filter-item">
            <div className="custom-checkbox">
              <input type="checkbox" id="checkbox11" />
              <label for="checkbox11"></label>
            </div>
            <div>
              <img src="./images/fi-sr-star.svg" alt="star" />
              <img src="./images/fi-sr-star.svg" alt="star" />
              <img src="./images/fi-sr-star.svg" alt="star" />
              <img src="./images/fi-sr-star.svg" alt="star" />
            </div>
          </li>
          {/* <!-- filter item rating --> */}
          <li className="filter-item">
            <div className="custom-checkbox">
              <input type="checkbox" id="checkbox12" />
              <label for="checkbox12"></label>
            </div>
            <div>
              <img src="./images/fi-sr-star.svg" alt="star" />
              <img src="./images/fi-sr-star.svg" alt="star" />
              <img src="./images/fi-sr-star.svg" alt="star" />
            </div>
          </li>
          {/* <!-- filter item rating --> */}
          <li className="filter-item">
            <div className="custom-checkbox">
              <input type="checkbox" id="checkbox13" />
              <label for="checkbox13"></label>
            </div>
            <div>
              <img src="./images/fi-sr-star.svg" alt="star" />
              <img src="./images/fi-sr-star.svg" alt="star" />
            </div>
          </li>
          {/* <!-- filter item rating --> */}
          <li className="filter-item">
            <div className="custom-checkbox">
              <input type="checkbox" id="checkbox14" />
              <label for="checkbox14"></label>
            </div>
            <div>
              <img src="./images/fi-sr-star.svg" alt="star" />
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}
export default HomeFilter;
