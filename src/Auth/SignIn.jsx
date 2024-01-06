import React, { useState } from "react"
import { useNavigate } from "zmp-ui"
import { signIn } from "./auth"

export default function SignIn() {
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const userInfoData = {
    username,
    password,
  }

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
          className="form-control mb-5 bg-zinc-900 p-3 rounded-lg"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Tên đăng nhập"
          style={{ color: "white" }}
        />
        <input
          type="password"
          className="form-control mb-2 bg-zinc-900 p-3 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mật khẩu"
          style={{ color: "white" }}
        />

        <div className="flex flex-col">
          {/* Đăng ký */}
          <button
            className="font-bold text-sm w-1/3 text-left mb-5 text-gray-900"
            id="signUpButton"
            onClick={() => navigate("/signup")}
          >
            Đăng ký
          </button>

          {/* Đăng nhập */}
          <div className="flex flex-col justify-center items-center">
            <button
              className="bg-pink-300 hover:bg-pink-400 rounded-lg shadow-lg p-5 w-1/3 h-25 font-bold text-sm"
              id="loginButton"
              onClick={() => {
                signIn(userInfoData, navigate)
              }}
            >
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
