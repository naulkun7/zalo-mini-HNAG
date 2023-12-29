import React, { useState, useEffect } from "react";
import { Page, useNavigate } from "zmp-ui";
import "../css/index.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [meal, setMealData] = useState(null);
  const [fadeIn, setFadeIn] = useState(true); // Thêm trạng thái cho fade-in

  // Hàm lấy dữ liệu từ API đầu tiên
  const fetchFirstAPI = () => {
    return fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=XBf-c_BwP5Ru5qKESLqFVOY2EQRMUR7Z9AREriOsz1PGbetF452KzpCb30wgp7gCADRGqVbt1YjBLNQ0utitdtWq8pvIoOxtm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAQGuWArdJsq19KfOQM6PC-CTY22vHubmJXJNSUmg0bTqrDD9oLsQzA5RPLeS3keXEzPShzhs5dvqhj8xEenabWiu5bHNadIKdz9Jw9Md8uu&lib=MCnt7PxykrmY1H76vYkY4oR_poDVca3qB"
    ).then((res) => res.json());
  };

  // Hàm lấy dữ liệu từ API thứ hai
  const fetchSecondAPI = () => {
    return fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=FvlCWI1oeONe3BDm68bGe5_6PsyHLslAmSRXwrUbuV7jQLEXxT54MWA-wUJ5hDq8-vHHcVPAQE3BLNQ0utitdiONGMenw1LFm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJpHd3Lj6hYn8QidPbzc6HMqhdHxxMyXojQb4J6TUhoTWJcH0mXWDdmx92XXXhWW2peOT8Sx6aTNu9L8Znz9rZTIHL9JxBcbbg&lib=MilZab3rrtfpA0JGMc26Z3NOiBieB7han"
    ).then((res) => res.json());
  };

  // Hàm kết hợp dữ liệu từ cả hai API
  const combineData = (data1, data2) => {
    // Logic để kết hợp dữ liệu (đây chỉ là ví dụ)
    return { ...data1, additionalData: data2 };
  };

  // Hàm lấy bữa ăn ngẫu nhiên và kết hợp dữ liệu từ cả hai API
  const getRandomMeal = () => {
    Promise.all([fetchFirstAPI(), fetchSecondAPI()])
      .then(([firstAPIData, secondAPIData]) => {
        // Kết hợp dữ liệu từ cả hai API
        const combinedData = [...firstAPIData, ...secondAPIData];
        // Chọn ngẫu nhiên một mục từ dữ liệu kết hợp
        const randomMeal =
          combinedData[Math.floor(Math.random() * combinedData.length)];
        setMealData(randomMeal);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  useEffect(() => {
    if (meal) {
      setFadeIn(false);
      setTimeout(() => setFadeIn(true), 50);
    }
  }, [meal]); // Theo dõi thay đổi của trạng thái 'meal'

  // Hàm render thông tin bữa ăn
  const renderMeal = () => {
    if (!meal) return null;

    // Cập nhật class tùy theo trạng thái fade-in
    const mealClass = fadeIn ? "row fade-in" : "row";
    return (
      <div className={mealClass}>
        <div className="row">
          <div className="columns five  ">
            <img
              className="w-64 h-64 rounded-full max-w-lg mx-auto "
              src={meal.image_source} // Use the correct property for the image URL
              alt="Meal"
            />
            <div className="py-5">
              {meal.name && (
                <p className="text-left py-1">
                  <strong>Name: </strong> {meal.name}
                </p>
              )}
              {meal.phone_number && (
                <p className="text-left py-1">
                  <strong>Phone number: </strong> {meal.phone_number}
                </p>
              )}
              {meal.address_full && (
                <p className="text-left py-1">
                  <strong>Address: </strong> {meal.address_full}
                </p>
              )}
              {meal.rating && (
                <p className="text-left py-1">
                  <strong>Rating: </strong> {meal.rating}
                </p>
              )}
              {meal.place_status && (
                <p className="text-left py-1">
                  <strong>Status: </strong> {meal.place_status}
                </p>
              )}
            </div>

            {/* <div className="text-center py-4">
            <button
              className="bg-violet-400 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => navigate("/user")}
            >
              MORE INFO
            </button>
          </div> */}
            <div className="text-center py-4">
              <button
                className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-full max-w-xs w-1/2 text-xl"
                onClick={() => (window.location.href = meal.ggmap_url)}
              >
                GO HERE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

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
          {renderMeal()}
        </div>
      </div>
    </Page>
  );
};

export default HomePage;
