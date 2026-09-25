import { Workout } from "@/types";
import React from "react";
type WorkoutInstructionsListProps = {
  workout: Workout;
};

function WorkoutInstructionsList(props: WorkoutInstructionsListProps) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg uppercase font-bold">Instructions</h3>
      <ol className="list-decimal list-inside flex flex-col gap-2 text-gray-300 text-sm">
        {props.workout.instructions.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default WorkoutInstructionsList;
