import WorkoutStat from "@/components/workouts/WorkoutStat";
import React from "react";

function SectionStat() {
  return (
    <section className="flex p-6 rounded-xl bg-gray-900/80">
      <WorkoutStat label="Exercises" stat={2} isPrimary={true} />
      <WorkoutStat label="Minutes" stat={22} />
      <WorkoutStat label="Calories" stat={190} />
    </section>
  );
}

export default SectionStat;
