import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Plan from "../components/Plan";
import Preview from "../components/Preview";
import { fetchData } from "../utility";

const HomePage = () => {
  const [topReview, setTopReview] = useState(null);
  const [topPlans, setTopPlans] = useState(null);
  async function getPlans() {
    const { data } = await fetchData("plans/top3");
    setTopPlans(data.data);
  }
  async function getReviews() {
    const data = await fetchData("reviews/top3");
    setTopReview(data.data.data);
  }
  useEffect(() => {
    getPlans();
    getReviews();
  }, []);
  return (
    <div className="">
      <Home />
      <div className="bg-white ">
        <h1 className="text-4xl font-normal text-red-500 mt-5 ml-2">
          Some of our top plans
        </h1>
        <div className="flex gap-10 flex-wrap py-5 justify-center">
          {topPlans &&
            topPlans.map((plan, index) => {
              return (
                <>
                  <a href={`/plans/plan/${plan?._id}`}>
                    <Plan plan={plan} />
                  </a>
                </>
              );
            })}
        </div>
        <h1 className=" w-full text-end mb-2">
          <a
            href="/plans/allplans"
            className="px-3 py-1 hover:underline rounded bg-red-600 text-sm font-light text-white "
          >
            View More-:
          </a>
        </h1>
      </div>

      <div className="bg-gray-100 flex gap-10  py-10 flex-wrap justify-center">
        {topReview &&
          topReview.map((review, index) => {
            return (
              <>
                <a href="/">
                  <Preview review={review} />
                </a>
              </>
            );
          })}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
