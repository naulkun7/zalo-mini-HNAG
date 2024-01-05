import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "zmp-ui";

const RandomMealButton = ({ combinedData, setMeal, currentMealId }) => {
  const navigate = useNavigate();

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
    <div className="w-full rounded-lg max-w-xs h-3/4 flex justify-between">
      <button
        className="bg-pink-300 hover:bg-pink-400 rounded-lg shadow-lg p-5 w-1/3 h-25 font-bold text-sm"
        onClick={getRandomMeal}>
        UPDATE MEAL
      </button>
      <button
        className="bg-pink-300 hover:bg-pink-400 rounded-lg shadow-lg p-5 w-1/3 h-25 font-bold text-sm"
        onClick={getRandomMeal}>
        RANDOM MEAL
      </button>
      <button
        className="bg-pink-300 hover:bg-pink-400 rounded-lg shadow-lg p-5 w-1/3 h-25 font-bold text-sm"
        onClick={() => navigate("/login")}>
        LOGIN
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
