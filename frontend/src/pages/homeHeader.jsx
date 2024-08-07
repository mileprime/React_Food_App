import React from "react";
import { foodCatgoery } from "../assets";
function HomeHeader({ setCategory }) {
  return (
    <header>
      <img src="./images/header-bg-1.png" />
      <div className="dishs-container">
        {/* dish-item */}
        {foodCatgoery.map((food) => (
          <div
          key={food.id}
            onClick={() => setCategory(food.food_name)}
            className={`food-dish ${food.class_name}`}
          >
            <img src={food.food_image} />
            <p>{food.food_name}</p>
          </div>
        ))}
      </div>
    </header>
  );
}

export default HomeHeader;
