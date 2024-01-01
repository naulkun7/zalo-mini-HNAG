import React from "react";

const MealRender = ({ meal, fadeIn }) => {
  if (!meal) return null;

  const mealClass = fadeIn ? "row fade-in" : "row";
  return (
    <div className={mealClass}>
      <div className="columns five">
        <img
          className="w-64 h-64 rounded-full max-w-lg mx-auto"
          src={meal.image_source}
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
    </div>
  );
};

export default MealRender;
