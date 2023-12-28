import React, { useState, useEffect } from "react";
import { Page, useNavigate } from "zmp-ui";
import useGooglePlacesAPI from "../components/useGoogleAPI";
import "../css/index.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [place, setMealState] = useState(null);
  const { fetchPlaceDetails, loading } = useGooglePlacesAPI(
    "hoàng thị coffee nguyễn thái bình"
  );

  useEffect(() => {
    if (!loading) {
      fetchPlaceDetails()
        .then((place) => {
          setMealState(place);
          console.log(place);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [loading, fetchPlaceDetails]);

  const fetchMeal = () => {
    fetchPlaceDetails();
  };

  const renderMeal = () => {
    if (!place) return null;

    return (
      <div className="row">
        <div className="columns five">
          <img
            className="rounded-full"
            src={place.photos[0].getUrl()}
            alt="Meal"
          />
          <div className="py-5">
            {place.name && (
              <p className="text-center">
                <strong>Tên quán: </strong> {place.name}
              </p>
            )}
          </div>
          <div className="text-center">
            <button
              className="bg-green-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => navigate("/user")}
            >
              Tìm hiểu thêm!
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Page className="page container">
      <div className="indexText ">
        <h1 className="text-center py-2">Em ơi em em có đang đói hong? </h1>
        <h2 className="text-center py-2">Nếu em đói thì em ăn anh đi!!!</h2>
      </div>
      <div className="indexButton text-center py-5">
        <button
          className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={fetchMeal}
        >
          Get a meal
        </button>
      </div>
      <div id="mealContainer" className="mealContainer">
        {renderMeal()}
      </div>
    </Page>
  );
};

export default HomePage;
