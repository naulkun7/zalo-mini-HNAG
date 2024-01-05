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
        console.log("Data submitted successfully", res);
        alert("Data submitted successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error submitting data");
      });

    console.log(dataUser);
  };

  return (
    <div>
      <div className="form-group flex flex-col">
        <input
          type="text"
          className="form-control mb-5"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Tên đăng nhập"
        />
        <input
          type="password"
          className="form-control mb-5"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mật khẩu"
        />
        <div className="flex">
          <button
            className="bg-pink-300 hover:bg-pink-400 rounded-lg shadow-lg p-5 w-1/3 h-25 font-bold text-sm"
            id="loginButton"
            onClick={() => {
              // Nếu đăng nhập thành công sẽ trả về HomePage và được quyền update món ăn
              if (userInfoData.username && userInfoData.password) {
                navigate("/");
                addDataUser();
              } else if (!userInfoData.username) {
                alert("Tài khoản khoản không được bỏ trống!!");
              } else if (!userInfoData.password) {
                alert("Mật khẩu không được bỏ trống");
              }
            }}>
            Đăng nhập
          </button>
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
