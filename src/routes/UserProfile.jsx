import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import ReviewCard from "../components/ReviewCard";
import imgbackground from "../resourse/pizza3.jpg";
import { getReviewByUserId, getUserInfo } from "../utility";
const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [userReview, setUserReview] = useState([]);
  useEffect(() => {
    async function getUserData() {
      const userdata = await getUserInfo();
      //  console.log(userdata);
      if (userdata) {
        setUser(userdata);
      }
    }
    async function getUserReview() {
      const review = await getReviewByUserId(user?._id);
      // console.log(review);
      if (review) {
        let newRev = review?.data?.data.filter((data) => {
          return data?.user?._id === user?._id;
        });
        if (newRev) {
          setUserReview(newRev);
        }
      }
    }
    getUserData();
    getUserReview();
  }, [user?._id]);
  return (
    <div>
      <img
        src={imgbackground}
        alt="img"
        className="w-full h-screen object-cover fixed "
      />
      <div className="absolute top-0 w-full bg-black/30">
        <section className="text-white sticky z-10 top-0 w-full">
          <Navbar />
        </section>
        <section className=" backdrop-blur-sm w-[70%] mx-auto my-10 p-10 py-12 rounded-lg bg-black/60">
          <Profile user={user} />
        </section>
        <section className="text-white backdrop-blur-md bg-black/60 sm:w-[80%] rounded-lg w-[90%] mx-auto p-10 ">
          <h1 className="text-3xl font-base">Your reviews</h1>
          <div className="my-5  flex flex-col gap-10">
            {userReview
              ? userReview?.map((review, index) => {
                  return <ReviewCard key={index} review={review} />;
                })
              : "no review yet"}
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
