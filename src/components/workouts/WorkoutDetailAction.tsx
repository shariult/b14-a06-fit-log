"use client";

import React, { useContext } from "react";
import Button from "@/components/ui/Button";
import { IconBookmark, IconCalendar } from "../ui/Icons";
import { Workout } from "@/types";
import { WorkoutContext } from "@/context/WorkoutContext";

type WorkoutDetailActionProps = {
  workout: Workout;
};

function WorkoutDetailAction(props: WorkoutDetailActionProps) {
  const workoutData = useContext(WorkoutContext);

  function planHandler() {
    workoutData.addPlan(props.workout);
  }
  function savedHandler() {
    workoutData.addSaved(props.workout);
  }

  return (
    <div className="flex flex-wrap gap-4">
      <Button
        el="btn"
        variant="primary"
        size="md"
        onClick={() => planHandler()}
      >
        <div className="flex justify-center items-center gap-2">
          <IconCalendar />
          <span className="text-sm">Add to today&apos;s plan</span>
        </div>
      </Button>
      <Button
        el="btn"
        variant="border"
        size="md"
        onClick={() => savedHandler()}
      >
        <div className="flex justify-center items-center gap-2">
          <IconBookmark />
          <span className="text-sm">Save for later</span>
        </div>
      </Button>
    </div>
  );
}

export default WorkoutDetailAction;
