import React from "react";

function FoodCard({ data,setShow }) {
  return (
    <div className="card">
      <div className="food-card">
        <div className="img-container">
          <img
            className="food-img"
            src="./images/hot-sushi-bg.webp"
            alt="sushi card"
          />
          <div onClick={()=>setShow(true)}>+</div>
          {/* <img
            class="heart-icon"
            src="./images/heart-icon.svg"
            alt="heart icon"
          /> */}
        </div>

        <div className="text-container">
          <div className="restaurant-logo">
            <img src="./images/rest-img.webp" />
          </div>

          <div className="card-info">
            <div>
              <p className="card-info-head">{data.name}</p>
              <div className="review-text card-info-text">
                <img src="./images/fi-sr-star.svg" alt="star icon" />
                <span className="rating-text">4.8</span>
                <img src="./images/dot.svg" alt="dot icon" />
                <p>1024 + reviews</p>
              </div>
              <p>Sushi, Sea food</p>
            </div>
            <div className="delivery-text green-bg">Free Delivery</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
