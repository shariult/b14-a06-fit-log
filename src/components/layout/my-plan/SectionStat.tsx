import React from "react";
import WorkoutStat from "@/components/workouts/WorkoutStat";
import { Workout } from "@/types";

type SectionStatProps = {
  workoutArr: Workout[];
};

function SectionStat(props: SectionStatProps) {
  const { totalExercise, totalMinutes, totalCalories } =
    props.workoutArr.reduce(
      (acc, item) => {
        return {
          totalExercise: props.workoutArr.length,
          totalMinutes: acc.totalMinutes + item.duration,
          totalCalories: acc.totalCalories + item.caloriesBurned,
        };
      },
      {
        totalExercise: 0,
        totalMinutes: 0,
        totalCalories: 0,
      },
    );
  return (
    <section className="flex flex-col gap-4 md:flex-row p-6 rounded-xl bg-gray-900/80">
      <WorkoutStat label="Exercises" stat={totalExercise} isPrimary={true} />
      <WorkoutStat label="Minutes" stat={totalMinutes} />
      <WorkoutStat label="Calories" stat={totalCalories} />
    </section>
  );
}

export default SectionStat;
