import React from "react";
import PropTypes from "prop-types";
import Logo from "../assets/logo.png";

const RandomMealButton = ({ combinedData, setMeal, currentMealId }) => {
  const getRandomMeal = () => {
    if (combinedData && combinedData.length > 0) {
      let newMealIndex;
      do {
        newMealIndex = Math.floor(Math.random() * combinedData.length);
      } while (
        combinedData[newMealIndex].id === currentMealId &&
        combinedData.length > 1
      );

      setMeal([combinedData[newMealIndex]]);
    }
  };

  return (
    <div>
      <button
        className="bg-pink-300 hover:bg-pink-400 rounded-lg shadow-lg p-5 max-w-xs w-full font-bold text-xl"
        onClick={getRandomMeal}
      >
        {/* <img src={Logo} alt="logo" className="w-16" /> */}
        RANDOM MEAL
      </button>
    </div>
  );
};

RandomMealButton.propTypes = {
  combinedData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
  setMeal: PropTypes.func.isRequired,
  currentMealId: PropTypes.number,
};

export default RandomMealButton;
