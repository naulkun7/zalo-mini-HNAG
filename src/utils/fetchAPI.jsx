// .env API
const MAP = import.meta.env.VITE_GGMAP_API_URL
const HAND = import.meta.env.VITE_HAND_API_URL

// Fetch data from the first API (GGSheet Hand)
export const fetchFirstAPI = () => {
  return fetch(`${HAND}`).then((res) => res.json())
}

// Fetch data from the second API (GGSheet Google Map)
export const fetchSecondAPI = () => {
  return fetch(`${MAP}`).then((res) => res.json())
}

// Fetch data from APIs and save to localStorage
export const fetchAndSaveData = () => {
  return Promise.all([fetchFirstAPI(), fetchSecondAPI()]).then(
    ([firstAPIData, secondAPIData]) => {
      const combinedData = [...firstAPIData, ...secondAPIData]
      localStorage.setItem("mealsData", JSON.stringify(combinedData))
      console.log("combinedData", combinedData)
      return combinedData
    }
  )
}
