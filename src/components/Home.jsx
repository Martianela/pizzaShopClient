import React from "react";
import Navbar from "../components/Navbar";
import homeImage from "../resourse/pizza1.jpg";
const Home = () => {
  return (
    <div>
      <div className="relativ">
        <img
          src={homeImage}
          alt="img"
          className="absolute -z-10 top-0 left-0 h-screen w-full object-cover"
        />
        <div className="absolutes bg-black/40 w-full h-screen">
          <div className="text-white">
            <Navbar />
          </div>
          <div className="text-white text-center sm:text-left px-4 sm:mt-[200px] mt-[100px] w-full  flex flex-col justify-center">
            <h1 className="text-[70px] sm:font-[800] font-[700]  lg:ml-16">
              Satisfy your Cravings <br /> with every slice
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
