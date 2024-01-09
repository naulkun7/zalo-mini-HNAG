// Function đăng nhập => navigate => HomePage
export const signIn = (
  userInfoData,
  navigate,
  encryptPassword,
  decryptPassword
) => {
  fetch(
    "https://script.google.com/macros/s/AKfycbxowndRf6ULZb7nV94aatKDrtIC-1Hh-PknBsqBVlcUSpNZjxGi62po7h5QXGuPxx3Fhg/exec",
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      if (!userInfoData.username) {
        alert("Vui lòng nhập tên tài khoản");
        return;
      }
      if (!userInfoData.password) {
        alert("Vui lòng nhập mật khẩu");
        return;
      }

      const foundUser = data.find((item) => {
        if (userInfoData.password === item.password) {
          return true;
        }
      });

      if (foundUser) {
        alert("Đăng nhập thành công");
        console.log(foundUser);
        navigate("/");
      } else {
        alert("Tài khoản hoặc mật khẩu không chính xác");
        navigate("/signin");
      }
    })
    .catch((error) => {
      alert("Error fetching data");
      console.log(error);
    });
};

export const register = (
  userInfoData,
  navigate,
  login,
  decryptUsername,
  decryptPassword,
  decryptEmail
) => {
  fetch(login, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfoData),
  })
    .then((res) => {
      if (!userInfoData.username) {
        alert("Vui lòng nhập tên tài khoản");
        return;
      }
      if (!userInfoData.password) {
        alert("Vui lòng nhập mật khẩu");
        return;
      }
      if (!userInfoData.name) {
        alert("Vui lòng nhập họ và tên");
        return;
      }
      if (!userInfoData.email) {
        alert("Vui lòng nhập email");
        return;
      }

      alert("Đăng ký thành công");
      navigate("/signin");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error submitting data");
    });
};
