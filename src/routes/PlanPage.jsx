import React from "react";
import Navbar from "../components/Navbar";
import PlanCard from "./PlanCard";

const PlanPage = () => {
  return (
    <div>
      <section className="">
        <Navbar />
      </section>
      <section>
        <PlanCard />
      </section>
    </div>
  );
};

export default PlanPage;
