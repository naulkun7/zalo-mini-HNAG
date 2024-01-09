// swipeHandlers.jsx

/**
 * Xử lý sự kiện swipe cho card.
 * @param {string} direction - Hướng swipe ('left' hoặc 'right').
 * @param {number} currentMealIndex - Chỉ số hiện tại của món ăn.
 * @param {Array} combinedData - Mảng dữ liệu các món ăn.
 * @param {Function} setCurrentMealIndex - Hàm cập nhật chỉ số món ăn.
 */
export const handleSwipe = (
  direction,
  currentMealIndex,
  combinedData,
  setCurrentMealIndex,
  seenMeals,
  setSeenMeals
) => {
  if (
    direction === "left" ||
    direction === "right" ||
    direction === "up" ||
    direction === "down"
  ) {
    let remainingMeals = combinedData.filter(
      (meal) => !seenMeals.includes(meal.id)
    );

    if (remainingMeals.length === 0) {
      // Làm mới danh sách các món ăn đã xem và tiếp tục
      setSeenMeals([]);
      remainingMeals = combinedData;
    }

    let newMealIndex;
    do {
      newMealIndex = Math.floor(Math.random() * remainingMeals.length);
    } while (
      remainingMeals[newMealIndex].id === combinedData[currentMealIndex].id
    );

    const newMeal = remainingMeals[newMealIndex];

    // Cập nhật trạng thái
    setCurrentMealIndex(
      combinedData.findIndex((meal) => meal.id === newMeal.id)
    );
    setSeenMeals([...seenMeals, newMeal.id]);
  }
};
