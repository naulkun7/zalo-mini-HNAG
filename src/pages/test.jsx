import React from "react"
import GooglePlacesAPI from "../components/GoogleAPI"

const App = () => {
  const handlePlaceDetailsLoaded = (placeDetails) => {
    // Handle the loaded place details here
    console.log(placeDetails)
    return placeDetails
  }

  return (
    <div id="app">
      <GooglePlacesAPI
        query="Cô Gái Bán Bánh"
        onPlaceDetailsLoaded={handlePlaceDetailsLoaded}
      />
    </div>
  )
}

export default App
