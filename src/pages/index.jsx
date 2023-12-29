import React, { useState, useEffect } from "react";
import { Page, useNavigate } from "zmp-ui";
import useGooglePlacesAPI from "../components/useGoogleAPI";
import "../css/index.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [place, setPlace] = useState(null);
  const [query, setQuery] = useState("cơm tấm long xuyên làng đại học"); // default query
  const { fetchPlaceDetails, loading } = useGooglePlacesAPI(query);

  useEffect(() => {
    if (!loading) {
      fetchPlaceDetails()
        .then((place) => {
          setPlace(place);
          console.log(place);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [loading, fetchPlaceDetails]);

  const placeNames = [
    "cơm tấm long xuyên làng đại học", //ok
    "cơm tấm ngô quyền", //ok
    "cơm xèo khu B làng đại học", //ok
    "Bún Bò Huế Sông Hương làng đại học",
    "Trà sữa Ngô Gia làng đại học", //ok
    "Cafe muối chú long làng đại học", //ok
    "Bún chả hà nội làng đại học", //ok
    "Lẩu chay Hoàng Đạt 2 làng đại học", //ok
  ]; // array of place names

  const fetchRandomMeal = () => {
    // Randomly select a new query from the array
    const randomQuery =
      placeNames[Math.floor(Math.random(7) * placeNames.length)];
    setQuery(randomQuery);
  };
  const fetchMeal = () => {
    fetchPlaceDetails();
  };

  const renderMeal = () => {
    if (!place || !place.photos || place.photos.length === 0) return null;

    return (
      <div className="row">
        <div className="columns five">
          <img
            className=" w-64 h-64 rounded-full max-w-lg mx-auto"
            src={place.photos[0].getUrl()}
            alt="Meal"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="py-5">
            {place.name && (
              <p className="text-left">
                <strong>Tên quán: </strong> {place.name}
              </p>
            )}
            {place.rating && (
              <p className="text-left">
                <strong>Rating: </strong> {place.rating}
              </p>
            )}
            {place.formatted_phone_number && (
              <p className="text-left">
                <strong>Phone number: </strong> {place.formatted_phone_number}
              </p>
            )}
          </div>
          <div className="text-center">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => (window.location.href = place.url)}
            >
              GO HERE
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Page className=" ">
      <div className="bg-pink-100 min-h-screen flex flex-col items-center  p-4 align-top">
        <button className="bg-pink-300 hover:bg-pink-400 rounded-lg shadow-lg p-5 max-w-xs w-full ">
          <div
            className="flex items-center justify-center"
            onClick={fetchRandomMeal}
          >
            RAMDOM HERE
          </div>
        </button>
        <div id="mealContainer" className="mealContainer">
          {renderMeal()}
        </div>
      </div>
    </Page>
  );
};

export default HomePage;
