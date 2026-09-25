import React from "react";
import SectionWorkoutDetails from "@/components/layout/workout-show/SectionWorkout";

type WorkoutShowProps = {
  children: React.ReactNode;
  params: Promise<{ wId: string }>;
};

async function WorkoutShow(props: WorkoutShowProps) {
  const { wId } = await props.params;
  console.log(wId);

  return (
    <>
      <SectionWorkoutDetails />
    </>
  );
}

export default WorkoutShow;
