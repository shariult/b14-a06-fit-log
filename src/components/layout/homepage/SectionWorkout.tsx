import WorkoutCard from "@/components/ui/workouts/WorkoutCard";
import React, { ComponentPropsWithoutRef } from "react";

type SectionWorkoutProps = {
  className?: string;
} & ComponentPropsWithoutRef<"section">;

function SectionWorkout(props: SectionWorkoutProps) {
  const { className, ...otherProps } = props;

  return (
    <section {...otherProps}>
      <div className={`container-center ${className}`}>
        {/* title part */}
        <h2 className="mb-1 text-2xl md:text-4xl font-black font-oswald uppercase">
          The Library
        </h2>
        <p className="text-gray-500 text-sm md:text-base mb-12">
          Twelve lifts covering every major muscle group.
        </p>

        {/* workout-grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <WorkoutCard />
          <WorkoutCard />
          <WorkoutCard />
          <WorkoutCard />
        </div>
      </div>
    </section>
  );
}

export default SectionWorkout;
