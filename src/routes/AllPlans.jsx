import React, { useEffect } from "react";
import { useState } from "react";
import AllPlanCard from "../components/AllPlanCard";
import Navbar from "../components/Navbar";
import planImg from "../resourse/allplanspizza.jpg";
import { getAllPlans } from "../utility";
const AllPlans = () => {
  const [plans, setPlans] = useState([]);
  useEffect(() => {
    async function getPlans() {
      try {
        const plansData = await getAllPlans();
        if (plansData) {
          setPlans(plansData?.plans);
        }
      } catch (error) {
        window.postMessage(error.message);
      }
    }
    getPlans();
  }, []);
  return (
    <div className="bg-black/50">
      <img
        src={planImg}
        alt="img"
        className="w-full h-screen object-cover fixed -z-10"
      />
      <section className="text-white">
        <Navbar />
      </section>
      <section className="w-full h-[30vh] flex flex-col justify-center">
        <h1 className="text-3xl text-white font-light mx-auto">AllPlans</h1>
      </section>
      <section className="px-2 h-full py-4 bg-white/80 rounded-t-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {plans?.map((plan, index) => {
          return (
            <a href={`/plans/plan/${plan._id}`}>
              <AllPlanCard key={index} foodItem={plan} />
            </a>
          );
        })}
      </section>
    </div>
  );
};

export default AllPlans;
