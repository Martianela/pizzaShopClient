import React from "react";
import Login from "../components/Login";
import loginImage from "../resourse/pizza2.jpg";
const loginPage = () => {
  return (
    <div className="relative">
      <img
        src={loginImage}
        alt="img"
        className="h-screen w-full object-cover"
      />
      <div className="absolute w-full h-screen z-10 top-0 left-0 bg-black/30 flex flex-col justify-center">
        <Login />
      </div>
    </div>
  );
};

export default loginPage;
