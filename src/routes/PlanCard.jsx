import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import allplanscard from "../resourse/plancard1.jpg";
import {
  createReview,
  getPlanById,
  getReviewById,
  getUserInfo,
} from "../utility";
const PlanCard = ({ foodItem }) => {
  const dummyPlan = {
    id: "",
    name: "Happy Meal",
    duration: "10",
    discount: 23,
    price: 1000,
    ratingAverage: "5",
  };
  const { id } = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { _id } = await getUserInfo();
    const prams = {
      review: e.target.review.value,
      rating: e.target.rating.value,
      plan: id,
      user: _id,
    };
    await createReview(prams);
  };
  useEffect(() => {
    async function getPlan() {
      const plan = await getPlanById(id);
      console.log("plan", plan);

      setPlan(plan?.data.plans);
    }
    async function getReview() {
      const review = await getReviewById(id);
      console.log("review", review);
      setReviews(review?.data.data);
    }
    getReview();
    getPlan();
  }, [id]);
  const [plan, setPlan] = useState(dummyPlan);
  const [reviews, setReviews] = useState([]);
  return (
    <div>
      <div className="w-full sm:w-[90%] lg:w-[70%] mx-auto sm:flex">
        <div className="sm:w-[50%] lg:w-[35%] p-3 ">
          <img
            src={allplanscard}
            alt=""
            className="w-full object-cover sm:h-[70vh] h-[50vh]"
          />{" "}
        </div>
        <div className="pl-4  sm:w-[50%] lg:w-[65%]  px-4">
          <h1 className="font-medium text-5xl mt-5 mb-2 font-serif">
            {plan?.name}
          </h1>
          <p className="font-bold text-gray-500">
            <span className="text-white bg-green-600 px-2 py-0.5 mr-2 rounded-md">
              {plan?.ratingAverage}
            </span>
            rating out of 10
          </p>
          <h1 className="text-red-600 font-medium text-xl mt-3 ">Price</h1>
          <p className="text-2xl font-medium">₹{plan?.price}</p>
          <div className="  my-3 text-base font-normal">
            <h1 className="text-xl ">Available discount</h1>
            <li className="text-gray-700">{plan?.discount}% off</li>
          </div>
          <h1 className="text-xl ">About Plan</h1>
          <li>{plan?.duration} days</li>
          <p className="bg-gray-200 text-gray-600 text-sm p-2 border-l rounded-sm mt-4 border-red-500">
            Celebrate good times or enjoy a cozy night in with our hot, fresh
            pizza, the perfect comfort food for any occasion.
          </p>
          <button className=" bg-gray-700 mt-8 px-10 py-3 rounded-sm text-white text-lg ">
            Order now
          </button>
        </div>
      </div>
      <div className="w-full sm:w-[90%] lg:w-[70%] mx-auto px-2 mb-10">
        <h1 className="text-4xl my-5 font-semibold text-gray-800">
          Plan Reviews
        </h1>
        <div className="w-full mb-3 bg-gray-100 p-2 rounded-md">
          <h1 className="text-xl font-normal text-gray-700 ">
            Share your experience with us
          </h1>
          <form onSubmit={handleSubmit} className="w-full py-2">
            <input
              type="text"
              name="review"
              placeholder="write from here"
              id=""
              className="border-b-2 bg-inherit mb-3 w-full border-black/20 px-2 py-3"
            />
            <label className=" " htmlFor="rating">
              Rate our meal 1-10
            </label>
            <input
              type="range"
              name="rating"
              min="0"
              max="10"
              required
              className="w-full"
            />
            <button
              type="submit"
              className="bg-red-500 mt-2 text-lg px-4 py-1 rounded-md text-white"
            >
              post
            </button>
          </form>
        </div>
        <div>
          {!reviews.length
            ? "No reviews yet"
            : reviews?.map((review, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-100 border-l border-red-600 px-2 py-2"
                  >
                    <div className="flex items-center gap-3 ">
                      <img
                        className="w-12 h-12 rounded-[100%] p-1 object-cover"
                        src={
                          "https://images.pexels.com/photos/14211817/pexels-photo-14211817.jpeg"
                        }
                        alt="user"
                      />
                      <h1 className="text-2xl font-semibold text-gray-700">
                        {review?.user.name}
                      </h1>
                    </div>
                    <p className="text-sm text-gray-700">{review?.review}</p>
                    <h1 className="text-xs text-gray-500">
                      {review?.createdAt}
                    </h1>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
