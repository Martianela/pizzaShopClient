import React, { useEffect, useState } from "react";

const Plan = ({ plan }) => {
  const { name, price, discount } = plan;

  const [heading, setHeading] = useState("Name");
  useEffect(() => {
    const decorateName = () => {
      return name.charAt(0).toUpperCase() + name.slice(1);
    };
    setHeading(decorateName());
  }, [name]);

  return (
    <div className=" max-w-[200px]  borderd rounded-md relative">
      <img
        src="https://cdn.pixabay.com/photo/2015/09/09/20/13/pizza-933032__340.jpg"
        alt="img"
        className="w-full object-contain "
      />
      <div className="p-1">
        <h1 className="absolute bg-red-600 text-white text-base rounded-full w-max p-1 px-2 top-2 right-2">
          {discount}%
        </h1>
        <div>
          <h1 className="font-semibold text-gray-700 text-lg ">{heading}</h1>
          <h1 className="text-xl text-green-400 font-medium">{price}/-</h1>
        </div>
      </div>
    </div>
  );
};

export default Plan;
