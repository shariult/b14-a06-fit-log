import SectionStat from "@/components/layout/my-plan/SectionStat";
import SectionWorkoutCart from "@/components/layout/my-plan/SectionWorkoutCart";
import React from "react";

function MyPlanIndex() {
  return (
    <>
      <div className="container-center py-12 flex flex-col gap-6">
        {/* header */}
        <header>
          <h2 className="heading-2">My Plan</h2>
          <p className="heading-2-sub">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </header>

        <SectionStat />

        <SectionWorkoutCart />
      </div>
    </>
  );
}

export default MyPlanIndex;
