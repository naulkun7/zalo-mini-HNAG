// Import libraries
import React, { useState, useEffect } from "react";
import { Page } from "zmp-ui";
import "../css/index.css";
import { useNavigate } from "zmp-ui";

// Import utils
import { useData } from "../utils/dataContext";

// Import components
import MealRenderV2 from "../components/mealRenderV2";
import LoadingScreen from "../components/loadingScreen";
import RandomMealButton from "../components/btnRandomMeal";
//import MyTinderCard from "../components/myTinderCard"
import { handleSwipe } from "../components/handleSwipe";

const HomePage = () => {
  const [meal, setMeal] = useState(null);
  const [fadeIn, setFadeIn] = useState(true);
  const { combinedData, isLoading } = useData();
  const [currentMealIndex, setCurrentMealIndex] = useState(0);
  const [seenMeals, setSeenMeals] = useState([]);
  const [isButtonAtBottom, setIsButtonAtBottom] = useState(true);
  const navigate = useNavigate();

  const onSwipe = (direction) => {
    handleSwipe(
      direction,
      currentMealIndex,
      combinedData,
      setCurrentMealIndex,
      seenMeals,
      setSeenMeals
    );
  };
  // Animation for when a new meal is rendered
  // useEffect(() => {
  //   if (meal) {
  //     setFadeIn(false);
  //     setTimeout(() => setFadeIn(true), 50);
  //   }
  // }, [meal]);

  const toggleButtonPosition = () => {
    setIsButtonAtBottom(!isButtonAtBottom);
  };

  useEffect(() => {
    if (!isLoading && combinedData.length > 0) {
      const randomIndex = Math.floor(Math.random() * combinedData.length);
      setCurrentMealIndex(randomIndex);
    }
  }, [isLoading, combinedData]);

  // Loading Screen while data is being fetched
  if (isLoading) {
    return <LoadingScreen />;
  }

  const currentMeal = combinedData[currentMealIndex];

  return (
    <Page>
      <div className="bg-pink-100 min-h-screen flex flex-col items-center p-4 align-top">
        <div id="mealContainer" className="mealContainer container min-w-full">
          {meal?.map((mealItem) => (
            <MealRenderV2 key={mealItem.id} meal={mealItem} fadeIn={fadeIn} />
          ))}
        </div>
        <div className={isButtonAtBottom ? "button-bottom" : "button-top"}>
          <RandomMealButton
            combinedData={combinedData}
            setMeal={setMeal}
            currentMealId={currentMeal?.id}
            onClick={toggleButtonPosition} // Add the toggle function to the onClick event
          />
        </div>
        {/* <div id="mealContainer" className="mealContainer container min-w-full">
          {currentMeal && (
            <MealRenderV2
              key={currentMeal.id}
              meal={currentMeal}
              onSwipe={onSwipe}
            />
          )}
        </div> */}
        {/* <div id="buttonContainer">
          <button
            className="bg-pink-300 hover:bg-pink-400 rounded-lg shadow-lg p-5 max-w-xs w-full font-bold text-xl"
            onClick={() => {
              navigate("/signin");
            }}>/p/AF1QipNJvhVFH08Zo6JTc9JM7Jt40EIHsRq4NSUNeNUe=w408-h544-k-no
            Sign In
          </button>
        </div> */}
      </div>
    </Page>
  );
};

export default HomePage;
