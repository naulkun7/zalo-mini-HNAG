import React, { useState, useEffect } from "react"
import { Page, useNavigate } from "zmp-ui"
import MealRender from "../components/mealRender"
import "../css/index.css"

// .env API
const MAP = import.meta.env.VITE_GGMAP_API_URL
const HAND = import.meta.env.VITE_HAND_API_URL

const HomePage = () => {
  const navigate = useNavigate()
  const [meal, setMealData] = useState(null)
  const [fadeIn, setFadeIn] = useState(true) // Thêm trạng thái cho fade-in
  const [combinedData, setCombinedData] = useState(null)

  // Hàm lấy dữ liệu từ API đầu tiên (GGSheet Hand)
  const fetchFirstAPI = () => {
    return fetch(`${HAND}`).then((res) => res.json())
  }

  // Hàm lấy dữ liệu từ API thứ hai (GGSheet Google Map)
  const fetchSecondAPI = () => {
    return fetch(`${MAP}`).then((res) => res.json())
  }
  // Hàm lấy dữ liệu từ API và lưu vào localStorage
  const fetchAndSaveData = () => {
    return Promise.all([fetchFirstAPI(), fetchSecondAPI()]).then(
      ([firstAPIData, secondAPIData]) => {
        const combinedData = [...firstAPIData, ...secondAPIData]
        localStorage.setItem("mealsData", JSON.stringify(combinedData))
        console.log("combinedData", combinedData)

        return combinedData
      }
    )
  }

  useEffect(() => {
    const localData = localStorage.getItem("mealsData")
    if (localData) {
      setCombinedData(JSON.parse(localData))
    } else {
      fetchAndSaveData().then((data) => setCombinedData(data))
    }
  }, [])

  // Hàm lấy bữa ăn ngẫu nhiên từ dữ liệu đã lưu
  const getRandomMeal = () => {
    if (combinedData) {
      const randomMeal =
        combinedData[Math.floor(Math.random() * combinedData.length)]
      setMealData(randomMeal)
    }
  }
  useEffect(() => {
    if (meal) {
      setFadeIn(false)
      setTimeout(() => setFadeIn(true), 50)
    }
  }, [meal]) // Theo dõi thay đổi của trạng thái 'meal'

  return (
    <Page>
      <div className="bg-pink-100 min-h-screen flex flex-col items-center p-4 align-top">
        <button
          className="bg-pink-300 hover:bg-pink-400 rounded-lg shadow-lg p-5 max-w-xs w-full font-bold text-xl"
          onClick={getRandomMeal}
        >
          RANDOM MEAL
        </button>
        <div id="mealContainer" className="mealContainer ">
          <MealRender meal={meal} fadeIn={fadeIn} />
        </div>
      </div>
    </Page>
  )
}

export default HomePage
