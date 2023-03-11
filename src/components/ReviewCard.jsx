import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { deleteUserReview } from "../utility";

const ReviewCard = ({ review: userReviews }) => {
  const dummyReview = {
    review_id: "",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    plan: "Happy Meal",
    date: "12 jan 2023",
  };
  const [review, setReview] = useState(dummyReview);
  useEffect(() => {
    if (userReviews) {
      setReview({
        review_id: userReviews?._id,
        review: userReviews?.review,
        plan: userReviews?.plan?.name,
        date: userReviews?.createdAt,
      });
    }
  }, [userReviews]);

  return (
    <div className="border border-white rounded-lg px-2 py-6 text-xl font-thin relative">
      <button
        onClick={() => deleteUserReview(review?.review_id)}
        className="px-4 absolute top-2 right-2 text-sm bg-red-600 py-1 rounded-full"
      >
        Delete
      </button>{" "}
      <Link
        to="/"
        className="px-1 absolute top-2 right-24 text-sm bg-red-600 py-1 rounded-full"
      >
        <AiFillEdit size={20} />
      </Link>
      <p className="text-base mt-4">{review?.review}</p>
      <p className="text-sm mt-4 flex gap-6 text-gray-300">
        <span>{review?.plan}</span>
        <span>{review?.date}</span>
      </p>
    </div>
  );
};

export default ReviewCard;
