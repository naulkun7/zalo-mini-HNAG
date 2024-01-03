import React, { useState } from "react";

export default function SignIn() {
  // const login = import.meta.env.VITE_LOGIN_API_URL;

  const login = "https://script.googleusercontent.com/macros/echo?user_content_key=LqP7Piw8KAz-PHeb0HtyLaM8UgKVR6QX_dFuENIPyaK4atN7R8dMUM4Y0Xz9Gx74-M4cRgRAwN6C1CZstp2aELoO7lx_fHJom5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnM5LYq9vae8g0DeUR5443gZplSUshL-U4tZkjWD88PzYAFWIChQt_5-wMIQjIOHxdwvpfgmGYeBTKAE-kmDuFN6klnWEG43rxNz9Jw9Md8uu&lib=Ma6RDRlDqWIa9InNV8sgF6h_poDVca3qB";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const addDataUser = () => {
    const userInfoData = {
      username,
      password,
    };

    const dataUser = fetch(login, {
      method: "GET",
      // mode: "no-cors",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      // body: JSON.stringify(userInfoData),
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
