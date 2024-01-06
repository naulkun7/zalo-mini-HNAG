const login = import.meta.env.VITE_LOGIN_API_URL;

// Function đăng nhập => navigate => HomePage
export const signIn = (userInfoData, navigate) => {
  fetch(login, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      if (!userInfoData.username) {
        alert("Tài khoản không được bỏ trống!!");
        return;
      }
      if (!userInfoData.password) {
        alert("Mật khẩu không được bỏ trống");
        return;
      }

      const foundUser = data.find(
        (item) =>
          userInfoData.username === item.username &&
          userInfoData.password === item.password
      );

      if (foundUser) {
        alert("Đăng nhập thành công");
        navigate("/");
      } else {
        alert("Tài khoản hoặc mật khẩu không chính xác");
        navigate("/login");
      }
    })
    .catch((error) => {
      alert("Error fetching data");
    });
};

export const signUp = (userInfoData, navigate) => {
  fetch(login, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfoData),
  })
    .then((res) => {
      console.log("Data submitted successfully", res);
      alert("Data submitted successfully");
      navigate("/login");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error submitting data");
    });
};
