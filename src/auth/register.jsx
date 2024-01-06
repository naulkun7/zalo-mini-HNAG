import React, { useState } from "react";
import { useNavigate, Page } from "zmp-ui";
// import { register } from "./auth";

export default function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // const encryptUsername = (username) => {
  //   return btoa(username);
  // };

  // const encryptPassword = (password) => {
  //   return btoa(password);
  // };

  // const encryptEmail = (email) => {
  //   return btoa(email);
  // };

  // const decryptUsername = (encryptUsername) => {
  //   return atob(encryptUsername);
  // };

  // const decryptPassword = (encryptPassword) => {
  //   return atob(encryptPassword);
  // };

  // const decryptEmail = (encryptEmail) => {
  //   return atob(encryptEmail);
  // };

  // const userInfoData = {
  //   username: encryptUsername(username),
  //   password: encryptPassword(password),
  //   name,
  //   email: encryptEmail(email),
  // };

  const userInfoData = {
    username,
    password,
    name,
    email,
  };

  const register = () => {
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
      });
  };

  return (
    <Page>
      <div className="w-full">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="text-xl font-bold pb-1">Đăng Ký</div>
        </div>
        <form className="flex flex-col px-8 pt-6 pb-8 mb-4">
          {/* Họ và tên */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="account">
              Họ và tên
            </label>
            <input
              id="account"
              type="text"
              className="shadow appearance-none border focus:border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Họ và tên"
            />
          </div>

          {/* Tên tài khoản */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username">
              Tài khoản
            </label>
            <input
              id="username"
              type="text"
              className="shadow appearance-none border focus:border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Tên đăng nhập"
            />
          </div>

          {/* Mật khẩu */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password">
              Mật khẩu
            </label>
            <input
              id="password"
              type="password"
              className="shadow appearance-none border focus:border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mật khẩu"
            />
          </div>

          {/* email */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="shadow appearance-none border focus:border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <button
              className="bg-pink-300 hover:bg-pink-400 rounded-lg shadow-lg p-5 w-1/3 h-25 font-bold text-sm"
              id="buttonContainer"
              onClick={() => {
                register();
              }}>
              Đăng Kí
            </button>
          </div>
        </form>
      </div>
    </Page>
  );
}
