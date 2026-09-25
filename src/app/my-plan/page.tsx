import SectionStat from "@/components/layout/my-plan/SectionStat";
import React from "react";

function MyPlanIndex() {
  return (
    <>
      <div className="container-center py-12">
        {/* header */}
        <header className="mb-6">
          <h2 className="heading-2">My Plan</h2>
          <p className="heading-2-sub">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </header>

        <SectionStat />
      </div>
    </>
  );
}

export default MyPlanIndex;
