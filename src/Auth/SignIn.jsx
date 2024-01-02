import React, { useState } from "react";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const addDataUser = () => {
    const userInfoData = {
      username,
      password,
    };

    const dataUser = fetch(
      "https://script.google.com/macros/s/AKfycbx73EsYXkhXVOmXpFRkSHkCcRtOyq1Exdb-UG_rDwm0qYtWV0t1wLzP6Ik7zqyevB1Skg/exec",
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
          placeholder="Tài khoản"
        />
        <input
          type="password"
          className="form-control mb-5"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mật khẩu"
        />
        <button
          className="bg-pink-300 hover:bg-pink-400 rounded-lg shadow-lg p-5 w-1/3 h-25 font-bold text-sm"
          id="loginButton"
          onClick={() => {
            addDataUser();
          }}>
          Login
        </button>
      </div>
    </div>
  );
}
