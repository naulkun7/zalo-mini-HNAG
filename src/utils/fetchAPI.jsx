// .env API
const MAP = import.meta.env.VITE_GGMAP_API_URL
const HAND = import.meta.env.VITE_HAND_API_URL

const fetchWithTimeout = (url, timeout = 20000) => {
  return new Promise((resolve, reject) => {
    fetch(url).then(resolve, reject)
    setTimeout(() => reject(new Error("Request timed out")), timeout)
  })
}

export const fetchFirstAPI = () => {
  return fetchWithTimeout(`${HAND}`).then((res) => res.json())
}

export const fetchSecondAPI = () => {
  return fetchWithTimeout(`${MAP}`).then((res) => res.json())
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
