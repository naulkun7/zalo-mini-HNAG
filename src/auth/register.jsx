import React, { useState } from "react";
import { useNavigate, Page } from "zmp-ui";
import { register } from "./auth";

export default function Register() {
  const navigate = useNavigate();

  const login =
    "https://script.google.com/macros/s/AKfycbxowndRf6ULZb7nV94aatKDrtIC-1Hh-PknBsqBVlcUSpNZjxGi62po7h5QXGuPxx3Fhg/exec";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Function encrypt username
  const encryptUsername = (username) => {
    return btoa(username);
  };

  // Function encrypt password
  const encryptPassword = (password) => {
    return btoa(password);
  };

  // Function encrypt email
  const encryptEmail = (email) => {
    return btoa(email);
  };

  // Function decrypt username
  const decryptUsername = (encryptUsername) => {
    return atob(encryptUsername);
  };

  // Function decrypt password
  const decryptPassword = (encryptPassword) => {
    return atob(encryptPassword);
  };

  // Function decrypt email
  const decryptEmail = (encryptEmail) => {
    return atob(encryptEmail);
  };

  const userInfoData = {
    username: encryptUsername(username),
    password: encryptPassword(password),
    name,
    email: encryptEmail(email),
  };

  return (
    <Page>
      <div className="w-full">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="text-xl font-bold pb-1">Đăng Ký</div>
        </div>
        <div className="form-group flex flex-col px-8 pt-6 pb-8 mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Họ và tên:{" "}
          </p>
          <input
            type="text"
            className="form-control shadow appearance-none border focus:border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Họ và tên"
          />

          <p className="block text-gray-700 text-sm font-bold mb-2">
            Tài khoản:{" "}
          </p>
          <input
            type="text"
            className="form-control shadow appearance-none border focus:border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Tên đăng nhập"
          />

          <p className="block text-gray-700 text-sm font-bold mb-2">
            Mật khẩu:{" "}
          </p>
          <input
            type="password"
            className="form-control form-control shadow appearance-none border focus:border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mật khẩu"
          />

          <p className="block text-gray-700 text-sm font-bold mb-2">Email: </p>
          <input
            type="email"
            className="form-control form-control shadow appearance-none border focus:border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              id="loginButton"
              onClick={() => {
                register(
                  userInfoData,
                  navigate,
                  login,
                  decryptUsername,
                  decryptPassword,
                  decryptEmail
                );
              }}>
              Đăng Kí
            </button>
          </div>
        </div>
      </div>
    </Page>
  );
}
