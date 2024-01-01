// HomePage.jsx
import React, { useState, useEffect } from "react"
import { Page } from "zmp-ui"
import MealRenderV2 from "../components/mealRenderV2"
import "../css/index.css"
import { fetchAndSaveData } from "../utils/fetchAPI" // Import functions from fetchAPI.jsx

const HomePage = () => {
  const [meal, setMeal] = useState(null)
  const [fadeIn, setFadeIn] = useState(true)
  const [combinedData, setCombinedData] = useState(null)
  // const [lastDirection, setLastDirection] = useState(null)

  useEffect(() => {
    const localData = localStorage.getItem("mealsData")
    if (localData) {
      setCombinedData(JSON.parse(localData))
    } else {
      fetchAndSaveData().then((data) => setCombinedData(data))
    }
  }, [])

  const getRandomMeal = () => {
    if (combinedData && combinedData.length > 0) {
      let newMealIndex
      do {
        newMealIndex = Math.floor(Math.random() * combinedData.length)
      } while (
        combinedData[newMealIndex].id === meal?.[0]?.id &&
        combinedData.length > 1
      )

      setMeal([combinedData[newMealIndex]])
    }
  }

  useEffect(() => {
    if (meal) {
      setFadeIn(false)
      setTimeout(() => setFadeIn(true), 50)
    }
  }, [meal])

  // const swiped = (direction, nameToDelete) => {
  //   console.log("removing: " + nameToDelete)
  //   setLastDirection(direction)
  //   getRandomMeal()
  // }

  // const outOfFrame = (name) => {
  //   console.log(name + " left the screen!")
  // }

  return (
    <Page>
      <div className="bg-pink-100 min-h-screen flex flex-col items-center p-4 align-top">
        <button
          className="bg-pink-300 hover:bg-pink-400 rounded-lg shadow-lg p-5 max-w-xs w-full font-bold text-xl"
          onClick={getRandomMeal}
        >
          RANDOM MEAL
        </button>
        <div id="mealContainer" className="mealContainer">
          {meal?.map((mealItem) => (
            <MealRenderV2 key={mealItem.id} meal={mealItem} fadeIn={fadeIn} />
          ))}
        </div>
      </div>
    </Page>
  )
}

export default HomePage
