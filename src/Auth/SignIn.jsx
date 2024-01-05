import React, { useState } from "react";
import { useNavigate } from "zmp-ui";

export default function SignIn() {
  const navigate = useNavigate();

  const login = import.meta.env.VITE_LOGIN_API_URL;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userInfoData = {
    username,
    password,
  };

  const addDataUser = () => {
    const dataUser = fetch(login, {
      method: "GET",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error submitting data");
      });
    if (userInfoData.username && userInfoData.password) {
      navigate("/");
    } else if (!userInfoData.username) {
      alert("Tài khoản khoản không được bỏ trống!!");
    } else if (!userInfoData.password) {
      alert("Mật khẩu không được bỏ trống");
    }
    console.log(dataUser);
  };

  // const validateLogin = async () => {
  //   try {
  //     const response = await fetch(
  //       `${login}?username=${username}&password=${password}`
  //     );

  //     if (response.ok) {
  //       const isValid = await response.json();

  //       if (isValid) {
  //         alert("Login successful");
  //         navigate("/");
  //       } else {
  //         alert("Invalid credentials");
  //       }
  //     } else {
  //       console.error("Server error:", response.status);
  //       alert("Đã xảy ra lỗi khi đăng nhập");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("Đã xảy ra lỗi khi đăng nhập");
  //   }
  // };

  return (
    <div className="h-screen bg-gray-700 pt-16 pl-4 pr-4">
      <div className="flex flex-col justify-center items-center mb-4">
        <div className="text-xl font-bold pb-1 text-white">
          Chào mừng bạn quay trở lại!
        </div>
        <p className="text-gray-400 font-semibold">
          Chúng tôi rất vui khi được thấy bạn!
        </p>
      </div>
      <div className="form-group flex flex-col">
        <p className="text-gray-400 font-bold pb-2">Thông tin tài khoản</p>
        <input
          type="text"
          className="form-control mb-5 bg-zinc-900 p-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Tên đăng nhập"
          style={{ color: "white" }}
        />
        <input
          type="password"
          className="form-control mb-5 bg-zinc-900 p-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mật khẩu"
          style={{ color: "white" }}
        />
        <div className="flex">
          <button
            className="bg-pink-300 hover:bg-pink-400 rounded-lg shadow-lg p-5 w-1/3 h-25 font-bold text-sm"
            id="loginButton"
            onClick={() => {
              // Nếu đăng nhập thành công sẽ trả về HomePage và được quyền update món ăn
              addDataUser();
            }}>
            Đăng nhập
          </button>
          {/* <button
            className="bg-pink-300 hover:bg-pink-400 rounded-lg shadow-lg p-5 w-1/3 h-25 font-bold text-sm"
            id="loginButton"
            onClick={validateLogin}>
            Đăng nhập
          </button> */}
          <button
            className="bg-pink-300 hover:bg-pink-400 rounded-lg shadow-lg p-5 w-1/3 h-25 font-bold text-sm"
            id="signUpButton"
            onClick={() => navigate("/signup")}>
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  );
}
