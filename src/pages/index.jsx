import React, { useState, useEffect } from "react";
import { Page, useNavigate } from "zmp-ui";
import "../css/index.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [meal, setMealData] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);

  const getRandomMeal = () => {
    fetch("https://sheetdb.io/api/v1/sqgpxr8fa1wme")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          // Randomly select one meal from the data
          const randomMeal = data[Math.floor(Math.random() * data.length)];
          setMealData(randomMeal);
          setFadeIn(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  useEffect(() => {
    if (meal) {
      // Trigger fade-in effect
      setFadeIn(true);
    }
  }, [meal]);
  const renderMeal = () => {
    if (!meal) return null;

    return (
      <div className="row">
        <div className="columns five  ">
          <img
            className="w-64 h-64 rounded-full max-w-lg mx-auto "
            src={meal.image_source} // Use the correct property for the image URL
            alt="Meal"
          />
          <div className="py-5">
            {meal.name && (
              <p className="text-left py-1">
                <strong>Name: </strong> {meal.name}
              </p>
            )}
            {meal.phone_number && (
              <p className="text-left py-1">
                <strong>Phone number: </strong> {meal.phone_number}
              </p>
            )}
            {meal.address_full && (
              <p className="text-left py-1">
                <strong>Address: </strong> {meal.address_full}
              </p>
            )}
            {meal.rating && (
              <p className="text-left py-1">
                <strong>Rating: </strong> {meal.rating}
              </p>
            )}
            {meal.place_status && (
              <p className="text-left py-1">
                <strong>Status: </strong> {meal.place_status}
              </p>
            )}
          </div>

          {/* <div className="text-center py-4">
            <button
              className="bg-violet-400 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => navigate("/user")}
            >
              MORE INFO
            </button>
          </div> */}
          <div className="text-center py-4">
            <button
              className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-full max-w-xs w-1/2 text-xl"
              onClick={() => (window.location.href = meal.ggmap_url)}
            >
              GO HERE
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Page>
      <div className="bg-pink-100 min-h-screen flex flex-col items-center p-4 align-top">
        <button
          className="bg-pink-300 hover:bg-pink-400 rounded-lg shadow-lg p-5 max-w-xs w-full font-bold text-xl"
          onClick={getRandomMeal}
        >
          RANDOM MEAL
        </button>
        <div
          id="mealContainer"
          className={`mealContainer ${fadeIn ? "fade-in" : ""}`}
        >
          {renderMeal()}
        </div>
      </div>
    </Page>
  );
};

export default HomePage;
