import React from "react";
import { MdDateRange, MdFastfood } from "react-icons/md";

const Preview = ({ review }) => {
  const { rating, review: rev, user, plan, createdAt } = review;
  const { name: userName } = user;
  const { name: planName } = plan;

  return (
    <div className=" text-center items-center max-w-[300px] rounded-lg overflow-hidden ">
      <div className="bg-[#C0DEFF] pt-10">
        <img
          src="https://cdn.pixabay.com/photo/2017/05/31/09/09/woman-2359562__340.jpg"
          alt="img"
          className="rounded-[100%] w-24 h-24 object-cover relative top-12 mx-auto"
        />
      </div>
      <div className="bg-white pt-16 px-10 pb-10 ">
        <h1 className="mb-4 text-2xl font-serif">{userName}</h1>
        <p className="text-sm text-gray-500 ">{rev}</p>
        <div className=" mt-2">
          <span className="flex gap-1 text-sm text-red-400 font-medium items-center">
            <MdFastfood />
            {planName}
          </span>
          <span className="flex text-gray-400 gap-1 text-sm items-center mt-2">
            <MdDateRange />
            {createdAt}
          </span>
        </div>
        <h4 className="mt-2 font-medium tracking-widest text-2xl text-green-400">
          {rating}★
        </h4>
      </div>
    </div>
  );
};

export default Preview;
