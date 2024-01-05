import React from "react";
import { PulseLoader } from "react-spinners";

import Logo from "../assets/logo.png";

export default function LoadingScreen() {
  return (
    <div className="bg-pink-100 h-screen flex flex-col items-center justify-center">
      <div className="flex items-center justify-center mb-4">
        <img src={Logo} alt="logo" className="w-16" />
        <h1 className="text-3xl text-purple-700 font-bold text-center">HNAG</h1>
      </div>
      <PulseLoader
        color="#B95CF4"
        speedMultiplier={0.85}
        margin={5}
        size={10}
      />
    </div>
  );
}
