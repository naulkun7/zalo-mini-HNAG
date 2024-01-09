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

      const foundUser = data.find(
        (item) =>
          userInfoData.username === item.username &&
          decryptPassword(userInfoData.password) === item.password // Decrypt before comparing
      );

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
    });
};

export const register = (userInfoData, navigate) => {
  fetch(
    "https://script.google.com/macros/s/AKfycbxowndRf6ULZb7nV94aatKDrtIC-1Hh-PknBsqBVlcUSpNZjxGi62po7h5QXGuPxx3Fhg/exec",
    {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfoData),
    }
  )
    .then((res) => {
      console.log("Data submitted successfully", res);
      alert("Đăng ký thành công");
      navigate("/signin");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Đăng ký thất bại");
      // navigate("/register");
    });
};

// export const register = (userInfoData, navigate) => {
//   fetch(
//     "https://script.google.com/macros/s/AKfycbxowndRf6ULZb7nV94aatKDrtIC-1Hh-PknBsqBVlcUSpNZjxGi62po7h5QXGuPxx3Fhg/exec",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userInfoData),
//     }
//   )
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error(`Network response was not ok: ${res.status}`);
//       }
//       return res.json(); // or res.text() if expecting plain text
//     })
//     .then((data) => {
//       console.log("Data submitted successfully", data);
//       alert("Đăng ký thành công");
//       navigate("/signin");
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       alert("Đăng ký thất bại");
//       // navigate("/register");
//     });
// };
