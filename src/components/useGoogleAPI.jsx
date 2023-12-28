import { useState, useEffect } from "react"

const useGooglePlacesAPI = (query) => {
  const [loading, setLoading] = useState(true)
  let googleAPI = import.meta.env.VITE_GG_API_KEY

  useEffect(() => {
    const script = document.createElement("script")
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleAPI}&libraries=places`
    script.async = true
    script.onload = () => setLoading(false)
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [googleAPI])

  const fetchPlaceDetails = () => {
    if (!loading && query) {
      return new Promise((resolve, reject) => {
        const service = new window.google.maps.places.PlacesService(
          document.createElement("div")
        )

        service.findPlaceFromQuery(
          { query, fields: ["place_id"] },
          (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              const placeId = results[0].place_id
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
                  if (
                    status === window.google.maps.places.PlacesServiceStatus.OK
                  ) {
                    resolve(place)
                  } else {
                    reject("Error fetching place details")
                  }
                }
              )
            } else {
              reject("Error finding place")
            }
          }
        )
      })
    } else {
      return Promise.reject(
        "Google Maps API is still loading or no query provided"
      )
    }
  }

  return { fetchPlaceDetails, loading }
}

export default useGooglePlacesAPI
