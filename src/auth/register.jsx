// import React, { useState } from "react";
// import { Page, useNavigate } from "zmp-ui";
// import { register } from "./auth";

// export default function Register() {
//   const navigate = useNavigate();

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const addDataUser = () => {
//     const userInfoData = {
//       username,
//       password,
//       name,
//       email,
//     };

//     const dataUser = fetch(login, {
//       method: "POST",
//       mode: "no-cors",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userInfoData),
//     })
//       .then((res) => {
//         console.log("Data submitted successfully", res);
//         alert("Data submitted successfully");
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         alert("Error submitting data");
//       });

//     console.log(dataUser);
//   };

//   // const encryptUsername = (username) => {
//   //   return btoa(username);
//   // };

//   // const encryptPassword = (password) => {
//   //   return btoa(password);
//   // };

//   // const encryptEmail = (email) => {
//   //   return btoa(email);
//   // };

//   // const decryptUsername = (encryptUsername) => {
//   //   return atob(encryptUsername);
//   // };

//   // const decryptPassword = (encryptPassword) => {
//   //   return atob(encryptPassword);
//   // };

//   // const decryptEmail = (encryptEmail) => {
//   //   return atob(encryptEmail);
//   // };

//   // const userInfoData = {
//   //   username: encryptUsername(username),
//   //   password: encryptPassword(password),
//   //   name,
//   //   email: encryptEmail(email),
//   // };

//   // const userInfoData = {
//   //   username,
//   //   password,
//   //   name,
//   //   email,
//   // };

// return (
//   <Page>
//     <div className="w-full">
//       <div className="flex flex-col justify-center items-center mt-5">
//         <div className="text-xl font-bold pb-1">Đăng Ký</div>
//       </div>
//       <form className="flex flex-col px-8 pt-6 pb-8 mb-4">
//         {/* Họ và tên */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="account">
//             Họ và tên
//           </label>
//           <input
//             id="account"
//             type="text"
//             className="shadow appearance-none border focus:border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Họ và tên"
//           />
//         </div>

//         {/* Tên tài khoản */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="username">
//             Tài khoản
//           </label>
//           <input
//             id="username"
//             type="text"
//             className="shadow appearance-none border focus:border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Tên đăng nhập"
//           />
//         </div>

//         {/* Mật khẩu */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="password">
//             Mật khẩu
//           </label>
//           <input
//             id="password"
//             type="password"
//             className="shadow appearance-none border focus:border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Mật khẩu"
//           />
//         </div>

//         {/* email */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="email">
//             Email
//           </label>
//           <input
//             id="email"
//             type="email"
//             className="shadow appearance-none border focus:border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="email"
//           />
//         </div>
//         <div className="flex flex-col justify-center items-center">
//           <button
//             className="bg-pink-300 hover:bg-pink-400 rounded-lg shadow-lg p-5 w-1/3 h-25 font-bold text-sm"
//             id="buttonContainer"
//             onClick={() => {
//               addDataUser();
//               navigate("/signin");
//             }}>
//             Đăng Kí
//           </button>
//         </div>
//       </form>
//     </div>
//   </Page>
// );
// }

import React, { useState } from "react";
import { useNavigate } from "zmp-ui";

export default function Register() {
  const navigate = useNavigate();

  const login =
    "https://script.google.com/macros/s/AKfycbxowndRf6ULZb7nV94aatKDrtIC-1Hh-PknBsqBVlcUSpNZjxGi62po7h5QXGuPxx3Fhg/exec";

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
    <div className="w-full">
      <div className="form-group flex flex-col px-8 pt-6 pb-8 mb-4">
        <input
          type="text"
          className="form-control shadow appearance-none border focus:border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Họ và tên"
        />
        <input
          type="text"
          className="form-control shadow appearance-none border focus:border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Tên đăng nhập"
        />
        <input
          type="password"
          className="form-control form-control shadow appearance-none border focus:border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mật khẩu"
        />
        <input
          type="email"
          className="form-control form-control shadow appearance-none border focus:border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          id="loginButton"
          onClick={() => {
            addDataUser();
            navigate("/signin");
          }}>
          Đăng Kí
        </button>
      </div>
    </div>
  );
}
