import React from "react";
import SectionWorkoutDetails from "@/components/layout/workout-show/SectionWorkoutDetails";
import { getWorkout } from "@/lib/actions";
import { notFound } from "next/navigation";

type WorkoutShowProps = {
  children: React.ReactNode;
  params: Promise<{ wId: string }>;
};

async function WorkoutShow(props: WorkoutShowProps) {
  const { wId } = await props.params;

  const workout = await getWorkout(wId);

  return (
    <>
      {workout && <SectionWorkoutDetails workout={workout} />}
      {!workout && notFound()}
    </>
  );
}

export default WorkoutShow;
