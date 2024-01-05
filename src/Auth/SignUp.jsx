import React, { useState } from "react";
import { useNavigate } from "zmp-ui";

export default function SignUp() {
  const navigate = useNavigate();

  const login = import.meta.env.VITE_LOGIN_API_URL;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addDataUser = () => {
    const userInfoData = {
      username,
      password,
      name,
      email,
    };

    const dataUser = fetch(login, {
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Họ và tên"
        />
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
        <input
          type="email"
          className="form-control mb-5"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <button
          className="bg-pink-300 hover:bg-pink-400 rounded-lg shadow-lg p-5 w-1/3 h-25 font-bold text-sm"
          id="loginButton"
          onClick={() => {
            addDataUser();
            navigate("/login");
          }}>
          Đăng Kí
        </button>
      </div>
    </div>
  );
}
