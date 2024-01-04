// Import libraries
import React, { useState, useEffect } from "react";
import { Page } from "zmp-ui";
import "../css/index.css";

// Import utils
import { useData } from "../utils/dataContext";

// Import components
//import MealRenderV2 from "../components/mealRenderV2";
import LoadingScreen from "../components/loadingScreen";
//import RandomMealButton from "../components/btnRandomMeal"
import MyTinderCard from "../components/MyTinderCard";
import { handleSwipe } from "../components/handleSwipe";

const HomePage = () => {
  const [meal, setMeal] = useState(null);
  const [fadeIn, setFadeIn] = useState(true);
  const { combinedData, isLoading } = useData();

  const [currentMealIndex, setCurrentMealIndex] = useState(0);

  const onSwipe = (direction) => {
    handleSwipe(direction, currentMealIndex, combinedData, setCurrentMealIndex);
  };
  // Animation for when a new meal is rendered
  useEffect(() => {
    if (meal) {
      setFadeIn(false);
      setTimeout(() => setFadeIn(true), 50);
    }
  }, [meal]);

  // Loading Screen while data is being fetched
  if (isLoading) {
    return <LoadingScreen />;
  }

  const currentMeal = combinedData[currentMealIndex];

  return (
    <Page>
      <div className="bg-pink-100 min-h-screen flex flex-col items-center p-4 align-top">
        {/* <RandomMealButton
          combinedData={combinedData}
          setMeal={setMeal}
          currentMealId={meal?.[0]?.id}
        /> */}
        <div id="mealContainer" className="mealContainer container min-w-full">
          <MyTinderCard meal={currentMeal} onSwipe={onSwipe} />
        </div>
      </div>
    </Page>
  );
};

export default HomePage;
