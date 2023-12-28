<<<<<<< HEAD
import React from "react";
import GooglePlacesAPI from "../components/GoogleAPI";

const App = () => {
  const handlePlaceDetailsLoaded = (placeDetails) => {
    // Handle the loaded place details here
    console.log(placeDetails);
    return placeDetails;
  };

  return (
    <div id="app">
      <GooglePlacesAPI
        query="Cô Gái Bán Bánh"
        onPlaceDetailsLoaded={handlePlaceDetailsLoaded}
      />
    </div>
  );
};
=======
import React, { useEffect } from "react"
import useGooglePlacesAPI from "../components/useGoogleAPI"
// import axios from "axios"

const App = () => {
  const { fetchPlaceDetails, loading } = useGooglePlacesAPI("coffee shop")

  useEffect(() => {
    if (!loading) {
      fetchPlaceDetails()
        .then((place) => {
          // You can use Axios here if needed
          console.log(place)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }, [loading, fetchPlaceDetails])

  return <div>{loading ? "Loading..." : "Ready to fetch place details"}</div>
}
>>>>>>> luan-dev

export default App;
