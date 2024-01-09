// MyTinderCard.js
import React from "react";
import TinderCard from "react-tinder-card";
import PropTypes from "prop-types";
import MealRenderV2 from "./mealRenderV2";

const MyTinderCard = ({ meal, onSwipe }) => {
  return (
    <div className="card__container">
      <TinderCard
        className="swipe"
        key={meal.id}
        onSwipe={onSwipe}
        // preventSwipe={["up", "down"]}
      >
        <MealRenderV2 meal={meal} />
      </TinderCard>
    </div>
  );
};

MyTinderCard.propTypes = {
  meal: PropTypes.object.isRequired,
  onSwipe: PropTypes.func.isRequired,
};

export default MyTinderCard;
