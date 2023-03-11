import React, { useEffect, useState } from "react";
import allplanscard from "../resourse/allplanscard.jpg";
const AllPlanCard = ({ foodItem }) => {
  const dummyPlan = {
    id: "",
    name: "Happy Meal",
    duration: "10",
    discount: 23,
    price: 1000,
    rating: "5",
  };
  console.log(foodItem);
  const [plan, setPlan] = useState(dummyPlan);
  useEffect(() => {
    if (foodItem) {
      setPlan({
        id: foodItem._id,
        name: foodItem.name,
        duration: foodItem.duration,
        discount: foodItem.discount,
        price: foodItem.price,
        rating: foodItem.ratingAverage,
      });
    }
  }, [foodItem]);
  return (
    <div className="flex w-full">
      <div className="w-[30%] py-1">
        <img src={allplanscard} alt="" className="w-full" />
      </div>
      <div className="pl-4 w-[70%] flex flex-col justify-center px-4">
        <h1 className="font-medium text-4xl  font-serif">{plan?.name}</h1>
        <p className="text-xs text-gray-500 font-light my-2 font-serif">
          Celebrate good times or enjoy a cozy night in with our hot, fresh
          pizza, the perfect comfort food for any occasion.
        </p>
        <p className="font-bold text-gray-500">{plan?.rating}/10</p>
        <div className="flex gap-4 my-1 text-sm justify-between items-center text-gray-700 font-light">
          <h1 className="text-lg text-green-400 font-bold">{plan?.price}</h1>{" "}
          <h4 className="font-medium">{plan?.duration} days</h4>{" "}
          <button className=" bg-red-500 px-2 py-1 rounded-sm text-white text-sm ">
            Order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllPlanCard;
