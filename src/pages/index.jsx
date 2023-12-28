import React, { useState, useEffect } from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../state";
import "../css/index.css";
import UserCard from "../components/user-card";

const HomePage = () => {
  const navigate = useNavigate();
  const [meal, setMeal] = useState(null);

  const fetchMeal = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        setMeal(data.meals[0]);
      })
      .catch((error) => console.error("Error:", error));
  };

  const renderMeal = () => {
    if (!meal) return null;

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
      } else {
        break;
      }
    }

    return (
      <div className="row">
        <div className="columns five">
          <img className="rounded-full" src={meal.strMealThumb} alt="Meal" />
          <div className="py-5">
            {meal.strCategory && (
              <p className="text-center">
                <strong>Tên quán: </strong> {meal.strCategory}
              </p>
            )}
            {meal.strArea && (
              <p className="text-center">
                <strong>Địa chỉ: </strong> {meal.strArea}
              </p>
            )}
          </div>
          <div className="text-center">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full text-center"
              onClick={() => navigate("/user")}
            >
              Tìm hiểu thêm!
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Page className="page container">
      <div className="indexText ">
        <h1 className="text-center py-2">Em ơi em em có đang đói hong? </h1>
        <h2 className="text-center py-2">Nếu em đói thì em ăn anh đi!!!</h2>
      </div>
      <div className="indexButton text-center py-5">
        <button
          className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={fetchMeal}
        >
          Get a meal
        </button>
      </div>
      <div id="mealContainer" className="mealContainer">
        {renderMeal()}
      </div>
    </Page>
  );

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
};

export default HomePage;
