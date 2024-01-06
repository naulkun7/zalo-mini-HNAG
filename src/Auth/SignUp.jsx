import React, { useState } from "react"
import { useNavigate } from "zmp-ui"
import { signUp } from "./auth"

export default function SignUp() {
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const userInfoData = {
    username,
    password,
    name,
    email,
  }

  return (
    <div className="h-screen bg-gray-700 pt-16 pl-4 pr-4">
      <div className="flex flex-col justify-center items-center mb-4">
        <div className="text-xl font-bold pb-1 text-white">Đăng Ký</div>
      </div>
      <div className="form-group flex flex-col">
        <input
          type="text"
          className="form-control mb-5 bg-zinc-900 p-3 rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Họ và tên"
        />
        <input
          type="text"
          className="form-control mb-5 bg-zinc-900 p-3 rounded-lg"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Tên đăng nhập"
        />
        <input
          type="password"
          className="form-control mb-5 bg-zinc-900 p-3 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mật khẩu"
        />
        <input
          type="email"
          className="form-control mb-5 bg-zinc-900 p-3 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <div className="flex flex-col justify-center items-center">
          <button
            className="bg-pink-300 hover:bg-pink-400 rounded-lg shadow-lg p-5 w-1/3 h-25 font-bold text-sm"
            id="loginButton"
            onClick={() => {
              signUp(userInfoData, navigate)
            }}
          >
            Đăng Kí
          </button>
        </div>
      </div>
    </div>
  )
}
