import WorkoutCard from "@/components/workouts/WorkoutCard";
import { getWorkouts } from "@/lib/actions";
import React, { ComponentPropsWithoutRef } from "react";

type SectionWorkoutProps = {
  className?: string;
} & ComponentPropsWithoutRef<"section">;

async function SectionWorkout(props: SectionWorkoutProps) {
  const { className, ...otherProps } = props;

  const workoutArr = await getWorkouts();
  return (
    <section id="library" {...otherProps}>
      <div className={`container-center ${className}`}>
        {/* title part */}
        <h2 className="heading-2">The Library</h2>
        <p className="subtitle mb-12">
          Twelve lifts covering every major muscle group.
        </p>

        {/* workout-grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workoutArr.map((workoutItem) => (
            <WorkoutCard key={workoutItem.id} workout={workoutItem} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionWorkout;
