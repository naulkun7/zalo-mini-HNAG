// Import libraries
import React, { useState, useEffect } from "react"
import { Page } from "zmp-ui"
import "../css/index.css"

// Import utils
import { useData } from "../utils/dataContext"

// Import components
import MealRenderV2 from "../components/mealRenderV2"
import LoadingScreen from "../components/loadingScreen"
import RandomMealButton from "../components/btnRandomMeal"

const HomePage = () => {
  const [meal, setMeal] = useState(null)
  const [fadeIn, setFadeIn] = useState(true)
  const { combinedData, isLoading } = useData()

  // Animation for when a new meal is rendered
  useEffect(() => {
    if (meal) {
      setFadeIn(false)
      setTimeout(() => setFadeIn(true), 50)
    }
  }, [meal])

  // Loading Screen while data is being fetched
  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <Page>
      <div className="bg-pink-100 min-h-screen flex flex-col items-center p-4 align-top">
        <RandomMealButton
          combinedData={combinedData}
          setMeal={setMeal}
          currentMealId={meal?.[0]?.id}
        />
        <div id="mealContainer" className="mealContainer container min-w-full">
          {meal?.map((mealItem) => (
            <MealRenderV2 key={mealItem.id} meal={mealItem} fadeIn={fadeIn} />
          ))}
        </div>
      </div>
    </Page>
  )
}

export default HomePage
