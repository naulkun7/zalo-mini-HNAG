import React, { useEffect, useState } from "react"

const GooglePlacesAPI = ({ query, onPlaceDetailsLoaded }) => {
  const [loading, setLoading] = useState(true)

  let googleAPI = import.meta.env.VITE_GG_API_KEY

  useEffect(() => {
    const script = document.createElement("script")
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=" +
      `${googleAPI}` +
      "&libraries=places"
    script.async = true
    script.onload = () => loadPlaceDetails(query)
    document.body.appendChild(script)
  }, [query])

  const loadPlaceDetails = (query) => {
    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    )

    service.findPlaceFromQuery(
      {
        query,
        fields: ["place_id"],
      },
      (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          getPlaceDetails(results[0].place_id, service)
        } else {
          console.error("Error:", status)
          setLoading(false)
        }
      }
    )
  }

  const getPlaceDetails = (placeId, service) => {
    service.getDetails(
      {
        placeId,
        fields: [
          "name",
          "rating",
          "formatted_phone_number",
          "geometry",
          "url",
          "reviews",
          "photo",
        ],
      },
      (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          onPlaceDetailsLoaded(place)
        } else {
          console.error("Error:", status)
        }
        setLoading(false)
      }
    )
  }

  useEffect(() => {
    console.log(loading ? "Loading..." : "Place details loaded.")
  }, [loading])

  return null
}

export default GooglePlacesAPI
