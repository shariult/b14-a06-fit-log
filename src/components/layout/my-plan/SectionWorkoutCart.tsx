import WorkoutCartDropdown from "@/components/workouts/WorkoutCartDropdown";
import WorkoutCartEmpty from "@/components/workouts/WorkoutCartEmpty";
import WorkoutCartFilter from "@/components/workouts/WorkoutCartFilter";
import WorkoutCartList from "@/components/workouts/WorkoutCartList";
import React from "react";

function SectionWorkoutCart() {
  return (
    <section className="py-12 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <WorkoutCartFilter />
        <WorkoutCartDropdown />
      </div>
      <WorkoutCartList />
      {/* <WorkoutCartEmpty /> */}
    </section>
  );
}

export default SectionWorkoutCart;
