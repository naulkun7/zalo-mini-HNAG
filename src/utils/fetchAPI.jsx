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
  return fetchWithTimeout(`${HAND}`)
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error fetching from API 1:", error)
      throw error
    })
}

export const fetchSecondAPI = () => {
  return fetchWithTimeout(`${MAP}`)
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error fetching from API 2:", error)
      throw error
    })
}

// Fetch data from APIs and save to localStorage
export const fetchAndSaveData = () => {
  return Promise.all([fetchFirstAPI(), fetchSecondAPI()])
    .then(([firstAPIData, secondAPIData]) => {
      // Prefix IDs with source identifier
      const prefixedFirstAPIData = firstAPIData.map((item) => ({
        ...item,
        id: `HAND-${item.id}`,
      }))
      const prefixedSecondAPIData = secondAPIData.map((item) => ({
        ...item,
        id: `MAP-${item.id}`,
      }))

      const combinedData = [...prefixedFirstAPIData, ...prefixedSecondAPIData]
      localStorage.setItem("mealsData", JSON.stringify(combinedData))
      console.log("combinedData", combinedData)
      return combinedData
    })
    .catch((error) => {
      console.error("Error in fetching and saving data:", error)
    })
}
