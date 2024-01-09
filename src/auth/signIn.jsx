import React, { useState } from "react";
import { useNavigate, Page } from "zmp-ui";
import { signIn } from "./auth";

export default function SignIn() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function to encrypt the password
  const encryptPassword = (password) => {
    return btoa(password);
  };

  // Function to decrypt the password
  const decryptPassword = (encryptedPassword) => {
    return atob(encryptedPassword);
  };

  const encryptedPassword = encryptPassword(password);
  console.log("Encrypted Password:", encryptedPassword);

  const userInfoData = {
    username,
    password: encryptPassword(password),
  };

  return (
    <Page>
      <div className="w-full">
        <div className="flex flex-col justify-center items-center mb-4 mt-5">
          <div className="text-xl font-bold pb-1">
            Chào mừng bạn quay trở lại!
          </div>
          <p className="font-semibold">Chúng tôi rất vui khi được thấy bạn!</p>
        </div>
        <form className="px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username">
              Tài khoản
            </label>
            <input
              className="shadow appearance-none border focus:border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Tài khoản"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password">
              Mật khẩu
            </label>
            <input
              className="shadow appearance-none border focus:border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mật khẩu"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
                signIn(
                  userInfoData,
                  navigate,
                  encryptPassword,
                  decryptPassword
                );
              }}>
              Đăng nhập
            </button>
            {/* <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => navigate("/register")}>
              Đăng ký
            </button> */}
            <div className="flex flex-col">
              <button className="align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Quên mật khẩu?
              </button>
              <button
                className="align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                type="button"
                onClick={() => {
                  navigate("/register");
                }}>
                Đăng ký
              </button>
            </div>
          </div>
        </form>
      </div>
    </Page>
  );
}
