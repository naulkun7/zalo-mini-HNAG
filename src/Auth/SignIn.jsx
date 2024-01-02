import React, { Component } from "react";
import { https } from "./config";

export default class SignIn extends Component {
  state = {
    taiKhoan: "admin123",
    matKhau: "admin123",
  };

  handleLogin = (userData) => {
    // console.log(this.state);
    https
      .post("", userData)
      .then((result) => {
        console.log("Login succeed", result.data);
      })
      .catch((err) => {
        console.log("Login fail", err);
      });
  };

  render() {
    return (
      <div>
        <div className="form-group flex flex-col">
          <input
            type="text"
            className="form-control mb-5"
            id=""
            placeholder=""
          />
          <input
            type="password"
            className="form-control mb-5"
            id=""
            placeholder=""
          />
          <button
            className="bg-pink-300 hover:bg-pink-400 rounded-lg shadow-lg p-5 w-1/3 h-25 font-bold text-sm"
            onClick={this.handleLogin}>
            Login
          </button>
        </div>
      </div>
    );
  }
}
