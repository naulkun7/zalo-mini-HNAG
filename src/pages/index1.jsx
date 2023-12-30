import React, { useState, useEffect } from "react"
import { List, Page, Icon, useNavigate } from "zmp-ui"
import { useRecoilValue } from "recoil"
import { userState } from "../state"
import "../css/index.css"
import UserCard from "../components/user-card"

const HomePage = () => {
  const [meal, setMeal] = useState(null)

  const fetchMeal = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        setMeal(data.meals[0])
      })
      .catch((error) => console.error("Error:", error))
  }

  const renderMeal = () => {
    if (!meal) return null

    const ingredients = []
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        )
      } else {
        break
      }
    }

    return (
      <div className="row">
        <div className="columns five">
          <img src={meal.strMealThumb} alt="Meal" />
          {meal.strCategory && (
            <p>
              <strong>Category:</strong> {meal.strCategory}
            </p>
          )}
          {meal.strArea && (
            <p>
              <strong>Area:</strong> {meal.strArea}
            </p>
          )}
          {meal.strTags && (
            <p>
              <strong>Tags:</strong> {meal.strTags.split(",").join(", ")}
            </p>
          )}
          <h5>Ingredients:</h5>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="columns seven">
          <h4>{meal.strMeal}</h4>
          <p>{meal.strInstructions}</p>
        </div>
        {meal.strYoutube && (
          <div className="row">
            <h5>Video Recipe</h5>
            <div className="videoWrapper">
              <iframe
                width="420"
                height="315"
                src={`https://www.youtube.com/embed/${meal.strYoutube.slice(
                  -11
                )}`}
                title="Meal Video"
              />
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="container">
      <div
        className="foodLogo"
        style={{ backgroundImage: "url('food.jpg')" }}
      ></div>
      <div className="indexText">
        <h1>Feeling hungry?</h1>
        <h2>Get a random meal by clicking below</h2>
      </div>
      <div className="indexButton">
        <button onClick={fetchMeal}>Get a meal</button>
      </div>
      <div id="mealContainer" className="mealContainer">
        {renderMeal()}
      </div>
    </div>
  )

  // const user = useRecoilValue(userState);
  // const navigate = useNavigate();
  // return (
  //   <Page className="page">
  //     <div className="section-container">
  //       <UserCard user={user} />
  //     </div>
  //     <div className="section-container">
  //       <List>
  //         <List.Item suffix={<Icon icon="zi-arrow-right" />}>
  //           <div onClick={() => navigate("/about")}>About</div>
  //         </List.Item>
  //         <List.Item suffix={<Icon icon="zi-arrow-right" />}>
  //           <div onClick={() => navigate("/user")}>User</div>
  //         </List.Item>
  //       </List>
  //     </div>
  //   </Page>
  // );
}

export default HomePage
