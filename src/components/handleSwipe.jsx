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
  setCurrentMealIndex
) => {
  if (direction === "left" || direction === "right") {
    // Nếu người dùng đã "swipe" qua món cuối cùng, bắt đầu lại từ đầu
    if (currentMealIndex === combinedData.length - 1) {
      setCurrentMealIndex(0);
    } else {
      // Ngược lại, chuyển đến món tiếp theo
      setCurrentMealIndex(currentMealIndex + 1);
    }
  }
};
